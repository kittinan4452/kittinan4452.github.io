"use client";
import { Download, ChevronsDown } from "lucide-react";
import Imageprofile from "../ui/Imageprofire";

export default function Yourself() {
  return (
    <div
      id="contentinfo"
      className="relative min-h-screen bg-gray-50 dark:bg-[#181818] flex flex-col items-center justify-center p-8 text-gray-900 dark:text-white"
    >
      {/* Profile Section */}
      <div
        className="mb-12 flex justify-center opacity-0 animate-fade-in-scale"
        style={{ animationDelay: "0.2s" }}
      >
        <div className="relative">
          <div className="bg-white dark:bg-gray-900/50 p-6 rounded-full border-2 border-gray-200 dark:border-white/10 shadow-sm">
            <Imageprofile />
          </div>
        </div>
      </div>

      <div className="max-w-4xl w-full text-center space-y-8">
        {/* Typography */}
        <h1
          className="opacity-0 animate-text-reveal flex flex-col gap-2"
          style={{ animationDelay: "0.6s" }}
        >
          <span className="text-lg text-red-600 dark:text-red-500 font-semibold tracking-wide">
            Hello, I'm
          </span>

          <span className="text-3xl md:text-6xl font-bold text-gray-900 dark:text-white leading-snug">
            KITTINAN
          </span>

          <span className="text-xl md:text-6xl font-bold text-gray-900 dark:text-white leading-snug">
            KUNNAHONG
          </span>
        </h1>

        <h2
          className="text-xl md:text-2xl font-medium tracking-wide text-gray-700 dark:text-gray-300 opacity-0 animate-text-reveal"
          style={{ animationDelay: "0.8s" }}
        >
          Computer Engineer
        </h2>

        {/* Description */}
        <div
          className="opacity-0 animate-text-reveal"
          style={{ animationDelay: "1.0s" }}
        >
          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Recent graduate from{" "}
            <span className="text-red-600 dark:text-red-500 font-semibold">
              Khon Kaen University
            </span>
            , specializing in Computer Engineering. Passionate about applying
            knowledge to drive success and constantly learning new technologies.
          </p>
        </div>

        {/* CTA Button */}
        <div
          className="opacity-0 animate-text-reveal"
          style={{ animationDelay: "1.2s" }}
        >
          <a
            href="/image/resume_kittinan.pdf"
            download="resume_kittinan.pdf"
            className="inline-flex items-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-500 text-white font-semibold rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
          >
            <Download className="w-5 h-5" />
            <span>Download Resume</span>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in"
        style={{ animationDelay: "2s" }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-gray-500 dark:text-gray-500">
            Scroll
          </span>
          <ChevronsDown className="w-5 h-5 text-gray-500 dark:text-gray-600" />
        </div>
      </div>
    </div>
  );
}
