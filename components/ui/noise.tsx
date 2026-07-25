export default function Noise() {
  return (
    <div
      className="
        pointer-events-none
        absolute
        inset-0
        -z-20
        opacity-[0.03]
        mix-blend-soft-light
        bg-[url('https://grainy-gradients.vercel.app/noise.svg')]
      "
    />
  );
}