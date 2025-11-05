"use client";

import { useEffect, useRef, useState } from "react";
import { useMotionValue, useSpring } from "framer-motion";
import CursorReveal from "@/components/cursor-reveal";
import Image from "next/image";

export default function Home() {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const leftBottomTextRef = useRef<HTMLDivElement>(null);
  const rightBottomTextRef = useRef<HTMLDivElement>(null);

  // Fixed centered position (0.5, 0.5) - circle stays in center
  const proportionalX = useMotionValue(0.5);
  const proportionalY = useMotionValue(0.5);

  // Responsive mask sizes (large when interacting, small when idle)
  const [sizes, setSizes] = useState({ large: 100, small: 80 });
  const maskSizeLeft = useMotionValue(sizes.small);
  const maskSizeRight = useMotionValue(sizes.small);
  const [showTextLeft, setShowTextLeft] = useState(true);
  const [showTextRight, setShowTextRight] = useState(true);

  // Responsive sizing by viewport width (mobile smaller, not hidden)
  useEffect(() => {
    const updateSizes = () => {
      const w = window.innerWidth;
      let newSizes = { large: 100, small: 80 };
      if (w < 640) {
        // Mobile: slightly smaller radius to allow showing on shorter screens
        newSizes = { large: 72, small: 52 };
      } else if (w < 1024) {
        newSizes = { large: 90, small: 72 };
      }
      setSizes(newSizes);
    };
    updateSizes();
    window.addEventListener("resize", updateSizes);
    return () => window.removeEventListener("resize", updateSizes);
  }, []);

  // Set mask size and text visibility per section.
  // Only use section height vs 3× diameter; no overlap checks.
  useEffect(() => {
    const computeMasks = () => {
      // sizes.small is the base circle RADIUS used by clip-path.
      // Dynamic sizing: smoothly scale the circle with left section height.
      const baseRadius = sizes.small;
      const minRadius = 52; // smallest allowed circle radius; below this, disappear
      const leftHeight = leftRef.current?.clientHeight ?? 0;
      const rightHeight = rightRef.current?.clientHeight ?? 0;
      const leftWidth = leftRef.current?.clientWidth ?? 0;
      const rightWidth = rightRef.current?.clientWidth ?? 0;

      // Compute target radius based on leftHeight. Clamp to [0, baseRadius].
      const targetRadiusRaw = leftHeight > 0
        ? Math.min(baseRadius, Math.max(0, leftHeight / 5))
        : baseRadius;
      const circleVisible = targetRadiusRaw >= minRadius;
      const targetRadius = circleVisible ? targetRadiusRaw : 0;

      // Apply target radius to both sides (clip-path expects radius)
      maskSizeLeft.set(targetRadius);
      maskSizeRight.set(targetRadius);

      // Link text visibility to circle presence (no smaller-than-52 circle)
      setShowTextLeft(circleVisible);
      setShowTextRight(circleVisible);
    };
    computeMasks();

    const roLeft = leftRef.current ? new ResizeObserver(computeMasks) : null;
    const roRight = rightRef.current ? new ResizeObserver(computeMasks) : null;
    if (roLeft && leftRef.current) roLeft.observe(leftRef.current);
    if (roRight && rightRef.current) roRight.observe(rightRef.current);

    window.addEventListener("resize", computeMasks);
    return () => {
      window.removeEventListener("resize", computeMasks);
      roLeft?.disconnect();
      roRight?.disconnect();
    };
  }, [sizes.small, leftRef, rightRef, maskSizeLeft, maskSizeRight]);

  // Fixed center position (no movement)
  const springX = useMotionValue(0.5);
  const springY = useMotionValue(0.5);
  // Smooth size changes on hover
  const springSizeLeft = useSpring(maskSizeLeft, { stiffness: 150, damping: 25 });
  const springSizeRight = useSpring(maskSizeRight, { stiffness: 150, damping: 25 });

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
                {showTextLeft && (
                  <div className="block absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 z-20">
                    <p className="text-gray-800 dark:text-gray-200 text-center leading-relaxed" style={{ fontSize: '10px' }}>welcome ~</p>
                  </div>
                )}
                {/* Bottom text outside circle (hidden on small screens) */}
                {showTextLeft && (
                  <div ref={leftBottomTextRef} className="block absolute left-1/2 bottom-12 md:bottom-16 -translate-x-1/2 z-10">
                    <p className="text-gray-800 dark:text-gray-200 text-center leading-relaxed max-w-xs" style={{ fontSize: '10px' }}>
                      This is where I put the things I&apos;m working on, the thoughts I&apos;m exploring, and the moments I would like to remember.
                    </p>
                  </div>
                )}
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
            sharedMaskSize={springSizeLeft}
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
                {showTextRight && (
                  <div className="block absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 z-20">
                    <p className="text-gray-800 dark:text-gray-200 text-center leading-relaxed" style={{ fontSize: '10px' }}>welcome ~</p>
                  </div>
                )}
                {/* Bottom text outside circle (hidden on small screens) */}
                {showTextRight && (
                  <div ref={rightBottomTextRef} className="block absolute left-1/2 bottom-12 md:bottom-16 -translate-x-1/2 z-10">
                    <p className="text-gray-800 dark:text-gray-200 text-center leading-relaxed max-w-xs" style={{ fontSize: '10px' }}>
                      This is where I put the things I&apos;m working on, the thoughts I&apos;m exploring, and the moments I would like to remember.
                    </p>
                  </div>
                )}
              </div>
            }
            sharedProportionalX={springX}
            sharedProportionalY={springY}
            sharedMaskSize={springSizeRight}
            fixedPosition={true}
            fixedCenter={{ x: 0.5, y: 0.38 }}
          />
        </div>
      </section>
    </div>
  );
}