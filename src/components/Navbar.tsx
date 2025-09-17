import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

export const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-primary/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <MessageSquare className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold gradient-text">GetAudio</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('features')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Recursos
          </button>
          <button 
            onClick={() => scrollToSection('how-it-works')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Como Funciona
          </button>
          <button 
            onClick={() => scrollToSection('footer')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Contato
          </button>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button 
            size="sm"
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-semibold transition-all duration-300"
            onClick={() => window.open('#checkout', '_self')}
          >
            Comprar Agora
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            className="glass-card border-primary/30 hover:bg-primary/10 rounded-full font-semibold transition-all duration-300"
            onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Gostaria de tirar dúvidas sobre o GetAudio', '_blank')}
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            Tire suas Dúvidas
          </Button>
        </div>
      </div>
    </nav>
  );
};