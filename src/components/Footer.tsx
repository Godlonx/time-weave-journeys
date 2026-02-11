import { Clock, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-display text-xl font-bold mb-4">
              TimeTravel <span className="text-primary">Agency</span>
            </h3>
            <p className="font-body text-sm opacity-70 leading-relaxed">
              Voyagez à travers le temps avec élégance. Des expériences immersives et uniques
              dans les époques les plus fascinantes de l'histoire.
            </p>
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm opacity-70">
              <li className="flex items-center gap-2">
                <Mail size={14} /> contact@timetravel-agency.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={14} /> 42 Rue du Temps, Paris
              </li>
              <li className="flex items-center gap-2">
                <Clock size={14} /> Lun–Ven : 9h–18h (tous les siècles)
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Liens</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><a href="#destinations" className="hover:text-primary transition-colors">Destinations</a></li>
              <li><a href="#quiz" className="hover:text-primary transition-colors">Quiz</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">À propos</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-xs opacity-50 font-body">
            © 2025 TimeTravel Agency — Projet pédagogique M1/M2 Digital & IA
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
