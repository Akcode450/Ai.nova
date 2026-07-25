import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050816] px-6">
      <div className="text-center">

        <p className="text-8xl font-black text-cyan-400">
          404
        </p>

        <h1 className="mt-6 text-4xl font-bold text-white">
          صفحه موردنظر پیدا نشد
        </h1>

        <p className="mx-auto mt-6 max-w-lg leading-8 text-slate-400">
          ممکن است آدرس اشتباه وارد شده باشد یا صفحه حذف شده باشد.
        </p>

        <Link href="/">
          <Button className="mt-10" size="lg">
            بازگشت به صفحه اصلی
          </Button>
        </Link>

      </div>
    </main>
  );
}