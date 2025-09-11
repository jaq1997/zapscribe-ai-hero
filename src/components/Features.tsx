import { Bot, Clock, Shield, Smartphone } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "IA Avançada",
    description: "Tecnologia de ponta que entende diferentes sotaques e contextos para transcrições precisas."
  },
  {
    icon: Clock,
    title: "Rapidez Incomparável",
    description: "Transcrição em tempo real. Receba o texto em segundos após enviar o áudio."
  },
  {
    icon: Shield,
    title: "100% Seguro",
    description: "Seus áudios são processados com máxima segurança e privacidade. Dados criptografados."
  },
  {
    icon: Smartphone,
    title: "Fácil de Usar",
    description: "Integração direta com WhatsApp. Sem apps extras, sem complicações."
  }
];

export const Features = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Por que escolher nosso
            <br />
            <span className="gradient-text">agente de IA?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Desenvolvido com as mais avançadas tecnologias de IA para oferecer a melhor experiência em transcrição.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass-card rounded-2xl p-8 hover:bg-primary/5 transition-all duration-300 hover:scale-105 hover:shadow-card group"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};