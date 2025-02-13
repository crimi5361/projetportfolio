import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Github, User } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

// Composant pour l'effet d'écriture
const TypewriterEffect = ({ text }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 260);

    return () => clearInterval(timer);
  }, [text]);

  return (
    <span className="inline-block">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

// Effet de fond animé
const BackgroundEffect = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 blur-3xl animate-pulse" />
    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/10 via-transparent to-purple-600/10 blur-2xl animate-float" />
  </div>
);

// Bouton d'icône avec animation
const IconButton = ({ Icon }) => (
  <div className="relative group hover:scale-110 transition-transform duration-300">
    <div className="absolute -inset-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-75 transition duration-300" />
    <div className="relative p-2 sm:p-3 bg-black/50 backdrop-blur-sm rounded-full border border-white/10">
      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
    </div>
  </div>
);

// Composant principal pour l'écran de bienvenue
const WelcomeScreen = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: false,
    });

    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        onLoadingComplete?.();
      }, 1000);
    }, 4000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  const containerVariants = {
    exit: {
      opacity: 0,
      scale: 1.1,
      filter: "blur(10px)",
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const childVariants = {
    exit: {
      y: -20,
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-[#030014] flex flex-col items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit="exit"
          variants={containerVariants}
        >
          <BackgroundEffect />

          <div className="relative w-full max-w-4xl mx-auto px-6 text-center">
            {/* Icônes */}
            <motion.div
              className="flex justify-center gap-4 sm:gap-6 md:gap-8 mb-8"
              variants={childVariants}
            >
              {[Code2, User, Github].map((Icon, index) => (
                <div key={index} data-aos="fade-down" data-aos-delay={index * 200}>
                  <IconButton Icon={Icon} />
                </div>
              ))}
            </motion.div>

            {/* Texte de bienvenue */}
            <motion.div className="space-y-6">
              {/* Ligne 1 */}
              <motion.h1
                className="text-2xl sm:text-4xl md:text-5xl font-bold text-white"
                style={{ fontFamily: "Algerian" }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                Bienvenue dans l'univers de
              </motion.h1>

              {/* Ligne 2 */}
              <motion.h2
                className="text-xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-400 via-pink-500 to-purple-500 bg-clip-text text-transparent"
                style={{ fontFamily: "Algerian" }}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                Boga Ange Christian Guema
              </motion.h2>

              {/* Ligne 3 */}
              <motion.p
                className="text-sm sm:text-lg md:text-xl text-white"
                style={{ fontFamily: "Bradley Hand ITC" }}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 1 }}
              >
                Développeur passionné | Créatif engagé | Innovateur numérique
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeScreen;
