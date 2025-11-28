import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export function Pricing() {
  const features = [
    "QR-Code für deinen Tresen",
    "Unbegrenzte Stempelkarten",
    "Dashboard zur Verwaltung",
    "Support auf Deutsch & Vietnamesisch",
    "Monatlich kündbar",
    "Keine Einrichtungsgebühr",
  ];

  return (
    <section id="pricing" className="w-full bg-brand-section py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-brand-navy mb-4">
            Preis & Leistungen
          </h2>
          <p className="text-base md:text-lg text-brand-body/80 max-w-2xl mx-auto">
            Ein fairer Preis für mehr Stammkundinnen
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl p-8 md:p-12 shadow-brand-soft border border-brand-border">
            <div className="text-center mb-6">
              <div className="flex items-baseline justify-center gap-2 mb-4">
                <span className="text-4xl md:text-5xl font-bold text-brand-navy">
                  29 €
                </span>
                <span className="text-lg md:text-xl text-brand-body/80">
                  pro Monat
                </span>
              </div>
              <p className="text-sm md:text-base text-brand-body/70 mb-3">
                Weniger als 1 € pro Tag
              </p>
              <p className="text-sm md:text-base text-brand-body/80 font-medium">
                Schon eine einzige zusätzliche Stammkundin im Monat deckt die 29 €.
              </p>
            </div>

            <ul className="space-y-4 mb-6">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                  <span className="text-base md:text-lg text-brand-body/80">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <div className="space-y-4">
              <Button
                size="lg"
                className="w-full bg-brand-gold text-brand-body hover:bg-brand-gold-hover text-base px-8 py-6 h-auto shadow-brand-soft rounded-xl"
                asChild
              >
                <a
                  href="https://wa.me/491234567890?text=Hallo%2C%20ich%20m%C3%B6chte%20eine%20Demo%20anfragen"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Jetzt kostenlos testen"
                >
                  Jetzt kostenlos testen
                </a>
              </Button>

              <p className="text-center text-sm md:text-base text-brand-body/70">
                Support auf Deutsch & Vietnamesisch per WhatsApp oder Zalo
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
