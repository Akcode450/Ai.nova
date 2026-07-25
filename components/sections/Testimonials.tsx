import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/section-title";

const testimonials = [
  {
    name: "محمد رضایی",
    company: "CEO - TechVision",
    text: "همکاری با AI Nova تجربه‌ای فوق‌العاده بود. کیفیت توسعه و سرعت اجرا فراتر از انتظار ما بود.",
  },
  {
    name: "سارا احمدی",
    company: "Founder - SmartCRM",
    text: "سیستم هوش مصنوعی طراحی‌شده باعث شد زمان انجام بسیاری از فرآیندهای ما به کمتر از نصف کاهش پیدا کند.",
  },
  {
    name: "علی کریمی",
    company: "CTO - FutureLab",
    text: "طراحی مدرن، کدنویسی تمیز و پشتیبانی حرفه‌ای؛ دقیقاً همان چیزی که برای پروژه نیاز داشتیم.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#070b18] py-28">
      <Container>

        <SectionTitle
          badge="Testimonials"
          title="نظر مشتریان"
          description="اعتماد مشتریان بزرگ‌ترین سرمایه ماست."
        />

        <div className="grid gap-8 lg:grid-cols-3">

          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:border-cyan-400/30 hover:-translate-y-2"
            >
              <div className="mb-6 flex gap-1 text-yellow-400">
                ★★★★★
              </div>

              <p className="leading-8 text-slate-300">
                {item.text}
              </p>

              <div className="mt-8">
                <h4 className="font-bold text-white">
                  {item.name}
                </h4>

                <span className="text-sm text-slate-400">
                  {item.company}
                </span>
              </div>

            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}
