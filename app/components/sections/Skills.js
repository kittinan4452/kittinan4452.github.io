'use client';
import { useState } from 'react';
import {
  SiAngular, SiBootstrap, SiCss3, SiDialogflow, SiDjango, SiDocker,
  SiFirebase, SiFlask, SiGithub, SiGo, SiHtml5, SiJavascript,
  SiLaravel, SiMongodb, SiMui, SiMysql, SiNestjs, SiNextdotjs,
  SiNodedotjs, SiPhp, SiPostgresql, SiPostman, SiPython, SiReact,
  SiTailwindcss, SiTypescript, SiUbuntu, SiWireshark, SiKubernetes,  SiFedora, SiLinuxmint ,SiArgo ,SiDbeaver ,SiGrafana ,SiFastapi,
} from 'react-icons/si';
import { FaBitbucket, FaGitlab, FaJava, FaJenkins, FaVuejs } from 'react-icons/fa';
import { BsWindows } from "react-icons/bs";    
const categories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', icon: <SiHtml5 />, color: 'text-orange-500' },
      { name: 'CSS', icon: <SiCss3 />, color: 'text-blue-500' },
      { name: 'JavaScript', icon: <SiJavascript />, color: 'text-yellow-400' },
      { name: 'TypeScript', icon: <SiTypescript />, color: 'text-blue-400' },
      { name: 'React', icon: <SiReact />, color: 'text-cyan-400' },
      { name: 'Next.js', icon: <SiNextdotjs />, color: 'text-gray-700 dark:text-white' },
      { name: 'Tailwind', icon: <SiTailwindcss />, color: 'text-cyan-500' },
      { name: 'Bootstrap', icon: <SiBootstrap />, color: 'text-purple-500' },
      { name: 'Material UI', icon: <SiMui />, color: 'text-blue-400' },
      { name: 'Angular', icon: <SiAngular />, color: 'text-red-500' },
      { name: 'Vue.js', icon: <FaVuejs />, color: 'text-green-500' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Python', icon: <SiPython />, color: 'text-yellow-400' },
      { name: 'PHP', icon: <SiPhp />, color: 'text-indigo-400' },
      { name: 'Java', icon: <FaJava />, color: 'text-red-500' },
      { name: 'Laravel', icon: <SiLaravel />, color: 'text-red-600' },
      { name: 'Node.js', icon: <SiNodedotjs />, color: 'text-green-500' },
      { name: 'Django', icon: <SiDjango />, color: 'text-green-600' },
      { name: 'Flask', icon: <SiFlask />, color: 'text-gray-700 dark:text-white' },
      { name: 'Golang', icon: <SiGo />, color: 'text-cyan-400' },
      { name: 'NestJS', icon: <SiNestjs />, color: 'text-red-500' },
      { name: 'FastAPI', icon: <SiFastapi />, color: 'text-green-500' },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'MySQL', icon: <SiMysql />, color: 'text-blue-400' },
      { name: 'Firebase', icon: <SiFirebase />, color: 'text-yellow-500' },
      { name: 'PostgreSQL', icon: <SiPostgresql />, color: 'text-blue-400' },
      { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-500' },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Docker', icon: <SiDocker />, color: 'text-blue-500' },
      { name: 'Kubernetes', icon: <SiKubernetes />, color: 'text-blue-500' },
      { name: 'Postman', icon: <SiPostman />, color: 'text-orange-500' },
      { name: 'Dialogflow', icon: <SiDialogflow />, color: 'text-orange-400' },
      { name: 'GitHub', icon: <SiGithub />, color: 'text-gray-700 dark:text-white' },
      { name: 'GitLab', icon: <FaGitlab />, color: 'text-orange-500' },
      { name: 'Jenkins', icon: <FaJenkins />, color: 'text-red-500' },
      { name: 'Bitbucket', icon: <FaBitbucket />, color: 'text-blue-500' },
      { name: 'Wireshark', icon: <SiWireshark />, color: 'text-blue-400' },
      { name: 'Argo', icon: <SiArgo />, color: 'text-blue-500' },
      { name: 'DBeaver', icon: <SiDbeaver />, color: 'text-green-500' },
      { name: 'Grafana', icon: <SiGrafana />, color: 'text-orange-500' },
    ],
  },
  {
    title: 'OS',
    skills: [
      { name: 'Windows', icon: <BsWindows />, color: 'text-blue-500' },
      { name: 'Linux Mint', icon: <SiLinuxmint />, color: 'text-green-500' },
      { name: 'Fedora', icon: <SiFedora />, color: 'text-blue-600' },
      { name: 'Ubuntu', icon: <SiUbuntu />, color: 'text-orange-600' },
    ],
  },
];

export default function Skills() {
  const [active, setActive] = useState('Frontend');
  const activeSkills = categories.find((c) => c.title === active)?.skills ?? [];

  return (
    <section id="skills" className="min-h-screen py-24 px-6" style={{ background: 'var(--bg-base)' }}>
      <div className="max-w-4xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16">
          <p className="font-mono text-red-500 text-xs tracking-[0.3em] uppercase mb-3">
            What I use
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: 'Archivo Black, sans-serif', color: 'var(--text-1)' }}
          >
            Tech Stack
          </h2>
          <div className="mt-4 mx-auto h-px w-12 bg-red-600" />
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.title}
              onClick={() => setActive(cat.title)}
              className="px-5 py-2 rounded-full font-mono text-sm font-medium transition-all duration-200"
              style={
                active === cat.title
                  ? { background: '#dc2626', color: '#ffffff', boxShadow: '0 4px 16px rgba(220,38,38,0.3)' }
                  : { border: '1px solid var(--border)', color: 'var(--text-3)' }
              }
              onMouseEnter={(e) => {
                if (active !== cat.title) {
                  e.currentTarget.style.color = 'var(--text-1)';
                  e.currentTarget.style.borderColor = 'var(--border-hover)';
                }
              }}
              onMouseLeave={(e) => {
                if (active !== cat.title) {
                  e.currentTarget.style.color = 'var(--text-3)';
                  e.currentTarget.style.borderColor = 'var(--border)';
                }
              }}
            >
              {cat.title}
              <span className="ml-2 font-mono text-xs opacity-50">
                {categories.find((c) => c.title === cat.title)?.skills.length}
              </span>
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
          {activeSkills.map((skill) => (
            <div
              key={skill.name}
              className="group flex flex-col items-center p-4 rounded-xl transition-all duration-200 cursor-default"
              style={{ border: '1px solid var(--border)', background: 'var(--bg-card)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-hover)';
                e.currentTarget.style.background = 'var(--bg-card-hover)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.background = 'var(--bg-card)';
              }}
            >
              <div className={`text-3xl mb-2.5 ${skill.color} transition-transform duration-200 group-hover:scale-110`}>
                {skill.icon}
              </div>
              <span
                className="font-mono text-xs text-center leading-tight transition-colors duration-200 group-hover:text-red-500"
                style={{ color: 'var(--text-3)' }}
              >
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        {/* Total count */}
        <p className="text-center font-mono text-xs mt-10" style={{ color: 'var(--text-4)' }}>
          {categories.reduce((sum, c) => sum + c.skills.length, 0)} technologies across{' '}
          {categories.length} categories
        </p>
      </div>
    </section>
  );
}
