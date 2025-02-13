import {
  Linkedin,
  Github,
  Instagram,
  ExternalLink
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa"; // Remplace lucide-react par react-icons

const WhatsAppIcon = ({ className, ...props }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M20.52 3.48a11.76 11.76 0 00-16.64 0A11.76 11.76 0 000 12a11.85 11.85 0 002 6.64L0 24l5.36-2a11.85 11.85 0 006.64 2 11.76 11.76 0 008.36-3.48 11.76 11.76 0 000-16.64zM12 21.6a9.6 9.6 0 01-5.16-1.44l-.36-.24-3.96 1.44 1.44-3.96-.24-.36A9.6 9.6 0 0112 2.4a9.6 9.6 0 019.6 9.6c0 5.28-4.32 9.6-9.6 9.6zm4.32-7.2c-.24-.12-1.44-.72-1.68-.84-.24-.12-.36-.12-.6.12s-.72.84-.84 1.08c-.12.12-.24.24-.48.12a7.12 7.12 0 01-2.52-1.56 8.69 8.69 0 01-1.56-2.52c-.12-.24 0-.36.12-.48.12-.12.24-.24.36-.36.12-.12.12-.24.24-.36.12-.12.12-.24.24-.36.12-.12 0-.24 0-.36s-.6-1.68-.84-2.28c-.12-.6-.36-.6-.6-.6h-.6c-.24 0-.6.12-.84.36-.24.12-.84.84-.84 2.04s.84 2.4.96 2.64c.12.24 1.68 2.76 4.08 4.08 2.4 1.32 2.88 1.32 3.36 1.2.48 0 1.68-.72 1.92-1.44s.24-1.32.12-1.44c-.12-.12-.24-.24-.36-.36z" />
  </svg>
);

const socialLinks = [
  {
    name: "LinkedIn",
    displayName: "Connectons-nous",
    subText: "sur LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/ange-boga-christian123",
    color: "#0A66C2",
    gradient: "from-[#0A66C2] to-[#0077B5]",
    isPrimary: true
  },
  {
    name: "Instagram",
    displayName: "Instagram",
    subText: "bogaange167",
    icon: Instagram,
    url: "https://www.instagram.com/bogaange167",
    color: "#E4405F",
    gradient: "from-[#833AB4] via-[#E4405F] to-[#FCAF45]"
  },
  {
    name: "WhatsApp",
    displayName: "WhatsApp",
    subText: "",
    icon: WhatsAppIcon, // ✅ Maintenant, cette référence fonctionne
    url: "https://wa.me/qr/ODT5SIBULDJRG1",
    color: "#25D366",
    gradient: "from-[#25D366] to-[#128C7E]"
  },
  {
    name: "GitHub",
    displayName: "Github",
    subText: "crimi5361",
    icon: Github,
    url: "https://github.com/crimi5361",
    color: "#ffffff",
    gradient: "from-[#333] to-[#24292e]"
  },
  {
    name: "TikTok",
    displayName: "TikTok",
    subText: "@angeboga4",
    icon: ({ className, ...props }) => (
      <svg
        className={className}
        width="24px"
        height="24px"
        viewBox="0 0 45 45"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        {...props}
      >
        <title>TikTok</title>
        <path d="M29.5248245,9.44576327 C28.0821306,9.0460898 ..." fill="#FE2C55"></path>
        <path d="M25.195102,6.75428571 C24.7946939,6.47510204 ..." fill="#25F4EE"></path>
      </svg>
    ),
    url: "https://www.tiktok.com/@angeboga4",
    color: "black",
    gradient: "from-[#000000] via-[#25F4EE] to-[#FE2C55]"
  }
];
const SocialLinks = () => {
  const linkedIn = socialLinks.find(link => link.isPrimary);
  const otherLinks = socialLinks.filter(link => !link.isPrimary);
  const [instagram, youtube, github, tiktok] = otherLinks;

  return (
    <div className="w-full bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 py-8 backdrop-blur-xl">
      <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
        <span className="inline-block w-8 h-1 bg-indigo-500 rounded-full"></span>
        Connectez-vous avec moi
      </h3>

      <div className="flex flex-col gap-4">
        {/* LinkedIn - Ligne principale*/}
        <a
  href={linkedIn.url}
  target="_blank"
  rel="pas d'ouvreur pas de référent"
  className="group relative flex items-center justify-between p-4 rounded-lg 
             bg-white/5 border border-white/10 overflow-hidden
             hover:border-white/20 transition-all duration-500"
>
  {/*Arrière-plan dégradé au survol */}
  <div 
    className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
               bg-gradient-to-r ${linkedIn.gradient}`}
  />
  
  {/* Conteneur de contenu */}
  <div className="relative flex items-center gap-4">
    {/* Conteneur d'icônes*/}
    <div className="relative flex items-center justify-center">
      <div 
        className="absolute inset-0 opacity-20 rounded-md transition-all duration-500
                   group-hover:scale-110 group-hover:opacity-30"
        style={{ backgroundColor: linkedIn.color }}
      />
      <div className="relative p-2 rounded-md">
        <linkedIn.icon
          className="w-6 h-6 transition-all duration-500 group-hover:scale-105"
          style={{ color: linkedIn.color }}
        />
      </div>
    </div>

    {/* Conteneur de texte */}
    <div className="flex flex-col">
      <span className="text-lg font-bold pt-[0.2rem] text-gray-200 tracking-tight leading-none group-hover:text-white transition-colors duration-300">
        {linkedIn.displayName}
      </span>
      <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
        {linkedIn.subText}
      </span>
    </div>
  </div>

  {/*Lien externe*/}
  <ExternalLink 
    className="relative w-5 h-5 text-gray-500 group-hover:text-white
               opacity-0 group-hover:opacity-100 transition-all duration-300
               transform group-hover:translate-x-0 -translate-x-1"
  />

  {/* Effet de brillance */}
  <div 
    className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                  translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
  </div>
</a>


        {/* Deuxième rangée – Instagram et YouTube*/}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[instagram, youtube].map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-3 p-4 rounded-xl 
                       bg-white/5 border border-white/10 overflow-hidden
                       hover:border-white/20 transition-all duration-500"
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
                             bg-gradient-to-r ${link.gradient}`} />
              
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 opacity-20 rounded-lg transition-all duration-500
                               group-hover:scale-125 group-hover:opacity-30"
                     style={{ backgroundColor: link.color }} />
                <div className="relative p-2 rounded-lg">
                  <link.icon
                    className="w-5 h-5 transition-all duration-500 group-hover:scale-110"
                    style={{ color: link.color }}
                  />
                </div>
              </div>

              {/* Conteneur de texte */}
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors duration-300">
                  {link.displayName}
                </span>
                <span className="text-xs text-gray-400 truncate group-hover:text-gray-300 transition-colors duration-300">
                  {link.subText}
                </span>
              </div>
              
              <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white ml-auto
                                     opacity-0 group-hover:opacity-100 transition-all duration-300
                                     transform group-hover:translate-x-0 -translate-x-2" />

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                              translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </div>
            </a>
          ))}
        </div>

        {/*Troisième rangée – GitHub */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[github, tiktok].map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-3 p-4 rounded-xl 
                       bg-white/5 border border-white/10 overflow-hidden
                       hover:border-white/20 transition-all duration-500"
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
                             bg-gradient-to-r ${link.gradient}`} />
              
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 opacity-20 rounded-lg transition-all duration-500
                               group-hover:scale-125 group-hover:opacity-30"
                     style={{ backgroundColor: link.color }} />
                <div className="relative p-2 rounded-lg">
                  <link.icon
                    className="w-5 h-5 transition-all duration-500 group-hover:scale-110"
                    style={{ color: link.color }}
                  />
                </div>
              </div>

              {/* Conteneur de texte*/}
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors duration-300">
                  {link.displayName}
                </span>
                <span className="text-xs text-gray-400 truncate group-hover:text-gray-300 transition-colors duration-300">
                  {link.subText}
                </span>
              </div>
              
              <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white ml-auto
                                     opacity-0 group-hover:opacity-100 transition-all duration-300
                                     transform group-hover:translate-x-0 -translate-x-2" />

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                              translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;