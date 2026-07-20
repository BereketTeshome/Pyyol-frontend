import { Menu, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const links = ["Home", "Openings", "Learn", "Masters", "Pricing"];

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-[1600px] mx-auto px-10 pt-8 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="font-black tracking-[8px] text-2xl text-[#2F2A23]"
        >
          Pyyol
        </motion.div>

        {/* Floating Nav */}
        <motion.nav
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="
            hidden
            lg:flex
            items-center
            gap-2
            px-3
            py-2
            rounded-full
            bg-[#f8f4ee2f]
            backdrop-blur-xl
            shadow-[0_8px_30px_rgba(0,0,0,0.05)]
            ring-1
            ring-white/60
          "
        >
          {links.map((item) => (
            <motion.a
              key={item}
              href="#"
              whileHover={{
                y: -1,
              }}
              transition={{
                duration: 0.18,
              }}
              className={`
                relative
                px-5
                py-2
                rounded-full
                text-[13px]
                font-medium
                tracking-wide
                transition-all
                duration-200                
                cursor-pointer 

                ${
                  item === "Home"
                    ? "bg-[#c4bfb585] text-[#2F2A23]"
                    : "text-[#756B5D] hover:bg-[#74716e4d] hover:text-[#2F2A23]"
                }
              `}
            >
              {item}
            </motion.a>
          ))}
        </motion.nav>

        {/* CTA */}
        <motion.button
          whileHover={{
            y: -1,
            scale: 1.02,
          }}
          whileTap={{
            scale: 0.98,
          }}
          transition={{
            duration: 0.2,
          }}
          className="
            flex
            items-center
            gap-2
            rounded-full
            bg-white
            border
            border-[#E3D6BE]
            px-6
            py-3
            text-[#2F2A23]
            font-medium
            shadow-[0_6px_20px_rgba(0,0,0,0.05)]
            hover:bg-[#FBF8F3]
            cursor-pointer
          "
        >
          Play
          <motion.div
            whileHover={{
              x: 2,
            }}
            transition={{
              duration: 0.2,
            }}
          >
            <ArrowUpRight size={17} />
          </motion.div>
        </motion.button>

        {/* Mobile */}
        <button className="lg:hidden cursor-pointer">
          <Menu />
        </button>
      </div>
    </header>
  );
}
