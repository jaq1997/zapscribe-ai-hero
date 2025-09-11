import { Button } from "@/components/ui/button";
import { MessageSquare, Mic, Zap } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-30" />
      
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
          >
            <MessageSquare className="w-5 h-5 mr-2" />
            Começar Agora
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="glass-card border-primary/30 hover:bg-primary/10 px-8 py-6 text-lg rounded-full font-semibold transition-all duration-300 hover:scale-105"
          >
            <Mic className="w-5 h-5 mr-2" />
            Ver Demo
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