import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import jodelImg from "../assets/images/jodel-clone.jpg";
import zippyCartImg from "../assets/images/zippycart.png";
import invoiceAppImg from "../assets/images/invoice-app.jpg";
import logWorldImg from "../assets/images/log-world.jpg";
import ak3ak3 from "../assets/images/designs/Ak3 Ak3 balm.jpeg";
import emishair from "../assets/images/designs/Emi's Hair.jpeg";
import bellelove from "../assets/images/designs/Bellelove.jpeg";
import byHisGrace from "../assets/images/designs/By His Grace.jpeg";
import dorasKitchen from "../assets/images/designs/Dora's Kitchen.jpeg";
import felijaysCuisine from "../assets/images/designs/Felijay's Cuisine.jpeg";
import gyeNyame from "../assets/images/designs/Gye Nyame.jpeg";
import namingCeremony from "../assets/images/designs/Naming Cermony Card.jpeg";
import roofConstruction from "../assets/images/designs/Construction.jpeg";
import soulsLivingFaith from "../assets/images/designs/Souls Living Faith.jpeg";

const Projects = () => {
  const [activeDesign, setActiveDesign] = useState(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveDesign(null);
      }
    };

    if (activeDesign) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeDesign]);

  const devProjects = [
    {
      title: "ZippyCart",
      image: zippyCartImg,
      description:
        "A premium commerce experience focused on crisp UI, fast navigation, and a refined shopping flow.",
      technologies: ["React", "Tailwind", "Vercel"],
      link: "https://zippy-cart.vercel.app",
      githubLink: "https://github.com/BennethA/ZippyCart",
      impact: "Speed-first UX / Product storytelling",
    },
    {
      title: "Travel Agency",
      image: logWorldImg,
      description:
        "A campaign-style travel site with immersive visuals and conversion-ready layout sections.",
      technologies: ["React", "Tailwind", "Motion", "Vercel"],
      link: "https://log-world.vercel.app/",
      githubLink: "https://github.com/BennethA/LogWorld",
      impact: "Storytelling / Lead capture",
    },
    {
      title: "Jodel Clone",
      image: jodelImg,
      description:
        "Anonymous social feed UX with clean interactions and fast content discovery.",
      technologies: ["React", "Tailwind", "UI Systems", "Vercel"],
      link: "https://jodel-clone.vercel.app",
      githubLink: "https://github.com/BennethA/Jodel-Clone",
      impact: "Community UX / Rapid iteration",
    },
    {
      title: "Invoice Management",
      image: invoiceAppImg,
      description:
        "Structured invoice builder designed for clarity, accuracy, and confident client delivery.",
      technologies: ["React", "Tailwind", "Vercel"],
      link: "https://formix-swart.vercel.app/",
      githubLink: "https://github.com/BennethA/Formix",
      impact: "Operational clarity",
    },
  ];

  const designProjects = [
    {
      title: "Ak3 Ak3 Balm Flyer",
      image: ak3ak3,
      description:
        "A crisp product flyer highlighting benefits, usage, and pricing with a retail-ready call to action.",
      tools: ["Photoshop", "CorelDRAW"],
      impact: "Product launch / Print-ready",
    },
    {
      title: "Emi's Hair Campaign",
      image: emishair,
      description:
        "A salon promo set built for instant recognition, bold offers, and shareable social layouts.",
      tools: ["Photoshop", "CorelDRAW"],
      impact: "Brand visibility / Social promo",
    },
    {
      title: "Bellelove Catering",
      image: bellelove,
      description:
        "An appetizing banner set spotlighting menu variety, event packages, and booking details.",
      tools: ["Photoshop", "CorelDRAW"],
      impact: "Event marketing",
    },
    {
      title: "By His Grace",
      image: byHisGrace,
      description:
        "A faith-based poster with calm color, strong typography, and clear event details.",
      tools: ["Photoshop", "CorelDRAW"],
      impact: "Community event / Poster",
    },
    {
      title: "Dora's Kitchen",
      image: dorasKitchen,
      description:
        "Food banner concept featuring appetizing imagery, clear menu highlights, and an order CTA.",
      tools: ["Photoshop", "Canva"],
      impact: "Food marketing / Order",
    },
    {
      title: "Felijay's Cuisine",
      image: felijaysCuisine,
      description:
        "A clean catering flyer built for fast scanning with a focus on dishes and contact info.",
      tools: ["Photoshop", "CorelDRAW"],
      impact: "Catering promo",
    },
    {
      title: "Gye Nyame",
      image: gyeNyame,
      description:
        "A cultural poster centered on the emblem with elevated typography for a premium finish.",
      tools: ["Photoshop"],
      impact: "Cultural branding / Poster",
    },
    {
      title: "Naming Ceremony Card",
      image: namingCeremony,
      description:
        "An elegant invitation card with soft hierarchy, script accents, and clear ceremony details.",
      tools: ["CorelDRAW"],
      impact: "Event invite / Print-ready",
    },
    {
      title: "Roof Construction",
      image: roofConstruction,
      description:
        "A service flyer focused on trust, craftsmanship, and a straightforward inquiry call.",
      tools: ["CorelDRAW"],
      impact: "Service promo / Lead capture",
    },
    {
      title: "Souls Living Faith",
      image: soulsLivingFaith,
      description:
        "A ministry flyer with bold messaging, structured sections, and a clear invite path.",
      tools: ["Photoshop", "CorelDRAW"],
      impact: "Ministry event / Outreach",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <motion.h1
        transition={{ duration: 0.5 }}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="font-display text-3xl md:text-5xl"
      >
        Development Projects
      </motion.h1>
      <motion.p
        transition={{ duration: 0.5 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mt-4 max-w-2xl text-lg text-slate-300"
      >
        A curated set of builds that highlight my focus on clean architecture,
        standout UI polish, and conversion-aware layout decisions.
      </motion.p>

      <motion.div className="mt-10 grid gap-6 lg:grid-cols-2">
        {devProjects.map((project, index) => (
          <div
            key={index}
            className="glass-panel rounded-3xl p-6 transition hover:-translate-y-1 hover:border-amber-200/40"
          >
            <motion.div
              transition={{ duration: 1.5 }}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex h-[240px] w-full items-center overflow-hidden rounded-2xl border border-white/10 bg-black/30"
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full object-cover"
              />
            </motion.div>
            <motion.div
              transition={{ duration: 1.5 }}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="mt-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h6 className="text-2xl font-semibold">{project.title}</h6>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-slate-400">
                  {project.impact}
                </span>
              </div>
              <p className="mt-3 text-slate-300">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={project.link}
                  className="rounded-full bg-amber-300 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-900 hover:bg-amber-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  View Live
                </a>
                <a
                  href={project.githubLink}
                  className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 hover:border-amber-200 hover:text-amber-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  View Code
                </a>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((techs, idx) => (
                  <div
                    key={idx}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400"
                  >
                    {techs}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </motion.div>

      <motion.h2
        id="design"
        transition={{ duration: 0.5 }}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="mt-20 font-display text-3xl md:text-5xl"
      >
        Design Projects
      </motion.h2>
      <motion.p
        transition={{ duration: 0.5 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mt-4 max-w-2xl text-lg text-slate-300"
      >
        Visual work crafted for flyers, banners, and branded marketing assets
        that communicate quickly and look premium in print or digital spaces.
      </motion.p>

      <motion.div className="mt-10 grid gap-6 lg:grid-cols-3">
        {designProjects.map((project, index) => (
          <div
            key={index}
            className="glass-panel rounded-3xl p-6 transition hover:-translate-y-1 hover:border-amber-200/40"
          >
            <motion.div
              transition={{ duration: 1.2 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex h-[220px] w-full items-center overflow-hidden rounded-2xl border border-white/10 bg-black/30"
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full object-cover"
              />
            </motion.div>

            <div className="mt-6">
              <div className="flex items-center justify-between">
                <h6 className="text-xl font-semibold">{project.title}</h6>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-slate-400">
                  {project.impact}
                </span>
              </div>
              <p className="mt-3 text-sm text-slate-300">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tools.map((tool, idx) => (
                  <div
                    key={idx}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400"
                  >
                    {tool}
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={() => setActiveDesign(project)}
                className="mt-5 inline-flex rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 hover:border-amber-200 hover:text-amber-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                View Design
              </button>
            </div>
          </div>
        ))}
      </motion.div>

      {activeDesign &&
        createPortal(
          <div
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 99999,
              background: "rgba(0, 0, 0, 0.85)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "2.5rem 1rem",
            }}
            role="dialog"
            aria-modal="true"
            aria-label={`${activeDesign.title} preview`}
            onClick={() => setActiveDesign(null)}
          >
            <div
              style={{
                maxHeight: "90vh",
                width: "80%",
                maxWidth: "40rem",
                display: "flex",
                flexDirection: "column",
                borderRadius: "1.5rem",
                border: "1px solid rgba(255,255,255,0.15)",
                background: "#0b0f1a",
                padding: "1.5rem",
                boxShadow: "0 30px 80px rgba(0,0,0,0.45)",
              }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="mt-2 text-2xl font-semibold">
                  {activeDesign.title}
                </h3>
                <button
                  type="button"
                  onClick={() => setActiveDesign(null)}
                  className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 hover:border-amber-200 hover:text-amber-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  Close
                </button>
              </div>
              <div
                className="mt-6 rounded-2xl border border-white/10 p-4"
                style={{ maxHeight: "70vh", overflow: "auto" }}
              >
                <img
                  src={activeDesign.image}
                  alt={activeDesign.title}
                  className="mx-auto w-auto h-auto rounded-xl object-contain"
                  style={{ maxHeight: "68vh" }}
                />
              </div>
            </div>
          </div>,
          document.body,
        )}
    </section>
  );
};

export default Projects;
