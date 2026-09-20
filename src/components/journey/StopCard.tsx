"use client";

import type { JourneyStop } from "./stops";

export default function StopCard({ stop }: { stop: JourneyStop | null }) {
  if (!stop) return null;

  return (
    <div className="w-full max-w-sm rounded-2xl border border-line bg-ink-raised/95 p-5 shadow-2xl backdrop-blur-md transition-all duration-300">
      <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-muted">
        <span>{stop.location}</span>
        <span className="rounded-full bg-signal/10 px-2 py-0.5 text-signal font-semibold">
          {stop.period}
        </span>
      </div>
      <h3 className="mt-2 font-display text-xl font-bold text-paper">{stop.title}</h3>
      <p className="text-xs font-semibold uppercase tracking-wider text-signal">{stop.subtitle}</p>
      <p className="mt-2 text-sm leading-relaxed text-muted">{stop.description}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {stop.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-line bg-white/70 px-2.5 py-0.5 font-mono text-[10px] text-paper"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}