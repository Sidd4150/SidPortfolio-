export const personalInfo = {
  name: "Sid Shakya",
  fullName: "Siddhartha (Sid) Shakya",
  handle: "Sidd4150",
  title: "Software Engineer",
  tagline: "Building scalable backend services, full-stack web platforms, and data pipelines.",
  location: "San Francisco, CA",
  phone: "415-572-0304",
  email: "sidushakya@gmail.com",
  github: "https://github.com/Sidd4150",
  linkedin: "https://www.linkedin.com/in/siddhartha-shakya3004",
  bio: "Software engineer based in San Francisco with experience building high-throughput APIs, geospatial ingestion pipelines, and full-stack web platforms. Passionate about distributed systems, database optimization, and machine learning."
};

export const education = {
  institution: "University of San Francisco",
  location: "San Francisco, CA",
  degree: "B.S. in Computer Science",
  gpa: "3.7",
  graduation: "May 2026",
  coursework: [
    "Data Structures and Algorithms",
    "Computer Architecture",
    "Computer Networks",
    "Foundations of Artificial Intelligence"
  ]
};

export const experience = [
  {
    role: "Contract Software Engineer",
    company: "Himal Design",
    location: "Remote",
    period: "April 2026 – Present",
    type: "Contract",
    description: "Architected and delivered a full-stack seller operations platform deployed on Vercel with Neon Postgres, consolidating listings, inventory, and active orders across Etsy, Amazon, and Faire.",
    highlights: [
      "Architected and delivered a full-stack seller operations platform deployed on Vercel with Neon Postgres, consolidating listings, inventory, and active orders across Etsy, Amazon, and Faire.",
      "Streamlined order fulfillment by eliminating manual lookups, significantly accelerating packaging and shipping workflows.",
      "Designed scalable, normalized SQL schemas to seamlessly unify data models across three distinct marketplace integrations."
    ],
    tech: ["Next.js", "TypeScript", "Neon Postgres", "SQL", "Vercel", "REST APIs"]
  },
  {
    role: "Software Engineer Co-op",
    company: "SpotDrop",
    location: "San Francisco, CA",
    period: "August 2025 – December 2025",
    type: "Co-op",
    description: "Built scalable geospatial ingestion pipelines and asynchronous services for a real-time event discovery platform.",
    highlights: [
      "Built a geospatial event-ingestion pipeline using AWS Lambda and concurrent processing, reducing event-discovery latency.",
      "Developed a schedule-synchronization service connecting Google Calendar with a PostgreSQL backend through asynchronous event processing.",
      "Collaborated with engineers, founders, and product stakeholders to break down requirements, debug cross-service issues, and deliver features through weekly sprints."
    ],
    tech: ["AWS Lambda", "Python", "PostgreSQL", "Concurrency", "Google Calendar API", "Docker"]
  },
  {
    role: "Software Engineer Intern",
    company: "Dreamable",
    location: "San Francisco, CA",
    period: "May 2025 – July 2025",
    type: "Internship",
    description: "Engineered FastAPI services, database schemas, and AI-powered workflow automations.",
    highlights: [
      "Built FastAPI services for AI-generated workflow records using Python, SQLAlchemy, Pydantic, and PostgreSQL.",
      "Designed REST APIs with input validation and soft deletion to preserve data integrity across user workflows.",
      "Developed n8n workflows using OpenAI embeddings to summarize and distribute content across Slack channels, reducing manual reporting effort by 50%."
    ],
    tech: ["FastAPI", "Python", "SQLAlchemy", "Pydantic", "PostgreSQL", "n8n", "OpenAI"]
  }
];

