import "./Timeline.css";

export default function Timeline() {
  const experiences = [
    {
      id: 1,
      year: "2025 - Presente",
      role: "Desenvolvedor de Integração",
      company: "Lab2Dev",
      desc: "Consultor SAP CPI | Especialista em integrações, automação de processos e conectividade entre sistemas na nuvem.",
      skills: ["Groovy", "iFlows", "AMQP"]
    },
    {
      id: 2,
      year: "2024 - 2025",
      role: "Analista Comercial JR",
      company: "Confiantec",
      desc: "Responsável por otimizar fluxos internos e processos comerciais utilizando ERP próprio e SAP Ariba.",
      skills: ["SAP Ariba", "ERP", "Dashboards"]
    },
    {
      id: 3,
      year: "2020 - 2024",
      role: "Assistente de Operações / Processos",
      company: "Casa Carvalho ME",
      desc: "Suporte e implementação de notas fiscais eletrônicas e monitoramento de mensagens.",
      skills: ["ERP", "Excel", "XML"]
    }
  ];

  return (
    <section className="timeline-section">
      <div className="section-header">
        <span className="section-subtitle">Trajetória Profissional</span>
        <h2 className="section-title">Workflow de Carreira</h2>
      </div>

      <div className="timeline-container">
        {/* A linha central que guia o fluxo */}
        <div className="timeline-line"></div>

        {experiences.map((exp, index) => (
          <div key={exp.id} className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="exp-year">{exp.year}</span>
              <h3 className="exp-role">{exp.role}</h3>
              <h4 className="exp-company">{exp.company}</h4>
              <p className="exp-desc">{exp.desc}</p>
              <div className="exp-skills">
                {exp.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}