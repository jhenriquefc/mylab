import "./Marquee.css";

export default function Marquee() {
  // Lista focada em SAP Cloud
  const technologies = [
  { name: "Full Stack Development", special: true },
    { name: "SAP Integration Suite", special: false },
    { name: "Node.js / React", special: false },
    { name: "Cloud Native Apps", special: true },
    { name: "Cybersecurity", special: false },
    { name: "Database Management", special: false },
    { name: "DevOps & CI/CD", special: true },
    { name: "Scalable Systems", special: false },
    { name: "Rest / OData", special: false }
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