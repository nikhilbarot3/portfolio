import SectionTag from "@/components/SectionTag";
import { hireMe, profile } from "@/lib/data";

export default function HireMePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      {/* <SectionTag>hire me</SectionTag> */}
      <h1 className="font-display text-3xl font-bold text-paper">{hireMe.headline}</h1>
      <p className="mt-4 max-w-2xl text-muted">{hireMe.availability}</p>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="rounded-2xl border border-line bg-ink-raised p-6 shadow-[0_10px_30px_rgba(17,24,39,0.04)]">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Best fit</p>
          <p className="mt-3 text-lg leading-relaxed text-paper">
            Machine learning Research Enineer, healthcare AI,Agentic AI ,GenAI evaluation, enterprise automation, ,  production  ML model monitoring , QA Automation.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={`mailto:${profile.email}`} className="rounded-full bg-signal px-5 py-3 font-mono text-xs uppercase tracking-[0.2em] text-white hover:opacity-90">
              Email me
            </a>
            <a href={profile.linkedin} className="rounded-full border border-line px-5 py-3 font-mono text-xs uppercase tracking-[0.2em] text-paper hover:border-signal hover:text-signal">
              LinkedIn
            </a>
          </div>
        </article>

        <article className="rounded-2xl border border-line bg-ink-raised p-6 shadow-[0_10px_30px_rgba(17,24,39,0.04)]">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Contact</p>
          <div className="mt-4 space-y-3 text-sm text-muted">
            {hireMe.contactPoints.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center justify-between rounded-xl border border-line bg-white px-4 py-3 hover:border-signal hover:text-signal"
              >
                <span>{item.label}</span>
                <span>{item.value}</span>
              </a>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}