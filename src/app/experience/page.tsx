import SectionTag from "@/components/SectionTag";
import { experience } from "@/lib/data";

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <SectionTag>work experience</SectionTag>
      <h1 className="font-display text-4xl font-bold text-paper">Work log</h1>

      <div className="mt-12 space-y-10 border-l border-line pl-8">
        {experience.map((job) => (
          <div key={job.company} className="relative">
            <span className="absolute -left-[2.35rem] top-1.5 h-2.5 w-2.5 rounded-full bg-signal" />
            <p className="font-mono text-xs uppercase tracking-wide text-muted">{job.period}</p>
            <h2 className="mt-1 font-display text-2xl font-semibold text-paper">
              {job.role} · <span className="text-pulse">{job.company}</span>
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
              {job.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
