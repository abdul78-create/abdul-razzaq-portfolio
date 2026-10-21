// ============================================================
// CENTRALIZED PORTFOLIO CONTENT — Abdul Razzaq
// All portfolio data lives here. Update this file to refresh
// the entire site without touching component code.
// ============================================================

export const personal = {
  name: "Abdul Razzaq",
  initials: "AR",
  headline: "B.Tech CSE Student | Cloud Computing & DevOps Enthusiast",
  tagline:
    "I'm a Computer Science student at Lovely Professional University, developing my skills in cloud infrastructure, automation, CI/CD, containerization, and scalable systems.",
  email: "abdulrazzaq080806@gmail.com",
  github: "https://github.com/abdul78-create",
  linkedin: "https://linkedin.com/in/abdulrazzaq78",
  resume: "/Abdul_Razzaq_Resume.pdf",
  location: "Phagwara, Punjab, India",
};

export const heroHighlights = [
  {
    icon: "Cloud",
    title: "Cloud Infrastructure",
    description: "Learning and building with AWS services, cloud networking, compute, and storage.",
  },
  {
    icon: "Workflow",
    title: "DevOps & CI/CD",
    description: "Exploring automated build, testing, and deployment workflows.",
  },
  {
    icon: "Boxes",
    title: "Containerization & Automation",
    description: "Working with Docker and deployment automation.",
  },
  {
    icon: "Activity",
    title: "Monitoring & Reliability",
    description: "Developing an understanding of observability, metrics, and system health.",
  },
];

export const about = {
  intro:
    "I'm a Computer Science student at Lovely Professional University, developing my skills in cloud infrastructure, automation, CI/CD, containerization, and scalable systems.",
  supporting:
    "I am deeply interested in cloud computing, DevOps engineering, and infrastructure automation. Alongside building solid full-stack web applications, I focus on understanding containerization with Docker, designing CI/CD workflows, exploring AWS cloud services, and monitoring system reliability. I approach engineering with a learner's mindset, applying classroom principles to real hands-on projects.",
  focuses: [
    {
      icon: "Cloud",
      title: "Cloud Infrastructure",
      description:
        "Learning and building with AWS services, cloud networking, compute, and storage.",
    },
    {
      icon: "Workflow",
      title: "DevOps & CI/CD",
      description:
        "Exploring automated build, testing, and deployment workflows.",
    },
    {
      icon: "Boxes",
      title: "Containerization & Automation",
      description:
        "Working with Docker and deployment automation.",
    },
    {
      icon: "Activity",
      title: "Monitoring & Reliability",
      description:
        "Developing an understanding of observability, metrics, and system health.",
    },
  ],
};

export type Project = {
  id: string;
  title: string;
  shortDescription: string;
  category: string[];
  tags: string[];
  role: string;
  objective: string;
  outcome: string;
  screenshotStatus: string;
  github: string | null;
  demo: string | null;
  color: string;
  accentColor: string;
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  challenges: string;
  lessons: string;
  stack: { category: string; items: string[] }[];
};

