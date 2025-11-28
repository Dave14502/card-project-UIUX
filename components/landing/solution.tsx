import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export function Solution() {
  return (
    <section className="w-full bg-green-50 py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
            Lösung in einem Bild: Karte im Handy statt auf Papier
          </h2>
          
          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 text-center">
              Die einfache Idee:
            </h3>
            
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <p className="text-lg text-gray-700 pt-1">
                  Ein QR-Code auf deinem Tresen
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <p className="text-lg text-gray-700 pt-1">
                  Eine Treuekarte im Apple Wallet deiner Kundinnen
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <p className="text-lg text-gray-700 pt-1">
                  1 Scan pro Besuch = 1 Stempel
                </p>
              </div>
            </div>
            
            <p className="text-lg text-gray-900 font-medium text-center pt-4">
              Keine App, kein Programm, keine Schulung.
            </p>
            <p className="text-lg text-gray-700 text-center">
              Nur: Scannen – Karte im Handy – Stempel. Fertig.
            </p>
          </div>
          
          <div className="text-center pt-6">
            <Button 
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white text-base px-10 py-7 h-auto shadow-lg hover:shadow-xl transition-shadow rounded-xl"
              asChild
            >
              <a 
                href="https://wa.me/491234567890?text=Hallo%2C%20ich%20m%C3%B6chte%20eine%20Demo%20anfragen" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Demo anfragen auf WhatsApp"
              >
                Demo anfragen (WhatsApp)
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

