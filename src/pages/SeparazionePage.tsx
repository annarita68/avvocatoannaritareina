import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Users, Heart, MapPin } from "lucide-react";
import dettaglioStudio from "@/assets/dettaglio-studio.jpeg";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import FAQSection from "@/components/FAQSection";

const faqsSeparazione = [
  { question: "Qual è la differenza tra separazione consensuale e giudiziale?", answer: "La separazione consensuale avviene quando i coniugi trovano un accordo su tutte le condizioni (figli, casa, assegno). La separazione giudiziale viene disposta dal giudice quando non è possibile raggiungere un accordo, dopo aver esaminato le posizioni di entrambe le parti." },
  { question: "È possibile separarsi senza andare in tribunale?", answer: "Sì, dal 2014 è possibile separarsi attraverso la negoziazione assistita dagli avvocati o, in assenza di figli minori e di trasferimenti patrimoniali, anche presso l'Ufficiale di Stato Civile del Comune." },
  { question: "Come viene assegnata la casa coniugale?", answer: "La casa coniugale viene generalmente assegnata al coniuge presso il quale vengono collocati i figli minori, nell'interesse di questi ultimi a mantenere il proprio ambiente di vita. In assenza di figli, l'assegnazione segue criteri diversi." },
  { question: "Quali sono i diritti dei figli nella separazione?", answer: "I figli hanno diritto a mantenere un rapporto equilibrato e continuativo con entrambi i genitori, a ricevere cura, educazione e mantenimento da entrambi. Il principio cardine è sempre il superiore interesse del minore." },
];

const SeparazionePage = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "/avvocato-penalista-messina" },
      { "@type": "ListItem", position: 2, name: "Diritto di Famiglia", item: "/avvocato-diritto-famiglia-messina" },
      { "@type": "ListItem", position: 3, name: "Separazione", item: "/avvocato-separazione-messina" },
    ],
  };

  return (
    <Layout>
      <Helmet>
        <title>Avvocato Separazione Messina | Assistenza Legale – Avv. Annarita Reina</title>
        <meta name="description" content="Assistenza legale per separazione consensuale e giudiziale a Messina. Studio in Via Cesare Battisti 191. Tel. 090 738 4212." />
        <link rel="canonical" href="/avvocato-separazione-messina" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <section className="bg-primary py-16 text-primary-foreground md:py-24">
        <div className="container mx-auto px-4 text-center">
          <nav className="mb-4 text-sm opacity-70">
            <Link to="/avvocato-penalista-messina" className="hover:underline">Home</Link> / <Link to="/avvocato-diritto-famiglia-messina" className="hover:underline">Famiglia</Link> / Separazione
          </nav>
          <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">Avvocato Separazione Messina</h1>
          <p className="mx-auto max-w-2xl text-lg opacity-90">Assistenza legale completa per la separazione consensuale e giudiziale a Messina e provincia.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="max-w-xs overflow-hidden rounded-lg shadow-lg">
            <img
              src={dettaglioStudio}
              alt="Dettaglio dello studio legale dell'Avv. Annarita Reina"
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
              <h2 className="font-serif text-2xl font-bold text-primary">Separazione Consensuale</h2>
            </div>
            <p className="leading-relaxed text-muted-foreground">
              La separazione consensuale è la soluzione più rapida e meno conflittuale quando i coniugi riescono a trovare un accordo sulle condizioni della separazione. Lo studio assiste nella redazione dell'accordo, nella tutela degli interessi del cliente e nella gestione della procedura davanti al Tribunale o, quando possibile, attraverso la negoziazione assistita.
            </p>
          </div>

          <div>
            <div className="mb-4 flex items-center gap-3">
              <Users className="h-8 w-8 text-secondary" />
              <h2 className="font-serif text-2xl font-bold text-primary">Separazione Giudiziale</h2>
            </div>
            <p className="leading-relaxed text-muted-foreground">
              Quando non è possibile raggiungere un accordo, la separazione giudiziale viene richiesta al Tribunale competente. Lo studio predispone il ricorso, assiste durante le udienze e le eventuali fasi istruttorie, impegnandosi nella tutela dei diritti e degli interessi del cliente in ogni fase del procedimento.
            </p>
          </div>

          <div>
            <div className="mb-4 flex items-center gap-3">
              <Heart className="h-8 w-8 text-secondary" />
              <h2 className="font-serif text-2xl font-bold text-primary">Tutela dei Figli</h2>
            </div>
            <p className="leading-relaxed text-muted-foreground">
              In ogni procedimento di separazione, la tutela dei figli rappresenta l'aspetto più delicato e importante. Lo studio si adopera affinché le condizioni di affidamento, collocamento, mantenimento e frequentazione siano definite nel rispetto del superiore interesse dei minori, promuovendo soluzioni che preservino il rapporto con entrambi i genitori.
            </p>
          </div>

          <div>
            <div className="mb-4 flex items-center gap-3">
              <MapPin className="h-8 w-8 text-secondary" />
              <h2 className="font-serif text-2xl font-bold text-primary">Operatività su Messina e Provincia</h2>
            </div>
            <p className="mb-6 leading-relaxed text-muted-foreground">
              Lo studio offre assistenza per le procedure di separazione presso il Tribunale di Messina e su tutto il territorio provinciale, garantendo la medesima cura e attenzione indipendentemente dalla sede del procedimento.
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

      <FAQSection faqs={faqsSeparazione} />
    </Layout>
  );
};

export default SeparazionePage;
