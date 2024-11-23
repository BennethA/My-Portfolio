import {
  RiCss3Fill,
  RiHtml5Fill,
  RiReactjsFill,
  RiJavascriptFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      ease: "linear",
      repeat: Infinity,
      duration: duration,
      repeatType: "reverse",
    },
  },
});

const technologies = [
  {
    icon: <RiHtml5Fill className="text-7xl text-[#0096FF]" />,
  },
  {
    icon: <RiCss3Fill className="text-7xl text-[#8E44AD]" />,
  },
  {
    icon: <RiJavascriptFill className="text-7xl text-[#F7DC6F]" />,
  },
  {
    icon: <RiTailwindCssFill className="text-7xl text-[#06B6D4]" />,
  },
  {
    icon: <RiReactjsFill className="text-7xl text-[#61DAFB]" />,
  },
];
const Technologies = () => {
  return (
    <div id="technologies" className="border-b border-neutral-900 py-12">
      <motion.h1
        transition={{ duration: 0.5 }}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="text-center text-xl md:text-6xl mb-6"
      >
        Technologies
      </motion.h1>
      <motion.div
        transition={{ duration: 1.5 }}
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {technologies.map((item, index) => (
          <motion.div
            key={index}
            initial="initial"
            animate="animate"
            variants={iconVariants(index + 1)}
            className="rounded-xl border-4 border-neutral-800 p-4"
          >
            {item.icon}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
