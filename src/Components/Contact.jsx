import { motion } from "motion/react";
import { MdEmail } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { FaSquareXTwitter, FaWhatsapp } from "react-icons/fa6";

const Contact = () => {
  const socials = [
    {
      link: "http://wa.me/0539540191",
      icon: <FaWhatsapp />,
      name: "WhatsApp",
      detail: "Quick chat",
    },
    {
      link: "http://x.com/dev_benneth",
      icon: <FaSquareXTwitter />,
      name: "X",
      detail: "Design thoughts",
    },
    {
      link: "mailto:addobenneth6@gmail.com",
      icon: <MdEmail />,
      name: "Gmail",
      detail: "Email me",
    },
    {
      link: "https://github.com/BennethA",
      icon: <BsGithub />,
      name: "GitHub",
      detail: "Code portfolio",
    },
  ];
  return (
    <section id="contact" className="pb-24 pt-20">
      <motion.h2
        transition={{ duration: 1.5 }}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="font-display text-3xl md:text-5xl"
      >
        Let’s Build Something Magnetic
      </motion.h2>
      <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        <motion.div
          transition={{ duration: 0.8 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="glass-panel rounded-3xl p-8"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-amber-200/80">
            Availability
          </p>
          <p className="mt-4 text-2xl font-semibold text-white">
            Open for product design + frontend delivery in Q2 2026.
          </p>
          <p className="mt-4 text-slate-300">
            If you have a launch, redesign, or new product concept, I can help
            shape the interface, design marketing assets, and ship the React
            build.
          </p>
          <a
            href="mailto:addobenneth6@gmail.com"
            className="mt-6 inline-flex rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-amber-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            Send an Email
          </a>
        </motion.div>

        <div className="flex flex-col gap-3">
          {socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: index + 1 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="glass-panel flex items-center justify-between gap-3 rounded-2xl px-5 py-4 hover:border-amber-200/50 focus-visible:text-amber-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl text-amber-200">{social.icon}</span>
                <div>
                  <p className="font-semibold text-white">{social.name}</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                    {social.detail}
                  </p>
                </div>
              </div>
              <span className="text-sm text-slate-400">→</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
