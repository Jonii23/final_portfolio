import React from "react";
import { useChatbot } from "./ChatbotContext"; // local relative import

export default function ChatbotButton() {
  const { open, setOpen } = useChatbot();

  return (
    <button
      onClick={() => setOpen(!open)}
      aria-label={open ? "Close chat" : "Open chat"}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-full shadow-lg bg-indigo-600 text-white hover:scale-105 transition-transform"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="inline-block">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span className="hidden sm:inline-block font-medium">Chat</span>
    </button>
  );
}
