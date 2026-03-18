import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";

import { AuthProvider } from "./context/AuthContext";  // REQUIRED
import { ChatbotProvider } from "./components/Chatbot/ChatbotContext";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>          {/* MUST wrap EVERYTHING */}
      <ChatbotProvider>
        <RouterProvider router={router} />
      </ChatbotProvider>
    </AuthProvider>
  </React.StrictMode>
);
