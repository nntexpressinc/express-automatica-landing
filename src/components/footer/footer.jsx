import React from "react";
import { logo } from "../../images";
import { useLanguage } from "../../context/LanguageContext";
import { NavLink } from "react-router-dom";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Footer = () => {
  const { t } = useLanguage();

  // Navigation data with translations for footer
  const navLinkData = [
    {
      title: t('nav.home'),
      link: "/",
    },
    {
      title: t('nav.about'),
      link: "/about",
    },
    {
      title: t('nav.services'),
      link: "/services",
    },
    {
      title: t('nav.contacts'),
      link: "/contact",
    },
  ];

  useGSAP(() => {
    const footerTl1 = gsap.timeline({
      delay: 0.3,
      scrollTrigger: {
        trigger: "#footer",
        start: "20% bottom",
        end: "bottom top",
      },
    });
    const footerTl2 = gsap.timeline({
      delay: 0.3,
      scrollTrigger: {
        trigger: "#footer",
        start: "20% bottom",
        end: "bottom top",
      },
    });
    const footerTl3 = gsap.timeline({
      delay: 0.3,
      scrollTrigger: {
        trigger: "#footer",
        start: "20% bottom",
        end: "bottom top",
      },
    });
    const footerTl4 = gsap.timeline({
      delay: 0.3,
      scrollTrigger: {
        trigger: "#footer",
        start: "20% bottom",
        end: "bottom top",
      },
    });

    footerTl1.fromTo(
      "footer img",
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0 }
    );

    footerTl2.fromTo(
      "footer .footer-container  .tab",
      {
        opacity: 0,
        x: -20,
        ease: "power3.inOut",
      },
      { opacity: 1, x: 0, stagger: 0.2 }
    );
    footerTl3.fromTo(
      ["footer .link-container .link"],
      {
        opacity: 0,
        y: -10,
        ease: "power3.inOut",
      },
      { opacity: 1, y: 0, stagger: 0.2 }
    );
    footerTl4.fromTo(
      [[".footer-bottom h1", "footer-bottom p"]],
      {
        opacity: 0,
        y: -10,
        ease: "power3.inOut",
      },
      { opacity: 1, y: 0, stagger: 0.2 }
    );
  });

  return (
    <footer id="footer" className="w-full bg-secondaryBg">
      <main className="max-w-[1440px] w-11/12 mx-auto flex flex-col gap-2 py-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-[24px]">
          <img className="w-[250px] object-contain" src={logo} alt="" />
          <div className="footer-container flex flex-col gap-2 text-thin items-start justify-start">
            {navLinkData.map((item, idx) => (
              <NavLink to={item.link} key={idx} className={"tab"}>
                <div>{item.title}</div>
              </NavLink>
            ))}
          </div>
          <div className="link-container flex flex-col justify-start items-start gap-3">
            <div className="link flex items-center justify-start gap-2">
              <FaMapLocationDot className="text-thin text-[30px]" />
              <h1 className="clamp4 text-thin">
                {t('footer.address')}
              </h1>
            </div>
            <div className="link flex items-center justify-start gap-2">
              <FaPhoneAlt className="text-thin text-[24px]" />
              <h1 className="clamp4 text-thin">{t('common.phone')}</h1>
            </div>
            <div className="link flex items-center justify-start gap-2">
              <TfiEmail className="text-thin text-[24px]" />
              <h1 className="clamp4 text-thin">{t('footer.email')}</h1>
            </div>
          </div>
        </div>
        <div className="bg-thin w-full h-[1px]"></div>
        <div className="footer-bottom flex flex-col gap-2">
          <h1>{t('footer.copyright')}</h1>
          <h1>{t('footer.description')}</h1>
        </div>
      </main>
    </footer>
  );
};

export default Footer;
