"use client";

import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/section-title";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#050816] py-28"
    >
      <Container>

        <SectionTitle
          badge="Contact"
          title="شروع همکاری"
          description="اگر برای کسب‌وکار خود به راهکارهای مبتنی بر هوش مصنوعی، توسعه نرم‌افزار یا اتوماسیون نیاز دارید، فرم زیر را تکمیل کنید."
        />

        <div className="grid gap-10 lg:grid-cols-2">

          {/* Info */}

          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">

            <h3 className="text-3xl font-bold text-white">
              بیایید پروژه شما را بسازیم.
            </h3>

            <p className="mt-6 leading-8 text-slate-400">
              ما در طراحی Agentهای هوشمند، اتوماسیون سازمانی،
              توسعه نرم‌افزارهای مدرن و راهکارهای مبتنی بر AI
              همراه شما هستیم.
            </p>

            <div className="mt-10 space-y-6">

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-300">
                  <Mail size={22} />
                </div>

                <div>
                  <p className="text-white">Email</p>
                  <span className="text-slate-400">
                    ak.code.ai@gmail.com
                  </span>
                </div>

              </div>

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-300">
                  <Phone size={22} />
                </div>

                <div>
                  <p className="text-white">Phone</p>
                  <span className="text-slate-400">
                    +98 910 055 5308
                  </span>
                </div>

              </div>

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-300">
                  <MapPin size={22} />
                </div>

                <div>
                  <p className="text-white">Location</p>
                  <span className="text-slate-400">
                    ایران/ قم
                  </span>
                </div>

              </div>

            </div>

          </div>

          {/* Form */}

          <form className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">

            <div className="space-y-6">

              <input
                type="text"
                placeholder="نام شما"
                className="w-full rounded-2xl border border-white/10 bg-[#0b1225] px-5 py-4 text-white outline-none transition focus:border-cyan-400"
              />

              <input
                type="email"
                placeholder="ایمیل"
                className="w-full rounded-2xl border border-white/10 bg-[#0b1225] px-5 py-4 text-white outline-none transition focus:border-cyan-400"
              />

              <input
                type="text"
                placeholder="نام شرکت"
                className="w-full rounded-2xl border border-white/10 bg-[#0b1225] px-5 py-4 text-white outline-none transition focus:border-cyan-400"
              />

              <textarea
                rows={6}
                placeholder="درباره پروژه خود بنویسید..."
                className="w-full rounded-2xl border border-white/10 bg-[#0b1225] px-5 py-4 text-white outline-none transition focus:border-cyan-400"
              />

              <button
                type="submit"
                className="w-full rounded-2xl bg-cyan-500 py-4 font-semibold text-black transition hover:bg-cyan-400"
              >
                شروع پروژه
              </button>

            </div>

          </form>

        </div>

      </Container>
    </section>
  );
}