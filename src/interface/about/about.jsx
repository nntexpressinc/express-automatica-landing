import React, { useEffect } from "react";
import { home4 } from "../../images/home-img";
import { useLanguage } from "../../context/LanguageContext";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./index.scss";
import { about1, about2 } from "../../images/about-img";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const { t } = useLanguage();

  useEffect(() => {
    gsap.fromTo(
      ".section1 h1",
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: ".section1",
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      ".section1 p",
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
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
        stagger: 0.1,
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
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".section3",
          start: "top 80%",
        },
      }
    );
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full flex flex-col gap-[100px] aboutback relative text-thin pb-[50px]">
      <section className="section1 relative w-11/12 mx-auto max-w-[1440px] flex justify-center items-start flex-col min-h-[calc(100vh-88px)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="flex flex-col items-start justify-center h-full">
            <h1 className="text-thin clamp2">{t('about.title')}</h1>
            <p className="w-full">
              {t('about.description')}
            </p>
          </div>
          <div className="w-full">
            <img className="rounded-md" src={about2} alt="dssdfd" />
          </div>
        </div>
      </section>
      <section className="section2 relative w-11/12 mx-auto max-w-[1440px] flex flex-col">
        <h1 className="text-thin clamp3">{t('about.advantages.title')}</h1>
        <ul className="flex flex-col gap-4 mt-3">
          <li className="clamp4">
            <strong>{t('about.advantages.flexible.title')} </strong>
            <br /> {t('about.advantages.flexible.desc')}
          </li>
          <li className="clamp4">
            <strong>{t('about.advantages.standards.title')} </strong>
            <br /> {t('about.advantages.standards.desc')}
          </li>
          <li className="clamp4">
            <strong>{t('about.advantages.technical.title')} </strong>
            <br />
            {t('about.advantages.technical.desc')}
          </li>
          <li className="clamp4">
            <strong>{t('about.advantages.specialists.title')} </strong>
            <br /> {t('about.advantages.specialists.desc')}
          </li>
          <li className="clamp4">
            <strong>{t('about.advantages.organization.title')} </strong>
            <br /> {t('about.advantages.organization.desc')}
          </li>
        </ul>
      </section>
      <section className="section3 relative w-11/12 mx-auto max-w-[1440px] flex flex-col md:flex-row gap-6 justify-between items-center">
        <div className="w-full h-full">
          <img
            src={about1}
            className="w-full h-full object-cover rounded-md"
            alt="Services"
          />
        </div>
        <div>
          <h1 className="font-bold clamp3">
            {t('about.services.title')}
          </h1>
          <ul className="flex flex-col gap-4">
            {t('about.services.items').map((item, index) => (
              <li key={index}>
                - {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default About;
