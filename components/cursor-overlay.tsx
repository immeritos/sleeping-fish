"use client";

import React, { useEffect, useState } from "react";

export default function CursorOverlay() {
  const [enabled, setEnabled] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [overClickable, setOverClickable] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);

  // Enable only on desktops: fine pointer + hover, and no touch
  useEffect(() => {
    if (typeof window === "undefined") return;

    const canHover = window.matchMedia("(hover: hover)").matches;
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    const isTouchDevice = navigator.maxTouchPoints > 0;
    const hasCoarsePointer = window.matchMedia("(pointer: coarse)").matches;

    setEnabled(canHover && hasFinePointer && !isTouchDevice && !hasCoarsePointer);
  }, []);

  // Attach mouse listeners only when enabled
  useEffect(() => {
    if (!enabled) return;

    const onMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const el = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement | null;
      if (el) {
        const clickableSelector =
          "a, button, [role='button'], [onclick], .cursor-pointer, input, select, textarea";
        setOverClickable(el.closest(clickableSelector) !== null);
      } else {
        setOverClickable(false);
      }
    };

    const onMouseDown = () => setIsMouseDown(true);
    const onMouseUp = () => setIsMouseDown(false);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [enabled]);

  // If not enabled (mobile/tablet), render nothing
  if (!enabled) return null;

  // Effect should happen when over a clickable regardless of hover or click
  const shouldEmphasize = overClickable || isMouseDown;

  const baseSize = 12; // px
  const scale = shouldEmphasize ? 2 : 1; // 2x when over clickables or clicking
  const opacity = shouldEmphasize ? 0.4 : 0.9; // 40% when emphasized

  // Light/Dark colors that remain visible without blending
  const isDark =
    typeof document !== "undefined" &&
    document.documentElement.classList.contains("dark");
  const dotColor = isDark ? "rgb(51, 88, 212)" : "rgb(255, 243, 148)"; // blue/yellow

  const style: React.CSSProperties = {
    position: "fixed",
    left: pos.x,
    top: pos.y,
    transform: "translate(-50%, -50%)",
    width: baseSize,
    height: baseSize,
    borderRadius: "50%",
    backgroundColor: dotColor,
    boxShadow: shouldEmphasize
      ? `0 0 ${baseSize * 2}px ${
          isDark ? "rgba(51, 88, 212, 0.15)" : "rgba(255, 243, 148, 0.25)"
        }`
      : `0 0 ${baseSize}px ${
          isDark ? "rgba(51, 88, 212, 0.15)" : "rgba(255, 243, 148, 0.25)"
        }`,
    opacity,
    pointerEvents: "none",
    zIndex: 9999,
    transition:
      "transform 120ms ease, opacity 120ms ease, box-shadow 120ms ease",
    transformOrigin: "center",
  };

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 9999,
      }}
    >
      <div style={{ ...style, transform: `${style.transform} scale(${scale})` }} />
    </div>
  );
}