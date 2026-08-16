import Image from "next/image";
import Link from "next/link";
import SectionTag from "@/components/SectionTag";
import { education, skills, profile } from "@/lib/data";

export default function AboutPage() {
  const focusCards = [
    {
      title: "May 2026: Graduated from Central Michigan University",
      summary:
        "At Central Michigan University, I pursued a degree in Computer Science with a focus on Artificial Intelligence.",
      image: "/images/me-7.jpg",
      alt: "Nikhil presenting research",
    },
    {
      title: "December 2024: I quit my job at JPMorgan Chase & Co. to pursue my passion for AI and research",
      summary:
        "I decided to quit my job at JPMorgan Chase & Co. to pursue my passion for AI/ML Research",
      image: "/images/me-10.jpg",
      alt: "Nikhil quit my job at JPMorgan Chase & Co",
    },
    {
      title: "2021-2024: Associate at JPMorgan Chase & Co. - Mumbai, India",
      summary:
        "Architected and led enterprise AI/ML solutions spanning LangGraph multi-agent systems, RAG, LLM evaluation, AI safety/governance, observability, and MLOps, automating test generation, improving retrieval quality by 40%, reducing development effort by 60%, production incidents by 45%, and mentoring an 4-engineer team",
      image: "/images/me-3.jpeg",
      alt: "Nikhil working as an Associate at JPMorgan Chase & Co",
    },
    {
      title: "2018-2021: Staff Consultant at Oracle - Mumbai, India",
      summary:
        "Spearheaded test automation frameworks for enterprise options-trading platforms (CRD/ETF-OPT), establishing automated CI/CD quality gates across multi-tier banking systems.",
      image: "/images/me-4.jpeg",
      alt: "Nikhil is a Staff Consultant at Oracle",
    },
    {
      title: "2015-2018: Assistant Manager at Protean eGov Technologies (formerly NSDL eGov) - Mumbai, India",
      summary:
        "PerformedQA and managed production deployments and high-throughput transaction pipelines for India’s National Pension System (100k+ users) maintaining 99.9% uptime.",
      image: "/images/me-8.jpg",
      alt: "Nikhil at a conference or academic setting",
    },
    {
      title: "2015 - June - Graduated from University of Mumbai with a Bachelors in enineering in Information Technology",
      summary:
        "Obtained a Bachelor of Engineering degree in Information Technology from the University of Mumbai.",
      image: "/images/me-6.jpg",
      alt: "Nikhil Bachelor of Engineering degree in Information Technology",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
      {/* <SectionTag>about me</SectionTag> */}

      <div className="grid gap-6 lg:grid-cols-[300px_minmax(0,1fr)_420px] lg:items-stretch">
        <aside className="rounded-3xl border border-line bg-ink-raised p-6 shadow-[0_12px_34px_rgba(17,24,39,0.05)]">
          <div className="mx-auto flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border border-line bg-[rgba(15,118,110,0.08)]">
            <Image
              src="/images/me-13.jpg"
              alt="Nikhil Barot portrait"
              width={128}
              height={128}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <div className="mt-5 text-center">
            <h1 className="font-display text-3xl font-semibold text-paper">Nikhil Barot</h1>
            <p className="mt-1 text-sm text-muted">Machine Learning • Generative AI • Finance AI</p>
          </div>

          <div className="mt-6 space-y-2 text-sm text-muted">
            <p>{profile.email}</p>
            <p>{profile.linkedin.replace("https://", "")}</p>
            <p>{profile.github.replace("https://", "")}</p>
            <p>{profile.location}</p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <Link href="/experience" className="rounded-full border border-line bg-white px-4 py-2 text-xs uppercase tracking-[0.2em] text-paper">
              Work
            </Link>
            <Link href="/projects" className="rounded-full border border-line bg-white px-4 py-2 text-xs uppercase tracking-[0.2em] text-paper">
              Projects
            </Link>
            <Link href="/hire-me" className="rounded-full border border-line bg-white px-4 py-2 text-xs uppercase tracking-[0.2em] text-paper">
              Hire me
            </Link>
          </div>
        </aside>

        <section className="rounded-3xl border border-line bg-ink-raised p-8 shadow-[0_12px_34px_rgba(17,24,39,0.05)] lg:flex lg:h-full lg:flex-col lg:justify-center">
          <p className="tag-eyebrow font-mono text-xs uppercase"></p>
          <h2 className="mt-4 max-w-2xl font-display text-5xl font-bold leading-[1.02] tracking-tight text-paper">
            Hi, I&apos;m Nikhil Barot.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{profile.summary}</p>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted">
            <ul className="mt-4 max-w-2xl list-disc space-y-2 pl-5 leading-relaxed text-muted">
              <li>
                <strong>Professional Experience:</strong> I bring 10+ years of enterprise software experience, including 3 years building production GenAI and multi-agent systems across Financial Services, Healthcare, and Manufacturing.
              </li>
              <li>
                <strong>Patent Pending :</strong> Inventor of a novel bio-inspired neural network for analog pattern recognition (patent pending, 2026).
              </li>
              <li>
                <strong>Published ML Researcher:</strong> IEEE- Author of a published paper on a novel regime-aware deep learning framework for predictive maintenance.
              </li>
            </ul>
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {/* <div className="rounded-4xl border border-line bg-white p-5 shadow-[0_8px_24px_rgba(17,24,39,0.04)]">
              <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-muted">Focus</p>
              <p className="mt-2 text-sm leading-relaxed text-paper">
                Agentic AI, GenAI systems, ML Designs and evaluation methods for safer AI.
              </p>
            </div> */}
            {/* <div className="rounded-3xl border border-line bg-white p-5 shadow-[0_8px_24px_rgba(17,24,39,0.04)]">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">Approach</p>
              <p className="mt-2 text-sm leading-relaxed text-paper">
                Research-backed, production-aware, and focused on measurable outcomes.
              </p>
            </div> */}
          </div>
        </section>

        <aside className="overflow-hidden rounded-3xl border border-line bg-ink-raised shadow-[0_12px_34px_rgba(17,24,39,0.05)]">
          <div className="relative aspect-[4/5] w-full bg-ink-raised">
            <Image
              src="/images/me-1.jpeg"
              alt="Nikhil Barot graduation photo"
              fill
              sizes="(max-width: 1024px) 100vw, 420px"
              className="object-cover"
            />
          </div>
          <div className="p-5">
            {/* <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Featured image</p> */}
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {/* Replace this with your graduation photo when you upload it to <code className="rounded bg-white px-1.5 py-0.5 font-mono text-xs">/public/images</code>. */}
            </p>
          </div>
        </aside>
      </div>

      <div className="mt-16">
        {/* <SectionTag>My Journey</SectionTag> */}
        <h3 className="font-display text-2xl font-semibold text-paper">My Journey</h3>
        <p className="mt-3 max-w-2xl text-muted">
          My Professional journey has been shaped by a passion for AI and its applications in real-world scenarios. From my academic pursuits to hands-on experience in the industry, I have honed my skills in developing AI systems that are not only innovative but also reliable and effective.
        </p>

        <div className="mt-8 space-y-6">
          {focusCards.map((card, index) => {
            const reverse = index % 2 === 1;

            return (
              <article
                key={card.title}
                className="overflow-hidden rounded-3xl border border-line bg-ink-raised shadow-[0_12px_34px_rgba(17,24,39,0.05)]"
              >
                <div className={`grid lg:grid-cols-2 ${reverse ? "lg:[grid-template-columns:1.05fr_0.95fr]" : ""}`}>
                  <div className={`relative min-h-[300px] bg-[#f2ede4] ${reverse ? "lg:order-2" : ""}`}>
                    <Image
                      src={card.image}
                      alt={card.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority
                      loading="eager"
                      className="object-cover"
                    />
                  </div>

                  <div className={`flex items-center p-8 lg:p-10 ${reverse ? "lg:order-1" : ""}`}>
                    <div>
                      <div className="inline-flex items-center rounded-full border border-line bg-white px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                        {index + 1 < 10 ? `0${index + 1}` : index + 1}
                      </div>
                      <h3 className="mt-4 font-display text-3xl font-semibold text-paper">
                        {card.title}
                      </h3>
                      <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
                        {card.summary}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="mt-16 grid gap-6 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl font-semibold text-paper">Skills</h2>
          <div className="mt-6 space-y-5 rounded-2xl border border-line bg-ink-raised p-6 shadow-[0_10px_30px_rgba(17,24,39,0.04)]">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between font-mono text-xs uppercase tracking-wide text-muted">
                  <span>{skill.name}</span>
                  <span className="text-pulse">{skill.level}%</span>
                </div>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white">
                  <div
                    className="h-full rounded-full bg-signal"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-display text-2xl font-semibold text-paper">Education</h2>
          <div className="mt-6 space-y-4">
            {education.map((ed) => (
              <div key={ed.school} className="rounded-2xl border border-line bg-ink-raised p-5 shadow-[0_10px_30px_rgba(17,24,39,0.04)]">
                <p className="font-display text-lg font-semibold text-paper">{ed.school}</p>
                <p className="mt-1 text-sm text-muted">
                  {ed.degree} · {ed.period}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
