import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#050816] py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#06b6d422,transparent_65%)]" />

      <Container>
        <div className="relative overflow-hidden rounded-[36px] border border-cyan-500/20 bg-white/5 px-8 py-20 text-center backdrop-blur-xl">

          <h2 className="text-5xl font-black text-white md:text-6xl">
            آماده شروع پروژه هستید؟
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-400">
            اگر به دنبال توسعه یک محصول مبتنی بر هوش مصنوعی، اتوماسیون
            سازمانی، داشبورد مدیریتی یا وب‌اپلیکیشن حرفه‌ای هستید،
            تیم AI Nova آماده همکاری با شماست.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <Button size="lg">
              شروع پروژه
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-white/10 bg-white/5 text-white hover:bg-white/10"
            >
              دریافت مشاوره
            </Button>

          </div>

        </div>
      </Container>
    </section>
  );
}
