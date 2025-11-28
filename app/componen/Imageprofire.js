// ... imports
import Image from "next/image";

export default function ImageProfile() {
    
    const imageSize = 300; // ขนาดที่ต้องการ
    
    return(
        <div 
            className="
                relative mx-auto 
                rounded-full overflow-hidden 
                border-4 border-transparent bg-gradient-to-r from-red-500 to-pink-500 p-1 
                shadow-2xl shadow-red-500/30
                transition-all duration-500 hover:scale-105
                
            "
            // 🚨 ใช้ Inline Style เพื่อกำหนดขนาดด้วยตัวแปร
            style={{ width: `${imageSize}px`, height: `${imageSize}px` }}
        >
            <Image 
                src="https://avatars.githubusercontent.com/u/76421734?v=4"
                alt="Profile Picture" 
                width={imageSize} 
                height={imageSize} 
                className="w-full h-full object-cover rounded-full" 
            />
        </div>
    );
}