export const projects = [
  {
    id: "alfv-collections",
    title: "ALFV Collections",
    subtitle: "Action Legends Figure Vault",
    category: "Full-Stack Web Platform",
    tag: "Production",
    summary: "Production collectibles tracking platform and real-time market valuation engine for 500+ figures across 10,000+ sales.",
    description: "Built and launched a production collectibles tracking platform adopted by 50+ registered collectors, enabling users to manage vaults, track wishlist items, and monitor real-time portfolio market value. Engineered a live market valuation engine for 500+ collectibles, computing real-time fair market prices across 10,000+ scraped sales using an asymmetric outlier-penalized, exponentially decaying recency algorithm.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Supabase", "Tailwind CSS"],
    github: "https://github.com/Sidd4150/ALFV_collection",
    demo: "https://alfvcollections.com",
    image: null,
    highlights: [
      "Engineered live market valuation engine for 500+ collectibles across 10,000+ scraped sales using an asymmetric outlier-penalized recency algorithm",
      "Launched in production with 50+ registered collectors tracking portfolios and vaults",
      "Built with Next.js, TypeScript, Prisma ORM, and Supabase PostgreSQL"
    ]
  },
  {
    id: "opensupplyhub",
    title: "OpenSupplyHub",
    subtitle: "Global Supply Chain Transparency",
    category: "Open-Source Contribution",
    tag: "Open Source",
    summary: "Open-source frontend enhancements and regression testing for the global supply chain mapping platform.",
    description: "Contributed to OpenSupplyHub, the open-source supply chain mapping engine. Fixed critical frontend defects that prevented REST API error messages from displaying to users and authored unit test suites to protect against regression.",
    tech: ["React", "React Testing Library", "JavaScript", "REST APIs", "Jest"],
    github: "https://github.com/opensupplyhub",
    demo: "https://opensupplyhub.org",
    image: null,
    highlights: [
      "Fixed frontend defect preventing REST API error messages from being displayed to users",
      "Added unit tests with React Testing Library to verify error rendering and prevent regression",
      "Followed strict open-source review processes and CI/CD validation"
    ]
  },
  {
    id: "sf-rent-predictor",
    title: "SF Rent & ROI Predictor",
    subtitle: "Machine Learning Real Estate Valuation",
    category: "Machine Learning & Full Stack",
    tag: "ML & Analytics",
    summary: "Predictive ML application evaluating San Francisco real estate properties with Gradient Boosting and financial ROI modeling.",
    description: "Trained on real San Francisco rental market data, this application utilizes a custom Gradient Boosting Regressor (GBR) to forecast fair rental prices across neighborhoods. Built-in financial models calculate capitalization rates, cash flow, and ROI scenarios for real estate investors in real time.",
    tech: ["Python", "Flask", "Scikit-Learn", "Pandas", "React", "Tailwind CSS", "Railway"],
    github: "https://github.com/Sidd4150/San-Francisco-rent-and-ROI-predictor",
    demo: "https://sf-rent-and-roi-predictor.up.railway.app/",
    image: "Rent_img.png",
    highlights: [
      "Trained Gradient Boosting Regressor on comprehensive SF housing & rental data",
      "Real-time financial analysis engine evaluating cap rate and projected cash flow",
      "Interactive React UI backed by high-throughput Flask API deployed on Railway"
    ]
  },
  {
    id: "optcg-log",
    title: "One Piece TCG Deck Builder & Log",
    subtitle: "Card Database & Analytics",
    category: "Full-Stack Application",
    tag: "Full Stack",
    summary: "Card database, search engine, and deck builder for the One Piece trading card game.",
    description: "A complete MERN application enabling players to browse entire card collections with multi-parameter filtering, construct tournament decks, track competitive match logs, and export decklists.",
    tech: ["React", "Express.js", "MongoDB Atlas", "Node.js", "Tailwind CSS", "Railway"],
    github: "https://github.com/Sidd4150/OptcgLogNewVersion",
    demo: "https://optcglognewversion-production.up.railway.app/",
    image: "OPTCG.png",
    highlights: [
      "Optimized MongoDB Atlas queries for instantaneous multi-attribute card searches",
      "Interactive deck construction with mana curve visualizations and match log tracking",
      "Containerized and deployed on Railway cloud platform"
    ]
  },
  {
    id: "go-search-engine",
    title: "Go Inverted Index Search Engine",
    subtitle: "Low-Latency Information Retrieval",
    category: "Systems & Algorithms",
    tag: "Systems",
    summary: "Concurrent text search engine in GoLang featuring SQLite storage and inverted index querying.",
    description: "Engineered from the ground up to understand core information retrieval algorithms. Implemented custom tokenization, stop-word elimination, TF-IDF ranking primitives, and inverted index lookups backed by SQLite persistence.",
    tech: ["Go", "SQLite", "Inverted Index", "Concurrency", "Goroutines"],
    github: "https://github.com/Sidd4150/search-engine",
    demo: null,
    image: null,
    highlights: [
      "Custom Go tokenizer and inverted index lookup engine",
      "Concurrent document indexing taking advantage of Go goroutines",
      "SQLite integration for persistent document store and fast retrieval"
    ]
  }
];

export const technicalSkills = [
  {
    category: "Languages",
    skills: ["TypeScript / JavaScript", "Python", "Go", "SQL", "C"]
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "HTML / CSS", "Tailwind CSS", "Recharts", "React Testing Library"]
  },
  {
    category: "Backend & Data",
    skills: ["Node.js", "FastAPI", "REST APIs", "PostgreSQL", "Prisma", "SQLAlchemy", "MongoDB"]
  },
  {
    category: "Infrastructure & Tools",
    skills: ["AWS Lambda", "Docker", "GitHub Actions", "CI / CD", "Supabase", "Vercel", "Git"]
  }
];
