import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-brand-navy text-white py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo-temora.png"
                alt="Temora Logo"
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
              />
              <div>
                <p className="font-semibold text-lg">Temora</p>
                <p className="text-sm text-white/70">Deine digitale Stempelkarte</p>
              </div>
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              Digitale Bonuskarten für vietnamesische Nagelstudios in Deutschland.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Rechtliches</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link href="/impressum" className="hover:text-brand-gold transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="hover:text-brand-gold transition-colors">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="/agb" className="hover:text-brand-gold transition-colors">
                  AGB
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Kontakt</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a
                  href="https://wa.me/491234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-gold transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@temora.de"
                  className="hover:text-brand-gold transition-colors"
                >
                  info@temora.de
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-sm text-white/70">
          <p>© 2025 Temora. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
