import Container from "@/components/layout/Container";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#040714] py-14">
      <Container>

        <div className="grid gap-12 md:grid-cols-4">

          <div>
            <h3 className="text-3xl font-bold text-white">
              AI Nova
            </h3>

            <p className="mt-5 leading-8 text-slate-400">
              طراحی و توسعه سیستم‌های هوش مصنوعی،
              AI Agent،
              اتوماسیون،
              داشبورد و نرم‌افزارهای مدرن.
            </p>
          </div>

          <div>
            <h4 className="mb-5 font-semibold text-white">
              خدمات
            </h4>

            <ul className="space-y-3 text-slate-400">
              <li>AI Agent</li>
              <li>Automation</li>
              <li>Dashboards</li>
              <li>Web Apps</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5 font-semibold text-white">
              شرکت
            </h4>

            <ul className="space-y-3 text-slate-400">
              <li>درباره ما</li>
              <li>نمونه‌کارها</li>
              <li>فرآیند همکاری</li>
              <li>تماس</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5 font-semibold text-white">
              ارتباط
            </h4>

            <ul className="space-y-3 text-slate-400">
              <li>info@ainova.dev</li>
              <li>+98 900 000 0000</li>
              <li>Tehran, Iran</li>
            </ul>
          </div>

        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-slate-500">
          © 2026 AI Nova. All rights reserved.
        </div>

      </Container>
    </footer>
  );
}