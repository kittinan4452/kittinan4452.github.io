"use client";
import Image from "next/image";
import Imageprofile from "./componen/Imageprofire";
import Yourself from "./componen/Yourself";
import Abort from "./componen/Abort";
import Skills from "./componen/Skills";
import Experiences from "./componen/Experiences";
import { useEffect } from "react"; // นำเข้า useEffect
export default function Home() {
  // 💡 โค้ดสำหรับ Scroll เมื่อโหลดหน้าครั้งแรก ที่คุณใส่เพิ่มเข้าไป
  useEffect(() => {
    const path = window.location.pathname;
    if (path && path !== "/") {
      const targetId = path.substring(1);
      const element = document.getElementById(targetId);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        // 🚨 แนะนำ: ใช้ replaceState เพื่อล้าง URL Path หลังจาก Scroll เสร็จ
        window.history.replaceState(null, null, "/");
      }
    }
  }, []);
  return (
    <div className="min-h-screen bg-[#181818] py-10 px-4">
      {/* Profile Section */}
      <section
        id="contentinfo"
        className="flex flex-col md:flex-row items-center justify-center gap-6 mx-auto max-w-screen-xl  rounded-2xl shadow-2xl mb-10"
      >
        {/* <div className="w-full md:w-1/2">
          <Imageprofile />
        </div> */}
        <div className="w-full">
          <Yourself />
        </div>
      </section>

      {/* About & Skills Section */}
      <section
        id="about"
        className="mx-auto max-w-screen-xl  rounded-2xl shadow-2xl mb-10"
      >
        <Abort />
      </section>
      {/* <Skills /> */}
      <section
        id="skills"
        className="mx-auto max-w-screen-xl  rounded-2xl shadow-2xl mb-10"
      >
        <Skills />
      </section>

      {/* Experiences Section */}
      <section
        id="experiences"
        className="mx-auto max-w-screen-xl  rounded-2xl shadow-2xl"
      >
        <Experiences />
      </section>
    </div>
  );
}
