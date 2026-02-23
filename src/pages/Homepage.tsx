import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Scale, Users, MapPin, Phone, Mail, Shield, Heart } from "lucide-react";
import ingressoStudio from "@/assets/ingresso-studio.jpeg";
import studioImg from "@/assets/studio.jpeg";
import dettaglioStudio from "@/assets/dettaglio-studio.jpeg";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import ContactForm from "@/components/ContactForm";

const Homepage = () => {
  const legalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Avv. Annarita Reina – Studio Legale",
    description: "Studio legale a Messina centro. Attività in diritto penale e diritto di famiglia. Operatività su Messina e provincia.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Via Cesare Battisti, 191",
      addressLocality: "Messina",
      postalCode: "98123",
      addressRegion: "ME",
      addressCountry: "IT",
    },
    telephone: "+39 090 738 4212",
    areaServed: ["Messina", "Provincia di Messina"],
    priceRange: "Su appuntamento",
  };

  return (
    <Layout>
      <Helmet>
        <title>Avvocato Penalista Messina | Avv. Annarita Reina – Studio Legale in Centro</title>
        <meta name="description" content="Studio legale a Messina centro in Via Cesare Battisti 191. Attività in diritto penale e diritto di famiglia. Operatività su Messina e provincia. Tel. 090 738 4212." />
        <link rel="canonical" href="/avvocato-penalista-messina" />
        <script type="application/ld+json">{JSON.stringify(legalServiceSchema)}</script>
      </Helmet>

      {/* Hero */}
      <section className="bg-primary py-20 text-primary-foreground md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 font-serif text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Avvocato Penalista Messina<br />
            <span className="text-secondary">Avv. Annarita Reina</span>
            <span className="block text-lg font-normal italic opacity-80 md:text-xl">Patrocinante in Cassazione</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed opacity-90">
            Studio legale nel centro di Messina. Assistenza qualificata in diritto penale e diritto di famiglia per privati e aziende su Messina e provincia.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="#contatti">Richiedi un Appuntamento</a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a href="tel:3384044547">
                <Phone className="mr-2 h-4 w-4" /> Chiama Ora
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Presentazione Studio */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-10 text-center font-serif text-3xl font-bold text-primary">Lo Studio Legale</h2>
          <div className="mx-auto max-w-5xl grid gap-6 md:grid-cols-3">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={ingressoStudio}
                alt="Ingresso dello studio legale dell'Avv. Annarita Reina a Messina"
                className="h-64 w-full object-cover"
                loading="lazy"
              />
              <div className="bg-card p-3 text-center text-sm font-medium text-muted-foreground">Ingresso Studio</div>
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={studioImg}
                alt="Studio dell'Avv. Annarita Reina – postazione di lavoro"
                className="h-64 w-full object-cover"
                loading="lazy"
              />
              <div className="bg-card p-3 text-center text-sm font-medium text-muted-foreground">Studio</div>
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={dettaglioStudio}
                alt="Dettaglio dello studio – toga e stampe d'epoca"
                className="h-64 w-full object-cover"
                loading="lazy"
              />
              <div className="bg-card p-3 text-center text-sm font-medium text-muted-foreground">Dettaglio Studio</div>
            </div>
          </div>
          <div className="mx-auto mt-8 max-w-3xl text-center">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Lo studio legale dell'Avv. Annarita Reina, situato in Via Cesare Battisti 191 nel cuore di Messina, offre assistenza legale qualificata con particolare attenzione alle esigenze del cliente.
              L'attività professionale si concentra prevalentemente nel <strong className="text-foreground">diritto penale</strong> e nel <strong className="text-foreground">diritto di famiglia</strong>, con un approccio attento e personalizzato per ogni singola situazione.
            </p>
          </div>
        </div>
      </section>

      {/* Aree di Attività */}
      <section className="bg-muted py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center font-serif text-3xl font-bold text-primary">Aree di Attività</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {/* Penale */}
            <div className="rounded-lg border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 font-serif text-2xl font-bold text-primary">Diritto Penale</h3>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                Assistenza e difesa in ogni fase del procedimento penale: dalle indagini preliminari al giudizio, presso il Tribunale di Messina e su tutto il territorio provinciale.
              </p>
              <ul className="mb-6 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><Scale className="h-4 w-4 text-secondary" /> Difesa in indagini preliminari</li>
                <li className="flex items-center gap-2"><Scale className="h-4 w-4 text-secondary" /> Assistenza in giudizio</li>
                <li className="flex items-center gap-2"><Scale className="h-4 w-4 text-secondary" /> Procedimenti presso il Tribunale di Messina</li>
              </ul>
              <Button variant="outline" asChild>
                <Link to="/avvocato-diritto-penale-messina">Scopri di più →</Link>
              </Button>
            </div>

            {/* Famiglia */}
            <div className="rounded-lg border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 font-serif text-2xl font-bold text-primary">Diritto di Famiglia</h3>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                Consulenza e assistenza nelle questioni familiari: separazioni, divorzi, affidamento dei minori e modifica delle condizioni di separazione o divorzio.
              </p>
              <ul className="mb-6 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><Users className="h-4 w-4 text-secondary" /> Separazioni e divorzi</li>
                <li className="flex items-center gap-2"><Users className="h-4 w-4 text-secondary" /> Affidamento minori</li>
                <li className="flex items-center gap-2"><Users className="h-4 w-4 text-secondary" /> Modifica condizioni</li>
              </ul>
              <Button variant="outline" asChild>
                <Link to="/avvocato-diritto-famiglia-messina">Scopri di più →</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Copertura Territoriale */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 font-serif text-3xl font-bold text-primary">Copertura Territoriale</h2>
          <div className="mx-auto flex max-w-xl items-center justify-center gap-3 text-lg text-muted-foreground">
            <MapPin className="h-6 w-6 text-secondary" />
            <p>
              Lo studio opera su <strong className="text-foreground">Messina e tutta la provincia</strong>, garantendo assistenza legale presso il Tribunale di Messina e gli uffici giudiziari del territorio.
            </p>
          </div>
        </div>
      </section>

      {/* Contatti */}
      <section id="contatti" className="bg-muted py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center font-serif text-3xl font-bold text-primary">Contatti</h2>
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Info + Mappa */}
            <div>
              <div className="mb-6 space-y-3">
                <p className="flex items-center gap-3 text-foreground"><MapPin className="h-5 w-5 text-secondary" /> Via Cesare Battisti, 191, 98123 Messina (ME)</p>
                <p className="flex items-center gap-3 text-foreground"><Phone className="h-5 w-5 text-secondary" /> <a href="tel:0907384212" className="hover:text-primary hover:underline">090 738 4212</a></p>
                <p className="flex items-center gap-3 text-foreground"><Phone className="h-5 w-5 text-secondary" /> <a href="tel:3384044547" className="hover:text-primary hover:underline">338 404 4547</a></p>
                <p className="flex items-center gap-3 text-foreground"><Mail className="h-5 w-5 text-secondary" /> <a href="mailto:annaritareina@virgilio.it" className="hover:text-primary hover:underline">annaritareina@virgilio.it</a></p>
                <p className="flex items-center gap-3 text-foreground"><Mail className="h-5 w-5 text-secondary" /> <a href="mailto:avvannaritareina@pec.giuffre.it" className="hover:text-primary hover:underline">PEC: avvannaritareina@pec.giuffre.it</a></p>
              </div>
              <div className="aspect-video overflow-hidden rounded-lg border border-border">
                <iframe
                  title="Studio Legale Avv. Annarita Reina – Messina"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3119.9!2d15.5543!3d38.1937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sVia+Cesare+Battisti%2C+191%2C+98123+Messina+ME!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Form */}
            <div className="rounded-lg border border-border bg-card p-8">
              <h3 className="mb-6 font-serif text-xl font-bold text-primary">Richiedi un Appuntamento</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Homepage;
