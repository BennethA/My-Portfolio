import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      id="hero"
      className="border-b border-neutral-900 flex flex-wrap items-center justify-between py-12 sm:gap-3 lg:gap-0"
    >
      <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2 gap-7">
        <motion.h1
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-thin tracking-tighter lg:text-8xl"
        >
          Benneth Addo
        </motion.h1>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
        >
          Frontend Developer
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="my-2
             max-w-xl font-light tracking-tighter"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi a
          placeat voluptatem, corrupti soluta labore sequi ea? Dolorum
          exercitationem enim magni maiores, reprehenderit soluta. Reprehenderit
          necessitatibus facilis impedit? Laboriosam, ipsam!
        </motion.p>
      </div>

      <motion.div
        transition={{ duration: 0.5 }}
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="w-full lg:w-1/2 h-[300px] flex justify-center rounded-lg"
      >
        <img
          alt="Profile"
          className="rounded-lg"
          src=""
        />
      </motion.div>
    </div>
  );
};

export default Hero;
