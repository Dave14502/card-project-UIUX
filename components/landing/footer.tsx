import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-gray-50 border-t border-gray-200 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-6">
            <Link href="/impressum" className="text-sm text-gray-600 hover:text-gray-900">
              Impressum
            </Link>
            <Link href="/datenschutz" className="text-sm text-gray-600 hover:text-gray-900">
              Datenschutz
            </Link>
          </div>
          
          <div className="text-sm text-gray-600 text-center md:text-right space-y-1">
            <p>
              Die Lösung wird in Deutschland betrieben und erfüllt die Anforderungen der DSGVO.
            </p>
            <p>
              Deine Daten und die Daten deiner Kundinnen werden nicht an Dritte verkauft.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

