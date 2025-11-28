import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smartphone, Heart, Users, Brain } from "lucide-react";

const benefits = [
  {
    icon: Smartphone,
    title: "Keine verlorenen Bonuskarten mehr",
    items: [
      "Stempelkarte zieht ins Handy um",
      "Kundinnen sehen ihren Stand direkt im Wallet",
    ],
  },
  {
    icon: Heart,
    title: "Kein Streit mehr am Tresen",
    items: [
      "Alles digital gespeichert – du und die Kundin seht dasselbe",
      "Keine peinlichen Szenen vor anderen Kundinnen",
    ],
  },
  {
    icon: Users,
    title: "Mehr Stammkundinnen statt Rabatt-Jägerinnen",
    items: [
      "Karte im Wallet erinnert immer wieder an dein Studio",
      "Wer sammelt, kommt regelmäßig wieder",
    ],
  },
  {
    icon: Brain,
    title: "Weniger Chaos, mehr Ruhe im Kopf",
    items: [
      'Kein Kartenlager, kein „Wer hat welchen Stempel gegeben?“',
      'Einfache Übersicht: aktive Karten + Kundinnen kurz vor „gratis“',
    ],
  },
];

export function Benefits() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
            Was dir Treuekarte jeden Tag abnimmt
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="border-2 border-gray-200 shadow-md rounded-xl hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-[#1e3a5f] text-white rounded-full flex items-center justify-center shadow-md">
                        <Icon className="w-6 h-6" />
                      </div>
                      <CardTitle className="text-lg md:text-xl font-bold text-[#1e3a5f]">
                        {benefit.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {benefit.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-600 text-sm md:text-base">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          <div className="text-center pt-4">
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
          </div>
        </div>
      </div>
    </section>
  );
}
