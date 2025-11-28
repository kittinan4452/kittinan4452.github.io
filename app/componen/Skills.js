'use client';
import { SiAngular, SiBootstrap, SiCss3, SiDialogflow, SiDjango, SiDocker, SiFirebase, SiFlask, SiGithub, SiGo, SiHtml5, SiJavascript, SiLaravel, SiMongodb, SiMui, SiMysql, SiNestjs, SiNextdotjs, SiNodedotjs, SiPhp, SiPostgresql, SiPostman, SiPython, SiReact, SiTailwindcss, SiTypescript, SiUbuntu } from "react-icons/si";
import { FaJava } from "react-icons/fa";        

export default function Skills() {
    
    const skillCategories = [
        {
            title: "Front-end",
            color: "from-blue-400 to-cyan-400",
            skills: [
                { name: "HTML", icon: <SiHtml5 />, color: "text-orange-500" },
                { name: "CSS", icon: <SiCss3 />, color: "text-blue-500" },
                { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
                { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-600" },
                { name: "React", icon: <SiReact />, color: "text-cyan-400" },
                { name: "Next.js", icon: <SiNextdotjs />, color: "text-white" },
                { name: "Tailwind", icon: <SiTailwindcss />, color: "text-cyan-500" },
                { name: "Bootstrap", icon: <SiBootstrap />, color: "text-purple-600" },
                { name: "Material UI", icon: <SiMui />, color: "text-blue-400" },
                { name: "Angular", icon: <SiAngular />, color: "text-red-600" },
            ]
        },
        {
            title: "Back-end",
            color: "from-green-400 to-emerald-400",
            skills: [
                { name: "Python", icon: <SiPython />, color: "text-yellow-300" },
                { name: "PHP", icon: <SiPhp />, color: "text-indigo-400" },
                { name: "Java", icon: <FaJava />, color: "text-red-500" },
                { name: "Laravel", icon: <SiLaravel />, color: "text-red-600" },
                { name: "Node.js", icon: <SiNodedotjs />, color: "text-green-500" },
                { name: "Django", icon: <SiDjango />, color: "text-green-900" },
                { name: "Flask", icon: <SiFlask />, color: "text-white" },
                { name: "Golang", icon: <SiGo />, color: "text-cyan-300" },
                { name: "NestJS", icon: <SiNestjs />, color: "text-red-500" },
            ]
        },
        {
            title: "Database",
            color: "from-purple-400 to-pink-400",
            skills: [
                { name: "MySQL", icon: <SiMysql />, color: "text-blue-400" },
                { name: "Firebase", icon: <SiFirebase />, color: "text-yellow-500" },
                { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-300" },
                { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500" },
            ]
        },
        {
            title: "Tools",
            color: "from-orange-400 to-red-400",
            skills: [
                { name: "Docker", icon: <SiDocker />, color: "text-blue-500" },
                { name: "Postman", icon: <SiPostman />, color: "text-orange-500" },
                { name: "Dialogflow", icon: <SiDialogflow />, color: "text-orange-400" },
                { name: "GitHub", icon: <SiGithub />, color: "text-white" },
                { name: "Ubuntu", icon: <SiUbuntu />, color: "text-orange-600" },
            ]
        }
    ];

    // 🚨 ค่าเริ่มต้นของ Animation Delay
    let initialDelay = 0.5; // เริ่มต้นที่ 0.5s หลังจาก Header
    
    return (
        <div id="skills" className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16 opacity-0 animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
                    <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 mb-4 font-mono">
                        Skills
                    </h1>
                    <div className="h-1 w-32 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full"></div>
                </div>

                {/* Categories Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {skillCategories.map((category, index) => {
                        const categoryDelay = initialDelay + (index * 0.2); // หน่วงเวลาหมวดหมู่ (0.5s, 0.7s, 0.9s, 1.1s)
                        
                        return (
                            <div 
                                key={index}
                                // 🚨 เพิ่ม Animation ให้กับ Category Card
                                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-700 hover:border-red-500/50 transition-all duration-300 hover:shadow-red-500/20 opacity-0 animate-slide-in-up"
                                style={{ animationDelay: `${categoryDelay}s` }} // ใช้ delay ที่คำนวณได้
                            >
                                <h2 className={`text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r ${category.color} font-mono text-center`}>
                                    {category.title}
                                </h2>

                                <div className="flex flex-wrap justify-center gap-6">
                                    {category.skills.map((skill, idx) => {
                                        // 🚨 คำนวณ delay สำหรับแต่ละ skill item
                                        const skillDelay = categoryDelay + 0.1 + (idx * 0.05); 

                                        return (
                                            <div 
                                                key={idx}
                                                // 🚨 เพิ่ม Animation ให้กับ Skill Item
                                                className="group flex flex-col items-center justify-center p-4 bg-gray-900/50 rounded-xl hover:bg-gray-700 transition-all duration-300 w-24 h-24 hover:-translate-y-2 cursor-pointer border border-gray-700/50 hover:border-gray-500 opacity-0 animate-slide-in-up"
                                                style={{ animationDelay: `${skillDelay}s` }}
                                            >
                                                <div className={`text-4xl mb-2 transition-transform duration-300 group-hover:scale-110 ${skill.color}`}>
                                                    {skill.icon}
                                                </div>
                                                <span className="text-xs text-gray-400 font-mono group-hover:text-white transition-colors">
                                                    {skill.name}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}