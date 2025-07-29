import React, { useEffect } from "react";
import { home1, home4 } from "../../images/home-img";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { service4, service4_1 } from "../../images/services";
import { useLanguage } from "../../context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

const animateSection = (sectionClass, elements) => {
  elements.forEach((element) => {
    gsap.fromTo(
      `${sectionClass} ${element.selector}`,
      { opacity: 0, ...element.from },
      {
        opacity: 1,
        ...element.to,
        stagger: element.stagger || 0,
        duration: element.duration || 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionClass,
          start: "top 80%",
        },
      }
    );
  });
};

const Prefabricated = () => {
  const { t } = useLanguage();
  useEffect(() => {
    animateSection(".section1", [
      { selector: "h1", from: { y: -50 }, to: { y: 0 }, stagger: 0.3 },
      { selector: "p", from: { y: -50 }, to: { y: 0 }, stagger: 0.3 },
      { selector: "ul li", from: { x: -50 }, to: { x: 0 }, stagger: 0.4 },
      {
        selector: "img",
        from: { scale: 0.8 },
        to: { scale: 1 },
        duration: 1.2,
      },
    ]);

    animateSection(".section2", [
      { selector: "h1", from: { y: -50 }, to: { y: 0 } },
      { selector: "img", from: { x: -100 }, to: { x: 0 } },
      { selector: "ul li", from: { x: 50 }, to: { x: 0 }, stagger: 0.2 },
      { selector: "p", from: { x: -50 }, to: { x: 0 }, stagger: 0.3 },
    ]);

    animateSection(".section3", [
      {
        selector: "img",
        from: { scale: 0.8 },
        to: { scale: 1 },
        duration: 1.2,
      },
      { selector: "h1", from: { y: -50 }, to: { y: 0 } },
      { selector: ".ul1 li", from: { x: -100 }, to: { x: 0 }, stagger: 0.2 },
      { selector: ".ul2 li", from: { x: 100 }, to: { x: 0 }, stagger: 0.2 },
      { selector: "p", from: { y: -50 }, to: { y: 20 }, stagger: 0.2 },
    ]);
    animateSection(".section4", [
      {
        selector: "img",
        from: { scale: 0.8 },
        to: { scale: 1 },
        duration: 1.2,
      },
      { selector: "h1", from: { y: -50 }, to: { y: 0 } },
      { selector: "ul li", from: { x: -50 }, to: { x: 0 }, stagger: 0.2 },
      { selector: "p", from: { y: -50 }, to: { y: 20 }, stagger: 0.2 },
    ]);
    animateSection(".section5", [
      { selector: "ul li", from: { x: -50 }, to: { x: 0 }, stagger: 0.2 },
      { selector: "p", from: { y: -50 }, to: { y: 20 }, stagger: 0.2 },
    ]);
    window.scrollTo(0, 0);

  }, []);
  return (
    <main className="w-full flex flex-col gap-[100px] relative text-white pb-[50px]">
      <div className="absolute top-0 left-0 w-full h-full bg-primary z-1"></div>
      <section className="section1 relative w-11/12 mx-auto max-w-[1440px] flex justify-center items-start flex-col min-h-[calc(100vh-88px)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="flex flex-col items-start justify-center h-full">
            <h1 className="text-white clamp1 font-bold leading-tight mb-4">
              {t("prefabricated.title")}
            </h1>
            <p className="w-full clamp4 leading-relaxed mb-6">
              {t("prefabricated.description")}
            </p>
          </div>
          <div className="w-full h-full">
            <img
              className="rounded-md w-full h-full object-cover"
              src={service4}
              alt="Construction House"
            />
          </div>
        </div>
      </section>
      <section className="section2 relative w-11/12 mx-auto max-w-[1440px] grid gap-6 md:grid-cols-2 grid-cols-1">
        <div className="w-full h-full">
          <img className="w-full h-full object-cover" src={service4_1} alt="" />
        </div>
        <div>
          <h1 className="text-white clamp3 font-bold leading-tight mb-4">
            {t("prefabricated.application.title")}
          </h1>
          <ul className="flex flex-col gap-4 mt-3 list-disc pl-5">
            {t("prefabricated.application.list").map((item, index) => (
              <li key={index} className="clamp4 leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section3 relative w-11/12 mx-auto max-w-[1440px] grid md:grid-cols-2 grid-cols-1 gap-5">
        <div>
          <h1 className="text-white clamp3 font-bold leading-tight mb-4">
            {t("prefabricated.characteristics.title")}
          </h1>
          <ul className="ul1 no-list-disc flex flex-col gap-4 mt-3 pl-5">
            {t("prefabricated.characteristics.list").map((item, index) => (
              <li key={index} className="clamp4 leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1 className="text-white clamp3 font-bold leading-tight mb-4">
            {t("prefabricated.advantages.title")}
          </h1>
          <ul className="ul2 no-list-disc flex flex-col gap-4 mt-3 pl-5">
            {t("prefabricated.advantages.list").map((item, index) => (
              <li key={index} className="clamp4 leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section4 relative w-11/12 mx-auto max-w-[1440px] flex flex-col">
        <p className="clamp4">{t("prefabricated.supply_info")}</p>
      </section>
      <section className="section5 relative w-11/12 mx-auto max-w-[1440px] flex flex-col">
        <p className="clamp4 leading-relaxed mb-6">
          {t("prefabricated.services_info")}
        </p>
        <ul className="flex flex-col gap-4 mt-3 list-disc pl-5">
          {t("prefabricated.examples").map((item, index) => (
            <li key={index} className="clamp4 leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Prefabricated;
