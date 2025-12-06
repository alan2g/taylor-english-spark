import taylor from "@/assets/taylor.jpg";
import { Button } from "@/components/ui/button";

interface TaylorSectionProps {
  onOpenForm: () => void;
}

const TaylorSection = ({ onOpenForm }: TaylorSectionProps) => {
  return (
    <section className="relative py-16 px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 bg-primary/5 blur-3xl rounded-full" />
      
      <div className="container mx-auto max-w-3xl">
        <div className="glass-card rounded-3xl p-6 md:p-10 glow-effect">
          <div className="flex flex-col items-center text-center space-y-6">
            {/* Image */}
            <div className="relative group w-full max-w-md">
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
            </div>
            
            {/* Content */}
            <div className="space-y-4 max-w-lg mx-auto">
              <div className="inline-block px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-medium">
                Conheça sua assistente
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
                Conheça a <span className="text-glow text-primary">Taylor</span>
              </h2>
              
              <p className="text-base text-muted-foreground leading-relaxed">
                A Taylor é sua assistente virtual inteligente que vai te ajudar a descobrir 
                seu nível atual de inglês e criar um plano personalizado para você.
              </p>
              
              <ul className="space-y-2 text-muted-foreground text-sm inline-flex flex-col items-center">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  Análise personalizada do seu nível
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: "0.2s" }} />
                  Disponível 24 horas por dia
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: "0.4s" }} />
                  Recomendações sob medida para você
                </li>
              </ul>
              
              <Button 
                variant="hero" 
                size="lg" 
                onClick={onOpenForm}
                className="mt-2"
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
