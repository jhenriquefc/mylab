import "./ProjectsGrid.css";

export default function ProjectsGrid() {
  const solutions = [
    {
      id: 1,
      title: "Integração de Sistemas & Cloud",
      desc: "Arquitetura e desenvolvimento de integrações escaláveis. Experiência sólida em SAP Integration Suite (CPI) e transição de sistemas legados para a nuvem. Criação de fluxos robustos para alta disponibilidade de dados corporativos.",
      size: "large",
      techs: ["SAP CPI", "APIs REST", "OData", "Cloud Architecture"],
      icon: "🌐",
      type: "single",
      // Troque pelo nome exato da sua imagem na pasta public/imagens
      image: "/imagens/integracao-sap.png" 
    },
    {
      id: 2,
      title: "Desenvolvimento Web & Interfaces",
      desc: "Criação de sites, portfólios e aplicações web sob medida. Foco em performance, design focado em conversão e experiência de usuário (UX/UI).",
      size: "medium",
      techs: ["React", "Frontend", "UI/UX", "Python"],
      icon: "💻",
      type: "single",
      image: "/imagens/giftlitoral-site.png"
    },
    {
      id: 3,
      title: "Impressão 3D & Prototipagem",
      desc: "Transformando ideias em objetos físicos reais. Serviços de modelagem e impressão 3D sob demanda",
      size: "medium",
      techs: ["Modelagem 3D", "Impressão FDM", "Prototipagem"],
      icon: "🖨️",
      type: "grid",
      // Coloque o nome das 4 imagens diferentes da impressora/peças
      images: [
        "/imagens/3d-peca1.jpeg",
        "/imagens/3d-peca2.jpeg",
        "/imagens/3d-peca5.jpeg",
        "/imagens/3d-peca4.jpeg"
      ]
    }
  ];

  return (
    <section className="projects-section">
      <div className="section-header">
        <span className="section-subtitle">O Ecossistema MyLab</span>
        <h2 className="section-title">Soluções & Serviços</h2>
      </div>

      <div className="bento-grid">
        {solutions.map((solution) => (
          <div key={solution.id} className={`bento-card ${solution.size}`}>
            
            {/* RENDERIZAÇÃO DAS IMAGENS */}
            {solution.type === "single" ? (
              <div className="card-image-single">
                <img src={solution.image} alt={solution.title} loading="lazy" />
              </div>
            ) : (
              <div className="card-image-grid">
                {solution.images.map((imgUrl, index) => (
                  <div key={index} className="grid-img-wrapper">
                    <img src={imgUrl} alt={`Amostra 3D ${index + 1}`} loading="lazy" />
                  </div>
                ))}
              </div>
            )}

            {/* CONTEÚDO DE TEXTO */}
            <div className="card-content">
              <div className="card-header">
                <div className="card-icon">{solution.icon}</div>
                <h3>{solution.title}</h3>
              </div>
              <p>{solution.desc}</p>
              
              <div className="tech-tags">
                {solution.techs.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="card-border-glow"></div>
          </div>
        ))}
      </div>
    </section>
  );
}