import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, QrCode, Smartphone, ScanLine } from "lucide-react";

const steps = [
  {
    icon: QrCode,
    title: "Wir richten alles für dich ein",
    items: [
      'Du nennst uns: Studio-Name, Logo, Belohnung (z. B. „10x Auffüllen = 1x gratis“)',
      "Wir erstellen deine digitale Treuekarte + deinen QR-Code + dein Online-Konto",
    ],
  },
  {
    icon: Smartphone,
    title: "Kundinnen holen sich die Karte ins Handy",
    items: [
      "QR-Code liegt am Tresen oder steht auf einem kleinen Aufsteller",
      "Kundin scannt einmal mit der Handy-Kamera → Karte landet im Apple Wallet",
      "Kein Login, kein Passwort, keine App",
    ],
  },
  {
    icon: ScanLine,
    title: "Bei jedem Besuch: 1 Scan = 1 Stempel",
    items: [
      "Du öffnest die Stempel-Seite auf deinem Handy oder Tablet",
      "Kundin zeigt ihre Karte im Handy",
      "Du scannst → Punkt wird automatisch hinzugefügt, volle Karte siehst du sofort",
    ],
  },
];

export function HowItWorks() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              So läuft es in deinem Studio – in 3 einfachen Schritten
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="border-2 border-gray-200 shadow-md rounded-xl hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 md:p-8">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0 w-14 h-14 bg-[#1e3a5f] text-white rounded-full flex items-center justify-center shadow-lg">
                          <Icon className="w-7 h-7" />
                        </div>
                        <div className="w-10 h-10 bg-[#1e3a5f]/10 text-[#1e3a5f] rounded-full flex items-center justify-center font-bold text-xl">
                          {index + 1}
                        </div>
                      </div>
                      
                      <h3 className="text-lg md:text-xl font-bold text-gray-900">
                        {step.title}
                      </h3>
                      
                      <ul className="space-y-2">
                        {step.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-sm md:text-base text-gray-600 flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          <div className="text-center pt-4">
            <Button 
              variant="link"
              className="text-[#1e3a5f] hover:text-[#1e3a5f]/80 text-base"
              asChild
            >
              <a 
                href="https://wa.me/491234567890?text=Hallo%2C%20ich%20m%C3%B6chte%20eine%20Demo%20anfragen" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                In 2 Minuten erklärt – kurze Demo anfordern
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
