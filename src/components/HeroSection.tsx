import logo from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
      
      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Logo with animation */}
        <div className="relative animate-float">
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-110" />
          <img 
            src={logo} 
            alt="English Center Logo" 
            className="relative w-full max-w-3xl mx-auto drop-shadow-2xl"
            style={{
              filter: "drop-shadow(0 0 30px hsl(182 76% 63% / 0.4))"
            }}
          />
        </div>
        
        {/* Tagline */}
        <p className="mt-8 text-xl md:text-2xl text-muted-foreground font-light tracking-wide opacity-0 animate-fade-in-up" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
          Desbloqueie seu potencial no inglês com tecnologia de ponta
        </p>
        
        {/* Animated line */}
        <div className="mt-10 flex justify-center">
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full animate-shimmer" 
               style={{ backgroundSize: "200% 100%" }} />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
