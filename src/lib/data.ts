// ============================================================
// EDIT ME — this file is the single source of truth for content.
// Change the text/links here and every page updates automatically.
// ============================================================

export const profile = {
  name: "Nikhil Barot",
  role: "Artificial Intelligence • Machine Learning • Generative AI • Finance AI",
  tagline:
    "ML Research Engineer with 10+ years of Software Engineering industry experience, Currently focused on healthcare AI research, GenAI systems, and production-grade evaluation.",
  summary:
    "",
  location: "FARMINGTON, MICHIGAN, USA",
  email: "nikhilbarot3@gmail.com",
  phone: "248-755-3111",
  github: "https://github.com/nikhilbarot3",
  linkedin: "https://linkedin.com/in/nikhil-barot",
  resumeUrl: "/resume.pdf", // drop a resume.pdf into /public
  stats: [
    { value: "10+", label: "years in industry" },
    { value: "99%", label: "ECG accuracy on unseen patient data" },
    { value: "2", label: "accepted / submitted research papers" },
  ],
};

export const projects = [
  {
    slug: "Mutual Fund RAG Prototype",
    title: "Mutual Fund RAG Prototype",
    blurb:
      "End-to-end RAG pipeline using Python, FastAPI, FAISS, OpenAI embeddings, GPT-4o-mini, and Streamlit, with retrieval and response evaluation.",
    stack: ["Python", "FastAPI", "FAISS", "OpenAI"],
    image: "/images/mutualfund.jpeg",
    github: "https://github.com/nikhilbarot3/Mutual-Fund-AI-Advisor-Gen-_-RAG.git",
    demo: "",
  },
  {
    slug: "QA for an AI-Enabled Security Pipeline",
    title: "QA for an AI-Enabled Security Pipeline",
    blurb:
      "Prototype: Testing LLM Output Quality Across an Ingestion → Normalization → PromptOps → Validation Pipeline",
    stack: [
      "NSL-KDD (network intrusion benchmark)",
      "Python, pandas",
      "Gemini 2.5 Flash (google-genai),DeepEval (FaithfulnessMetric, AnswerRelevancyMetric, GEval)",
    ],
    image: "/images/QA.jpeg",
    github: "https://github.com/nikhilbarot3/ai-qa-pipeline-prototype.git",
    demo: "",
  },
  {
    slug: "Clinical Note Classification -Stanford GUIDE-AI Take-home Assignment",
    title: "Clinical Note Classification - using Classical NLP, Bio_ClinicalBERT, and LLMs",
    blurb:
      "Multi-domain clinical note classifier comparing classical NLP, fine-tuned Bio_ClinicalBERT, and LLM zero/few-shot approaches across 5 medical specialties, built for Stanford GUIDE-AI's Research Engineer take-home.",
    stack: ["Python", "PyTorch","BERT", "Bio_ClinicalBERT", "BART-MNLI", "Flan-T5", "scikit-learn"],
    image: "/images/clinicalnotes.jpeg",
    github: "https://github.com/nikhilbarot3/Clinical-Note-Classification.git",
    demo: "https://github.com/nikhilbarot3/Clinical-Note-Classification/blob/main/GUIDE_AI_Programming_Assignment_(2)_(2).ipynb",
  },
 
  {
    slug: "agentic-ai-website-generator",
    title: "Agentic AI Website Generator",
    blurb:
      "Autonomous agent workflow with LangGraph and LLM orchestration that can structure and assemble web pages.",
    stack: ["LangGraph", "Agents", "LLMs"],
    image: "/images/project-placeholder.png",
    github: "",
    demo: "",
  },
  {
    slug: "FIFA 2026 Match Predictor",
    title: "FIFA 2026 Match Predictor",
    blurb:
      "A full-stack Machine Learning + Gen AI project that predicts international football match outcomes and lets users ask about them in plain English — built as an end-to-end learning project covering data engineering, classical ML, and a grounded RAG (Retrieval-Augmented Generation) chat layer.",
    stack: ["LangGraph", "Agents", "LLMs"],
    image: "/images/fifa.png",
    github: "https://github.com/nikhilbarot3/fifa2026-predictor-ML-GenAI.git",
    demo: "https://fifa2026-predictor-ml-genai-wbn5twgaqiacc4s2iznhpq.streamlit.app/",
  },
  {
    slug: "cloud-native-video-analytics",
    title: "Cloud-Native Video Analytics",
    blurb:
      "Scalable video processing pipeline on GCP using OpenCV, Cloud Storage, and BigQuery for automated dataset analysis.",
    stack: ["Python", "OpenCV", "Google Cloud Functions", "Cloud Storage", "BigQuery", "gcloud CLI"],    image: "/images/gcp.jpg",
    github: "https://github.com/nikhilbarot3/GCP-Automation-pipeline-.git",
    demo: "https://chipcast.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=5edf1b94-510a-4bd3-b126-b2b900e11055",
  },
   {
    slug: "Exploratory Data Analysis (EDA) on Global Data Science Salaries",
    title: "Exploratory Data Analysis (EDA) on Global Data Science Salaries",
    blurb:
      "An exploratory data analysis of global data science salaries, including visualization and statistical insights.",
    stack: [
      "Python",
      "Pandas",
      "NumPy",
      "SciPy",
      "Statsmodels",
      "Seaborn",
      "Matplotlib",
      "Plotly",
      "Jupyter",
    ],
    image: "/images/EDASalary.png",
    github: "https://github.com/nikhilbarot3/GlobalDataScienceSalaries.git",
    demo: "https://github.com/nikhilbarot3/GlobalDataScienceSalaries/blob/main/EDA_GlobalDataScienceSalaries_9Hypo.ipynb",
  },
];

