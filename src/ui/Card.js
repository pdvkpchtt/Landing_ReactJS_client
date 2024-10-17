import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const Card = ({
  width = 307,
  text = "",
  id = 0,
  onClick = () => {},
  selectedId = 0,
  setSelectedId = () => {},
  fullText = "",
}) => {
  const modalVariant = {
    initial: { opacity: 0 },
    isOpen: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const containerVariant = {
    initial: { bottom: "-100%", transition: { type: "spring" } },
    isOpen: { bottom: "0%" },
    exit: { bottom: "-100%" },
  };

  useEffect(() => {
    if (selectedId != null) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [selectedId]);

  return (
    <>
      <motion.div
        layoutId={id}
        className="p-[15px] border-b-[15px] border-[#315EAB] flex flex-col items-center justify-between gap-[20px] shadow-2xl relative"
        style={{ width }}
      >
        <img
          src="/avatar.jpg"
          className="absolute w-full h-full object-cover z-[-1]"
          alt="bg"
        />
        <div className="flex flex-col items-center gap-[20px]">
          {/* logo */}
          <div className="space-y-[5px]">
            <img
              src="/logo2.png"
              width={225}
              height={44}
              alt="logo"
              style={{
                mixBlendMode: "multiply",
              }}
            />
            <div className="w-[156px] mx-auto h-[5px] bg-[#2E3549]" />
          </div>
          {/* logo */}

          {/* text */}
          <p className="text-[14px] text-[#000] text-center font-medium">
            {text}
          </p>
          {/* text */}
        </div>

        <button
          onClick={onClick}
          className="border-[2px] bg-white text-[#315EAB] text-[22px] font-medium border-[#315EAB] w-[187px] h-[50px] text-center flex items-center justify-center"
        >
          Подробнее
        </button>
      </motion.div>

      <AnimatePresence>
        {selectedId === id && (
          <>
            <motion.div
              className="z-[200] w-full h-full [@media(min-width:1050px)]:hidden bg-[#fff] fixed left-0 bottom-0"
              initial={"initial"}
              animate={"isOpen"}
              exit={"exit"}
              variants={containerVariant}
            >
              {/* modal header */}
              <div className=" max-w-[978px] px-[12px] [@media(max-width:1050px)]:max-w-[498px] mx-auto w-full border-b-[0.7px] flex justify-between bg-[#fff] h-[60px] border-b-[#fff]">
                <img
                  src="/logo.png"
                  width={130.5}
                  height={90}
                  alt="logo"
                  className="[@media(max-width:1050px)]:w-[86.56px] [@media(max-width:1050px)]:h-[60px]"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30px"
                  height="30px"
                  viewBox="0 0 24 24"
                  className="my-auto"
                  onClick={() => setSelectedId(null)}
                >
                  <path
                    fill="none"
                    stroke="#2c2c2c"
                    strokeLinecap="round"
                    strokeWidth={2}
                    d="M20 20 4 4m16 0L4 20"
                  />
                </svg>
              </div>
              {/* modal header */}

              <div className="bg-[#fff] max-w-[978px] px-[12px] [@media(max-width:1050px)]:max-w-[498px] mt-[20px] mx-auto">
                <span className="flex flex-col gap-[12px] w-full overflow-y-scroll h-[calc(100vh-60px)]">
                  <p className="text-[18px] font-medium text-[#2c2c2c] text-center">
                    {text}
                  </p>
                  <p className="text-[14px] whitespace-pre-line text-[#2c2c2c] text-start mb-[60px]">
                    {fullText}
                  </p>
                </span>
              </div>
            </motion.div>

            <motion.div className="fixed [@media(max-width:1050px)]:hidden top-0 left-0 w-full h-full dark:bg-opacity-[50%] bg-opacity-[20%] z-[100]">
              <motion.div
                initial={"initial"}
                animate={"isOpen"}
                exit={"exit"}
                onClick={() => setSelectedId(null)}
                variants={modalVariant}
                className="fixed [@media(max-width:1050px)]:hidden top-0 left-0 w-full h-full bg-[#4A5479] dark:bg-black dark:bg-opacity-[50%] bg-opacity-[20%] z-[-1]"
              ></motion.div>
              <motion.div
                layoutId={selectedId}
                className="w-[630px] h-fit max-h-[500px] overflow-y-auto mx-auto mt-[86px] z-[200] bg-white bottom-0 p-[15px] border-b-[15px] border-[#315EAB] flex flex-col items-center gap-[20px]"
              >
                {/* logo */}
                <div className="space-y-[5px]">
                  <img src="/logo2.png" width={225} height={44} alt="logo" />
                  <div className="w-[156px] mx-auto h-[5px] bg-[#2E3549]" />
                </div>
                {/* logo */}

                {/* text */}
                <p className="text-[18px] font-medium text-[#2c2c2c] text-center">
                  {text}
                </p>
                <p className="text-[14px] whitespace-pre-line text-[#2c2c2c] text-start">
                  {fullText}
                </p>
                {/* text */}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Card;
