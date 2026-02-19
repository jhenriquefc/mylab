import { useEffect, useState } from "react";
import Hero from "../components/Hero/Hero";
import Marquee from "../components/Marquee/Marquee";
import ProjectsGrid from "../components/ProjectsGrid/ProjectsGrid";
import SkillsMetrics from "../components/SkillsMetrics/SkillsMetrics";
import Timeline from "../components/Timeline/Timeline";
import SystemStatus from "../components/SystemStatus/SystemStatus";
import "./Home.css";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className={`home-wrapper ${isVisible ? "animate-in" : ""}`}>
      <Marquee />
      <SystemStatus />
      <Hero />
      <ProjectsGrid />
      <SkillsMetrics />
      <Timeline />
    </main>
  );
}