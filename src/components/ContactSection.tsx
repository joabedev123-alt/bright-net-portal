import { MessageCircle, Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const whatsappLink = "https://wa.me/5500000000000?text=Olá! Gostaria de saber mais sobre os serviços da Alternativa Internet.";

  return (
    <section id="contato" className="py-24 bg-navy-dark relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Fale Conosco
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Entre em <span className="text-gradient-gold">Contato</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Estamos prontos para atender você. Escolha a forma de contato que preferir.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* WhatsApp CTA */}
          <div className="bg-gradient-card border border-border rounded-2xl p-8 lg:p-12 text-center mb-12 shadow-card">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[hsl(142,70%,45%)]/20 rounded-full mb-6">
              <MessageCircle className="w-10 h-10 text-[hsl(142,70%,45%)]" />
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Atendimento via WhatsApp
            </h3>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Fale diretamente com nossa equipe de atendimento. Resposta rápida e personalizada para suas dúvidas.
            </p>
            <Button variant="whatsapp" size="lg" className="text-lg px-10" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-6 h-6" />
                Iniciar Conversa
              </a>
            </Button>
          </div>

          {/* Contact Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-muted/20 border border-border/50 rounded-xl p-6 text-center">
              <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
              <h4 className="font-bold mb-2">Telefone</h4>
              <p className="text-muted-foreground">(00) 0000-0000</p>
            </div>
            <div className="bg-muted/20 border border-border/50 rounded-xl p-6 text-center">
              <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
              <h4 className="font-bold mb-2">E-mail</h4>
              <p className="text-muted-foreground">contato@alternativa.com</p>
            </div>
            <div className="bg-muted/20 border border-border/50 rounded-xl p-6 text-center">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
              <h4 className="font-bold mb-2">Localização</h4>
              <p className="text-muted-foreground">Sua Cidade - Estado</p>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex justify-center gap-4 mt-12">
            <a
              href="https://instagram.com/alternativainternet"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-muted/30 hover:bg-primary/20 border border-border/50 hover:border-primary/50 rounded-full px-6 py-3 transition-all duration-300"
            >
              <Instagram className="w-5 h-5 text-primary" />
              <span className="font-medium">@alternativainternet</span>
            </a>
            <a
              href="https://facebook.com/alternativainternet"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-muted/30 hover:bg-primary/20 border border-border/50 hover:border-primary/50 rounded-full px-6 py-3 transition-all duration-300"
            >
              <Facebook className="w-5 h-5 text-primary" />
              <span className="font-medium">Alternativa Internet</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
