import { MessageSquare } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          {/* Logo */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">TranscribeAI</span>
          </div>

          {/* Description */}
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Revolucionando a comunicação com IA avançada para transcrição de áudios do WhatsApp
          </p>

          {/* Copyright */}
          <div className="pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground">
              © 2024 TranscribeAI. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};