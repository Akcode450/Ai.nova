"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Navbar from "@/components/layout/Navbar";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <>
      <Navbar />

      <section className="relative min-h-screen overflow-hidden bg-[#050816]">
        {/* Background */}
        <div className="absolute inset-0 -z-30 bg-[radial-gradient(circle_at_top,#2563eb22,transparent_55%)]" />

        <div className="absolute -left-60 top-40 -z-20 h-[500px] w-[500px] rounded-full bg-cyan-500/15 blur-[180px]" />

        <div className="absolute -right-60 top-10 -z-20 h-[650px] w-[650px] rounded-full bg-indigo-600/15 blur-[200px]" />

        <Container className="flex min-h-screen items-center pt-28">
          <div className="grid w-full items-center gap-20 lg:grid-cols-2">

            {/* Image */}

            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="order-2 flex justify-center lg:order-1"
            >
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <div className="absolute inset-0 rounded-[40px] bg-cyan-500/25 blur-3xl" />

                <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-cyan-400/20 blur-3xl" />

                <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-indigo-500/20 blur-3xl" />

                <div className="relative overflow-hidden rounded-[32px] border border-cyan-400/20 bg-white/5 p-3 backdrop-blur-xl shadow-[0_0_80px_rgba(0,255,255,0.15)]">
                  <Image
                    src="/images/hero.webp"
                    alt="AI Dashboard"
                    width={620}
                    height={620}
                    priority
                    className="rounded-[24px]"
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* Content */}

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="order-1 text-right lg:order-2"
            >
              <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300">
                AI Development Studio
              </span>

              <h1 className="mt-8 text-5xl font-black leading-[1.15] text-white md:text-7xl">
                آینده کسب‌وکار
                <br />
                با هوش مصنوعی
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-9 text-slate-400">
                طراحی و توسعه سیستم‌های هوش مصنوعی،
                AI Agent،
                اتوماسیون سازمانی،
                چت‌بات‌های هوشمند،
                داشبوردهای مدیریتی
                و نرم‌افزارهای نسل جدید.
              </p>

              <div className="mt-12 flex flex-wrap justify-end gap-4">
                <Button size="lg">
                  شروع پروژه
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/15 bg-white/5 text-white hover:bg-white/10"
                >
                  مشاهده نمونه‌کارها
                </Button>
              </div>
                            <div className="mt-10 flex items-center justify-end gap-10 text-sm text-slate-500">

                <div className="text-right">
                  <p className="text-3xl font-bold text-white">50+</p>
                  <span>پروژه انجام شده</span>
                </div>

                <div className="text-right">
                  <p className="text-3xl font-bold text-white">20+</p>
                  <span>مشتری فعال</span>
                </div>

                <div className="text-right">
                  <p className="text-3xl font-bold text-white">99%</p>
                  <span>رضایت مشتری</span>
                </div>

              </div>

            </motion.div>

          </div>
        </Container>
      </section>
    </>
  );
}