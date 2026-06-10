'use client';
import { useState, useEffect } from 'react';
import { User, GraduationCap, Calendar } from 'lucide-react';
import { FaBirthdayCake } from 'react-icons/fa';
import { CiHeart, CiFlag1 } from 'react-icons/ci';

export default function About() {
  const calculateAge = () => {
    const birth = new Date('2001-09-19');
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
    return age;
  };

  const [age, setAge] = useState(() => calculateAge());

  useEffect(() => {
    setAge(calculateAge());
  }, []);

  const details = [
    { icon: <User className="w-4 h-4" />, label: 'Name', value: 'Kittinan Kunnahong' },
    { icon: <User className="w-4 h-4" />, label: 'Nickname', value: 'Tii' },
    { icon: <FaBirthdayCake className="w-4 h-4" />, label: 'Born', value: 'September 19, 2001' },
    { icon: <Calendar className="w-4 h-4" />, label: 'Age', value: `${age} years old` },
    { icon: <User className="w-4 h-4" />, label: 'Gender', value: 'Male' },
    { icon: <CiHeart className="w-4 h-4" />, label: 'Status', value: 'Single' },
    { icon: <CiFlag1 className="w-4 h-4" />, label: 'Nationality', value: 'Thai' },
  ];

  return (
    <section id="about" className="min-h-screen py-24 px-6" style={{ background: 'var(--bg-alt)' }}>
      <div className="max-w-4xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16">
          <p className="font-mono text-red-500 text-xs tracking-[0.3em] uppercase mb-3">
            Who I am
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: 'Archivo Black, sans-serif', color: 'var(--text-1)' }}
          >
            About Me
          </h2>
          <div className="mt-4 mx-auto h-px w-12 bg-red-600" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Personal Info */}
          <div
            className="rounded-2xl p-8 transition-colors duration-300"
            style={{ border: '1px solid var(--border)', background: 'var(--bg-card)' }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: 'rgba(220,38,38,0.1)' }}
              >
                <User className="w-4 h-4 text-red-500" />
              </div>
              <h3 className="font-mono font-semibold" style={{ color: 'var(--text-1)' }}>
                Personal Details
              </h3>
            </div>

            <ul>
              {details.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 py-3"
                  style={{ borderBottom: i < details.length - 1 ? '1px solid var(--border)' : 'none' }}
                >
                  <span className="text-red-500 mt-0.5 shrink-0">{item.icon}</span>
                  <div>
                    <span className="block font-mono text-xs mb-0.5" style={{ color: 'var(--text-3)' }}>
                      {item.label}
                    </span>
                    <span className="font-mono text-sm" style={{ color: 'var(--text-2)' }}>
                      {item.value}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Education */}
          <div
            className="rounded-2xl p-8 transition-colors duration-300"
            style={{ border: '1px solid var(--border)', background: 'var(--bg-card)' }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: 'rgba(220,38,38,0.1)' }}
              >
                <GraduationCap className="w-4 h-4 text-red-500" />
              </div>
              <h3 className="font-mono font-semibold" style={{ color: 'var(--text-1)' }}>
                Education
              </h3>
            </div>

            {/* Timeline */}
            <div className="relative pl-6 mb-8">
              <div
                className="absolute left-0 top-2 bottom-2 w-px"
                style={{
                  background: 'linear-gradient(to bottom, #dc2626, rgba(220,38,38,0.2), transparent)',
                }}
              />

              {/* KKU */}
              <div className="relative mb-8">
                <div
                  className="absolute -left-[25px] top-1.5 w-3 h-3 rounded-full border-2"
                  style={{
                    background: '#dc2626',
                    borderColor: 'var(--bg-alt)',
                    boxShadow: '0 0 8px rgba(220,38,38,0.6)',
                  }}
                />
                <span className="font-mono text-xs text-red-500 block mb-1">2020 – 2024</span>
                <h4 className="font-mono font-semibold text-sm mb-0.5" style={{ color: 'var(--text-1)' }}>
                  B.Eng. Computer Engineering
                </h4>
                <p className="font-mono text-xs" style={{ color: 'var(--text-2)' }}>
                  Khon Kaen University
                </p>
              </div>

              {/* High school */}
              <div className="relative">
                <div
                  className="absolute -left-[25px] top-1.5 w-3 h-3 rounded-full border-2"
                  style={{ background: 'var(--border)', borderColor: 'var(--bg-alt)' }}
                />
                <span className="font-mono text-xs block mb-1" style={{ color: 'var(--text-3)' }}>
                  2017 – 2020
                </span>
                <h4 className="font-mono text-sm font-semibold mb-0.5" style={{ color: 'var(--text-3)' }}>
                  High School
                </h4>
                <p className="font-mono text-xs" style={{ color: 'var(--text-3)' }}>
                  Science & Mathematics
                </p>
              </div>
            </div>

            {/* Graduation badge */}
            <div
              className="rounded-xl p-4 flex items-center gap-3"
              style={{
                border: '1px solid rgba(220,38,38,0.15)',
                background: 'rgba(220,38,38,0.05)',
              }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                style={{ background: 'rgba(220,38,38,0.15)' }}
              >
                <GraduationCap className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <p className="font-mono text-xs" style={{ color: 'var(--text-3)' }}>Status</p>
                <p className="font-mono text-sm font-semibold" style={{ color: 'var(--text-1)' }}>
                  Computer Engineering · KKU
                </p>
                <p className="font-mono text-xs mt-0.5" style={{ color: 'var(--text-2)' }}>
                  Class of 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
