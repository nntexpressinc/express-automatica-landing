import React, { useEffect } from "react";
import { home4 } from "../../images/home-img";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { service2, service2_1, service2_2 } from "../../images/services";
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

const ReconstBuild = () => {
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
      { selector: "ul li", from: { x: 50 }, to: { x: 20 }, stagger: 0.2 },
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
      { selector: "ul li", from: { x: -50 }, to: { x: 20 }, stagger: 0.2 },
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
      { selector: "ul li", from: { x: -50 }, to: { x: 20 }, stagger: 0.2 },
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
            <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-4">
              {t("reconstBuild.title")}
            </h1>
            <p className="w-full text-lg md:text-xl leading-relaxed mb-6">
              {t("reconstBuild.description")}
            </p>
          </div>
          <div className="w-full">
            <img
              className="rounded-md w-full h-full object-cover"
              src={service2}
              alt="Construction House"
            />
          </div>
        </div>
      </section>
      <section className="section2 relative w-11/12 mx-auto max-w-[1440px] grid grid-cols-1 md:grid-cols-2 gap-6">
        <img
          className="rounded-md w-full h-full object-cover"
          src={service2_1}
          alt="Construction"
        />
        <div>
          <h1 className="text-white text-3xl md:text-4xl font-bold leading-tight mb-4">
            {t("reconstBuild.advantages.title")}
          </h1>
          <p className="text-lg md:text-xl leading-relaxed mb-6">
            {t("reconstBuild.advantages.subtitle")}
          </p>
          <ul className="flex flex-col gap-4 mt-3 list-disc pl-5">
            {t("reconstBuild.advantages.list").map((item, index) => (
              <li key={index} className="text-lg md:text-xl leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <p className="col-span-2 text-lg md:text-xl mt-6">
          {t("reconstBuild.advantages.conclusion")}
        </p>
      </section>
      <section className="section3 relative w-11/12 mx-auto max-w-[1440px] flex flex-col">
        <h1 className="text-white text-3xl md:text-4xl font-bold leading-tight mb-4">
          {t("reconstBuild.how_it_works.title")}
        </h1>
        <p className="text-lg md:text-xl leading-relaxed mb-6">
          {t("reconstBuild.how_it_works.description")}
        </p>
        <ul className="flex flex-col gap-4 mt-3 list-disc pl-5">
          {t("reconstBuild.how_it_works.steps").map((item, index) => (
            <li key={index} className="text-lg md:text-xl leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
        <p className="text-lg md:text-xl mt-6">
          {t("reconstBuild.how_it_works.conclusion")}
        </p>
      </section>
      <section className="section4 relative w-11/12 mx-auto max-w-[1440px] grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="w-full h-full">
          <img
            className="rounded-md w-full h-full object-cover"
            src={service2_2}
            alt="Construction Image"
          />
        </div>
        <div>
          <h1 className="text-white text-3xl md:text-4xl font-bold leading-tight mb-4">
            {t("reconstBuild.why_us.title")}
          </h1>
          <p className="text-lg md:text-xl leading-relaxed mb-6">
            {t("reconstBuild.why_us.subtitle")}
          </p>
          <ul className="flex flex-col gap-4 mt-3 list-disc pl-5">
            {t("reconstBuild.why_us.list").map((item, index) => (
              <li key={index} className="text-lg md:text-xl leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <ul className="col-span-2 flex flex-col gap-4 mt-3 list-disc pl-5">
          {t("reconstBuild.why_us.examples_list").map((item, index) => (
            <li key={index} className="text-lg md:text-xl leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default ReconstBuild;
