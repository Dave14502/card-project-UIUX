import { Users } from "lucide-react";

export function TargetAudience() {
  return (
    <section className="w-full bg-brand-section py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-brand-gold/10 flex items-center justify-center mx-auto mb-6">
            <Users className="w-8 h-8 md:w-10 md:h-10 text-brand-gold" />
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-brand-navy mb-6">
            Für wen ist das?
          </h2>
          <div className="space-y-4 text-base md:text-lg text-brand-body/80 leading-relaxed">
            <p>
              Speziell entwickelt für <strong className="text-brand-navy">vietnamesische Nagelstudios</strong> in Deutschland, die mehr Stammkundinnen gewinnen wollen.
            </p>
            <p>
              Perfekt für dich, wenn du:
            </p>
            <ul className="list-none space-y-3 text-left max-w-xl mx-auto mt-6">
              <li className="flex items-start gap-3">
                <span className="text-brand-gold font-bold mt-1">✓</span>
                <span>Mehr Stammkundinnen willst</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-gold font-bold mt-1">✓</span>
                <span>Professioneller auftreten möchtest</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-gold font-bold mt-1">✓</span>
                <span>Zeit beim Stempeln sparen willst</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-gold font-bold mt-1">✓</span>
                <span>Keine komplizierte Technik brauchst</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
