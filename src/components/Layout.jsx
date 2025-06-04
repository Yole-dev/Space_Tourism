import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

// imported custom hook
import { useScreenWidth } from "../assets/hooks/useScreenWidth";

import logo from "../assets/images/shared/logo.svg";
import openIcon from "../assets/images/shared/icon-hamburger.svg";
import closeIcon from "../assets/images/shared/icon-close.svg";

export default function Layout({ children }) {
  const location = useLocation();
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="box-border flex flex-col">
      <NavBar />
      <main>{children}</main>
    </div>
  );
}

function NavBar() {
  const { width } = useScreenWidth();
  return (
    <>
      {width < 768 ? (
        <MobileNavBar />
      ) : width < 1200 ? (
        <TabletNavBar />
      ) : (
        <DesktopNavBar />
      )}
    </>
  );
}

const navItems = [
  { path: "/", name: "Home" },
  { path: "/destination", name: "Destination" },
  { path: "/crew", name: "Crew" },
  { path: "/technology", name: "Technology" },
];

function MobileNavBar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleNavToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <section className=" z-[99] absolute flex flex-col w-full py-[2rem]">
      <div className="flex justify-between items-center px-[1.5rem] ">
        <img src={logo} alt="company logo" />
        <img
          src={openIcon}
          alt="open menu hamburger icon"
          onClick={handleNavToggle}
          className={isOpen ? "opacity-0" : "opacity-100"}
        />
      </div>

      {/* mobile nav menu */}

      {isOpen && (
        <div className="absolute top-[0] min-h-svh w-[75%] self-end flex flex-col bg-black">
          <div className="flex flex-col py-[3rem] px-[1.5rem] w-full">
            <img
              src={closeIcon}
              alt="close menu icon"
              className="self-end"
              onClick={handleNavToggle}
            />
          </div>

          <ul className="flex flex-col gap-[2rem] ps-[2rem]">
            {navItems.map((item, i) => (
              <li key={item.name} className="text-white">
                <Link to={item.path}>
                  <span> 0{i} </span>
                  <span> {item.name} </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

function TabletNavBar() {
  return;
}

function DesktopNavBar() {
  return;
}
