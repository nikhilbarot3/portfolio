import Link from "next/link";
import SectionTag from "@/components/SectionTag";
import ProjectCard from "@/components/ProjectCard";
import PortfolioChat from "@/components/PortfolioChat";
import { profile, projects, research, authorProfile, collaborationAreas } from "@/lib/data";

export default function Home() {
  const featured = projects.slice(0, 3);
  const spotlight = research[0];
  const focusCards = [
    {
      title: "Neuroidal network for analog signals",
      summary:
        "Developed a Neuroidal network for analog signal processing, model evaluation, and clinically grounded machine learning for ECG and real-world health data.",
    },
    ...collaborationAreas.slice(1, 4),
  ];
  const homeStats = [
    { value: "10+", label: "years in industry" },
    { value: "15+", label: "AI/ML projects & papers" },
    { value: "2", label: "accepted / submitted research papers" },
  ];

  const quickLinks = [
    { href: "/about", label: "About me" },
    { href: "/experience", label: "Work experience" },
    { href: "/projects", label: "Projects" },
    { href: "/research", label: "Research" },
    { href: "/articles", label: "Publish Articles" },
    { href: "/ieee-author", label: "IEEE author" },
  ];

  return (
    <div>
      <section className="border-b border-line bg-[linear-gradient(180deg,rgba(251,248,241,0.88),rgba(244,240,232,0.96))]">
        <div className="mx-auto max-w-5xl px-6 py-16 lg:py-20">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div className="space-y-6">
              <p className="tag-eyebrow font-mono text-xs uppercase">[machine learning • healthcare ai • generative ai • finance ai]</p>
              <div>
                <h1 className="max-w-3xl font-display text-5xl font-bold leading-[1.02] tracking-tight text-paper sm:text-6xl">
                  Nikhil Barot
                </h1>
                <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
                  {profile.tagline}
                </p>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-paper/80">
                  {profile.summary}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/hire-me"
                  className="rounded-full bg-signal px-5 py-3 font-mono text-xs font-medium uppercase tracking-[0.2em] text-white shadow-[0_10px_25px_rgba(15,118,110,0.18)] transition-transform hover:-translate-y-0.5"
                >
                  Hire me
                </Link>
                <Link
                  href="/projects"
                  className="rounded-full border border-line bg-ink-raised px-5 py-3 font-mono text-xs font-medium uppercase tracking-[0.2em] text-paper transition-colors hover:border-signal hover:text-signal"
                >
                  View projects
                </Link>
                <a
                  href={`mailto:${profile.email}`}
                  className="rounded-full border border-line bg-ink-raised px-5 py-3 font-mono text-xs font-medium uppercase tracking-[0.2em] text-paper transition-colors hover:border-accent hover:text-accent"
                >
                  Email
                </a>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-line bg-ink-raised p-4 shadow-[0_8px_24px_rgba(17,24,39,0.04)]">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">Location</p>
                  <p className="mt-2 text-sm text-paper">{profile.location}</p>
                </div>
                <div className="rounded-2xl border border-line bg-ink-raised p-4 shadow-[0_8px_24px_rgba(17,24,39,0.04)]">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">Email</p>
                  <p className="mt-2 text-sm text-paper">{profile.email}</p>
                </div>
                <div className="rounded-2xl border border-line bg-ink-raised p-4 shadow-[0_8px_24px_rgba(17,24,39,0.04)]">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">Phone</p>
                  <p className="mt-2 text-sm text-paper">{profile.phone}</p>
                </div>
              </div>
            </div>

            <aside className="hero-accent rounded-[1.75rem] border border-line p-6 shadow-[0_16px_40px_rgba(17,24,39,0.06)]">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Portfolio overview</p>
              <div className="mt-5 space-y-4">
                <div className="rounded-2xl border border-line bg-[rgba(255,255,255,0.55)] p-4 backdrop-blur-sm">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">Focus</p>
                  <p className="mt-2 font-display text-2xl font-semibold text-paper">Safer AI with measurable impact</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{authorProfile.focus}</p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-line bg-[rgba(255,255,255,0.55)] p-4 backdrop-blur-sm">
                    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">Experience</p>
                    <p className="mt-2 font-display text-2xl font-semibold text-paper">10+ yrs</p>
                    <p className="mt-1 text-sm text-muted">AI / ML delivery and research</p>
                  </div>
                  <div className="rounded-2xl border border-line bg-[rgba(255,255,255,0.55)] p-4 backdrop-blur-sm">
                    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">Research</p>
                    <p className="mt-2 font-display text-2xl font-semibold text-paper">2 papers</p>
                    <p className="mt-1 text-sm text-muted">IEEE + journal work</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-line bg-[rgba(255,255,255,0.55)] p-4 backdrop-blur-sm">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">IEEE author</p>
                  <p className="mt-2 font-display text-lg font-semibold text-paper">{(authorProfile as any).journal}</p>
                  <p className="mt-1 text-sm text-muted">{(authorProfile as any).status}</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-5xl grid-cols-1 divide-y divide-line px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {homeStats.map((stat) => (
            <div key={stat.label} className="py-10 text-center sm:px-6">
              <p className="font-display text-4xl font-bold text-paper">{stat.value}</p>
              <p className="mt-2 font-mono text-xs uppercase tracking-wide text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        {/* <SectionTag>focus areas</SectionTag> */}
        <h2 className="font-display text-3xl font-semibold text-paper">Focus areas</h2>
        <p className="mt-3 max-w-2xl text-muted">
          A more structured view of the work areas that shape my portfolio, inspired by a clean personal site layout.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {focusCards.map((card) => (
            <article key={card.title} className="rounded-2xl border border-line bg-ink-raised p-5 shadow-[0_10px_30px_rgba(17,24,39,0.04)]">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">{card.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{card.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-[linear-gradient(180deg,rgba(251,248,241,0.75),rgba(244,240,232,0.88))]">
        <div className="mx-auto max-w-5xl px-6 py-20">
          {/* <SectionTag>selected work</SectionTag> */}
          <h2 className="font-display text-3xl font-semibold text-paper">Glimpse of AI ML projects</h2>
          <p className="mt-3 max-w-2xl text-muted">
            A small set of projects and research outputs that show the mix of engineering, experimentation, and evaluation.
          </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
        <div className="mt-8">
          <Link href="/projects" className="font-mono text-xs uppercase tracking-wide text-signal hover:underline">
            All projects →
          </Link>
        </div>
        </div>
      </section>

      <section className="border-t border-line bg-ink-raised/70">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              {/* <SectionTag>additional links</SectionTag> */}
              <h2 className="font-display text-3xl font-semibold text-paper">Navigation links</h2>
              <p className="mt-3 max-w-xl text-muted">
                Fast navigation to the sections people usually want first in a portfolio.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center justify-between rounded-2xl border border-line bg-ink-raised px-5 py-4 text-sm text-paper shadow-[0_8px_24px_rgba(17,24,39,0.04)] transition-colors hover:border-signal hover:text-signal"
                >
                  <span>{link.label}</span>
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">open</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PortfolioChat />
    </div>
  );
}
