import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="w-full bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50 py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-5xl font-bold text-[#1e3a5f] leading-tight">
                Digitale Bonuskarte fürs Handy – mehr Stammkundinnen, weniger Stress.
              </h1>
              
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Deine Kundinnen sammeln Stempel im Handy statt auf Papier – mit einem QR-Code auf deinem Tresen, für 29 € pro Monat.
              </p>
            </div>

            {/* Trust Row with Icons */}
            <div className="flex flex-wrap gap-4 md:gap-6 pt-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-sm md:text-base text-gray-700">Kein App-Download</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-sm md:text-base text-gray-700">Wir richten alles für dich ein</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-sm md:text-base text-gray-700">Monatlich kündbar</span>
              </div>
            </div>

            {/* Price & CTA */}
            <div className="space-y-4 pt-4">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl md:text-5xl font-bold text-[#1e3a5f]">29 €</span>
                <span className="text-lg md:text-xl text-gray-600">pro Monat</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  size="lg" 
                  className="bg-[#1e3a5f] hover:bg-[#1e3a5f]/90 text-white text-base px-8 md:px-10 py-6 md:py-7 h-auto shadow-lg hover:shadow-xl transition-shadow rounded-xl"
                  asChild
                >
                  <a 
                    href="#pricing" 
                    aria-label="Jetzt kostenlos testen"
                  >
                    Jetzt kostenlos testen
                  </a>
                </Button>
                
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f]/5 text-base px-6 md:px-8 py-6 md:py-7 h-auto rounded-xl"
                  asChild
                >
                  <a 
                    href="https://wa.me/491234567890?text=Hallo%2C%20ich%20m%C3%B6chte%20eine%20Demo%20anfragen" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Demo auf WhatsApp ansehen"
                  >
                    Demo auf WhatsApp ansehen
                  </a>
                </Button>
              </div>
            </div>
            
            <p className="text-xs md:text-sm text-gray-600 pt-2">
              Speziell für vietnamesische Nagelstudios in Deutschland.
            </p>
          </div>

          {/* Right side - Phone mockup */}
          <div className="flex justify-center items-center mt-8 md:mt-0">
            <div className="w-full max-w-[280px] md:max-w-sm relative">
              {/* Phone frame */}
              <div className="bg-gray-900 rounded-[2rem] md:rounded-[3rem] p-1.5 md:p-2 shadow-2xl shadow-gray-900/30">
                <div className="bg-white rounded-[1.75rem] md:rounded-[2.5rem] overflow-hidden">
                  {/* Notch */}
                  <div className="h-4 md:h-6 bg-gray-900 rounded-b-xl md:rounded-b-2xl mx-auto w-24 md:w-32"></div>
                  
                  {/* Screen content */}
                  <div className="aspect-[9/19.5] bg-gradient-to-b from-gray-50 to-white p-3 md:p-4 flex flex-col items-center justify-center">
                    {/* Wallet card mockup */}
                    <div className="w-full max-w-[240px] md:max-w-[280px] bg-gradient-to-br from-[#1e3a5f] to-[#2d4f7a] rounded-xl md:rounded-2xl p-4 md:p-6 shadow-xl">
                      <div className="text-white space-y-2 md:space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="text-xs md:text-sm font-medium opacity-90">Treuekarte</div>
                          <div className="text-[10px] md:text-xs opacity-75">Wallet</div>
                        </div>
                        <div className="pt-1 md:pt-2">
                          <div className="text-lg md:text-2xl font-bold">Nagelstudio Linh</div>
                          <div className="text-xs md:text-sm opacity-90 mt-0.5 md:mt-1">Berlin</div>
                        </div>
                        <div className="pt-3 md:pt-4 border-t border-white/20">
                          <div className="flex items-center justify-between">
                            <span className="text-xs md:text-sm opacity-90">Besuche</span>
                            <span className="text-base md:text-lg font-bold">7 / 10</span>
                          </div>
                          <div className="mt-1.5 md:mt-2 h-1.5 md:h-2 bg-white/20 rounded-full overflow-hidden">
                            <div className="h-full bg-white rounded-full" style={{ width: '70%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Small text below */}
                    <p className="text-[10px] md:text-xs text-gray-400 mt-3 md:mt-4 text-center px-2 md:px-4">
                      Digitale Stempelkarte im Apple Wallet
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

