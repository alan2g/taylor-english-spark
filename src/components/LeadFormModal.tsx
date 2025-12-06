import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

interface LeadFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LeadFormModal = ({ isOpen, onClose }: LeadFormModalProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });
  

  const isFormValid = formData.fullName.trim() !== "" && 
                      formData.email.trim() !== "" && 
                      formData.phone.trim() !== "";

  const getWhatsAppUrl = () => {
    const encodedName = encodeURIComponent(formData.fullName.trim());
    const encodedEmail = encodeURIComponent(formData.email.trim());
    const encodedPhone = encodeURIComponent(formData.phone.trim());
    const message = encodeURIComponent(`Olá! Meu nome é ${formData.fullName.trim()}. Gostaria de testar meu nível de inglês.\n\nE-mail: ${formData.email.trim()}\nTelefone: ${formData.phone.trim()}`);
    return `https://wa.me/5519981854103?text=${message}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent className="sm:max-w-md bg-card border-border glass-card [&>button]:hidden">
        
        <DialogHeader className="text-center pb-4">
          <DialogTitle className="text-2xl font-bold text-foreground">
            Teste seu <span className="text-primary">Inglês</span>
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Preencha seus dados para começar sua avaliação com a Taylor
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-foreground">
              Nome Completo
            </Label>
            <Input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Digite seu nome completo"
              value={formData.fullName}
              onChange={handleChange}
              required
              maxLength={100}
              className="bg-input border-border focus:border-primary focus:ring-primary/20"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground">
              E-mail
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="seu@email.com"
              value={formData.email}
              onChange={handleChange}
              required
              maxLength={255}
              className="bg-input border-border focus:border-primary focus:ring-primary/20"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-foreground">
              Telefone (WhatsApp)
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="(00) 00000-0000"
              value={formData.phone}
              onChange={handleChange}
              required
              maxLength={20}
              className="bg-input border-border focus:border-primary focus:ring-primary/20"
            />
          </div>

          {isFormValid ? (
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full rounded-xl bg-gradient-to-r from-primary via-primary to-accent text-primary-foreground font-semibold text-lg px-10 py-4 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              Testar Nível de Inglês
            </a>
          ) : (
            <Button
              type="button"
              variant="hero"
              size="xl"
              className="w-full opacity-50 cursor-not-allowed"
              disabled
            >
              Testar Nível de Inglês
            </Button>
          )}
        </div>

        <p className="text-xs text-center text-muted-foreground mt-4">
          Ao enviar, você concorda em receber contato do English Center
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default LeadFormModal;
