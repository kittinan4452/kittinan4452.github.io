'use client';
import { useState, useRef, useEffect } from 'react';
import { Briefcase, Code, Award, Cpu, Calendar, Home, X, Wallet } from 'lucide-react';
import { CardImage, ModalImage } from '../ui/ImageWithSkeleton';

const projects = [
  {
    id: 1,
    title: 'Internship',
    company: 'PlaySmart IoT & Systems',
    image: '/image/playsmart.jpg',
    description:
      'IoT system design and installation. Assisted in writing a book on IoT development with ESP32 and MicroPython.',
    icon: <Briefcase className="w-4 h-4" />,
    tag: 'Internship',
    tagStyle: { background: 'rgba(59,130,246,0.15)', color: '#93c5fd' },
  },
  {
    id: 2,
    title: 'Rice Quality Inspection',
    company: 'Senior Project',
    image: '/image/projectrice.jpg',
    description:
      'ML-powered rice quality inspection using YOLOv8 and digital image processing with a Django + Tailwind web app.',
    icon: <Award className="w-4 h-4" />,
    tag: 'ML / Web',
    tagStyle: { background: 'rgba(34,197,94,0.15)', color: '#86efac' },
  },
  {
    id: 3,
    title: 'Health Manage Calendar',
    company: 'Advanced Programming',
    image: '/image/HealthCalendar/calendar.jpg',
    description:
      'Desktop calendar app for health & time management with BMI calculator, custom themes, and event scheduling.',
    icon: <Calendar className="w-4 h-4" />,
    tag: 'Desktop App',
    tagStyle: { background: 'rgba(168,85,247,0.15)', color: '#d8b4fe' },
  },
  {
    id: 4,
    title: 'Home Loan Simulation',
    company: 'Cloud App Project',
    image: '/image/projectclude/projectcloud.png',
    description:
      'Web app simulating home loan installments over 3 years with monthly breakdown of repayments and interest.',
    icon: <Home className="w-4 h-4" />,
    tag: 'Web App',
    tagStyle: { background: 'rgba(249,115,22,0.15)', color: '#fdba74' },
  },
  {
    id: 5,
    title: 'ESP-32 & Machine Learning',
    company: 'Wireless Networks',
    image: '/image/esp32cam/esp32cam-ml.jpg',
    description:
      'Hardware + ML project using ESP32-CAM board for productivity measurement via computer vision.',
    icon: <Cpu className="w-4 h-4" />,
    tag: 'IoT / ML',
    tagStyle: { background: 'rgba(234,179,8,0.15)', color: '#fde047' },
  },
  {
    id: 6,
    title: 'Smart Spender',
    company: 'Personal Project',
    image: '/image/smart-spender/Screenshot From 2026-06-10 09-40-24.png',
    description:
      'Personal finance tracking web application for managing expenses, budgets, and spending habits.',
    icon: <Wallet className="w-4 h-4" />,
    tag: 'Web App',
    tagStyle: { background: 'rgba(16,185,129,0.15)', color: '#6ee7b7' },
  },
  {
    id: 7,
    title: 'Frontend Test Project',
    company: 'ICS Job Application',
    image: '/image/ics-test/1.png',
    description:
      'Frontend test project for ICS company job application — restaurant listing with detail pages.',
    icon: <Code className="w-4 h-4" />,
    tag: 'Frontend',
    tagStyle: { background: 'rgba(99,102,241,0.15)', color: '#a5b4fc' },
  },
];

