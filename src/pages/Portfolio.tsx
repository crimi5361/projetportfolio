import React from 'react';
import { ReactNode } from "react";
import PropTypes from 'prop-types';
import { AppBar, Tabs, Tab, Box } from '@mui/material';
import { Code, Award, Boxes } from 'lucide-react';

// Importation des composants personnalisés utilisés pour chaque onglet
import CardProjet from '../components/CardProjet';
import CardFormation from '../components/CardFormation';
import CardCompetence from '../components/CardCompetence';

/**
 * Composant pour gérer le contenu affiché sous chaque onglet.
 * @param {Object} props - Les propriétés reçues par le composant.
 */
interface TabPanelProps {
  children?: ReactNode;
  value: number;
  index: number;
  other?: object;
}

function TabPanel({ children, value, index, ...other }: TabPanelProps) {
  return (
    <div
      hidden={value !== index}
      {...other} 
    >
      {value === index && <Box sx={{ p: { xs: 1, sm: 3 } }}>{children}</Box>}
    </div>
  );
}


// Définition des types des propriétés pour valider les données reçues
TabPanel.propTypes = {
  children: PropTypes.node, // Contenu à afficher dans le panneau
  index: PropTypes.number.isRequired, // Index de l'onglet
  value: PropTypes.number.isRequired, // Valeur actuelle de l'onglet sélectionné
};

/**
 * Fonction utilitaire pour générer les propriétés ARIA des onglets.
 * @param {number} index - Index de l'onglet.
 * @returns {Object} - Propriétés ARIA pour l'onglet.
 */
function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const Portfolio = () => {
  // État local pour suivre l'onglet actuellement sélectionné
  const [value, setValue] = React.useState(0);

  /**
   * Gestionnaire de changement d'onglet.
   * @param {Object} _event - Événement déclenché.
   * @param {number} newValue - Nouvelle valeur sélectionnée.
   */
  const handleChange = (_event: object, newValue: number) => {
    setValue(newValue); // Met à jour l'état avec la nouvelle valeur
  };

  return (
    <Box sx={{ width: '100%' }}>
      {/* Section d'introduction */}
      <div
        className="md:px-[10%] px-[5%] w-full sm:mt-0 mt-[5rem] bg-[#030014] overflow-hidden"
        id="Portofolio"
      >
        <div
          className="text-center pb-10"
          data-aos="fade-up" // Animation lors du scroll (librairie AOS)
          data-aos-duration="1000"
        >
          <h2
            className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
            style={{
              color: '#6366f1',
              backgroundImage: 'linear-gradient(45deg, #6366f1 10%, #a855f7 93%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Vitrine du portfolio
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
            ✨Explorez mon parcours à travers des projets, des certifications et une expertise technique.✨
          </p>
        </div>
      </div>

      {/* Barre d'onglets */}
      <AppBar
        position="static"
        elevation={0} // Supprime l'ombre par défaut
        sx={{
          bgcolor: 'transparent',
          border: '1px solid rgba(255, 255, 255, 0.1)', // Bordure subtile
          borderRadius: '20px', // Coins arrondis
          width: { xs: '100%', sm: '97%', md: '80%' }, // Largeur responsive
          margin: '0 auto', // Centrer la barre
          '&::before': {
            content: '""',
            position: 'absolute',
            background: 'linear-gradient(180deg, rgba(139, 92, 246, 0.03), rgba(59, 130, 246, 0.03))',
          },
        }}
        className="md:px-7"
      >
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          variant="fullWidth" // Chaque onglet prend la même largeur
          sx={{
            '& .MuiTab-root': {
              fontWeight: '600',
              color: '#94a3b8',
              '&:hover': { transform: 'translateY(-1px)' },
            },
          }}
        >
          <Tab icon={<Code />} label="Projets" {...a11yProps(0)} />
          <Tab icon={<Award />} label="Formations" {...a11yProps(1)} />
          <Tab icon={<Boxes />} label="Compétences" {...a11yProps(2)} />
        </Tabs>
      </AppBar>

      {/* Contenu des onglets */}
      <TabPanel value={value} index={0}>
        <CardProjet />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CardFormation />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <CardCompetence  />
      </TabPanel>
    </Box>
  );
};

export default Portfolio;
