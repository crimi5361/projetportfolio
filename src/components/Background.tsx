import { useEffect, useRef } from "react";

// Composant qui génère un arrière-plan animé avec des blobs et un motif en grille.
const Background = ({ animationSpeed = 100, xRange = 340, yRange = 40 }) => {
  // Référence pour accéder aux éléments blob afin de les manipuler directement via JavaScript.
  const blobRefs = useRef([]);

  // Positions initiales des blobs, utilisées pour calculer leurs déplacements.
  const initialPositions = [
    { x: -4, y: 0 },
    { x: -4, y: 0 },
    { x: 20, y: -8 },
    { x: 20, y: -8 },
  ];

  // Effet secondaire pour gérer l'animation des blobs pendant le défilement.
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let currentScroll = 0; // Position actuelle du défilement de la fenêtre.
    let requestId: number; // ID de l'animation pour la synchronisation avec `requestAnimationFrame`.

    // Fonction appelée lors du défilement pour animer les blobs.
    const handleScroll = () => {
      const newScroll = window.pageYOffset; // Récupère la nouvelle position de défilement.
      currentScroll = newScroll; // Met à jour la position actuelle.

      // Parcours de chaque blob pour mettre à jour sa position.
      blobRefs.current.forEach((blob, index) => {
        if (!blob) return; // Vérifie que le blob existe avant de l'utiliser.

        const initialPos = initialPositions[index]; // Position initiale du blob.

        // Calcul des décalages en fonction de la position de défilement et de l'index du blob.
        const xOffset =
          Math.sin(newScroll / animationSpeed + index * 0.5) * xRange; // Déplacement horizontal.
        const yOffset =
          Math.cos(newScroll / animationSpeed + index * 0.5) * yRange; // Déplacement vertical.

        // Mise à jour de la position du blob avec une transformation CSS.
        blob.style.setProperty(
          "transform",
          `translate(${initialPos.x + xOffset}px, ${initialPos.y + yOffset}px)`
        );
      });

      // Continue l'animation en synchronisation avec le rafraîchissement de l'écran.
      requestId = requestAnimationFrame(handleScroll);
    };

    // Ajout de l'écouteur d'événements pour détecter le défilement.
    window.addEventListener("scroll", handleScroll);

    // Nettoyage pour éviter les fuites de mémoire.
    return () => {
      window.removeEventListener("scroll", handleScroll); // Supprime l'écouteur de défilement.
      cancelAnimationFrame(requestId); // Annule l'animation en cours.
    };
  }, [animationSpeed, xRange, yRange]); // Dépendances pour recalculer en cas de modification des props.

  return (
    <div className="fixed inset-0">
      {/* Conteneur principal des blobs */}
      <div className="absolute inset-0">
        {/* Génération dynamique des blobs */}
        {[...Array(4)].map((_, i) => (
          <div
            key={i} // Clé unique pour chaque blob.
            ref={(ref) => (blobRefs.current[i] = ref)} // Assignation de la référence à chaque blob.
            className={`absolute ${
              i % 2 === 0 ? "top-0" : "-bottom-8"
            } ${i < 2 ? "-left-4" : "left-20"} md:w-96 md:h-96 w-72 h-72 ${
              i === 1 || i === 3 ? "hidden sm:block" : ""
            } ${
              i === 1 || i === 3 ? "bg-cyan-500" : "bg-purple-500"
            } rounded-full mix-blend-multiply filter blur-[128px] opacity-40 md:opacity-20`}
          ></div>
        ))}
      </div>
      {/* Overlay de grille avec des lignes légères */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f10_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f10_1px,transparent_1px)] bg-[size:24px_24px]"></div>
    </div>
  );
};

export default Background;
