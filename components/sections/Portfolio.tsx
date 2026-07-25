"use client";

import { motion } from "framer-motion";

import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/section-title";
import PortfolioCard from "@/components/portfolio/PortfolioCard";

const projects = [
  {
    title: "AI Analytics Dashboard",
    category: "Artificial Intelligence",
    image: "/images/portfolio/ai-dashboard.webp",
    tags: ["Next.js", "OpenAI", "TypeScript"],
  },
  {
    title: "Smart CRM Platform",
    category: "Enterprise",
    image: "/images/portfolio/crm.webp",
    tags: ["React", "Node.js", "AI"],
  },
  {
    title: "AI Customer Chatbot",
    category: "Conversational AI",
    image: "/images/portfolio/chatbot.webp",
    tags: ["GPT", "Automation", "API"],
  },
  {
    title: "Business Automation",
    category: "Workflow",
    image: "/images/portfolio/automation.webp",
    tags: ["n8n", "AI", "Cloud"],
  },
  {
    title: "Predictive Analytics",
    category: "Data Science",
    image: "/images/portfolio/analytics.webp",
    tags: ["Python", "ML", "Dashboard"],
  },
  {
    title: "Healthcare Assistant",
    category: "Medical AI",
    image: "/images/portfolio/healthcare.webp",
    tags: ["AI", "LLM", "Healthcare"],
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="bg-[#050816] py-28"
    >
      <Container>

        <SectionTitle
          badge="Portfolio"
          title="نمونه پروژه‌های ما"
          description="نمونه‌ای از پروژه‌های مبتنی بر هوش مصنوعی، نرم‌افزارهای سازمانی و راهکارهای مدرن."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: index * 0.1,
              }}
            >
              <PortfolioCard {...project} />
            </motion.div>
          ))}

        </div>

      </Container>
    </section>
  );
}