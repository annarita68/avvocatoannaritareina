import { Link } from "react-router-dom";
import { Phone, MapPin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-primary text-primary-foreground">
    <div className="container mx-auto grid gap-8 px-4 py-12 md:grid-cols-3">
      {/* Col 1 – Studio info */}
      <div>
        <h3 className="mb-4 font-serif text-lg font-bold">Avv. Annarita Reina</h3>
        <p className="mb-3 text-sm leading-relaxed opacity-90">
          Studio legale operativo a Messina e provincia. Attività prevalente in diritto penale e diritto di famiglia.
        </p>
        <div className="space-y-2 text-sm opacity-90">
          <p className="flex items-center gap-2"><MapPin className="h-4 w-4 shrink-0" /> Via Cesare Battisti, 191, 98123 Messina (ME)</p>
          <p className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0" /> <a href="tel:0907384212" className="hover:underline">090 738 4212</a></p>
          <p className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0" /> <a href="tel:3384044547" className="hover:underline">338 404 4547</a></p>
          <p className="flex items-center gap-2"><Mail className="h-4 w-4 shrink-0" /> <a href="mailto:annaritareina@virgilio.it" className="hover:underline">annaritareina@virgilio.it</a></p>
          <p className="flex items-center gap-2"><Mail className="h-4 w-4 shrink-0" /> <a href="mailto:avvannaritareina@pec.giuffre.it" className="hover:underline">PEC: avvannaritareina@pec.giuffre.it</a></p>
        </div>
      </div>

      {/* Col 2 – Links */}
      <div>
        <h3 className="mb-4 font-serif text-lg font-bold">Aree di Attività</h3>
        <nav className="space-y-2 text-sm">
          <Link to="/avvocato-diritto-penale-messina" className="block opacity-90 hover:opacity-100 hover:underline">Diritto Penale</Link>
          <Link to="/avvocato-diritto-famiglia-messina" className="block opacity-90 hover:opacity-100 hover:underline">Diritto di Famiglia</Link>
          <Link to="/avvocato-separazione-messina" className="block opacity-90 hover:opacity-100 hover:underline">Separazione</Link>
          <Link to="/avvocato-divorzio-messina" className="block opacity-90 hover:opacity-100 hover:underline">Divorzio</Link>
        </nav>
      </div>

      {/* Col 3 – Deontologica */}
      <div>
        <h3 className="mb-4 font-serif text-lg font-bold">Informazioni Legali</h3>
        <p className="text-sm leading-relaxed opacity-90">
          Le informazioni presenti in questo sito hanno carattere informativo e non costituiscono parere legale.
          I contenuti sono conformi al Codice Deontologico Forense e non contengono promesse di risultato.
        </p>
      </div>
    </div>

    <div className="border-t border-primary-foreground/20 py-4 text-center text-xs opacity-70">
      © {new Date().getFullYear()} Avv. Annarita Reina – Studio Legale Messina. Tutti i diritti riservati.
    </div>
  </footer>
);

export default Footer;
