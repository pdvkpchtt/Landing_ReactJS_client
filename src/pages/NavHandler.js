import { Routes, Route } from "react-router-dom";

import { nav } from "../data/nav";

const NavHandler = () => {
  return (
    <Routes>
      {nav.map((item, key) => (
        <Route key={key} path={item.link} element={item.component} />
      ))}
      <Route path="*" element={<>not found</>} />
    </Routes>
  );
};

export default NavHandler;
