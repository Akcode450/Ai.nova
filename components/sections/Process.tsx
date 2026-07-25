import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/section-title";

const steps = [
  {
    number: "01",
    title: "جلسه تحلیل",
    description:
      "بررسی دقیق نیازهای کسب‌وکار، اهداف پروژه و انتخاب بهترین راهکار.",
  },
  {
    number: "02",
    title: "طراحی UI/UX",
    description:
      "طراحی رابط کاربری مدرن، تجربه کاربری حرفه‌ای و معماری سیستم.",
  },
  {
    number: "03",
    title: "توسعه",
    description:
      "پیاده‌سازی Frontend، Backend، هوش مصنوعی و APIها با تکنولوژی‌های روز.",
  },
  {
    number: "04",
    title: "تحویل و پشتیبانی",
    description:
      "استقرار پروژه، آموزش، مانیتورینگ و پشتیبانی مداوم.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="bg-[#050816] py-28"
    >
      <Container>

        <SectionTitle
          badge="Process"
          title="روند انجام پروژه"
          description="تمام پروژه‌ها طبق یک فرآیند مشخص و حرفه‌ای انجام می‌شوند."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {steps.map((step) => (
            <div
              key={step.number}
              className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <span className="text-6xl font-black text-cyan-500/20">
                {step.number}
              </span>

              <h3 className="mt-6 text-2xl font-bold text-white">
                {step.title}
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                {step.description}
              </p>
            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}