import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [form, setForm] = useState({ nome: "", telefono: "", email: "", messaggio: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nome || !form.email || !form.messaggio) {
      toast({ title: "Compila tutti i campi obbligatori", variant: "destructive" });
      return;
    }
    const subject = encodeURIComponent(`Richiesta di contatto da ${form.nome}`);
    const body = encodeURIComponent(
      `Nome: ${form.nome}\nTelefono: ${form.telefono}\nEmail: ${form.email}\n\nMessaggio:\n${form.messaggio}`
    );
    window.location.href = `mailto:annaritareina@virgilio.it?subject=${subject}&body=${body}`;
    toast({ title: "Grazie per averci contattato", description: "Il tuo client email si aprirà per inviare il messaggio." });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="nome">Nome e Cognome *</Label>
          <Input id="nome" value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} placeholder="Mario Rossi" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="telefono">Telefono</Label>
          <Input id="telefono" type="tel" value={form.telefono} onChange={(e) => setForm({ ...form, telefono: e.target.value })} placeholder="090 123 4567" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email *</Label>
        <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="mario@esempio.it" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="messaggio">Messaggio *</Label>
        <Textarea id="messaggio" rows={5} value={form.messaggio} onChange={(e) => setForm({ ...form, messaggio: e.target.value })} placeholder="Descrivi brevemente la tua esigenza..." required />
      </div>
      <Button type="submit" size="lg" className="w-full sm:w-auto">Invia Messaggio</Button>
    </form>
  );
};

export default ContactForm;
