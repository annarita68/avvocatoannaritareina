import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Users, Heart, Shield } from "lucide-react";
import studioNuovo from "@/assets/studio-nuovo.png";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import FAQSection from "@/components/FAQSection";

const faqsFamiglia = [
  { question: "Qual è la differenza tra separazione e divorzio?", answer: "La separazione è il primo passo che allenta il vincolo matrimoniale, consentendo ai coniugi di vivere separatamente pur restando formalmente sposati. Il divorzio, invece, scioglie definitivamente il matrimonio. Prima di poter divorziare è necessario aver ottenuto la separazione." },
  { question: "Come viene deciso l'affidamento dei figli minori?", answer: "L'affidamento viene stabilito in base al principio del superiore interesse del minore. La regola generale prevede l'affidamento condiviso a entrambi i genitori, con collocamento prevalente presso uno di essi. Il giudice tiene conto di diversi fattori tra cui il legame affettivo, le capacità genitoriali e le esigenze del minore." },
  { question: "È possibile modificare le condizioni di separazione o divorzio?", answer: "Sì, è possibile chiedere la modifica delle condizioni quando intervengono cambiamenti significativi nelle circostanze di fatto o di diritto rispetto a quelle esistenti al momento della decisione originaria." },
  { question: "Quanto tempo serve per ottenere la separazione?", answer: "I tempi dipendono dal tipo di separazione scelto. La separazione consensuale può concludersi in poche settimane con la negoziazione assistita o l'accordo in Comune, oppure in alcuni mesi davanti al Tribunale. La separazione giudiziale può richiedere tempi più lunghi in base alla complessità del caso." },
];

const FamigliaPage = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "/avvocato-penalista-messina" },
      { "@type": "ListItem", position: 2, name: "Diritto di Famiglia", item: "/avvocato-diritto-famiglia-messina" },
    ],
  };

  return (
    <Layout>
      <Helmet>
        <title>Avvocato Diritto di Famiglia Messina | Separazioni e Tutela Minori</title>
        <meta name="description" content="Assistenza in diritto di famiglia a Messina e provincia. Studio legale in centro città. Tel. 090 738 4212." />
        <link rel="canonical" href="/avvocato-diritto-famiglia-messina" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <section className="bg-primary py-16 text-primary-foreground md:py-24">
        <div className="container mx-auto px-4 text-center">
          <nav className="mb-4 text-sm opacity-70">
            <Link to="/avvocato-penalista-messina" className="hover:underline">Home</Link> / Diritto di Famiglia
          </nav>
          <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">Avvocato Diritto di Famiglia Messina</h1>
          <p className="mx-auto max-w-2xl text-lg opacity-90">Consulenza e assistenza legale in tutte le questioni relative al diritto di famiglia a Messina e provincia.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="max-w-xs overflow-hidden rounded-lg shadow-lg">
            <img
              src={studioNuovo}
              alt="Studio legale dell'Avv. Annarita Reina"
              className="w-full object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-4xl px-4 space-y-16">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Heart className="h-8 w-8 text-secondary" />
              <h2 className="font-serif text-2xl font-bold text-primary">Separazioni</h2>
            </div>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              Lo studio assiste i coniugi in tutte le fasi della separazione, sia consensuale che giudiziale, con un approccio orientato alla risoluzione costruttiva delle controversie e alla tutela degli interessi di entrambe le parti, con particolare attenzione alla posizione dei figli minori.
            </p>
            <Button asChild variant="outline" size="sm">
              <Link to="/avvocato-separazione-messina">Approfondisci: Separazione →</Link>
            </Button>
          </div>

          <div>
            <div className="mb-4 flex items-center gap-3">
              <Users className="h-8 w-8 text-secondary" />
              <h2 className="font-serif text-2xl font-bold text-primary">Divorzi</h2>
            </div>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              Assistenza completa nelle procedure di divorzio, sia congiunto che giudiziale, inclusa la definizione degli aspetti patrimoniali, dell'assegno divorzile e dell'affidamento dei figli.
            </p>
            <Button asChild variant="outline" size="sm">
              <Link to="/avvocato-divorzio-messina">Approfondisci: Divorzio →</Link>
            </Button>
          </div>

          <div>
            <div className="mb-4 flex items-center gap-3">
              <Shield className="h-8 w-8 text-secondary" />
              <h2 className="font-serif text-2xl font-bold text-primary">Affidamento Minori</h2>
            </div>
            <p className="leading-relaxed text-muted-foreground">
              La tutela dei minori è una priorità assoluta in ogni procedimento familiare. Lo studio si impegna affinché le decisioni relative all'affidamento, al collocamento e al diritto di visita vengano assunte nel rispetto del superiore interesse del minore, favorendo soluzioni condivise quando possibile.
            </p>
          </div>

          <div>
            <div className="mb-4 flex items-center gap-3">
              <Users className="h-8 w-8 text-secondary" />
              <h2 className="font-serif text-2xl font-bold text-primary">Modifica delle Condizioni</h2>
            </div>
            <p className="mb-6 leading-relaxed text-muted-foreground">
              Quando le circostanze cambiano in modo significativo, è possibile richiedere la modifica delle condizioni di separazione o di divorzio già stabilite. Lo studio assiste nella valutazione dei presupposti e nella presentazione del ricorso.
            </p>
            <Button asChild variant="outline">
              <Link to="/avvocato-penalista-messina">← Torna alla pagina principale</Link>
            </Button>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqsFamiglia} />
    </Layout>
  );
};

export default FamigliaPage;
