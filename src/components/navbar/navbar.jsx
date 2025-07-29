import { logo } from "../../images";
import { navLinkData } from "../data";
import { NavLink, useLocation } from "react-router-dom";
import { MdOutlinePhoneCallback } from "react-icons/md";
import Language from "./language";
import "./navbar.scss";
import gsap from "gsap";
import { useEffect, useState, useRef } from "react";
import { FaAngleDown } from "react-icons/fa6";
import BurgerMenu from "../burger-menu/burger-menu";

const Navbar = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSub, setIsOpenSub] = useState(false);
  const menuTimeline = useRef(null);

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    gsap
      .timeline({ delay: 0.5 })
      .fromTo(
        "nav .nav-container .logo",
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0 }
      )
      .fromTo(
        "nav .nav-container .tab",
        { opacity: 0, x: -20, ease: "power3.inOut" },
        { opacity: 1, x: 0, stagger: 0.2 }
      );

    gsap
      .timeline({ delay: 0.5 })
      .fromTo(
        [
          "nav .phone-container .phone",
          "nav .phone-container .lang",
          "nav .phone-container .burger-menu",
        ],
        { opacity: 0, y: -10, ease: "power3.inOut" },
        { opacity: 1, y: 0, stagger: 0.3 }
      );
  }, []);

  useEffect(() => {
    menuTimeline.current = gsap
      .timeline({ paused: true })
      .fromTo(
        ".mobile-menu",
        { opacity: 0, x: "100%" },
        { opacity: 1, x: 0, duration: 0.5 }
      );
  }, []);

  useEffect(() => {
    const body = document.body;
    if (isOpen) {
      menuTimeline.current.play();
      body.style.overflow = "hidden";
    } else {
      menuTimeline.current.reverse();
      body.style.overflow = "visible";
    }
  }, [isOpen]);

  return (
    <nav className="fixed left-0 top-0 w-full h-[88px] bg-white z-20 shadow-md">
      <main className="nav-container max-w-[1440px] mx-auto w-11/12 h-full flex justify-between items-center">
        <NavLink to={"/"} className="logo flex justify-start items-center">
          <img
            className="w-[150px] max-sm:w-[120px] h-[88px] object-contain"
            src={logo}
            alt=""
          />
        </NavLink>
        <section className="nav-tab-container hidden md:flex justify-start items-center lg:gap-6 gap-3">
          {navLinkData.map((item, idx) => (
            <NavLink
              to={item.link !== "dropdown" && item.link}
              key={idx}
              className={"relative group tab"}
            >
              <div className="buttons">
                <button
                  className={`${
                    item.link === pathname ? "text-primary" : "text-thin"
                  } btn font-bold clamp5`}
                >
                  <span></span>
                  {item.title}
                </button>
              </div>
              {item.submenu && (
                <div className="absolute group-hover:block hover:block hidden">
                  <div className="relative bg-white mt-[40px] p-4 w-full whitespace-nowrap flex flex-col gap-2">
                    <div className="absolute w-[20px] h-[20px] -top-[10px] bg-white rotate-45"></div>
                    {item.submenu.map((subItem, subIdx) => (
                      <NavLink
                        to={subItem.link}
                        key={subIdx}
                        className={"buttons"}
                      >
                        <button
                          className={`${
                            subItem.link === pathname
                              ? "text-primary"
                              : "text-thin"
                          } btn font-bold clamp5`}
                        >
                          <span></span>
                          {subItem.title}
                        </button>
                      </NavLink>
                    ))}
                  </div>
                </div>
              )}
            </NavLink>
          ))}
        </section>
        <section className="phone-container flex items-center justify-center gap-3">
          <button
            onClick={() => window.open(`tel:+998 90 940 33 36`)}
            className="max-sm:hidden phone flex items-center gap-3 rounded-3xl border border-primary p-2 cursor-pointer shadow-lg"
          >
            <MdOutlinePhoneCallback className="text-md font-bold text-primary" />
            <h1 className="clamp5 font-bold text-primary">+998 90 940 33 36</h1>
          </button>
          {/* <div className="lang z-30">
            <Language />
          </div> */}
          <div className="md:hidden burger-menu relative">
            <BurgerMenu handleOpenMenu={handleOpenMenu} isOpen={isOpen} />
          </div>
          <div className="mobile-menu flex flex-col gap-3 fixed w-screen overflow-x-hidden h-[calc(100vh-88px)] top-[88px] left-0 bg-white overflow-y-scroll">
            <div className="w-full nav-tab-container hidden max-md:flex flex-col justify-start items-start lg:gap-6 gap-3 px-2">
              {navLinkData.map((item, idx) => (
                <div
                  key={idx}
                  className={"relative w-full flec flex-col group"}
                >
                  <div className="flex w-full justify-between items-center">
                    <div className="buttons w-full">
                      <button
                        className={`${
                          item.link === pathname ? "text-primary" : "text-thin"
                        } btn font-bold clamp4 w-full`}
                      >
                        <div className="w-full flex justify-between items-center">
                          <NavLink
                            to={item.link}
                            onClick={() => setIsOpen(false)}
                            className={`${
                              item.submenu ? "w-1/2" : "w-full"
                            } text-start`}
                          >
                            {" "}
                            {item.title}
                          </NavLink>
                          {item.submenu && (
                            <div
                              onClick={() => setIsOpenSub(!isOpenSub)}
                              className="text-xl w-1/2 flex justify-end"
                            >
                              <FaAngleDown />
                            </div>
                          )}
                        </div>
                      </button>
                    </div>
                  </div>
                  {item.submenu && isOpenSub && (
                    <div className="relative bg-white px-4 w-full whitespace-nowrap flex flex-col gap-2">
                      <div className="absolute w-[20px] bg-white rotate-45"></div>
                      {item.submenu.map((subItem, subIdx) => (
                        <NavLink
                          onClick={() => setIsOpen(false)}
                          to={subItem.link}
                          key={subIdx}
                          className={"buttons"}
                        >
                          <button
                            className={`${
                              subItem.link === pathname
                                ? "text-primary"
                                : "text-thin"
                            } btn font-bold clamp4`}
                          >
                            <span></span>
                            {subItem.title}
                          </button>
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="sm:hidden phone flex items-center gap-3 rounded-3xl border border-primary p-2 cursor-pointer shadow-lg mx-2">
              <MdOutlinePhoneCallback className="text-xl font-bold text-primary" />
              <h1 className="text-xl font-bold text-primary">
                +998 93 515 80 84
              </h1>
            </div>
          </div>
        </section>
      </main>
    </nav>
  );
};

export default Navbar;
