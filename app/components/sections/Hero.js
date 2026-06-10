'use client';
import { Download, Github, Mail, ChevronDown } from 'lucide-react';
import ProfileImage from '../ui/ProfileImage';

export default function Hero() {
  return (
    <section
      id="contentinfo"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: 'var(--bg-base)' }}
    >
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle, var(--dot-color) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      {/* Red radial blob at top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 rounded-full pointer-events-none"
        style={{
          width: 700,
          height: 400,
          background: 'radial-gradient(ellipse, var(--blob-color) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl mx-auto">
        {/* Profile image */}
        <div className="mb-10 opacity-0 animate-fade-in-scale" style={{ animationDelay: '0.15s' }}>
          <ProfileImage size={160} />
        </div>

        {/* Greeting label */}
        <p
          className="font-mono text-red-500 text-xs tracking-[0.35em] uppercase mb-5 opacity-0 animate-text-reveal"
          style={{ animationDelay: '0.45s' }}
        >
          Hello, I&apos;m
        </p>

        {/* Name */}
        <h1
          className="opacity-0 animate-text-reveal mb-6"
          style={{ fontFamily: 'Archivo Black, sans-serif', animationDelay: '0.6s' }}
        >
          <span
            className="block text-5xl md:text-7xl font-black leading-none tracking-tight"
            style={{ color: 'var(--text-1)' }}
          >
            KITTINAN
          </span>
          <span className="block text-5xl md:text-7xl font-black text-red-500 leading-none tracking-tight">
            KUNNAHONG
          </span>
        </h1>

        {/* Role */}
        <p
          className="font-mono text-lg mb-6 opacity-0 animate-text-reveal"
          style={{ animationDelay: '0.8s', color: 'var(--text-2)' }}
        >
          Computer Engineer
        </p>

        {/* Bio */}
        <p
          className="font-mono text-sm leading-relaxed max-w-md mb-10 opacity-0 animate-text-reveal"
          style={{ animationDelay: '0.95s', color: 'var(--text-3)' }}
        >
          Recent graduate from{' '}
          <span className="text-red-500">Khon Kaen University</span>, passionate about
          building software and constantly learning new technologies.
        </p>

        {/* CTA row */}
        <div
          className="flex flex-wrap justify-center gap-3 opacity-0 animate-text-reveal"
          style={{ animationDelay: '1.1s' }}
        >
          <a
            href="https://github.com/kittinan4452"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-mono text-sm transition-all duration-200 hover:text-white hover:border-white/30 hover:bg-gray-800"
            style={{ border: '1px solid var(--border)', color: 'var(--text-2)' }}
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
          <a
            href="mailto:kittinan4452@gmail.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-mono text-sm transition-all duration-200 hover:text-white hover:border-white/30 hover:bg-gray-800"
            style={{ border: '1px solid var(--border)', color: 'var(--text-2)' }}
          >
            <Mail className="w-4 h-4" />
            Email
          </a>
          <a
            href="/image/resume_kittinan.pdf"
            download="resume_kittinan.pdf"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-mono text-sm font-semibold transition-all duration-200"
            style={{ boxShadow: '0 4px 20px rgba(220,38,38,0.25)' }}
          >
            <Download className="w-4 h-4" />
            Resume
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in"
        style={{ animationDelay: '2.2s' }}
      >
        <span className="font-mono text-xs tracking-widest" style={{ color: 'var(--text-4)' }}>
          scroll
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce" style={{ color: 'var(--text-4)' }} />
      </div>
    </section>
  );
}
