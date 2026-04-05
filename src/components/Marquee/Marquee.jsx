import "./Marquee.css";

export default function Marquee() {

  const technologies = [
    { name: "Integração de Sistemas", special: true }, 
    { name: "Criação de Sites / React", special: false },
    { name: "Impressão 3D Sob Demanda", special: true }, // Focado no serviço direto
    { name: "Automação de Processos", special: false }, // Pode ser tanto Python quanto integrações
    { name: "Prototipagem e Modelagem", special: false },
    { name: "SAP Cloud Platform", special: true }, 
    { name: "Soluções Web e Físicas", special: false }, // Une os dois mundos
    { name: "APIs & Webhooks", special: false }
  ];

  // Duplicar a lista para loop infinito
  const listItems = [...technologies, ...technologies];

  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {listItems.map((tech, index) => (
          <div key={index} className={`marquee-item ${tech.special ? "special-tech" : ""}`}>
            <span className="tech-name">{tech.name}</span>
            <span className="tech-dot">•</span>
          </div>
        ))}
      </div>
      
      <div className="marquee-fade-left"></div>
      <div className="marquee-fade-right"></div>
    </div>
  );
}