import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export function Objections() {
  const faqs = [
    {
      question: "Brauchen meine Kundinnen eine App?",
      answer:
        "Nein! Die Stempelkarte landet automatisch im Apple Wallet oder Google Wallet – ohne App-Download. Deine Kundinnen scannen einfach den QR-Code mit der Kamera.",
    },
    {
      question: "Wie funktioniert das technisch?",
      answer:
        "Wir richten alles für dich ein. Du bekommst einen QR-Code für deinen Tresen. Deine Kundinnen scannen ihn, die Stempelkarte wird automatisch im Wallet gespeichert. Bei jedem Besuch scannen sie erneut und sammeln Stempel.",
    },
    {
      question: "Was kostet mich das?",
      answer:
        "29 € pro Monat – weniger als 1 € pro Tag. Keine Einrichtungsgebühr, keine versteckten Kosten. Monatlich kündbar.",
    },
    {
      question: "Was passiert, wenn ich kündigen möchte?",
      answer:
        "Du kannst jederzeit monatlich kündigen. Deine Kundinnen behalten ihre Stempelkarten, auch nach der Kündigung.",
    },
    {
      question: "Gibt es Support auf Vietnamesisch?",
      answer:
        "Ja! Unser Support ist auf Deutsch und Vietnamesisch verfügbar – per WhatsApp oder Zalo.",
    },
    {
      question: "Funktioniert das auch ohne Internet?",
      answer:
        "Ja, die Stempelkarte funktioniert auch offline. Sie wird im Wallet gespeichert und kann jederzeit verwendet werden.",
    },
  ];

  return (
    <section className="w-full bg-white py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-brand-navy mb-4">
            Häufige Fragen
          </h2>
          <p className="text-base md:text-lg text-brand-body/80 max-w-2xl mx-auto">
            Alles, was du wissen musst
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-brand-border rounded-lg px-4 md:px-6 bg-white"
            >
              <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-brand-navy hover:no-underline py-4 md:py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg text-brand-body/80 pb-4 md:pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-8 md:mt-12 text-center">
          <p className="text-base md:text-lg text-brand-body/80 mb-6">
            Noch Fragen? Schreib uns einfach!
          </p>
          <Button
            size="lg"
            className="bg-brand-gold text-brand-body hover:bg-brand-gold-hover text-base px-8 py-6 h-auto shadow-brand-soft rounded-xl"
            asChild
          >
            <a
              href="https://wa.me/491234567890?text=Hallo%2C%20ich%20habe%20eine%20Frage"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Frage auf WhatsApp stellen"
            >
              Frage auf WhatsApp stellen
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

