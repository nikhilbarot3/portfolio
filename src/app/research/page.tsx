import SectionTag from "@/components/SectionTag";
import { research } from "@/lib/data";

export default function ResearchPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      {/* <SectionTag>research</SectionTag> */}
      <h1 className="font-display text-4xl font-bold text-paper">2026 Research</h1>
      <p className="mt-4 max-w-2xl text-muted">
        {/* Signal processing and predictive modeling - reading structure out of noisy time-series data, from cardiac rhythms to jet-engine telemetry. */}
      </p>

      <div className="mt-12 space-y-8">
        {research.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-line bg-white p-6 shadow-[0_10px_30px_rgba(17,24,39,0.04)]"
          >
            <h2 className="font-display text-xl font-semibold text-paper">{item.title}</h2>
            <p className="mt-1 font-mono text-xs uppercase tracking-wide text-pulse">
              {item.venue}
            </p>
            <p className="mt-4 leading-relaxed text-muted">{item.summary}</p>
            {item.link && (
              <a
                href={item.link}
                className="mt-4 inline-block font-mono text-xs uppercase tracking-wide text-signal hover:underline"
              >
                → Link to Article 
              </a>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
