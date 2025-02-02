import { motion } from "framer-motion";
import { IoIosInformationCircle } from "react-icons/io";

const About = () => {
  return (
    <div id="about" className="border-b border-neutral-900 py-12">
      <motion.h1
        transition={{ duration: 0.5 }}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="text-center text-xl md:text-6xl mb-6"
      >
        About
        <span className="text-[rebeccapurple]"> Me</span>
      </motion.h1>

      <div className="flex flex-wrap justify-between items-center sm:gap-3 lg:gap-0">
        <motion.div
          transition={{ duration: 0.5 }}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex justify-center h-[300px] w-full lg:w-1/2 overflow-hidden items-center"
        >
        <IoIosInformationCircle className="h-[200px] w-auto text-white bg-none"/>
        </motion.div>
        <motion.p
          transition={{ duration: 0.5 }}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="w-full lg:w-1/2"
        >
          Hello! I'm Benneth Addo, a frontend developer with a passion for building beautiful, functional, and user-friendly web applications. With experience in HTML, CSS, JavaScript, React Js and Tailwind CSS, I'm dedicated to delivering high quality solutions and exceed expectations.
        </motion.p>
      </div>
    </div>
  );
};

export default About;
