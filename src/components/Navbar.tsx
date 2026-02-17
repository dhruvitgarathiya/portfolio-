import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-[rgb(245,139,87)] border-b-4 border-black px-8 py-6 flex gap-10 uppercase font-black tracking-tight text-2xl md:text-3xl shadow-[0_8px_0px_0px_black]">

      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          isActive
            ? "bg-black text-[#F58B57] !text-[#F58B57] bg-black px-3 py-1 transition-all duration-200"
            : "text-black hover:tracking-wide hover:-translate-y-1 transition-all duration-200"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/education"
        className={({ isActive }) =>
          isActive
            ? "bg-black text-[#F58B57] !text-[#F58B57] bg-black px-3 py-1 transition-all duration-200"
            : "text-black hover:tracking-wide hover:-translate-y-1 transition-all duration-200"
        }
      >
        Education
      </NavLink>

      <NavLink
        to="/career"
        className={({ isActive }) =>
         isActive
            ? "bg-black text-[#F58B57] !text-[#F58B57] bg-black px-3 py-1 transition-all duration-200"
            : "text-black hover:tracking-wide hover:-translate-y-1 transition-all duration-200"
        }
      >
        Career
      </NavLink>

      <NavLink
        to="/projects"
        className={({ isActive }) =>
         isActive
            ? "bg-black text-[#F58B57] !text-[#F58B57] bg-black px-3 py-1 transition-all duration-200"
            : "text-black hover:tracking-wide hover:-translate-y-1 transition-all duration-200"
        }
      >
        Projects
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
         isActive
            ? "bg-black text-[#F58B57] !text-[#F58B57] bg-black px-3 py-1 transition-all duration-200"
            : "text-black hover:tracking-wide hover:-translate-y-1 transition-all duration-200"
        }
      >
        Connect
      </NavLink>
      <NavLink
        to="inspiration"
        className={({ isActive }) =>
          isActive
            ? "bg-black text-[#F58B57] !text-[#F58B57] bg-black px-3 py-1 transition-all duration-200"
            : "text-black hover:tracking-wide hover:-translate-y-1 transition-all duration-200"
        }
      >
        inspiration
      </NavLink>

    </nav>
  );
};

export default Navbar;
