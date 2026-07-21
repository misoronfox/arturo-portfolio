
import "../styles/global.css"
import { NavBar } from "../components/engineer/nav/NavBar";
import { Hero } from "../components/engineer/hero/Hero";
import { PageSpine } from "../components/engineer/layout/PageSpine";
import { PrinciplesSection } from "../components/engineer/about/PrinciplesSection";
import { SkillsSection } from "../components/engineer/skills/SkillsSection";
import { ProjectsSection } from "../components/engineer/projects/ProjectsSection";
import { ContactSection } from "../components/engineer/contact/ContactSection";
import { Footer } from "../components/engineer/contact/Footer";
export default function Landing(){
  return (
    <div style={{ background: "var(--bg)" }}>
      <NavBar />
      <Hero />
      <main style={{ position: "relative" }}>
        <PageSpine />
        <PrinciplesSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
