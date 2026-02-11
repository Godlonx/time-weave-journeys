import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, RotateCcw, Sparkles } from "lucide-react";

const questions = [
  {
    question: "Quel type d'expérience recherchez-vous ?",
    options: [
      { label: "Culturelle et artistique", scores: { paris: 2, florence: 3, cretaceous: 0 } },
      { label: "Aventure et nature", scores: { paris: 0, florence: 0, cretaceous: 3 } },
      { label: "Élégance et raffinement", scores: { paris: 3, florence: 2, cretaceous: 0 } },
    ],
  },
  {
    question: "Votre période préférée ?",
    options: [
      { label: "Histoire moderne (XIXe–XXe siècle)", scores: { paris: 3, florence: 0, cretaceous: 0 } },
      { label: "Temps anciens et origines", scores: { paris: 0, florence: 0, cretaceous: 3 } },
      { label: "Renaissance et classicisme", scores: { paris: 0, florence: 3, cretaceous: 0 } },
    ],
  },
  {
    question: "Vous préférez :",
    options: [
      { label: "L'effervescence urbaine", scores: { paris: 3, florence: 2, cretaceous: 0 } },
      { label: "La nature sauvage", scores: { paris: 0, florence: 0, cretaceous: 3 } },
      { label: "L'art et l'architecture", scores: { paris: 1, florence: 3, cretaceous: 0 } },
    ],
  },
  {
    question: "Votre activité idéale :",
    options: [
      { label: "Visiter des monuments", scores: { paris: 3, florence: 2, cretaceous: 0 } },
      { label: "Observer la faune", scores: { paris: 0, florence: 0, cretaceous: 3 } },
      { label: "Explorer des musées", scores: { paris: 2, florence: 3, cretaceous: 0 } },
    ],
  },
];

const results: Record<string, { title: string; description: string }> = {
  paris: {
    title: "Paris 1889 — La Belle Époque",
    description:
      "Votre profil correspond parfaitement à l'élégance et l'effervescence de Paris en 1889 ! La Tour Eiffel, les cabarets, l'Exposition Universelle... Une époque de raffinement et d'innovation vous attend.",
  },
  florence: {
    title: "Florence 1504 — La Renaissance",
    description:
      "L'art, la culture et l'architecture vous passionnent ! Florence à l'apogée de la Renaissance est faite pour vous. Michel-Ange, Léonard de Vinci, les Médicis... Un voyage au cœur du génie humain.",
  },
  cretaceous: {
    title: "Crétacé — -65 millions d'années",
    description:
      "L'aventure et la nature sauvage vous appellent ! Partez à la rencontre des dinosaures dans un monde préhistorique fascinant. Une expérience unique et inoubliable au cœur du Mésozoïque.",
  },
};

const QuizSection = () => {
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState({ paris: 0, florence: 0, cretaceous: 0 });
  const [finished, setFinished] = useState(false);

  const handleAnswer = (optionScores: Record<string, number>) => {
    const newScores = { ...scores };
    Object.entries(optionScores).forEach(([key, val]) => {
      newScores[key as keyof typeof scores] += val;
    });
    setScores(newScores);

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setFinished(true);
    }
  };

  const getResult = () => {
    const winner = Object.entries(scores).sort(([, a], [, b]) => b - a)[0][0];
    return results[winner];
  };

  const reset = () => {
    setStep(0);
    setScores({ paris: 0, florence: 0, cretaceous: 0 });
    setFinished(false);
  };

  return (
    <section id="quiz" className="py-24">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">
            Quiz Personnalisé
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Quelle époque est faite pour vous ?
          </h2>
        </motion.div>

        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-sm">
          <AnimatePresence mode="wait">
            {!finished ? (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
              >
                {/* Progress */}
                <div className="flex gap-2 mb-8">
                  {questions.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1 flex-1 rounded-full transition-colors ${
                        i <= step ? "bg-primary" : "bg-border"
                      }`}
                    />
                  ))}
                </div>

                <p className="text-sm text-muted-foreground mb-2">
                  Question {step + 1}/{questions.length}
                </p>
                <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-8">
                  {questions[step].question}
                </h3>

                <div className="space-y-3">
                  {questions[step].options.map((opt) => (
                    <button
                      key={opt.label}
                      onClick={() => handleAnswer(opt.scores)}
                      className="w-full text-left p-4 rounded-xl border border-border bg-background hover:border-primary hover:bg-primary/5 transition-all group flex items-center justify-between"
                    >
                      <span className="font-body text-foreground">{opt.label}</span>
                      <ArrowRight
                        size={16}
                        className="text-muted-foreground group-hover:text-primary transition-colors"
                      />
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <Sparkles className="mx-auto text-primary mb-4" size={32} />
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {getResult().title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed mb-8">
                  {getResult().description}
                </p>
                <Button onClick={reset} variant="outline" className="rounded-full px-8 gap-2">
                  <RotateCcw size={16} /> Recommencer le quiz
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default QuizSection;
