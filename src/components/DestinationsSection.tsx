import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Star, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import parisImg from "@/assets/paris-1889.jpg";
import cretaceousImg from "@/assets/cretaceous.jpg";
import florenceImg from "@/assets/florence-1504.jpg";

const destinations = [
  {
    id: "paris",
    title: "Paris 1889",
    subtitle: "La Belle Époque",
    image: parisImg,
    era: "XIXe siècle",
    duration: "3 jours",
    price: "12 500 €",
    rating: 4.9,
    description:
      "Revivez l'effervescence de l'Exposition Universelle de 1889 et découvrez la Tour Eiffel fraîchement inaugurée. Flânez sur les Champs-Élysées, assistez aux spectacles du Moulin Rouge et goûtez à la cuisine parisienne de l'époque.",
    highlights: [
      "Inauguration de la Tour Eiffel",
      "Exposition Universelle",
      "Moulin Rouge & cabarets",
      "Gastronomie Belle Époque",
    ],
  },
  {
    id: "cretaceous",
    title: "Crétacé",
    subtitle: "-65 millions d'années",
    image: cretaceousImg,
    era: "Mésozoïque",
    duration: "2 jours",
    price: "18 900 €",
    rating: 4.8,
    description:
      "Une aventure au cœur de la préhistoire, parmi les derniers dinosaures de la Terre. Observez des T-Rex, des Tricératops et des Ptéranodons dans leur habitat naturel, au milieu de jungles luxuriantes et de volcans actifs.",
    highlights: [
      "Observation des dinosaures",
      "Jungles préhistoriques",
      "Volcans en activité",
      "Faune et flore du Crétacé",
    ],
  },
  {
    id: "florence",
    title: "Florence 1504",
    subtitle: "La Renaissance Italienne",
    image: florenceImg,
    era: "XVIe siècle",
    duration: "4 jours",
    price: "14 200 €",
    rating: 5.0,
    description:
      "Plongez au cœur de la Renaissance florentine. Rencontrez Michel-Ange à l'œuvre sur le David, visitez les ateliers de Léonard de Vinci et admirez les chefs-d'œuvre des Médicis dans une Florence à son apogée artistique.",
    highlights: [
      "Michel-Ange & le David",
      "Ateliers de Léonard de Vinci",
      "Palais des Médicis",
      "Architecture Renaissance",
    ],
  },
];

const DestinationsSection = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const selectedDest = destinations.find((d) => d.id === selected);

  return (
    <section id="destinations" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">
            Nos Destinations
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Choisissez votre époque
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group cursor-pointer"
              onClick={() => setSelected(dest.id)}
            >
              <div className="relative rounded-xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                  <p className="text-xs tracking-[0.2em] uppercase opacity-80 mb-1">
                    {dest.subtitle}
                  </p>
                  <h3 className="font-display text-2xl font-bold mb-2">{dest.title}</h3>
                  <div className="flex items-center gap-4 text-sm opacity-80">
                    <span className="flex items-center gap-1">
                      <Clock size={14} /> {dest.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star size={14} /> {dest.rating}
                    </span>
                  </div>
                  <p className="mt-3 font-display text-xl font-semibold">{dest.price}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail modal */}
      {selectedDest && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/40 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedDest.image}
                alt={selectedDest.title}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 bg-background/80 rounded-full p-2 hover:bg-background transition-colors"
              >
                <X size={18} />
              </button>
            </div>
            <div className="p-8">
              <p className="text-primary text-sm tracking-[0.2em] uppercase mb-1">
                {selectedDest.subtitle}
              </p>
              <h3 className="font-display text-3xl font-bold text-foreground mb-2">
                {selectedDest.title}
              </h3>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <span className="flex items-center gap-1"><MapPin size={14} /> {selectedDest.era}</span>
                <span className="flex items-center gap-1"><Clock size={14} /> {selectedDest.duration}</span>
                <span className="flex items-center gap-1"><Star size={14} /> {selectedDest.rating}</span>
              </div>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                {selectedDest.description}
              </p>
              <h4 className="font-display text-lg font-semibold text-foreground mb-3">
                Points forts
              </h4>
              <ul className="space-y-2 mb-8">
                {selectedDest.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {h}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between">
                <p className="font-display text-2xl font-bold text-primary">
                  {selectedDest.price}
                </p>
                <Button className="rounded-full px-8">Réserver</Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default DestinationsSection;
