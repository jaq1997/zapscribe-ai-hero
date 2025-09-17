import { Button } from "@/components/ui/button";
import { MessageSquare, Mic, Zap } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-30" />
      
      {/* Semi-circular arc with points */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Main semi-circular arc */}
        <div className="relative">
          <div className="w-[600px] h-[300px] md:w-[800px] md:h-[400px] border-4 border-whatsapp-light/30 rounded-t-full bg-gradient-to-t from-transparent via-whatsapp-light/5 to-whatsapp-light/10"></div>
          
          {/* Points along the arc */}
          {[...Array(12)].map((_, i) => {
            const angle = (i * 15) - 90; // From -90 to 75 degrees for semi-circle
            const radius = 300; // Base radius
            const mdRadius = 400; // Larger radius for md screens
            return (
              <div
                key={i}
                className="absolute w-3 h-3 bg-whatsapp-light rounded-full animate-pulse hidden md:block"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `translate(-50%, -50%) translate(${Math.cos(angle * Math.PI / 180) * mdRadius}px, ${Math.sin(angle * Math.PI / 180) * mdRadius}px)`,
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: '3s'
                }}
              />
            );
          })}
          
          {/* Points for mobile */}
          {[...Array(8)].map((_, i) => {
            const angle = (i * 22.5) - 90; // From -90 to 67.5 degrees for semi-circle
            const radius = 300;
            return (
              <div
                key={`mobile-${i}`}
                className="absolute w-2 h-2 bg-whatsapp-light rounded-full animate-pulse md:hidden"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `translate(-50%, -50%) translate(${Math.cos(angle * Math.PI / 180) * radius}px, ${Math.sin(angle * Math.PI / 180) * radius}px)`,
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: '3s'
                }}
              />
            );
          })}
        </div>
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Transforme seus
          <br />
          <span className="gradient-text">áudios do WhatsApp</span>
          <br />
          em texto
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          IA avançada que transcreve automaticamente suas mensagens de voz, 
          economizando tempo e facilitando sua comunicação.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            size="lg" 
            className="hero-glow bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full font-semibold transition-all duration-300 hover:scale-105"
            onClick={() => window.open('#checkout', '_self')}
          >
            <MessageSquare className="w-5 h-5 mr-2" />
            Comprar Agora
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="glass-card border-primary/30 hover:bg-primary/10 px-8 py-6 text-lg rounded-full font-semibold transition-all duration-300 hover:scale-105"
            onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Gostaria de tirar dúvidas sobre o GetAudio', '_blank')}
          >
            <MessageSquare className="w-5 h-5 mr-2" />
            Tire suas Dúvidas
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">99%</div>
            <div className="text-muted-foreground">Precisão</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">2s</div>
            <div className="text-muted-foreground">Tempo médio</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
            <div className="text-muted-foreground">Disponível</div>
          </div>
        </div>
      </div>
    </section>
  );
};