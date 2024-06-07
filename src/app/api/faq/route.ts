// app/api/chat/route.js
import { HumanMessage, AIMessage } from "@langchain/core/messages";
import { answerFromVectorStore } from "@/app/faq/faq";

export async function POST(request) {
  const { chatHistory, input } = await request.json();

  // Convert the chatHistory to an array of HumanMessage and AIMessage objects
  const formattedChatHistory = chatHistory.map((message) => {
    if (message.role === "user") {
      return new HumanMessage(message.content);
    } else {
      return new AIMessage(message.content);
    }
  });

  const response = await answerFromVectorStore(formattedChatHistory, input);
  return new Response(JSON.stringify(response), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