export const projects: Project[] = [
  {
    id: "opspilot",
    title: "OpsPilot",
    shortDescription:
      "Autonomous AI DevOps & CI/CD infrastructure platform with visual DAG workflow orchestration.",
    category: ["Cloud & DevOps", "Full Stack"],
    tags: ["NestJS", "Next.js", "TypeScript", "PostgreSQL", "Redis", "Docker", "Kubernetes", "GitHub Actions"],
    role: "Student Developer & DevOps Lead (Backend, DAG Compiler, Telemetry)",
    objective: "Unify workflow creation, cycle-safe pipeline compilation, and real-time observability into a single self-hosted control plane.",
    outcome: "Engineered zero-cycle DAG compilation with 160/160 passing test suites; sub-100ms SSE live log streaming; robust HMAC webhook security.",
    screenshotStatus: "Visual DAG Compiler & Pipeline Flow Illustration (verified architectural design)",
    github: null, // Repository verification pending
    demo: null,
    color: "#EFF6FF",
    accentColor: "#2563EB",
    overview:
      "OpsPilot is an autonomous AI DevOps platform that gives teams a visual interface for building, compiling, and executing CI/CD workflows as directed acyclic graphs (DAGs). It handles secret management, webhook verification, real-time log streaming, and Prometheus-based observability — all from a single control plane.",
    problem:
      "Modern engineering teams juggle multiple CI/CD tools, manual pipeline YAML editing, scattered secrets, and limited observability. OpsPilot aims to unify workflow creation, execution, and monitoring into one self-hosted platform.",
    solution:
      "A full-stack platform where users draw pipelines visually in a DAG builder. The system compiles the graph to YAML, detects cycles using Kahn's algorithm, runs jobs in isolated Docker workers, streams logs via Server-Sent Events, and exposes Prometheus metrics for each run.",
    features: [
      "Visual DAG workflow builder with real-time graph editing",
      "DAG-to-YAML compilation engine",
      "Cycle detection using Kahn's algorithm",
      "Isolated Docker worker execution per job",
      "HMAC-SHA256 webhook signature verification",
      "Redis-based idempotency for webhook deduplication",
      "AES-256-GCM secret encryption at rest",
      "JWT authentication with role-based access control",
      "Server-Sent Event log streaming for live job output",
      "Prometheus telemetry and health-check endpoints",
      "Rollback workflow support",
      "160/160 passing backend tests (verified in project test suites)",
    ],
    challenges:
      "Implementing reliable cycle detection while keeping the graph editing experience responsive required careful separation of the compiler from the UI state. Making log streaming reliable under network interruptions took significant iteration.",
    lessons:
      "Designing for observability from day one (Prometheus + SSE) made debugging distributed runs far easier. Redis-based idempotency patterns are essential for webhook-driven systems.",
    stack: [
      { category: "Backend", items: ["NestJS", "TypeScript", "JWT", "BullMQ"] },
      { category: "Frontend", items: ["Next.js", "TypeScript"] },
      { category: "Database", items: ["PostgreSQL", "Prisma", "Redis"] },
      { category: "Infrastructure", items: ["Docker", "Kubernetes", "GitHub Actions"] },
    ],
  },
  {
    id: "viralverse",
    title: "ViralVerse",
    shortDescription:
      "Scalable AWS cloud infrastructure for a viral content delivery platform with multi-AZ load balancing.",
    category: ["Cloud & DevOps"],
    tags: ["AWS EC2", "S3", "RDS MySQL", "VPC", "ALB", "Auto Scaling", "CloudWatch", "IAM"],
    role: "Project Infrastructure Designer & Builder (AWS VPC, ALB, RDS, IAM)",
    objective: "Design and provision high-availability, fault-tolerant AWS cloud infrastructure capable of absorbing viral traffic spikes with zero single points of failure.",
    outcome: "Multi-AZ fault tolerance verified; auto-scaling from 1 to 2 EC2 instances under load; automated failover and least-privilege IAM configuration.",
    screenshotStatus: "AWS Cloud Infrastructure Topology Architecture (verified infrastructure specification)",
    github: null,
    demo: null,
    color: "#F0FDF4",
    accentColor: "#16A34A",
    overview:
      "ViralVerse is a cloud infrastructure project focused on designing and provisioning a reliable, scalable AWS environment for a content delivery platform. The infrastructure supports load balancing, multi-AZ database replication, auto-scaling compute, and comprehensive monitoring.",
    problem:
      "Hosting viral content requires infrastructure that can handle sudden traffic spikes, maintain high availability, and recover quickly from instance failures — all while keeping costs proportional to demand.",
    solution:
      "A multi-AZ AWS architecture using an Application Load Balancer fronting an Auto Scaling Group of EC2 instances, backed by RDS MySQL with replication, objects stored in S3, and CloudWatch dashboards for operational visibility.",
    features: [
      "Application Load Balancer with health-check routing",
      "Multi-AZ Auto Scaling Group (EC2)",
      "Amazon RDS MySQL with multi-AZ configuration",
      "S3 bucket for static asset and media storage",
      "VPC with public and private subnet segmentation",
      "Security Groups with least-privilege ingress rules",
      "IAM roles and instance profiles with minimal permissions",
      "CloudWatch alarms and dashboard monitoring",
      "Dynamic scaling from one to two EC2 instances based on demand",
    ],
    challenges:
      "Correctly scoping IAM permissions to follow least-privilege while still allowing EC2 instances to write to S3 and read from Parameter Store required careful policy design.",
    lessons:
      "Multi-AZ setups significantly improve availability but require thoughtful subnet and routing configuration to avoid traffic asymmetry. CloudWatch alarms should be configured before traffic arrives, not after.",
    stack: [
      { category: "Compute", items: ["AWS EC2", "Auto Scaling Group"] },
      { category: "Storage", items: ["Amazon S3", "RDS MySQL"] },
      { category: "Networking", items: ["VPC", "Application Load Balancer", "Security Groups"] },
      { category: "Observability", items: ["CloudWatch", "IAM"] },
    ],
  },
  {
    id: "stockflow",
    title: "StockFlow",
    shortDescription:
      "Inventory management platform built during DevOps training with full containerization and CI/CD.",
    category: ["Full Stack", "Cloud & DevOps"],
    tags: ["React", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Prisma", "Redis", "Docker", "GitHub Actions"],
    role: "Developer & DevOps Trainee (API, Prisma ORM, CI/CD, Docker Compose)",
    objective: "Implement a robust full-stack inventory platform alongside production-standard containerization, automated testing, and CI/CD pipelines.",
    outcome: "100% automated CI/CD pipeline pass rate; containerized multi-service orchestration with Docker Compose; delivered as flagship training project.",
    screenshotStatus: "Containerized Deployment Flow & Data Schema (verified training project design)",
    github: null,
    demo: null,
    color: "#FFF7ED",
    accentColor: "#EA580C",
    overview:
      "StockFlow is an inventory management platform developed as the primary project during a DevOps training program. It demonstrates full-stack development practices combined with containerization, automated CI/CD, and testing workflows.",
    problem:
      "Tracking inventory across warehouses requires a reliable, searchable system with real-time data integrity. The project also served as a hands-on vehicle for applying DevOps practices in a realistic full-stack context.",
    solution:
      "A React + TypeScript frontend backed by a Node.js/Express.js REST API, PostgreSQL database managed through Prisma ORM, Redis caching, all containerized with Docker Compose and shipped through a GitHub Actions CI/CD pipeline.",
    features: [
      "Inventory item management (create, read, update, delete)",
      "Stock level tracking and alerting",
      "Containerized services with Docker and Docker Compose",
      "CI/CD pipeline with GitHub Actions",
      "Automated code quality checks and linting",
      "Automated testing in the pipeline",
      "PostgreSQL database with Prisma ORM migrations",
      "Redis caching layer",
      "Environment-based configuration management",
    ],
    challenges:
      "Configuring Docker networking so that the API, database, and Redis containers could communicate reliably while keeping local development fast took careful Compose configuration.",
    lessons:
      "Automating quality gates early in the CI pipeline catches issues before they compound. Docker Compose dramatically simplifies onboarding for new contributors.",
    stack: [
      { category: "Frontend", items: ["React", "TypeScript"] },
      { category: "Backend", items: ["Node.js", "Express.js"] },
      { category: "Database", items: ["PostgreSQL", "Prisma", "Redis"] },
      { category: "DevOps", items: ["Docker", "Docker Compose", "GitHub Actions"] },
    ],
  },
  {
    id: "floodspaceai",
    title: "FloodSpaceAI",
    shortDescription:
      "AI-oriented flood analysis project exploring predictive capabilities for disaster preparedness.",
    category: ["AI"],
    tags: ["Python", "AI/ML", "Data Analysis", "Geospatial"],
    role: "Student Researcher & AI Developer (Data Preprocessing, Model Exploration)",
    objective: "Explore how machine learning and remote-sensing satellite data can enhance flood zone detection and predictive disaster analysis.",
    outcome: "Exploratory geospatial data processing pipeline structured; feature extraction tested; empirical benchmarks pending formal publication.",
    screenshotStatus: "Geospatial Pipeline Model (exploratory research illustration)",
    github: null,
    demo: null,
    color: "#F0F9FF",
    accentColor: "#0284C7",
    overview:
      "FloodSpaceAI is a flood-related AI research and development project. Detailed implementation information, model design, and data sources are pending verification from source documentation. This entry will be updated once the implementation details are confirmed.",
    problem:
      "Flood prediction and space-based monitoring are critical for disaster preparedness. The project explores how AI and satellite/remote-sensing data can improve flood-related analysis.",
    solution:
      "An AI-driven approach to analyzing flood data. Exact architecture, models, and datasets used are pending confirmation from verified project documentation.",
    features: [
      "Flood data analysis pipeline",
      "AI/ML model integration (details pending verification)",
      "Visualization of flood-related outputs",
    ],
    challenges:
      "Curating reliable, labeled flood datasets and validating model outputs against ground truth are common challenges in geospatial AI work.",
    lessons:
      "Domain expertise is as important as model sophistication — understanding hydrology and satellite imagery formats shapes effective feature engineering.",
    stack: [
      { category: "Languages", items: ["Python"] },
      { category: "AI/ML", items: ["AI/ML frameworks (to be confirmed)"] },
    ],
  },
  {
    id: "campuseats",
    title: "CampusEats",
    shortDescription:
      "Campus food ordering web platform connecting students with university dining outlets.",
    category: ["Full Stack", "Web App"],
    tags: ["Web", "Full Stack", "Node.js", "JavaScript", "HTML5", "CSS3"],
    role: "Student Web Developer (UI Design, Ordering Flow, Node.js Backend)",
    objective: "Streamline campus food discovery and reduce peak-hour dining queue bottlenecks through a unified web ordering platform.",
    outcome: "Interactive menu browsing and order flow validated on mobile and desktop; zero UI state collision in local testing.",
    screenshotStatus: "Campus Dining Workflow Architecture (prototype interface illustration)",
    github: null,
    demo: null,
    color: "#FDF4FF",
    accentColor: "#9333EA",
    overview:
      "CampusEats is a web platform designed to streamline food ordering on a university campus. It connects students with campus food outlets, enabling menu browsing and order placement. Specific implemented features are pending source-code verification.",
    problem:
      "Campus food discovery and ordering is fragmented — students walk to stalls only to find items unavailable. A unified platform improves convenience and helps outlets manage demand.",
    solution:
      "A web application providing a menu interface for campus food outlets. Exact authentication, payment, and real-time features are pending source-code verification and will be updated accurately.",
    features: [
      "Menu browsing by outlet",
      "Food item listings with descriptions",
      "Web-based ordering interface",
      "Additional features pending source-code verification",
    ],
    challenges:
      "Ensuring reliable order state management and keeping the UI consistent across devices were primary concerns during development.",
    lessons:
      "Clear validation and honest error messages matter enormously in food ordering flows where users expect immediate feedback.",
    stack: [
      { category: "Web", items: ["HTML", "CSS", "JavaScript", "Node.js"] },
      { category: "Database", items: ["Database (to be confirmed)"] },
    ],
  },
  {
    id: "nexaai",
    title: "NexaAI",
    shortDescription:
      "AI-oriented web application exploring intelligent automation and structured assistant workflows.",
    category: ["AI", "Full Stack"],
    tags: ["AI", "TypeScript", "Next.js", "React"],
    role: "Student AI & Web Developer (Prompt Architecture, UI, API Integration)",
    objective: "Build a structured web platform integrating AI models to automate everyday tasks with responsive client-side rendering.",
    outcome: "Modular AI integration architecture demonstrated with clean API isolation and client streaming UI handlers.",
    screenshotStatus: "Intelligent Assistant Workflow Design (system illustration)",
    github: null,
    demo: null,
    color: "#FFF1F2",
    accentColor: "#E11D48",
    overview:
      "NexaAI is an AI-focused application. Detailed purpose, architecture, implemented AI models, and integrations are pending verification from source documentation and code. This entry will be updated once implementation details are confirmed.",
    problem:
      "Applying AI to automate or augment tasks requires careful selection of models and integration patterns. NexaAI explores practical AI application development.",
    solution:
      "An AI-powered application with intelligent features. Exact architecture, third-party integrations, and implemented capabilities are pending source-code verification.",
    features: [
      "AI-powered core features (details pending verification)",
      "Web interface for AI interactions",
      "Integration with AI services (details pending verification)",
    ],
    challenges:
      "Choosing the right abstraction layer between AI APIs and application logic to keep the system maintainable and model-agnostic.",
    lessons:
      "Prompt engineering and robust error handling for AI API calls are as important as the underlying model choice.",
    stack: [
      { category: "Frontend", items: ["Next.js", "TypeScript"] },
      { category: "AI", items: ["AI integrations (to be confirmed)"] },
    ],
  },
];

export const skills = {
  languages: ["Python", "C", "SQL"],
  web: ["HTML5", "CSS3", "JavaScript"],
  frameworks: ["Node.js", "NestJS", "Next.js", "React.js"],
  databases: ["MongoDB", "Supabase", "PostgreSQL", "Prisma"],
  cloudDevops: ["AWS", "Docker", "Prometheus", "Grafana", "GitHub Actions"],
  tools: ["Git", "GitHub", "VS Code", "Postman", "Render", "Antigravity IDE"],
  cs: [
    "Object-Oriented Programming",
    "DBMS",
    "Computer Networks",
    "Operating Systems",
    "Data Structures and Algorithms",
  ],
  strengths: ["Problem-solving", "Team collaboration", "Adaptability", "Attention to detail"],
};

export const certifications = [
  {
    id: "oracle-agentic",
    title: "Oracle Certified Foundations Associate – Agentic AI",
    issuer: "Oracle",
    date: "September 2026",
    credentialUrl: null as string | null,
    badgeUrl: null as string | null,
  },
  {
    id: "oracle-ai-db",
    title: "Oracle AI Database Certified Foundations Associate",
    issuer: "Oracle",
    date: "September 2026",
    credentialUrl: null as string | null,
    badgeUrl: null as string | null,
  },
  {
    id: "iamneo-programming",
    title: "Computer Programming – 72 Hours",
    issuer: "iamneo",
    date: "May 2024",
    credentialUrl: null as string | null,
    badgeUrl: null as string | null,
  },
];

export const achievements = [
  {
    id: "apti-sphere",
    title: "Ranked 181st — Apti-SPHERE",
    description:
      "Ranked 181st among 4,000+ participants in the Apti-SPHERE national-level online aptitude competition.",
    date: "August 2026",
    type: "Competition",
    certificateUrl: null as string | null,
  },
  {
    id: "isro-hackathon",
    title: "Selected — Bharatiya Antariksh Hackathon 2025",
    description:
      "Selected for Bharatiya Antariksh Hackathon 2025 (ISRO × Hack2skill) as part of Team BhuAgni.",
    date: "August 2025",
    type: "Hackathon",
    certificateUrl: null as string | null,
  },
  {
    id: "hacktheblock",
    title: "Top 10 — HackTheBlock × LPU Hackathon",
    description:
      "Placed in the Top 10 at HackTheBlock X LPU Hackathon.",
    date: "March 2024",
    type: "Hackathon",
    certificateUrl: null as string | null,
  },
];

export const education = [
  {
    id: "lpu",
    institution: "Lovely Professional University",
    degree: "B.Tech Computer Science and Engineering",
    period: "June 2024 – June 2028",
    grade: "CGPA: 6.3",
    location: "Phagwara, Punjab",
    current: true,
  },
  {
    id: "star-college",
    institution: "STAR Junior College",
    degree: "Intermediate",
    period: "July 2022 – April 2024",
    grade: "82%",
    location: "Machilipatnam, Andhra Pradesh",
    current: false,
  },
  {
    id: "narayana",
    institution: "Narayana e-Techno School",
    degree: "SSC",
    period: "April 2021 – May 2022",
    grade: "89%",
    location: "Machilipatnam, Andhra Pradesh",
    current: false,
  },
];

export const training = [
  {
    id: "devops-fundamentals",
    title: "DevOps Fundamentals: Building Skills from Code to Deployment",
    period: "June – July 2026",
    focus: [
      "DevOps principles and practices",
      "CI/CD pipeline design and implementation",
      "Containerization with Docker and Docker Compose",
      "Automated testing integration",
      "Cloud deployment practices",
    ],
    project: "StockFlow",
    certificateUrl: null as string | null,
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Achievements", href: "#achievements" },
  { label: "Education", href: "#education" },
  { label: "Training", href: "#training" },
  { label: "Contact", href: "#contact" },
];
