import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#282828] w-full h-[110px] max-h-[110px] overflow-hidden z-[10]">
      <div className="w-full max-w-[1374px] mx-auto flex flex-row justify-between items-center h-[110px]">
        <img
          src="/oil_and_gas/logo_dark.png"
          width={130.5}
          height={90}
          alt="logo"
          style={{
            mixBlendMode: "screen",
          }}
        />

        <div className="flex flex-col gap-[8px]">
          <p className="text-[14px] text-white">Политика конфиденциальности</p>
          <a
            target="_blank"
            href="mailto:ssc-solutions@yandex.ru"
            className="text-[14px] text-white underline transition duration-[250ms] hover:no-underline"
          >
            ssc-solutions@yandex.ru
          </a>
          <p className="text-[14px] text-white">© 2024 SSC SOLUTIONS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
