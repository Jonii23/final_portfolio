import React, { createContext, useContext, useEffect, useRef, useState } from "react";

const ChatbotContext = createContext();

export function ChatbotProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(() => [
    { id: "bot-1", sender: "bot", text: "Hi — I'm Thando's assistant. Ask me about projects, skills, or contact." }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const idCounter = useRef(1000);

  useEffect(() => {
    // optional: persist messages
    try {
      localStorage.setItem("chat_messages_v1", JSON.stringify(messages));
    } catch {}
  }, [messages]);

  function pushMessage(msg) {
    setMessages((prev) => [...prev, { ...msg, id: `msg-${++idCounter.current}` }]);
  }

  function clearMessages() {
    setMessages([]);
    try { localStorage.removeItem("chat_messages_v1"); } catch {}
  }

  async function processMessage(text) {
    const t = (text || "").toLowerCase().trim();

    setIsTyping(true);
    // small typing simulation based on length
    await new Promise((r) => setTimeout(r, 400 + Math.min(1200, t.length * 15)));

    // keyword-based routing & responses
    if (/(^hi\b|hello|hey)/.test(t)) {
      pushMessage({ sender: "bot", text: "Hey! 👋 Ask about projects, skills, CV, or contact." });
    } else if (/(project|repo|github|portfolio)/.test(t)) {
      pushMessage({ sender: "bot", text: "Opening projects..." });
      // scroll after reply
      const el = document.getElementById("projects");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else if (/(skill|stack|tech|technolog)/.test(t)) {
      pushMessage({ sender: "bot", text: "Taking you to skills..." });
      const el = document.getElementById("skills");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else if (/(contact|email|hire|reach)/.test(t)) {
      pushMessage({ sender: "bot", text: "Opening contact..." });
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else if (/(cv|resume|download)/.test(t)) {
      pushMessage({ sender: "bot", text: "You can download the CV from the About page." });
      const el = document.getElementById("about");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else if (/(thanks|thank you|ty)\b/.test(t)) {
      pushMessage({ sender: "bot", text: "You're welcome — glad I could help! 😊" });
    } else if (t.length < 6) {
      pushMessage({ sender: "bot", text: "Could you say a little more? e.g. 'show projects'." });
    } else {
      // fallback: echo helpful prompt
      pushMessage({
        sender: "bot",
        text:
          "I didn't fully get that. Try: 'projects', 'skills', 'contact', or 'download CV'."
      });
    }

    setIsTyping(false);
  }

  function sendUserMessage(text) {
    if (!text || !text.trim()) return;
    pushMessage({ sender: "user", text });
    processMessage(text).catch((e) => {
      setIsTyping(false);
      pushMessage({ sender: "bot", text: "Sorry, something went wrong." });
      console.error(e);
    });
  }

  return (
    <ChatbotContext.Provider
      value={{
        open,
        setOpen,
        messages,
        sendUserMessage,
        isTyping,
        clearMessages,
        pushMessage,
      }}
    >
      {children}
    </ChatbotContext.Provider>
  );
}

export function useChatbot() {
  return useContext(ChatbotContext);
}