const modalContent = {
  1: (
    <div className="space-y-8">
      <div className="flex flex-col items-center gap-4">
        <ModalImage src="/image/playsmart1.jpg" alt="IoT Project" />
        <p className="font-mono text-sm text-gray-400 text-center">
          IoT project using ESP32 to control devices, with a web app connected to MySQL and Grafana dashboard.
        </p>
      </div>
      <div className="flex flex-col items-center gap-4">
        <ModalImage src="/image/platsmartbook.jpg" alt="Book" />
        <p className="font-mono text-sm text-gray-400 text-center">
          Tested and corrected code examples in the book &ldquo;Developing IoT on ESP32 with MicroPython&rdquo;.
        </p>
        <a
          href="https://www.se-ed.com/physical/%E0%B8%9E%E0%B8%B1%E0%B8%92%E0%B8%99%E0%B8%B2-IoT-%E0%B8%9A%E0%B8%99%E0%B9%84%E0%B8%A1%E0%B9%82%E0%B8%84%E0%B8%A3%E0%B8%84%E0%B8%AD%E0%B8%99%E0%B9%82%E0%B8%97%E0%B8%A3%E0%B8%A5%E0%B9%80%E0%B8%A5%E0%B8%AD%E0%B8%A3%E0%B9%8C-ESP32-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%A0%E0%B8%B2%E0%B8%A9%E0%B8%B2%E0%B9%84%E0%B8%A1%E0%B9%82%E0%B8%84%E0%B8%A3%E0%B9%84%E0%B8%9E%E0%B8%97%E0%B8%AD%E0%B8%99-ac5kwifp8bm67ji3taj5"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-mono text-sm transition-colors"
        >
          Order Book
        </a>
      </div>
    </div>
  ),
  2: (
    <div className="space-y-8">
      {[
        { img: '/image/rice/ricelogin.png', desc: 'Login page for the rice quality web app.' },
        { img: '/image/rice/ricesignup.png', desc: 'Registration page for new users.' },
        { img: '/image/rice/riceforgotpassword.png', desc: 'Forgot password / reset page.' },
        { img: '/image/rice/ricehomepage.png', desc: 'Homepage — upload a rice sample image and enter seller info for AI analysis.' },
        { img: '/image/rice/ricedetail.png', desc: 'Inspection result with grain count, broken-rice percentage and average grain size.' },
        { img: '/image/rice/ricecomposition.png', desc: 'Detailed rice composition breakdown by grain type and size.' },
        { img: '/image/rice/ricelist.png', desc: 'Inspection list with detail and delete buttons.' },
        { img: '/image/rice/ricedashboard.png', desc: 'Admin dashboard with inspection stats and 14-day trend chart.' },
        { img: '/image/rice/riceusers.png', desc: 'User management with roles and inspection counts.' },
        { img: '/image/rice/ricedetect.png', desc: 'YOLOv8 detection results on rice grains (zoomed view).' },
        { img: '/image/rice/riceposter.jpg', desc: 'Project poster.' },
      ].map((item, i) => (
        <div key={i} className="flex flex-col items-center gap-3">
          <ModalImage src={item.img} alt={`Rice ${i}`} />
          <p className="font-mono text-sm text-gray-400 text-center">{item.desc}</p>
        </div>
      ))}
      <div className="flex justify-center gap-3 pt-2">
        <a
          href="https://www.canva.com/design/DAFrCA-VtpI/ucJqw1aN9QpBXBtTks8_EA/edit"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-lg bg-green-700 hover:bg-green-600 text-white font-mono text-sm transition-colors"
        >
          Slide
        </a>
        <a
          href="https://drive.google.com/drive/folders/1JdgM3peBNAMZidzXTHQYGxviwgtFOif6?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-lg bg-green-700 hover:bg-green-600 text-white font-mono text-sm transition-colors"
        >
          Report
        </a>
      </div>
    </div>
  ),
  3: (
    <div className="space-y-8">
      {[
        { img: '/image/HealthCalendar/calendar.jpg', desc: 'Home page with calendar UI.' },
        { img: '/image/HealthCalendar/calendar5.jpg', desc: 'Settings page with BMI calculator.' },
        { img: '/image/HealthCalendar/calendar6.jpg', desc: 'Custom background color themes.' },
        { img: '/image/HealthCalendar/calendar7.jpg', desc: 'Add activity button interface.' },
        { img: '/image/HealthCalendar/calendar2.jpg', desc: 'Add tasks for today.' },
        { img: '/image/HealthCalendar/calendar3.jpg', desc: 'Add future events in advance.' },
        { img: '/image/HealthCalendar/calendar8.jpg', desc: 'View recorded events with the Today button.' },
      ].map((item, i) => (
        <div key={i} className="flex flex-col items-center gap-3">
          <ModalImage src={item.img} alt={`Calendar ${i}`} />
          <p className="font-mono text-sm text-gray-400 text-center">{item.desc}</p>
        </div>
      ))}
      <div className="flex justify-center gap-3 pt-2">
        <a
          href="https://docs.google.com/presentation/d/1OgddoFiPq2E9NQHEs3SflncBQDfTPsnSb3zaTQCtD64/edit#slide=id.p"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-lg bg-purple-700 hover:bg-purple-600 text-white font-mono text-sm transition-colors"
        >
          Slide
        </a>
        <a
          href="https://github.com/Gunn-Treepaech/Project-ACP"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-lg bg-purple-700 hover:bg-purple-600 text-white font-mono text-sm transition-colors"
        >
          GitHub
        </a>
      </div>
    </div>
  ),
  4: (
    <div className="space-y-8">
      {[
        { img: '/image/projectclude/projectcloud.png', desc: 'Homepage of Our Future Home web app.' },
        { img: '/image/projectclude/projectcloud2.png', desc: 'Loan calculation form with 4 bank options.' },
        { img: '/image/projectclude/projectcloud3.png', desc: 'Up to 4 form pages for different bank comparisons.' },
        { img: '/image/projectclude/projectcloud4.png', desc: 'Loan amount and interest payment results.' },
        { img: '/image/projectclude/projectcloud5.png', desc: 'Full details of the web application.' },
        { img: '/image/projectclude/projectcloud7.png', desc: 'Monthly repayment schedule breakdown.' },
        { img: '/image/projectclude/projectcloud8.png', desc: 'Interest and principal payment summary.' },
      ].map((item, i) => (
        <div key={i} className="flex flex-col items-center gap-3">
          <ModalImage src={item.img} alt={`Loan ${i}`} />
          <p className="font-mono text-sm text-gray-400 text-center">{item.desc}</p>
        </div>
      ))}
      <div className="flex justify-center gap-3 pt-2">
        <a
          href="https://www.canva.com/design/DAF-kqRzmuY/5NWAyX3Prsfz19RLp48Y5A/edit"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-lg bg-orange-700 hover:bg-orange-600 text-white font-mono text-sm transition-colors"
        >
          Slide
        </a>
        <a
          href="https://github.com/Gunn-Treepaech/Project_Cloud_App_2023"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-lg bg-orange-700 hover:bg-orange-600 text-white font-mono text-sm transition-colors"
        >
          GitHub
        </a>
      </div>
    </div>
  ),
  5: (
    <div className="space-y-8">
      {[
        { img: '/image/esp32cam/esp32cam-ml1.jpg', desc: 'ESP32-CAM wired to FT232RL FTDI for programming.' },
        { img: '/image/esp32cam/esp32cam-ml2.jpg', desc: 'Power supply module for the boards.' },
        { img: '/image/esp32cam/esp32cam-ml3.jpg', desc: 'ML integration measuring output from camera feed.' },
      ].map((item, i) => (
        <div key={i} className="flex flex-col items-center gap-3">
          <ModalImage src={item.img} alt={`ESP32 ${i}`} />
          <p className="font-mono text-sm text-gray-400 text-center">{item.desc}</p>
        </div>
      ))}
      <div className="flex justify-center pt-2">
        <a
          href="https://www.canva.com/design/DAFytnNNnCA/69Y1JNFmQKpUU79uK7wDKA/edit"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-lg bg-yellow-700 hover:bg-yellow-600 text-white font-mono text-sm transition-colors"
        >
          Slide
        </a>
      </div>
    </div>
  ),
  6: (
    <div className="space-y-8">
      {[
        { file: 'Screenshot From 2026-06-10 10-18-22.png', desc: 'หน้า Login — เข้าสู่ระบบด้วยอีเมล/รหัสผ่าน หรือผ่าน Google Account รองรับ 2 ภาษา (ไทย / English)' },
        { file: 'Screenshot From 2026-06-10 10-18-35.png', desc: 'หน้าสมัครสมาชิก — กรอกชื่อ อีเมล และรหัสผ่านเพื่อสร้างบัญชีใหม่' },
        { file: 'Screenshot From 2026-06-10 09-40-24.png', desc: 'Dashboard หน้าหลัก — สรุปยอดรายรับ รายจ่าย และยอดเงินคงเหลือประจำเดือน พร้อม Top Categories (Pie Chart) และรายการธุรกรรมล่าสุด' },
        { file: 'Screenshot From 2026-06-10 09-40-34.png', desc: 'หน้า Transactions — รายการธุรกรรมทั้งหมด แยกแท็บ ทั้งหมด / รายรับ / รายจ่าย พร้อมปุ่ม Add Transaction' },
        { file: 'Screenshot From 2026-06-10 09-41-19.png', desc: 'หน้า Budget — วางแผนงบประมาณรายหมวดหมู่ต่อเดือน (การศึกษา, ค่าสาธารณูปโภค, ค่าห้อง ฯลฯ) มีฟีเจอร์ "วางแผนด้วย AI" ช่วยแนะนำวงเงิน' },
        { file: 'Screenshot From 2026-06-10 09-41-30.png', desc: 'หน้า Reports — กราฟแท่งรายรับ/รายจ่ายรายเดือน, Pie Chart แยกหมวดหมู่ และ ranking รายจ่ายแต่ละประเภท' },
        { file: 'Screenshot From 2026-06-10 09-41-42.png', desc: 'หน้า Settings — ตั้งค่าโปรไฟล์ ภาษา สกุลเงิน และเลือก AI Provider (DeepSeek / Gemini) สำหรับวิเคราะห์การเงิน' },
        { file: 'Screenshot From 2026-06-10 09-41-54.png', desc: 'Admin Dashboard — ภาพรวมผู้ใช้ระบบทั้งหมด จำนวนสมาชิก รายการธุรกรรม และจัดการสิทธิ์ผู้ใช้' },
        { file: 'Screenshot From 2026-06-10 09-42-34.png', desc: 'ฟีเจอร์อัปโหลดสลิป/ใบเสร็จ — AI ดึงข้อมูลรายการจากรูปภาพอัตโนมัติ รองรับถ่ายรูป เลือกจากแกลเลอรี หรือ Paste จาก Clipboard' },
        { file: 'Screenshot From 2026-06-10 09-44-20.png', desc: 'AI Chat Assistant — ผู้ช่วยวิเคราะห์การเงิน ถามเกี่ยวกับรายจ่าย แนะนำวิธีประหยัด และวางแผนออมเงินผ่านการสนทนา' },
      ].map(({ file, desc }, i) => (
        <div key={i} className="flex flex-col items-center gap-3">
          <ModalImage
            src={`/image/smart-spender/${encodeURIComponent(file)}`}
            alt={`Smart Spender ${i + 1}`}
          />
          <p className="font-mono text-sm text-gray-400 text-center">{desc}</p>
        </div>
      ))}
      <div className="flex justify-center pt-2">
        <a
          href="https://smart-spender-ai.vercel.app/th/login"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white font-mono text-sm transition-colors"
        >
          View Live →
        </a>
      </div>
    </div>
  ),
  7: (
    <div className="space-y-8">
      {[
        { img: '/image/ics-test/1.png', desc: 'Restaurant listing homepage.' },
        { img: '/image/ics-test/2.png', desc: 'Store detail page with ratings.' },
        { img: '/image/ics-test/3.jpg', desc: 'JSON data file structure.' },
      ].map((item, i) => (
        <div key={i} className="flex flex-col items-center gap-3">
          <ModalImage src={item.img} alt={`ICS ${i}`} />
          <p className="font-mono text-sm text-gray-400 text-center">{item.desc}</p>
        </div>
      ))}
      <div className="flex justify-center pt-2">
        <a
          href="https://github.com/kittinan4452/project-test-frontend-ics.git"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-lg bg-indigo-700 hover:bg-indigo-600 text-white font-mono text-sm transition-colors"
        >
          GitHub
        </a>
      </div>
    </div>
  ),
};

