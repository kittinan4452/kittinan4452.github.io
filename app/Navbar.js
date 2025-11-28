'use client';
import { useState, useEffect } from "react";
// นำเข้า Icon จาก Lucide แทนการใช้ Emoji ใน Desktop (ถ้าต้องการ)
import { Home, Code, Zap, Mail, Menu, X, User, Wrench } from 'lucide-react'; 

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

 const handleScrollToSection = (id) => {
    // ลบเครื่องหมาย # ออกจาก id
    const targetId = id.replace('#', ''); 
    const element = document.getElementById(targetId);
    
    if (element) {
        // ใช้ scrollIntoView เพื่อเลื่อนไปยัง Section นั้นๆ
        element.scrollIntoView({ behavior: 'smooth' });
    }
    // ปิดเมนูหลังจากคลิก (สำหรับ mobile)
    setIsMenuOpen(false);
    
    // 🚨 ป้องกันไม่ให้ URL เปลี่ยนแปลง (ไม่ใส่ #)
    if (window.history && window.history.pushState) {
        window.history.pushState(null, null, `/${targetId}`); 
    } else {
        window.location.hash = targetId; // Fallback
    }
};

const menuItems = [
    { href: "contentinfo", label: "Home", icon: <Home className="w-4 h-4" /> }, 
    { href: "about", label: "About Me", icon: <User className="w-4 h-4" /> },
    { href: "skills", label: "Skills", icon: <Code className="w-4 h-4" /> }, 
    { href: "experiences", label: "Experiences", icon: <Zap className="w-4 h-4" /> },
    { href: "contact", label: "Contact", icon: <Mail className="w-4 h-4" /> }
];

  return (
    <nav className="fixed w-full z-50 top-0 left-0 transition-all duration-300">
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-black/80 backdrop-blur-md border-b border-red-600/20 shadow-lg shadow-red-600/5"
            : "bg-transparent backdrop-blur-sm"
        }`}
      >
        <div className="flex items-center justify-between mx-auto px-6 py-4 max-w-7xl">
          
          {/* Logo */}
          <a onClick={() => handleScrollToSection(item.href)}  className="group relative">
            <div className="flex items-center">
              <span className="font-mono text-3xl font-bold text-red-600 group-hover:text-red-500 transition-colors duration-300">
                {"<"}
              </span>
              <h1 className="font-mono text-3xl font-bold text-red-600 group-hover:text-red-500 transition-colors duration-300 mx-1">
                Tii
              </h1>
              <span className="font-mono text-3xl font-bold text-white group-hover:text-gray-300 transition-colors duration-300">
                -Kittinan
              </span>
              <span className="font-mono text-3xl font-bold text-red-600 group-hover:text-red-500 transition-colors duration-300 ml-1">
                {"/"}
              </span>
              <span className="font-mono text-3xl font-bold text-red-600 group-hover:text-red-500 transition-colors duration-300">
                {">"}
              </span>
            </div>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-red-400 group-hover:w-full transition-all duration-300"></div>
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-1">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  onClick={() => handleScrollToSection(item.href)}
                  // 🚨 ปรับปรุง: ใช้ Flexbox ภายใน A tag โดยตรง
                  className="flex items-center gap-2 relative px-4 py-2 font-mono text-sm text-gray-300 hover:text-red-400 transition-colors duration-300 group hover:bg-red-600/10 rounded"
                >
                  <span className="text-red-500 group-hover:text-red-400 transition-colors duration-300">
                    {item.icon}
                  </span>
                  <span className="relative z-10">
                    {item.label}
                  </span>
                  {/* ลบคลาสที่ Comment ไว้เพื่อความกระชับ */}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden relative w-10 h-10 text-white focus:outline-none group"
            aria-label="Toggle menu"
          >
            <div className="absolute inset-0 rounded border border-red-600/30 group-hover:border-red-600 transition-colors duration-300"></div>
            <div className="absolute inset-0 flex items-center justify-center">
                {/* ใช้ Menu/X Icon แทน Hamburger Bars เพื่อความทันสมัย */}
                <span className={`transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}>
                    <Menu className="w-6 h-6 text-red-600" />
                </span>
                <span className={`absolute transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}>
                    <X className="w-6 h-6 text-red-600" />
                </span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="px-6 py-4 space-y-2 border-t border-red-600/20 bg-black/70 backdrop-blur-sm"> {/* ปรับ background ให้เข้มขึ้นนิดหน่อย */}
            {menuItems.map((item, index) => (
              <li
                key={index}
                // 🚨 ปรับปรุง: เพิ่ม transform สำหรับ animation การเปิด/ปิดเมนู
                className={`transform transition-all duration-300 ${isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}
                style={{
                  transitionDelay: isMenuOpen ? `${index * 50}ms` : "0ms"
                }}
              >
                <a
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 font-mono text-sm text-gray-300 hover:text-white hover:bg-red-600/10 rounded border border-transparent hover:border-red-600/30 transition-all duration-300 group"
                >
                  <span className="text-lg text-red-500">{item.icon}</span>
                  <span className="flex-1">{item.label}</span>
                  <svg
                    className="w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300 text-red-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}