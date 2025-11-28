import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  return (
    <section id="contact" className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Unsicher, ob das zu deinem Studio passt?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Schreib uns direkt. Wir zeigen dir in ein paar Minuten, wie deine Treuekarte im Handy aussehen kann – auf Deutsch oder Vietnamesisch.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Buttons */}
            <div className="space-y-4">
              <Button 
                size="lg"
                className="w-full bg-[#1e3a5f] hover:bg-[#1e3a5f]/90 text-white text-base py-7 h-auto shadow-lg hover:shadow-xl transition-shadow rounded-xl"
                asChild
              >
                <a 
                  href="https://zalo.me/your-zalo-id" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Auf Zalo schreiben"
                >
                  Jetzt auf Zalo schreiben
                </a>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="w-full border-2 border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f]/5 text-base py-7 h-auto shadow-md hover:shadow-lg transition-shadow rounded-xl"
                asChild
              >
                <a 
                  href="https://wa.me/491234567890?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20die%20digitale%20Stempelkarte" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Auf WhatsApp schreiben"
                >
                  Jetzt auf WhatsApp schreiben
                </a>
              </Button>
            </div>

            {/* Optional Formular */}
            <Card className="border-2 border-gray-200 shadow-md rounded-xl">
              <CardContent className="p-6 space-y-4">
                <h3 className="font-semibold text-gray-900 mb-4">Oder schreib uns hier:</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Dein Name</Label>
                    <Input id="name" placeholder="Name" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Telefonnummer / Zalo</Label>
                    <Input id="phone" placeholder="Telefonnummer" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="salon">Name deines Studios / Stadt</Label>
                    <Input id="salon" placeholder="Studio / Stadt" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="message">Nachricht</Label>
                    <Textarea id="message" placeholder="Deine Nachricht..." className="mt-1 min-h-[100px]" />
                  </div>
                  <Button 
                    className="w-full bg-[#1e3a5f] hover:bg-[#1e3a5f]/90 text-white shadow-md hover:shadow-lg transition-shadow rounded-xl"
                  >
                    Nachricht senden
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

