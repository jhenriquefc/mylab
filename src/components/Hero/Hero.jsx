import { Link } from "react-router-dom";
import Typewriter from "../Typewriter/Typewriter";
import "./Hero.css";

export default function Hero() {
  // Strings totalmente focadas no ecossistema 3D e Sustentabilidade
  const techStrings = [
    "Impressão 3D de Precisão.", 
    "Manufatura Sustentável.", 
    "Prototipagem de Produtos.", 
    "Engenharia em Bioplástico."
  ];

  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-tag">
          <span className="live-dot"></span> MYLAB_MAKER // ONLINE
        </span>
        
        <h1 className="hero-title">
          Soluções avançadas em <br />
          <Typewriter texts={techStrings} />
        </h1>
        
        <p className="hero-subtitle">
          Transformando ideias digitais em realidade tangível. Prototipagem e produção 
          de peças físicas com foco em alta resistência e responsabilidade ambiental.
        </p>
        
        <div className="hero-buttons">
          {/* BOTÃO 1: Foco em Vendas/Contato */}
          <Link to="/contato" className="btn-primary">
            &gt; Iniciar Projeto_
          </Link>
          
          {/* BOTÃO 2: Foco em Portfólio  */}
          <Link to="/projetos" className="btn-secondary">
            Explorar Showcase 3D
          </Link>
        
          {/* BOTÃO 3: Foco em Carreira/Recrutamento */}
          <a 
            href="/Curriculo Jose Carvalho - 2026.pdf" 
            download="Curriculo_Jose_Carvalho_2026.pdf"
            className="btn-tertiary"
          >
            [ Download CV ]
          </a>
        </div>
      </div>
    </section>
  );
}