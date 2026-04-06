import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Componentes Globais
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import FundoCircuito from "./components/FundoCircuito"; 
import EcoBanner from "./components/EcoBanner/EcoBanner"; 
import ScrollToTop from "./components/ScrollToTop"; // <-- 1. Importe aqui

// Páginas
import Home from "./pages/Home"; 
import ContactPage from "./pages/ContactPage";
import About from "./pages/About";
import Projects from "./pages/Projects";

import "./App.css";

function App() {
  return (
    <Router>
      {/* 2. Coloque ele AQUI, dentro do Router, antes de tudo! */}
      <ScrollToTop />
      
      <div className="App">
        <FundoCircuito />
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<ContactPage />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/projetos" element={<Projects />} />
        </Routes>

        <EcoBanner />
        <Footer />
      </div>
    </Router>
  );
}

export default App;