import { cn } from "@/lib/utils";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function GlassCard({
  children,
  className,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-white/10",
        "bg-white/[0.04] backdrop-blur-2xl",
        "transition-all duration-500",
        "hover:-translate-y-2",
        "hover:border-cyan-400/30",
        "hover:shadow-[0_0_60px_rgba(34,211,238,0.18)]",
        className
      )}
    >
      {/* Glow */}
      <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}