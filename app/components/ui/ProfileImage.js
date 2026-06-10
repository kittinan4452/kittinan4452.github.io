'use client';
import Image from 'next/image';

export default function ProfileImage({ size = 180 }) {
  return (
    <div className="relative inline-block">
      <div
        className="absolute inset-0 rounded-full blur-2xl"
        style={{
          background: 'rgba(220,38,38,0.25)',
          transform: 'scale(1.25)',
        }}
      />
      <div className="relative rounded-full p-[3px] bg-gradient-to-br from-red-400 via-red-600 to-red-900 shadow-2xl">
        <div
          className="rounded-full overflow-hidden"
          style={{ width: size, height: size, background: '#0d0d0d' }}
        >
          <Image
            src="https://avatars.githubusercontent.com/u/76421734?v=4"
            alt="Kittinan Kunnahong"
            width={size}
            height={size}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
