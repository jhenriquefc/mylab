import { Link } from "react-router-dom";
import Typewriter from "../Typewriter/Typewriter";
import "./Hero.css";

export default function Hero() {
  const techStrings = [
    "Integrações em Nuvem", 
    "Interfaces Web Inovadoras", 
    "Automações de processos", 
    "Aplicativos escaláveis",
    "Soluções em 3D"
  ];

  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-tag">Arquiteto de Soluções</span>
        <h2 className="hero-title">
          Desenvolvendo o futuro com <br />
          <Typewriter texts={techStrings} />
        </h2>
        <p className="hero-subtitle">
          Especialista em criar experiências digitais de alta performance e design inovador.
        </p>
        
        <div className="hero-buttons">
          {/* BOTÃO 1: Foco em Vendas/Contato */}
          <Link to="/contato" className="btn-primary">
            Solicitar Demanda
          </Link>
          
          {/* BOTÃO 2: Foco em Portfólio  */}
          <Link to="/projetos" className="btn-secondary">
            Ver Projetos 3D
          </Link>
        
          {/* BOTÃO 3: Foco em Carreira/Recrutamento */}
          <a 
            href="/Curriculo Jose Carvalho - 2026.pdf" 
            download="Curriculo_Jose_Carvalho_2026.pdf"
            className="btn-tertiary"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}