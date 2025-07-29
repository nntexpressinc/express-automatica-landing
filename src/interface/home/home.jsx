import React, { useEffect, useRef, useState } from "react";
import { logo } from "../../images";
import { useLanguage } from "../../context/LanguageContext";
import "./index.scss";
import { homeBackground } from "../../videos";
import { home1, home2, home3, home4, home5, home6, disign, disign1, disign2, disign3, disign4 } from "../../images/home-img";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const { t } = useLanguage();
  const container = useRef(null);
  const section = useRef(null);
  const section1 = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);

  // Home services data with translations
  const home1Data = [
    {
      title: t('home.services.constructionServices'),
      img: home3,
    },
    {
      title: t('home.services.design'),
      img: home2,
    },
    {
      title: t('home.services.engineering'),
      img: home1,
    },
  ];

  // Features data with translations
  const disignData = [
    {
      title: t('home.features.organization.title'),
      desc: t('home.features.organization.desc'),
      img: disign,
    },
    {
      title: t('home.features.technology.title'),
      desc: t('home.features.technology.desc'),
      img: disign1,
    },
    {
      title: t('home.features.reliability.title'),
      desc: t('home.features.reliability.desc'),
      img: disign2,
    },
    {
      title: t('home.features.technicalBase.title'),
      desc: t('home.features.technicalBase.desc'),
      img: disign3,
    },
    {
      title: t('home.features.goals.title'),
      desc: t('home.features.goals.desc'),
      img: disign4,
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useGSAP(
    () => {
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: section.current,
          start: "20% bottom",
          end: "bottom top",
        },
      });

      tl1.fromTo(
        "#home-container1 .text-animate",
        { opacity: 0, x: -100, ease: "power3.out" },
        { opacity: 1, x: 0, stagger: 0.3 }
      );

      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".section1-container",
          start: "50% bottom",
          end: "bottom top",
        },
      });

      tl2.fromTo(
        "#home-container2 .section1-container .card",
        { opacity: 0, y: -50, ease: "power4.out" },
        { opacity: 1, y: 0, stagger: 0.2 }
      );

      const tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: ".section2-container",
          start: "50% bottom",
          end: "bottom top",
        },
      });

      tl3.fromTo(
        [
          ".homeback1 .section2-container h1",
          ".homeback1 .section2-container ul li",
        ],
        { opacity: 0, x: -40, ease: "power3.out" },
        { opacity: 1, x: 0, stagger: 0.2 }
      );
      const tl3_img = gsap.timeline({
        delay:0.2,
        scrollTrigger: {
          trigger: ".section2-container",
          start: "50% bottom",
          end: "bottom top",
        },
      });

      tl3_img.fromTo(
        ".homeback1 .section2-container .img-container",
        { opacity: 0, x: 400, ease: "power3.out" },
        { opacity: 1, x: 0 }
      );

      const tl4 = gsap.timeline({
        delay: 0.3,
        scrollTrigger: {
          trigger: ".section3-container",
          start: "20% bottom",
          end: "bottom top",
        },
      });

      tl4.fromTo(
        [
          ".homeback1 .section3-container .main-text",
        ],
        { opacity: 0, y: -40, ease: "power3.out" },
        { opacity: 1, y: 0 }
      );

      const tl5 = gsap.timeline({
        delay: 0.6,
        scrollTrigger: {
          trigger: ".disign-container",
          start: "10% bottom",
          end: "bottom top",
        },
      });

      tl5.fromTo(
        ".homeback1 .section3-container .disign-container .disign",
        { opacity: 0, x: 100, ease: "power3.out" },
        { opacity: 1, x: 0, stagger: 0.2 }
      );

      const tl5_card = gsap.timeline({
        delay: 1,
        scrollTrigger: {
          trigger: ".card-container",
          start: "10% bottom",
          end: "bottom top",
        },
      });

      tl5_card.fromTo(
        ".homeback1 .section3-container .card-container .card",
        { opacity: 0, x: -100, ease: "power3.out" },
        { opacity: 1, x: 0, stagger: 0.2 }
      );
    },
    { scope: container }
  );

  const [hoveredItem, setHoveredItem] = useState(null);
  const body = document.body;

  const handleClick = (item) => {
    setHoveredItem(item);
    body.style.overflow = "hidden";
    gsap.fromTo(
      ".hover-card",
      { scale: 0, y: -10 },
      { scale: 1, y: 0, duration: 0.3 }
    );
  };

  const handleClose = () => {
    gsap.to(".hover-card", {
      scale: 0,
      y: -10,
      duration: 0.3,
      onComplete: () => {
        setHoveredItem(null);
        body.style.overflow = "visible";
      },
    });
  };

  return (
    <main ref={container}>
      <main
        id="home-container1"
        className="homeback h-[calc(100vh-88px)] w-full flex flex-col gap-[100px] relative pb-[50px]"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-1"></div>
        <div className="video-background">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="min-w-full min-h-full object-cover"
          >
            <source src={homeBackground} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <section
          ref={section}
          className="relative w-full h-[calc(100vh-88px)] content bg-black/10 "
        >
          <main className="flex justify-center items-start flex-col  gap-3 w-11/12 mx-auto h-[calc(100vh-88px)] z-2 relative">
            <div className="text-container w-full lg:w-1/2 flex flex-col justify-center items-center gap-3 text-start">
              <h1 className="text-animate clamp2 text-white font-bold head-h1">
                {t('home.hero.title')}
              </h1>
              <p className="clamp4 text-white head-h1 text-animate">
                {t('home.hero.description')}
              </p>
            </div>
          </main>
        </section>
      </main>
      <main
        id="home-container2"
        className="homeback1 w-full flex flex-col gap-[100px] relative pt-[50px]"
      >
        <div className="absolute top-0 left-0 w-full h-full z-1"></div>
        <section className="section1-container relative w-11/12 max-w-[1440px] mx-auto grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-6 mb-2 bg-transparent">
          {home1Data.map((item, idx) => (
            <div
              key={idx}
              className="card cursor-pointer w-full  flex justify-center items-center flex-col gap-3  rounded-[12px] p-4"
            >
              <div className="hover-image card-image w-full h-[220px]">
                <img
                  className="rounded-md w-full h-full object-cover"
                  src={item.img}
                  alt=""
                />
              </div>
              <h1 className="text-thin font-bold clamp3 text-center">
                {item.title}
              </h1>
            </div>
          ))}
        </section>
        <section className="section2-container relative w-11/12 max-w-[1440px] mx-auto flex flex-col gap-3">
          <h1 className="text-center w-full clamp3 text-primary rounded-[12px] font-[500]">
            {t('home.company.title')}
          </h1>
          <div className="flex max-lg:flex-col-reverse justify-between items-center gap-3 ">
            <div className="flex justify-start items-start flex-col gap-3">
              <ul className="text-thin flex flex-col gap-3">
                <li>
                  <strong>{t('home.company.planning').split(':')[0]}:</strong> {t('home.company.planning').split(':')[1]}
                </li>
                <li>
                  <strong>{t('home.company.construction').split(':')[0]}:</strong> {t('home.company.construction').split(':')[1]}
                </li>
                <li>
                  <strong>{t('home.company.reconstruction').split(':')[0]}:</strong> {t('home.company.reconstruction').split(':')[1]}
                </li>
                <li>
                  <strong>{t('home.company.repair').split(':')[0]}:</strong> {t('home.company.repair').split(':')[1]}
                </li>
              </ul>
            </div>
            <div className="z-2 img-container w-full h-[400px] mt-2 hover-image">
              <img
                className="img-ishla w-full h-full object-cover rounded-md"
                src={home4}
                alt=""
              />
            </div>
          </div>
        </section>
        <section className="section3-container relative w-11/12 max-w-[1440px] mx-auto flex flex-col gap-[32px]">
          <h1 className="main-text text-center w-full clamp3 text-primary rounded-[12px] font-[500]">
            {t('home.workConditions')}
          </h1>
          <>
            <div className="disign-container grid grid-cols-5 max-lg:grid-cols-3 max-xl:grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4">
              {disignData.map((item, idx) => (
                <div key={idx} onClick={() => handleClick(item)}>
                  <div className="disign flex flex-col justify-between gap-4 bg-secondaryBg text-thin p-4 rounded-md cursor-pointer">
                    <div className="bg w-full h-[100px]">
                      <img
                        className="rounded-md w-full h-full object-contain"
                        src={item.img}
                        alt=""
                      />
                    </div>
                    <h1 className="text-primary font-bold clamp3 whitespace-nowrap">
                      {item.title}
                    </h1>
                    <p className="clamp4">{item.desc.slice(0, 80)}...</p>
                  </div>
                </div>
              ))}
            </div>
            {hoveredItem && (
              <div className="hover-card z-10 fixed top-[88px] left-0  w-screen h-[calc(100vh-88px)] flex items-center justify-center ">
                <div className="bg-white p-4 rounded-md w-11/12 md:w-1/2 max-h-[80%] shadow-lg overflow-y-scroll">
                  <div className="flex flex-col gap-4">
                    <div className="bg w-full h-[100px] md:h-[250px]">
                      <img
                        className="rounded-md w-full h-full object-contain"
                        src={hoveredItem.img}
                        alt=""
                      />
                    </div>
                    <h1 className="text-primary font-bold">
                      {hoveredItem.title}
                    </h1>
                    <p>{hoveredItem.desc}</p>
                    <button
                      className="mt-4 px-4 py-2 bg-primary text-white rounded-md"
                      onClick={handleClose}
                    >
                      {t('common.close')}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
          <div className="card-container grid grid-cols-2 max-md:grid-cols-1 gap-6 mb-4">
            <div className="card bg-secondaryBg w-full flex flex-col justify-start items-start gap-4  p-4 rounded-md">
              <div className="bg w-full h-[230px]">
                <img
                  className="rounded-md w-full h-full object-cover"
                  src={home5}
                  alt=""
                />
              </div>
              <h1 className="text-primary font-bold clamp3">
                {t('home.construction.title')}
              </h1>
              <ul className="text-thin clamp4 ">
                {t('home.construction.items').map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="card bg-secondaryBg w-full flex flex-col justify-start items-start gap-4  p-4 rounded-md">
              <div className="bg w-full h-[230px]">
                <img
                  className="rounded-md w-full h-full object-cover"
                  src={home6}
                  alt=""
                />
              </div>
              <div className="w-full">
                <h1 className="text-primary font-bold clamp3">
                  {t('home.engineering.title')}
                </h1>
                <ul className="text-thin clamp4 ">
                  {t('home.engineering.items').map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </main>
  );
};

export default Home;
