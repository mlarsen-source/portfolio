import type {
  EducationEntry,
  Experience,
  MilitaryRole,
  Project,
  SkillGroup,
  SocialLink,
} from "../types";

export const profile = {
  name: "Matthew Larsen",
  title: "Front-End / Full-Stack Intern",
  caption: "Software Development BAS Student",
  kicker: "Software Engineering Portfolio",
  summary:
    "Software Development BAS student (2026) and current Front-End/Full-Stack Intern building production React, Next.js, and Dockerized applications. Skilled in scalable UI components, API and CMS integration, and Agile GitHub-based workflows. Retired U.S. Army senior leader transitioning into software engineering.",
  requestResumeUrl: "https://linkedin.com/in/mlarsen-source",
};

export const experiences: Experience[] = [
  {
    company: "CRE8 Labs Internship",
    role: "Front-End / Full-Stack Intern",
    period: "Jan 2026 - Present",
    highlights: [
      "Built 10+ reusable TypeScript UI components with React, Next.js, and Storybook to reduce duplicate implementation.",
      "Integrated Strapi CMS and backend APIs to deliver dynamic content in production features.",
      "Translated complex Figma specifications into responsive, high-performance components using GitHub Flow and Agile sprint workflows.",
    ],
  },
  {
    company: "CodeDay Labs Internship",
    role: "Software Development Intern",
    period: "Jan 2025 - Mar 2025",
    highlights: [
      "Strengthened project test coverage with Mocha and Chai on an active open-source codebase.",
      "Researched architecture and dependencies to align feature work with technical requirements.",
      "Collaborated with remote Agile teammates through GitHub and Slack workflows.",
    ],
  },
  {
    company: "Green River College Aviation Dept.",
    role: "Data Analysis Capstone and Scrum Master",
    period: "Sep 2024 - Dec 2024",
    highlights: [
      "Analyzed anonymized aviation certification data to support FAA compliance reporting.",
      "Revised Python data-cleaning scripts and built automated Excel dashboard workflows.",
      "Led Scrum ceremonies and backlog execution to align deliverables with stakeholder needs.",
    ],
  },
  {
    company: "United States Army",
    role: "Senior Logistics and Operations Leader",
    period: "2002 - 2024",
    highlights: [
      "Directed large-scale logistics, training, and operational missions while mentoring and developing future leaders.",
      "Managed multimillion-dollar equipment and supply chains using automated tracking systems and data-driven reporting.",
      "Streamlined transportation, maintenance, and distribution workflows through efficiency and risk-mitigation strategies.",
    ],
  },
];

