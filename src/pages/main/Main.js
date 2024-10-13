import { Helmet } from "react-helmet";

const Main = () => {
  return (
    <>
      <Helmet>
        <title>Главная</title>
      </Helmet>
      <div className="flex flex-col w-full">
        {/* top image block */}
        <div className="relative  [@media(max-width:1050px)]:hidden">
          <p className="text-white text-[70px] font-extrabold absolute z-[3] whitespace-pre-line leading-[72px] custom-shadow left-[25px] top-[50px] tracking-[-3%]">
            {`КОМПЛЕКСНЫЙ\nПОДХОД К\nРЕШЕНИЮ\nВАШИХ ЗАДАЧ`}
          </p>
          <p className="text-white text-[16px] font-normal absolute z-[3] whitespace-pre-line leading-[18px] custom-shadow2 left-[25px] top-[385px]">
            {`SSC SOLUTIONS\nКонсалтинговые услуги для промышленных проектов любого масштаба`}
          </p>
          <div className="absolute top-[calc(672.94px-240.94px)] h-[calc(240.94px)] py-[40px] left-[348px] z-[2] w-[684px] flex flex-row items-center gap-[24px]">
            <div className="w-[24px] bg-[#A3A3A3] h-full" />
            <p className="text-[16px] font-medium leading-[18px] text-[#2c2c2c]">
              Компания SSC Solutions - это группа опытных отраслевых экспертов,
              предлагающие лучшие решения для объектов нефтепеработки ,
              газоперерабатывающей промышленности и в области новой энегретики.
            </p>
          </div>

          <img
            src="/2.jpg"
            className="absolute w-[298px] h-[672px] object-cover z-[1]"
            alt="bg"
          />
          <div className="absolute top-0 left-0 w-[298px] h-[672px] bg-[rgba(0,0,0,.2)] z-[2]" />
        </div>

        {/* bg factory */}
        <div className="absolute left-0 w-full h-[432px] overflow-hidden">
          <img
            src="/bg.jpg"
            className="w-full h-full object-cover absolute z-[-1]"
            alt="bg"
          />
        </div>
        {/* bg factory */}
        {/* top image block */}

        <p className="mt-[calc(672.94px+70px)] [@media(max-width:1050px)]:mt-[calc(507px+0px)] mb-[75px] text-center font-semibold text-[28px] whitespace-pre-line leading-[120%]">
          НАША КОМАНДА ГОТОВА РЕШИТЬ ЛЮБУЮ СЛОЖНУЮ{"\n"}ЗАДАЧУ!
        </p>

        <span className="text-[18px] leading-[120%] whitespace-pre-line">
          <p className="font-medium text-[20px]">Сферы деятельности:</p>
          {"\n"}– Объекты добычи нефти, нефтепереработки и нефтехимии.{"\n"}–
          Объекты добычи природного газа, газопереработки и газохимии.{"\n"}–
          Новая и возобновляемая энергетика.{"\n"}– Промышленные объекты
          модульного исполнения.
        </span>
      </div>
    </>
  );
};

export default Main;
