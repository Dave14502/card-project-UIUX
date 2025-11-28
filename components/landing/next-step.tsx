import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function NextStep() {
  return (
    <section id="next-step" className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
            Dein nächster Schritt
          </h2>
          
          <Card className="border-2 border-[#1e3a5f] shadow-lg rounded-xl">
            <CardContent className="p-8 space-y-6">
              <div className="space-y-4">
                <p className="text-lg text-gray-700">
                  Wenn du denkst:
                </p>
                <p className="text-xl font-semibold text-gray-900 italic">
                  „Ich will keine Bonuskarten-Diskussionen mehr am Tresen."
                </p>
              </div>
              
              <div className="space-y-4 pt-4 border-t border-gray-200">
                <p className="text-lg text-gray-700">
                  Dann:
                </p>
                <ol className="space-y-3 ml-6">
                  <li className="text-lg text-gray-700 flex items-start gap-3">
                    <span className="font-bold text-[#1e3a5f]">1.</span>
                    <span>Klicke auf „Jetzt kostenlos testen"</span>
                  </li>
                  <li className="text-lg text-gray-700 flex items-start gap-3">
                    <span className="font-bold text-[#1e3a5f]">2.</span>
                    <span>Trag kurz deine Studiendaten ein</span>
                  </li>
                  <li className="text-lg text-gray-700 flex items-start gap-3">
                    <span className="font-bold text-[#1e3a5f]">3.</span>
                    <span>Wir melden uns, richten deine Karte ein und schicken dir deinen QR-Code</span>
                  </li>
                </ol>
              </div>
              
              <div className="pt-6 border-t border-gray-200 space-y-4">
                <p className="text-lg text-gray-900 font-medium">
                  Ab dann gilt:
                </p>
                <p className="text-lg text-gray-700">
                  Deine Bonuskarte lebt im Handy deiner Kundinnen.
                </p>
                <p className="text-lg text-gray-700">
                  Keine verlorenen Karten. Kein Streit. Mehr Stammkundinnen – für 29 € im Monat.
                </p>
              </div>
              
              <div className="text-center pt-6">
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
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

