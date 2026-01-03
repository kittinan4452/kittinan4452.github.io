'use client';

import { useState, useEffect } from 'react';
import { User, Calendar, GraduationCap } from 'lucide-react';
import { FaBirthdayCake } from "react-icons/fa";
import { CiHeart ,CiFlag1 } from "react-icons/ci";
import { icon } from '@fortawesome/fontawesome-svg-core';
export default function About() {
    // Calculate age deterministically to avoid hydration mismatch
    const calculateAge = () => {
        const birthDate = new Date('2001-09-19');
        const today = new Date();
        let calculatedAge = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            calculatedAge--;
        }

        return calculatedAge;
    };

    const [age, setAge] = useState(() => calculateAge());
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Ensure age is consistent on client
        const clientAge = calculateAge();
        setAge(clientAge);

        // Animation on mount
        setTimeout(() => setIsVisible(true), 100);
    }, []);

    const personalDetails = [
        { icon: <User className="w-5 h-5" />, label: "Name", value: "Kittinan Kunnahong" },
        { icon: <User className="w-5 h-5" />, label: "Nickname", value: "Tii" },
        { icon: <FaBirthdayCake  className="w-5 h-5" />, label: "Born", value: "September 19, 2001" },
        { icon: <Calendar className="w-5 h-5" />, label: "Age", value: `${age} years` },
        // Sex
        { icon: <User className="w-5 h-5" />, label: "Sex", value: "Male" },
        // Marital Status
        { icon: <CiHeart className="w-5 h-5" />, label: "Marital Status", value: "Single" },
        //Nationality
        { icon: <CiFlag1 className="w-5 h-5" />, label: "Nationality", value: "Thai" },
    ];

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-[#181818] flex items-center justify-center p-8">
            <div className={`max-w-5xl w-full transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-mono">
                        About Me
                    </h1>
                    <div className="h-0.5 w-20 bg-red-600 mx-auto"></div>
                </div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Personal Details Card */}
                    <div className="bg-white dark:bg-gray-900/30 rounded-xl p-8 border border-gray-200 dark:border-white/5 shadow-sm">
                        <div className="flex items-center mb-8">
                            <User className="w-6 h-6 text-red-600 dark:text-red-500 mr-3" />
                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white font-mono">Personal Details</h2>
                        </div>

                        <div className="space-y-4">
                            {personalDetails.map((detail, index) => (
                                <div
                                    key={index}
                                    className="flex items-start space-x-3 py-3 border-b border-gray-200 dark:border-white/5 last:border-0"
                                >
                                    <div className="text-red-600 dark:text-red-500 mt-0.5">
                                        {detail.icon}
                                    </div>
                                    <div className="flex-1">
                                        <span className="text-red-600 dark:text-red-400 font-mono text-sm block">{detail.label}</span>
                                        <span className="text-gray-700 dark:text-gray-300 font-mono">{detail.value}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education Card */}
                    <div className="bg-white dark:bg-gray-900/30 rounded-xl p-8 border border-gray-200 dark:border-white/5 shadow-sm">
                        <div className="flex items-center mb-8">
                            <GraduationCap className="w-6 h-6 text-red-600 dark:text-red-500 mr-3" />
                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white font-mono">Education</h2>
                        </div>

                        <div className="space-y-6">
                            <div className="relative pl-6 border-l-2 border-red-600">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 font-mono">
                                    Bachelor of Computer Engineering
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 font-mono text-sm mb-1">Khon Kaen University</p>
                                <p className="text-red-600 dark:text-red-500 font-mono text-sm">2020 - 2024</p>
                            </div>

                            <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg border border-gray-200 dark:border-white/5">
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 rounded-full bg-red-600/20 dark:bg-red-600/20 flex items-center justify-center">
                                        <GraduationCap className="w-5 h-5 text-red-600 dark:text-red-500" />
                                    </div>
                                    <div>
                                        <p className="text-gray-600 dark:text-gray-400 font-mono text-xs">Graduated</p>
                                        <p className="text-gray-900 dark:text-white font-semibold font-mono text-sm">Computer Engineering</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}