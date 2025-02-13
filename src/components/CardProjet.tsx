import { useState } from "react";
import ProjectDetails from "./ProjectDetails";

const projects = [
  {
    id: 1,
    title: "GED-IT-PARCK",
    description: "Mise en place d'une application web pour la gestion des équipements informatiques.",
    detail: "Ce projet consiste en la conception et réalisation d’une application web pour la gestion du parc informatique d'une entreprise, visant à améliorer la traçabilité du matériel, à faciliter le processus de gestion et d’attribution, et à optimiser l’efficacité des opérations.",
    image: "../assets/images/ged/ged.jpg",
    images: [
      "../assets/images/ged/ged.jpg",
      "../assets/images/ged/ged2.jpg",
      "../assets/images/ged/ged3.jpg",
      "../assets/images/ged/ged4.jpg",
      "../assets/images/ged/ged5.jpg",
      "../assets/images/ged/ged6.jpg",
      "../assets/images/ged/ged7.jpg"
    ],
    technologies: ["React", "Nodejs", "Express.js"]
  },
  {
    id: 2,
    title: "INVENTORY",
    description: "Mise en place d'une application mobile pour le recensement des équipements informatiques.",
    detail: "Ce projet consiste en la conception et réalisation d’une application mobile pour le recensement des équipements du parc informatique d'une entreprise, visant à centraliser le matériel informatique et à faciliter le processus de gestion.",
    image: "../assets/images/inventory/in.jpg",
    images: [
      "../assets/images/inventory/in.jpg",
      "../assets/images/inventory/in1.jpg",
      "../assets/images/inventory/in.jpg"
    ],
    technologies: ["Nodejs", "Flutter"]
  },
  {
    id: 3,
    title: "Restaurant",
    description: " Mise en place d'un site de reervation de table pour un restaurant ",
    detail:"Creation d'un site web  d'un restaurant de la place , permettant au clients de pouvoir visioner les menu de ce splendide restaurant et pouvoir reverser une table",
    image: "../assets/images/python/rest.jpg",
    images: [
      "../assets/images/python/rest.jpg",
      "../assets/images/python/rest2.jpg",
      "../assets/images/python/rest3.jpg",
      "../assets/images/python/rest41.jpg",
      "../assets/images/python/rest5.jpg"

    ],
    technologies: ["html", "css", "js"]
  }
];

const CardProjet = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:p-8">
      {projects.map((project) => (
        <div
          key={project.id}
          className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer transform transition duration-300 hover:scale-105"
        >
          {/* Image responsive */}
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 sm:h-64 object-cover"
          />

          {/* Overlay avec animation */}
          <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white p-4 transition-opacity duration-300">
            <h2 className="text-lg sm:text-xl font-bold text-center">{project.title}</h2>
            <p className="text-sm text-gray-300 text-center mt-2">{project.description}</p>

            {/* Bouton Détails */}
            <button
              onClick={() => openModal(project)}
              className="mt-4 bg-purple-600 hover:bg-purple-700 px-3 py-2 sm:px-4 sm:py-2 rounded-lg transition-all duration-300"
            >
              Détails
            </button>
          </div>
        </div>
      ))}

      {/* Modal */}
      {isModalOpen && <ProjectDetails project={selectedProject} onClose={closeModal} />}
    </div>
  );
};

export default CardProjet;
