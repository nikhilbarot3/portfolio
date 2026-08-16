import SectionTag from "@/components/SectionTag";
import { articles } from "@/lib/data";

export default function ArticlesPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      {/* <SectionTag>publish articles</SectionTag> */}
      {/* <h1 className="font-display text-4xl font-bold text-paper">Publications and articles</h1> */}
      <p className="mt-4 max-w-2xl text-muted">
        {/* Research Papers accepted in peer-reviewed journals and conferences, as well as articles published in popular media outlets. */}
      </p>

      <div className="mt-12 space-y-6">
        {articles.map((item) => (
          <article key={item.title} className="rounded-2xl border border-line bg-ink-raised p-6 shadow-[0_10px_30px_rgba(17,24,39,0.04)]">
            <h2 className="font-display text-xl font-semibold text-paper">{item.title}</h2>
            <p className="mt-1 font-mono text-xs uppercase tracking-wide text-pulse">{item.venue}</p>
            <p className="mt-4 leading-relaxed text-muted">{item.summary}</p>
          </article>
        ))}
      </div>
    </div>
  );
}