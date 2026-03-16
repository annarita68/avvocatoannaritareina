import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Shield, Scale, MapPin, Phone } from "lucide-react";
import dettaglioSalaRiunioni from "@/assets/dettaglio-sala-riunioni.jpeg";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import FAQSection from "@/components/FAQSection";

const faqsPenale = [
{ question: "Quando è necessario rivolgersi a un avvocato penalista?", answer: "È consigliabile rivolgersi a un avvocato penalista ogni volta che si è coinvolti in un procedimento penale, sia come indagato che come persona offesa. L'assistenza legale è fondamentale fin dalle prime fasi delle indagini preliminari per tutelare adeguatamente i propri diritti." },
{ question: "Come si svolge la difesa nelle indagini preliminari?", answer: "Durante le indagini preliminari l'avvocato difensore assiste il proprio assistito negli interrogatori, può svolgere indagini difensive, partecipare agli incidenti probatori e presentare memorie difensive al Pubblico Ministero." },
{ question: "Lo studio opera solo presso il Tribunale di Messina?", answer: "L'attività prevalente si svolge presso il Tribunale di Messina e gli uffici giudiziari della provincia. Per esigenze specifiche, è possibile valutare l'assistenza anche presso altri fori." },
{ question: "Quali sono i tempi di un procedimento penale?", answer: "I tempi possono variare significativamente in base alla complessità del caso, al numero di imputati e al carico del tribunale competente. L'avvocato potrà fornire una stima più precisa dopo aver esaminato il caso specifico." }];


const PenalePage = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "/avvocato-penalista-messina" },
    { "@type": "ListItem", position: 2, name: "Diritto Penale", item: "/avvocato-diritto-penale-messina" }]

  };

  return (
    <Layout>
      <Helmet>
        <title>Avvocato Diritto Penale Messina | Difesa Penale – Avv. Annarita Reina</title>
        <meta name="description" content="Assistenza legale in diritto penale a Messina e provincia. Studio in Via Cesare Battisti 191. Tel. 090 738 4212." />
        <link rel="canonical" href="/avvocato-diritto-penale-messina" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      {/* Hero */}
      <section className="bg-primary py-16 text-primary-foreground md:py-24">
        <div className="container mx-auto px-4 text-center">
          <nav className="mb-4 text-sm opacity-70">
            <Link to="/avvocato-penalista-messina" className="hover:underline">Home</Link> / Diritto Penale
          </nav>
          <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">Avvocato Diritto Penale Messina</h1>
          <p className="mx-auto max-w-2xl text-lg opacity-90">Assistenza e difesa penale qualificata presso il Tribunale di Messina e su tutto il territorio provinciale.</p>
        </div>
      </section>

      {/* Foto Studio */}
      <section className="py-12">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={dettaglioSalaRiunioni}
              alt="Dettaglio della sala riunioni dello studio legale"
              className="w-full object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Content sections */}
      <section className="py-16">
        <div className="container mx-auto max-w-4xl px-4 space-y-16">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Shield className="h-8 w-8 text-secondary" />
              <h2 className="font-serif text-2xl font-bold text-primary">Difesa in Indagini Preliminari</h2>
            </div>
            <p className="leading-relaxed text-muted-foreground">
              La fase delle indagini preliminari rappresenta un momento cruciale del procedimento penale. Lo studio offre assistenza immediata dall'avviso di garanzia, garantendo la tutela dei diritti dell'indagato durante gli interrogatori, le perquisizioni e ogni altra attività investigativa. L'intervento tempestivo di un difensore qualificato può risultare determinante per l'esito dell'intero procedimento.
            </p>
          </div>

          <div>
            <div className="mb-4 flex items-center gap-3">
              <Scale className="h-8 w-8 text-secondary" />
              <h2 className="font-serif text-2xl font-bold text-primary">Assistenza in Giudizio</h2>
            </div>
            <p className="leading-relaxed text-muted-foreground">
              Lo studio garantisce una difesa completa e accurata durante tutte le fasi del processo penale: dall'udienza preliminare al dibattimento, fino all'eventuale appello e ricorso in Cassazione. Ogni strategia difensiva viene costruita con attenzione, analizzando nel dettaglio gli atti processuali e individuando le soluzioni più appropriate per ogni specifica situazione.
            </p>
          </div>

          <div>
            <div className="mb-4 flex items-center gap-3">
              <Scale className="h-8 w-8 text-secondary" />
              <h2 className="font-serif text-2xl font-bold text-primary">Procedimenti presso il Tribunale di Messina</h2>
            </div>
            <p className="leading-relaxed text-muted-foreground">L'Avv. Annarita Reina opera con continuità presso il Tribunale di Messina, la Corte d'Appello, il Tribunale di Sorveglianza e la Corte di Cassazione con una conoscenza approfondita delle prassi e delle procedure degli uffici giudiziari locali. Questa familiarità con il territorio consente di offrire un servizio efficiente e puntuale.

            </p>
          </div>

          <div>
            <div className="mb-4 flex items-center gap-3">
              <MapPin className="h-8 w-8 text-secondary" />
              <h2 className="font-serif text-2xl font-bold text-primary">Operatività in Provincia</h2>
            </div>
            <p className="mb-6 leading-relaxed text-muted-foreground">
              Oltre alla città di Messina, lo studio estende la propria attività a tutta la provincia, assicurando la medesima qualità di assistenza legale anche nei comuni del comprensorio messinese, incluse le aree tirrenica e ionica.
            </p>
            <Button asChild variant="outline">
              <Link to="/avvocato-penalista-messina">← Torna alla pagina principale</Link>
            </Button>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqsPenale} />

      <section id="contatti" className="bg-muted py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-6 font-serif text-3xl font-bold text-primary">Contatti</h2>
          <p className="mb-8 text-muted-foreground">Per una consulenza in diritto penale, contatta lo studio.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg">
              <a href="tel:3384044547">Chiama Ora</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="mailto:annaritareina@virgilio.it">Scrivi un'Email</a>
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            <MapPin className="mr-1 inline h-4 w-4" /> <a href="https://www.google.com/maps/place/Avvocato+Annarita+Reina/@38.1876495,15.5532674,17z/" target="_blank" rel="noopener noreferrer" className="hover:underline">Via Cesare Battisti, 191 – 98123 Messina</a> |
            <Phone className="mx-1 inline h-4 w-4" /> <a href="tel:0907384212" className="hover:underline">090 738 4212</a>
          </p>
          <div className="mt-6 aspect-video overflow-hidden rounded-lg border border-border">
            <iframe
              title="Studio Legale Avv. Annarita Reina – Messina"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3135.9580082314205!2d15.5532674!3d38.1876495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13144e7eec7fdf1f%3A0x7149b9f4b21a2db8!2sAvvocato%20Annarita%20Reina!5e0!3m2!1sit!2sit!4v1773684761918!5m2!1sit!2sit"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </Layout>);

};

export default PenalePage;