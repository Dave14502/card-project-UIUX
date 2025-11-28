import { QrCode, Smartphone, CheckCircle } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: QrCode,
      title: "QR-Code aufstellen",
      description: "Du bekommst einen QR-Code für deinen Tresen – deine Kundinnen scannen ihn mit dem Handy.",
    },
    {
      icon: Smartphone,
      title: "Stempel sammeln",
      description: "Die Stempelkarte landet automatisch im Apple Wallet oder Google Wallet – ohne App-Download.",
    },
    {
      icon: CheckCircle,
      title: "Belohnung einlösen",
      description: "Bei 10 Stempeln gibt es die Belohnung. Deine Kundinnen kommen öfter wieder.",
    },
  ];

  return (
    <section className="w-full bg-white py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-brand-navy mb-4">
            So funktioniert's
          </h2>
          <p className="text-base md:text-lg text-brand-body/80 max-w-2xl mx-auto">
            In 3 einfachen Schritten zu mehr Stammkundinnen
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-4"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-brand-gold/10 flex items-center justify-center mb-2">
                  <Icon className="w-8 h-8 md:w-10 md:h-10 text-brand-gold" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-sm font-semibold text-brand-gold">
                      Schritt {index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-brand-navy">
                    {step.title}
                  </h3>
                  <p className="text-base md:text-lg text-brand-body/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

