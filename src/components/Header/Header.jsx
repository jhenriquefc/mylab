import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="grid-bg"></div>

      <div className="header-content">
        {/* Agora a logo inteira é um link para a Home */}
        <Link to="/" className="logo-link">
          <h1 className="logo">
            MyLab <span>- By José Carvalho</span>
          </h1>
        </Link>

        <nav className="menu">
          <Link to="/">Home</Link>
          
          {/* Futuramente trocaremos por Link quando a página de projetos existir */}
          <a href="#">Projetos</a>
          
          <Link to="/sobre">Sobre</Link>
          
          <Link to="/contato">Contato</Link>
        </nav>
      </div>
    </header>
  );
}