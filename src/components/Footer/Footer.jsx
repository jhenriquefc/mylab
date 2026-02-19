import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="sap-footer">
      <div className="status-bar">
        <div className="status-left">
          <div className="status-item">
            <span className="dot pulse"></span>
            SYSTEM: <span className="highlight">MY_PROD</span>
          </div>
          <div className="status-item">
            MODE: <span className="highlight">AI_DEVELOPER</span>
          </div>
          <div className="status-item hide-mobile">
            LOC: <span className="highlight">BRAZIL</span>
          </div>
        </div>

        <div className="status-right">
          <div className="status-item">
            <a href="https://www.linkedin.com/in/jos%C3%A9-carvalho-6b1599372/" target="_blank" rel="noreferrer">LINKEDIN</a>
          </div>
          <div className="status-item">
            <a href="https://github.com" target="_blank" rel="noreferrer">GITHUB</a>
          </div>
          <div className="status-item version">
            V.2.0.6
          </div>
        </div>
      </div>
      
      <div className="footer-credits">
        <p>© {currentYear} // DESENVOLVIDO POR JOSÉ CARVALHO // DEV SPECIALIST</p>
      </div>
    </footer>
  );
}