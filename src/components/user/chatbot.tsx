// // app/page.tsx
"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function ChatPage() {
  const [chatHistory, setChatHistory] = useState([]);
  const [input, setInput] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/faq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ chatHistory, input }),
      });

      if (response.ok) {
        const data = await response.json();
        setChatHistory([
          ...chatHistory,
          { role: "user", content: input },
          { role: "assistant", content: data.answer },
        ]);
        setInput("");
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="bg-slate-200 w-3/12 h-1/12 shadow-2xl rounded-lg fixed bottom-0 right-0 m-6 ">
      <div id="header" className="bg-slate-700 text-white py-2 px-3 relative">
        <h1 className="text-2xl font-['Finger_Paint']">Trợ lý BoBo</h1>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-0 right-0 m-4"
        >
          X
        </button>{" "}
        {/* New close button */}
      </div>
      <div
        id="message-section"
        className="h-[24vw] p-6 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100"
      >
        {chatHistory.map((message, index) => (
          <div
            key={index}
            className={`message ${
              message.role === "user"
                ? "bg-black text-white float-right"
                : "bg-white text-black float-left"
            } border border-gray-700 rounded-lg p-4 mb-4 max-w-[85%] break-words`}
          >
            <span>{message.content}</span>
          </div>
        ))}
      </div>
      <div id="input-section" className="p-6 flex items-end">
        <input
          id="input"
          type="text"
          placeholder="Type a message"
          autoComplete="off"
          autoFocus
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow border-b border-black outline-none"
        />
        <Button className="send ml-2 h-6" onClick={handleSubmit}>
          Gửi
        </Button>
      </div>
    </div>
  );
}
