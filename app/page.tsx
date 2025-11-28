import { Hero } from "@/components/landing/hero";
import { AuthButton } from "@/components/auth-button";
import { hasEnvVars } from "@/lib/utils";
import Link from "next/link";
import { Suspense } from "react";
import dynamic from "next/dynamic";

// Lazy load components below the fold for better performance
const HowItWorks = dynamic(() => import("@/components/landing/how-it-works").then(mod => ({ default: mod.HowItWorks })), {
  ssr: true,
});
const ProblemVsSolution = dynamic(() => import("@/components/landing/problem-vs-solution").then(mod => ({ default: mod.ProblemVsSolution })), {
  ssr: true,
});
const Benefits = dynamic(() => import("@/components/landing/benefits").then(mod => ({ default: mod.Benefits })), {
  ssr: true,
});
const Pricing = dynamic(() => import("@/components/landing/pricing").then(mod => ({ default: mod.Pricing })), {
  ssr: true,
});
const Objections = dynamic(() => import("@/components/landing/objections").then(mod => ({ default: mod.Objections })), {
  ssr: true,
});
const TargetAudience = dynamic(() => import("@/components/landing/target-audience").then(mod => ({ default: mod.TargetAudience })), {
  ssr: true,
});
const Contact = dynamic(() => import("@/components/landing/contact").then(mod => ({ default: mod.Contact })), {
  ssr: true,
});
const Footer = dynamic(() => import("@/components/landing/footer").then(mod => ({ default: mod.Footer })), {
  ssr: true,
});

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Simple header */}
      <nav className="w-full border-b border-gray-200 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-xl font-semibold text-[#1e3a5f]">
              Treuekarte
            </Link>
            {hasEnvVars && (
              <Suspense>
                <AuthButton />
              </Suspense>
            )}
          </div>
        </div>
      </nav>

      {/* Landing page sections - New high-converting structure */}
      <Hero />
      <HowItWorks />
      <ProblemVsSolution />
      <Benefits />
      <Pricing />
      <Objections />
      <TargetAudience />
      <Contact />
      <Footer />
    </main>
  );
}
