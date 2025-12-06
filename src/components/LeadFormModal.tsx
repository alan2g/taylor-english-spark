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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isFormValid = formData.fullName.trim() !== "" && 
                      formData.email.trim() !== "" && 
                      formData.phone.trim() !== "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 500));

    const encodedName = encodeURIComponent(formData.fullName.trim());
    const encodedEmail = encodeURIComponent(formData.email.trim());
    const encodedPhone = encodeURIComponent(formData.phone.trim());
    const message = `Olá! Meu nome é ${encodedName}. Gostaria de testar meu nível de inglês.%0A%0AE-mail: ${encodedEmail}%0ATelefone: ${encodedPhone}`;
    const whatsappUrl = `https://wa.me/5519981854103?text=${message}`;
    
    window.open(whatsappUrl, "_blank");

    setFormData({ fullName: "", email: "", phone: "" });
    setIsSubmitting(false);
    onClose();
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

        <form onSubmit={handleSubmit} className="space-y-5">
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

          <Button
            type="submit"
            variant="hero"
            size="xl"
            className="w-full"
            disabled={!isFormValid || isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <span className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                Enviando...
              </span>
            ) : (
              "Testar Nível de Inglês"
            )}
          </Button>
        </form>

        <p className="text-xs text-center text-muted-foreground mt-4">
          Ao enviar, você concorda em receber contato do English Center
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default LeadFormModal;
