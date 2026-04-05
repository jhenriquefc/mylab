import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="grid-bg"></div>

      <div className="header-content">
        <Link to="/" className="logo-link">
          <h1 className="logo">
            MyLab <span>- By José Carvalho</span>
          </h1>
        </Link>

        <nav className="menu">
          <Link to="/">Home</Link>
          
          <Link to="/projetos">Projetos</Link>
          
          <Link to="/sobre">Sobre</Link>
          
          <Link to="/contato">Contato</Link>
        </nav>
      </div>
    </header>
  );
}