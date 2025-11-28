import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "Meine Kundinnen lieben die digitale Karte. Sie geht nicht mehr verloren wie die Papierkarten und ich brauche nur einen Klick pro Besuch.",
    name: "Linh",
    location: "Nagelstudio in Berlin",
  },
  {
    quote: "Früher hatten wir ständig Diskussionen wegen vergessener Karten. Jetzt sieht jede Kundin ihre Punkte im Handy – und sie kommt regelmäßiger wieder.",
    name: "Huong",
    location: "Nails & Lashes in Hamburg",
  },
];

export function SocialProof() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
            Was andere Studios sagen
          </h2>
          
          {/* Testimonials */}
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2 border-gray-200 shadow-md rounded-xl hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <p className="text-base text-gray-900 italic">
                      "{testimonial.quote}"
                    </p>
                    <div className="pt-2 border-t border-gray-100">
                      <p className="font-semibold text-gray-900">
                        – {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Vertrauensblock */}
          <div className="text-center py-8 border-t border-gray-200 space-y-3 max-w-3xl mx-auto">
            <p className="text-lg text-gray-900">
              Die Lösung ist in Deutschland entwickelt – speziell für vietnamesische Studio-Inhaberinnen.
            </p>
            <p className="text-base text-gray-600">
              Support auf Deutsch oder Vietnamesisch (WhatsApp, E-Mail). Keine Fachbegriffe, keine dicken Verträge.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

