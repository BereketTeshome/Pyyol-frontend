import { motion } from "framer-motion";
import HeroArtwork from "./HeroArtwork";
import Fog from "./Fog";

export default function Hero() {
  return (
    <section className="relative min-h-[130vh] overflow-hidden bg-black">
      {/* Artwork */}
      <Fog />
      <HeroArtwork />

      {/* Left Text */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        // className="absolute left-14 top-[180px] z-20 max-w-[520px]"
        className="absolute left-24 xl:left-32 top-[220px] z-20 max-w-[520px]"
      >
        <p className="uppercase tracking-[10px] text-white/60 text-sm mb-8">
          Pyyol Chess Experience
        </p>

        <h1 className="font-serif text-[95px] xl:text-[103px] leading-[0.82] text-white drop-shadow-[0_10px_35px_rgba(0,0,0,.8)]">
          Rule
          <br />
          The
          <br />
          Board.
        </h1>

        <p className="mt-10 text-lg leading-9 text-white/70 max-w-md">
          Master every move with AI analysis, legendary openings and premium
          chess experiences designed for champions.
        </p>
      </motion.div>
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover bg-black/45"
      >
        <source src="/chess-bg.mp4" type="video/mp4" />
      </video>
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: `
            radial-gradient(
              circle at 90% 8%,
              rgba(0,0,0,.75) 0%,
              rgba(0,0,0,.55) 25%,
              rgba(0,0,0,.25) 50%,
              transparent 75%
            ),

            radial-gradient(
              circle at center,
              rgba(255,255,255,.03) 0%,
              rgba(0,0,0,.15) 35%,
              rgba(0,0,0,.55) 65%,
              rgba(0,0,0,.9) 100%
            ),

            linear-gradient(
              180deg,
              rgba(0,0,0,.45) 0%,
              rgba(0,0,0,.3) 35%,
              rgba(0,0,0,.55) 65%,
              rgba(0,0,0,.92) 100%
            )
          `,
        }}
      />

      {/* Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className=" absolute right-[10%] hidden md:block bottom-40 z-30 w-[340px] rounded-[40px] bg-black/20 backdrop-blur-[5px] border border-white/10 shadow-[0_40px_120px_rgba(0,0,0,.55)] p-10 overflow-hidden "
      >
        <p className="uppercase tracking-[6px] text-xs text-[#d4c08a]">
          AI ANALYSIS
        </p>

        <h3 className="mt-6 font-serif text-4xl text-white leading-tight">
          Every move.
          <br />
          Calculated.
        </h3>

        <div className="mt-8 flex items-center justify-between">
          <span className="text-white/60">Accuracy</span>

          <span className="font-semibold text-3xl text-white">98%</span>
        </div>

        <div className="absolute inset-0 overflow-hidden rounded-[40px]">
          <div className="absolute -top-24 -left-10 w-64 h-64 bg-white/20 blur-3xl rotate-12" />
        </div>
      </motion.div>
    </section>
  );
}
