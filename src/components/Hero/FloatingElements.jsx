import React from "react";
import { motion } from "framer-motion";

const balloonColors = [
  "from-pink-400 via-pink-300 to-pink-500",
  "from-red-400 via-red-300 to-red-500",
  "from-blue-400 via-blue-300 to-blue-500",
];

const FloatingElements = () => {
  const balloons = Array.from({ length: 6 }, (_, i) => ({
    size: "w-16 h-24",
    x: i % 2 === 0 ? `${10 + i * 5}%` : `${90 - i * 5}%`,
    delay: i * 2,
    color: balloonColors[i % balloonColors.length],
  }));

  const getTailColor = (gradient) => {
    if (gradient.includes("pink")) return "#ec4899";
    if (gradient.includes("red")) return "#f87171";
    if (gradient.includes("blue")) return "#3b82f6";
    return "#999";
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {balloons.map((balloon, index) => (
        <motion.div
          key={index}
          className={`absolute ${balloon.size} bg-gradient-to-b ${balloon.color} shadow-lg opacity-90`}
          style={{
            left: balloon.x,
            top: "-20%",
            borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
          }}
          animate={{
            y: ["0vh", "130vh"],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 25,
            delay: balloon.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* ✨ Shine */}
          <div className="absolute top-2 left-3 w-3 h-6 bg-white opacity-30 rounded-full rotate-45" />

          {/* 🔻 Tail */}
          <div
            className="absolute bottom-[-6px] left-1/2"
            style={{
              width: 0,
              height: 0,
              borderLeft: "6px solid transparent",
              borderRight: "6px solid transparent",
              borderTop: `8px solid ${getTailColor(balloon.color)}`,
              transform: "translateX(-50%)",
            }}
          />

          {/* 🧵 String */}
          <motion.div
            className="absolute left-1/2 top-full w-px h-24 bg-gray-300 opacity-50"
            style={{ transform: "translateX(-50%)" }}
            animate={{ rotate: [1, -1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      ))}

      {/* Floating bubbles */}
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={`bubble-${i}`}
          className="absolute w-3 h-3 bg-gradient-to-br from-blue-500 to-pink-500 rounded-full opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            delay: i * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* 🔺 Triangle */}
      <motion.div
        className="absolute w-0 h-0"
        style={{
          top: "60%",
          left: "20%",
          borderLeft: "20px solid transparent",
          borderRight: "20px solid transparent",
          borderBottom: "35px solid rgba(255, 99, 132, 0.4)",
        }}
        animate={{ y: [0, -15, 0], rotate: [0, 15, -15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ◼️ Square */}
      <motion.div
        className="absolute w-16 h-16 bg-blue-300 opacity-30 rotate-12"
        style={{ top: "70%", right: "10%" }}
        animate={{ rotate: [0, 90, 180], y: [0, -20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ⚪ Circle outline */}
      <motion.div
        className="absolute w-20 h-20 border-2 border-pink-300 rounded-full opacity-40"
        style={{ top: "20%", left: "10%" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};

export default FloatingElements;
