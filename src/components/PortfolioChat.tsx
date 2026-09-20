"use client";

import { FormEvent, useMemo, useState } from "react";
import {
  collaborationAreas,
  experience,
  profile,
  projects,
  research,
  skills,
} from "@/lib/data";

type ChatMessage = {
  id: number;
  role: "assistant" | "user";
  text: string;
};

const quickPrompts = [
  "What does Nikhil do?",
  "Tell me about Nikhil's projects",
  "What research is Nikhil working on?",
  "How can I contact Nikhil?",
];

function normalize(value: string) {
  return value.toLowerCase().trim();
}

function findProjectMatch(input: string) {
  const query = normalize(input);

  if (!query) return null;

  const match = projects.find((project) => {
    const haystack = normalize(
      `${project.title} ${project.blurb} ${project.stack.join(" ")}`,
    );
    return haystack.includes(query) || query.includes(haystack);
  });

  return match ?? null;
}

function buildReply(input: string) {
  const question = normalize(input);

  if (!question) {
    return "Ask me about his projects, research, experience, or contact details.";
  }

  if (
    question.includes("who") ||
    question.includes("about") ||
    question.includes("what do you do") ||
    question.includes("your role") ||
    question.includes("profile")
  ) {
    return `${profile.name} is a ${profile.role}. ${profile.tagline}`;
  }

  if (
    question.includes("project") ||
    question.includes("work") ||
    question.includes("portfolio")
  ) {
    const projectMatch = findProjectMatch(question);

    if (projectMatch) {
      return `${projectMatch.title}: ${projectMatch.blurb}`;
    }

    const featured = projects.slice(0, 3).map((project) => project.title).join(", ");
    return `A few standout projects include ${featured}. I can tell you more about any of them.`;
  }

  if (
    question.includes("research") ||
    question.includes("paper") ||
    question.includes("publication")
  ) {
    const topResearch = research
      .map((item) => `${item.title} (${item.venue})`)
      .join("; ");
    return `Current research focus includes ${topResearch}.`;
  }

  if (
    question.includes("experience") ||
    question.includes("years") ||
    question.includes("background")
  ) {
    return `${profile.name} brings ${experience.length}+ years of hands-on applied AI work, with experience spanning healthcare AI, GenAI systems, and finance-focused ML.`;
  }

  if (
    question.includes("skill") ||
    question.includes("stack") ||
    question.includes("technology") ||
    question.includes("expertise")
  ) {
    const topSkills = skills.slice(0, 6).map((skill) => skill.name).join(", ");
    return `Core strengths include ${topSkills}.`;
  }

  if (
    question.includes("contact") ||
    question.includes("email") ||
    question.includes("phone") ||
    question.includes("contact number") ||
    question.includes("number") ||
    question.includes("linkedin") ||
    question.includes("hire") ||
    question.includes("collab")
  ) {
    return `You can reach ${profile.name} at ${profile.phone}, email ${profile.email}, or connect on LinkedIn: ${profile.linkedin}.`;
  }

  if (
    question.includes("healthcare") ||
    question.includes("finance") ||
    question.includes("genai") ||
    question.includes("focus")
  ) {
    // const focus = collaborationAreas.map((area) => area.title).join(", ");
    const focus = (collaborationAreas as any[]).map((area) => area.title || "").filter(Boolean).join(", ");
    return `The main focus areas are ${focus}.`;
  }

  const fallbackProject = projects[0];
  return `I can help with portfolio questions about projects, research, skills, and contact details. A good example is ${fallbackProject.title}: ${fallbackProject.blurb}`;
}

export default function PortfolioChat() {
  const [isOpen, setIsOpen] = useState(true);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      role: "assistant",
      text: "Hi! I’m Nikhil’s portfolio assistant. Ask me about his projects, research, experience, or how to get in touch.",
    },
  ]);

  const suggestedQuestions = useMemo(() => quickPrompts, []);
  const shouldShowSuggestions = messages.length <= 2 && !input.trim();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = input.trim();

    if (!trimmed) {
      return;
    }

    const userMessage: ChatMessage = {
      id: Date.now(),
      role: "user",
      text: trimmed,
    };

    const assistantReply: ChatMessage = {
      id: Date.now() + 1,
      role: "assistant",
      text: buildReply(trimmed),
    };

    setMessages((current) => [...current, userMessage, assistantReply]);
    setInput("");
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {isOpen ? (
        <div className="w-[min(360px,calc(100vw-1.5rem))] overflow-hidden rounded-2xl border border-line bg-ink-raised shadow-[0_20px_60px_rgba(17,24,39,0.15)]">
          <div className="flex items-center justify-between border-b border-line bg-[linear-gradient(135deg,rgba(15,118,110,0.12),rgba(29,78,216,0.08))] px-4 py-3">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Portfolio assistant</p>
              <p className="text-sm font-semibold text-paper">Ask about the profile</p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-full border border-line bg-white px-2 py-1 text-xs text-paper hover:border-signal hover:text-signal"
              aria-label="Close chat assistant"
            >
              Close
            </button>
          </div>

          <div className="max-h-[360px] space-y-3 overflow-y-auto bg-white/40 p-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                  message.role === "assistant"
                    ? "bg-signal/5 text-paper"
                    : "ml-auto bg-paper text-white"
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>

          <div className="border-t border-line bg-ink-raised p-3">
            {shouldShowSuggestions ? (
              <div className="mb-3 flex flex-wrap gap-2">
                {suggestedQuestions.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    onClick={() => setInput(prompt)}
                    className="rounded-full border border-line bg-white px-2.5 py-1 text-[11px] text-paper transition-colors hover:border-signal hover:text-signal"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask a question..."
                className="w-full rounded-full border border-line bg-white px-3 py-2 text-sm text-paper outline-none placeholder:text-muted focus:border-signal"
                aria-label="Ask a question"
              />
              <button
                type="submit"
                className="rounded-full bg-signal px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] text-white transition-opacity hover:opacity-90"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-3 rounded-full bg-signal px-4 py-3 text-sm font-medium text-white shadow-[0_12px_28px_rgba(15,118,110,0.22)] transition-transform hover:-translate-y-0.5"
          aria-label="Open portfolio assistant"
        >
          <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-300" />
          Ask about my work
        </button>
      )}
    </div>
  );
}
