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
              Ремонт офисов
            </h1>
            <p className="w-full clamp4 leading-relaxed mb-6">
              Компания «EXPRESS AUTOMATICA» выполняет ремонт офисов — для
              обновления интерьера, изменения планировки, реконструкции
              помещений. Мы используем качественные материалы, проверенные
              технологии, организуем работы быстро.
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
          Виды услуг:
        </h1>
        <ul className="flex flex-col gap-4 mt-3">
          <li className="clamp4 leading-relaxed">
            <strong>Проектирование.</strong> Мы разработаем дизайн-проект,
            выполним эскизы, подготовим рабочую документацию, смету, план
            организации работ
          </li>
          <li className="clamp4 leading-relaxed">
            <strong>Косметический ремонт.</strong>При нормальном состоянии
            коммуникаций, стен, окон, полов, других строительных конструкций
            выполняется только обновление интерьера. Это быстро, экономично,
            удобно, если вы въезжаете в новый офис и хотите изменить его «под
            себя».
          </li>
          <li className="clamp4 leading-relaxed">
            <strong>Капитальный ремонт.</strong>Обновление или замена
            строительных конструкций, оборудования, элементов инженерных
            систем и т.п. с последующей декоративной отделкой.
          </li>
          <li className="clamp4 leading-relaxed">
            <strong>Реконструкция или перепланировка.</strong>Выполняется, если
            меняются требования к использованию помещений, нужно изменить
            расположение функциональных зон, площадь отдельных кабинетов и т.п.
          </li>
        </ul>
        <p className="clamp4">
          При ремонте или реконструкции офисов строительная компания «EXPRESS
          AUTOMATICA» может работать как генподрядчик, который проводит
          проектирование, организует выполнение ремонта, снабжение объекта,
          привлечение субподрядных организаций. У нас можно заказать выполнение
          отдельных работ: проектирование с последующим авторским надзором,
          монтаж инженерного оборудования, декоративную отделку.
        </p>
      </section>
      <section className="section3 relative w-11/12 mx-auto max-w-[1440px] flex flex-col gap-3">
        <h1 className="text-white clamp3 font-bold leading-tight mb-4">
          Преимущества:
        </h1>
        <p className="clamp4">
          Работаем по договору. В нем прописаны гарантии, наши обязательства,
          сроки выполнения работ или их отдельных этапов. Сотрудничество
          прозрачно: при снабжении мы предоставляем первичные документы для
          отчетности, возможна поэтапная приемка (регулярный контроль) ремонтных
          работ.
        </p>
        <ul className="flex flex-col gap-4 mt-3">
          <li className="clamp4 leading-relaxed">
            <strong>Цены и сроки.</strong>. В среднем - не дольше, чем три
            месяца. Точный срок согласовывается до подписания договора. Цены
            прописаны в смете и в договоре, остаются фиксированными. Общая
            стоимость определяется составом работ, используемыми технологиями,
            материалами, состоянием помещений:
            <ul className="pl-10 list-disc">
              <li>
                разработка дизайн-проекта — 900-1500 руб./м2, формирование
                рабочей документации по готовым эскизам — 100-500 руб./м2;
              </li>
              <li>
                внутренняя отделка — 3000-5000 руб./м2 (без учета материалов);
              </li>
              <li>
                устройство коммуникаций — 3000-5000 руб./м2 (с учетом
                материалов).
              </li>
            </ul>
            Цены на отдельные виды услуг указаны в прайс-листе.
          </li>
          <li className="clamp4 leading-relaxed">
            <strong>Результат соответствует проекту.</strong>Работы проводятся
            по требованиям рабочей документации, с использованием указанных в
            смете материалов.
          </li>
          <li className="clamp4 leading-relaxed">
            <strong>Организация.</strong>Она отражена в проекте, где указаны
            объемы, состав работ для каждого из этапов, сроки их проведения.
            Компания «EXPRESS AUTOMATICA» использует собственную спецтехнику,
            оборудование, привлекает специалистов с необходимыми допусками,
            лицензиями. Возможна такая организация ремонта, при которой офис
            продолжит работать даже во время него.
          </li>
        </ul>
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
          <li>-Дизайн-проекты</li>
          <li>-Виды работ</li>
          <li>-Этапы работ</li>
        </ul>
      </section>
    </main>
  );
};

export default OfficeRenovation;
