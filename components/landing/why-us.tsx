import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const reasons = [
  {
    title: "Gebaut für kleine Nagelstudios – nicht für große Ketten",
    items: [
      'Kein riesiges „Studio-Management-System“',
      "Keine 100 Funktionen, die du nie benutzt",
      "Nur eine Sache: Treuekarte im Handy",
    ],
  },
  {
    title: 'Für „technische Nieten“ gemacht',
    items: [
      "Du brauchst keine Technik-Erfahrung",
      "Wir richten alles ein",
      'Dein Alltag: „Bitte kurz scannen.“ – fertig.',
    ],
  },
  {
    title: "Sicher & transparent",
    items: [
      "Deutscher Anbieter",
      "Impressum & Datenschutz klar auf der Website",
      "Fester Preis: 29 € pro Monat, monatlich kündbar",
      "Kein Kleingedrucktes, keine Mindestlaufzeit, keine Einrichtungsgebühr in der Basis-Version",
    ],
  },
  {
    title: "Kleine Investition, großer Hebel",
    items: [
      "Abo: 29 € im Monat",
      "Eine einzige zusätzliche Auffüll-Kundin pro Monat kann das locker bezahlen",
      "Alles darüber ist extra Gewinn – plus weniger Stress und moderneres Image",
    ],
  },
];

export function WhyUs() {
  return (
    <section className="w-full bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
            Warum ausgerechnet Treuekarte?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => (
              <Card key={index} className="border-2 border-gray-200 shadow-md rounded-xl hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-[#1e3a5f] mb-4">
                    {reason.title}
                  </h3>
                  <ul className="space-y-3">
                    {reason.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-600 text-base flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                        </div>
                        <span className="pt-0.5">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center pt-4 space-y-4">
            <Button 
              size="lg"
              className="bg-[#1e3a5f] hover:bg-[#1e3a5f]/90 text-white text-base px-10 py-7 h-auto shadow-lg hover:shadow-xl transition-shadow rounded-xl"
              asChild
            >
              <a 
                href="#next-step" 
                aria-label="Jetzt kostenlos testen"
              >
                Jetzt kostenlos testen
              </a>
            </Button>
            <p className="text-sm text-gray-500">
              Keine Kreditkarte für den Test nötig.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
