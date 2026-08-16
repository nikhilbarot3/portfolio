import Image from "next/image";

type Project = {
  title: string;
  blurb: string;
  stack: string[];
  image?: string;
  github?: string;
  demo?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-line bg-ink-raised shadow-[0_10px_30px_rgba(17,24,39,0.04)] transition-colors hover:border-signal/50 hover:shadow-[0_14px_34px_rgba(17,24,39,0.07)]">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#f2ede4]">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-end bg-[linear-gradient(135deg,rgba(15,118,110,0.08),rgba(180,83,9,0.08))] p-5">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">Project</p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-paper">{project.title}</h3>
            </div>
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-semibold text-paper">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{project.blurb}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-pulse"
            >
              {tag}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex gap-4 font-mono text-xs uppercase tracking-wide">
          {project.github && (
            <a href={project.github} className="text-signal hover:underline">
              Code →
            </a>
          )}
          {project.demo && (
            <a href={project.demo} className="text-signal hover:underline">
              Live demo →
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
