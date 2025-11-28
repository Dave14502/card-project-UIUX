import { AlertCircle, CheckCircle } from "lucide-react";

export function ProblemVsSolution() {
  return (
    <section className="w-full bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
            Papierkarten kosten dich Nerven. Die Karte im Handy nicht.
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Left - Papierkarten (Problem) */}
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  Papierkarten
                </h3>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-base text-gray-700">
                    Karten gehen verloren oder bleiben zu Hause liegen
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-base text-gray-700">
                    Diskussionen: „Ich hatte doch schon fast voll …"
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-base text-gray-700">
                    Zettelstapel am Tresen wirkt unordentlich und altmodisch
                  </span>
                </li>
              </ul>
            </div>
            
            {/* Right - Treuekarte im Handy (Solution) */}
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  Treuekarte im Handy
                </h3>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-base text-gray-700">
                    Handy ist immer dabei – Karte kann nicht „vergessen" werden
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-base text-gray-700">
                    Stempelstand ist klar im Wallet gespeichert – kein Streit mehr
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-base text-gray-700">
                    Dein Studio wirkt modern und organisiert
                  </span>
                </li>
              </ul>
            </div>
          </div>
          
          <p className="text-center text-lg text-gray-700 pt-4">
            Gleiche Idee wie Papierkarte – nur ohne Chaos, ohne Stress und ohne Diskussionen.
          </p>
        </div>
      </div>
    </section>
  );
}

