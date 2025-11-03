"use client";

import { useRef, useEffect, useState } from "react";
import { useMotionValue, useSpring } from "framer-motion";
import CursorReveal from "@/components/cursor-reveal";
import Image from "next/image";

export default function Home() {
  const firstHeroRef = useRef<HTMLDivElement>(null);
  const secondHeroRef = useRef<HTMLDivElement>(null);
  const [responsiveSizes, setResponsiveSizes] = useState({ large: 100, small: 80 });
  
  // Fixed position in the center
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
        largeMaskSize = 40; // Much smaller size for mobile
        smallMaskSize = 32;
      } else if (width < 1024) {
        largeMaskSize = 60; // Smaller size for tablets
        smallMaskSize = 48;
      } else {
        largeMaskSize = 80; // Smaller size for desktop
        smallMaskSize = 64;
      }
      
      setResponsiveSizes({ large: largeMaskSize, small: smallMaskSize });
      maskSize.set(largeMaskSize);
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

  return (
    <div className="overflow-hidden">
      {/* Hero Section with Cursor Reveal - After Navigation */}
      <section className="h-[calc(100vh-3.5rem)] h-[calc(100dvh-3.5rem)] mt-14 grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 px-4 pb-4">
        {/* Left Side - Text base, Image reveal */}
        <div 
          ref={secondHeroRef}
          className="w-full h-full"
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
            fixedPosition={true}
          />
        </div>

        {/* Right Side - Image base, Text reveal */}
        <div 
          ref={firstHeroRef} 
          className="w-full h-full"
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
            fixedPosition={true}
          />
        </div>
      </section>
    </div>
  );
}