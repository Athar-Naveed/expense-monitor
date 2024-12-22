"use client";
import {sidebarPrimaryLinks} from "./sidebarLinks";
import {useState} from "react";
import {useParams} from "next/navigation";
import Link from "next/link";
import {Squeeze as Hamburger} from "hamburger-react";
import BottomBar from "./BottomBar";
import {useWindowSize} from "./ScreenSize";

const Sidebar = () => {
  const [active, setActive] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(true); // State for sidebar toggle
  const {name} = useParams();
  const width = useWindowSize();
  console.log(`active: ${active}`)
  return (
    <>
      <div className={`hidden md:relative md:flex h-full min-h-screen float-left`}>
        {/* Hamburger icon always visible */}
        <div className="fixed top-4 left-4 z-50 text-black dark:text-white">
          <Hamburger easing="ease-in" toggled={isOpen} toggle={setIsOpen} size={25} />
        </div>

        {/* Sidebar content */}
        <div
          className={`fixed transition-transform duration-300 ease-in-out transform ${
            isOpen ? "translate-x-0" : "translate-y-full"
          } border-r border-gray-300 bg-transparent dark:bg-gray-900  z-10 text-black dark:text-white min-h-screen h-full w-64 lg:w-72 p-4 flex flex-col`}
        >
          <div className="flex flex-col w-full flex-1 mr-20 mt-20">
            <h1 className="text-3xl ml-6 mt-2 mb-8 font-semibold">Monitor</h1>
            {sidebarPrimaryLinks.map((link, index) => (
              <Link
                key={index}
                className={`${
                  active == link.path || active == `user/${name}` ? "border-l-[5px] border-l-primary bg-primary-light" : ""
                } py-3`}
                href={`/user/${name}/${link.path}`}
                onClick={() => setActive(link.path)}
              >
                <div className="flex flex-row text-secondary pl-5 items-center gap-3">
                  <span className="text-black dark:text-white">{link.icon}</span>
                  <p className="font-light">{link.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      {width >= 320 && width < 768 ? <BottomBar name={name as string} /> : ""}
    </>
  );
};

export default Sidebar;
