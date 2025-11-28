import { X, Check } from "lucide-react";

export function ProblemVsSolution() {
  return (
    <section className="w-full bg-brand-section py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-brand-navy mb-4">
            Papierkarten vs. Digitale Stempelkarte
          </h2>
          <p className="text-base md:text-lg text-brand-body/80 max-w-2xl mx-auto">
            Warum digitale Stempelkarten besser sind
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Problem - Papierkarten */}
          <div className="bg-rose-50 rounded-xl p-6 md:p-8 shadow-brand-soft border border-red-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                <X className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-brand-navy">
                Papierkarten
              </h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-base md:text-lg text-brand-body/80">
                  Gehen schnell verloren oder werden vergessen
                </span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-base md:text-lg text-brand-body/80">
                  Schauen unprofessionell aus
                </span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-base md:text-lg text-brand-body/80">
                  Keine Erinnerungen für Kundinnen
                </span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-base md:text-lg text-brand-body/80">
                  Schwer zu verwalten und nachzuvollziehen
                </span>
              </li>
            </ul>
          </div>

          {/* Solution - Digitale Stempelkarte */}
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-brand-soft border border-green-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                <Check className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-brand-navy">
                Digitale Stempelkarte
              </h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-base md:text-lg text-brand-body/80">
                  Immer im Handy – kann nicht verloren gehen
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-base md:text-lg text-brand-body/80">
                  Sieht professionell aus im Apple Wallet
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-base md:text-lg text-brand-body/80">
                  Automatische Erinnerungen für Kundinnen
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-base md:text-lg text-brand-body/80">
                  Einfache Verwaltung über Dashboard
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 md:mt-12 text-center">
          <p className="text-base md:text-lg text-brand-body/80 italic">
            Papierkarten sind billig. Aber sie kosten dich Zeit, Nerven, Geld – und manchmal deinen Ruf.
          </p>
        </div>
      </div>
    </section>
  );
}
