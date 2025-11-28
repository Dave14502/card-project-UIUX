import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export function Contact() {
  return (
    <section className="w-full bg-white py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12 md:mb-16">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-brand-gold/10 flex items-center justify-center mx-auto mb-6">
            <MessageCircle className="w-8 h-8 md:w-10 md:h-10 text-brand-gold" />
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-brand-navy mb-4">
            Demo anfragen
          </h2>
          <p className="text-base md:text-lg text-brand-body/80 max-w-2xl mx-auto">
            Lass uns gemeinsam schauen, ob digitale Stempelkarten zu deinem Business passen
          </p>
        </div>

        <div className="bg-gradient-to-br from-white to-[hsl(var(--brand-section))] rounded-xl p-6 md:p-8 shadow-brand-soft border border-brand-border text-center">
          <Button
            size="lg"
            className="bg-brand-gold text-brand-body hover:bg-brand-gold-hover text-base px-8 py-6 h-auto shadow-brand-soft rounded-xl mb-4"
            asChild
          >
            <a
              href="https://wa.me/491234567890?text=Hallo%2C%20ich%20m%C3%B6chte%20eine%20Demo%20anfragen"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Jetzt auf WhatsApp schreiben"
            >
              Jetzt auf WhatsApp schreiben
            </a>
          </Button>

          <p className="text-sm md:text-base text-brand-body/70">
            Oder schreib an:{" "}
            <a
              href="mailto:info@temora.de"
              className="text-brand-navy hover:text-brand-gold transition-colors underline"
            >
              info@temora.de
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

