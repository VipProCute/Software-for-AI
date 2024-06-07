import { ChatCohere } from "@langchain/cohere";
import { createStuffDocumentsChain } from "langchain/chains/combine_documents";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { CohereEmbeddings } from "@langchain/cohere";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { createRetrievalChain } from "langchain/chains/retrieval";
import { createHistoryAwareRetriever } from "langchain/chains/history_aware_retriever";
import { MessagesPlaceholder } from "@langchain/core/prompts";
import { Document } from "langchain/document";

async function getData() {
  const res = await fetch("http://localhost:1337/api/book-faqs", {
    next: { revalidate: 2 },
  });

  return res.json();
}

const extractQuestionsAndAnswers = (data) => {
  return data
    .map((item) => {
      return item.attributes.item.map((faq) => {
        return {
          question: faq.question,
          answer: faq.answer,
        };
      });
    })
    .flat();
};

// Populate Vector Store
const populateVectorStore = async () => {
  const res = await getData();
  const data = res.data;
  const questionsAndAnswers = extractQuestionsAndAnswers(data);
  const docs = questionsAndAnswers.map(({ question, answer }) => {
    return new Document({
      pageContent: `${question}\n${answer}`,
      metadata: { question },
    });
  });

  // Text Splitter
  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 128,
    chunkOverlap: 20,
  });
  const splitDocs = await splitter.splitDocuments(docs);
  const embeddings = new CohereEmbeddings({
    apiKey: process.env.COHERE_API_KEY,
    model: "embed-multilingual-light-v3.0",
    inputType: "search_document",
  });
  const vectorstore = await MemoryVectorStore.fromDocuments(
    splitDocs,
    embeddings
  );
  return vectorstore;
};

const model = new ChatCohere({
  apiKey: "jhEWAvxDvlRNHBO7wERU95N7N9iGX98UxDrqCdUv", // Default
  model: "c4ai-aya-23", // Default
  temperature: 0.1,
});

const answerFromVectorStore = async (chatHistory, input) => {
  const vectorstore = await populateVectorStore();

  // Create a retriever from vector store
  const retriever = vectorstore.asRetriever({ k: 4 });

  // Create a HistoryAwareRetriever which will be responsible for
  // generating a search query based on both the user input and
  // the chat history
  const retrieverPrompt = ChatPromptTemplate.fromMessages([
    new MessagesPlaceholder("chat_history"),
    ["user", "{input}"],
    [
      "user",
      "Với cuộc trò chuyện trên, hãy tạo một truy vấn tìm kiếm để tra cứu nhằm lấy thông tin liên quan đến cuộc trò chuyện",
    ],
  ]);

  // This chain will return a list of documents from the vector store
  const retrieverChain = await createHistoryAwareRetriever({
    llm: model,
    retriever,
    rephrasePrompt: retrieverPrompt,
  });

  // Define the prompt for the final chain
  const prompt = ChatPromptTemplate.fromMessages([
    [
      "system",
      `Bạn là trợ lý Câu hỏi thường gặp về vấn đề sách. Kiến thức của bạn bị giới hạn ở thông tin tôi cung cấp trong ngữ cảnh. 
       Bạn sẽ trả lời câu hỏi này chỉ dựa trên thông tin này: {context}. Đừng tạo nên câu trả lời của riêng bạn.
       Nếu câu trả lời không có trong thông tin, bạn sẽ trả lời 'Tôi không có thông tin đó.'
       Nếu một câu hỏi nằm ngoài ngữ cảnh của phỏng vấn xin việc ví dụ như kể chuyện, bạn sẽ trả lời 'Tôi chỉ có thể trợ giúp những câu hỏi liên quan đến sách`,
    ],
    new MessagesPlaceholder("chat_history"),
    ["user", "{input}"],
  ]);

  // the createStuffDocumentsChain
  const chain = await createStuffDocumentsChain({
    llm: model,
    prompt: prompt,
  });

  // Create the conversation chain, which will combine the retrieverChain
  // and combineStuffChain to get an answer
  const conversationChain = await createRetrievalChain({
    combineDocsChain: chain,
    retriever: retrieverChain,
  });

  // Get the response
  const response = await conversationChain.invoke({
    chat_history: chatHistory,
    input: input,
  });

  // Log the response to the server console
  console.log("Server response:", response);
  return response;
};

export { answerFromVectorStore };
