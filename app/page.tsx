import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { ProblemVsSolution } from "@/components/landing/problem-vs-solution";
import { Benefits } from "@/components/landing/benefits";
import { Pricing } from "@/components/landing/pricing";
import { Objections } from "@/components/landing/objections";
import { TargetAudience } from "@/components/landing/target-audience";
import { Contact } from "@/components/landing/contact";
import { Footer } from "@/components/landing/footer";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="w-full bg-white/95 backdrop-blur-sm border-b border-brand-border sticky top-0 z-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex justify-between items-center h-20 md:h-24 py-2">
            <Link href="/" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
              <img
                src="/temora-logo-v1.png"
                alt="Temora Logo"
                width={96}
                height={96}
                className="w-20 h-20 md:w-24 md:h-24 object-contain drop-shadow-sm"
              />
              <div className="hidden sm:block">
                <p className="font-semibold text-brand-navy text-lg md:text-xl">
                  Temora
                </p>
                <p className="text-sm text-brand-body/70">
                  Deine digitale Stempelkarte
                </p>
              </div>
            </Link>
            <div className="flex items-center gap-4">
              <a
                href="#pricing"
                className="text-sm md:text-base font-medium text-brand-navy hover:text-brand-gold transition-colors"
              >
                Preise
              </a>
              <a
                href="https://wa.me/491234567890?text=Hallo%2C%20ich%20m%C3%B6chte%20eine%20Demo%20anfragen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm md:text-base font-medium text-brand-navy hover:text-brand-gold transition-colors"
              >
                Kontakt
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Sections */}
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
