import { Gauge, ShieldCheck, Headset, MapPin, BadgeCheck } from "lucide-react";

const differentials = [
  {
    icon: Gauge,
    title: "Alta Velocidade",
    description: "Conexão de fibra óptica com velocidades de até 500 Mega para navegação ultrarrápida.",
  },
  {
    icon: ShieldCheck,
    title: "Estabilidade",
    description: "Infraestrutura robusta que garante conexão estável 24 horas por dia, 7 dias por semana.",
  },
  {
    icon: Headset,
    title: "Suporte Rápido",
    description: "Equipe técnica especializada pronta para atender chamados com agilidade e eficiência.",
  },
  {
    icon: MapPin,
    title: "Atendimento Regional",
    description: "Conhecemos sua região e oferecemos um atendimento próximo e personalizado.",
  },
  {
    icon: BadgeCheck,
    title: "Custo-Benefício",
    description: "Os melhores planos da região com preços justos e sem surpresas na fatura.",
  },
];

const DifferentialsSection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-navy-dark relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider">
            Por Que Nos Escolher?
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 sm:mt-4 mb-4 sm:mb-6 px-2">
            Nossos <span className="text-gradient-gold">Diferenciais</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg px-4">
            Descubra o que faz a Alternativa Internet ser a melhor escolha para sua conexão.
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
          {differentials.map((item, index) => (
            <div
              key={item.title}
              className={`group flex items-start gap-3 sm:gap-4 p-5 sm:p-6 rounded-xl bg-muted/20 border border-border/50 hover:border-primary/50 transition-all duration-300 ${index === 4 ? "md:col-span-2 lg:col-span-1 lg:mx-0 md:mx-auto md:max-w-md lg:max-w-none" : ""
                }`}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold mb-1.5 sm:mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
