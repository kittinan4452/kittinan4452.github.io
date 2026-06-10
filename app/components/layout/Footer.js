'use client';
import {
  faGithub,
  faInstagram,
  faFacebook,
  faLinkedin,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Mail, Phone } from 'lucide-react';

const socialLinks = [
  { icon: faGithub, href: 'https://github.com/kittinan4452', label: 'GitHub' },
  { icon: faLinkedin, href: 'https://www.linkedin.com/in/kittinan-kunnahong-1b1287312/', label: 'LinkedIn' },
  { icon: faYoutube, href: 'https://www.youtube.com/@tiigamingth945', label: 'YouTube' },
  { icon: faInstagram, href: 'https://www.instagram.com/tii_kittinan/', label: 'Instagram' },
  { icon: faFacebook, href: 'https://www.facebook.com/profile.php?id=100006484345238', label: 'Facebook' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="py-12 px-6"
      style={{ background: 'var(--bg-base)', borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left: branding + contact */}
          <div className="text-center md:text-left space-y-3">
            <p className="font-mono text-lg font-bold" style={{ color: 'var(--text-1)' }}>
              {'<'}
              <span className="text-red-500">Tii</span>
              {' />'}
            </p>
            <div className="space-y-1.5">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Mail className="w-3.5 h-3.5 text-red-500 shrink-0" />
                <span className="font-mono text-sm" style={{ color: 'var(--text-2)' }}>kittinan4452@gmail.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Phone className="w-3.5 h-3.5 text-red-500 shrink-0" />
                <span className="font-mono text-sm" style={{ color: 'var(--text-2)' }}>064-843-3150</span>
              </div>
            </div>
          </div>

          {/* Right: social + copyright */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-200"
                  style={{ border: '1px solid var(--border)', color: 'var(--text-3)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(220,38,38,0.4)';
                    e.currentTarget.style.background = 'rgba(220,38,38,0.08)';
                    e.currentTarget.style.color = '#ef4444';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = 'var(--text-3)';
                  }}
                >
                  <FontAwesomeIcon icon={link.icon} className="w-4 h-4" />
                </a>
              ))}
            </div>
            <p className="font-mono text-xs" style={{ color: 'var(--text-4)' }}>
              © {year} Kittinan Kunnahong. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
