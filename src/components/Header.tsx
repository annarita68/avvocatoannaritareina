import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, MapPin, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { to: "/avvocato-penalista-messina", label: "Home" },
  { to: "/avvocato-diritto-penale-messina", label: "Diritto Penale" },
  { to: "/avvocato-diritto-famiglia-messina", label: "Diritto di Famiglia" },
  { to: "/avvocato-separazione-messina", label: "Separazione" },
  { to: "/avvocato-divorzio-messina", label: "Divorzio" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="w-full border-b border-border bg-card">
      {/* Top bar with NAP */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-2 px-4 py-2 text-sm">
          <div className="flex items-center gap-4">
            <a href="https://www.google.com/maps/place/Avvocato+Annarita+Reina/@38.1876495,15.5532674,17z/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
              <MapPin className="h-3.5 w-3.5" />
              Via Cesare Battisti, 191 – 98123 Messina
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:0907384212" className="flex items-center gap-1 font-semibold hover:underline">
              <Phone className="h-3.5 w-3.5" />
              090 738 4212
            </a>
            <a href="tel:3384044547" className="flex items-center gap-1 font-semibold hover:underline">
              <Phone className="h-3.5 w-3.5" />
              338 404 4547
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link to="/avvocato-penalista-messina" className="flex flex-col">
          <span className="font-serif text-xl font-bold text-primary md:text-2xl">Avv. Annarita Reina</span>
          <span className="text-[0.7rem] italic text-muted-foreground">Patrocinante in Cassazione</span>
          <span className="text-xs text-muted-foreground">Studio Legale – Messina</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-primary ${
                location.pathname === link.to ? "bg-muted text-primary font-semibold" : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="ml-3">
            <a href="#contatti">Contattaci</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-card px-4 pb-4 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`block rounded-md px-3 py-2.5 text-sm font-medium transition-colors hover:bg-muted ${
                location.pathname === link.to ? "bg-muted text-primary font-semibold" : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="mt-2 w-full">
            <a href="#contatti" onClick={() => setMobileOpen(false)}>Contattaci</a>
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
