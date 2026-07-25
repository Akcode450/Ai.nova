import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/section-title";

export default function Solutions() {
  return (
    <section
      id="solutions"
      className="relative overflow-hidden bg-[#070b18] py-32"
    >
      <Container>

        <SectionTitle
          badge="Solutions"
          title="راهکارهای هوش مصنوعی"
          description="راهکارهایی که برای رشد، اتوماسیون و افزایش بهره‌وری کسب‌وکارها طراحی کرده‌ایم."
        />

        <div className="mt-20 grid gap-8 lg:grid-cols-2">

          <div className="rounded-3xl border border-cyan-500/20 bg-white/5 p-10 backdrop-blur-xl">
            <p className="text-cyan-300 text-sm">
              AI Agent
            </p>

            <h3 className="mt-4 text-3xl font-bold text-white">
              هوش مصنوعی اختصاصی
            </h3>

            <p className="mt-6 leading-8 text-slate-400">
              طراحی Agentهای هوشمند برای انجام وظایف،
              اتصال به دیتابیس،
              CRM،
              ERP
              و اتوماسیون کامل فرآیندهای سازمانی.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
            <p className="text-cyan-300 text-sm">
              Automation
            </p>

            <h3 className="mt-4 text-3xl font-bold text-white">
              اتوماسیون فرآیندها
            </h3>

            <p className="mt-6 leading-8 text-slate-400">
              اتصال نرم‌افزارها،
              APIها،
              n8n،
              Zapier
              و سرویس‌های ابری برای حذف کارهای تکراری.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
            <p className="text-cyan-300 text-sm">
              Dashboards
            </p>

            <h3 className="mt-4 text-3xl font-bold text-white">
              داشبوردهای مدیریتی
            </h3>

            <p className="mt-6 leading-8 text-slate-400">
              داشبوردهای Real-time،
              تحلیل داده،
              KPI،
              گزارش‌گیری و مانیتورینگ هوشمند.
            </p>
          </div>

          <div className="rounded-3xl border border-cyan-500/20 bg-white/5 p-10 backdrop-blur-xl">
            <p className="text-cyan-300 text-sm">
              AI Products
            </p>

            <h3 className="mt-4 text-3xl font-bold text-white">
              محصولات مبتنی بر AI
            </h3>

            <p className="mt-6 leading-8 text-slate-400">
              طراحی SaaS،
              چت‌بات،
              سیستم‌های پیشنهاددهنده،
              موتورهای هوشمند و ابزارهای نسل جدید.
            </p>
          </div>

        </div>

      </Container>
    </section>
  );
}