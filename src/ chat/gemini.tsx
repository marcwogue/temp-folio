import axios from "axios";
import { useState } from "react";

interface Message {
  sender: "user" | "bot";
  text: string;
}

const Gemini = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const API_KEY ="AIzaSyCANKefcI1op4bFlUEZWIqtllGoGZtu1Qg";
  const API_URL =
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=";

  const sendMessage = async () => {
    if (!input.trim()) return;

    setIsLoading(true);

    // Ajoute le message utilisateur
    setMessages((prev) => [...prev, { sender: "user", text: input }]);

    try {
      const res = await axios.post(
        API_URL + API_KEY,
        {
          contents: [{ parts: [{ text: input }] }],
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const text =
        res.data.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Pas de réponse.";

      setMessages((prev) => [...prev, { sender: "bot", text }]);
    } catch (error) {
      console.error("Erreur API :", error);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Erreur lors de la requête." },
      ]);
    } finally {
      setIsLoading(false);
      setInput("");
    }
  };

  return (
    <div style={{ padding: "1rem", fontFamily: "Arial" }}>
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "6px",
          padding: "1rem",
          maxHeight: "400px",
          overflowY: "auto",
          marginBottom: "1rem",
        }}
      >
        {messages.map((m, i) => (
          <div
            key={i}
            style={{
              textAlign: m.sender === "user" ? "right" : "left",
              margin: "0.5rem 0",
            }}
          >
            <span
              style={{
                display: "inline-block",
                background: m.sender === "user" ? "#cce5ff" : "#e2e3e5",
                padding: "0.5rem",
                borderRadius: "12px",
              }}
            >
              {m.text}
            </span>
          </div>
        ))}
      </div>

      <div style={{ display: "flex" }}>
        <input
          style={{ flex: 1, padding: "0.5rem" }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Pose ta question..."
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          disabled={isLoading}
        />
        <button
          style={{
            padding: "0.5rem 1rem",
            marginLeft: "0.5rem",
          }}
          onClick={sendMessage}
          disabled={isLoading}
        >
          {isLoading ? "..." : "Envoyer"}
        </button>
      </div>
    </div>
  );
};

export default Gemini;
