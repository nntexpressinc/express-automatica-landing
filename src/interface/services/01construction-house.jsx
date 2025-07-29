import React, { useEffect } from "react";
import { home4 } from "../../images/home-img";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./index.scss";
import { service1 } from "../../images/services";
import { useLanguage } from "../../context/LanguageContext";
gsap.registerPlugin(ScrollTrigger);

const ConstructionHouse = () => {
  const { t } = useLanguage();
  useEffect(() => {
    gsap.fromTo(
      [".section1 h1", ".section1 p"],
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.3,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".section1",
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      ".section1 ul li",
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        stagger: 0.4,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".section1",
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      ".section1 img",
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".section1",
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      ".section2 h1",
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".section2",
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      ".section2 ul li",
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".section2",
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      ".section3 img",
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".section3",
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      ".section3 h1",
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".section3",
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      ".section3 ul li",
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".section3",
          start: "top 80%",
        },
      }
    );
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full flex flex-col gap-[100px] relative text-white pb-[50px]">
      <div className="absolute top-0 left-0 w-full h-full bg-primary z-1"></div>
      <section className="section1 relative w-11/12 mx-auto max-w-[1440px] flex justify-center items-start flex-col min-h-[calc(100vh-88px)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="flex flex-col items-start justify-center h-full">
            <h1 className="text-white clamp2">
              {t("constructionHouse.title")}
            </h1>
            <p className="w-full">
              {t("constructionHouse.description")}
            </p>
            <h1 className="text-white clamp2">{t("constructionHouse.advantages")}</h1>
            <p className="w-full">
              {t("constructionHouse.advantages_desc")}
            </p>
            <ul className="flex flex-col gap-4 mt-3">
              {t("constructionHouse.list").map((item, index) => (
                <li key={index} className="clamp4">
                  <strong>{item.title}</strong> {item.desc}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full h-full">
            <img
              className="rounded-md h-full w-full object-cover"
              src={service1}
              alt="Construction House"
            />
          </div>
        </div>
      </section>
      <section className="section2 relative w-11/12 mx-auto max-w-[1440px] flex flex-col">
        <h1 className="text-white clamp3">
          {t("constructionHouse.stages.title")}
        </h1>
        <ul className="flex flex-col gap-4 mt-3">
        {t("constructionHouse.stages.list").map((item, index) => (
            <li key={index} className="clamp4">
              <strong>{item.title}</strong> {item.desc}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default ConstructionHouse;
