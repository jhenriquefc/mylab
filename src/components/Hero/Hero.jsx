import Typewriter from "../Typewriter/Typewriter";
import "./Hero.css";

export default function Hero() {
  const techStrings = [
    "Integrações em Nuvem", 
    "interfaces de alto impacto", 
    "Automações de processos", 
    "Aplicativos escaláveis"
  ];

  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-tag">Disponível para novos projetos</span>
        <h2 className="hero-title">
          Desenvolvendo o futuro com <br />
          <Typewriter texts={techStrings} />
        </h2>
        <p className="hero-subtitle">
          Especialista em criar experiências digitais de alta performance e design inovador.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary">Ver Projetos</button>
        
          <a 
            href="/Curriculo Jose Carvalho - 2026.pdf" 
            download="Curriculo_Jose_Carvalho_2026.pdf"
            className="btn-secondary"
            style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}