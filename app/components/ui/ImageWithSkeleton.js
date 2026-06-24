'use client';
import { useState, useRef, useEffect } from 'react';

// Use inside a `relative` container — skeleton uses absolute inset-0
export function CardImage({ src, alt, className }) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    // Handle already-cached images where onLoad never fires
    if (imgRef.current?.complete) {
      setLoaded(true);
    }
  }, []);

  return (
    <>
      <div
        className="absolute inset-0 animate-pulse transition-opacity duration-300"
        style={{
          background: 'rgba(55,65,81,0.6)',
          opacity: loaded ? 0 : 1,
          pointerEvents: 'none',
        }}
      />
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={className}
        style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.4s ease' }}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
      />
    </>
  );
}

// Standalone modal image — self-contained with wrapper div
export function ModalImage({ src, alt }) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    if (imgRef.current?.complete) {
      setLoaded(true);
    }
  }, []);

  return (
    <div
      className="relative overflow-hidden rounded-xl w-full max-w-xl"
      style={{ minHeight: loaded ? 0 : 160 }}
    >
      {!loaded && (
        <div
          className="absolute inset-0 animate-pulse rounded-xl"
          style={{ background: 'rgba(55,65,81,0.6)' }}
        />
      )}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className="rounded-xl w-full"
        style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.4s ease', display: 'block' }}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
      />
    </div>
  );
}
