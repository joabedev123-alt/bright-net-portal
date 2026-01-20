import { Wifi, Tv, Headphones, Wrench } from "lucide-react";

const services = [
  {
    icon: Wifi,
    title: "Internet Banda Larga",
    description: "Conexão de fibra óptica de alta velocidade para sua residência ou empresa, com estabilidade e baixa latência.",
  },
  {
    icon: Tv,
    title: "Serviços de Streaming",
    description: "Acesso aos melhores conteúdos de streaming com qualidade HD e 4K, sem travamentos ou interrupções.",
  },
  {
    icon: Headphones,
    title: "Atendimento Local",
    description: "Equipe regional pronta para atender você com agilidade e conhecimento da sua região.",
  },
  {
    icon: Wrench,
    title: "Suporte Técnico",
    description: "Profissionais especializados disponíveis para resolver qualquer problema técnico rapidamente.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 bg-navy-dark">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Soluções Completas em <span className="text-gradient-gold">Conectividade</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Oferecemos uma variedade de serviços para manter você sempre conectado com o melhor da tecnologia.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-gradient-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 shadow-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
