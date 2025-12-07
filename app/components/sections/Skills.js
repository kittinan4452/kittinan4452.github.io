'use client';
import { SiAngular, SiBootstrap, SiCss3, SiDialogflow, SiDjango, SiDocker, SiFirebase, SiFlask, SiGithub, SiGo, SiHtml5, SiJavascript, SiLaravel, SiMongodb, SiMui, SiMysql, SiNestjs, SiNextdotjs, SiNodedotjs, SiPhp, SiPostgresql, SiPostman, SiPython, SiReact, SiTailwindcss, SiTypescript, SiUbuntu } from "react-icons/si";
import { FaGitlab, FaJava, FaJenkins } from "react-icons/fa"; 
import { } from "react-icons/fa";

export default function Skills() {

    // Generate deterministic proficiency values to avoid hydration mismatch
    const getProficiencyValue = (categoryIndex) => {
        const baseValues = [85, 92, 88, 79, 95, 83, 91, 87];
        return baseValues[categoryIndex % baseValues.length];
    };

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
                { name: "Ubuntu", icon: <SiUbuntu />, color: "text-orange-600" },
                { name: "GitHub", icon: <SiGithub />, color: "text-white" },     
                { name: "GitLab", icon: <FaGitlab />, color: "text-orange-600" },
                { name: "Jenkins", icon: <FaJenkins />, color: "text-red-600" },

                
            ]
        }
    ];

    // 🚨 Modern Skills Component with enhanced UI effects

    return (
        <div id="skills" className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 overflow-hidden">

            {/* Background decorative elements */}
            <div className="absolute top-10 right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Modern Header with animated gradient */}
                <div className="text-center mb-16 opacity-0 animate-text-reveal" style={{ animationDelay: '0.2s' }}>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold gradient-animated-strong text-transparent bg-clip-text mb-6 font-mono"
                    style={{
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>
                        Technical Skills
                    </h1>
                    <div className="flex items-center justify-center gap-4">
                        <div className="h-1 w-24 bg-gradient-to-r from-transparent to-red-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                        <div className="h-1 w-24 bg-gradient-to-r from-red-500 to-transparent rounded-full"></div>
                    </div>
                    <p className="mt-4 text-gray-400 text-lg font-mono">Technologies I work with</p>
                </div>

                {/* Modern Categories Grid with glassmorphism */}
                <div className="grid md:grid-cols-2 gap-8">
                    {skillCategories.map((category, index) => {
                        const categoryDelay = 0.5 + (index * 0.15); // Staggered animation

                        return (
                            <div
                                key={index}
                                className="group glass-morphism-dark rounded-3xl p-8 hover-lift opacity-0 animate-card-entrance border border-white/10 hover:border-red-500/30 transition-all duration-500"
                                style={{ animationDelay: `${categoryDelay}s` }}
                            >
                                {/* Category Header with modern styling */}
                                <div className="text-center mb-10">
                                    <div className={`inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-gradient-to-r ${category.color} bg-opacity-20 border-2 border-white/30 mb-4 shadow-lg backdrop-blur-sm`}>
                                        <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${category.color} animate-pulse shadow-lg`}></div>
                                        <h2 className={`text-2xl md:text-3xl font-bold text-white font-mono drop-shadow-lg`}>
                                            {category.title}
                                        </h2>
                                    </div>
                                </div>

                                {/* Modern Skills Grid with enhanced hover effects */}
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                    {category.skills.map((skill, idx) => {
                                        const skillDelay = categoryDelay + 0.1 + (idx * 0.03);

                                        return (
                                            <div
                                                key={idx}
                                                className="group relative flex flex-col items-center justify-center p-4 glass-morphism rounded-2xl hover-lift cursor-pointer border border-white/10 hover:border-white/20 opacity-0 animate-card-entrance transition-all duration-300"
                                                style={{ animationDelay: `${skillDelay}s` }}
                                            >
                                                {/* Hover glow effect */}
                                                <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                                {/* Skill icon with enhanced effects */}
                                                <div className={`text-3xl mb-3 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 ${skill.color} relative z-10`}>
                                                    {skill.icon}
                                                </div>

                                                {/* Skill name with modern typography */}
                                                <span className="text-sm text-gray-300 font-mono group-hover:text-white font-semibold transition-colors duration-300 relative z-10 text-center drop-shadow">
                                                    {skill.name}
                                                </span>

                                                {/* Subtle particle effect on hover */}
                                                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                                                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
                                                    <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-red-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping" style={{ animationDelay: '0.5s' }}></div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* Category progress indicator */}
                                <div className="mt-6 pt-6 border-t border-white/20">
                                    <div className="flex items-center justify-between text-sm text-gray-300 font-mono mb-3">
                                        <span className="text-red-400 font-semibold">Proficiency</span>
                                        <span className="text-white font-bold bg-gradient-to-r from-red-500/20 to-pink-500/20 px-2 py-1 rounded">
                                            {getProficiencyValue(index)}%
                                        </span>
                                    </div>
                                    <div className="relative h-3 bg-gray-900/50 rounded-full overflow-hidden border border-white/10">
                                        <div
                                            className={`absolute top-0 left-0 h-full bg-gradient-to-r ${category.color} rounded-full animate-pulse shadow-lg`}
                                            style={{ width: `${getProficiencyValue(index)}%` }}
                                        >
                                            <div className="h-full bg-white/20 rounded-full animate-pulse"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Floating action hint */}
                <div className="text-center mt-16 opacity-0 animate-text-reveal" style={{ animationDelay: '2s' }}>
                    <p className="text-gray-500 text-sm font-mono">
                        <span className="inline-flex items-center gap-2 px-4 py-2 glass-morphism rounded-full">
                            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                            Hover over skills to see effects
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}