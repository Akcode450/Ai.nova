"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import GlassCard from "@/components/ui/glass-card";

type PortfolioCardProps = {
  title: string;
  category: string;
  image: string;
  tags: string[];
};

export default function PortfolioCard({
  title,
  category,
  image,
  tags,
}: PortfolioCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <GlassCard className="overflow-hidden">

        <div className="relative h-64 overflow-hidden">

          <Image
            src="/images/hero.webp"
            alt={title}
            fill
            className="object-cover transition duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent" />

        </div>

        <div className="p-7">

          <span className="text-sm text-cyan-300">
            {category}
          </span>

          <h3 className="mt-3 text-2xl font-bold text-white">
            {title}
          </h3>

          <div className="mt-6 flex flex-wrap gap-2">

            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
              >
                {tag}
              </span>
            ))}

          </div>

          <button className="mt-8 flex items-center gap-2 font-medium text-cyan-300 transition hover:gap-3">

            مشاهده پروژه

            <ArrowUpRight size={18} />

          </button>

        </div>

      </GlassCard>
    </motion.div>
  );
}
