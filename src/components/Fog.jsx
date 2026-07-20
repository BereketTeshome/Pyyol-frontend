import { motion } from "framer-motion";

export default function Fog() {
  return (
    <>
      <motion.div
        animate={{
          x: [-120, 120, -120],
          opacity: [0.18, 0.28, 0.18],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-0 top-24 w-[900px] h-[420px] rounded-full bg-white blur-[120px]"
      />

      <motion.div
        animate={{
          x: [120, -120, 120],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute right-0 bottom-20 w-[1000px] h-[500px] rounded-full bg-[#fff8ef] blur-[160px]"
      />
    </>
  );
}
