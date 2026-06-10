'use client';
import { useState, useEffect } from 'react';
import { Home, Code, Layers, Briefcase, Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const menuItems = [
  { id: 'contentinfo', label: 'Home', icon: <Home className="w-4 h-4" /> },
  { id: 'about', label: 'About', icon: <Layers className="w-4 h-4" /> },
  { id: 'skills', label: 'Skills', icon: <Code className="w-4 h-4" /> },
  { id: 'experiences', label: 'Projects', icon: <Briefcase className="w-4 h-4" /> },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('contentinfo');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active section detection
  useEffect(() => {
    const ids = menuItems.map((m) => m.id);
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.4 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((obs) => obs?.disconnect());
  }, []);

  // Handle hash/path on initial load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
        window.history.replaceState(null, null, '/');
      }
    }
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
    window.history.replaceState(null, null, '/');
  };

  return (
    <nav>
      <div
        className="fixed w-full z-50 top-0 left-0 transition-all duration-300"
        style={
          scrolled
            ? { background: 'var(--nav-bg)', backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--nav-border)' }
            : { background: 'transparent' }
        }
      >
        <div className="flex items-center justify-between mx-auto px-6 py-4 max-w-screen-xl">
          {/* Logo */}
          <button onClick={() => scrollTo('contentinfo')} className="group">
            <div className="flex items-center">
              <span className="font-mono text-xl font-bold text-red-500">{'<'}</span>
              <span className="font-mono text-xl font-bold text-red-500 mx-1">Tii</span>
              <span className="font-mono text-xl font-bold max-md:hidden" style={{ color: 'var(--text-2)' }}>
                Kittinan
              </span>
              <span className="font-mono text-xl font-bold text-red-500 ml-1">{'/>'}</span>
            </div>
          </button>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="relative flex items-center gap-2 px-4 py-2 font-mono text-sm rounded-lg transition-all duration-200"
                    style={{ color: isActive ? 'var(--text-1)' : 'var(--text-3)' }}
                    onMouseEnter={(e) => {
                      if (!isActive) e.currentTarget.style.color = 'var(--text-1)';
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) e.currentTarget.style.color = 'var(--text-3)';
                    }}
                  >
                    <span style={{ color: isActive ? '#ef4444' : 'inherit' }}>{item.icon}</span>
                    {item.label}
                    {isActive && (
                      <span
                        className="absolute -bottom-0.5 left-4 right-4 h-px rounded-full"
                        style={{ background: '#ef4444' }}
                      />
                    )}
                  </button>
                </li>
              );
            })}

            {/* Theme toggle */}
            <li>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg transition-colors"
                style={{ color: 'var(--text-3)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--bg-card-hover)';
                  e.currentTarget.style.color = 'var(--text-1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = 'var(--text-3)';
                }}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            </li>
          </ul>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            style={{ color: 'var(--text-3)' }}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className="md:hidden overflow-hidden transition-all duration-300"
          style={{ maxHeight: isMenuOpen ? '320px' : '0', opacity: isMenuOpen ? 1 : 0 }}
        >
          <ul
            className="px-6 py-4 space-y-1"
            style={{ borderTop: '1px solid var(--nav-border)', background: 'var(--nav-bg)', backdropFilter: 'blur(12px)' }}
          >
            {menuItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg font-mono text-sm w-full text-left transition-all duration-200"
                    style={{
                      color: isActive ? 'var(--text-1)' : 'var(--text-3)',
                      background: isActive ? 'rgba(220,38,38,0.08)' : 'transparent',
                    }}
                  >
                    <span style={{ color: '#ef4444' }}>{item.icon}</span>
                    {item.label}
                    {isActive && (
                      <span
                        className="ml-auto w-1.5 h-1.5 rounded-full"
                        style={{ background: '#ef4444' }}
                      />
                    )}
                  </button>
                </li>
              );
            })}
            <li>
              <button
                onClick={toggleTheme}
                className="flex items-center gap-3 px-4 py-3 rounded-lg font-mono text-sm w-full text-left"
                style={{ color: 'var(--text-3)' }}
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
