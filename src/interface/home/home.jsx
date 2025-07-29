import React, { useEffect, useRef, useState } from "react";
import { logo } from "../../images";
import { disignData, disignData1, home1Data } from "../../components/data";
import "./index.scss";
import { homeBackground } from "../../videos";
import { home4, home5, home6 } from "../../images/home-img";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const container = useRef(null);
  const section = useRef(null);
  const section1 = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);

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
                СТРОИТЕЛЬНАЯ КОМПАНИЯ «EXPRESS AUTOMATICA» - это Надежность,
                Качество, Технологии.
              </h1>
              <p className="clamp4 text-white head-h1 text-animate">
                Компания «EXPRESS AUTOMATICA» проектирует и строит жилые дома,
                коммерческие здания, промышленные объекты, выполняет для них
                реконструкцию, ремонт, отделку. Мы работаем быстро, контролируем
                качество, даем гарантию на все услуги.
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
            СТРОИТЕЛЬНАЯ КОМПАНИЯ
            <br /> «EXPRESS AUTOMATICA»
          </h1>
          <div className="flex max-lg:flex-col-reverse justify-between items-center gap-3 ">
            <div className="flex justify-start items-start flex-col gap-3">
              <ul className="text-thin flex flex-col gap-3">
                <li>
                  <strong>ПРОЕКТИРОВАНИЕ:</strong> эскизные, рабочие,
                  дизайн-проекты, проекты для строительства, реконструкции,
                  капитального ремонта, инженерных систем, их согласование.
                </li>
                <li>
                  <strong>СТРОИТЕЛЬСТВО:</strong> промышленные, коммерческие
                  быстровозводимые здания, жилые дома, малоэтажные здания;
                </li>
                <li>
                  <strong>РЕКОНСТРУКЦИЯ:</strong> жилых, коммерческих,
                  общественных зданий, медицинских учреждений, промышленных
                  офисных, торговых комплексов;
                </li>
                <li>
                  <strong>РЕМОНТ, ОТДЕЛКА:</strong> наружная, внутренняя отделка
                  для жилых комплексов, бизнес-центров, офисов.
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
            Мы работаем на условиях генерального подряда,
            <br /> субподряда, авторского надзора.
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
                      Закрыть
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
                Строительство и ремонт
              </h1>
              <ul className="text-thin clamp4 ">
                <li>Ремонт офисов </li>
                <li>Строительство загородных домов </li>
                <li>Малоэтажное строительство </li>
                <li>Ремонт и реконструкция зданий </li>
                <li>Общестроительные работы </li>
                <li>Отделочные работы </li>
                <li>Фасадные, кровельные работы </li>
                <li>Гидроизоляционный работы </li>
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
                  Монтаж инженерных систем
                </h1>
                <ul className="text-thin clamp4 ">
                  <li>Электромонтаж </li>
                  <li>Вентиляция </li>
                  <li>Холодоснабжение </li>
                  <li>Системы отопления </li>
                  <li>Сантехнические работы </li>
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
