import { Link } from "react-router-dom";
import "../components/Projects/Projects.css";

export default function Projects() {
  const portfolioItems = [
    {  
      id: 1,
      title: "Infinity-Pegboard",
      category: "Impressão 3D",
      image: "/imagens/projeto-ikea-skadis.webp",
      description: "Modelo de Pegboard personalizado para organização de espaços de trabalho. Ganchos personalizados e design modular para máxima flexibilidade."
    },
    {
      id: 2,
      title: "Quadros Fotográficos Personalizados",
      category: "Arte em 3D (HueForge)",
      image: "/imagens/HUEFORGE_PERSONALIZADO.webp", 
      description: "Transforme suas fotos especiais em obras de arte texturizadas. Impressão 3D de alta precisão com camadas de cores misturadas, criando um efeito de pintura exclusivo."
    },
    {
      id: 3,
      title: "Miniaturas e Action Figures Custom",
      category: "Colecionáveis 3D",
      image: "/imagens/BONECO_CUSTOM_MYLAB.webp", 
      description: "Criação de personagens exclusivos, bustos e action figures. Impressão 3D de alta definição com acabamento técnico e pintura artesanal personalizada."
    },
    {
      id: 4,
      title: "Case Customizado para Raspberry Pi",
      category: "Impressão 3D",
      image: "/imagens/projeto-case.webp",
      description: "Case protetora com refrigeração otimizada e encaixe perfeito para painéis elétricos ou automação residencial."
    },
    {
      id: 5,
      title: "Letreiro Luminoso (LED + 3D)",
      category: "Prototipagem Mista",
      image: "/imagens/projeto-letreiro.webp",
      description: "Projeto combinando carcaça impressa em 3D com iluminação LED interna e controle via app."
    },
    {
      id: 6,
      title: "Suporte Articulado para Monitor",
      category: "Impressão 3D",
      image: "/imagens/projeto-suporte.webp", 
      description: "Design resistente impresso em PETG para setups de desenvolvedores e gamers. Alta durabilidade e customização de cores."
    }
  ];

  return (
    <main className="projects-page animate-in">
    <div className="projects-header">
        <span className="projects-subtitle">Showcase 3D</span>
        <h1 className="projects-title">Prototipagem & Peças Físicas</h1>
        <p className="projects-desc">Do conceito digital à peça final. Explore nossa galeria de soluções em impressão 3D, focada em prototipagem rápida, peças funcionais e designs exclusivos sob medida.</p>
      </div>

      <div className="gallery-grid">
        {portfolioItems.map((item) => (
          <div key={item.id} className="gallery-card">
            <div className="gallery-image">
              {/* O loading="lazy" ajuda a página a carregar rápido mesmo com muitas fotos */}
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="category-badge">{item.category}</div>
            </div>
            
            <div className="gallery-info">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              
              {/* A MÁGICA DA CONVERSÃO: Passando o nome do projeto pelo state */}
              <Link 
                to="/contato" 
                state={{ requestedProject: item.title }} 
                className="btn-quote"
              >
                Solicitar Orçamento
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}