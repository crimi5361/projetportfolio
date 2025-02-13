import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Background from "./components/Background";
import WelcomeScreen from "./pages/Welcome";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactPage from "./pages/ContactPage";
import Portfolio from "./pages/Portfolio";
import CardProjet from "./components/CardProjet";
import ProjectDetails from "./components/ProjectDetails";

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  const handleLoadingComplete = () => {
    setShowWelcome(false);
  };

  return (
    <Router> {/* ✅ Mettre Router au bon endroit */}
      {showWelcome ? (
        <WelcomeScreen onLoadingComplete={handleLoadingComplete} />
      ) : (
        <>
          <Navbar />
          <Background />
          {/* ✅ Sections avec des IDs */}
          <div id="Home">
            <Home />
          </div>
          <div id="About">
            <About />
          </div>
          <div id="Portfolio">
            <Portfolio />
          </div>
          <div id="Contact">
            <ContactPage />
          </div>
          
          {/* ✅ Toujours inclure les routes ici pour qu'elles soient accessibles */}
      <Routes>
      
      <Route path="/projects/:id" element={<ProjectDetails project={undefined} onClose={function (): void {
                throw new Error("Function not implemented.");
              } } />} />
      </Routes>
    
        </>
      )}
    </Router>
  );
}

export default App;
