/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { motion } from "framer-motion";
import { Dialog } from "@headlessui/react";

// Tableau contenant les chemins des images des certifications
const certifications: any[] = [
  // "../assets/images/certification/certs1.jpg",
  // "../assets/images/certification/certs1.jpg" ,
  // "../assets/images/certification/certs1.jpg" 
  // Autres images peuvent être ajoutées ici
];

const CardFormation = () => {
  // État pour suivre l'image sélectionnée dans la modal
  const [selectedImage, setSelectedImage] = useState<string | null>(null);


  return (
    <motion.div 
      // Animation d'entrée de la carte
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="p-8 rounded-lg shadow-lg" 
      style={{ backgroundColor: 'transparent' }}
    >
      {/* Section: Formation */}
      <div className="mb-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Liste des formations */}
          {[{
            title: "Licence en Méthodes Informatique Appliquées à la Gestion des Entreprises (MIAGE)",
            school: "Université Polytechnique de Bingerville",
            year: "2021 - 2024"
          }, {
            title: "Baccalauréat Série Scientifique (C)",
            school: "Collège Catholique Saint Charles Lwanga",
            year: "2020 - 2021"
          }].map((item, index) => (
            <motion.div 
              key={index} 
              // Animation d'apparition pour chaque formation
              initial={{ opacity: 0, x: -50 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className="relative pl-8"
            >
              {/* Ligne verticale pour la timeline */}
              <div className="absolute left-0 top-0 w-2 h-full" style={{ backgroundColor: '#9b5de5' }}></div>
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  {/* Point de connexion à la timeline */}
                  <span className="h-4 w-4 rounded-full inline-block mr-2" style={{ backgroundColor: '#9b5de5' }}></span>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                </div>
                <p className="text-sm text-white">{item.school}</p>
                <span className="inline-block text-xs font-medium px-2 py-1 rounded" style={{ backgroundColor: '#9b5de5', color: 'white' }}>{item.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Section: Certifications */}
      <motion.h2 
        // Animation pour le titre des certifications
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-xl font-bold text-center mb-6"
        style={{ color: '#9b5de5' }}
      >
        CERTIFICATIONS
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Affichage des images de certifications */}
        {certifications.map((cert, index) => (
          <motion.div 
            key={index} 
            // Animation d'apparition des images
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="relative flex justify-center group"
          >
            <img 
              src={cert} 
              alt={`Certification ${index + 1}`} 
              className="w-full max-w-xs rounded-lg shadow-lg transform transition duration-300 group-hover:scale-105"
            />
            {/* Bouton pour afficher l'image en grand */}
            <button 
              onClick={() => setSelectedImage(cert)} 
              className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 text-white font-bold px-4 py-2 rounded"
            >
              Voir
            </button>
          </motion.div>
        ))}
      </div>

      {/* Modal d'affichage de l'image en grand */}
      <Dialog open={!!selectedImage} onClose={() => setSelectedImage(null)} className="fixed inset-0 flex items-center justify-center z-50">
        {/* Arrière-plan foncé */}
        <div className="fixed inset-0 bg-black bg-opacity-75"></div>
        <div className="relative bg-white p-4 rounded-lg shadow-lg max-w-3xl w-full">
          {/* Bouton de fermeture */}
          <button onClick={() => setSelectedImage(null)} className="absolute top-2 right-2 text-gray-500 hover:text-gray-800">&times;</button>
          {/* Affichage de l'image */}
          {selectedImage && <img src={selectedImage} alt="Certification en grand" className="w-full rounded-lg" />}
        </div>
      </Dialog>
    </motion.div>
  );
};

export default CardFormation;
