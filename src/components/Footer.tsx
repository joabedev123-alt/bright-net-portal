import { Instagram, Facebook, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Planos", href: "#planos" },
    { label: "Serviços", href: "#servicos" },
    { label: "Sobre", href: "#sobre" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <img src={logo} alt="Alternativa Internet" className="h-14 w-auto mb-4" />
            <p className="text-muted-foreground max-w-md mb-6">
              Sua melhor alternativa em internet banda larga e serviços de streaming. 
              Conexão de qualidade para sua casa ou empresa.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/alternativainternet"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-muted/30 hover:bg-primary/20 border border-border/50 hover:border-primary rounded-full flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
              <a
                href="https://facebook.com/alternativainternet"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-muted/30 hover:bg-primary/20 border border-border/50 hover:border-primary rounded-full flex items-center justify-center transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-primary" />
              </a>
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-muted/30 hover:bg-primary/20 border border-border/50 hover:border-primary rounded-full flex items-center justify-center transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contato</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>(00) 0000-0000</li>
              <li>contato@alternativa.com</li>
              <li>Sua Cidade - Estado</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} ALTERNATIVA INTERNET & SERVIÇOS. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
