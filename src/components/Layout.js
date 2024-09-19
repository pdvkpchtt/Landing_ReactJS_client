const Layout = ({ children }) => {
  return (
    <div className="flex flex-col max-w-[1140px] w-full pb-[75px] px-[15px] mx-auto">
      {children}
    </div>
  );
};

export default Layout;
