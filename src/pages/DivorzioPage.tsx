import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Users, Scale, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import FAQSection from "@/components/FAQSection";

const faqsDivorzio = [
  { question: "Dopo quanto tempo dalla separazione si può divorziare?", answer: "Con la riforma del 2015, è possibile chiedere il divorzio dopo 6 mesi dalla separazione consensuale e dopo 12 mesi dalla separazione giudiziale. I termini decorrono dalla comparsa dei coniugi davanti al Presidente del Tribunale." },
  { question: "Qual è la differenza tra divorzio congiunto e giudiziale?", answer: "Il divorzio congiunto avviene quando i coniugi concordano tutte le condizioni dello scioglimento del matrimonio. Il divorzio giudiziale si verifica quando non c'è accordo e il giudice deve decidere sulle condizioni. Il divorzio congiunto è più rapido ed economico." },
  { question: "È possibile modificare l'assegno divorzile?", answer: "Sì, è possibile chiedere la revisione dell'assegno divorzile quando sopraggiungono giustificati motivi, come variazioni significative della situazione economica di uno dei due ex coniugi." },
  { question: "Il divorzio può essere ottenuto senza andare in tribunale?", answer: "Sì, è possibile ottenere il divorzio congiunto attraverso la negoziazione assistita dagli avvocati o, in assenza di figli minori e in determinate condizioni, presso l'Ufficiale di Stato Civile del Comune." },
];

const DivorzioPage = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "/avvocato-penalista-messina" },
      { "@type": "ListItem", position: 2, name: "Diritto di Famiglia", item: "/avvocato-diritto-famiglia-messina" },
      { "@type": "ListItem", position: 3, name: "Divorzio", item: "/avvocato-divorzio-messina" },
    ],
  };

  return (
    <Layout>
      <Helmet>
        <title>Avvocato Divorzio Messina | Consulenza Legale – Studio Legale Messina</title>
        <meta name="description" content="Assistenza per divorzio a Messina e provincia. Studio legale in centro città. Tel. 090 738 4212." />
        <link rel="canonical" href="/avvocato-divorzio-messina" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <section className="bg-primary py-16 text-primary-foreground md:py-24">
        <div className="container mx-auto px-4 text-center">
          <nav className="mb-4 text-sm opacity-70">
            <Link to="/avvocato-penalista-messina" className="hover:underline">Home</Link> / <Link to="/avvocato-diritto-famiglia-messina" className="hover:underline">Famiglia</Link> / Divorzio
          </nav>
          <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">Avvocato Divorzio Messina</h1>
          <p className="mx-auto max-w-2xl text-lg opacity-90">Consulenza e assistenza legale per il divorzio congiunto e giudiziale a Messina e provincia.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-4xl px-4 space-y-16">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Users className="h-8 w-8 text-secondary" />
              <h2 className="font-serif text-2xl font-bold text-primary">Divorzio Congiunto</h2>
            </div>
            <p className="leading-relaxed text-muted-foreground">
              Il divorzio congiunto rappresenta la modalità più rapida e meno onerosa per sciogliere il matrimonio. È possibile quando i coniugi raggiungono un accordo completo su tutte le condizioni, incluse quelle economiche e relative ai figli. Lo studio assiste nella redazione dell'accordo e nella gestione della procedura.
            </p>
          </div>

          <div>
            <div className="mb-4 flex items-center gap-3">
              <Scale className="h-8 w-8 text-secondary" />
              <h2 className="font-serif text-2xl font-bold text-primary">Divorzio Giudiziale</h2>
            </div>
            <p className="leading-relaxed text-muted-foreground">
              Quando non è possibile trovare un accordo, il divorzio giudiziale viene deciso dal Tribunale competente. Lo studio garantisce una difesa accurata e completa, dalla predisposizione del ricorso alla gestione di tutte le fasi processuali, assicurando la tutela dei diritti del cliente.
            </p>
          </div>

          <div>
            <div className="mb-4 flex items-center gap-3">
              <Scale className="h-8 w-8 text-secondary" />
              <h2 className="font-serif text-2xl font-bold text-primary">Revisione delle Condizioni</h2>
            </div>
            <p className="leading-relaxed text-muted-foreground">
              Le condizioni stabilite al momento del divorzio possono essere modificate quando sopraggiungono mutamenti significativi nelle circostanze di fatto. Lo studio valuta i presupposti per la revisione e assiste nella presentazione dell'istanza competente.
            </p>
          </div>

          <div>
            <div className="mb-4 flex items-center gap-3">
              <MapPin className="h-8 w-8 text-secondary" />
              <h2 className="font-serif text-2xl font-bold text-primary">Attività presso il Tribunale di Messina</h2>
            </div>
            <p className="mb-6 leading-relaxed text-muted-foreground">
              Lo studio opera con continuità presso il Tribunale di Messina per le procedure di divorzio, offrendo assistenza su tutto il territorio provinciale con la consueta attenzione e professionalità.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="outline">
                <Link to="/avvocato-diritto-famiglia-messina">← Diritto di Famiglia</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/avvocato-penalista-messina">← Pagina Principale</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqsDivorzio} />
    </Layout>
  );
};

export default DivorzioPage;