export default function Projects() {
  const [activeModal, setActiveModal] = useState(null);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setActiveModal(null);
      }
    };
    if (activeModal !== null) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeModal]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setActiveModal(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const active = projects.find((p) => p.id === activeModal);

  return (
    <section id="experiences" className="min-h-screen py-24 px-6" style={{ background: 'var(--bg-alt)' }}>
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16">
          <p className="font-mono text-red-500 text-xs tracking-[0.3em] uppercase mb-3">
            What I&apos;ve built
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: 'Archivo Black, sans-serif', color: 'var(--text-1)' }}
          >
            Projects
          </h2>
          <div className="mt-4 mx-auto h-px w-12 bg-red-600" />
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, idx) => (
            <article
              key={project.id}
              onClick={() => setActiveModal(project.id)}
              className="group cursor-pointer rounded-2xl overflow-hidden transition-all duration-300"
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
              {/* Thumbnail */}
              <div
                className="relative h-44 overflow-hidden"
                style={{ background: 'var(--bg-alt)' }}
              >
                <CardImage
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)' }}
                />
                {/* Index number */}
                <span
                  className="absolute top-3 right-3 font-mono text-xs"
                  style={{ color: 'rgba(255,255,255,0.25)' }}
                >
                  {String(idx + 1).padStart(2, '0')}
                </span>
                {/* Tag */}
                <span
                  className="absolute bottom-3 left-3 font-mono text-xs px-2 py-1 rounded-md"
                  style={project.tagStyle}
                >
                  {project.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="font-mono font-semibold text-sm leading-snug" style={{ color: 'var(--text-1)' }}>
                    {project.title}
                  </h3>
                  <span className="text-red-500 mt-0.5 shrink-0">{project.icon}</span>
                </div>
                <p className="font-mono text-xs mb-3 text-red-500/60">
                  {project.company}
                </p>
                <p className="font-mono text-xs leading-relaxed line-clamp-2" style={{ color: 'var(--text-3)' }}>
                  {project.description}
                </p>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveModal(project.id);
                  }}
                  className="mt-4 w-full py-2.5 rounded-lg font-mono text-xs transition-all duration-200"
                  style={{ border: '1px solid var(--border)', background: 'var(--bg-card)', color: 'var(--text-3)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(220,38,38,0.3)';
                    e.currentTarget.style.background = 'rgba(220,38,38,0.08)';
                    e.currentTarget.style.color = '#ef4444';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.background = 'var(--bg-card)';
                    e.currentTarget.style.color = 'var(--text-3)';
                  }}
                >
                  View Details →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(8px)' }}
        >
          <div
            ref={modalRef}
            className="rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden shadow-2xl"
            style={{ background: 'var(--modal-bg)', border: '1px solid var(--modal-border)' }}
          >
            {/* Modal header */}
            <div
              className="sticky top-0 px-6 py-4 flex justify-between items-start"
              style={{ background: 'var(--modal-header)', borderBottom: '1px solid var(--border)' }}
            >
              <div>
                <h2 className="font-mono font-bold" style={{ color: 'var(--text-1)' }}>{active?.title}</h2>
                <p className="font-mono text-xs text-red-400 mt-1">{active?.company}</p>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="p-1.5 rounded-lg transition-colors text-gray-400 hover:text-white"
                style={{ background: 'rgba(255,255,255,0)' }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0)')}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal body */}
            <div className="overflow-y-auto max-h-[calc(90vh-72px)] p-6">
              {modalContent[activeModal]}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
