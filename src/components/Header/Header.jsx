import { Link, NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="grid-bg"></div>

      <div className="header-content">
        {/* A logo continua usando Link normal para sempre voltar pra Home */}
        <Link to="/" className="logo-link">
          <h1 className="logo">
            MyLab <span className="logo-badge">// Portfolio</span>
          </h1>
        </Link>

        <nav className="menu">
          {/* NavLink sabe automaticamente quando está ativo */}
          <NavLink to="/">Home</NavLink>
          
          <NavLink to="/projetos">Projetos 3D</NavLink>
          
          <NavLink to="/sobre">Sobre</NavLink>
          
          <NavLink to="/contato">Contato</NavLink>
        </nav>
      </div>
    </header>
  );
}