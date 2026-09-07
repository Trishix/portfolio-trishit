'use client';
import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest('.cursor-link') ||
        target.closest('.link-featured') ||
        target.closest('.link-footer') ||
        target.closest('a')
      ) {
        setHovered(true);
        setText(target.getAttribute('data-cursor-text') || '');
      } else {
        setHovered(false);
        setText('');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 pointer-events-none z-[9999] rounded-full mix-blend-difference bg-white transition-transform duration-200 ease-out flex items-center justify-center text-black font-bold text-xs ${
        hovered ? 'w-16 h-16 -ml-8 -mt-8' : 'w-4 h-4 -ml-2 -mt-2'
      }`}
      style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
    >
      {text && <span className="opacity-100">{text}</span>}
    </div>
  );
}
