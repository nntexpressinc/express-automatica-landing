import React, { useEffect } from "react";
import { home1, home3, home4 } from "../../images/home-img";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  service6,
  service6_1,
  service6_10,
  service6_11,
  service6_12,
  service6_2,
  service6_3,
  service6_4,
  service6_5,
  service6_6,
  service6_7,
  service6_8,
  service6_9,
} from "../../images/services";
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

const OfficeRenovation = () => {
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
      { selector: "h1", from: { x: 50 }, to: { x: 0 }, stagger: 0.2 },
      { selector: "ul li", from: { x: 50 }, to: { x: 0 }, stagger: 0.2 },
      { selector: "p", from: { x: 50 }, to: { x: 0 }, stagger: 0.2 },
    ]);

    animateSection(".section3", [
      { selector: "h1", from: { x: 50 }, to: { x: 0 }, stagger: 0.2 },
      { selector: "ul li", from: { x: 50 }, to: { x: 0 }, stagger: 0.2 },
      { selector: "p", from: { x: 50 }, to: { x: 0 }, stagger: 0.2 },
    ]);

    animateSection(".section4", [
      { selector: "h1", from: { x: 50 }, to: { x: 0 }, stagger: 0.2 },
      {
        selector: ".img-container .img",
        from: { y: 50 },
        to: { y: 0 },
        stagger: 0.2,
      },
      {
        selector: "ul li",
        from: { x: -50 },
        to: { x: 0 },
        stagger: 0.2,
      },
    ]);
    window.scrollTo(0, 0);
  }, []);

  const dataWork = [
    service6_1,
    service6_2,
    service6_3,
    service6_4,
    service6_5,
    service6_6,
    service6_7,
    service6_8,
    service6_9,
    service6_10,
    service6_11,
    service6_12,
  ];

  return (
    <main className="w-full flex flex-col gap-[100px] relative text-white pb-[50px]">
      <div className="absolute top-0 left-0 w-full h-full bg-primary z-1"></div>
      <section className="section1 relative w-11/12 mx-auto max-w-[1440px] flex justify-center items-start flex-col min-h-[calc(100vh-88px)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="flex flex-col items-start justify-center h-full">
            <h1 className="text-white clamp1 font-bold leading-tight mb-4">
              {t("officeRenovation.title")}
            </h1>
            <p className="w-full clamp4 leading-relaxed mb-6">
              {t("officeRenovation.description")}
            </p>
          </div>
          <div className="w-full">
            <img
              className="rounded-md"
              src={service6}
              alt="Construction House"
            />
          </div>
        </div>
      </section>
      <section className="section2 relative w-11/12 mx-auto max-w-[1440px] flex flex-col gap-3">
        <h1 className="text-white clamp3 font-bold leading-tight mb-4">
          {t("officeRenovation.services.title")}
        </h1>
        <ul className="flex flex-col gap-4 mt-3">
          {t("officeRenovation.services.list").map((item, index) => (
            <li key={index} className="clamp4 leading-relaxed">
              <strong>{item.title}</strong>
              {item.desc}
            </li>
          ))}
        </ul>
        <p className="clamp4">{t("officeRenovation.services.conclusion")}</p>
      </section>
      <section className="section3 relative w-11/12 mx-auto max-w-[1440px] flex flex-col gap-3">
        <h1 className="text-white clamp3 font-bold leading-tight mb-4">
          {t("officeRenovation.advantages.title")}
        </h1>
        <p className="clamp4">{t("officeRenovation.advantages.contract")}</p>
        <ul className="flex flex-col gap-4 mt-3">
          {t("officeRenovation.advantages.list").map((item, index) => (
            <li key={index} className="clamp4 leading-relaxed">
              <strong>{item.title}</strong>
              {item.desc}
              {item.sublist && (
                <ul className="pl-10 list-disc">
                  {item.sublist.map((subItem, subIndex) => (
                    <li key={subIndex}>{subItem}</li>
                  ))}
                </ul>
              )}
              {item.conclusion && <p>{item.conclusion}</p>}
            </li>
          ))}
        </ul>
      </section>
      <section className="section4 relative w-11/12 mx-auto max-w-[1440px] flex flex-col gap-3">
        <h1 className="text-white clamp3 font-bold leading-tight mb-4">
          {t("officeRenovation.our_works.title")}
        </h1>
        <div className="img-container grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {dataWork.map((item, idx) => (
            <div key={idx} className="img w-full h-[200px]">
              <img
                className="w-full h-full object-cover rounded-md"
                src={item}
                alt=""
              />
            </div>
          ))}
        </div>
        <ul>
          {t("officeRenovation.our_works.list").map((item, index) => (
            <li key={index}>-{item}</li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default OfficeRenovation;
