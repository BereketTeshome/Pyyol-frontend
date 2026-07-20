import { motion } from "framer-motion";
import HeroArtwork from "./HeroArtwork";
import Fog from "./Fog";

export default function Hero() {
  return (
    <section className="relative min-h-[130vh] overflow-hidden bg-[#F7F4EE]">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#faf8f4] via-[#f5f0e8] to-[#ece2d1]" />

      {/* Light */}
      <div className="absolute top-0 right-0 w-[900px] h-[900px] bg-[#d7bf8a]/20 blur-[180px] rounded-full" />

      <div className="absolute -left-60 top-40 w-[700px] h-[700px] bg-white blur-[180px] rounded-full opacity-80" />

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
        <p className="uppercase tracking-[10px] text-[#b89253] text-sm mb-8">
          Pyyol Chess Experience
        </p>

        <h1 className="font-serif text-[95px] xl:text-[103px] leading-[0.82] text-[#221d1a]">
          Rule
          <br />
          The
          <br />
          Board.
        </h1>

        <p className="mt-10 text-lg leading-9 text-neutral-600 max-w-md">
          Master every move with AI analysis, legendary openings and premium
          chess experiences designed for champions.
        </p>
      </motion.div>
      <div
        className="absolute inset-0 opacity-[0.7] mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage: "url('/marble.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        // className="absolute right-[14%] bottom-24 z-30 w-[320px] rounded-[34px] border border-white/50 bg-white/30 backdrop-blur-3xl p-8 shadow-2xl"
        className=" absolute right-[10%] hidden md:block bottom-40 z-30 w-[340px] rounded-[40px] bg-white/7 backdrop-blur-[5px] border border-white/40 shadow-[0_30px_80px_rgba(0,0,0,.12)] p-10 overflow-hidden "
      >
        <p className="uppercase tracking-[6px] text-xs text-[#b89253]">
          AI ANALYSIS
        </p>

        <h3 className="mt-6 font-serif text-4xl leading-tight">
          Every move.
          <br />
          Calculated.
        </h3>

        <div className="mt-8 flex items-center justify-between">
          <span className="text-neutral-500">Accuracy</span>

          <span className="font-semibold text-3xl">98%</span>
        </div>

        <div className="absolute inset-0 overflow-hidden rounded-[40px]">
          <div className="absolute -top-24 -left-10 w-64 h-64 bg-white/20 blur-3xl rotate-12" />
        </div>
      </motion.div>
    </section>
  );
}
