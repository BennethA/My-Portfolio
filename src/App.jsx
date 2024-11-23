import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="mt-10 overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 bg-gradient-to-br from-black via-[#130113] to-black">
      <div className="px-4 md:px-11 lg:px-32">
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;
