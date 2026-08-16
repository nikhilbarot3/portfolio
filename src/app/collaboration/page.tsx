import SectionTag from "@/components/SectionTag";
import { collaborationAreas } from "@/lib/data";

export default function CollaborationPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      {/* <SectionTag>collaboration</SectionTag> */}
      <h1 className="font-display text-4xl font-bold text-paper">Where I collaborate best</h1>
      <p className="mt-4 max-w-3xl text-muted">
        I work well with teams that want research depth, practical delivery, and clear evaluation for AI systems.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {collaborationAreas.map((item) => (
          <article key={item.title} className="rounded-2xl border border-line bg-ink-raised p-6 shadow-[0_10px_30px_rgba(17,24,39,0.04)]">
            <h2 className="font-display text-xl font-semibold text-paper">{item.title}</h2>
            <p className="mt-3 leading-relaxed text-muted">{item.summary}</p>
          </article>
        ))}
      </div>
    </div>
  );
}