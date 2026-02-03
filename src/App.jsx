import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#05060a] text-slate-100 selection:bg-amber-300 selection:text-slate-900">
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <div className="relative">
        <div className="hero-orb pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 opacity-80 blur-2xl" />
        <div className="px-4 md:px-10 lg:px-20">
          <Router>
            <Navbar />
            <main id="main" tabIndex={-1}>
              <Routes>
                <Route exact path="/" element={<Home />} />
              </Routes>
            </main>
          </Router>
        </div>
      </div>
    </div>
  );
};

export default App;
