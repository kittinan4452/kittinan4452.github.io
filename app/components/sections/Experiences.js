'use client';

import { useState, useRef, useEffect } from 'react';
import { Briefcase, Code, Award, Cpu, Calendar, Home, X, ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import { useIntersectionObserver, useStaggeredIntersection } from '../../hooks/useIntersectionObserver';

export default function Experiences() {
    const [activeModal, setActiveModal] = useState(null);
    const modalRef = useRef(null); // 🚨 1. สร้าง Reference สำหรับ Modal Content

    // 🚨 2. Logic สำหรับปิด Modal เมื่อคลิกนอก Modal
    useEffect(() => {
        // ฟังก์ชันจัดการเหตุการณ์คลิก
        const handleClickOutside = (event) => {
            // ตรวจสอบว่าคลิกนอก modalContent (ใช้ modalRef) และ modal กำลังเปิดอยู่หรือไม่
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setActiveModal(null);
            }
        };

        // เพิ่ม Listener เมื่อ Modal เปิด
        if (activeModal !== null) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        // Clean up: ลบ Listener เมื่อ Component unmount หรือ activeModal เปลี่ยนไป
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [activeModal]); // รันเมื่อ activeModal มีการเปลี่ยนแปลง

    const experiences = [
        // ... (ข้อมูลประสบการณ์เดิม)
        {
            id: 1,
            title: "Internship",
            company: "PlaySmart IoT and Systems",
            image: "/tii-kittinan-pages/image/playsmart.jpg",
            description: "Internship experience with playsmart iot and system company that teaches design and installation of iot systems, which has participated in making books on iot system development and has been an assistant training in iot system installation.",
            icon: <Briefcase className="w-6 h-6" />,
            color: "from-blue-500 to-cyan-500"
        },
        {
            id: 2,
            title: "Rice Quality Inspection System",
            company: "Senior Project",
            image: "/tii-kittinan-pages/image/projectrice.jpg",
            description: "Project Rice Quality Inspection System is used to check the quality of rice by using Machine Learning and Digital image processing to work together and using a Web Application, using Django Framework and TailwindCSS framework to make it beautiful.",
            icon: <Award className="w-6 h-6" />,
            color: "from-green-500 to-emerald-500"
        },
        {
            id: 3,
            title: "Health Manage Calendar",
            company: "Advanced Computer Programming",
            image: "/tii-kittinan-pages/image/HealthCalendar/calendar.jpg",
            description: "Health Manage Calendar is a program that helps in allocating the user's time to make it convenient by being able to add things to the program to allocate the time.",
            icon: <Calendar className="w-6 h-6" />,
            color: "from-purple-500 to-pink-500"
        },
        {
            id: 4,
            title: "Home Loan Simulation",
            company: "Cloud App Project",
            image: "/tii-kittinan-pages/image/projectclude/projectclude.jpg",
            description: "Web application simulates home installments 3 years generate monthly reports on repayments, interest payments, principal payments and balance.",
            icon: <Home className="w-6 h-6" />,
            color: "from-orange-500 to-red-500"
        },
        {
            id: 5,
            title: "ESP-32 And Machine Learning",
            company: "Wireless Personal Area Networks",
            image: "/tii-kittinan-pages/image/esp32cam/esp32cam-ml.jpg",
            description: "Project that brings hardware to work with Machine Learning by working through the ESP32-cam board to increase convenience for users in measuring productivity.",
            icon: <Cpu className="w-6 h-6" />,
            color: "from-yellow-500 to-orange-500"
        },
        {
            id: 6,
            title: "Project-Test-Front-End",
            company: "Frontend Job Application",
            image: "/tii-kittinan-pages/image/ics-test/1.jpg",
            description: "This project is a test project for applying for a Front-end position at ICS company.",
            icon: <Code className="w-6 h-6" />,
            color: "from-indigo-500 to-purple-500"
        }
    ];

    const modalContent = {
        // ... (เนื้อหา Modal เดิม)
        1: (
            <div className="space-y-6">
                <div className="flex flex-col items-center space-y-4">
                    <Image src="/tii-kittinan-pages/image/playsmart1.jpg" width={600} height={400} className="rounded-xl shadow-lg" alt="Internship" />
                    <p className="text-gray-300">The iot project is implemented using an ESP32 board to control various iot devices. There is a web application to operate the board, which works with a Mysql database and grafana to view data through a dashboard.</p>
                </div>
                <div className="flex flex-col items-center space-y-4">
                    <Image src="/tii-kittinan-pages/image/platsmartbook.jpg" width={600} height={400} className="rounded-xl shadow-lg" alt="Book" />
                    <p className="text-gray-300">Test, improve, and correct the code examples in the book 'Developing IoT on ESP32 Microcontroller with MicroPython'</p>
                    <a className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg hover:shadow-lg hover:scale-105 transition-all" href="https://www.se-ed.com/product/%E0%B8%9E%E0%B8%B1%E0%B8%92%E0%B8%99%E0%B8%B2-IoT-%E0%B8%9A%E0%B8%99%E0%B9%84%E0%B8%A1%E0%B9%82%E0%B8%84%E0%B8%A3%E0%B8%84%E0%B8%AD%E0%B8%99%E0%B9%82%E0%B8%97%E0%B8%A3%E0%B8%A5%E0%B9%80%E0%B8%A5%E0%B8%AD%E0%B8%A3%E0%B9%8C-ESP32-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%A0%E0%B8%B2%E0%B8%A9%E0%B8%B2%E0%B9%84%E0%B8%A1%E0%B9%82%E0%B8%84%E0%B8%A3%E0%B9%84%E0%B8%9E%E0%B8%97%E0%B8%AD%E0%B8%99.aspx?no=9786160850112" target="_blank">Order Book</a>
                </div>
            </div>
        ),
        2: (
            <div className="space-y-6">
                {[
                    { img: "/tii-kittinan-pages/image/rice/ricelogin.png", desc: "Login page to use the Web Application to check rice quality." },
                    { img: "/tii-kittinan-pages/image/rice/ricesignup.jpg", desc: "Registration page in order to apply for membership in use webapplication." },
                    { img: "/tii-kittinan-pages/image/rice/ricewebhomepage.jpg", desc: "Home page of the rice quality inspection system." },
                    { img: "/tii-kittinan-pages/image/rice/riceshowlist.jpg", desc: "The page shows completed items in a table format, with a delete button and a view details button." },
                    { img: "/tii-kittinan-pages/image/rice/ricewebshowdata.jpg", desc: "The page shows all the detailed information about rice grain size and types." },
                    { img: "/tii-kittinan-pages/image/rice/ricedetect.jpg", desc: "Picture of the results of successfully detecting rice grains using Yolov8." },
                    { img: "/tii-kittinan-pages/image/rice/riceposter.jpg", desc: "Poster Project Rice quality inspection system." }
                ].map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center space-y-4">
                        <Image src={item.img} width={600} height={400} className="rounded-xl shadow-lg" alt={`Rice ${idx}`} />
                        <p className="text-gray-300">{item.desc}</p>
                    </div>
                ))}
                <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                    <a className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base  bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg hover:shadow-lg hover:scale-105 transition-all" href="https://www.canva.com/design/DAFrCA-VtpI/ucJqw1aN9QpBXBtTks8_EA/edit" target="_blank">Slide</a>
                    <a className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base  bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg hover:shadow-lg hover:scale-105 transition-all" href="https://drive.google.com/drive/folders/1JdgM3peBNAMZidzXTHQYGxviwgtFOif6?usp=sharing" target="_blank">Report</a>
                </div>
            </div>
        ),
        3: (
            <div className="space-y-6">
                {[
                    { img: "/tii-kittinan-pages/image/HealthCalendar/calendar.jpg", desc: "The home page of the Health Manage Calendar program with calendar UI." },
                    { img: "/tii-kittinan-pages/image/HealthCalendar/calendar5.jpg", desc: "Setting function page where you can calculate your BMI." },
                    { img: "/tii-kittinan-pages/image/HealthCalendar/calendar6.jpg", desc: "The program can change the background color as the user desires." },
                    { img: "/tii-kittinan-pages/image/HealthCalendar/calendar7.jpg", desc: "To add various activities, you can go to the add activity button." },
                    { img: "/tii-kittinan-pages/image/HealthCalendar/calendar2.jpg", desc: "It adds things that you want to do today." },
                    { img: "/tii-kittinan-pages/image/HealthCalendar/calendar3.jpg", desc: "A page for adding events in advance." },
                    { img: "/tii-kittinan-pages/image/HealthCalendar/calendar8.jpg", desc: "Recorded events can be viewed by pressing the Today button." }
                ].map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center space-y-4">
                        <img src={item.img} className="rounded-xl shadow-lg max-w-full" alt={`Calendar ${idx}`} />
                        <p className="text-gray-300">{item.desc}</p>
                    </div>
                ))}
                <div className="flex justify-center space-x-4">
                    <a className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:shadow-lg hover:scale-105 transition-all" href="https://docs.google.com/presentation/d/1OgddoFiPq2E9NQHEs3SflncBQDfTPsnSb3zaTQCtD64/edit#slide=id.p" target="_blank">Slide</a>
                    <a className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:shadow-lg hover:scale-105 transition-all" href="https://github.com/Gunn-Treepaech/Project-ACP" target="_blank">Github</a>
                </div>
            </div>
        ),
        4: (
            <div className="space-y-6">
                {[
                    { img: "/tii-kittinan-pages/image/projectclude/projectclude.jpg", desc: "The home page of the web application Our Future Home." },
                    { img: "/tii-kittinan-pages/image/projectclude/projectclude1.jpg", desc: "The form page shows home installment calculations where the user can select 4 banks." },
                    { img: "/tii-kittinan-pages/image/projectclude/projectclude2.jpg", desc: "The web application can add up to 4 form pages to select different banks." },
                    { img: "/tii-kittinan-pages/image/projectclude/projectclude3.jpg", desc: "After calculating, the form displays the results of the loan amount and interest payments." },
                    { img: "/tii-kittinan-pages/image/projectclude/projectclude4.jpg", desc: "The page shows all the details of the Web Application." },
                    { img: "/tii-kittinan-pages/image/projectclude/projectclude5.jpg", desc: "Detailed view of form number two." }
                ].map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center space-y-4">
                        <img src={item.img} className="rounded-xl shadow-lg max-w-full" alt={`Loan ${idx}`} />
                        <p className="text-gray-300">{item.desc}</p>
                    </div>
                ))}
                <div className="flex justify-center space-x-4">
                    <a className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg hover:shadow-lg hover:scale-105 transition-all" href="https://www.canva.com/design/DAF-kqRzmuY/5NWAyX3Prsfz19RLp48Y5A/edit" target="_blank">Slide</a>
                    <a className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg hover:shadow-lg hover:scale-105 transition-all" href="https://github.com/Gunn-Treepaech/Project_Cloud_App_2023" target="_blank">Github</a>
                </div>
            </div>
        ),
        5: (
            <div className="space-y-6">
                {[
                    { img: "/tii-kittinan-pages/image/esp32cam/esp32cam-ml1.jpg", desc: "How to connect the ESP32 CAM circuit to the FT232RL FTDI." },
                    { img: "/tii-kittinan-pages/image/esp32cam/esp32cam-ml2.jpg", desc: "The power supply module provides electrical power to the boards." },
                    { img: "/tii-kittinan-pages/image/esp32cam/esp32cam-ml3.jpg", desc: "Using it together with Machine Learning to measure the output." }
                ].map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center space-y-4">
                        <img src={item.img} className="rounded-xl shadow-lg max-w-full" alt={`ESP32 ${idx}`} />
                        <p className="text-gray-300">{item.desc}</p>
                    </div>
                ))}
                <div className="flex justify-center">
                    <a className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg hover:shadow-lg hover:scale-105 transition-all" href="https://www.canva.com/design/DAFytnNNnCA/69Y1JNFmQKpUU79uK7wDKA/edit" target="_blank">Slide</a>
                </div>
            </div>
        ),
        6: (
            <div className="space-y-6">
                {[
                    { img: "/tii-kittinan-pages/image/ics-test/1.jpg", desc: "The home page of the ics application showing a list of restaurants." },
                    { img: "/tii-kittinan-pages/image/ics-test/2.jpg", desc: "A detail page showing store information and ratings." },
                    { img: "/tii-kittinan-pages/image/ics-test/3.jpg", desc: "ICS json data file structure." }
                ].map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center space-y-4">
                        <img src={item.img} className="rounded-xl shadow-lg max-w-full" alt={`ICS ${idx}`} />
                        <p className="text-gray-300">{item.desc}</p>
                    </div>
                ))}
                <div className="flex justify-center">
                    <a className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg hover:shadow-lg hover:scale-105 transition-all" href="https://github.com/kittinan4452/project-test-frontend-ics.git" target="_blank">Github</a>
                </div>
            </div>
        )
    };

    // Use Intersection Observer for header animation
    const headerRef = useIntersectionObserver('animate-text-reveal', { threshold: 0.1 });
    const cardRefs = useStaggeredIntersection(experiences.length, 'animate-card-entrance', 150);

    return (
        <div id="experiences" className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4 sm:p-6 lg:p-8 overflow-hidden">

            {/* Background decorative elements */}
            <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Modern Header with enhanced animations */}
                <div ref={headerRef} className="text-center mb-20 opacity-0">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold gradient-animated-strong text-transparent bg-clip-text mb-8 font-mono"
                    style={{
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>
                        Projects & Experiences
                    </h1>
                    <div className="flex items-center justify-center gap-6">
                        <div className="h-1 w-32 bg-gradient-to-r from-transparent to-red-500 rounded-full"></div>
                        <div className="flex gap-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                            <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                        </div>
                        <div className="h-1 w-32 bg-gradient-to-r from-red-500 to-transparent rounded-full"></div>
                    </div>
                    <p className="mt-6 text-gray-400 text-lg font-mono">My journey through code and innovation</p>
                </div>

                {/* Modern Cards Grid with glassmorphism */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {experiences.map((exp, index) => (
                        <div
                            key={exp.id}
                            ref={el => cardRefs[index] = el}
                            className="group glass-morphism-dark rounded-3xl overflow-hidden hover-lift cursor-pointer border border-white/10 hover:border-red-500/30 transition-all duration-500 opacity-0"
                            onClick={() => setActiveModal(exp.id)}
                        >
                            {/* Enhanced Image Section with overlay effect */}
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={exp.image}
                                    alt={exp.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>

                                {/* Floating Icon */}
                                <div className={`absolute top-6 right-6 p-4 rounded-full bg-gradient-to-r ${exp.color} shadow-2xl hover-lift glow-red-hover`}>
                                    {exp.icon}
                                </div>

                                {/* Category Badge */}
                                <div className="absolute top-6 left-6">
                                    <span className={`px-3 py-1 rounded-full text-xs font-mono glass-morphism border border-white/20`}>
                                        {exp.company}
                                    </span>
                                </div>
                            </div>

                            {/* Enhanced Content Section */}
                            <div className="p-8 space-y-6">
                                <div className="space-y-3">
                                    <h2 className="text-xl sm:text-2xl font-bold text-white font-mono group-hover:gradient-text-red group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300">
                                        {exp.title}
                                    </h2>
                                    <p className="text-sm text-red-400 font-mono flex items-center gap-2">
                                        <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></span>
                                        {exp.company}
                                    </p>
                                </div>

                                <p className="text-gray-300 text-sm leading-relaxed line-clamp-3 font-mono">
                                    {exp.description}
                                </p>

                                {/* Modern CTA Button */}
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setActiveModal(exp.id);
                                    }}
                                    className={`group/btn w-full py-4 px-6 rounded-2xl bg-gradient-to-r ${exp.color} font-mono font-bold hover-lift magnetic-btn transition-all duration-300 shadow-lg hover:shadow-2xl border border-white/20 hover:border-white/40`}
                                >
                                    <span className="flex items-center justify-center gap-3 relative z-10">
                                        <span>View Details</span>
                                        <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                                    </span>
                                </button>

                                {/* Hover Effect Particles */}
                                <div className="absolute inset-0 pointer-events-none">
                                    <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
                                    <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-red-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping" style={{ animationDelay: '0.3s' }}></div>
                                    <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping" style={{ animationDelay: '0.6s' }}></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Enhanced Modal with modern UI */}
            {activeModal && (
                <div
                    className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in"
                    onClick={() => setActiveModal(null)}
                >
                    <div
                        ref={modalRef}
                        className="glass-morphism-dark rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-hidden border border-white/20 shadow-2xl animate-card-entrance"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Enhanced Modal Header */}
                        <div className="sticky top-0 glass-morphism-dark border-b border-white/10 p-6 sm:p-8 flex justify-between items-center gap-4 z-10">
                            <div className='flex-1 min-w-0'>
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl break-words font-bold gradient-animated-strong text-transparent bg-clip-text font-mono"
                                style={{
                                    WebkitBackgroundClip: 'text',
                                    backgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                }}>
                                    {experiences.find(e => e.id === activeModal)?.title}
                                </h2>
                                <p className="text-red-400 font-mono mt-2 text-lg flex items-center gap-2">
                                    <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></span>
                                    {experiences.find(e => e.id === activeModal)?.company}
                                </p>
                            </div>
                            <button
                                onClick={() => setActiveModal(null)}
                                className="p-3 rounded-full glass-morphism hover-lift border border-white/20 hover:border-red-500/50 transition-all duration-300 group"
                            >
                                <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-red-400 transition-colors" />
                            </button>
                        </div>

                        {/* Enhanced Modal Content */}
                        <div className="p-6 sm:p-8 overflow-y-auto max-h-[calc(90vh-120px)]">
                            <div className="space-y-8 animate-text-reveal">
                                {modalContent[activeModal]}
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="glass-morphism-dark border-t border-white/10 p-6">
                            <div className="flex items-center justify-between">
                                <p className="text-sm text-gray-400 font-mono">Press ESC or click outside to close</p>
                                <button
                                    onClick={() => setActiveModal(null)}
                                    className="px-6 py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white font-mono font-bold rounded-full hover-lift magnetic-btn transition-all duration-300"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}