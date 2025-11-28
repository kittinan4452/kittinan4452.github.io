'use client';
import { Download, ChevronsDown } from 'lucide-react'; 
import Imageprofile from "./Imageprofire"; 

export default function Yourself() {

    return(
        <div id="contentinfo" className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center justify-center p-8 font-Kode_Mono text-white overflow-hidden">
            
            <div className="mb-12 flex justify-center opacity-0 animate-fade-in-scale" style={{ animationDelay: '0.2s' }}> {/* 🚨 เพิ่ม Animation */}
                <div><Imageprofile /></div>
            </div>
            
            <div className="max-w-4xl w-full text-center space-y-6">

                <h1 className="text-4xl font-light opacity-0 animate-slide-in-up" style={{ animationDelay: '0.6s' }}> {/* 🚨 เพิ่ม Animation */}
                    <span className="text-xl block mb-2 text-red-500 font-bold tracking-widest">
                        HELLO, I'M
                    </span>
                    <span className="text-7xl font-extrabold block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 max-md:text-5xl"> {/* ลบ animate-fade-in เดิมออก */}
                        KITTINAN KUNNAHONG
                    </span>
                </h1>
                
                <h2 className="text-2xl font-semibold tracking-wider max-md:text-xl text-gray-300 opacity-0 animate-slide-in-up" style={{ animationDelay: '0.8s' }}> {/* 🚨 เพิ่ม Animation */}
                    A <span className="text-red-400 font-bold">COMPUTER ENGINEERING GRADUATE</span>
                </h2>

                <div className="text-lg leading-relaxed text-gray-400 mx-auto max-w-2xl pt-4 border-t border-gray-700/50 opacity-0 animate-slide-in-up" style={{ animationDelay: '1.0s' }}> {/* 🚨 เพิ่ม Animation */}
                    <p>
                        I am a recent graduate from **Khon Kaen University**, specializing in Computer Engineering. I am passionate and eager to apply my knowledge to drive company success. I am a diligent worker, enthusiastic about every task, and constantly seek opportunities to **learn new technologies and develop my skills** alongside a dynamic team.
                    </p>
                </div>

                <a 
                    href="/tii-kittinan-pages/image/resume_kittinan.pdf" 
                    download="resume_kittinan.pdf" 
                    className="group bg-red-700 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg inline-flex items-center mt-8 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-red-700/30  animate-bounce-in animate-bounce" style={{ animationDelay: '1.2s' }} // 🚨 เพิ่ม Animation
                >
                    <Download className="fill-current w-5 h-5 mr-3 group-hover:animate-bounce" />
                    <span>DOWNLOAD RESUME</span>
                </a>
                
            </div>
            
            {/* Scroll Indicator */}
     

        </div>
    );
}