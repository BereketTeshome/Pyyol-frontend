import { Menu, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const links = ["Home", "Openings", "Learn", "Masters", "Pricing"];

export default function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-[100]">
      <div className="mx-auto flex max-w-[1700px] items-center justify-between px-8 xl:px-12 pt-8">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="select-none"
        >
          <h1 className="text-2xl font-black tracking-[9px] text-white">
            Pyyol
          </h1>
        </motion.div>

        {/* Navigation */}
        <motion.nav
          initial={{ y: -25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="
            hidden
            lg:flex
            items-center
            gap-2
            rounded-full
            border
            border-white/10
            bg-gray-100/10
            backdrop-blur-3xl
            px-3
            py-3
            shadow-[0_20px_60px_rgba(0,0,0,.35)]
          "
        >
          {links.map((item) => (
            <motion.a
              key={item}
              href="#"
              whileHover={{
                y: -2,
              }}
              transition={{
                duration: 0.18,
              }}
              className={`
                relative
                rounded-full
                px-6
                py-2.5
                text-[13px]
                font-medium
                tracking-[0.18em]
                transition-all
                duration-300

                ${
                  item === "Home"
                    ? "bg-white/10 text-white shadow-[0_0_30px_rgba(255,255,255,.08)]"
                    : "text-white/70 hover:bg-white/8 hover:text-white"
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
            scale: 1.03,
            y: -2,
          }}
          whileTap={{
            scale: 0.98,
          }}
          className="
            group
            relative
            hidden
            md:flex
            items-center
            gap-3
            overflow-hidden
            rounded-full
            right-3
            border
            border-white/15

            bg-[rgba(20,20,20,0.68)]
            backdrop-blur-[24px]

            px-7
            py-3.5

            font-medium
            text-white

            shadow-[0_15px_50px_rgba(0,0,0,.45)]

            transition-all
            duration-300

            hover:border-[#D4C08A]/40
            hover:bg-[rgba(25,25,25,0.78)]
            hover:shadow-[0_0_45px_rgba(212,192,138,.18)]

            cursor-pointer
            "
        >
          <span>Play Now</span>

          <motion.div className="relative z-10" whileHover={{ x: 2, y: -2 }}>
            <ArrowUpRight size={18} color="#D4C08A" />
          </motion.div>
        </motion.button>

        {/* Mobile */}
        <button
          className="
            lg:hidden
            flex
            items-center
            justify-center
            h-12
            w-12
            rounded-full
            border
            border-white/10
            bg-black/20
            backdrop-blur-xl
            text-white
          "
        >
          <Menu size={22} />
        </button>
      </div>
    </header>
  );
}
