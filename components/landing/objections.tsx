"use client";

import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const faqData = [
  {
    question: "Wie kompliziert ist das? Ich habe keine Zeit für neue Software.",
    answer: (
      <div className="space-y-4">
        <p className="text-base text-gray-700 font-medium">
          Darum ist Treuekarte extrem schlank:
        </p>
        <p className="text-base text-gray-700 font-semibold">
          1 QR-Code. 1 Karte im Handy. 1 Scan pro Besuch.
        </p>
        <ul className="space-y-2">
          <li className="text-gray-600 text-base flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <span>Wir richten alles für dich ein (Karte, QR-Code, Konto).</span>
          </li>
          <li className="text-gray-600 text-base flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <span>Du musst nichts installieren, nichts konfigurieren.</span>
          </li>
          <li className="text-gray-600 text-base flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <span>Im Alltag sagst du nur noch: „Bitte kurz scannen."</span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "Benutzen meine Kundinnen das überhaupt?",
    answer: (
      <div className="space-y-3">
        <p className="text-base text-gray-700">
          Ja – die meisten Kundinnen:
        </p>
        <ul className="space-y-2">
          <li className="text-gray-600 text-base flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <span>nutzen schon WhatsApp, Online-Banking oder Handy-Tickets</span>
          </li>
          <li className="text-gray-600 text-base flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <span>zeigen dir heute bereits Termine oder Fotos auf dem Handy</span>
          </li>
        </ul>
        <p className="text-base text-gray-700 pt-2">
          Einen QR-Code scannen und eine Karte im Wallet haben sie schnell gelernt – vor allem, wenn klar ist: „Mit der Karte bekommst du deine Gratis-Behandlung."
        </p>
      </div>
    ),
  },
  {
    question: "Brauche ich dafür eine App oder ein extra Gerät?",
    answer: (
      <div className="space-y-3">
        <p className="text-base text-gray-700 font-semibold mb-3">
          Nein.
        </p>
        <ul className="space-y-2">
          <li className="text-gray-600 text-base flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <span>Deine Kundinnen brauchen keine App, nur ihr Handy.</span>
          </li>
          <li className="text-gray-600 text-base flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <span>Du brauchst kein neues Gerät – Handy, Tablet oder PC mit Kamera reichen.</span>
          </li>
          <li className="text-gray-600 text-base flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <span>Alles läuft im Browser über eine kleine Stempel-Seite.</span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "Ab wann lohnt sich das für mein Studio?",
    answer: (
      <div className="space-y-3">
        <p className="text-base text-gray-700 font-medium">
          Ganz einfach gerechnet:
        </p>
        <ul className="space-y-2">
          <li className="text-gray-600 text-base flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <span>Abo: 29 € pro Monat</span>
          </li>
          <li className="text-gray-600 text-base flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <span>Eine Auffüll-Kundin bringt meist mehr als 29 € Umsatz</span>
          </li>
        </ul>
        <p className="text-base text-gray-700 pt-2">
          Kommt nur eine Kundin wegen der Treuekarte zusätzlich oder regelmäßiger, hat sich dein Abo schon gelohnt.
        </p>
        <p className="text-base text-gray-700">
          Alles darüber ist extra Gewinn – plus weniger Stress.
        </p>
      </div>
    ),
  },
  {
    question: "Wie ist das mit Vertrag und Kündigung? Gibt es versteckte Kosten?",
    answer: (
      <ul className="space-y-2">
        <li className="text-gray-600 text-base flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
          <span>Fester Preis: 29 € pro Monat</span>
        </li>
        <li className="text-gray-600 text-base flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
          <span>Monatlich kündbar, keine Mindestlaufzeit</span>
        </li>
        <li className="text-gray-600 text-base flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
          <span>Keine Einrichtungsgebühr in der Basis-Version</span>
        </li>
        <li className="text-gray-600 text-base flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
          <span>Kein Haken im Kleingedruckten</span>
        </li>
        <li className="text-gray-700 text-base pt-2">
          Wenn es dir nicht gefällt, gehst du einfach wieder zurück zu Papierkarten.
        </li>
      </ul>
    ),
  },
  {
    question: "Unsere Papierkarten funktionieren doch – warum überhaupt wechseln?",
    answer: (
      <div className="space-y-4">
        <p className="text-base text-gray-700">
          Papierkarten funktionieren „so halb". Aber:
        </p>
        <ul className="space-y-2">
          <li className="text-gray-600 text-base flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
            <span>Karten gehen verloren oder bleiben zu Hause</span>
          </li>
          <li className="text-gray-600 text-base flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
            <span>Stempel werden vergessen</span>
          </li>
          <li className="text-gray-600 text-base flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
            <span>Es gibt immer wieder Diskussionen am Tresen</span>
          </li>
        </ul>
        <div className="pt-2 border-t border-gray-200">
          <p className="text-base text-gray-700 font-medium mb-2">
            Mit der Karte im Handy:
          </p>
          <ul className="space-y-2">
            <li className="text-gray-600 text-base flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Handy ist immer dabei</span>
            </li>
            <li className="text-gray-600 text-base flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Stempelstand ist klar gespeichert</span>
            </li>
            <li className="text-gray-600 text-base flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Keine peinlichen Streits mehr vor anderen Kundinnen</span>
            </li>
          </ul>
        </div>
        <p className="text-base text-gray-700 pt-2">
          Wenn du nur diese drei Probleme loswerden willst, reichen schon 29 € im Monat.
        </p>
      </div>
    ),
  },
  {
    question: "Ist das sicher? Was ist mit Datenschutz und Behörden?",
    answer: (
      <ul className="space-y-2">
        <li className="text-gray-600 text-base flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
          <span>Treuekarte wird in Deutschland betrieben</span>
        </li>
        <li className="text-gray-600 text-base flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
          <span>Impressum & Datenschutz klar auf der Website</span>
        </li>
        <li className="text-gray-600 text-base flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
          <span>Server in der EU, DSGVO-konform</span>
        </li>
        <li className="text-gray-600 text-base flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
          <span>Wir sind kein Kassen- oder Buchhaltungsprogramm, sondern ersetzen nur deine Papier-Bonuskarte.</span>
        </li>
      </ul>
    ),
  },
];

export function Objections() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
            Fragen & Antworten (FAQ)
          </h2>
          
          <Accordion>
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                defaultOpen={index === 0}
              />
            ))}
          </Accordion>
          
          {/* CTA Section */}
          <div className="pt-8 border-t border-gray-200 space-y-6">
            <p className="text-lg md:text-xl text-gray-900 text-center font-medium">
              Noch eine Frage offen?
            </p>
            <p className="text-base text-gray-600 text-center">
              Schreib uns kurz – wir beantworten dir alles in ein paar Minuten.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white text-base px-6 md:px-8 py-6 md:py-7 h-auto shadow-lg hover:shadow-xl transition-shadow rounded-xl"
                asChild
              >
                <a 
                  href="https://wa.me/491234567890?text=Hallo%2C%20ich%20habe%20noch%20eine%20Frage" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Fragen auf WhatsApp stellen"
                >
                  Fragen auf WhatsApp stellen
                </a>
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f]/5 text-base px-6 md:px-8 py-6 md:py-7 h-auto shadow-md hover:shadow-lg transition-shadow rounded-xl"
                asChild
              >
                <a 
                  href="https://zalo.me/your-zalo-id" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Fragen auf Zalo stellen"
                >
                  Fragen auf Zalo stellen
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

