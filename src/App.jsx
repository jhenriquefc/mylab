import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Componentes Globais (Ficam fora das Routes para aparecerem sempre)
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import FundoCircuito from "./components/FundoCircuito"; 

// Páginas (O conteúdo que muda conforme a URL)
import Home from "./pages/Home"; 
import ContactPage from "./pages/ContactPage";
import About from "./pages/About";

// CSS Global
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        {/* 1. O Fundo fica aqui para ser a base de tudo */}
        <FundoCircuito />

        {/* 2. O Header fica fixo no topo */}
        <Header />
        
        {/* 3. Aqui o React Router decide qual conteúdo exibir */}
        <Routes>
          {/* Página Inicial (Hero, Projetos, Timeline, etc) */}
          <Route path="/" element={<Home />} />
          
          {/* Página de Contato (Formulário JSON) */}
          <Route path="/contato" element={<ContactPage />} />

          {/* Página Sobre (Perfil e Hobbies) */}
          <Route path="/sobre" element={<About />} />
        </Routes>

        {/* 4. O Footer fica fixo no rodapé */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;