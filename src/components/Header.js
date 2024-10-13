import { NavLink } from "react-router-dom";
import { nav } from "../data/nav";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { useState } from "react";

const containerVariant = {
  initial: { bottom: "-100%", transition: { type: "spring" } },
  isOpen: { bottom: "0%" },
  exit: { bottom: "-100%" },
};

const Header = ({}) => {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    if (menu) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [menu]);

  return (
    <>
      <header className="bg-white w-full h-[90px] [@media(max-width:1050px)]:h-[60px] max-h-[90px] [@media(max-width:1050px)]:max-h-[60px] overflow-hidden z-[10]">
        <div className="w-full max-w-[1374px] mx-auto flex flex-row justify-between px-[16px] items-end">
          <NavLink to="/">
            <img
              src="/logo.png"
              width={130.5}
              height={90}
              alt="logo"
              className="[@media(max-width:1050px)]:w-[86.56px] [@media(max-width:1050px)]:h-[60px]"
            />
          </NavLink>

          <nav className="flex flex-row gap-[35px] [@media(max-width:1050px)]:hidden">
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

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            className="cursor-pointer [@media(min-width:1050px)]:hidden my-auto"
            onClick={() => setMenu(true)}
          >
            <path
              fill="none"
              stroke="#313b57"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 6.001h18m-18 6h18m-18 6h18"
            />
          </svg>
        </div>
      </header>

      <AnimatePresence>
        {menu && (
          <>
            <motion.div
              className="z-[200] w-full h-full bg-[#141414] fixed left-0 bottom-0"
              initial={"initial"}
              animate={"isOpen"}
              exit={"exit"}
              variants={containerVariant}
            >
              {/* modal header */}
              <div className=" max-w-[978px] px-[12px] [@media(max-width:1050px)]:max-w-[498px] mx-auto w-full border-b-[0.7px] flex justify-between bg-[#141414] h-[60px] border-b-[#141414]">
                <img
                  src="/logo_dark.png"
                  width={130.5}
                  height={90}
                  alt="logo"
                  style={{
                    mixBlendMode: "screen",
                  }}
                  className="[@media(max-width:1050px)]:w-[86.56px] [@media(max-width:1050px)]:h-[60px]"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30px"
                  height="30px"
                  viewBox="0 0 24 24"
                  className="my-auto"
                  onClick={() => setMenu(false)}
                >
                  <path
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeWidth={2}
                    d="M20 20 4 4m16 0L4 20"
                  />
                </svg>
              </div>
              {/* modal header */}

              <div className="bg-[#141414] max-w-[978px] px-[12px] [@media(max-width:1050px)]:max-w-[498px] mt-[20px] mx-auto">
                <nav className="flex flex-col gap-[12px] w-full">
                  {nav.map((item, key) => (
                    <NavLink
                      key={key}
                      to={item.link}
                      className={({ isActive }) =>
                        `${
                          isActive ? "text-[#315EAB]" : "text-[#fff]"
                        } transition-colors duration-[250ms] font-medium text-[18px]`
                      }
                      onClick={() => setMenu(false)}
                    >
                      {item.text}
                    </NavLink>
                  ))}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
