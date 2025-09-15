import { MessageSquare, Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative py-16 px-4 bg-gradient-to-b from-background to-primary/5 border-t border-primary/10">
      <div className="container mx-auto px-4">
        <div className="glass-card rounded-3xl p-12">
          <div className="grid md:grid-cols-4 gap-8">
            
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center shadow-elegant">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold gradient-text">GetAudio</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Transforme seus áudios do WhatsApp em texto com inteligência artificial
              </p>
            </div>

            {/* Soluções */}
            <div>
              <h3 className="font-semibold mb-4 gradient-text">Soluções GetBrain</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    GetAudio
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Get Assistant
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Get Files
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Get SDR
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Get Group
                  </a>
                </li>
              </ul>
            </div>

            {/* Empresa */}
            <div>
              <h3 className="font-semibold mb-4 gradient-text">Empresa</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Políticas de Privacidade
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Termos de Uso
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Sobre a GetBrain
                  </a>
                </li>
              </ul>
            </div>

            {/* Contato */}
            <div>
              <h3 className="font-semibold mb-4 gradient-text">Contato</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <a
                    href="https://wa.me/5521990168793"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    +55 (21) 99016-8793 <span className="ml-1">(WhatsApp)</span>
                  </a>
                </li>
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  contato@getbrain.com.br
                </li>
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Rio de Janeiro, RJ
                </li>
              </ul>
            </div>

          </div>

          {/* Footer Bottom */}
          <p className="mt-12 text-center text-muted-foreground text-sm">
            © 2024 GetAudio é um produto desenvolvido pela GetBrain. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};