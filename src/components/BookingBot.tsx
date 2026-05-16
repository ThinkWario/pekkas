"use client";

import React, { useState } from "react";
import { useChat } from "@ai-sdk/react";
import { MessageCircle, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function BookingBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const { messages, sendMessage, status } = useChat();

  const isLoading = status === "streaming" || status === "submitted";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    sendMessage({ parts: [{ type: "text", text: input }] });
    setInput("");
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 flex h-[600px] w-[400px] flex-col overflow-hidden rounded-3xl border border-brand-nude/30 bg-white/80 shadow-2xl backdrop-blur-2xl"
          >
            {/* Header: Glassmorphism / Luxury */}
            <div className="flex items-center justify-between bg-brand-nude/20 p-6 border-b border-brand-nude/30">
              <div className="flex flex-col">
                <span className="font-serif text-lg text-brand-ink">El Ritual de Yume</span>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-brand-rose animate-pulse" />
                  <span className="text-[10px] uppercase tracking-[0.2em] text-brand-ink/60">Concierge de Belleza</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-2 hover:bg-brand-ink/5 transition-colors text-brand-ink"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
              {messages.length === 0 && (
                <div className="text-center space-y-4 mt-8">
                  <p className="font-serif italic text-brand-ink/40 text-lg">
                    "La belleza es el reflejo de un sueño."
                  </p>
                  <p className="font-sans text-xs uppercase tracking-widest text-brand-ink/60 px-8">
                    Bienvenida. Estoy aquí para guiarte en tu camino hacia una belleza atemporal.
                  </p>
                </div>
              )}
              
              {messages.map((m) => (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn(
                    "flex max-w-[85%] flex-col gap-2",
                    m.role === "user" ? "ml-auto items-end" : "mr-auto items-start"
                  )}
                >
                  <div
                    className={cn(
                      "rounded-2xl px-5 py-3 text-sm leading-relaxed shadow-sm",
                      m.role === "user"
                        ? "bg-brand-ink text-brand-champagne rounded-tr-none"
                        : "bg-white text-brand-ink border border-brand-nude/20 rounded-tl-none"
                    )}
                  >
                    {m.parts.map((part, i) => (
                      part.type === 'text' ? <span key={i}>{part.text}</span> : null
                    ))}
                  </div>
                </motion.div>
              ))}
              
              {isLoading && (
                <div className="flex items-center gap-1.5 text-brand-ink/40 ml-2">
                  <div className="h-1 w-1 rounded-full bg-current animate-bounce [animation-delay:-0.3s]" />
                  <div className="h-1 w-1 rounded-full bg-current animate-bounce [animation-delay:-0.15s]" />
                  <div className="h-1 w-1 rounded-full bg-current animate-bounce" />
                </div>
              )}
            </div>

            {/* Input: Elegant form */}
            <form
              onSubmit={handleSubmit}
              className="p-6 bg-brand-nude/10 border-t border-brand-nude/30"
            >
              <div className="relative flex items-center">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Escribe tu mensaje..."
                  className="w-full bg-white/50 border border-brand-nude/40 rounded-full px-6 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-brand-nude transition-all placeholder:text-brand-ink/30"
                />
                <button
                  type="submit"
                  disabled={isLoading || !input}
                  className="absolute right-2 p-2 rounded-full bg-brand-ink text-brand-champagne hover:scale-105 transition-transform disabled:opacity-30 disabled:hover:scale-100"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Luxury Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-ink text-brand-champagne shadow-2xl transition-all"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </motion.button>
    </div>
  );
}
