"use client";

import { motion } from "framer-motion";
import {
  Bot,
  MessageSquare,
  Workflow,
  Globe,
  LayoutDashboard,
  Cloud,
} from "lucide-react";

import Container from "@/components/layout/Container";

const services = [
  {
    icon: Bot,
    title: "AI Agents",
    description:
      "طراحی Agentهای هوشمند برای انجام وظایف پیچیده و خودکار.",
  },
  {
    icon: MessageSquare,
    title: "AI Chatbots",
    description:
      "چت‌بات‌های هوشمند متصل به داده‌ها و سیستم‌های سازمانی.",
  },
  {
    icon: Workflow,
    title: "Automation",
    description:
      "اتوماسیون فرآیندهای کسب‌وکار با استفاده از هوش مصنوعی.",
  },
  {
    icon: Globe,
    title: "Web Applications",
    description:
      "توسعه وب‌اپلیکیشن‌های سریع، مدرن و مقیاس‌پذیر.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboards",
    description:
      "داشبوردهای مدیریتی و تحلیلی با طراحی حرفه‌ای.",
  },
  {
    icon: Cloud,
    title: "Cloud & API",
    description:
      "طراحی API و اتصال سرویس‌های ابری و مدل‌های AI.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#050816] py-28"
    >
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-300">
            Services
          </span>

          <h2 className="mt-6 text-5xl font-black text-white">
            خدمات ما
          </h2>

          <p className="mt-6 text-lg leading-9 text-slate-400">
            از طراحی Agentهای هوشمند تا توسعه نرم‌افزارهای سازمانی،
            راهکارهای مدرن مبتنی بر هوش مصنوعی را برای رشد کسب‌وکار شما
            ارائه می‌دهیم.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl hover:border-cyan-400/30 hover:bg-white/10"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300 transition duration-300 group-hover:scale-110">

                  <Icon size={32} />

                </div>

                <h3 className="mt-8 text-2xl font-bold text-white">
                  {service.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-400">
                  {service.description}
                </p>

              </motion.div>
            );
          })}

        </div>
      </Container>
    </section>
  );
}