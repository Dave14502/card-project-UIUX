import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="w-full bg-brand-offwhite py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-5xl font-bold text-brand-navy leading-tight">
                Digitale Bonuskarte fürs Handy – mehr Stammkundinnen, weniger Stress.
              </h1>
              
              <p className="text-lg md:text-xl text-brand-body leading-relaxed">
                Deine Kundinnen sammeln Stempel im Handy statt auf Papier – mit einem QR-Code auf deinem Tresen für 29 € pro Monat.
              </p>
            </div>

            {/* Trust Row with Icons */}
            <div className="flex flex-wrap gap-4 md:gap-6 pt-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-brand-gold flex-shrink-0" />
                <span className="text-sm md:text-base text-brand-body">Kein App-Download</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-brand-gold flex-shrink-0" />
                <span className="text-sm md:text-base text-brand-body">Wir richten alles für dich ein</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-brand-gold flex-shrink-0" />
                <span className="text-sm md:text-base text-brand-body">Monatlich kündbar</span>
              </div>
            </div>

            {/* Price & CTA */}
            <div className="space-y-4 pt-4">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl md:text-5xl font-bold text-brand-navy">29 €</span>
                <span className="text-lg md:text-xl text-brand-body/80">pro Monat</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  size="lg" 
                  className="bg-brand-gold text-brand-body hover:bg-brand-gold-hover text-base px-8 md:px-10 py-6 md:py-7 h-auto shadow-brand-soft rounded-xl"
                  asChild
                >
                  <a 
                    href="#pricing" 
                    aria-label="Jetzt kostenlos testen"
                  >
                    Jetzt kostenlos testen
                  </a>
                </Button>
              </div>
            </div>
            
            <p className="text-xs md:text-sm text-brand-body/80 pt-2">
              Speziell für vietnamesische Nagelstudios in Deutschland.
            </p>
          </div>

          {/* Right side - Phone mockup */}
          <div className="flex justify-center items-center mt-8 md:mt-0">
            <img
              src="/mockup-iphone.png"
              alt="Digitale Stempelkarte auf dem iPhone"
              className="w-full max-w-[320px] md:max-w-[360px] drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
