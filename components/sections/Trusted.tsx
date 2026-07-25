import Container from "@/components/layout/Container";

const items = [
  "Next.js",
  "React",
  "TypeScript",
  "OpenAI",
  "Vercel",
  "Tailwind CSS",
];

export default function Trusted() {
  return (
    <section className="border-y border-white/5 bg-[#070b1d] py-14">
      <Container>
        <p className="mb-10 text-center text-sm font-medium uppercase tracking-[0.35em] text-slate-500">
          Trusted Technologies
        </p>

        <div className="flex flex-wrap items-center justify-center gap-10">
          {items.map((item) => (
            <div
              key={item}
              className="text-lg font-semibold text-slate-400 transition duration-300 hover:text-cyan-300"
            >
              {item}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}