import { motion } from "framer-motion";

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
          className="flex justify-center h-[300px] w-full lg:w-1/2 overflow-hidden"
        >
          <img
            src=""
            alt="about"
            className="rounded-lg"
          />
        </motion.div>
        <motion.p
          transition={{ duration: 0.5 }}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="w-full lg:w-1/2"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro labore
          quidem necessitatibus quod obcaecati delectus similique sint sit?
          Commodi, deserunt autem molestiae magni libero labore. Consequuntur
          voluptatem nostrum culpa fugit.
        </motion.p>
      </div>
    </div>
  );
};

export default About;
