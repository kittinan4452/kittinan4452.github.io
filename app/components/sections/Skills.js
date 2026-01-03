'use client';
import { SiAngular, SiBootstrap, SiCss3, SiDialogflow, SiDjango, SiDocker, SiFirebase, SiFlask, SiGithub, SiGo, SiHtml5, SiJavascript, SiLaravel, SiMongodb, SiMui, SiMysql, SiNestjs, SiNextdotjs, SiNodedotjs, SiPhp, SiPostgresql, SiPostman, SiPython, SiReact, SiTailwindcss, SiTypescript, SiUbuntu } from "react-icons/si";
import { FaGitlab, FaJava, FaJenkins } from "react-icons/fa";

export default function Skills() {
    const skillCategories = [
        {
            title: "Frontend",
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
            title: "Backend",
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
            skills: [
                { name: "MySQL", icon: <SiMysql />, color: "text-blue-400" },
                { name: "Firebase", icon: <SiFirebase />, color: "text-yellow-500" },
                { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-300" },
                { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500" },
            ]
        },
        {
            title: "Tools",
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

    return (
        <div id="skills" className="relative min-h-screen bg-gray-50 dark:bg-[#181818] p-8">

            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16 opacity-0 animate-text-reveal" style={{ animationDelay: '0.2s' }}>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-mono">
                        Technical Skills
                    </h1>
                    <div className="h-0.5 w-20 bg-red-600 mx-auto"></div>
                    <p className="mt-4 text-gray-600 dark:text-gray-400 font-mono">Technologies I work with</p>
                </div>

                {/* Categories Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {skillCategories.map((category, index) => {
                        const categoryDelay = 0.5 + (index * 0.15);

                        return (
                            <div
                                key={index}
                                className="bg-white dark:bg-gray-900/30 rounded-xl p-8 border border-gray-200 dark:border-white/5 shadow-sm opacity-0 animate-card-entrance"
                                style={{ animationDelay: `${categoryDelay}s` }}
                            >
                                {/* Category Header */}
                                <div className="mb-8">
                                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white font-mono">
                                        {category.title}
                                    </h2>
                                </div>

                                {/* Skills Grid */}
                                <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                                    {category.skills.map((skill, idx) => {
                                        const skillDelay = categoryDelay + 0.1 + (idx * 0.03);

                                        return (
                                            <div
                                                key={idx}
                                                className="flex flex-col items-center justify-center p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 transition-colors duration-200 opacity-0 animate-card-entrance"
                                                style={{ animationDelay: `${skillDelay}s` }}
                                            >
                                                <div className={`text-2xl mb-2 ${skill.color}`}>
                                                    {skill.icon}
                                                </div>
                                                <span className="text-xs text-gray-600 dark:text-gray-400 font-mono text-center">
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