import { Button } from "@/components/ui/button";
import { Briefcase, Target, ClipboardList, Users } from "lucide-react";

interface BenefitsSectionProps {
  onOpenForm: () => void;
}

const benefits = [
  {
    icon: Briefcase,
    title: "Melhores Oportunidades",
    description: "O inglês hoje em dia é fundamental não apenas para liberar novas oportunidades no mercado de trabalho, mas também para se comunicar no dia a dia. Com o avanço da tecnologia, se tornou cada vez mais comum o uso do inglês.",
  },
  {
    icon: Target,
    title: "Entender o Seu Nível",
    description: "Compreendendo seu nível de inglês com a Taylor, você poderá escolher um professor adequado para você e que pode te atender 24 horas por dia.",
  },
  {
    icon: ClipboardList,
    title: "Criar um Plano para Aprender Inglês",
    description: "A Taylor vai te ajudar a entender o melhor plano de ação para destravar o inglês de uma vez por todas.",
  },
  {
    icon: Users,
    title: "Escolher um Professor",
    description: "Após o teste com a Taylor, ela vai te direcionar para um dos nossos professores, criados exclusivamente para cada nível de inglês, pensando na dificuldade de cada momento e nas melhores formas de aprender.",
  },
];

const BenefitsSection = ({ onOpenForm }: BenefitsSectionProps) => {
  return (
    <section className="relative py-24 px-4">
      {/* Background decorations */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-accent/10 blur-3xl rounded-full" />
      <div className="absolute left-0 bottom-0 w-80 h-80 bg-primary/10 blur-3xl rounded-full" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-4">
            Como podemos ajudar
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Transforme Seu <span className="text-primary text-glow">Futuro</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra como o English Center pode revolucionar sua jornada no aprendizado do inglês
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => {
            const isLastCard = index === benefits.length - 1;
            return (
              <div 
                key={benefit.title}
                className="group glass-card rounded-2xl p-8 hover:glow-effect transition-all duration-500 hover:-translate-y-2 text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="relative w-16 h-16 mb-6 mx-auto">
                  <div className="absolute inset-0 bg-primary/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-500" />
                  <div className="relative w-full h-full bg-gradient-to-br from-primary/30 to-accent/20 rounded-xl border border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
                
                {isLastCard && (
                  <Button 
                    variant="outline" 
                    size="lg" 
                    onClick={onOpenForm}
                    className="w-full mt-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                  >
                    Testar Nível de Inglês
                  </Button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
