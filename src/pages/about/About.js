const About = () => {
  return (
    <div className="flex flex-col w-full">
      {/* top image block */}
      <div className="relative">
        <p className="text-white text-[70px] font-extrabold absolute z-[3] whitespace-pre-line leading-[72px] custom-shadow left-[50px] top-[100px] tracking-[-3%]">
          {`О НАС`}
        </p>
        <img
          src="/2.jpg"
          className="absolute w-[298px] h-[335px] object-cover z-[1]"
          alt="bg"
        />
        <div className="absolute top-0 left-0 w-[298px] h-[335px] bg-[rgba(0,0,0,.2)] z-[2]" />
      </div>

      {/* bg factory */}
      <div className="absolute left-0 w-full h-[258px] overflow-hidden">
        <img
          src="/bg.jpg"
          className="w-full h-full object-cover absolute z-[-1]"
          alt="bg"
        />
      </div>
      {/* bg factory */}

      <p className="text-[18px] leading-[120%] whitespace-pre-line mt-[calc(335px+75px)]">
        Компания SSC Solutions (SSC) родилась в результате разговора за ужином.
        Мы с единомышленниками обсуждали возможность создания Компании, где
        каждый мог бы поделиться своим опытом и знаниями, помочь выстроить
        систему, при которой обеспечиваются высокие стандарты, ориентированные
        на Заказчика. Именно это привело к основанию SSC в 2022 году.
        {"\n\n"}
        Наша команда собрана из высококвалифицированных инженеров, имеющих
        большой опыт реализации крупных и средних проектов, и ранее работали в
        эксплуатации, проектировании, строительстве. Накопленный опыт, знание
        стандартов и законов Российской Федерации, норм ASME, позволяет решать
        задачи любой сложности возникающие на любом этапе реализации проекта.
        Именно практический опыт позволяет нам соблюдать высокие стандарты
        качества начиная от технического задания до участи в
        пред-пусконаладочных работах.
      </p>
    </div>
  );
};

export default About;
