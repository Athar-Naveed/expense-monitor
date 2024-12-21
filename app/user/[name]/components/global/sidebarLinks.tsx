import {Banknote, Home, Laptop} from "lucide-react";

export const sidebarPrimaryLinks = [
  {
    title: "Home",
    icon: <Home size={20} />,
    path: "/",
  },
  {
    title: "Bills",
    icon: <Banknote size={20} />,
    path: "bills",
  },
  {
    title: "Projects",
    icon: <Laptop size={20} />,
    path: "projects",
  },
];
