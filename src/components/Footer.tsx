import { MessageSquare } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative py-16 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-background to-primary/5" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="glass-card rounded-3xl p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            
            {/* Logo e descrição */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-elegant">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold gradient-text">GetAudio</span>
              </div>
              <p className="text-muted-foreground text-sm">
                by <span className="font-semibold text-primary">GetBrain</span>
              </p>
            </div>

            {/* Estatísticas */}
            <div className="flex justify-center gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">99%</div>
                <div className="text-xs text-muted-foreground">Precisão</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">2s</div>
                <div className="text-xs text-muted-foreground">Velocidade</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">24/7</div>
                <div className="text-xs text-muted-foreground">Ativo</div>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground">
                © 2024 GetBrain
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Todos os direitos reservados
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};