import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle, Phone } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para <span className="gradient-text">começar?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Entre em contato conosco pelo WhatsApp ou adquira o GetAudio agora mesmo
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button 
            size="lg" 
            className="hero-glow bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full font-semibold transition-all duration-300 hover:scale-105"
            onClick={() => window.open('#checkout', '_self')}
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Comprar GetAudio
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="glass-card border-primary/30 hover:bg-primary/10 px-8 py-6 text-lg rounded-full font-semibold transition-all duration-300 hover:scale-105"
            onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Gostaria de tirar dúvidas sobre o GetAudio', '_blank')}
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Fale Conosco
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact info */}
          <div className="space-y-8">
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Fale Conosco</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">WhatsApp</p>
                    <p className="text-muted-foreground">(11) 9 9999-9999</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">contato@getbrain.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Telefone</p>
                    <p className="text-muted-foreground">(11) 3333-4444</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8 text-center">
              <h4 className="text-xl font-semibold mb-4">Disponibilidade</h4>
              <p className="text-muted-foreground mb-6">
                Nossa IA funciona 24/7, mas nosso suporte está disponível:
              </p>
              <p className="font-medium">
                Segunda à Sexta: 8h às 18h
                <br />
                Sábado: 9h às 15h
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};