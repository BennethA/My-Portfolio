import Hero from "./Hero";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Technologies from "./Technologies";

const Home = () => {
  return (
    <div className="space-y-4">
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
