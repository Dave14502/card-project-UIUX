import { AlertCircle } from "lucide-react";

export function DailyLife() {
  return (
    <section className="w-full bg-red-50 py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
            Problem: Was dich heute nervt
          </h2>
          
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800 text-center">
            Kennst du das aus deinem Studio?
          </h3>
          
          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mt-0.5">
                <AlertCircle className="w-5 h-5 text-red-600" />
              </div>
              <p className="text-lg text-gray-700 pt-1">
                Kundin: „Wo ist meine Bonuskarte? Ich hatte doch fast voll…"
              </p>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mt-0.5">
                <AlertCircle className="w-5 h-5 text-red-600" />
              </div>
              <p className="text-lg text-gray-700 pt-1">
                Karte verloren, vergessen oder falsch gestempelt
              </p>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mt-0.5">
                <AlertCircle className="w-5 h-5 text-red-600" />
              </div>
              <p className="text-lg text-gray-700 pt-1">
                Diskussion am Tresen vor allen anderen Kundinnen
              </p>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mt-0.5">
                <AlertCircle className="w-5 h-5 text-red-600" />
              </div>
              <p className="text-lg text-gray-700 pt-1">
                Am Ende gibst du lieber kostenlos und bist den ganzen Tag genervt
              </p>
            </div>
          </div>
          
          <div className="pt-8 border-t border-red-200 space-y-4">
            <p className="text-lg text-gray-900 font-semibold text-center">
              Papierkarten sind billig.
            </p>
            <p className="text-lg text-gray-700 text-center">
              Aber sie kosten dich:
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-lg text-gray-700">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-500" />
                <span>Zeit</span>
              </div>
              <div className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-500" />
                <span>Nerven</span>
              </div>
              <div className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-500" />
                <span>Geld</span>
              </div>
              <div className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-500" />
                <span>und manchmal deinen Ruf.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

