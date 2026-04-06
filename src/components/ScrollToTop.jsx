import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation(); // Pega a URL atual

  useEffect(() => {
    // Toda vez que o pathname (a URL) mudar, rola para o topo (0, 0)
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Ele não renderiza nada na tela, fica invisível
}