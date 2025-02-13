import React from "react";
import { motion } from "framer-motion"; // Importation de la bibliothèque Framer Motion pour les animations
import Typewriter from "typewriter-effect"; // Importation de Typewriter Effect pour l'effet de machine à écrire
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker
} from "react-icons/fa"; // Importation des icônes des technologies
import { SiFlutter, SiNextdotjs, SiMongodb, SiGraphql, SiTailwindcss, SiTypescript } from "react-icons/si"; // Importation d'autres icônes

// Liste des technologies utilisées avec leurs icônes correspondantes
const technologies = [
  { icon: <FaReact className="text-blue-400" />, name: "React" },
  { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
  { icon: <FaPython className="text-yellow-500" />, name: "Python" },
  { icon: <SiFlutter className="text-blue-500" />, name: "Flutter" },
  { icon: <SiTypescript className="text-blue-600" />, name: "TypeScript" },
  { icon: <SiNextdotjs className="text-gray-200" />, name: "Next.js" },
  { icon: <SiTailwindcss className="text-teal-400" />, name: "Tailwind CSS" },
  { icon: <SiMongodb className="text-green-600" />, name: "MongoDB" },
  { icon: <SiGraphql className="text-pink-400" />, name: "GraphQL" },
  { icon: <FaDocker className="text-blue-600" />, name: "Docker" }
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 via-black to-black text-white flex flex-col items-center justify-center px-4 md:px-6 relative">
      {/* Animation de fond pour un effet visuel immersif */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="bg-gradient-to-b from-purple-700 via-transparent to-black opacity-70 h-1/2" />
      </div>

      {/* Titre principal */}
      <motion.h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center leading-tight mt-10">
        Bienvenue dans {" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-500">
          Mon Univers
        </span>
      </motion.h1>

      {/* Sous-titre */}
      <motion.div className="mt-6 text-center text-sm sm:text-lg md:text-xl max-w-2xl text-gray-300">
        <p>
          Découvrez l’environnement immersif d’un {" "}
          <span className="text-blue-400 font-bold">Développeur Full Stack</span>,
          où technologie et créativité s’allient pour bâtir des solutions modernes.
        </p>
        {/* Effet de machine à écrire avec des mots-clés dynamiques */}
        <span className="text-blue-400 font-semibold">
          <Typewriter
            options={{
              strings: ["Innovation", "Performance", "Accessibilité"],
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 50
            }}
          />
        </span>
      </motion.div>

      {/* Section des technologies avec effet de défilement horizontal */}
      <div className="absolute bottom-10 w-full overflow-hidden py-4">
        <motion.div
          className="flex gap-12 w-max"
          animate={{ x: [0, -400, 0] }} // Animation de translation horizontale en boucle
          transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
        >
          {/* Duplication des éléments pour assurer un effet de boucle fluide */}
          {[...technologies, ...technologies].map((tech, index) => (
            <div key={index} className="flex flex-col items-center text-xl">
              {tech.icon} {/* Affichage de l'icône */}
              <span className="text-sm mt-2">{tech.name}</span> {/* Nom de la technologie */}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Home; // Exportation du composant Home
