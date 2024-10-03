import { NavLink } from "react-router-dom";
import { nav } from "../data/nav";

const Header = () => {
  return (
    <header className="bg-white w-full h-[90px] max-h-[90px] overflow-hidden z-[10]">
      <div className="w-full max-w-[1374px] mx-auto flex flex-row justify-between px-[16px] items-end">
        <NavLink to="/">
          <img src="/logo.png" width={130.5} height={90} alt="logo" />
        </NavLink>

        <nav className="flex flex-row gap-[35px]">
          {nav.map((item, key) => (
            <NavLink
              key={key}
              to={item.link}
              className={({ isActive }) =>
                `${
                  isActive ? "text-[#315EAB]" : "text-[#2c2c2c]"
                } transition-colors duration-[250ms] font-medium text-[18px] mb-[20px]`
              }
            >
              {item.text}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
