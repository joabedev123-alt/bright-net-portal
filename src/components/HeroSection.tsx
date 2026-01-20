import { Wifi, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const whatsappLink = "https://wa.me/5500000000000?text=Olá! Gostaria de contratar um plano de internet.";

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-muted/50 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-6">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Internet de Alta Velocidade</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Conecte-se ao <span className="text-gradient-gold">Futuro</span> com a{" "}
            <span className="text-gradient-gold">Alternativa</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Internet banda larga de alta velocidade, estável e confiável para sua casa ou empresa. 
            Streaming, jogos e trabalho sem interrupções.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" asChild>
              <a href="#planos">
                Conhecer Planos
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Solicitar Atendimento
              </a>
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { icon: Wifi, label: "Conexão Estável" },
              { icon: Zap, label: "Alta Velocidade" },
              { icon: Shield, label: "Suporte 24h" },
            ].map((feature) => (
              <div
                key={feature.label}
                className="flex items-center justify-center gap-3 bg-muted/30 backdrop-blur-sm rounded-lg p-4 border border-border/50"
              >
                <feature.icon className="w-5 h-5 text-primary" />
                <span className="font-medium">{feature.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
