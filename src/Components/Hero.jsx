import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      id="hero"
      className="border-b border-neutral-900 flex flex-wrap items-center justify-between py-12 sm:gap-3 lg:gap-0"
    >
      <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center lg:items-start w-full lg:w-1/2 gap-7">
        <h1
          className="text-6xl font-thin tracking-tighter lg:text-8xl"
        >
          Benneth Addo
        </h1>
        <p
          className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
        >
          Frontend Developer
        </p>
      </motion.div>

      <motion.div
        transition={{ duration: 0.5 }}
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="w-full lg:w-1/2 h-[300px] flex justify-center rounded-lg"
      >
        <img
          alt="Setup"
          className="rounded-lg h-full w-full object-contain"
          src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/04/web-developer-portfolio.webp"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
