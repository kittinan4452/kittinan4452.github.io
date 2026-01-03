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
            image: "/image/playsmart.jpg",
            description: "Internship experience with playsmart iot and system company that teaches design and installation of iot systems, which has participated in making books on iot system development and has been an assistant training in iot system installation.",
            icon: <Briefcase className="w-6 h-6" />,
            color: "from-blue-500 to-cyan-500"
        },
        {
            id: 2,
            title: "Rice Quality Inspection System",
            company: "Senior Project",
            image: "/image/projectrice.jpg",
            description: "Project Rice Quality Inspection System is used to check the quality of rice by using Machine Learning and Digital image processing to work together and using a Web Application, using Django Framework and TailwindCSS framework to make it beautiful.",
            icon: <Award className="w-6 h-6" />,
            color: "from-green-500 to-emerald-500"
        },
        {
            id: 3,
            title: "Health Manage Calendar",
            company: "Advanced Computer Programming",
            image: "/image/HealthCalendar/calendar.jpg",
            description: "Health Manage Calendar is a program that helps in allocating the user's time to make it convenient by being able to add things to the program to allocate the time.",
            icon: <Calendar className="w-6 h-6" />,
            color: "from-purple-500 to-pink-500"
        },
        {
            id: 4,
            title: "Home Loan Simulation",
            company: "Cloud App Project",
            image: "/image/projectclude/projectcloud.png",
            description: "Web application simulates home installments 3 years generate monthly reports on repayments, interest payments, principal payments and balance.",
            icon: <Home className="w-6 h-6" />,
            color: "from-orange-500 to-red-500"
        },
        {
            id: 5,
            title: "ESP-32 And Machine Learning",
            company: "Wireless Personal Area Networks",
            image: "/image/esp32cam/esp32cam-ml.jpg",
            description: "Project that brings hardware to work with Machine Learning by working through the ESP32-cam board to increase convenience for users in measuring productivity.",
            icon: <Cpu className="w-6 h-6" />,
            color: "from-yellow-500 to-orange-500"
        },
        {
            id: 6,
            title: "Project-Test-Front-End",
            company: "Frontend Job Application",
            image: "/image/ics-test/1.jpg",
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
                    <Image src="/image/playsmart1.jpg" width={600} height={400} className="rounded-lg" alt="Internship" />
                    <p className="text-gray-700 dark:text-gray-300 text-center">The iot project is implemented using an ESP32 board to control various iot devices. There is a web application to operate the board, which works with a Mysql database and grafana to view data through a dashboard.</p>
                </div>
                <div className="flex flex-col items-center space-y-4">
                    <Image src="/image/platsmartbook.jpg" width={600} height={400} className="rounded-lg" alt="Book" />
                    <p className="text-gray-700 dark:text-gray-300 text-center">Test, improve, and correct the code examples in the book 'Developing IoT on ESP32 Microcontroller with MicroPython'</p>
                    <a className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors" href="https://www.se-ed.com/product/%E0%B8%9E%E0%B8%B1%E0%B8%92%E0%B8%99%E0%B8%B2-IoT-%E0%B8%9A%E0%B8%99%E0%B9%84%E0%B8%A1%E0%B9%82%E0%B8%84%E0%B8%A3%E0%B8%84%E0%B8%AD%E0%B8%99%E0%B9%82%E0%B8%97%E0%B8%A3%E0%B8%A5%E0%B9%80%E0%B8%A5%E0%B8%AD%E0%B8%A3%E0%B9%8C-ESP32-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%A0%E0%B8%B2%E0%B8%A9%E0%B8%B2%E0%B9%84%E0%B8%A1%E0%B9%82%E0%B8%84%E0%B8%A3%E0%B9%84%E0%B8%9E%E0%B8%97%E0%B8%AD%E0%B8%99.aspx?no=9786160850112" target="_blank">Order Book</a>
                </div>
            </div>
        ),
        2: (
            <div className="space-y-6">
                {[
                    { img: "/image/rice/ricelogin.png", desc: "Login page to use the Web Application to check rice quality." },
                    { img: "/image/rice/ricesignup.jpg", desc: "Registration page in order to apply for membership in use webapplication." },
                    { img: "/image/rice/ricewebhomepage.jpg", desc: "Home page of the rice quality inspection system." },
                    { img: "/image/rice/riceshowlist.jpg", desc: "The page shows completed items in a table format, with a delete button and a view details button." },
                    { img: "/image/rice/ricewebshowdata.jpg", desc: "The page shows all the detailed information about rice grain size and types." },
                    { img: "/image/rice/ricedetect.jpg", desc: "Picture of the results of successfully detecting rice grains using Yolov8." },
                    { img: "/image/rice/riceposter.jpg", desc: "Poster Project Rice quality inspection system." }
                ].map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center space-y-4">
                        <Image src={item.img} width={600} height={400} className="rounded-lg" alt={`Rice ${idx}`} />
                        <p className="text-gray-700 dark:text-gray-300 text-center">{item.desc}</p>
                    </div>
                ))}
                <div className="flex flex-col sm:flex-row justify-center gap-3">
                    <a className="px-6 py-3 bg-green-600 hover:bg-green-500 text-white rounded-lg transition-colors" href="https://www.canva.com/design/DAFrCA-VtpI/ucJqw1aN9QpBXBtTks8_EA/edit" target="_blank">Slide</a>
                    <a className="px-6 py-3 bg-green-600 hover:bg-green-500 text-white rounded-lg transition-colors" href="https://drive.google.com/drive/folders/1JdgM3peBNAMZidzXTHQYGxviwgtFOif6?usp=sharing" target="_blank">Report</a>
                </div>
            </div>
        ),
        3: (
            <div className="space-y-6">
                {[
                    { img: "/image/HealthCalendar/calendar.jpg", desc: "The home page of the Health Manage Calendar program with calendar UI." },
                    { img: "/image/HealthCalendar/calendar5.jpg", desc: "Setting function page where you can calculate your BMI." },
                    { img: "/image/HealthCalendar/calendar6.jpg", desc: "The program can change the background color as the user desires." },
                    { img: "/image/HealthCalendar/calendar7.jpg", desc: "To add various activities, you can go to the add activity button." },
                    { img: "/image/HealthCalendar/calendar2.jpg", desc: "It adds things that you want to do today." },
                    { img: "/image/HealthCalendar/calendar3.jpg", desc: "A page for adding events in advance." },
                    { img: "/image/HealthCalendar/calendar8.jpg", desc: "Recorded events can be viewed by pressing the Today button." }
                ].map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center space-y-4">
                        <img src={item.img} className="rounded-lg max-w-full" alt={`Calendar ${idx}`} />
                        <p className="text-gray-700 dark:text-gray-300 text-center">{item.desc}</p>
                    </div>
                ))}
                <div className="flex justify-center gap-3">
                    <a className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition-colors" href="https://docs.google.com/presentation/d/1OgddoFiPq2E9NQHEs3SflncBQDfTPsnSb3zaTQCtD64/edit#slide=id.p" target="_blank">Slide</a>
                    <a className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition-colors" href="https://github.com/Gunn-Treepaech/Project-ACP" target="_blank">Github</a>
                </div>
            </div>
        ),
        4: (
            <div className="space-y-6">
                {[
                    { img: "/image/projectclude/projectcloud.png", desc: "The home page of the web application Our Future Home." },
                    { img: "/image/projectclude/projectcloud2.png", desc: "The form page shows home installment calculations where the user can select 4 banks." },
                    { img: "/image/projectclude/projectcloud3.png", desc: "The web application can add up to 4 form pages to select different banks." },
                    { img: "/image/projectclude/projectcloud4.png", desc: "After calculating, the form displays the results of the loan amount and interest payments." },
                    { img: "/image/projectclude/projectcloud5.png", desc: "The page shows all the details of the Web Application." },
                    { img: "/image/projectclude/projectcloud6.png", desc: "Detailed view of form number two." },
                    { img: "/image/projectclude/projectcloud7.png", desc: "Monthly repayment schedule view with detailed breakdown." },
                    { img: "/image/projectclude/projectcloud8.png", desc: "Interest calculation summary and principal payment details." },
                    { img: "/image/projectclude/projectcloud9.png", desc: "Balance overview and remaining payment information." }
                ].map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center space-y-4">
                        <img src={item.img} className="rounded-lg max-w-full" alt={`Loan ${idx}`} />
                        <p className="text-gray-700 dark:text-gray-300 text-center">{item.desc}</p>
                    </div>
                ))}
                <div className="flex justify-center gap-3">
                    <a className="px-6 py-3 bg-orange-600 hover:bg-orange-500 text-white rounded-lg transition-colors" href="https://www.canva.com/design/DAF-kqRzmuY/5NWAyX3Prsfz19RLp48Y5A/edit" target="_blank">Slide</a>
                    <a className="px-6 py-3 bg-orange-600 hover:bg-orange-500 text-white rounded-lg transition-colors" href="https://github.com/Gunn-Treepaech/Project_Cloud_App_2023" target="_blank">Github</a>
                </div>
            </div>
        ),
        5: (
            <div className="space-y-6">
                {[
                    { img: "/image/esp32cam/esp32cam-ml1.jpg", desc: "How to connect the ESP32 CAM circuit to the FT232RL FTDI." },
                    { img: "/image/esp32cam/esp32cam-ml2.jpg", desc: "The power supply module provides electrical power to the boards." },
                    { img: "/image/esp32cam/esp32cam-ml3.jpg", desc: "Using it together with Machine Learning to measure the output." }
                ].map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center space-y-4">
                        <img src={item.img} className="rounded-lg max-w-full" alt={`ESP32 ${idx}`} />
                        <p className="text-gray-700 dark:text-gray-300 text-center">{item.desc}</p>
                    </div>
                ))}
                <div className="flex justify-center">
                    <a className="px-6 py-3 bg-yellow-600 hover:bg-yellow-500 text-white rounded-lg transition-colors" href="https://www.canva.com/design/DAFytnNNnCA/69Y1JNFmQKpUU79uK7wDKA/edit" target="_blank">Slide</a>
                </div>
            </div>
        ),
        6: (
            <div className="space-y-6">
                {[
                    { img: "/image/ics-test/1.jpg", desc: "The home page of the ics application showing a list of restaurants." },
                    { img: "/image/ics-test/2.jpg", desc: "A detail page showing store information and ratings." },
                    { img: "/image/ics-test/3.jpg", desc: "ICS json data file structure." }
                ].map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center space-y-4">
                        <img src={item.img} className="rounded-lg max-w-full" alt={`ICS ${idx}`} />
                        <p className="text-gray-700 dark:text-gray-300 text-center">{item.desc}</p>
                    </div>
                ))}
                <div className="flex justify-center">
                    <a className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors" href="https://github.com/kittinan4452/project-test-frontend-ics.git" target="_blank">Github</a>
                </div>
            </div>
        )
    };

    // Use Intersection Observer for header animation
    const headerRef = useIntersectionObserver('animate-text-reveal', { threshold: 0.1 });
    const cardRefs = useStaggeredIntersection(experiences.length, 'animate-card-entrance', 150);

    return (
        <div id="experiences" className="relative min-h-screen bg-gray-50 dark:bg-[#181818] p-4 sm:p-6 lg:p-8">

            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div ref={headerRef} className="text-center mb-16 opacity-0">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 font-mono">
                        Projects & Experiences
                    </h1>
                    <div className="h-0.5 w-20 bg-red-600 mx-auto"></div>
                    <p className="mt-4 text-gray-600 dark:text-gray-400 font-mono">My journey through code and innovation</p>
                </div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {experiences.map((exp, index) => (
                        <div
                            key={exp.id}
                            ref={el => cardRefs[index] = el}
                            className="group bg-white dark:bg-gray-900/30 rounded-xl overflow-hidden cursor-pointer border border-gray-200 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/10 transition-all duration-300 shadow-sm opacity-0"
                            onClick={() => setActiveModal(exp.id)}
                        >
                            {/* Image Section */}
                            <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-900/50">
                                <img
                                    src={exp.image}
                                    alt={exp.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />

                                {/* Company Badge */}
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-black/60 dark:bg-black/60 backdrop-blur-sm text-white">
                                        {exp.company}
                                    </span>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-6 space-y-4">
                                <div>
                                    <h2 className="text-lg font-bold text-gray-900 dark:text-white font-mono mb-2">
                                        {exp.title}
                                    </h2>
                                    <p className="text-xs text-red-600 dark:text-red-500 font-mono">
                                        {exp.company}
                                    </p>
                                </div>

                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3 font-mono">
                                    {exp.description}
                                </p>

                                {/* CTA Button */}
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setActiveModal(exp.id);
                                    }}
                                    className="w-full py-3 px-4 rounded-lg bg-red-600 hover:bg-red-500 text-white font-mono text-sm font-semibold transition-colors duration-200"
                                >
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {activeModal && (
                <div
                    className="fixed inset-0 bg-black/80 dark:bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    onClick={() => setActiveModal(null)}
                >
                    <div
                        ref={modalRef}
                        className="bg-white dark:bg-gray-900 rounded-xl max-w-6xl w-full max-h-[90vh] overflow-hidden border border-gray-200 dark:border-white/10 shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-white/10 p-6 flex justify-between items-center gap-4">
                            <div className='flex-1 min-w-0'>
                                <h2 className="text-2xl sm:text-3xl break-words font-bold text-gray-900 dark:text-white font-mono">
                                    {experiences.find(e => e.id === activeModal)?.title}
                                </h2>
                                <p className="text-red-600 dark:text-red-500 font-mono mt-2 text-sm">
                                    {experiences.find(e => e.id === activeModal)?.company}
                                </p>
                            </div>
                            <button
                                onClick={() => setActiveModal(null)}
                                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                            >
                                <X className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                            </button>
                        </div>

                        {/* Modal Content */}
                        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                            <div className="space-y-6">
                                {modalContent[activeModal]}
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-white/10 p-6">
                            <div className="flex items-center justify-between">
                                <p className="text-sm text-gray-500 dark:text-gray-500 font-mono">Press ESC or click outside to close</p>
                                <button
                                    onClick={() => setActiveModal(null)}
                                    className="px-6 py-3 bg-red-600 hover:bg-red-500 text-white font-mono font-semibold rounded-lg transition-colors duration-200"
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