export const militaryHistory: MilitaryRole[] = [
  {
    period: "2018 - 2024",
    title: "Operations and Training Supervisor",
    highlights: [
      "Developed and implemented comprehensive training plans to enhance readiness and efficiency in operational tasks.",
      "Coordinated and supervised complex operations, aligning objectives with resource availability.",
      "Provided mentorship and performance evaluations that supported professional growth and mission success.",
    ],
  },
  {
    period: "2016 - 2018",
    title: "Logistics Operations Supervisor",
    highlights: [
      "Directed transportation, supply chain management, and resource allocation to meet mission requirements.",
      "Streamlined logistics processes to reduce delays, improve efficiency, and minimize costs.",
      "Maintained accurate records of supplies and assets to ensure accountability and readiness.",
    ],
  },
  {
    period: "2015 - 2016",
    title: "Distribution and Inventory Supervisor",
    highlights: [
      "Maintained stock accuracy through audits and real-time inventory tracking systems.",
      "Managed the flow of goods to ensure timely delivery to end users and operational units.",
      "Established policies to improve inventory accuracy and minimize discrepancies.",
    ],
  },
  {
    period: "2013 - 2015",
    title: "Materials and Supply Chain Supervisor",
    highlights: [
      "Ensured reliable material availability through procurement planning and vendor coordination.",
      "Developed cost-reduction strategies without compromising quality standards.",
      "Monitored supply chain performance and delivered reports identifying improvement opportunities.",
    ],
  },
  {
    period: "2008 - 2013",
    title: "Transportation and Distribution Manager",
    highlights: [
      "Maintained operational readiness of vehicles and equipment through structured maintenance planning.",
      "Directed transportation logistics to ensure timely delivery of goods and personnel.",
      "Established transportation guidelines to improve efficiency and compliance with safety standards.",
    ],
  },
  {
    period: "2005 - 2008",
    title: "Automotive Maintenance and Repair Manager",
    highlights: [
      "Managed maintenance operations to ensure high-quality repairs and strict safety adherence.",
      "Implemented maintenance schedules that reduced downtime and extended vehicle lifespan.",
      "Trained and directed maintenance personnel to sustain technical proficiency and operational performance.",
    ],
  },
  {
    period: "2003 - 2005",
    title: "Logistics Specialist",
    highlights: [
      "Managed shipping, receiving, and storage operations to support organizational goals.",
      "Ensured accurate tracking and documentation of inventory levels and movements.",
      "Contributed to logistics planning aligned to mission objectives and resource needs.",
    ],
  },
  {
    period: "2002 - 2003",
    title: "Hazardous Materials Technician",
    highlights: [
      "Ensured safe handling, storage, and disposal of hazardous substances in regulatory compliance.",
      "Identified risk areas and implemented measures that reduced incident likelihood.",
      "Provided training and guidance on hazardous materials management and emergency response procedures.",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    heading: "Languages",
    items: ["Java", "JavaScript", "TypeScript", "Python", "SQL", "HTML", "CSS"],
  },
  {
    heading: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Storybook", "Figma", "Chromatic"],
  },
  {
    heading: "Backend and Data",
    items: [
      "Express.js",
      "Node.js",
      "REST APIs",
      "MySQL",
      "Strapi CMS",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Plotly",
    ],
  },
  {
    heading: "Testing and QA",
    items: ["JUnit", "Mocha", "Chai", "Postman"],
  },
  {
    heading: "Tools and Platforms",
    items: [
      "Git/GitHub",
      "Docker",
      "Maven",
      "JCodec",
      "FFmpeg",
      "Azure",
      "Google Cloud",
      "Windows Server",
      "Tableau",
      "Canva",
    ],
  },
  {
    heading: "Certifications",
    items: [
      "Docker Foundations Professional Certificate (Docker, 2026)",
      "Google Data Analytics Professional Certificate (Coursera, 2024)",
      "Agile Foundations (LinkedIn, 2024)",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "Salamander Centroid Finder",
    stack: "Java, JavaScript, Node.js, React, Next.js, Docker",
    summary:
      "A Dockerized video analysis platform that extracts frames, performs centroid detection, and returns analytical outputs through a modern UI + API architecture.",
    highlights: [
      "Designed a full-stack workflow connecting React/Next.js UI with an Express API layer.",
      "Implemented Java-based video processing and Maven-driven builds for reproducible execution.",
      "Containerized services to support scalable local and remote deployments.",
    ],
    repoLinks: [
      {
        label: "Centroid Finder",
        url: "https://github.com/mlarsen-source/centroid-finder",
      },
      {
        label: "Salamander Front End",
        url: "https://github.com/mlarsen-source/salamander_front_end",
      },
    ],
  },
  {
    name: "Hi-Res Meta Cleaner",
    stack: "Node.js, Express, MySQL, multer, music-metadata",
    summary:
      "An audio metadata management system for bulk upload, extraction, normalization, and export across large hi-res music libraries.",
    highlights: [
      "Built automated cleanup workflows for inconsistent or missing metadata tags.",
      "Implemented batch editing and normalization tools to speed up large-library maintenance.",
      "Added export capabilities to support long-term archival and data portability.",
    ],
    repoLinks: [
      {
        label: "Repository",
        url: "https://github.com/mlarsen-source/w26-sdev372-hi-res-meta-cleaner",
      },
    ],
  },
  {
    name: "Ramblebot - Language Model Generator",
    stack: "Java, JUnit",
    summary:
      "Implemented a custom tokenizer and unigram predictor to generate text from sample training corpora.",
    highlights: [
      "Designed tokenization, training, and prediction modules for controlled generation.",
      "Built JUnit tests to validate token logic and prediction behavior.",
      "Explored data structures and randomness to improve generation quality.",
    ],
    repoLinks: [
      {
        label: "Repository",
        url: "https://github.com/mlarsen-source/ramblebot",
      },
    ],
  },
  {
    name: "Truffula - File Tree Visualizer",
    stack: "Java, Command Line",
    summary:
      "Created a color-coded terminal utility for rendering readable directory trees from complex file structures.",
    highlights: [
      "Implemented recursive traversal and modular rendering logic.",
      "Focused on usability with cleaner tree formatting and display controls.",
      "Practiced maintainable CLI architecture for extensibility.",
    ],
    repoLinks: [
      {
        label: "Repository",
        url: "https://github.com/mlarsen-source/truffula",
      },
    ],
  },
];

export const educationEntries: EducationEntry[] = [
  {
    campus: "Green River College, Auburn, Washington",
    program: "Bachelor of Applied Science in Software Development",
    detail: "Expected Graduation: June 2026 | GPA: 4.0",
  },
  {
    campus: "Green River College, Auburn, Washington",
    program: "Data Analysis and Software Development AAST",
    detail: "Graduated with Highest Honors",
  },
];

export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/mlarsen-source/",
    iconUrl: "icons/li.svg",
  },
  {
    label: "GitHub",
    url: "https://github.com/mlarsen-source",
    iconUrl: "icons/gh.svg",
  },
  {
    label: "HackerRank",
    url: "https://www.hackerrank.com/profile/larsen_matthew",
    iconUrl: "icons/hr.svg",
  },
  {
    label: "LeetCode",
    url: "https://leetcode.com/u/msl1231/",
    iconUrl: "icons/lc.svg",
  },
];
