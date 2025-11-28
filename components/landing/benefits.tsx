import { TrendingUp, Clock, Users, Shield } from "lucide-react";

export function Benefits() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Mehr Stammkundinnen",
      description: "Deine Kundinnen kommen öfter wieder, weil sie ihre Stempelkarte immer dabei haben.",
    },
    {
      icon: Clock,
      title: "Weniger Stress & Diskussionen",
      description: "Kein Stempeln mehr – deine Kundinnen scannen selbstständig den QR-Code.",
    },
    {
      icon: Users,
      title: "Professioneller Auftritt",
      description: "Zeige, dass du modern und kundenorientiert denkst – ohne großen Aufwand.",
    },
    {
      icon: Shield,
      title: "Einfache Verwaltung im Dashboard",
      description: "Übersichtliches Dashboard zeigt dir alle Stempelkarten und Statistiken auf einen Blick.",
    },
  ];

  return (
    <section className="w-full bg-white py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-brand-navy mb-4">
            Deine Vorteile
          </h2>
          <p className="text-base md:text-lg text-brand-body/80 max-w-2xl mx-auto">
            Warum digitale Stempelkarten dein Business voranbringen
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-[hsl(var(--brand-section))] rounded-xl p-6 md:p-8 shadow-brand-soft border border-brand-border hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-brand-gold/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 md:w-7 md:h-7 text-brand-gold" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-brand-navy mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm md:text-base text-brand-body/80 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

