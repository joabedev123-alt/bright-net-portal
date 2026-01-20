import { Check, Zap, Crown, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Essencial",
    icon: Zap,
    speed: "100 Mega",
    price: "Consulte",
    popular: false,
    features: [
      "Download até 100 Mbps",
      "Upload até 50 Mbps",
      "Wi-Fi incluso",
      "Suporte técnico",
      "Instalação gratuita",
    ],
  },
  {
    name: "Avançado",
    icon: Crown,
    speed: "300 Mega",
    price: "Consulte",
    popular: true,
    features: [
      "Download até 300 Mbps",
      "Upload até 150 Mbps",
      "Wi-Fi 5 incluso",
      "Suporte prioritário",
      "Instalação gratuita",
      "Streaming incluso",
    ],
  },
  {
    name: "Ultra",
    icon: Rocket,
    speed: "500 Mega",
    price: "Consulte",
    popular: false,
    features: [
      "Download até 500 Mbps",
      "Upload até 250 Mbps",
      "Wi-Fi 6 incluso",
      "Suporte VIP 24h",
      "Instalação gratuita",
      "Streaming Premium",
      "IP Fixo disponível",
    ],
  },
];

const PlansSection = () => {
  const whatsappLink = "https://wa.me/5500000000000?text=Olá! Gostaria de saber mais sobre o plano ";

  return (
    <section id="planos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Nossos Planos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Escolha o Plano <span className="text-gradient-gold">Ideal</span> para Você
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Planos flexíveis que se adaptam às suas necessidades, com a melhor relação custo-benefício da região.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-gradient-card border rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? "border-primary shadow-gold scale-105 lg:scale-110"
                  : "border-border hover:border-primary/50 shadow-card"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-gold text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                    Mais Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <plan.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-gradient-gold mb-1">{plan.speed}</div>
                <p className="text-muted-foreground text-sm">{plan.price}</p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground/90">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={plan.popular ? "hero" : "outline"}
                className="w-full"
                size="lg"
                asChild
              >
                <a
                  href={`${whatsappLink}${plan.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contratar Agora
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
