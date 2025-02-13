import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  "../assets/images/anime/a1.png",
  "../assets/images/anime/a2.png",
];

const Comentaire = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      {/* Titre en haut */}
      <h1 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-purple-500 via-purple-300 to-purple-700 bg-clip-text text-transparent">
        JE SUIS DISPONIBLE POUR DES OFFRES EN FREELANCE
      </h1>

      {/* Conteneur de l'image */}
      <div className="w-96 h-96 relative overflow-hidden rounded-2xl shadow-lg">
        <AnimatePresence>
          <motion.img
            key={index}
            src={images[index]}
            alt="Diaporama"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          />
        </AnimatePresence>
      </div>

      {/* Texte en dessous en grand */}
      <h2 className="text-5xl font-bold text-center mt-6 text-purple-400">
        N'HÉSITEZ PAS À ME CONTACTER
      </h2>
    </div>
  );
};

export default Comentaire;
