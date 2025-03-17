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
    },
    {
      link: "http://x.com/dev_benneth",
      icon: <FaSquareXTwitter />,
      name: "X",
    },
    {
      link: "mailto:addobenneth6@gmail.com",
      icon: <MdEmail />,
      name: "GMail",
    },
    {
      link: "https://github.com/BennethA",
      icon: <BsGithub />,
      name: "Github",
    },
  ];
  return (
    <div id="contact" className="border-b border-neutral-900 py-12">
      <motion.h2
        transition={{ duration: 1.5 }}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="text-center text-xl md:text-6xl mb-6"
      >
        Get in Touch
      </motion.h2>
      <div className="flex flex-col items-center gap-3">
        <div className="flex flex-col gap-2">
          {socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: index+1 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="border-b flex items-center gap-3 hover:text-purple-600"
            >
              <span className="text-2xl">{social.icon}</span>
              <span className="font-bold">{social.name}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
