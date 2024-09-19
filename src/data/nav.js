import About from "../pages/about/About";
import Contacts from "../pages/contacts/Contacts";
import Main from "../pages/main/Main";
import Products from "../pages/products/Products";

export const nav = [
  {
    text: "",
    link: "/oil_and_gas",
    component: <Main />,
  },
  {
    text: "О НАС",
    link: "/about",
    component: <About />,
  },
  {
    text: "УСЛУГИ",
    link: "/products",
    component: <Products />,
  },
  {
    text: "КОНТАКТЫ",
    link: "/contacts",
    component: <Contacts />,
  },
];
