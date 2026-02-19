import { useEffect, useRef } from "react";

export default function FundoCircuito() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let particles = [];
    const PARTICLE_COUNT = 150; 
    let W = window.innerWidth;
    let H = window.innerHeight;

    canvas.width = W;
    canvas.height = H;

    // Cria partículas
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * W,
        y: Math.random() * H,
        size: Math.random() * 2 + 1, 
        speedX: (Math.random() - 0.5) * 0.8, 
        speedY: (Math.random() - 0.5) * 0.8,
        opacity: Math.random(),
      });
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);

      // 1. DESENHAR LINHAS
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 150) {
            ctx.strokeStyle = `rgba(0, 217, 255, ${0.2 * (1 - dist / 150)})`;            
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // 2. DESENHAR PARTÍCULAS
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        
        ctx.fillStyle = `rgba(0, 255, 166, ${p.opacity})`;
        ctx.fill();

        // Brilho nas partículas
        if (p.opacity > 0.8) {
          ctx.shadowBlur = 10;
          ctx.shadowColor = "#00ffa6";
        } else {
          ctx.shadowBlur = 0;
        }

        p.x += p.speedX;
        p.y += p.speedY;

        // Mantém dentro da tela
        if (p.x < 0 || p.x > W) p.speedX *= -1;
        if (p.y < 0 || p.y > H) p.speedY *= -1;

        // Piscando suave ;)
        if (Math.random() < 0.01) {
          p.opacity = Math.random() * 0.5 + 0.2;
        }
      });

      requestAnimationFrame(draw);
    }

    draw();

    const mouse = { x: 0, y: 0 };
    function handleMouseMove(e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      particles.forEach((p) => {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          const angle = Math.atan2(dy, dx);
          const force = (120 - dist) / 20;
          p.x += Math.cos(angle) * force;
          p.y += Math.sin(angle) * force;
          p.opacity = 1; 
        }
      });
    }

    window.addEventListener("mousemove", handleMouseMove);

    function handleResize() {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        width: "100%",
        height: "100%",
        background: "#020617", 
      }}
    />
  );
}