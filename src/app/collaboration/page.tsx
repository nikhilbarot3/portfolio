import Image from "next/image";
import SectionTag from "@/components/SectionTag";

const awardsData = [
  {
    id: "erp-sim",
    title: "Runners Up in ERP Sim",
    description: "SAP ERP Business Simulation competition runner-up.",
    organization: "Central Michigan University",
    date: "February 2026",
    image: "/images/awards/erp-sim.jpg",
  },
  {
    id: "3mt",
    title: "3MT Thesis Finalist",
    description: "Finalists in the 3MT thesis presenting research work in Artificial Intelligence.",
    organization: "Central Michigan University",
    date: "March 2026",
    video: "/images/awards/3mt-thesis.mp4", 
  },
    {
    id: "Meeting the CEO",
    title: "Jamie Dimon, CEO of JPMorgan Chase & Co.",
    description: " In-person meeting with the CEO during an index Fund launch event.",
    organization: "JPMorgan Chase & Co",
    date: "March 2023",
    video: "/images/awards/ceo.mp4", 
  },
  {
    id: "path-finder",
    title: "The Path Finder Award",
    description: "Recognized for outstanding innovation and problem-solving.",
    organization: "JPMorgan Chase & Co.",
    date: "August 2024",
    image: "/images/awards/path-finder.jpeg",
  },
  {
    id: "optimizer",
    title: "The Optimizer Award",
    description: "Awarded for exceptional efficiency improvements and system optimization.",
    organization: "JPMorgan Chase & Co.",
    date: "July 2023",
    image: "/images/awards/optimizer.jpeg",
  },
    {
    id: "optimizer",
    title: "The Optimizer Award",
    description: "Awarded for exceptional efficiency improvements and system optimization.",
    organization: "JPMorgan Chase & Co.",
    date: "November 2022 ",
    image: "/images/awards/optimizer_agent.jpeg",
  },
  // {
  //   id: "team-player",
  //   title: "Team Player Award",
  //   description: "Recognized for outstanding team contribution and collaborative excellence.",
  //   organization: "Oracle",
  //   date: "2018 - 2021",
  //   image: "/images/awards/team-player.jpg",
  // },
    {
    id: "Football Tournament",
    title: "Football Tournament",
    description: "Won many football tournament, showcasing teamwork and sportsmanship.",
    organization: "JPMorgan Chase & Co.Oracle , RGIT , BCG",
    date: "2008 - 2026",
    video: "/images/awards/football.mp4",

  },
];

export default function AwardsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24">
      <SectionTag>Awards & Recognition</SectionTag>
      
      <h1 className="mt-4 font-display text-5xl font-bold text-paper lg:text-6xl xl:text-7xl">
        Awards / Recognition / Personal lifestyle outside work
      </h1>
      
      <p className="mt-8 max-w-4xl text-lg leading-relaxed text-muted lg:text-xl">
        A collection of professional and academic recognitions earned throughout my journey in software engineering and artificial intelligence research.
      </p>

      <div className="mt-20 flex flex-col gap-16 lg:gap-24">
        {awardsData.map((award) => (
          <article 
            key={award.id} 
            className="group flex flex-col overflow-hidden rounded-3xl border border-line bg-ink-raised shadow-[0_10px_40px_rgba(17,24,39,0.05)] transition-all hover:border-signal/50 hover:shadow-[0_20px_60px_rgba(17,24,39,0.1)] md:flex-row"
          >
            {/* Grand Media Container */}
            <div className="relative w-full min-h-[300px] shrink-0 overflow-hidden bg-[linear-gradient(135deg,rgba(15,118,110,0.08),rgba(29,78,216,0.08))] md:w-[50%] md:min-h-[400px] lg:w-[60%] lg:min-h-[500px]">
              
              {/* Conditional Rendering: Video vs Image */}
              {award.video ? (
                <video
                  src={award.video}
                  controls
                  playsInline
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ) : (
                <Image
                  src={award.image as string}
                  alt={`Award certificate for ${award.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 60vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              )}

              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-ink-raised/90 via-transparent to-transparent opacity-60 md:hidden" />
            </div>

            {/* Expansive Content Container */}
            <div className="flex flex-1 flex-col justify-center p-8 md:p-12 lg:p-16">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="font-mono text-xs font-bold uppercase tracking-wider text-signal lg:text-sm">
                  {award.organization}
                </p>
                <p className="shrink-0 rounded-full border border-line bg-white/60 px-4 py-1.5 font-mono text-xs font-medium text-muted lg:px-5 lg:py-2">
                  {award.date}
                </p>
              </div>
              
              <h2 className="mt-8 font-display text-3xl font-bold text-paper lg:text-4xl xl:text-5xl">
                {award.title}
              </h2>
              
              <p className="mt-6 text-lg leading-relaxed text-muted lg:text-xl">
                {award.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}