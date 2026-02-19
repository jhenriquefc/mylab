import { useEffect, useState } from "react";
import "../components/About/About.css";


export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="about-page">
      <div className={`about-container ${isVisible ? "animate-in" : ""}`}>
        
        {/* LADO ESQUERDO: IMAGEM COM EFEITOS AVANÇADOS */}
        <div className="about-image-side">
          <div className="image-scanner">
            <div className="scan-line"></div>
            <img src="imagens/eu.jpg" alt="José Carvalho" className="profile-img" />
            <div className="image-overlay-dark"></div>
            <div className="corner-decor top-left"></div>
            <div className="corner-decor bottom-right"></div>
            <div className="tech-specs">
              <span>IMG_TYPE: JPEG</span>
              <span>RES: 1080P</span>
            </div>
          </div>
        </div>

        {/* LADO DIREITO: TEXTO COM REVEAL ANIMADO */}
        <div className="about-text-side">
          <div className="status-badge">
            <span className="pulse-mini"></span>
            IDENTITY_VERIFIED
          </div>
          
          <h1 className="about-title">José <span>Carvalho</span></h1>
          <h2 className="about-role">SAP Integration Specialist | React Developer</h2>
          
        <div className="about-description">
            <p>
              Sou um entusiasta de tecnologia apaixonado por transformar ideias criativas em soluções tangíveis. 
              Meu ecossistema de projetos vai muito além do código tradicional, abrangendo desde a construção de aplicativos e o desenvolvimento de interfaces modernas com <strong>React</strong>, até a arquitetura de sistemas.
            </p>
            <p>
              Quando não estou imerso no software, meu laboratório ganha vida com projetos de hardware, experimentações com eletrônica e prototipagem na minha <strong>impressora 3D</strong>. Acredito que a verdadeira inovação acontece exatamente na intersecção entre o desenvolvimento digital e o mundo físico.
            </p>
          </div>

          {/* CORE */}
          <div className="tech-dna-section">
            <h4 className="section-subtitle">CORE_CAPABILITIES</h4>
            <div className="dna-grid">
              <div className="dna-bar">
                <div className="dna-label">DEV_BACKEND</div>
                <div className="bar-bg"><div className="bar-fill" style={{width: '95%'}}></div></div>
              </div>
              <div className="dna-bar">
                <div className="dna-label"> AI_INTEGRATION</div>
                <div className="bar-bg"><div className="bar-fill" style={{width: '90%'}}></div></div>
              </div>
              <div className="dna-bar">
                <div className="dna-label">REACT_UI</div>
                <div className="bar-bg"><div className="bar-fill" style={{width: '85%'}}></div></div>
              </div>
            </div>
          </div>

          <div className="about-extras">
            <div className="extra-card">
              <span className="extra-label">OFF_DUTY_ACTIVITY: </span>
              <span className="extra-value">GYM & Game Dev</span>
            </div>
            <div className="extra-card social-link">
              <span className="extra-label">CONNECT_SIGNAL: </span>
              <a href="https://www.linkedin.com/in/jos%C3%A9-carvalho-6b1599372/" target="_blank" rel="noreferrer">
                LINKEDIN_STATION ↗
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}