import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const calculationPoints = [
  "Dein Abo: 29 € im Monat",
  "Eine Auffüll-Kundin bringt meist deutlich mehr als 29 €",
  "Kommt nur eine Kundin wegen der Treuekarte zusätzlich oder regelmäßiger, ist dein Abo bezahlt",
  "Jede weitere Kundin ist extra Gewinn",
];

const features = [
  "Unbegrenzte Kundinnen und Treuekarten",
  "Komplettes Setup – wir richten alles ein",
  "Zugriff über den Browser, kein Extra-Gerät nötig",
  "Support auf Deutsch und Vietnamesisch (WhatsApp, Zalo, E-Mail)",
  "Monatlich kündbar, keine lange Bindung",
];

export function Pricing() {
  return (
    <section id="pricing" className="w-full bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              So viel kostet es – und so schnell rechnet es sich
            </h2>
          </div>

          <Card className="border-2 border-[#1e3a5f] shadow-lg rounded-xl">
            <CardHeader className="text-center pb-6">
              <div className="space-y-2">
                <p className="text-base text-gray-600">
                  Für vietnamesische Nagel- und Beautystudios in Deutschland
                </p>
                <CardTitle className="text-5xl font-bold text-[#1e3a5f]">
                  29 € pro Monat
                </CardTitle>
                <p className="text-lg text-gray-600">
                  Weniger als 1 € pro Tag
                </p>
              </div>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Rechnung in einfachen Worten */}
              <div className="bg-gray-50 rounded-lg p-6 space-y-3">
                <h3 className="font-semibold text-gray-900 mb-3">Rechnung in einfachen Worten</h3>
                <ul className="space-y-3">
                  {calculationPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#1e3a5f]/10 rounded-full flex items-center justify-center mt-0.5">
                        <CheckCircle className="w-4 h-4 text-[#1e3a5f]" />
                      </div>
                      <p className="text-sm text-gray-700 pt-0.5">{point}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Leistungen */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900">Leistungen</h3>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#1e3a5f] rounded-full flex items-center justify-center mt-0.5">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="text-base text-gray-900">
                        {feature}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-gray-200 space-y-4">
                <div className="text-center">
                  <Button 
                    size="lg"
                    className="bg-[#1e3a5f] hover:bg-[#1e3a5f]/90 text-white text-base px-10 py-7 h-auto shadow-lg hover:shadow-xl transition-shadow rounded-xl"
                    asChild
                  >
                    <a 
                      href="#contact" 
                      aria-label="Jetzt kostenlos testen"
                    >
                      Jetzt kostenlos testen
                    </a>
                  </Button>
                </div>
                <p className="text-sm text-gray-500 text-center">
                  Keine Kreditkarte für den Test nötig.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

