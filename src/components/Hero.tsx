import { Button } from "@/components/ui/button";
import { MessageSquare, Mic, Zap } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-30" />
      
      {/* Audio visualization elements */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Central arc */}
        <div className="relative">
          <div className="w-96 h-96 md:w-[500px] md:h-[500px] border-8 border-transparent bg-gradient-to-r from-primary via-whatsapp-light to-primary rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute inset-4 border-4 border-transparent bg-gradient-to-r from-primary/50 to-whatsapp-light/50 rounded-full opacity-30"></div>
        </div>
        
        {/* Audio frequency waves */}
        <div className="absolute inset-0 flex items-center justify-center">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-primary/20 rounded-full animate-pulse"
              style={{
                width: '2px',
                height: `${Math.random() * 60 + 20}px`,
                transform: `rotate(${i * 9}deg) translateY(-${200 + Math.random() * 100}px)`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1.5 + Math.random()}s`
              }}
            />
          ))}
        </div>
        
        {/* Outer frequency ring */}
        <div className="absolute inset-0 flex items-center justify-center">
          {[...Array(60)].map((_, i) => (
            <div
              key={`outer-${i}`}
              className="absolute bg-whatsapp-light/15 rounded-full animate-pulse"
              style={{
                width: '1px',
                height: `${Math.random() * 40 + 10}px`,
                transform: `rotate(${i * 6}deg) translateY(-${300 + Math.random() * 80}px)`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random()}s`
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass-card rounded-full px-6 py-3 mb-8 text-sm">
          <Zap className="w-4 h-4 text-primary" />
          <span>Powered by AI</span>
        </div>

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