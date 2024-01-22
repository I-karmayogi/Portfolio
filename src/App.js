import React from "react";
import './App.css';
import About from "./components/About";
import Contact from "./components/ContactForm";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import SkillsSection from "./components/SkillsSection";
import ProfileCard from "./components/ProfileCard";
import ProjectsSection from "./components/Projects";
import ContactForm from "./components/ContactForm";

export default function App() {
    return (
      <div>
      <header class="header">
        {/* Navbar Component */}
        <Navbar />
      </header>

      <main class="flex flex-col p-5" style={{ zIndex: '-1'}}>
        {/* ProfileCard Component */}
        <ProfileCard />

        {/* ProjectsSection Component */}
        <div class="mt-8 projectSection">
          <ProjectsSection />
        </div>
        <div class="mt-8 skillSection">
          <SkillsSection/>
        </div>
        <div class="mt-8 skillSection">
          <ContactForm />  
        </div>
      </main>
    </div>
    );
}
