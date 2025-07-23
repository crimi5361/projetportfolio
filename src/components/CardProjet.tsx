import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Github, ExternalLink, Layers, } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  detail: string;
  image: string;
  images: string[];
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
}

const projects: Project[] = [
  // {
  //   id: 1,
  //   title: "GED-IT-PARCK",
  //   description: "Application web de gestion des équipements informatiques",
  //   detail: "Ce projet consiste en la conception et réalisation d'une application web complète pour la gestion du parc informatique d'une entreprise. L'application permet :\n\n- La traçabilité complète du matériel\n- La gestion des attributions aux employés\n- Le suivi des maintenances\n- La génération de rapports automatisés\n\nJ'ai implémenté des fonctionnalités avancées comme la lecture de codes QR pour l'inventaire et un système de notifications pour les maintenances préventives.",
  //   image: "../assets/images/ged/ged.jpg",
  //   images: [
  //     "../assets/images/ged/ged.jpg",
  //     "../assets/images/ged/ged2.jpg",
  //     "../assets/images/ged/ged3.jpg",
  //     "../assets/images/ged/ged4.jpg",
  //     "../assets/images/ged/ged5.jpg",
  //     "../assets/images/ged/ged6.jpg",
  //     "../assets/images/ged/ged7.jpg"
  //   ],
  //   technologies: ["React", "Node.js", "Express.js", "MongoDB", "QR Code"],
  //   githubLink: "#",
  //   liveLink: "#"
  // },
  
];

const ProjectCard = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>("Tous");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  // Get all unique technologies
  const allTechnologies = ["Tous", ...Array.from(new Set(projects.flatMap(p => p.technologies)))]

  useEffect(() => {
    if (filter === "Tous") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(p => p.technologies.includes(filter)));
    }
  }, [filter]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
          Mes Projets
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Découvrez une sélection de mes réalisations. Chaque projet représente une solution unique à un défi spécifique.
        </p>
      </motion.div>

      {/* Filter */}
      <motion.div 
        className="flex flex-wrap justify-center gap-3 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {allTechnologies.map(tech => (
          <button
            key={tech}
            onClick={() => setFilter(tech)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              filter === tech 
                ? "bg-purple-600 text-white shadow-lg shadow-purple-500/30"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {tech}
          </button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              layout
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              
              <div 
                className="h-full bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div>
                      <h3 className="text-white text-xl font-bold">{project.title}</h3>
                      <p className="text-purple-200 text-sm">{project.description}</p>
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.technologies.slice(0, 3).map(tech => (
                      <span 
                        key={tech} 
                        className="px-2 py-1 bg-gray-700/50 text-xs rounded-full text-purple-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-700/50 text-xs rounded-full text-gray-400">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <button 
                    className="flex items-center text-sm text-purple-400 hover:text-purple-300 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                  >
                    Voir les détails <ArrowRight className="ml-1 w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="relative bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-700/50"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors z-10"
                onClick={() => setSelectedProject(null)}
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Image Gallery */}
                <div className="sticky top-0 h-full">
                  <div className="h-64 md:h-full bg-gray-800 rounded-t-xl md:rounded-l-xl md:rounded-tr-none overflow-hidden">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="grid grid-cols-4 gap-2 p-4 bg-gray-800/50">
                    {selectedProject.images.slice(0, 4).map((img, index) => (
                      <div key={index} className="h-20 bg-gray-700 rounded overflow-hidden">
                        <img
                          src={img}
                          alt={`Preview ${index + 1}`}
                          className="w-full h-full object-cover hover:opacity-80 transition-opacity cursor-pointer"
                          onClick={() => {
                            // Simple image switcher
                            const newImages = [...selectedProject.images];
                            newImages[0] = img;
                            newImages[index] = selectedProject.image;
                            setSelectedProject({
                              ...selectedProject,
                              image: img,
                              images: newImages
                            });
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 md:p-8">
                  <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.technologies.map(tech => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 bg-gray-800 text-sm rounded-full text-purple-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="prose prose-invert max-w-none mb-8">
                    {selectedProject.detail.split('\n\n').map((paragraph, i) => (
                      <p key={i} className="mb-4 text-gray-300">{paragraph}</p>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4 mt-8">
                    {selectedProject.githubLink && (
                      <a
                        href={selectedProject.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                      >
                        <Github className="w-5 h-5" />
                        Code Source
                      </a>
                    )}
                    {selectedProject.liveLink && (
                      <a
                        href={selectedProject.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                        Voir le projet
                      </a>
                    )}
                  </div>

                  <div className="mt-12 pt-6 border-t border-gray-800">
                    <h3 className="flex items-center gap-2 text-xl font-semibold mb-4">
                      <Layers className="text-purple-400" />
                      <span>Fonctionnalités clés</span>
                    </h3>
                    <ul className="space-y-3">
                      {selectedProject.detail.split('\n\n')[1]
                        ?.split('\n- ')
                        ?.filter(Boolean)
                        ?.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-purple-400 mt-1">•</span>
                            <span className="text-gray-300">{feature.replace('- ', '')}</span>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectCard;