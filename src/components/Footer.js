import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#282828] w-full [@media(min-width:1050px)]:h-[110px] [@media(max-width:1050px)]:h-fit [@media(min-width:1050px)]:max-h-[110px] overflow-hidden z-[10]">
      <div className="w-full max-w-[1374px] mx-auto flex flex-row [@media(max-width:1050px)]:flex-col-reverse [@media(max-width:1050px)]:justify-center justify-between items-center [@media(max-width:1050px)]:h-fit [@media(max-width:1050px)]:gap-[20px] [@media(min-width:1050px)]:h-[110px]">
        <img
          src="/logo_dark.png"
          width={130.5}
          height={90}
          alt="logo"
          style={{
            mixBlendMode: "screen",
          }}
          className="[@media(max-width:1050px)]:mb-[12px] [@media(max-width:1050px)]:w-[86.56px] [@media(max-width:1050px)]:h-[60px]"
        />

        <div className="flex flex-col gap-[4px] [@media(max-width:1050px)]:mt-[12px]">
          <a
            className="text-[14px] text-white underline transition duration-[250ms] hover:no-underline"
            href="https://docs.google.com/document/d/1Om2fqIpQWsSBrYnLkoMqbGZa3lbHc9lDNJMm3moy_V8/edit?usp=sharing"
            target="_blank"
          >
            Политика конфиденциальности
          </a>
          <a
            target="_blank"
            href="mailto:ssc-solutions@yandex.ru"
            className="text-[14px] text-white underline transition duration-[250ms] hover:no-underline"
          >
            ssc-solutions@yandex.ru
          </a>
          <p className="text-[14px] text-white">{"+7 (995) 883-08-96"}</p>
          <p className="text-[14px] text-white">© 2024 SSC SOLUTIONS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
