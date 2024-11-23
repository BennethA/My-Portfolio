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
    { path: "contact", name: "Contact" },
  ];

  const handleScroll = (anchor) => {
    const section = document.querySelector(`#${anchor}`);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="flex justify-between items-center py-3 fixed bg-gradient-to-br from-black to-[#130113] z-10 right-0 left-0 top-0 px-4 md:px-11 lg:px-32">
      <div className="font-bold text-2xl">
        B<span className="text-[rebeccapurple] ml-[1px]">A</span>
      </div>
      <div className="hidden sm:block">
        <ul className="flex  gap-3 font-semibold">
          {navigate.map((item, index) => (
            <li key={index}>
              <NavLink
                className="hover:text-purple-700"
                to="#"
                onClick={() => handleScroll(item.path)}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div
        onClick={() => setOpenMenu(!openMenu)}
        className={`sm:hidden text-2xl cursor-pointer hover:opacity-80`}
      >
        {openMenu ? <BiX /> : <BiMenu />}
      </div>
      <div
        className={`sm:hidden fixed transition-all duration-500 top-[54px] translate-x-[-100%] left-0 w-[270px] px-[30px] py-[20px] text-[17px] font-semibold overflow-y-auto border-r-2 bottom-0 bg-gradient-to-br from-black to-[#130113] ${
          openMenu ? "translate-x-[0%]" : ""
        }
        `}
      >
        {navigate.map((item, index) => (
          <li key={index} className="flex">
            <Link
              to="#"
              onClick={() => {
                setOpenMenu(false);
                handleScroll(item.path);
              }}
              className={`mt-4 font-bold hover:text-purple-700 `}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
