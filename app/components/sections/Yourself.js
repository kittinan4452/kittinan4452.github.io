'use client';
import { Download, ChevronsDown, Sparkles } from 'lucide-react';
import Imageprofile from "../ui/Imageprofire";
import { useState, useEffect } from 'react';

export default function Yourself() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div id="contentinfo" className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center justify-center p-8 font-Kode_Mono text-white overflow-hidden interactive-bg particles-bg">

            {/* Floating decorative elements */}
            <div className="absolute top-20 left-20 w-32 h-32 bg-red-500/10 rounded-full blur-xl animate-float"></div>
            <div className="absolute bottom-20 right-20 w-48 h-48 bg-pink-500/10 rounded-full blur-xl animate-float" style={{ animationDelay: '3s' }}></div>
            <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-orange-500/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1.5s' }}></div>

            {/* Profile Section with Glassmorphism */}
            <div className="mb-12 flex justify-center opacity-0 animate-fade-in-scale relative z-10" style={{ animationDelay: '0.2s' }}>
                <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-red-600 to-pink-600 rounded-full opacity-75 blur-lg group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                    <div className="relative glass-morphism-dark p-8 rounded-full border border-white/10 hover-lift">
                        <Imageprofile />
                    </div>
                    <div className="absolute -top-2 -right-2">
                        <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
                    </div>
                </div>
            </div>

            <div className="max-w-4xl w-full text-center space-y-8 relative z-10">

                {/* Modern Typography with Animated Gradient */}
                <h1 className="text-4xl font-light opacity-0 animate-text-reveal" style={{ animationDelay: '0.6s' }}>
                    <span className="text-xl block mb-2 text-red-400 font-bold tracking-widest uppercase letter-spacing-2">
                        Hello, I'm
                    </span>
                    <span className="text-6xl md:text-7xl lg:text-8xl font-extrabold block gradient-animated-strong text-transparent bg-clip-text leading-tight"
                      style={{
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        textFillColor: 'transparent'
                      }}>
                        KITTINAN KUNNAHONG
                    </span>
                </h1>

                <h2 className="text-2xl md:text-3xl font-medium tracking-wide max-md:text-xl text-gray-300 opacity-0 animate-text-reveal" style={{ animationDelay: '0.8s' }}>
                    Passionate <span className="font-bold gradient-text-red text-transparent bg-clip-text">Computer Engineer</span>
                </h2>

                {/* Enhanced Description Card */}
                <div className="glass-morphism p-8 rounded-2xl max-w-2xl mx-auto opacity-0 animate-card-entrance" style={{ animationDelay: '1.0s' }}>
                    <p className="text-lg md:text-xl leading-relaxed text-gray-200">
                        I'm a recent graduate from <span className="font-bold text-red-400">Khon Kaen University</span>, specializing in Computer Engineering. I'm passionate about applying my knowledge to drive company success and constantly seeking opportunities to learn new technologies alongside dynamic teams.
                    </p>
                </div>

                {/* Modern Call-to-Action Button */}
                <div className="opacity-0 animate-text-reveal" style={{ animationDelay: '1.2s' }}>
                    <a
                        href="/image/resume_kittinan.pdf"
                        download="resume_kittinan.pdf"
                        className="group magnetic-btn relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 text-white font-bold rounded-full hover-lift glow-red-hover transform transition-all duration-300 text-lg shadow-2xl hover:shadow-red-500/50"
                    >
                        <span className="relative z-10 flex items-center gap-3">
                            <Download className="w-5 h-5 group-hover:animate-bounce" />
                            <span>Download Resume</span>
                            <Sparkles className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </span>
                    </a>

                    {/* Button Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-pink-600 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300 -z-10"></div>
                </div>

            </div>

            {/* Modern Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-bounce" style={{ animationDelay: '2s' }}>
                <div className="flex flex-col items-center gap-2">
                    <span className="text-sm text-gray-400 font-medium">Scroll</span>
                    <ChevronsDown className="w-6 h-6 text-red-400 animate-pulse" />
                </div>
            </div>

            {/* Interactive Mouse Follower Effect (Optional) */}
            <div
                className="pointer-events-none fixed w-6 h-6 bg-red-500/20 rounded-full blur-sm transition-transform duration-100 ease-out z-50"
                style={{
                    transform: `translate(${mousePosition.x - 12}px, ${mousePosition.y - 12}px)`,
                }}
            />
        </div>
    );
}