export const research = [
  {
    title: "Neuroidal Network for Clinical ECG Analysis",
    venue: "Submitted to Elsevier , June 2026",
    summary:
      "Biologically inspired Neuroidal Network architecture for clinical ECG analysis, achieving 99% accuracy on unseen patient data and supporting a provisional patent filing.",
    link: "",
  },
  {
    title: "Hybrid SAMB-GRU for Predictive Maintenance",
    venue: "2026 6th International Conference on Machine Learning and Intelligent Systems Engineering (MLISE 2026) - Published in IEEE Xplore, MAY 2026",
    summary:
      "Regime-Aware Deep Learning Framework for Predictive Maintenance in Industrial Systems",
      
    link: "https://ieeexplore.ieee.org/document/11607667",
  },
];

export const articles = [
  {
    title: "Peer Reviewer - Looking for opportunities to review for journals and conferences",
    venue: "Contact : nikhilbarot3@gmail.com",
    summary:
      "Please reach out if you are looking for a peer reviewer for your journal or conference. I have experience reviewing papers and I am happy to provide constructive feedback on research papers.",
    link: "https://ieeexplore.ieee.org/document/11607667",
  },
  {
    title: "Conferences & Events",
    venue: "IEEE MLISE 2026",
    summary:
      "Presented research paper at the 2026 IEEE MLISE conference.",
    link: "https://lnkd.in/p/gCgnAviG",

  },
];

export const collaborationAreas = [
  // {
  //   title: "Healthcare AI research",
  //   summary:
  //     "Signal processing, model evaluation, and clinically grounded machine learning for ECG and real-world health data.",
  // },
  // {
  //   title: "Generative AI systems",
  //   summary:
  //     "RAG, evaluation pipelines, agentic workflows, and production guardrails for enterprise use cases.",
  // },
  // {
  //   title: "Finance AI and automation",
  //   summary:
  //     "Modeling, validation, and workflow automation for financial systems, analytics, and engineering productivity.",
  // },
  // {
  //   title: "AI evaluation and observability",
  //   summary:
  //     "Fairness checks, confidence analysis, RAGAS, DeepEval, and monitoring design.",
  // },
];

export const authorProfile = {
  // journal : "ELsevier,IEEE Xplore",
  // status: "Presented research paper on PDM at IEEE MLISE 2026, and submitted a paper to Elsevier in June 2026.",
  focus:
    "Travel through the places, roles, and ideas that shaped my work.",
  contributions: [
    // "Biologically inspired Neuroidal Network design for clinical ECG classification",
    // "Regime-aware SAMB-GRU framework for aerospace predictive maintenance",
  ],
};

export const hireMe = {
  headline: "Hire me - for  ML research engineering, GenAI systems, Agentic AI, and enterprise AI modernization across healthcare, finance, and automation.",
  availability:
    "Interested in research engineering, healthcare AI, GenAI systems, evaluation tooling, and enterprise AI modernization.",
  contactPoints: [
    { label: "Email", value: "nikhilbarot3@gmail.com", href: "mailto:nikhilbarot3@gmail.com" },
    { label: "LinkedIn", value: "linkedin.com/in/nikhil-barot", href: "https://linkedin.com/in/nikhil-barot" },
    { label: "Phone", value: "248-755-3111", href: "tel:+12487553111" },
  ],
};

