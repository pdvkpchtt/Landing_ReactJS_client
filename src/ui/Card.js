import { AnimatePresence, motion } from "framer-motion";

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

  return (
    <>
      <motion.div
        layoutId={id}
        className="p-[15px] border-b-[15px] border-[#315EAB] flex flex-col items-center justify-between gap-[20px] shadow-2xl"
        style={{ width }}
      >
        <div className="flex flex-col items-center gap-[20px]">
          {/* logo */}
          <div className="space-y-[5px]">
            <img src="/logo2.png" width={225} height={44} alt="logo" />
            <div className="w-[156px] mx-auto h-[5px] bg-[#2E3549]" />
          </div>
          {/* logo */}

          {/* text */}
          <p className="text-[14px] text-[#2c2c2c] text-center">{text}</p>
          {/* text */}
        </div>

        <button
          onClick={onClick}
          className="border-[2px] text-[#315EAB] text-[22px] font-medium border-[#315EAB] w-[187px] h-[50px] text-center flex items-center justify-center"
        >
          Подробнее
        </button>
      </motion.div>

      <AnimatePresence>
        {selectedId === id && (
          <motion.div className="fixed [@media(pointer:coarse)]:hidden top-0 left-0 w-full h-full dark:bg-opacity-[50%] bg-opacity-[20%] z-[100]">
            <motion.div
              initial={"initial"}
              animate={"isOpen"}
              exit={"exit"}
              onClick={() => setSelectedId(null)}
              variants={modalVariant}
              className="fixed [@media(pointer:coarse)]:hidden top-0 left-0 w-full h-full bg-[#4A5479] dark:bg-black dark:bg-opacity-[50%] bg-opacity-[20%] z-[-1]"
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
        )}
      </AnimatePresence>
    </>
  );
};

export default Card;
