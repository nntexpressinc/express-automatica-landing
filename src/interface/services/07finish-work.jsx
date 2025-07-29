import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { service7 } from "../../images/services";

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

const FinishWork = () => {
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

  return (
    <main className="w-full flex flex-col gap-[100px] relative text-white pb-[50px]">
      <div className="absolute top-0 left-0 w-full h-full bg-primary z-1"></div>
      <section className="section1 relative w-11/12 mx-auto max-w-[1440px] flex justify-center items-start flex-col min-h-[calc(100vh-88px)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="flex flex-col items-start justify-center h-full">
            <h1 className="text-white clamp1 font-bold leading-tight mb-4">
              Дизайн интерьера
            </h1>
            <p className="w-full clamp4 leading-relaxed mb-6">
              Интерьерный дизайн создают, чтобы оформить помещение, сделать его
              красивым, удобным. Его разработка — один из этапов проектирования
              перед ремонтом, реконструкцией или отделкой нового объекта. При
              этом решают задачи, которые связаны с назначением, планировкой
              помещений, их инженерным оснащением, зонированием, визуальными
              решениями, расстановкой мебели, соблюдением особенностей
              выбранного стиля. Требования к дизайну будут разными для квартир и
              жилых домов, офисов, ресторанов или магазинов: в одних случаях
              важен уют, а в других — удобство, яркость, запоминаемость.
              Полезная информация от сотрудников строительной компании «EXPRESS
              AUTOMATICA» о дизайне интерьера и отдельных аспектах его создания
              — в этом разделе.
            </p>
          </div>
          <div className="w-full">
            <img
              className="rounded-md"
              src={service7}
              alt="Construction House"
            />
          </div>
        </div>
      </section>
      <section className="section2 relative w-11/12 mx-auto max-w-[1440px] flex flex-col gap-3">
        <ul className="list-disc flex flex-col gap-4 mt-3">
          <li className="clamp4 leading-relaxed">Шкаф-купе</li>
          <li className="clamp4 leading-relaxed">
            Отделка кабинета руководителя
          </li>
          <li className="clamp4 leading-relaxed">
            Отделочные материалы для офиса
          </li>
          <li className="clamp4 leading-relaxed">
            Расстановка мебели и планировка в офисном интерьере
          </li>
          <li className="clamp4 leading-relaxed">
            Дизайн интерьера для банков
          </li>
          <li className="clamp4 leading-relaxed">
            Фитодизайн в офисном интерьере
          </li>
          <li className="clamp4 leading-relaxed">
            Фирменный стиль компании как часть дизайна офиса{" "}
          </li>
          <li className="clamp4 leading-relaxed">Дизайн офисного интерьера</li>
          <li className="clamp4 leading-relaxed">Открытая планировка офиса</li>
          <li className="clamp4 leading-relaxed">
            Зонирование пространства офиса
          </li>
        </ul>
      </section>
    </main>
  );
};

export default FinishWork;
