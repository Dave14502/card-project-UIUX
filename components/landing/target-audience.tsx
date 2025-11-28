import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export function TargetAudience() {
  return (
    <section className="w-full bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
            Für wen ist Treuekarte gedacht?
          </h2>
          
          <Card className="border-2 border-gray-200 shadow-md rounded-xl">
            <CardContent className="p-6 md:p-8">
              <ul className="space-y-4 text-base md:text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#1e3a5f] mt-0.5 flex-shrink-0" />
                  <span>Nagelstudios in Deutschland</span>
                </li>
                
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#1e3a5f] mt-0.5 flex-shrink-0" />
                  <span>
                    Besonders vietnamesisch geführte Familienstudios, die:
                  </span>
                </li>
                
                <li className="ml-8 space-y-2">
                  <div className="flex items-start gap-3">
                    <span className="text-[#1e3a5f] mt-0.5">•</span>
                    <span>Stammkundinnen halten wollen</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#1e3a5f] mt-0.5">•</span>
                    <span>ruhiger und ohne Bonuskarten-Stress arbeiten möchten</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#1e3a5f] mt-0.5">•</span>
                    <span>moderner wirken wollen, ohne komplizierte Software</span>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

