import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/shared/FadeIn"; // Import your new wrapper

export default function Hero() {
  return (
    <section className="relative flex h-[80vh] w-full items-center justify-center overflow-hidden">
      <Image
        src="/bg1.jpg"
        alt="Background"
        fill
        priority
        className="-z-10 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-black/50" />

      <div className="px-6 text-center text-white">
        {/* Title Fades Up First */}
        <FadeIn direction="up">
          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
            We Build <span className="text-blue-400">Digital Excellence</span>
          </h1>
        </FadeIn>

        {/* Subtitle Fades Up with a small delay */}
        <FadeIn direction="up" delay={0.2}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-200">
            Custom Next.js solutions for forward-thinking businesses.
          </p>
        </FadeIn>

        {/* Buttons Fade Up last */}
        <FadeIn direction="up" delay={0.4}>
{/* Change justify-center and items-center to ensure they are centered on all screens */}
<div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
  
  <Link href="#contact">
    <Button size="lg" className="h-14 rounded-xl bg-blue-600 px-10 text-lg font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:bg-blue-700">
      Get Started
    </Button>
  </Link>

  <Link href="#portfolio">
    <Button 
      variant="outline" 
      size="lg" 
      className="h-14 rounded-xl bg-blue-600 px-10 text-lg font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:bg-blue-700"
    >
      Our Work
    </Button>
  </Link>
  
</div>
        </FadeIn>
      </div>
    </section>
  );
}