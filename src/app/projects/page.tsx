import SectionTag from "@/components/SectionTag";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data";

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      {/* <SectionTag>projects</SectionTag> */}
      <h1 className="font-display text-4xl font-bold text-paper">Things I&apos;ve built</h1>
      <p className="mt-4 max-w-3xl text-muted">
        A mix of research prototypes and practical AI systems. The cards below highlight the work I care about most.
      </p>
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  );
}
