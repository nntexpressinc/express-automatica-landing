import React, { useEffect } from "react";
import { home4 } from "../../images/home-img";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./index.scss";
import { service1 } from "../../images/services";
gsap.registerPlugin(ScrollTrigger);

const ConstructionHouse = () => {
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
              Строительство домов и коттеджей
            </h1>
            <p className="w-full">
              Мы выполняем проектирование, подготовку участков к застройке,
              подвод коммуникаций, строительные, отделочные работы. На
              материалы, оборудование, услуги действует гарантия.
            </p>
            <h1 className="text-white clamp2">Преимущества</h1>
            <p className="w-full">
              Мы выполняем проектирование, подготовку участков к застройке,
              подвод коммуникаций, строительные, отделочные работы. На
              материалы, оборудование, услуги действует гарантия.
            </p>
            <ul className="flex flex-col gap-4 mt-3">
              <li className="clamp4">
                <strong>Комплексный подряд.  </strong> Вы можете заказать
                выполнение всех работ в нашей компании: от проектирования
                до электромонтажа в готовом здании. «EXPRESS AUTOMATICA»
                располагает парком спецтехники, штатом специалистов. Возможно
                сотрудничество на условиях субподряда.
              </li>
              <li className="clamp4">
                <strong>Качество. </strong> Мы учитываем характеристики участка,
                соблюдаем СНиП, другие нормы, используем надежные строительные
                технологии.
              </li>
              <li className="clamp4">
                <strong>Сотрудничество. </strong> Компания «EXPRESS AUTOMATICA»
                подберет технологии строительства, стройматериалы, обеспечит их
                поставку. Запланированные работы выполняются без нарушения
                графика. Грамотная организация строительства позволяет возводить
                коттеджи и таунхаусы всего за несколько месяцев.
              </li>
              <li className="clamp4">
                <strong>Сопутствующие услуги. </strong> Мы выполняем изыскания,
                топосъемку, подготовку территории к застройке, демонтаж старых
                зданий. В «EXPRESS AUTOMATICA» можно заказать благоустройство
                участка, подвод коммуникаций, электромонтаж.
              </li>
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
          Этапы возведения частного жилого дома
        </h1>
        <ul className="flex flex-col gap-4 mt-3">
          <li className="clamp4">
            <strong>Проектирование. </strong> Выполняется после изысканий,
            оценки характеристик участка, разработки, согласования эскизного
            проекта. Предполагает разработку детальной технической информации с
            описанием строительных технологий, используемых материалов, порядка
            проведения работ. Готовая документация содержит смету с точными
            ценами на материалы, услуги, рассчитанной итоговой стоимостью
            проекта.
          </li>
          <li className="clamp4">
            <strong>Подготовка. </strong>Расчистка, профилирование, выравнивание
            территории, обустройство дренажа, демонтаж старых зданий, строений и
            т.п.
          </li>
          <li className="clamp4">
            <strong>Возведение здания.  </strong>Подведение коммуникаций,
            обустройство фундамента, стен, перекрытий, кровли, установка дверей,
            окон.
          </li>
          <li className="clamp4">
            <strong>Наружная отделка. </strong> Утепление, отделка фасада по
            выбранной заказчиком технологии.
          </li>
          <li className="clamp4">
            <strong>Внутренняя отделка. </strong> Обустройство чернового,
            чистового пола, отделка стен, потолков, установка лестниц,
            электромонтаж и т.п.
          </li>
          <li className="clamp4">
            <strong>Благоустройство. </strong> Установка ограждений,
            обустройство дорожек, площадок, газонов, озеленение, монтаж уличного
            освещения.
          </li>
        </ul>
      </section>
    </main>
  );
};

export default ConstructionHouse;
