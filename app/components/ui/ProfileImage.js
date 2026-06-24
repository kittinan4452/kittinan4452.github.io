'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

export default function ProfileImage({ size = 180 }) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    if (imgRef.current?.complete) {
      setLoaded(true);
    }
  }, []);

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
          className="relative rounded-full overflow-hidden"
          style={{ width: size, height: size, background: '#0d0d0d' }}
        >
          {/* Skeleton shimmer */}
          <div
            className="absolute inset-0 rounded-full animate-pulse transition-opacity duration-500"
            style={{
              background: 'rgba(55,65,81,0.6)',
              opacity: loaded ? 0 : 1,
              pointerEvents: 'none',
            }}
          />
          <Image
            ref={imgRef}
            src="https://avatars.githubusercontent.com/u/76421734?v=4"
            alt="Kittinan Kunnahong"
            width={size}
            height={size}
            className="w-full h-full object-cover"
            style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.5s ease' }}
            onLoad={() => setLoaded(true)}
            onError={() => setLoaded(true)}
          />
        </div>
      </div>
    </div>
  );
}
