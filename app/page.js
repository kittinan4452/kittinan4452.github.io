'use client';
import { useEffect } from 'react';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';

export default function Home() {
  useEffect(() => {
    const path = window.location.pathname;
    if (path && path !== '/') {
      const el = document.getElementById(path.substring(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        window.history.replaceState(null, null, '/');
      }
    }
  }, []);

  return (
    <main style={{ background: '#0d0d0d' }}>
      <Hero />
      <About />
      <Skills />
      <Projects />
    </main>
  );
}
