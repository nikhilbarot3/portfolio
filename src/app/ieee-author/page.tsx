import SectionTag from "@/components/SectionTag";
import { authorProfile } from "@/lib/data";

export default function IEEEAuthorPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      {/* <SectionTag>IEEE author</SectionTag> */}
      <h1 className="font-display text-4xl font-bold text-paper">IEEE author profile</h1>
      <p className="mt-4 max-w-3xl text-muted">{authorProfile.focus}</p>

      <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <article className="rounded-2xl border border-line bg-ink-raised p-6 shadow-[0_10px_30px_rgba(17,24,39,0.04)]">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Journal</p>
          <p className="mt-2 font-display text-2xl font-semibold text-paper">{authorProfile.journal}</p>
          <p className="mt-3 text-sm text-muted">{authorProfile.status}</p>
        </article>

        <article className="rounded-2xl border border-line bg-ink-raised p-6 shadow-[0_10px_30px_rgba(17,24,39,0.04)]">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Contributions</p>
          <ul className="mt-4 space-y-3 text-muted">
            {authorProfile.contributions.map((item) => (
              <li key={item} className="rounded-xl border border-line bg-white px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </div>
  );
}