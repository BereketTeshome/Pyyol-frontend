import { motion } from "framer-motion";
import useMouseParallax from "../hooks/useMouseParallax";

export default function HeroArtwork() {
  const { x, y, rotateX, rotateY, scale, glowX, glowY } = useMouseParallax(60);

  return (
    <>
      {/* Glow */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute left-[58%] top-[90px] -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-gradient-to-r from-[#d7bf8a] via-[#fff4d4] to-transparent blur-[160px]"
      />

      {/* Ring */}
      {/* <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 90,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-[50%] top-[280px] -translate-x-1/2 w-[460px] h-[460px] rounded-full border border-[#cdb288]/40"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 70,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-[50%] top-[340px] -translate-x-1/2 w-[340px] h-[340px] rounded-full border border-dashed border-[#ccb38a]/100"
      /> */}

      {/* Main Artwork */}
      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          y: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        style={{
          x,
          y,
          rotateX,
          rotateY,
          scale,
          transformPerspective: 1800,
          transformStyle: "preserve-3d",
        }}
        className="absolute left-[53%] top-[140px] -translate-x-1/2 z-20"
      >
        <div className="relative w-[620px] h-[720px] flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-white/20 blur-3xl" />

          <img
            src="/king.png"
            className="w-[400px] object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,.25)]"
          />
        </div>
      </motion.div>
      <motion.div
        className="absolute inset-0 rounded-full blur-[120px]"
        style={{
          background: `radial-gradient(circle at ${glowX}% ${glowY}%,
            rgba(255,220,120,.45),
            rgba(255,220,120,.18),
            transparent 70%)`,
        }}
      />

      {/* Floating Pieces */}
      {[0, 90, 180, 270].map((angle, i) => (
        <motion.div
          key={i}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 14 + i * 3,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-[53%] top-[170px]"
          style={{
            width: 760,
            height: 760,
            marginLeft: -380,
            marginTop: -380,
          }}
        >
          <motion.div
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.4,
            }}
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              transform: `translateX(-50%) rotate(${angle}deg)`,
            }}
          >
            <div className="w-4 h-4 rounded-full bg-[#d4ae63] shadow-[0_0_25px_#d4ae63]" />
          </motion.div>
        </motion.div>
      ))}
    </>
  );
}
