import { Link } from "react-router-dom";
import "./ProjectsGrid.css";

export default function ProjectsGrid() {
  const solutions = [
    {
      id: 1,
      title: "Prototipagem & 3D",
      desc: "Materializamos ideias. Produção de peças técnicas, cases, suportes e acessórios em bioplástico com precisão milimétrica.",
      size: "large",
      techs: ["PETG Reciclável", "PLA Premium", "Modelagem 3D"],
      icon: "🖨️",
      type: "grid",
      linkTo: "/projetos",
      images: [
        "/imagens/3d-peca1.jpeg",
        "/imagens/3d-peca2.jpeg",
        "/imagens/3d-peca5.jpeg",
        "/imagens/3d-peca4.jpeg"
      ]
    },
    {
      id: 2,
      title: "Desenvolvimento Web",
      desc: "Sites performáticos e aplicações sob medida. Focamos em design responsivo e experiência de usuário para destacar o seu negócio na internet.",
      size: "medium",
      techs: ["React", "E-commerce", "UX/UI"],
      icon: "💻",
      type: "single",
      // Sugestão: Uma foto de um site rodando em um monitor ou notebook
      image: "/imagens/giftlitoral-site.png" 
    },
    {
      id: 3,
      title: "Engenharia & Hardware",
      desc: "Soluções práticas para o seu setup. Automações locais, consertos e adaptações de peças eletrônicas para equipamentos e ferramentas.",
      size: "medium",
      techs: ["Eletrônica", "Projetos Físicos", "Automação"],
      icon: "⚙️",
      type: "single",
      // Sugestão: Uma foto da sua mesa de trabalho, com solda ou fios, ou algo da sua loja
      image: "/imagens/hardware-setup.jpeg"
    }
  ];

  return (
    <section className="projects-section">
      <div className="section-header">
        <span className="section-subtitle">O Ecossistema MyLab</span>
        <h2 className="section-title">Soluções & Serviços</h2>
      </div>

      <div className="bento-grid">
        {solutions.map((solution) => {
          const CardWrapper = solution.linkTo ? Link : 'div';
          
          return (
            <CardWrapper 
              to={solution.linkTo} 
              key={solution.id} 
              className={`bento-card ${solution.size} ${solution.linkTo ? 'clickable-card' : ''}`}
            >
              
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
            </CardWrapper>
          );
        })}
      </div>
    </section>
  );
}