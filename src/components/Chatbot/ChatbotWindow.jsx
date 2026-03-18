import React, { useEffect, useRef } from "react";
import { useChatbot } from "./ChatbotContext";

export default function ChatbotWindow() {
  const { open, setOpen, messages, sendUserMessage, isTyping, clearMessages } = useChatbot();
  const inputRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
  }, [open]);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight + 300;
    }
  }, [messages, isTyping]);

  if (!open) return null;

  function handleSubmit(e) {
    e.preventDefault();
    const v = inputRef.current.value.trim();
    if (!v) return;
    sendUserMessage(v);
    inputRef.current.value = "";
    inputRef.current.focus();
  }

  return (
    <div className="fixed bottom-20 right-6 z-50 w-[340px] max-w-full h-[480px] bg-white dark:bg-gray-900 border rounded-xl shadow-lg flex flex-col overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b">
        <div>
          <div className="font-semibold">Thando's Assistant</div>
          <div className="text-xs text-gray-500">Ask about projects, skills, or contact</div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => clearMessages()}
            title="Clear chat"
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            Clear
          </button>

          <button
            onClick={() => setOpen(false)}
            title="Close"
            className="px-2 py-1 rounded hover:bg-gray-100"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Message list */}
      <div ref={listRef} className="flex-1 overflow-y-auto p-4 space-y-3 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        {messages.map((m) => (
          <div key={m.id} className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[80%] px-3 py-2 rounded-lg ${m.sender === "user" ? "bg-indigo-600 text-white" : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100"}`}
            >
              {m.text}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700">
              <span className="inline-block animate-pulse">• • •</span>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="px-4 py-3 border-t flex items-center gap-3">
        <input
          ref={inputRef}
          type="text"
          placeholder="Type a question (e.g., 'show projects')"
          className="flex-1 px-3 py-2 border rounded-lg bg-white dark:bg-gray-800"
          aria-label="Chat input"
        />
        <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-lg">
          Send
        </button>
      </form>
    </div>
  );
}
