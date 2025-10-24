"use client";

import { MouseEvent, TouchEvent, useRef, useEffect, useState } from "react";
import { useMotionValue, useSpring, animate } from "framer-motion";
import CursorReveal from "@/components/cursor-reveal";
import Image from "next/image";

export default function Home() {
  const firstHeroRef = useRef<HTMLDivElement>(null);
  const secondHeroRef = useRef<HTMLDivElement>(null);
  const [responsiveSizes, setResponsiveSizes] = useState({ large: 100, small: 80 });
  
  // Shared proportional position (0-1 range for percentage)
  const proportionalX = useMotionValue(0.5);
  const proportionalY = useMotionValue(0.5);
  const maskSize = useMotionValue(responsiveSizes.large);
  
  // Calculate responsive sizes based on viewport
  useEffect(() => {
    const updateSizes = () => {
      const width = window.innerWidth;
      let largeMaskSize = 100;
      let smallMaskSize = 80;
      
      if (width < 640) {
        largeMaskSize = 80;
        smallMaskSize = 64;
      } else if (width < 1024) {
        largeMaskSize = 90;
        smallMaskSize = 72;
      } else {
        largeMaskSize = 100;
        smallMaskSize = 80;
      }
      
      setResponsiveSizes({ large: largeMaskSize, small: smallMaskSize });
      
      if (maskSize.get() > 0) {
        maskSize.set(largeMaskSize);
      }
    };
    
    updateSizes();
    window.addEventListener('resize', updateSizes);
    
    return () => window.removeEventListener('resize', updateSizes);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Shared springs
  const springProportionalX = useSpring(proportionalX, { stiffness: 150, damping: 25 });
  const springProportionalY = useSpring(proportionalY, { stiffness: 150, damping: 25 });
  const springSize = useSpring(maskSize, { stiffness: 150, damping: 25 });

  // Animate cursor to center naturally on mount
  useEffect(() => {
    proportionalX.set(0.4);
    proportionalY.set(0.4);
    
    const timer = setTimeout(() => {
      animate(proportionalX, 0.5, {
        duration: 1.5,
        ease: [0.22, 0.61, 0.36, 1],
      });
      animate(proportionalY, 0.5, {
        duration: 1.5,
        ease: [0.22, 0.61, 0.36, 1],
      });
    }, 300);

    return () => clearTimeout(timer);
  }, [proportionalX, proportionalY]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>, ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const localX = e.clientX - rect.left;
      const localY = e.clientY - rect.top;
      
      const propX = localX / rect.width;
      const propY = localY / rect.height;
      
      proportionalX.set(propX);
      proportionalY.set(propY);
    }
  };

  const handleMouseEnter = () => {
    maskSize.set(responsiveSizes.large);
  };

  const handleMouseLeave = () => {
    maskSize.set(responsiveSizes.small);
  };

  // Touch event handlers for mobile support
  const handleTouchStart = (e: TouchEvent<HTMLDivElement>, ref: React.RefObject<HTMLDivElement>) => {
    maskSize.set(responsiveSizes.large);
    handleTouchMove(e, ref);
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>, ref: React.RefObject<HTMLDivElement>) => {
    if (e.touches.length > 0 && ref.current) {
      const touch = e.touches[0];
      const rect = ref.current.getBoundingClientRect();
      const localX = touch.clientX - rect.left;
      const localY = touch.clientY - rect.top;
      
      const propX = localX / rect.width;
      const propY = localY / rect.height;
      
      proportionalX.set(propX);
      proportionalY.set(propY);
    }
  };

  const handleTouchEnd = () => {
    maskSize.set(responsiveSizes.small);
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section with Cursor Reveal - After Navigation */}
      <section className="h-[calc(100vh-3.5rem)] h-[calc(100dvh-3.5rem)] mt-14 grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 px-4 pb-4">
        {/* Left Side - Text base, Image reveal */}
        <div 
          ref={secondHeroRef}
          className="w-full h-full"
          onMouseMove={(e) => handleMouseMove(e, secondHeroRef)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={(e) => handleTouchStart(e, secondHeroRef)}
          onTouchMove={(e) => handleTouchMove(e, secondHeroRef)}
          onTouchEnd={handleTouchEnd}
        >
          <CursorReveal
            primaryContent={
              <div 
                className="w-full h-full relative p-12 bg-[#FEFCE9] dark:bg-[#1F2D5C]"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-gray-800 dark:text-gray-200 leading-relaxed" style={{ fontSize: '10px' }}>
                    welcome ~
                  </p>
                </div>
                <div className="absolute inset-0 flex items-end justify-center pb-12">
                  <p className="text-gray-800 dark:text-gray-200 leading-relaxed text-center max-w-xs" style={{ fontSize: '10px' }}>
                    This is where I put the things I&apos;m working on, the thoughts I&apos;m exploring, and the moments I would like to remember.
                  </p>
                </div>
              </div>
            }
            revealContent={
              <Image
                src="/hero1.jpg"
                alt="Hero Image Revealed"
                width={1920}
                height={1080}
                className="object-cover w-full h-full"
                priority
              />
            }
            sharedProportionalX={springProportionalX}
            sharedProportionalY={springProportionalY}
            sharedMaskSize={springSize}
          />
        </div>

        {/* Right Side - Image base, Text reveal */}
        <div 
          ref={firstHeroRef} 
          className="w-full h-full"
          onMouseMove={(e) => handleMouseMove(e, firstHeroRef)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={(e) => handleTouchStart(e, firstHeroRef)}
          onTouchMove={(e) => handleTouchMove(e, firstHeroRef)}
          onTouchEnd={handleTouchEnd}
        >
          <CursorReveal
            primaryContent={
              <Image
                src="/hero1.jpg"
                alt="Hero Image"
                width={1920}
                height={1080}
                className="object-cover w-full h-full"
                priority
              />
            }
            revealContent={
              <div 
                className="w-full h-full relative p-12 bg-[#FEFCE9] dark:bg-[#1F2D5C]"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-gray-800 dark:text-gray-200 leading-relaxed" style={{ fontSize: '10px' }}>
                    welcome ~
                  </p>
                </div>
                <div className="absolute inset-0 flex items-end justify-center pb-12">
                  <p className="text-gray-800 dark:text-gray-200 leading-relaxed text-center max-w-xs" style={{ fontSize: '10px' }}>
                    This is where I put the things I&apos;m working on, the thoughts I&apos;m exploring, and the moments I would like to remember.
                  </p>
                </div>
              </div>
            }
            sharedProportionalX={springProportionalX}
            sharedProportionalY={springProportionalY}
            sharedMaskSize={springSize}
          />
        </div>
      </section>
    </div>
  )
}