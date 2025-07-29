import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  service7_1,
  service7_2,
  service7_3,
  service7_4,
  service8,
} from "../../images/services";

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

const FacadeWork = () => {
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

  const dataWork = [service7_1, service7_2, service7_3, service7_4];

  return (
    <main className="w-full flex flex-col gap-[100px] relative text-white pb-[50px]">
      <div className="absolute top-0 left-0 w-full h-full bg-primary z-1"></div>
      <section className="section1 relative w-11/12 mx-auto max-w-[1440px] flex justify-center items-start flex-col min-h-[calc(100vh-88px)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="flex flex-col items-start justify-center h-full">
            <h1 className="text-white clamp1 font-bold leading-tight mb-4">
            Фасадные работы
            </h1>
            <p className="w-full clamp4 leading-relaxed mb-6">
              Компания «EXPRESS AUTOMATICA» проводит фасадные работы для
              строящихся и эксплуатируемых зданий: жилых домов, коммерческих,
              общественных, промышленных объектов. Мы работаем быстро,
              используем качественные материалы, даем гарантию.
            </p>
          </div>
          <div className="w-full">
            <img
              className="rounded-md"
              src={service8}
              alt="Construction House"
            />
          </div>
        </div>
      </section>
      <section className="section2 relative w-11/12 mx-auto max-w-[1440px] flex flex-col gap-3">
        <h1 className="text-white clamp3 font-bold leading-tight mb-4">
          Услуги:
        </h1>
        <ul className="list-disc flex flex-col gap-4 mt-3">
          <li className=" clamp4 leading-relaxed">
            проектирование: разработка дизайн-проекта и эскиза, формирование
            рабочей, технической документации по устройству фасадной системы для
            строящегося здания или по ремонту, реконструкции фасада;
          </li>
          <li className="clamp4 leading-relaxed">
            проектирование: разработка дизайн-проекта и эскиза, формирование
            рабочей, технической документации по устройству фасадной системы для
            строящегося здания или по ремонту, реконструкции фасада;
          </li>
          <li className="clamp4 leading-relaxed">
            проектирование: разработка дизайн-проекта и эскиза, формирование
            рабочей, технической документации по устройству фасадной системы для
            строящегося здания или по ремонту, реконструкции фасада;
          </li>
          <li className="clamp4 leading-relaxed">
            наружная отделка: штукатурные, облицовочные работы, окраска,
            установка декоративных элементов, водосточной системы и пр.
          </li>
        </ul>
        <p className="clamp4">
          Компания «EXPRESS AUTOMATICA» работает с любыми фасадными системами.
          Возможно устройство, реставрация, реконструкция фасада для средне-,
          многоэтажных зданий с использованием технологий промышленного
          альпинизма. Работы могут проводиться в любое время года. При
          устройстве, ремонте, отделке фасадов мы соблюдаем требования
          актуальных строительных и санитарных норм, стандарты пожарной
          безопасности. Соблюдение требований проектной документации,
          установленных сроков оказания услуг, гарантия их качества
          прописываются в договоре.
        </p>
      </section>
      <section className="section4 relative w-11/12 mx-auto max-w-[1440px] flex flex-col gap-3">
        <h1 className="text-white clamp3 font-bold leading-tight mb-4">
          Наши работы:
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
          <li>-Отделка фасадов натуральным камнем</li>
          <li>-Ремонт фасадов</li>
          <li>-Монтаж сайдинга</li>
          <li>-Вентилируемые фасады</li>
        </ul>
      </section>
    </main>
  );
};

export default FacadeWork;
