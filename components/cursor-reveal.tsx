"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, MotionValue } from "framer-motion";

interface CursorRevealProps {
  primaryContent: React.ReactNode;
  revealContent: React.ReactNode;
  sharedProportionalX?: MotionValue<number>;
  sharedProportionalY?: MotionValue<number>;
  sharedMaskSize?: MotionValue<number>;
}

export default function CursorReveal({ 
  primaryContent,
  revealContent,
  sharedProportionalX,
  sharedProportionalY,
  sharedMaskSize
}: CursorRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rect, setRect] = useState<DOMRect | null>(null);

  // Update rect on mount and resize
  useEffect(() => {
    const updateRect = () => {
      if (containerRef.current) {
        setRect(containerRef.current.getBoundingClientRect());
      }
    };

    updateRect();
    window.addEventListener('resize', updateRect);
    window.addEventListener('scroll', updateRect);

    return () => {
      window.removeEventListener('resize', updateRect);
      window.removeEventListener('scroll', updateRect);
    };
  }, []);

  // Create local motion value for clip path
  const clipPath = useMotionValue('circle(0px at 0px 0px)');

  // Update clip path and cursor position based on proportional position
  useEffect(() => {
    if (!rect || !sharedProportionalX || !sharedProportionalY || !sharedMaskSize) return;

    const updatePosition = () => {
      const propX = sharedProportionalX.get();
      const propY = sharedProportionalY.get();
      const size = sharedMaskSize.get();
      
      // Convert proportional position to local pixel position
      const localX = propX * rect.width;
      const localY = propY * rect.height;
      
      clipPath.set(`circle(${size}px at ${localX}px ${localY}px)`);
    };

    // Initial update
    updatePosition();

    // Subscribe to changes
    const unsubscribeX = sharedProportionalX.on('change', updatePosition);
    const unsubscribeY = sharedProportionalY.on('change', updatePosition);
    const unsubscribeSize = sharedMaskSize.on('change', updatePosition);

    return () => {
      unsubscribeX();
      unsubscribeY();
      unsubscribeSize();
    };
  }, [rect, sharedProportionalX, sharedProportionalY, sharedMaskSize, clipPath]);

  return (
    <div
      ref={containerRef}
      className="reveal-effect-container relative"
      style={{ 
        position: "relative", 
        overflow: "visible",
        width: "100%",
        height: "100%"
      }}
    >
      {/* Primary Content */}
      <div className="relative z-0" style={{ width: "100%", height: "100%", overflow: "hidden" }}>
        {primaryContent}
      </div>

      {/* Reveal Content with clip-path - can extend beyond container */}
      <motion.div
        className="absolute top-0 left-0 z-10 pointer-events-none"
        style={{
          clipPath,
          width: "100%",
          height: "100%",
        }}
      >
        <div style={{ overflow: "hidden", width: "100%", height: "100%" }}>
          {revealContent}
        </div>
      </motion.div>
    </div>
  );
}

