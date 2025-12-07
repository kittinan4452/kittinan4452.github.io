'use client';

import { useState, useEffect } from 'react';
import { User, Cake, Calendar, Heart, Flag, GraduationCap } from 'lucide-react';

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
        { icon: <User className="w-5 h-5" />, label: "Nick Name", value: "Tii" },
        { icon: <Cake className="w-5 h-5" />, label: "Born", value: "September 19, 2001" },
        { icon: <Calendar className="w-5 h-5" />, label: "Age", value: `${age} years` },
        { icon: <User className="w-5 h-5" />, label: "Sex", value: "Male" },
        { icon: <Heart className="w-5 h-5" />, label: "Marital Status", value: "Single" },
        { icon: <Flag className="w-5 h-5" />, label: "Nationality", value: "Thai" }
    ];

    return (
        // 🚨 แก้ไข: ใช้ flex เพื่อจัดเนื้อหาให้อยู่ตรงกลาง (center) ในแนวตั้ง 
        // เมื่อ content มีน้อยกว่า 100% ของความสูงหน้าจอ 
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-8">
            <div className={`max-w-6xl w-full transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                
                {/* Header */}
                <div className="text-center pt-8 pb-12"> {/* 🚨 ปรับ padding ด้านบน/ล่าง */}
                    <h1 className="text-6xl font-bold gradient-text-red text-transparent bg-clip-text mb-4 font-mono animate-pulse animate-slide-in-up"
                    style={{
                        animationDelay: '0.2s',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>
                        About Me
                    </h1>
                    <div className="h-1 w-32 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full"></div>
                </div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Personal Details Card */}
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-700 hover:border-red-500/50 transition-all duration-300 hover:shadow-red-500/20 hover:shadow-xl">
                        <div className="flex items-center justify-center mb-6">
                            <User className="w-8 h-8 text-red-500 mr-3" />
                            <h2 className="text-3xl font-bold text-white font-mono">Personal Details</h2>
                        </div>
                        
                        <div className="space-y-4">
                            {personalDetails.map((detail, index) => (
                                <div 
                                    key={index}
                                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-700/30 transition-all duration-200 group"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className="text-red-500 mt-1 group-hover:scale-110 transition-transform">
                                        {detail.icon}
                                    </div>
                                    <div className="flex-1">
                                        <span className="font-bold text-red-400 font-mono">{detail.label}: </span>
                                        <span className="text-gray-300 font-mono">{detail.value}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education Card */}
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-700 hover:border-red-500/50 transition-all duration-300 hover:shadow-red-500/20 hover:shadow-xl">
                        <div className="flex items-center justify-center mb-6">
                            <GraduationCap className="w-8 h-8 text-red-500 mr-3" />
                            <h2 className="text-3xl font-bold text-white font-mono">Education</h2>
                        </div>
                        
                        <div className="space-y-6">
                            <div className="relative pl-6 border-l-4 border-red-500">
                                <div className="absolute -left-3 top-0 w-5 h-5 rounded-full bg-red-500 animate-pulse"></div>
                                <h3 className="text-xl font-bold text-white mb-2 font-mono">
                                    Bachelor of Computer Engineering
                                </h3>
                                <p className="text-gray-400 font-mono mb-1">Khon Kaen University</p>
                                <p className="text-red-400 font-mono">2020 - 2024</p>
                            </div>

                            {/* Decorative Element */}
                            <div className="mt-8 p-6 bg-gradient-to-br from-red-500/10 to-pink-500/10 rounded-xl border border-red-500/20">
                                <div className="flex items-center space-x-3">
                                    <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                                        <GraduationCap className="w-6 h-6 text-red-400" />
                                    </div>
                                    <div>
                                        <p className="text-gray-300 font-mono text-sm">Graduated</p>
                                        <p className="text-white font-bold font-mono">Computer Engineering</p>
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