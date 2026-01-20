import { Award, Users, Clock, Target } from "lucide-react";

const stats = [
  { icon: Users, value: "5000+", label: "Clientes Satisfeitos" },
  { icon: Clock, value: "24/7", label: "Suporte Disponível" },
  { icon: Award, value: "10+", label: "Anos de Experiência" },
  { icon: Target, value: "99.9%", label: "Uptime Garantido" },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Sobre Nós
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Conheça a <span className="text-gradient-gold">Alternativa Internet</span>
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                A <strong className="text-foreground">ALTERNATIVA INTERNET & SERVIÇOS</strong> nasceu com 
                a missão de levar conexão de qualidade para residências e empresas da nossa região.
              </p>
              <p>
                Com uma infraestrutura moderna de fibra óptica e uma equipe técnica altamente 
                qualificada, oferecemos soluções de internet que combinam velocidade, estabilidade 
                e um atendimento verdadeiramente humanizado.
              </p>
              <p>
                Nosso compromisso é proporcionar a melhor experiência de conectividade, com 
                transparência nos serviços e preços justos. Porque acreditamos que internet 
                de qualidade deve ser acessível a todos.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-gradient-card border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-300 shadow-card"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-gradient-gold mb-2">
                  {stat.value}
                </div>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
