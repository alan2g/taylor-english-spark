import taylor from "@/assets/taylor.jpg";
import { Button } from "@/components/ui/button";

interface TaylorSectionProps {
  onOpenForm: () => void;
}

const TaylorSection = ({ onOpenForm }: TaylorSectionProps) => {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 bg-primary/5 blur-3xl rounded-full" />
      
      <div className="container mx-auto max-w-6xl">
        <div className="glass-card rounded-3xl p-8 md:p-12 glow-effect">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
              <div className="relative overflow-hidden rounded-2xl border-2 border-primary/30 group-hover:border-primary/50 transition-all duration-500">
                <img 
                  src={taylor} 
                  alt="Taylor - Assistente Virtual English Center" 
                  className="w-full aspect-square object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                
                {/* Name badge */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="glass-card rounded-xl px-4 py-3 text-center">
                    <p className="text-primary font-bold text-lg">Taylor</p>
                    <p className="text-muted-foreground text-sm">Assistente Virtual IA</p>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 border border-primary/30 rounded-full animate-pulse-glow" />
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary/20 rounded-full blur-xl animate-float" />
            </div>
            
            {/* Content */}
            <div className="text-center md:text-left space-y-6">
              <div className="inline-block px-4 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium">
                Conheça sua assistente
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Conheça a <span className="text-glow text-primary">Taylor</span>
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                A Taylor é sua assistente virtual inteligente que vai te ajudar a descobrir 
                seu nível atual de inglês e criar um plano personalizado para você evoluir 
                de forma rápida e eficiente.
              </p>
              
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  Análise personalizada do seu nível
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: "0.2s" }} />
                  Disponível 24 horas por dia
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: "0.4s" }} />
                  Recomendações sob medida para você
                </li>
              </ul>
              
              <Button 
                variant="hero" 
                size="xl" 
                onClick={onOpenForm}
                className="w-full md:w-auto mt-4"
              >
                Testar Nível de Inglês
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaylorSection;
