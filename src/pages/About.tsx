import React, { useEffect, useRef } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {  ArrowRight, Code, Award, Globe } from "lucide-react";
import profileImage from "../assets/images/photo.png";
import pdfFile from "../assets/images/cv BOGA ANGE CHRISTIAN.pdf.pdf";
import { FaDownload } from "react-icons/fa";
 
const About = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfFile;
    link.download = "cv_BOGA_ANGE.pdf";
    link.click();
  };
  

   // Références pour le scroll
   const statsRef = useRef(null);

   const handleScrollDown = () => {
     if (statsRef.current) {
       statsRef.current.scrollIntoView({ behavior: "smooth" });
     }
   };
   
  

   
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-4 sm:px-6 md:px-8 py-8">
      {/* Header Section */}
      <div className="text-center" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-bold text-purple-500">À propos de moi</h2>
        <p className="text-gray-400 mt-2 text-sm sm:text-base">
          ✨ Transformer les idées en expériences numériques ✨
        </p>
      </div>

      {/* Intro Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-10 gap-8">
        {/* Profile Image */}
        <div
          className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-gray-800 rounded-full shadow-lg overflow-hidden mx-auto md:mx-0"
          data-aos="fade-right"
        >
          <img
            src={profileImage}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

         {/* Text Content */}
         <div className="text-center md:text-left flex-1" data-aos="fade-left">
          {/* Mobile version */}
          <div className="block md:hidden">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Bonjour, je suis{" "}
            <span className="text-purple-500">BOGA ANGE CHRISTIAN GUEMA</span>
          </h1>
          <p className="text-gray-400 mt-2 text-sm sm:text-base md:text-lg">
            MIAGISTE, je me distingue par une passion pour le développement web et mobile ainsi qu’un véritable intérêt pour l’innovation technologique.
          </p>
          <p className="text-gray-400 mt-4 text-sm sm:text-base md:text-lg">
            Avec des compétences solides en <span className="text-purple-400">ReactJS, Flutter, Node.js</span> et <span className="text-purple-400">SQL Server</span>, je suis motivé par l’idée de transformer des concepts en solutions performantes et accessibles.
          </p>
          </div>

          {/* pc version */}
          <div className="hidden md:block">
            <h1 className="text-4xl font-bold text-white">
              Bonjour, je suis{" "}
              <span className="text-purple-500">BOGA ANGE CHRISTIAN GUEMA</span>
            </h1>
            <p className="text-gray-400 mt-2">
              MIAGISTE, je me distingue par une passion pour le
              développement web et mobile ainsi qu’un véritable intérêt pour
              l’innovation technologique. Mon parcours m’a permis de travailler
              sur des projets concrets, où j’ai allié rigueur et créativité pour
              répondre à des besoins réels.
            </p>
            <p className="text-gray-400 mt-4">
              Avec des compétences solides en <span className="text-purple-400">ReactJS, Flutter, Node.js</span> et{" "}
              <span className="text-purple-400">SQL Server</span>, je suis motivé par l’idée de
              transformer des concepts en solutions performantes et accessibles.
              Je suis animé par les défis et convaincu que la technologie peut
              avoir un impact positif sur les entreprises et leurs utilisateurs.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
            <button
              className="flex items-center gap-2 bg-purple-500 px-6 py-3 rounded-md text-white shadow-lg hover:bg-purple-600 transition duration-300"
              onClick={handleDownload}
            >
              <FaDownload />
              Télécharger le CV
            </button>
            <button 
              className="flex items-center gap-2 border-2 border-purple-500 px-6 py-3 rounded-md text-purple-500 shadow-lg hover:bg-purple-500 hover:text-white transition duration-300"
              onClick={handleScrollDown}
            >
              <ArrowRight className="w-5 h-5" />
              Voir les Projets
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-16">
  <StatCard icon={Code} value="" label="Projets Réalisés" description="Solutions web innovantes" onClick={handleScrollDown} />
  <StatCard icon={Award} value="Formations" label="Certifications" description="Compétences validées" onClick={handleScrollDown} />
  <StatCard icon={Globe} value="" label="Années d’Apprentissage" description="Parcours enrichissant" onClick={handleScrollDown} />
</div>

    </div>
  );
};

const StatCard = ({ icon: Icon, value, label, description, onClick }) => {
  return (
    <div
      className="p-6 bg-gray-800 rounded-xl text-center shadow-lg border-2 border-transparent transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-purple-500 cursor-pointer"
      data-aos="fade-up"
      onClick={onClick} // Défilement vers le bas
    >
      <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-purple-500 rounded-full mx-auto mb-4 transform transition-transform duration-300 hover:rotate-12">
        <Icon className="text-white w-6 h-6 sm:w-8 sm:h-8" />
      </div>
      <h3 className="text-xl sm:text-2xl font-bold text-white">{value}</h3>
      <p className="text-purple-400 text-sm sm:text-base">{label}</p>
      <p className="text-gray-400 mt-2 text-xs sm:text-sm">{description}</p>
    </div>
  );
};


export default About;
