import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

// imported custom hook
import { useScreenWidth } from "../assets/hooks/useScreenWidth";

import logo from "../assets/images/shared/logo.svg";
import openIcon from "../assets/images/shared/icon-hamburger.svg";
import closeIcon from "../assets/images/shared/icon-close.svg";
import navLine from "../assets/images/shared/line.png";

export default function Layout({ children }) {
  const location = useLocation();
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="box-border flex flex-col">
      <NavBar location={location} />
      <main>{children}</main>
    </div>
  );
}

function NavBar({ location }) {
  const { width } = useScreenWidth();
  return (
    <>
      {width < 768 ? (
        <MobileNavBar location={location} />
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

function MobileNavBar({ location }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleNavToggle() {
    setIsOpen(!isOpen);
  }

  // closing the navbar on pathname change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <section className=" z-[99] absolute flex flex-col w-full py-[2rem]">
      <div className="flex justify-between items-center px-[1.5rem] ">
        <img src={logo} alt="company logo" className="h-[40px] w-[40px]" />
        <img
          src={openIcon}
          alt="open menu hamburger icon"
          onClick={handleNavToggle}
          className={isOpen ? "opacity-0" : "opacity-100"}
        />
      </div>

      {/* mobile nav menu */}

      {isOpen && (
        <div className="absolute top-[0] min-h-svh w-[75%] self-end flex flex-col backdrop-blur-2xl bg-white/10 ">
          <div className="flex flex-col py-[3rem] px-[1.5rem] w-full">
            <img
              src={closeIcon}
              alt="close menu icon"
              className="self-end"
              onClick={handleNavToggle}
            />
          </div>

          <ul className="flex flex-col gap-[2rem] ps-[2rem] w-full">
            {navItems.map((item, i) => (
              <li
                key={item.name}
                className="text-white flex justify-between items-center font-barlow-condensed font-[16px] "
              >
                <Link to={item.path} className="flex gap-[0.5rem]">
                  <span className="font-[400] tracking-[2.7px]"> 0{i} </span>
                  <span className="font-[200] tracking-[2px]">
                    {" "}
                    {item.name.toLocaleUpperCase()}{" "}
                  </span>
                </Link>

                {location.pathname === item.path && (
                  <div className="bg-white h-[20px] w-[0.3rem]"></div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

function TabletNavBar() {
  return (
    <section className="z-[99] absolute flex flex-col w-full">
      <div className="flex ps-[2rem] justify-between items-center">
        <img src={logo} alt="company logo" className="h-[48px] w-[48px]" />

        <div className="w-[86%] h-[100px] flex justify-end items-end pe-[2rem] backdrop-blur-2xl bg-white/10">
          <ul className="flex gap-[2rem] items-start">
            {navItems.map((item, i) => (
              <li
                key={item.name}
                className="text-white flex flex-col justify-center gap-[2rem] font-barlow-condensed font-[16px] "
              >
                <Link to={item.path}>
                  <span className="font-[400] tracking-[2.7px]"> 0{i} </span>
                  <span className="font-[200] tracking-[2px]">
                    {" "}
                    {item.name.toLocaleUpperCase()}{" "}
                  </span>
                </Link>

                {location.pathname === item.path && (
                  <div className="bg-white h-[3px] w-[full]"></div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function DesktopNavBar() {
  return (
    <section className="z-[99] pt-[2.5rem] absolute flex flex-col w-full ">
      <div className="w-full flex ps-[3rem] justify-between items-center">
        <img src={logo} alt="company logo" className="h-[48px] w-[48px]" />

        <img src={navLine} alt="a line" className="relative left-[3rem]" />

        <div className="w-[55%] h-[100px] flex justify-end items-end pe-[4rem] backdrop-blur-[2rem] bg-white/10">
          <ul className="flex gap-[3rem] items-start">
            {navItems.map((item, i) => (
              <li
                key={item.name}
                className="text-white flex flex-col justify-center gap-[2rem] font-barlow-condensed font-[16px]"
              >
                <Link to={item.path}>
                  <span className="font-[400] tracking-[2.7px]"> 0{i} </span>
                  <span className="font-[200] tracking-[2px]">
                    {" "}
                    {item.name.toLocaleUpperCase()}{" "}
                  </span>
                </Link>

                {location.pathname === item.path && (
                  <div className="bg-white h-[3px] w-[full]"></div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
