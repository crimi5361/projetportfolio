import { motion } from 'framer-motion';
import { FaLinux, FaWindows, FaPython, FaGit, FaGithub, FaGitlab, FaJs } from 'react-icons/fa';
import { SiDjango, SiNextdotjs, SiFlutter, SiExpress, SiPostgresql, SiMysql, SiMongodb, SiDart, SiReact, SiTypescript, SiVercel, SiHeroku, SiPythonanywhere } from 'react-icons/si';

// Define the valid keys for the icons object
type IconKeys = 'Linux' | 'Windows' | 'Django' | 'Nextjs' | 'Reactjs' | 'Flutter' | 'Express.js' | 'PostgreSQL' | 'MySQL' | 'MongoDB' | 'Python' | 'Dart' | 'JavaScript' | 'TypeScript' | 'GIT' | 'GitHub' | 'GitLab' | 'Vercel' | 'Heroku' | 'PythonAnywhere';

const icons: Record<IconKeys, JSX.Element> = {
  Linux: <FaLinux className="text-white" />,
  Windows: <FaWindows className="text-white" />,
  Django: <SiDjango className="text-white" />,
  Nextjs: <SiNextdotjs className="text-white" />,
  Reactjs: <SiReact className="text-white" />,
  Flutter: <SiFlutter className="text-white" />,
  'Express.js': <SiExpress className="text-white" />,
  PostgreSQL: <SiPostgresql className="text-white" />,
  MySQL: <SiMysql className="text-white" />,
  MongoDB: <SiMongodb className="text-white" />,
  Python: <FaPython className="text-white" />,
  Dart: <SiDart className="text-white" />,
  JavaScript: <FaJs className="text-white" />,
  TypeScript: <SiTypescript className="text-white" />,
  GIT: <FaGit className="text-white" />,
  GitHub: <FaGithub className="text-white" />,
  GitLab: <FaGitlab className="text-white" />,
  Vercel: <SiVercel className="text-white" />,
  Heroku: <SiHeroku className="text-white" />,
  PythonAnywhere: <SiPythonanywhere className="text-white" />
};

const CardCompetence = () => {
  // Define the categories of competencies
  const categories = [
    {
      title: 'OS',
      items: ['Linux', 'Windows'],
    },
    {
      title: 'Framework',
      items: ['Django', 'Nextjs', 'Reactjs', 'Flutter', 'Express.js'],
    },
    {
      title: 'Base de données',
      items: ['PostgreSQL', 'MySQL', 'MongoDB'],
    },
    {
      title: 'Langages',
      items: ['Python', 'Dart', 'JavaScript', 'TypeScript'],
    },
    {
      title: 'Versionning',
      items: ['GIT', 'GitHub', 'GitLab'],
    },
    {
      title: 'Cloud computing',
      items: ['Vercel', 'Heroku', 'PythonAnywhere'],
    },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="p-8 rounded-lg shadow-lg" 
      style={{ backgroundColor: 'transparent' }}
    >
      <div className="grid md:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, delay: index * 0.3 }}
            className="relative pl-8"
          >
            {/* Vertical colored line */}
            <div
              className="absolute left-0 top-0 w-2 h-full"
              style={{ backgroundColor: '#9b5de5' }}
            ></div>
            {/* Category title with animation */}
            <h3 className="text-lg font-bold mb-4 text-white">{category.title}</h3>
            {/* List of skills with animation for each item */}
            <ul>
              {category.items.map((item, idx) => (
                <motion.li 
                  key={idx} 
                  initial={{ opacity: 0, x: -20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  className="flex items-center mb-2"
                >
                  {icons[item as IconKeys] && <span className="mr-2 text-lg">{icons[item as IconKeys]}</span>}
                  <span className="text-sm text-white">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CardCompetence;
