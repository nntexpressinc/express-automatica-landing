import React, { useEffect } from "react";
import { home1, home4 } from "../../images/home-img";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { service5 } from "../../images/services";
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

const CivilWorks = () => {
  const { t } = useLanguage();
  useEffect(() => {
    animateSection(".section1", [
      { selector: ["h1", "p"], from: { y: -50 }, to: { y: 0 }, stagger: 0.3 },
      {
        selector: "img",
        from: { scale: 0.8 },
        to: { scale: 1 },
        duration: 1.2,
      },
    ]);

    animateSection(".section2", [
      { selector: ["ul li"], from: { x: 50 }, to: { x: 0 }, stagger: 0.2 },
      { selector: "h1", from: { y: -50 }, to: { y: 0 }, stagger: 0.3 },
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
              {t("civilWorks.title")}
            </h1>
            <p className="w-full clamp4 leading-relaxed mb-6">
              {t("civilWorks.description")}
            </p>
          </div>
          <div className="w-full h-full">
            <img
              className="rounded-md w-full h-full object-cover"
              src={service5}
              alt="Construction House"
            />
          </div>
        </div>
      </section>
      <section className="section2 relative w-11/12 mx-auto max-w-[1440px] flex flex-col gap-3">
        <h1 className="text-white clamp3 font-bold leading-tight mb-4">
          {t("civilWorks.services.title")}
        </h1>
        <ul className="flex flex-col gap-4 mt-3 list-disc pl-5">
          {t("civilWorks.services.list").map((item, index) => (
            <li key={index} className="clamp4 leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
        <p className="clamp4">{t("civilWorks.conclusion")}</p>
      </section>
    </main>
  );
};

export default CivilWorks;
