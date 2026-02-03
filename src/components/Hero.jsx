import { motion } from "motion/react";

const Hero = () => {
  return (
    <section id="hero" className="pt-32 pb-16">
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -60 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-amber-200/80">
            Portfolio
          </p>
          <h1 className="font-display text-5xl leading-tight md:text-6xl lg:text-7xl">
            Designing bold, high-performing frontend experiences.
          </h1>
          <p className="text-lg text-slate-300">
            I build responsive, animated interfaces that convert complex product
            ideas into clear, elegant web journeys.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-amber-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/90 hover:border-amber-200 hover:text-amber-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Let’s Collaborate
            </a>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-slate-400">
            <div>
              <p className="text-2xl font-semibold text-white">4+ years</p>
              <p>Frontend delivery</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-white">12 projects</p>
              <p>Shipped in production</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          transition={{ duration: 0.6 }}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="glass-panel rounded-3xl p-6"
        >
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Current Focus
              </p>
              <p className="mt-3 text-xl font-semibold text-white">
                Crafting smooth product pages and bold marketing visuals.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Availability
              </p>
              <p className="mt-3 text-xl font-semibold text-white">
                Open for freelance collaborations.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Location
              </p>
              <p className="mt-3 text-xl font-semibold text-white">
                Remote · Accra, Ghana
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
