import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/section-title";

const faqs = [
  {
    question: "چه نوع پروژه‌هایی انجام می‌دهید؟",
    answer:
      "ما در زمینه توسعه سیستم‌های هوش مصنوعی، AI Agent، وب اپلیکیشن، داشبوردهای مدیریتی و اتوماسیون سازمانی فعالیت می‌کنیم.",
  },
  {
    question: "مدت زمان انجام پروژه چقدر است؟",
    answer:
      "بسته به پیچیدگی پروژه بین ۲ تا ۱۲ هفته متغیر است.",
  },
  {
    question: "آیا پشتیبانی ارائه می‌دهید؟",
    answer:
      "بله، تمامی پروژه‌ها همراه با پشتیبانی و قرارداد نگهداری ارائه می‌شوند.",
  },
  {
    question: "آیا پروژه بین‌المللی هم انجام می‌دهید؟",
    answer:
      "بله، پروژه‌های فارسی و بین‌المللی را توسعه می‌دهیم.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-[#050816] py-28">
      <Container>
        <SectionTitle
          badge="FAQ"
          title="سوالات متداول"
          description="پاسخ برخی از سوالات رایج مشتریان"
        />

        <div className="mx-auto mt-14 max-w-4xl space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-3xl border border-white/10 bg-white/5 p-7"
            >
              <h3 className="mb-4 text-xl font-bold text-white">
                {faq.question}
              </h3>

              <p className="leading-8 text-slate-400">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}