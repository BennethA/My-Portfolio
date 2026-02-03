import {
  RiCss3Fill,
  RiHtml5Fill,
  RiReactjsFill,
  RiJavascriptFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { motion } from "motion/react";
import { DiPhotoshop } from "react-icons/di";
import { SiCoreldraw } from "react-icons/si";

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
    name: "HTML5",
  },
  {
    icon: <RiCss3Fill className="text-7xl text-[#8E44AD]" />,
    name: "CSS3",
  },
  {
    icon: <RiJavascriptFill className="text-7xl text-[#F7DC6F]" />,
    name: "JavaScript",
  },
  {
    icon: <RiTailwindCssFill className="text-7xl text-[#06B6D4]" />,
    name: "Tailwind CSS",
  },
  {
    icon: <RiReactjsFill className="text-7xl text-[#61DAFB]" />,
    name: "React",
  },
  {
    icon: <SiCoreldraw className="text-7xl text-[#26b008]" />,
    name: "CorelDraw",
  },
  {
    icon: <DiPhotoshop className="text-7xl text-[#61DAFB]" />,
    name: "Photoshop",
  },
];
const Technologies = () => {
  return (
    <section id="technologies" className="py-20">
      <motion.h1
        transition={{ duration: 0.5 }}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="font-display text-3xl md:text-5xl"
      >
        Tools I Build With
      </motion.h1>
      <motion.div
        transition={{ duration: 1 }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mt-10 gap-7 flex items-center justify-center flex-wrap"
      >
        {technologies.map((item, index) => (
          <motion.div
            key={index}
            initial="initial"
            animate="animate"
            variants={iconVariants(index + 1)}
            className="glass-panel flex flex-col flex-wrap items-center gap-4 rounded-2xl p-6 text-center"
          >
            {item.icon}
            <p className="text-sm font-semibold text-slate-200">{item.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Technologies;
