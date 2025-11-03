"use client";

import { useEffect, useRef, useState } from "react";
import { useMotionValue, useSpring } from "framer-motion";
import CursorReveal from "@/components/cursor-reveal";
import Image from "next/image";

export default function Home() {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  // Fixed centered position (0.5, 0.5) - circle stays in center
  const proportionalX = useMotionValue(0.5);
  const proportionalY = useMotionValue(0.5);

  // Responsive mask sizes (large when interacting, small when idle)
  const [sizes, setSizes] = useState({ large: 100, small: 80 });
  const maskSize = useMotionValue(sizes.small);

  // Responsive sizing by viewport width
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      let newSizes = { large: 100, small: 80 };
      if (w < 640) {
        // On small screens, hide the circle to avoid overlap/dizziness
        newSizes = { large: 0, small: 0 };
      } else if (w < 1024) {
        newSizes = { large: 90, small: 72 };
      }
      setSizes(newSizes);
      maskSize.set(newSizes.small);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [maskSize]);

  // Fixed center position (no movement)
  const springX = useMotionValue(0.5);
  const springY = useMotionValue(0.5);
  // Smooth size changes on hover
  const springSize = useSpring(maskSize, { stiffness: 150, damping: 25 });

  // Lock size; no hover/touch growth to avoid motion
  const handleEnter = () => {};
  const handleLeave = () => {};

  return (
    <div className="overflow-hidden">
      {/* Hero Section with Cursor Reveal */}
      <section className="h-[calc(100vh-3.5rem)] h-[calc(100dvh-3.5rem)] mt-14 grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 px-4 pb-4">
        {/* Left - text base, image revealed */}
        <div
          ref={leftRef}
          className="w-full h-full"
        >
          <CursorReveal
            primaryContent={
              <div className="w-full h-full relative bg-[#FEFCE9] dark:bg-[#1F2D5C] px-6 md:px-12">
                {/* Welcome text at circle center (hidden on small screens) */}
                <div className="hidden sm:block absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 z-20">
                  <p className="text-gray-800 dark:text-gray-200 text-center leading-relaxed" style={{ fontSize: '10px' }}>welcome ~</p>
                </div>
                {/* Bottom text outside circle (hidden on small screens) */}
                <div className="hidden sm:block absolute left-1/2 bottom-12 md:bottom-16 -translate-x-1/2 z-10">
                  <p className="text-gray-800 dark:text-gray-200 text-center leading-relaxed max-w-xs" style={{ fontSize: '10px' }}>
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
            sharedProportionalX={springX}
            sharedProportionalY={springY}
            sharedMaskSize={springSize}
            fixedPosition={true}
            fixedCenter={{ x: 0.5, y: 0.38 }}
          />
        </div>

        {/* Right - image base, text revealed */}
        <div
          ref={rightRef}
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
              <div className="w-full h-full relative bg-[#FEFCE9] dark:bg-[#1F2D5C] px-6 md:px-12">
                {/* Welcome text at circle center (hidden on small screens) */}
                <div className="hidden sm:block absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 z-20">
                  <p className="text-gray-800 dark:text-gray-200 text-center leading-relaxed" style={{ fontSize: '10px' }}>welcome ~</p>
                </div>
                {/* Bottom text outside circle (hidden on small screens) */}
                <div className="hidden sm:block absolute left-1/2 bottom-12 md:bottom-16 -translate-x-1/2 z-10">
                  <p className="text-gray-800 dark:text-gray-200 text-center leading-relaxed max-w-xs" style={{ fontSize: '10px' }}>
                    This is where I put the things I&apos;m working on, the thoughts I&apos;m exploring, and the moments I would like to remember.
                  </p>
                </div>
              </div>
            }
            sharedProportionalX={springX}
            sharedProportionalY={springY}
            sharedMaskSize={springSize}
            fixedPosition={true}
            fixedCenter={{ x: 0.5, y: 0.38 }}
          />
        </div>
      </section>
    </div>
  );
}