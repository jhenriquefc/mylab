import { useRef, useState, useEffect } from 'react'; // 1. Adicionado useEffect
import emailjs from '@emailjs/browser';
import "./Contact.css";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("SYSTEM_ENCRYPTED_CHANNEL");
  const [isVisible, setIsVisible] = useState(false); // 2. Estado para animação

  useEffect(() => {
    setIsVisible(true); // 3. Dispara a animação ao montar
  }, []);

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
        setTimeout(() => setStatus("SYSTEM_ENCRYPTED_CHANNEL"), 5000);
    }, (error) => {
        setStatus("TRANSMISSION_ERROR");
        console.error(error.text);
    });
  };

  return (
    <section className="contact-portal">
      {/* 4. Aplicada a classe dinâmica animate-in */}
      <div className={`portal-container ${isVisible ? "animate-in" : ""}`}>
        <div className="portal-header">
          <div className="connection-status">
            <span className={`pulse-dot ${status === "TRANSMISSION_SUCCESSFUL" ? "success" : ""}`}></span>
            {status}
          </div>
          <h2 className="portal-title">Precisando de algo? Entre em contato!</h2>
          <p className="portal-desc">Preencha os parâmetros para abrir um chamado técnico.</p>
        </div>

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
              <select name="service_type">
                <option>3D_PROJECT</option>
                <option>SAP_DEVELOPMENT</option>
                <option>TECH_CONSULTANCY</option>
              </select>
            </div>
          </div>

          <div className="input-group">
            <label>DATA_PAYLOAD (Sua mensagem)</label>
            <textarea name="message" placeholder="Descreva brevemente o projeto ou desafio técnico..." required></textarea>
          </div>

          <button type="submit" className="portal-button">
            {status === "TRANSMITTING_DATA..." ? "SENDING..." : "TRANSMIT_DATA"}
            <span className="btn-glitch"></span>
          </button>
        </form>
      </div>
    </section>
  );
}