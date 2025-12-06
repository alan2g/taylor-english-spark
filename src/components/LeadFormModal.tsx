import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";
import { toast } from "sonner";

const leadSchema = z.object({
  fullName: z.string().trim().min(2, "Nome deve ter pelo menos 2 caracteres").max(100, "Nome muito longo"),
  email: z.string().trim().email("E-mail inválido").max(255, "E-mail muito longo"),
  phone: z.string().trim().regex(/^[\d\s()\-+]+$/, "Telefone inválido").min(10, "Telefone muito curto").max(20, "Telefone muito longo"),
});

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
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const getWhatsAppUrl = () => {
    const message = encodeURIComponent(`Olá! Meu nome é ${formData.fullName.trim()}. Gostaria de testar meu nível de inglês.\n\nE-mail: ${formData.email.trim()}\nTelefone: ${formData.phone.trim()}`);
    return `https://wa.me/5519981854103?text=${message}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async () => {
    if (isSubmitting) return;
    
    const result = leadSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }
    
    setIsSubmitting(true);
    setErrors({});
    
    // Submit via Edge Function with rate limiting
    const { data, error } = await supabase.functions.invoke('submit-lead', {
      body: {
        fullName: result.data.fullName,
        email: result.data.email,
        phone: result.data.phone,
      },
    });

    if (error || (data && data.error)) {
      const errorMessage = data?.error || "Erro ao enviar. Tente novamente.";
      toast.error(errorMessage);
      setIsSubmitting(false);
      return;
    }

    // Redirect to WhatsApp
    const url = getWhatsAppUrl();
    if (window.top) {
      window.top.location.href = url;
    } else {
      window.location.href = url;
    }
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
              className={`bg-input border-border focus:border-primary focus:ring-primary/20 ${errors.fullName ? "border-destructive" : ""}`}
            />
            {errors.fullName && <p className="text-xs text-destructive">{errors.fullName}</p>}
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
              className={`bg-input border-border focus:border-primary focus:ring-primary/20 ${errors.email ? "border-destructive" : ""}`}
            />
            {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
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
              className={`bg-input border-border focus:border-primary focus:ring-primary/20 ${errors.phone ? "border-destructive" : ""}`}
            />
            {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
          </div>

          <Button
            type="button"
            variant="hero"
            size="xl"
            className="w-full"
            disabled={isSubmitting}
            onClick={handleSubmit}
          >
            {isSubmitting ? "Enviando..." : "Testar Nível de Inglês"}
          </Button>
        </div>

        <p className="text-xs text-center text-muted-foreground mt-4">
          Ao enviar, você concorda em receber contato do English Center
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default LeadFormModal;
