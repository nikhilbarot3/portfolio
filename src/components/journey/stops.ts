export interface JourneyStop {
  id: string;
  x: number;
  title: string;
  subtitle: string;
  location: string;
  period: string;
  description: string;
  skills: string[];
  buildingType: "mu" | "nsdl" | "oracle" | "jpmc" | "cmu-arch" | "cmu-main" | "hire-me";
}

export const stops: JourneyStop[] = [
  {
    id: "mu",
    x: 20,
    title: "University of Mumbai",
    subtitle: "Bachelor of Engineering in IT",
    location: "Mumbai, India",
    period: "Graduated Jun 2015",
    description: "Obtained a Bachelor of Engineering degree in Information Technology, laying the foundation for a career in software engineering.",
    skills: ["Information Technology", "Engineering Fundamentals"],
    buildingType: "mu",
  },
  {
    id: "nsdl",
    x: 60,
    title: "Protean eGov (formerly NSDL)",
    subtitle: "Assistant Manager",
    location: "Mumbai, India",
    period: "Jul 2015 - Sep 2018",
    description: "Performed QA and managed production deployments for India's National Pension System (100k+ users), maintaining 99.9% uptime.",
    skills: ["Shell Automation", "QA", "Payment Integration"],
    buildingType: "nsdl",
  },
  {
    id: "oracle",
    x: 100,
    title: "Oracle",
    subtitle: "Staff Consultant (Client: State Street Bank)",
    location: "Mumbai, India",
    period: "Oct 2018 - Aug 2021",
    description: "Spearheaded test automation frameworks for enterprise options-trading platforms, establishing automated CI/CD quality gates.",
    skills: ["Python", "SQL", "SonarQube", "CI/CD"],
    buildingType: "oracle",
  },
  {
    id: "jpmc",
    x: 140,
    title: "JPMorgan Chase & Co.",
    subtitle: "Associate - AI/ML Engineer",
    location: "Mumbai, India",
    period: "Aug 2021 - Dec 2024",
    description: "Architected enterprise AI/ML solutions (LangGraph, RAG, LLM eval), reducing development cycle time by 60%.",
    skills: ["LangGraph", "RAG", "GPT-4", "DSPy"],
    buildingType: "jpmc",
  },
  {
    id: "cmu-arch",
    x: 180,
    title: "The Pivot to Research",
    subtitle: "Relocation & Graduate Studies",
    location: "Michigan, USA",
    period: "Dec 2024",
    description: "Quit my role at JPMorgan Chase to fully pursue my passion for advanced AI/ML research and relocate to the United States.",
    skills: ["AI Research", "Academic Transition"],
    buildingType: "cmu-arch",
  },
  {
    id: "cmu-main",
    x: 220,
    title: "Central Michigan University",
    subtitle: "M.S. Computer Science & ML Researcher",
    location: "Michigan, USA",
    period: "Mar 2025 - May 2026",
    description: "Graduated with a focus in AI. Invented a Neuroidal Network for clinical ECG analysis (99% accuracy), built RAG systems.",
    skills: ["Genetic Algorithms", "Pinecone", "FastAPI"],
    buildingType: "cmu-main",
  },
  {
    id: "hire-me",
    x: 260,
    title: "Hire Me",
    subtitle: "Ready for the Next Challenge",
    location: "Global",
    period: "Present",
    description: "Equipped with a decade of enterprise software engineering and cutting-edge applied AI research. Ready to build the future.",
    skills: ["Applied AI", "Enterprise Architecture", "Leadership"],
    buildingType: "hire-me",
  },
];