export const experience = [
  {
    company: "Central Michigan University -Computer Science Department",
    role: "Machine Learning Research Engineer",
    period: "Mar 2025 - May 2026",
    points: [
      "Invented a Neuroidal Network for clinical ECG analysis, replacing standard perceptrons with biologically inspired neuroidal units and encoding topologies via adjacency matrices.",
      "Trained the model with Genetic Algorithms and achieved 99% accuracy on unseen ECG patient data with precise R-peak detection and full clinical evaluation.",
      "Built incremental fine-tuning pipelines for continuous model evolution, tested transferability on audio classification, and developed the NASA C-MAPSS predictive maintenance framework accepted at IEEE MLISE.",
    ],
  },
  {
    company: "Central Michigan University - Office of Information & Technology",
    role: "AI Engineer",
    period: "May 2025 - Aug 2025",
    points: [
      "Architected production RAG systems with Pinecone, LangChain, and FastAPI, improving retrieval accuracy by 40% and reducing response time.",
      "Built AI safety and monitoring controls with Guardrails AI and Microsoft Presidio for prompt filtering, PII detection, and observability.",
      "Developed UI and backend improvements for service ticket management using C#, .NET, TypeScript, and SQL, reducing open tickets by 40%.",
    ],
  },
    {
    company: "Central Michigan University - College of Education and Human Services",
    role: "Research Assistant - NSF Grant Project",
    period: "April 2025 - Aug 2025",
    points: [
      "Assist in research exploring the role of scientific curiosity in shaping STEM career interests among K-12 students, including qualitative analysis of student interactions and support for data collection and video-based observational studies as part of NSF ( National Science Foundation - Grant Project)",
      "Conducted Community outreach Programs in Mount pleasant"
    ],
  },
  {
    company: "JPMorgan Chase & Co.",
    role: "Associate - AI/ML Engineer",
    period: "Aug 2021 - Dec 2024",
    points: [
      "Built GenAI-powered engineering automation using GPT-4, LangChain, DSPy, and evaluation pipelines, reducing development cycle time by 60%.",
      "Designed LLM evaluation frameworks for accuracy, fairness, and response quality, and built a multi-agent Jira-driven QA workflow.",
      "Led 8 engineers, mentored junior team members, presented to onshore clients across NA and EMEA, and maintained 92% stakeholder satisfaction.",
      "Promoted to Associate in 2023 from Team leader and received the 'Spotlight Award' for innovation and impact in 2024.",
    ],
  },
  {
    company: "Oracle - Client: State Street Bank",
    role: "Staff Consultant",
    period: "Oct 2018 - Aug 2021",
    points: [
      "Led end-to-end validation for the ETF-OPT trading platform and supported enterprise adoption by Charles River Development.",
      "Built Python and SQL data validation tools and applied static analysis with SonarQube to reduce production defect leakage.",
    ],
  },
  {
    company: "Protean eGov Technologies",
    role: "Assistant Manager",
    period: "Jul 2015 - Sep 2018",
    points: [
      "Managed production deployments for India's National Pension System portal serving 100,000+ subscribers and cut deployment time from 2 hours to 20 minutes with shell automation.",
      "Integrated payment gateways and validated settlement reconciliation with 99.9% accuracy within T+2 days.",
    ],
  },
];

export const education = [
  {
    school: "Central Michigan University",
    degree: "Master of Science in Computer Science",
    period: "May 2026",
  },
  {
    school: "Mumbai University",
    degree: "Bachelor of Engineering in Information Technology",
    period: "June 2015",
  },
];

export const skills = [
  { name: "Python,PyTorch / TensorFlow", level: 90 },
  { name: "GenAI / RAG", level: 90 },
  { name: "Agentic AI", level: 90 },
  { name: "Model evaluation", level: 92 },
  { name: "Production Deployment", level: 92 },
  { name: "SQL", level: 80 },
  { name: "Distributed Systems", level: 70 },
  { name: "MLOps", level: 65 },
  { name: "Java", level: 75 },
  { name: "QA Automation , selenium , BDD cucumber", level: 95 },
];

export const journey = [
  {
    src: "/images/me-1.jpeg",
    caption: "Presenting research in an academic setting",
  },
  {
    src: "/images/me-2.jpg",
    caption: "Building and testing ideas with teams",
  },
  {
    src: "/images/me-3.jpg",
    caption: "A moment outside the keyboard",
  },
  {
    src: "/images/me-4.jpg",
    caption: "Whiteboard session for model design",
  },
];
