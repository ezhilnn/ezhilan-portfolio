import { Experience } from "@/types/experience";

export const experiences: Experience[] = [
  {
    company: "Rocket India",
    location: "Chennai",
    currentRole: "Software Engineer I",

    roleHistory: [
      {
        role: "Software Engineer Intern",
        duration: "Jan 2025 - Jun 2025",
      },
      {
        role: "Software Engineer Trainee",
        duration: "Jul 2025 - Dec 2025",
      },
      {
        role: "Software Engineer I",
        duration: "Jan 2026 - Present",
      },
    ],

    achievements: [
      "Built an end-to-end automated loan review system using Kubernetes, Kafka, Python AI services, Playwright and Google Cloud.",
      "Designed a pipeline to fetch loan documents from SFTP and process them through AI validation engines.",
      "Developed internal QA/UAT tools to visualize AI evaluation results.",
      "Revamped application UI/UX to reduce loan origination cycle time.",
      "Owned feature development, schema design, sprint tracking and production support.",
      "Improved processing efficiency by approximately 5x to 10x.",
    ],
  },

  {
    company: "Bonfiglioli Transmissions",
    location: "Chennai",
    currentRole: "Process Engineer Intern",

    achievements: [
      "Conducted data analytics for more than 3500 models in the APCN project.",
      "Performed additional data analysis for validation software development.",
    ],
  },
];