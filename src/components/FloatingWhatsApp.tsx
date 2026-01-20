import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingWhatsApp = () => {
  const whatsappLink = "https://wa.me/5500000000000?text=Olá! Vim pelo site e gostaria de saber mais sobre seus serviços.";

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 animate-float">
      <Button
        variant="whatsapp"
        size="lg"
        className="rounded-full w-14 h-14 sm:w-16 sm:h-16 p-0 shadow-2xl hover:scale-110 transition-transform duration-300"
        asChild
      >
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar no WhatsApp"
        >
          <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8" />
        </a>
      </Button>
    </div>
  );
};

export default FloatingWhatsApp;
