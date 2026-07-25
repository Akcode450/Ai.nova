type Props = {
  className?: string;
};

export default function GlowOrb({ className = "" }: Props) {
  return (
    <div
      className={`absolute rounded-full bg-cyan-500/15 blur-[140px] ${className}`}
    />
  );
}