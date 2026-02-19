import "./ProjectsGrid.css";

export default function ProjectsGrid() {
  const projects = [
    {
      id: 1,
      title: "Integração E-commerce <> SAP S/4HANA",
      desc: "Fluxo automatizado de pedidos e estoque via SAP CPI com tratamento de erros em Groovy.",
      size: "large",
      tech: "SAP CPI | OData | S/4HANA",
      icon: "🌐"
    },
    {
      id: 2,
      title: "Monitor de APIs Cloud",
      desc: "Dashboard real-time para monitoramento de iFlows.",
      size: "small",
      tech: "ALM | DataDog | Fiori | CPI",
      icon: "📊"
    },
    {
      id: 3,
      title: "Otimização de Middleware",
      desc: "Redução no tempo de processamento de mensagens XML.",
      size: "small",
      tech: "Groovy | XML",
      icon: "⚡"
    },
    {
      id: 4,
      title: "Conector Fiscal Automático",
      desc: "Integração de notas fiscais eletrônicas com órgãos governamentais via Cloud Integration.",
      size: "medium",
      tech: "CPI | SOAP | SSL",
      icon: "🛡️"
    }
  ];

  return (
    <section className="projects-section">
      <div className="section-header">
        <span className="section-subtitle">Portfolio Tecnológico</span>
        <h2 className="section-title">Soluções de Integração</h2>
      </div>

      <div className="bento-grid">
        {projects.map((project) => (
          <div key={project.id} className={`bento-card ${project.size}`}>
            <div className="card-content">
              <div className="card-icon">{project.icon}</div>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className="card-tech">{project.tech}</div>
            </div>
            <div className="card-border-glow"></div>
          </div>
        ))}
      </div>
    </section>
  );
}