import { useEffect, useRef } from "react";

export default function FundoCircuito() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let W = window.innerWidth;
    let H = window.innerHeight;

    canvas.width = W;
    canvas.height = H;

    // V2.1: Opacidade reduzida drasticamente (0.05 - 0.07) para virar marca d'água
    const gears = [
      { x: W * 0.1, y: H * 0.1, radius: 150, teeth: 16, speed: 0.002, angle: 0, color: "rgba(0, 255, 166, 0.07)" },
      { x: W * 0.9, y: H * 0.2, radius: 250, teeth: 24, speed: -0.0015, angle: 0.5, color: "rgba(0, 217, 255, 0.05)" },
      { x: W * 0.8, y: H * 0.9, radius: 180, teeth: 20, speed: 0.003, angle: 0, color: "rgba(0, 255, 166, 0.07)" },
      { x: W * 0.15, y: H * 0.85, radius: 220, teeth: 22, speed: -0.001, angle: 1, color: "rgba(0, 217, 255, 0.05)" },
      // Engrenagem central (fundo muito sutil)
      { x: W * 0.5, y: H * 0.5, radius: 400, teeth: 36, speed: 0.0008, angle: 0, color: "rgba(255, 255, 255, 0.02)" },
    ];

    function drawGear(x, y, radius, teeth, angle, color) {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      
      const innerRadius = radius * 0.85;
      const holeRadius = radius * 0.4;
      
      // Linhas finas e elegantes
      ctx.strokeStyle = color;
      ctx.lineWidth = 1; 
      ctx.lineJoin = "round";
      
      // 1. DESENHO DOS DENTES
      ctx.beginPath();
      for (let i = 0; i < teeth; i++) {
        const a0 = (i / teeth) * Math.PI * 2;
        const a1 = ((i + 0.2) / teeth) * Math.PI * 2;
        const a2 = ((i + 0.5) / teeth) * Math.PI * 2;
        const a3 = ((i + 0.7) / teeth) * Math.PI * 2;

        if (i === 0) ctx.moveTo(Math.cos(a0) * innerRadius, Math.sin(a0) * innerRadius);
        else ctx.lineTo(Math.cos(a0) * innerRadius, Math.sin(a0) * innerRadius);

        ctx.lineTo(Math.cos(a1) * radius, Math.sin(a1) * radius);
        ctx.lineTo(Math.cos(a2) * radius, Math.sin(a2) * radius);
        ctx.lineTo(Math.cos(a3) * innerRadius, Math.sin(a3) * innerRadius);
      }
      ctx.closePath();
      ctx.stroke();

      // 2. EIXO CENTRAL (Círculo interno)
      ctx.beginPath();
      ctx.arc(0, 0, holeRadius, 0, Math.PI * 2);
      ctx.stroke();

      // 3. RAIOS DE SUSTENTAÇÃO
      ctx.beginPath();
      for (let i = 0; i < 5; i++) {
        const a = (i / 5) * Math.PI * 2;
        ctx.moveTo(Math.cos(a) * holeRadius, Math.sin(a) * holeRadius);
        ctx.lineTo(Math.cos(a) * innerRadius, Math.sin(a) * innerRadius);
      }
      ctx.stroke();

      // 4. Linha Guia Tracejada (Muito fina e sutil)
      ctx.beginPath();
      ctx.setLineDash([4, 8]); 
      ctx.lineWidth = 0.5; // Metade da espessura para não poluir
      ctx.arc(0, 0, radius * 0.92, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]); 

      // 5. Mira/Eixo Central (Crosshair)
      ctx.beginPath();
      ctx.lineWidth = 1;
      const crossSize = holeRadius * 0.4;
      ctx.moveTo(-crossSize, 0);
      ctx.lineTo(crossSize, 0);
      ctx.moveTo(0, -crossSize);
      ctx.lineTo(0, crossSize);
      ctx.stroke();

      ctx.restore();
    }

    // Loop de Animação
    function animate() {
      ctx.clearRect(0, 0, W, H);

      gears.forEach(gear => {
        gear.angle += gear.speed;
        drawGear(gear.x, gear.y, gear.radius, gear.teeth, gear.angle, gear.color);
      });

      requestAnimationFrame(animate);
    }

    animate();

    function handleResize() {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;
      
      gears[0].x = W * 0.1;  gears[0].y = H * 0.1;
      gears[1].x = W * 0.9;  gears[1].y = H * 0.2;
      gears[2].x = W * 0.8;  gears[2].y = H * 0.9;
      gears[3].x = W * 0.15; gears[3].y = H * 0.85;
      gears[4].x = W * 0.5;  gears[4].y = H * 0.5;
    }
    window.addEventListener("resize", handleResize);

    return () => {
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
        width: "100vw",
        height: "100vh",
        background: "#020617",
        pointerEvents: "none"
      }}
    />
  );
}