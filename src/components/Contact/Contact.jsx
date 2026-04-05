import { useRef, useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import emailjs from '@emailjs/browser';
import "./Contact.css";

export default function Contact() {
  const form = useRef();
  const location = useLocation(); 
  const [status, setStatus] = useState("SYSTEM_ENCRYPTED_CHANNEL");
  const [isVisible, setIsVisible] = useState(false);

  const [messageText, setMessageText] = useState("");
  const [serviceType, setServiceType] = useState("TECH_CONSULTANCY");

  useEffect(() => {
    setIsVisible(true); 

    if (location.state && location.state.requestedProject) {
      const projectName = location.state.requestedProject;
      
      setMessageText(`Olá! Gostaria de solicitar um orçamento baseado no projeto "${projectName}". Podemos conversar sobre os detalhes?`);
      
      const projectLower = projectName.toLowerCase();
      if (projectLower.includes("3d") || projectLower.includes("suporte") || projectLower.includes("case") || projectLower.includes("letreiro")) {
        setServiceType("3D_PROJECT");
      } else if (projectLower.includes("integração") || projectLower.includes("sap") || projectLower.includes("b2b")) {
        setServiceType("SAP_DEVELOPMENT");
      }
    }
  }, [location]);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("TRANSMITTING_DATA...");

    emailjs.sendForm(
      'service_ubcclqy',   
      'template_nmvs80v',  
      form.current, 
      'iTq66LJ95aGHDAPQd'    
    )
    .then(() => {
        setStatus("TRANSMISSION_SUCCESSFUL");
        form.current.reset();
        setMessageText(""); 
        setTimeout(() => setStatus("SYSTEM_ENCRYPTED_CHANNEL"), 5000);
    }, (error) => {
        setStatus("TRANSMISSION_ERROR");
        console.error(error.text);
    });
  };

  return (
    <section className="contact-portal">
      <div className={`portal-container ${isVisible ? "animate-in" : ""}`}>
        
        <div className="portal-header">
          <div className="connection-status">
            <span className={`pulse-dot ${status === "TRANSMISSION_SUCCESSFUL" ? "success" : ""}`}></span>
            {status}
          </div>
          <h2 className="portal-title">Precisando de algo? Entre em contato!</h2>
          <p className="portal-desc">Preencha os parâmetros para abrir um chamado técnico ou use um canal direto.</p>
        </div>

        {/* NOVA ESTRUTURA: DIVIDE A TELA EM 2 COLUNAS */}
        <div className="contact-layout">
          
          {/* COLUNA ESQUERDA: FORMULÁRIO */}
          <form ref={form} onSubmit={sendEmail} className="portal-form">
            <div className="input-group">
              <label>IDENT_SOURCE</label>
              <input type="text" name="user_name" placeholder="Seu nome completo" required />
            </div>

            <div className="input-row">
              <div className="input-group">
                <label>PROTOCOL_EMAIL</label>
                <input type="email" name="user_email" placeholder="email@empresa.com" required />
              </div>
              <div className="input-group">
                <label>SERVICE_SCOPE</label>
                <select 
                  name="service_type" 
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                >
                  <option value="3D_PROJECT">PROJETO 3D</option>
                  <option value="SAP_DEVELOPMENT">DESENVOLVIMENTO WEB</option>
                  <option value="TECH_CONSULTANCY">CONSULTORIA TÉCNICA</option>
                </select>
              </div>
            </div>

            <div className="input-group">
              <label>DATA_PAYLOAD (Sua mensagem)</label>
              <textarea 
                name="message" 
                placeholder="Descreva brevemente o projeto ou desafio técnico..." 
                required
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
              ></textarea>
            </div>

            <button type="submit" className="portal-button">
              {status === "TRANSMITTING_DATA..." ? "SENDING..." : "TRANSMIT_DATA"}
              <span className="btn-glitch"></span>
            </button>
          </form>

          {/* COLUNA DIREITA: PAINEL DE TELEMETRIA E CONTATOS */}
          <aside className="portal-info-panel">
            
            <div className="info-block">
              <h3>// CANAIS DIRETOS</h3>
              <ul className="info-links">
                <li>
                  <span className="info-label">WHATSAPP:</span>
                  {/* Coloque o 55 e seu DDD antes do número */}
                  <a href="https://wa.me/5511981795210" target="_blank" rel="noreferrer">/Whatsapp MyLab</a>
                </li>
                <li>
                  <span className="info-label">INSTAGRAM:</span>
                  <a href="https://instagram.com/mylab_br" target="_blank" rel="noreferrer">@mylab_br</a>
                </li>
                <li>
                  <span className="info-label">LINKEDIN:</span>
                  <a href="https://www.linkedin.com/in/jos%C3%A9-henrique-carvalho-6b1599372/" target="_blank" rel="noreferrer">/in/jose-henrique-carvalho</a>
                </li>
                <li>
                  <span className="info-label">GITHUB:</span>
                  <a href="https://github.com/jhenriquefc" target="_blank" rel="noreferrer">/jhenriquefc</a>
                </li>
                <li>
                  <span className="info-label">EMAIL_DIRETO:</span>
                  <a href="mailto:jotaahcarvalho@gmail.com">jotaahcarvalho@gmail.com</a>
                </li>
              </ul>
            </div>

            <div className="info-block terminal-block">
              <h3>// SYSTEM_LOGS</h3>
              <div className="fake-terminal">
                <p>&gt; Inicializando protocolos de rede...</p>
                <p>&gt; Módulos SAP BTP: <span className="status-online">[ONLINE]</span></p>
                <p>&gt; Reatores de Impressão 3D: <span className="status-heating">[AQUECENDO]</span></p>
                <p>&gt; Servidor React: <span className="status-online">[ESTÁVEL]</span></p>
                <p>&gt; Aguardando input do usuário...</p>
                <p className="blinking-cursor">_</p>
              </div>
            </div>

          </aside>
        </div>

      </div>
    </section>
  );
}