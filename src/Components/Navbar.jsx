import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = [
    { path: "hero", name: "Home" },
    { path: "about", name: "About" },
    { path: "technologies", name: "Technologies" },
    { path: "projects", name: "Projects" },
    { path: "design", name: "Design" },
    { path: "contact", name: "Contact" },
  ];

  const handleScroll = (anchor) => {
    const section = document.querySelector(`#${anchor}`);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-20">
      <div className="mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-4 py-3 backdrop-blur md:px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-gradient-to-br from-amber-300/20 via-sky-500/10 to-transparent text-lg font-semibold">
            BA
          </div>
          <div className="leading-tight">
            <p className="font-display text-lg">Benneth Addo</p>
            <p className="text-xs text-slate-400">Frontend Developer</p>
          </div>
        </div>

        <div className="hidden sm:block">
          <ul className="flex gap-6 text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">
            {navigate.map((item, index) => (
              <li key={index}>
                <NavLink
                  className="hover:text-amber-200 focus-visible:text-amber-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded"
                  to="#"
                  onClick={() => handleScroll(item.path)}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <button
          type="button"
          onClick={() => setOpenMenu(!openMenu)}
          aria-expanded={openMenu}
          aria-controls="mobile-menu"
          aria-label={openMenu ? "Close menu" : "Open menu"}
          className="sm:hidden text-2xl text-slate-200 hover:text-amber-200"
        >
          {openMenu ? <BiX /> : <BiMenu />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`sm:hidden fixed transition-all duration-500 top-[88px] translate-x-[-100%] left-4 right-4 rounded-2xl border border-white/10 bg-black/70 px-6 py-6 text-sm font-semibold uppercase tracking-[0.2em] text-slate-200 backdrop-blur ${
          openMenu ? "translate-x-[0%]" : ""
        }`}
      >
        <ul className="flex flex-col gap-4">
          {navigate.map((item, index) => (
            <li key={index} className="flex">
              <Link
                to="#"
                onClick={() => {
                  setOpenMenu(false);
                  handleScroll(item.path);
                }}
                className="hover:text-amber-200 focus-visible:text-amber-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
