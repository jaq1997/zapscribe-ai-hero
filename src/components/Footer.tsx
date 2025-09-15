import { MessageSquare, Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 py-16 border-t border-primary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
            
            {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center shadow-elegant">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">GetAudio</span>
            </div>
            <p className="text-slate-300 mb-4">
                Transforme seus áudios do WhatsApp em texto com inteligência artificial
              </p>
            </div>

            {/* Soluções */}
          <div>
            <h3 className="text-white font-semibold mb-4">Soluções GetBrain</h3>
            <ul className="space-y-2 text-slate-300">
                <li>
                <a href="#" className="hover:text-white transition-colors">
                  GetAudio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Get Assistant
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Get Files
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Get SDR
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Get Group
                </a>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="text-white font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-slate-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                    Políticas de Privacidade
                  </a>
                </li>
                <li>
                <a href="#" className="hover:text-white transition-colors">
                  Termos de Uso
                  </a>
                </li>
                <li>
                <a href="#" className="hover:text-white transition-colors">
                  Sobre a GetBrain
                  </a>
                </li>
              </ul>
            </div>

            {/* Contato */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-slate-300">
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <a
                    href="https://wa.me/5521990168793"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
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
        <p className="mt-12 text-center text-gray-400 text-sm">
          © 2024 GetAudio é um produto desenvolvido pela GetBrain. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};