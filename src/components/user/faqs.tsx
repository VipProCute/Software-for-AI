"use client";
import React, { useState } from "react";
import { ChatPage } from "./chatbot";
import { BadgeHelp } from "lucide-react";
import { Button } from "@/components/ui/button";
export function FAQ() {
  const [showChat, setShowChat] = useState(false);

  return (
    <div>
      {showChat && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
          <ChatPage />
        </div>
      )}

      <Button
        variant="ringHover"
        className="bg-indigo-700"
        size="sm"
        style={{ position: "fixed", bottom: "10px", right: "10px" }}
        onClick={() => setShowChat((prevShowChat) => !prevShowChat)}
      >
        <BadgeHelp className="mr-2 h-8 w-8" />
        Hỏi đáp
      </Button>
    </div>
  );
}
