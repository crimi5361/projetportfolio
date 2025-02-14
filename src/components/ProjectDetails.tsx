import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3, } from "react-icons/fa";
import { SiExpress, SiFirebase, SiFlutter, SiJavascript } from "react-icons/si";

const techIcons: { [key: string]: JSX.Element } = {
  React: <FaReact className="text-blue-400 text-3xl" />,
  "Nodejs": <FaNodeJs className="text-green-500 text-3xl" />,
  'Express.js': <SiExpress className="text-blue-400 text-3xl" />, 
  Firebase: <SiFirebase className="text-yellow-400 text-3xl" />,
  Flutter: <SiFlutter className="text-blue-500 text-3xl" />,
  // Python: <FaPython className="text--600 text-3xl" />,
  html: <FaHtml5 className="text-orange-500 text-3xl"/>,
  css: <FaCss3 className="text-purple-500 text-3xl"/>,
  js: <SiJavascript className=" text-yellow-500 text-3xl"/>
};

const ProjectDetails = ({ project, onClose }: { project: any; onClose: () => void }) => {
  if (!project) return null;

  // Utiliser les images du projet sélectionné
  const images = project.images || [project.image]; // Si pas d'images, utilise l'image principale

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [currentImage, setCurrentImage] = useState(0);

 

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // Changer d'image toutes les 3 secondes

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center p-4">
      <div className="bg-gray-900 p-8 rounded-xl shadow-lg max-w-5xl w-full relative">
        {/* Bouton de fermeture */}
        <button className="absolute top-4 right-4 text-white text-2xl" onClick={onClose}>
          ✖
        </button>

        {/* Contenu du modal structuré en 2 colonnes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Colonne gauche */}
          <div>
          <h2 className="text-white text-2xl md:text-3xl font-bold">{project.title}</h2>
          <p className="text-gray-400 mt-2 text-sm md:text-base">{project.description}</p>

            {/* Pile technologique */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.8, delay: 0.3 }} 
              className="mt-4"
            >
              <h3 className="text-purple-400 text-lg font-semibold mb-2">Pile Technologique</h3>
              <div className="flex space-x-4">
                {project.technologies.map((tech: string, index: number) => (
                  <div key={index} className="p-2 bg-gray-800 rounded-lg flex items-center">
                    {techIcons[tech] || <span className="text-white">{tech}</span>}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Colonne droite - Diaporama d'images */}
          <div className="relative w-full">
  <div className="w-full min-h-[250px] md:h-64 overflow-hidden rounded-lg relative bg-gray-800">
  <AnimatePresence>
  <motion.img
    key={currentImage}
    src={images[currentImage]}
    alt={project.title}
    className="w-full h-full object-contain absolute"
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 1.05 }}
    transition={{ duration: 0.8 }}
  />
</AnimatePresence>

  </div>
</div>

        </div>

        {/* Explication du projet */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8, delay: 0.6 }} 
          className="mt-6"
        >
          <h2 className="text-xl font-bold text-center mb-6" style={{ color: '#9b5de5' }}>
            EXPLICATION
          </h2>
          <p className="text-gray-400 mt-2">{project.detail}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetails;
