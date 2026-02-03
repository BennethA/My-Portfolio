import { motion } from "motion/react";
import { IoIosInformationCircle } from "react-icons/io";

const About = () => {
  return (
    <section id="about" className="py-20">
      <motion.h1
        transition={{ duration: 0.5 }}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="font-display text-3xl md:text-5xl"
      >
        About the Builder
      </motion.h1>

      <div className="mt-8 grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
        <motion.div
          transition={{ duration: 0.5 }}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="glass-panel rounded-3xl p-8"
        >
          <div className="flex flex-col gap-6">
            <IoIosInformationCircle className="h-16 w-16 text-amber-200" />
            <p className="text-xl font-semibold text-white">
              I translate product goals into refined, user-centered interfaces.
            </p>
            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-slate-400">
              <span>UX Flow</span>
              <span>Design Systems</span>
              <span>Motion</span>
              <span>Flyers</span>
              <span>Banners</span>
            </div>
          </div>
        </motion.div>

        <motion.p
          transition={{ duration: 0.5 }}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-lg leading-relaxed text-slate-300"
        >
          Hello! I'm Benneth Addo, a frontend developer and visual designer
          focused on building high-impact web experiences that feel premium,
          performant, and clear. My strength is combining React, Motion, and
          Tailwind CSS with brand-forward design for flyers, banners, and
          marketing assets that align teams around a sharp visual story. I care
          deeply about clean structure, accessible UX, and detail-driven
          interactions.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
