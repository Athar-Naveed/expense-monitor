import {Banknote, Home, Laptop, List, Wallet} from "lucide-react";

export const sidebarPrimaryLinks = [
  {
    title: "Home",
    icon: <Home size={20} />,
    path: "/",
  },
  {
    title: "ToDo",
    icon: <List size={20} />,
    path: "todo",
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
  {
    title: "Pockets",
    icon: <Wallet size={20} />,
    path: "pockets",
  },
];
