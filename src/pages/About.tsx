import { FC, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowRight, Code, Award, Globe, Rocket, Sparkles } from "lucide-react";
import profileImage from "../assets/images/photo.png";
import pdfFile from "../assets/images/cv BOGA ANGE CHRISTIAN.pdf.pdf";
import { FaDownload } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  useEffect(() => {
    AOS.init({ 
      duration: 1000,
      once: false,
      mirror: true
    });
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfFile;
    link.download = "cv_BOGA_ANGE.pdf";
    link.click();
  };

  const statsRef = useRef<HTMLDivElement | null>(null);

  const handleScrollDown = () => {
    if (statsRef.current) {
      statsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Animation for floating elements
  const FloatingElements = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-purple-500 opacity-20"
            style={{
              width: Math.random() * 10 + 5,
              height: Math.random() * 10 + 5,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-black text-white px-4 sm:px-6 md:px-8 py-8 overflow-hidden relative">
      <FloatingElements />
      
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-purple-600 blur-3xl opacity-30"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-blue-600 blur-3xl opacity-30"></div>
      </motion.div>

      {/* Header Section with spectacular effect */}
      <motion.div 
        className="text-center relative z-10"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 mb-4">
          À propos de moi
        </h2>
        <motion.p 
          className="text-gray-400 mt-2 text-sm sm:text-base flex items-center justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Sparkles className="mr-2 text-yellow-400" />
          <span>✨ Transformer les idées en expériences numériques ✨</span>
          <Sparkles className="ml-2 text-yellow-400" />
        </motion.p>
      </motion.div>

      {/* Intro Section with 3D flip effect */}
      <motion.div 
        className="flex flex-col md:flex-row items-center justify-between mt-10 gap-8 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.3 }}
      >
        {/* Profile Image with floating effect */}
        <motion.div
          className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-gray-800 rounded-full shadow-lg overflow-hidden mx-auto md:mx-0 relative"
          initial={{ scale: 0.8, rotateY: 180 }}
          animate={{ scale: 1, rotateY: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.3
          }}
          whileHover={{ scale: 1.05, y: -10 }}
        >
          <img
            src={profileImage}
            alt="Profile"
            className="w-full h-full object-cover"
          />
          <motion.div 
            className="absolute inset-0 rounded-full border-4 border-transparent hover:border-purple-500 transition-all duration-300"
            whileHover={{ borderColor: "rgba(168, 85, 247, 0.5)" }}
          />
        </motion.div>

        {/* Text Content with typing effect */}
        <motion.div 
          className="text-center md:text-left flex-1"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
            Bonjour, je suis{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 animate-gradient">
              BOGA ANGE CHRISTIAN GUEMA
            </span>
          </h1>
          
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
              <span className="text-purple-400 font-medium">MIAGISTE</span>, je me distingue par une passion intense pour le développement web et mobile ainsi qu'un véritable intérêt pour l'innovation technologique. Mon parcours m'a permis de travailler sur des projets ambitieux où j'ai allié <span className="text-yellow-400">rigueur</span> et <span className="text-pink-400">créativité</span>.
            </p>
          </motion.div>

          <motion.div 
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
              Expert en <span className="text-blue-400">ReactJS</span>, <span className="text-teal-400">Flutter</span>, <span className="text-green-400">Node.js</span> et <span className="text-red-400">SQL Server</span>, je transforme des concepts complexes en solutions <span className="font-bold text-white">performantes</span> et <span className="font-bold text-white">accessibles</span>. Chaque projet est une nouvelle aventure où la technologie rencontre l'impact positif.
            </p>
          </motion.div>

          {/* Buttons with cool hover effects */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <motion.button
              className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-3 rounded-md text-white shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownload}
            >
              <span className="relative z-10 flex items-center">
                <FaDownload className="mr-2" />
                Télécharger le CV
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </motion.button>

            <motion.button 
              className="flex items-center gap-2 border-2 border-purple-500 px-6 py-3 rounded-md text-purple-400 hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleScrollDown}
            >
              <span className="relative z-10 flex items-center">
                <ArrowRight className="mr-2" />
                Explorer mes Projets
              </span>
              <span className="absolute inset-0 bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
              <Rocket className="absolute right-4 opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-300" />
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Stats Section with staggering cards */}
      <motion.div 
        ref={statsRef} 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-20 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <StatCard 
          icon={Code} 
          value="20+" 
          label="Projets Réalisés" 
          description="Solutions web innovantes" 
          onClick={handleScrollDown} 
          delay={0}
        />
        <StatCard 
          icon={Award} 
          value="10+" 
          label="Certifications" 
          description="Compétences validées" 
          onClick={handleScrollDown} 
          delay={0.2}
        />
        <StatCard 
          icon={Globe} 
          value="5+" 
          label="Années d'Expérience" 
          description="Parcours enrichissant" 
          onClick={handleScrollDown} 
          delay={0.4}
        />
      </motion.div>

      {/* Floating CTA at bottom */}
      <motion.div 
        className="fixed bottom-8 right-8 z-50"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <button 
          className="p-4 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center"
          onClick={handleScrollDown}
        >
          <Rocket className="w-6 h-6 text-white animate-pulse" />
        </button>
      </motion.div>
    </div>
  );
};

interface StatCardProps {
  icon: React.ComponentType<{ className?: string }>;
  value: string | number;
  label: string;
  description: string;
  onClick?: () => void;
  delay?: number;
}

const StatCard: FC<StatCardProps> = ({ icon: Icon, value, label, description, onClick, delay = 0 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl text-center shadow-lg border border-gray-700 hover:border-purple-500 cursor-pointer relative overflow-hidden group"
      onClick={onClick}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { y: 50, opacity: 0 },
        visible: { 
          y: 0, 
          opacity: 1,
          transition: {
            delay: delay,
            duration: 0.5,
            type: "spring",
            stiffness: 100
          }
        }
      }}
      whileHover={{ 
        y: -10,
        boxShadow: "0 20px 25px -5px rgba(124, 58, 237, 0.3)"
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full mx-auto mb-4 transform transition-transform duration-500 group-hover:rotate-[360deg]">
          <Icon className="text-white w-6 h-6 sm:w-8 sm:h-8" />
        </div>
        <motion.h3 
          className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-2"
          whileHover={{ scale: 1.1 }}
        >
          {value}
        </motion.h3>
        <p className="text-purple-300 text-lg font-medium mb-2">{label}</p>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
      
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  );
};

export default About;