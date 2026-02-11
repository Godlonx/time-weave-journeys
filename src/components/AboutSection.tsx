import { motion } from "framer-motion";
import { Shield, Compass, Heart } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Sécurité absolue",
    description: "Nos voyages temporels respectent les protocoles de sécurité les plus stricts. Retour garanti à votre époque d'origine.",
  },
  {
    icon: Compass,
    title: "Guides experts",
    description: "Chaque destination est accompagnée d'un guide historien expert, passionné par l'époque visitée.",
  },
  {
    icon: Heart,
    title: "Expériences uniques",
    description: "Des moments inoubliables, soigneusement conçus pour une immersion totale dans chaque époque.",
  },
];

const AboutSection = () => (
  <section id="about" className="py-24 bg-secondary/30">
    <div className="container mx-auto px-4 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">
          À Propos
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
          Pourquoi nous choisir ?
        </h2>
        <p className="font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Depuis 2089, TimeTravel Agency est la référence du voyage temporel de luxe.
          Notre mission : rendre l'histoire accessible, vivante et inoubliable.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="text-center p-6"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <v.icon className="text-primary" size={24} />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">{v.title}</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">{v.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
