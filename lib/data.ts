// =============================================================================
// PORTFOLIO CONTENT - EDIT THIS FILE TO PERSONALIZE YOUR SITE
// =============================================================================
// Paste your actual GitHub URLs into each project's `github` field.
// =============================================================================

export const profile = {
  name: "Vamshi Krishna Emmadi",
  title: "Python & AI Developer",
  tagline:
    "An enthusiast exploring Python, AI, and agentic tools. Learning by building.",
  availability:
    "Open to internships and full-time roles — available immediately.",
  location: "Hyderabad, India",
  email: "vamshikris25@gmail.com",
  phone: "+91 8688086325",
  resumeUrl: "/VamshiKrishna-resume.pdf",
  avatarInitials: "VK",
  avatarImage: "/avatar.jpg",
  social: {
    linkedin: "https://www.linkedin.com/in/vamshi-krishna-emmadi/",
    github: "https://github.com/heyvamshii",
    twitter: "https://x.com/vamshi__emmadi",
    instagram: "https://instagram.com/heyvamshii",
  },
};

export const about = {
  heading: "About Me",
  paragraphs: [
    "I am a recent B.Tech graduate (2026) in Computer Science & Engineering (AI/ML) from CMRCET. My focus is on applying software development and programming fundamentals to design scalable applications and produce more output using AI Agents.",
    "I'm drawn to problems at the intersection of AI and real-world utility. Whether that's a deep-learning model for medical imaging, an always-on voice assistant, a full-stack Django website for a restaurant, or an AI-powered lead-generation tool, I enjoy learning by building. Outside of coursework I led and supported entrepreneurship initiatives on and off campus.",
  ],
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["C", "Python", "SQL", "HTML", "CSS", "Django"],
  },
  {
    category: "AI / ML",
    items: ["Agentic AI", "AI Tools", "Deep Learning", "TensorFlow", "Streamlit"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Replit", "Google Firebase API", "Google Maps API"],
  },
];

export type Project = {
  title: string;
  description: string;
  bullets?: { label: string; text: string }[];
  tags: string[];
  github?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    title: "Food on Fire - Full-Stack Django Platform",
    description:
      "Built end-to-end: customer ordering, a restaurant dashboard, delivery agent tracking, and an admin panel, all in one codebase. Integrated Razorpay for payments, the Google Firebase API for OTP-only auth, and live GPS order tracking on a map via the Google Maps API.",
    bullets: [
      {
        label: "Key debug",
        text: "Razorpay webhook verification failed in production due to a signature mismatch. I traced it and fixed it using raw error resolution handling.",
      },
    ],
    tags: ["HTML", "CSS", "JavaScript", "PostgreSQL", "Django", "Google Firebase API", "Google Maps API", "Razorpay"],
    live: "https://www.foodonfire.in/",
  },
  {
    title: "Jerry - Voice AI Assistant",
    description:
      "Always-on Windows voice agent with \"Hey Jerry\" wake-word detection, Whisper speech-to-text, and a Gemini-powered tool-use loop that can drive the browser and take actions on command and perform any task on my laptop.",
    tags: ["Python", "Gemini 2.5 Flash", "Whisper"],
    github: "https://github.com/heyvamshii/hey-jerry",
  },
  {
    title: "LeadGen AI",
    description:
      "An end-to-end B2B lead discovery tool designed to automate market research using artificial intelligence.",
    bullets: [
      {
        label: "User Infrastructure",
        text: "Developed a secure user authentication and session management system for personalized data storage.",
      },
      {
        label: "AI Pipeline",
        text: "Built a robust Python backend that processes user parameters (service, target audience, region) to orchestrate structured, high-accuracy lead generation.",
      },
      {
        label: "Data Export",
        text: "Integrated data serialization processing to dynamically convert live AI outputs into structured, downloadable Excel files for immediate business use.",
      },
    ],
    tags: ["Python", "AI Powered", "Automation", "AI Tools", "Google Search", "Real-time Data"],
    github: "https://github.com/heyvamshii/leadgen-ai",
  },
  {
    title: "Cervical Spine Fracture Detection",
    description:
      "Deep-learning model using MobileNetV2 and EfficientNetB4 to detect cervical spine fractures from CT scans. Grad-CAM provides explainable localization across vertebrae C1 to C7, mapped to a medical knowledge base.",
    tags: ["Python", "Deep Learning", "TensorFlow", "Streamlit", "Grad-CAM"],
    github: "https://github.com/heyvamshii/Cervical-Spine-Fracture-Detection-using-Deep-Learning-using-CT-scans",
  },
];

export const achievements: string[] = [
  "Led the organizing committee of “Nexus” E-Summit, a flagship entrepreneurship event featuring top startup founders and industry speakers, with 700+ participants and competitions with a ₹25,000 prize pool.",
  "Represented E-Cell IIT Bombay at CMRCET, promoting entrepreneurship and innovation through workshops, coding events, and startup-focused initiatives.",
  "Supported coding events, technical sessions, and student-led tech projects as part of the Innovation and Entrepreneurship Board.",
];

export type Certification = {
  title: string;
  issuer: string;
  date: string;
  description: string;
  skills: string[];
  url?: string;
};

export const certifications: Certification[] = [
  {
    title: "AI Engineer Core Track: LLM Engineering, RAG, QLoRA, Agents",
    issuer: "Udemy · Instructors: Ed Donner, Ligency",
    date: "July 2026",
    description:
      "A 33.5-hour hands-on program covering the end-to-end LLM engineering workflow: building LLM-powered applications, Retrieval-Augmented Generation (RAG) pipelines, parameter-efficient fine-tuning with QLoRA, and designing autonomous AI agents.",
    skills: ["LLM Engineering", "RAG", "QLoRA Fine-Tuning", "AI Agents"],
    url: "https://ude.my/UC-11f684db-ee5e-41a1-b045-2a3abd73abf0",
  },
];

export type EducationItem = {
  school: string;
  degree: string;
  period: string;
  details?: string;
  skills?: string[];
};

export const education: EducationItem[] = [
  {
    school: "CMR College of Engineering & Technology",
    degree: "B.Tech, Computer Science & Engineering (AI/ML)",
    period: "Recent graduate, 2026",
    details: "CGPA: 7.01",
    skills: ["Python", "SQL", "AI Tools", "Agentic AI"],
  },
];
