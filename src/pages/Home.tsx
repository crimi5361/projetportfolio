import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiMongodb, SiGraphql, SiTailwindcss, SiGoland } from "react-icons/si";

const technologies = [
  { icon: <SiGoland className="text-cyan-500 text-2xl md:text-3xl" />, name: "GO" },
  { icon: <SiTypescript className="text-blue-600 text-2xl md:text-3xl" />, name: "TypeScript" },
  { icon: <FaNodeJs className="text-green-500 text-2xl md:text-3xl" />, name: "Node.js" },
  { icon: <FaPython className="text-yellow-400 text-2xl md:text-3xl" />, name: "Python" },
  { icon: <FaReact className="text-blue-400 text-2xl md:text-3xl" />, name: "React" },
  { icon: <SiNextdotjs className="text-white text-2xl md:text-3xl" />, name: "Next.js" },
  { icon: <SiTailwindcss className="text-teal-400 text-2xl md:text-3xl" />, name: "Tailwind" },
  { icon: <SiMongodb className="text-green-600 text-2xl md:text-3xl" />, name: "MongoDB" },
  { icon: <SiGraphql className="text-pink-600 text-2xl md:text-3xl" />, name: "GraphQL" }
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex flex-col items-center justify-center px-4 md:px-6 relative overflow-hidden">
      {/* Particules de fond animées - Réduites sur mobile */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500 opacity-20"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              width: Math.random() * 8 + 3,
              height: Math.random() * 8 + 3,
            }}
            animate={{
              y: [0, Math.random() * 50 - 25],
              x: [0, Math.random() * 50 - 25],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Contenu principal - Stack verticale sur mobile */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 pt-16 md:pt-0 pb-32 md:pb-0">
        {/* Section photo - Taille réduite sur mobile */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative group mt-8 md:mt-0"
        >
          <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-blue-500 to-green-500 rounded-xl md:rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-200 animate-tilt"></div>
          <div className="relative">
            <motion.img
              src="/crimi 2.jpg"
              alt="BOGA CHRISTIAN"
              className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-xl md:rounded-2xl object-cover border-2 md:border-4 border-gray-800 shadow-lg"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
          </div>
        </motion.div>

        {/* Section texte - Centrée sur mobile */}
        <div className="max-w-2xl text-center md:text-left px-2 sm:px-4">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Salut, je suis <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-500">BOGA CHRISTIAN</span>
          </motion.h1>

          <motion.div
            className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="mb-3 sm:mb-4">
              Développeur Full Stack spécialisé en <span className="text-blue-400 font-bold">GO</span>,{" "}
              <span className="text-blue-600 font-bold">TypeScript</span> et{" "}
              <span className="text-green-500 font-bold">Node.js</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-1 sm:gap-2">
              <span>Je crée des solutions</span>
              <span className="text-blue-400 font-semibold">
                <Typewriter
                  options={{
                    strings: ["performantes", "scalables", "modernes", "innovantes"],
                    autoStart: true,
                    loop: true,
                    delay: 75,
                    deleteSpeed: 50
                  }}
                />
              </span>
            </div>
          </motion.div>

          {/* Technologies favorites - Centrées sur mobile */}
          <motion.div
            className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {technologies.slice(0, 5).map((tech, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-1 sm:gap-2 bg-gray-800/50 px-3 py-1 sm:px-4 sm:py-2 rounded-full border border-gray-700 hover:border-blue-400 transition-colors text-sm sm:text-base"
                whileHover={{ y: -3 }}
              >
                {tech.icon}
                <span>{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bandeau de technologies défilantes - Optimisé mobile */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 py-4 sm:py-6 bg-gray-900/50 backdrop-blur-sm overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <motion.div
          className="flex gap-8 sm:gap-12 md:gap-16 w-max"
          animate={{ x: [0, -800] }}
          transition={{ 
            repeat: Infinity, 
            duration: 25,
            ease: "linear",
          }}
        >
          {[...technologies, ...technologies].map((tech, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              whileHover={{ scale: 1.1 }}
            >
              <div className="text-2xl sm:text-3xl md:text-4xl">{tech.icon}</div>
              <span className="text-xs sm:text-sm mt-1 sm:mt-2 text-gray-300">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;