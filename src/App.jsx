import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Landing from "./components/Landing/Landing";
import Footer from "./components/Footer"; 

// Home page with all sections
function HomePage() {
  return (
    <>
      <main style={{ paddingTop: '5rem', minHeight: '100vh' }}>
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="skills"><Skills /></section>
        <section id="contact"><Contact /></section>
        {/* <section id="blog"><Blog /></section> */}
      </main>
      <Footer />
    </>
  );
}

// Main App Component
function MainApp() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={
          <>
            <main style={{ flex: 1 }}>
              <About />
            </main>
            <Footer />
          </>
        } />
        <Route path="/projects" element={
          <>
            <main style={{ flex: 1 }}>
              <Projects />
            </main>
            <Footer />
          </>
        } />
        <Route path="/skills" element={
          <>
            <main style={{ flex: 1 }}>
              <Skills />
            </main>
            <Footer />
          </>
        } />
        <Route path="/contact" element={
          <>
            <main style={{ flex: 1 }}>
              <Contact />
            </main>
            <Footer />
          </>
        } />
        {/* <Route path="/blog" element={
          <>
            <main style={{ flex: 1 }}>
              <Blog />
            </main>
            <Footer />
          </>
        } /> */}
      </Routes>
    </div>
  );
}

// Root component with landing page
export default function App() {
  const [entered, setEntered] = useState(false);

  if (!entered) {
    return <Landing onEnter={() => setEntered(true)} />;
  }

  return <MainApp />;
}