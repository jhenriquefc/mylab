import "./SkillsMetrics.css";

export default function SkillsMetrics() {
  const skills = [
    { name: "SAP CPI / Cloud Integration", level: "98%", status: "OPTIMIZED" },
    { name: "Script", level: "93%", status: "STABLE" },
    { name: "Backend", level: "82%", status: "RUNNING" },
    { name: "React.js / Frontend", level: "89%", status: "ACTIVE" },
    { name: "API Management", level: "85%", status: "STABLE" }
  ];

  return (
    <section className="skills-metrics">
      <div className="section-header">
        <span className="section-subtitle">System Health</span>
        <h2 className="section-title">Core Competencies</h2>
      </div>

      <div className="metrics-grid">
        {skills.map((skill, index) => (
          <div key={index} className="metric-card">
            <div className="metric-info">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-status">{skill.status}</span>
            </div>
            <div className="progress-container">
              <div className="progress-bar" style={{ width: skill.level }}></div>
            </div>
            <div className="metric-footer">
              <span className="skill-percentage">{skill.level}</span>
              <span className="skill-uptime">UPTIME: 99.9%</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}