import { motion } from "motion/react";

const Projects = () => {
  const projects = [
    {
      title: "Jodel Clone",
      image: "https://raw.githubusercontent.com/BennethA/My-Portfolio/refs/heads/main/public/jodel-clone.jpg",
      description:
        "This project aims to replicate the core features of Jodel, allowing users to share anonymous posts and engage with others in their vicinity.",
      technologies: ["HTML", "CSS", "React JS", "Tailwind CSS"],
      link: "https://jodel-clone.vercel.app",
      githubLink: "https://github.com/BennethA/Jodel-Clone",
    },
    {
      title: "Shop-Zone",
      image: "https://raw.githubusercontent.com/BennethA/My-Portfolio/refs/heads/main/public/shop-zone.png",
      description:
        "Shop-Zone is a cutting-edge e-commerce platform built with React JS and styled with Tailwind CSS. Deployed on Vercel for lightning-fast performance.",
      technologies: ["HTML", "CSS", "React JS", "Tailwind CSS"],
      link: "https://shop-zone-ruby.vercel.app",
      githubLink: "https://github.com/BennethA/Shop-Zone",
    },
  ];
  return (
    <div id="projects" className="border-b border-neutral-900 py-12">
      <motion.h1
        transition={{ duration: 0.5 }}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="text-center text-xl md:text-6xl mb-6"
      >
        Projects
      </motion.h1>
      <motion.div>
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-wrap lg:justify-center border-b border-[#9452d6] last:border-none py-6 items-center md:gap-3 lg:gap-0"
          >
            <motion.div
              transition={{ duration: 1.5 }}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="w-full lg:w-1/2 lg:p-8 h-[300px] flex justify-center overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg"
              />
            </motion.div>
            <motion.div
              transition={{ duration: 1.5 }}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="w-full max-w-xl lg:w-1/2"
            >
              <h6 className="mb-2 font-semibold text-2xl">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <a
                href={project.link}
                className="text-purple-600 underline bg-neutral-900 rounded p-1 mr-2"
              >
                Project Link
              </a>
              <a
                href={project.githubLink}
                className="text-purple-600 underline bg-neutral-900 rounded p-1"
              >
                Github Link
              </a>

              <div className="flex mt-4">
                {project.technologies.map((techs, index) => (
                  <div
                    key={index}
                    className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800 "
                  >
                    {techs}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
