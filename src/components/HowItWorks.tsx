import { ArrowRight, MessageSquare, Send, Type } from "lucide-react";

const steps = [
  {
    icon: Send,
    number: "01",
    title: "Envie o Áudio",
    description: "Encaminhe qualquer áudio do WhatsApp para nosso agente de IA"
  },
  {
    icon: MessageSquare,
    number: "02", 
    title: "IA Processa",
    description: "Nossa tecnologia avançada analisa e transcreve o áudio em segundos"
  },
  {
    icon: Type,
    number: "03",
    title: "Receba o Texto",
    description: "Obtenha a transcrição completa e precisa diretamente no WhatsApp"
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-24 px-4 bg-gradient-hero">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Como <span className="gradient-text">funciona?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Processo simples e rápido em apenas 3 passos
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index}>
              {/* Step card */}
              <div className="glass-card rounded-2xl p-8 text-center hover:bg-primary/5 transition-all duration-300 hover:scale-105">
                {/* Step number */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary font-bold text-xl mb-6">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 mx-auto mb-6 text-primary">
                  <step.icon className="w-full h-full" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};