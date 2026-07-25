export default function GridBackground() {
  return (
    <div
      className="
        absolute inset-0 -z-30
        bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)]
        bg-[size:48px_48px]
        [mask-image:radial-gradient(circle_at_center,black,transparent_90%)]
      "
    />
  );
}