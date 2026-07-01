"use client";

import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Bot, User, Send, Loader2 } from "lucide-react";

export default function AIChat({
  resumeText,
  analysis,
  jdResult,
}) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hi! 👋 I'm DevTrack AI. Ask me anything about resumes, ATS, job descriptions, interview preparation, projects or your career.",
    },
  ]);

  const [loading, setLoading] = useState(false);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function sendMessage() {
    if (!message.trim() || loading) return;

    const userMessage = {
      role: "user",
      text: message,
    };

    setMessages((prev) => [...prev, userMessage]);

    const currentMessage = message;

    setMessage("");

    setLoading(true);
    console.log({
  resumeText,
  analysis,
  jdResult,
});

    try {
      const res = await axios.post(
  "http://127.0.0.1:8000/ai-chat",
  {
    message: currentMessage,
    resume_text: resumeText,
    analysis: analysis,
    jd_result: jdResult,
  }
);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: res.data.response,
        },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "Something went wrong while contacting AI.",
        },
      ]);
    }

    setLoading(false);
  }

  return (
    <div className="mt-8 rounded-3xl border border-zinc-800 bg-zinc-900">

      <div className="border-b border-zinc-800 p-6">

        <h2 className="flex items-center gap-3 text-2xl font-bold text-white">
          <Bot className="text-blue-500" />
          AI Career Copilot
        </h2>

        <p className="mt-2 text-zinc-400">
          Ask anything about resumes, ATS, interviews or software engineering.
        </p>

      </div>

      <div className="h-[500px] overflow-y-auto p-6 space-y-5">

        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.role === "user"
                ? "justify-end"
                : "justify-start"
            }`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-5 py-4 whitespace-pre-wrap ${
                msg.role === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-zinc-800 text-zinc-200"
              }`}
            >
              <div className="mb-2 flex items-center gap-2 text-sm font-semibold">

                {msg.role === "assistant" ? (
                  <>
                    <Bot size={16} />
                    DevTrack AI
                  </>
                ) : (
                  <>
                    <User size={16} />
                    You
                  </>
                )}

              </div>

              {msg.text}

            </div>
          </div>
        ))}

        {loading && (
          <div className="flex items-center gap-3 text-zinc-400">
            <Loader2 className="animate-spin" size={18} />
            DevTrack AI is thinking...
          </div>
        )}

        <div ref={bottomRef} />

      </div>

      <div className="border-t border-zinc-800 p-5">

        <div className="flex gap-3">

          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
            placeholder="Ask anything..."
            className="flex-1 rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none focus:border-blue-500"
          />

          <button
            onClick={sendMessage}
            disabled={loading}
            className="rounded-xl bg-blue-600 px-5 text-white transition hover:bg-blue-700 disabled:opacity-60"
          >
            <Send size={18} />
          </button>

        </div>

      </div>

    </div>
  );
}