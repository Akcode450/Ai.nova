"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";

type Props = {
  badge: string;
  title: string;
  description: string;
};

export default function SectionTitle({
  badge,
  title,
  description,
}: Props) {
  return (
    <div className="mx-auto mb-20 max-w-3xl text-center">

      <Reveal>
        <motion.span
          whileHover={{ scale: 1.05 }}
          className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-300"
        >
          {badge}
        </motion.span>
      </Reveal>

      <Reveal delay={0.1}>
        <h2 className="mt-8 text-5xl font-black leading-tight text-white md:text-6xl">
          {title}
        </h2>
      </Reveal>

      <Reveal delay={0.2}>
        <p className="mt-6 text-lg leading-9 text-slate-400">
          {description}
        </p>
      </Reveal>

    </div>
  );
}