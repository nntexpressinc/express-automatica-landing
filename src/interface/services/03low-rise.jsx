import React, { useEffect } from "react";
import { home4 } from "../../images/home-img";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { service2_2, service3, service3_1 } from "../../images/services";

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

const LowRise = () => {
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
      { selector: "ul li", from: { x: 50 }, to: { x: 0 }, stagger: 0.2 },
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
      { selector: "ul li", from: { x: -50 }, to: { x: 0 }, stagger: 0.2 },
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
      { selector: "ul li", from: { x: -50 }, to: { x: 0 }, stagger: 0.2 },
      { selector: "p", from: { y: -50 }, to: { y: 20 }, stagger: 0.2 },
    ]);
    window.scrollTo(0, 0);

  }, []);
  return (
    <main className="w-full flex flex-col gap-[100px] relative text-white pb-[50px]">
      <div className="absolute top-0 left-0 w-full h-full bg-primary z-1"></div>
      <section className="section1 relative w-11/12 mx-auto max-w-[1440px] flex justify-center items-start flex-col min-h-[calc(100vh-88px)]">
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="flex flex-col items-start justify-center h-full">
            <h1 className="text-white clamp1 font-bold leading-tight mb-4">
              Малоэтажное строительство
            </h1>
            <p className="w-full clamp4 leading-relaxed mb-6">
              Компания «EXPRESS AUTOMATICA» выполняет строительство малоэтажных
              зданий: жилых, коммерческих, общественных. Среднее число этажей у
              таких объектов — 3-4, максимальное — 9. Мы работаем на условиях
              генерального подряда (полное выполнение работ на объекте),
              выступает как подрядчик при проведении работ на отдельных этапах.
            </p>
          </div>
          <div className="w-full h-full">
            <img className="rounded-md w-full h-full object-cover" src={service3} alt="Construction House" />
          </div>
        </div>
      </section>
      <section className="section2 relative w-11/12 mx-auto max-w-[1440px] grid grid-cols-1 md:grid-cols-2 gap-6">
        <img className="w-full h-full object-cover rounded-md" src={service3_1} alt="Construction" />
        <div>
          <h1 className="text-white clamp3 font-bold leading-tight mb-4">
            Услуги:
          </h1>
          <ul className="flex flex-col gap-4 mt-3 list-disc pl-5">
            <li className="clamp4 leading-relaxed">
              проектирование зданий: изыскания, разработка любой проектной
              документации, ее согласование;
            </li>
            <li className="clamp4 leading-relaxed">
              работы нулевого цикла: подготовка площадки, профилирование грунта,
              рытье котлованов и траншей;
            </li>
            <li className="clamp4 leading-relaxed">
              строительство: обустройство фундаментов, колонн, монолитных и
              сборных перекрытий, несущих стен, легких перегородок, лестниц,
              фасадных, кровельных систем;
            </li>
            <li className="clamp4 leading-relaxed">
              монтаж: сантехнические, электромонтажные работы, установка систем
              безопасности, обустройство систем кондиционирования, вентиляции,
              монтаж сборных, металлических конструкций;
            </li>
            <li className="clamp4 leading-relaxed">гидро-, теплоизоляция;</li>
            <li className="clamp4 leading-relaxed">
              благоустройство территории, обустройство подъездных путей,
              автомобильных стоянок, пешеходных дорожек, тротуаров, зон отдыха.
            </li>
          </ul>
        </div>
      </section>
      <section className="section3 relative w-11/12 mx-auto max-w-[1440px] flex flex-col">
        <h1 className="text-white clamp3 font-bold leading-tight mb-4">
          Преимущества
        </h1>
        <ul className="no-list-disc flex flex-col gap-4 mt-3 pl-5">
          <li className="clamp4 leading-relaxed">
            Высокие темпы: объект может быть сдан за несколько месяцев (для
            быстровозводимых конструкций).
          </li>
          <li className="clamp4 leading-relaxed">
            Общий объем затрат ниже, количество инвестиций сокращается.
            Дополнительную экономию обеспечивает удешевление подготовительного
            этапа, фундамента, несущих конструкций.
          </li>
          <li className="clamp4 leading-relaxed">
            Удобная инфраструктура: малая этажность здания снижает нагрузку на
            подъездные пути, парковки (особенно актуально для больших городов).
            Для комплексов малоэтажных зданий возможно создание автономной
            инфраструктуры.
          </li>
          <li className="clamp4 leading-relaxed">
            Малоэтажное строительство позволяет использовать нестандартные
            архитектурные, дизайнерские, планировочные решения, добиваться
            высокого комфорта.
          </li>
          <li className="clamp4 leading-relaxed">
            Строительство объекта возможно в любых условиях: при плотной
            городской застройке, на новых территориях, в высотных микрорайонах и
            т.п.{" "}
          </li>
        </ul>
        <p className="clamp4 mt-6">
          При строительстве малоэтажных зданий «EXPRESS AUTOMATICA»
          обеспечивает:
        </p>
      </section>
      <section className="section4 relative w-11/12 mx-auto max-w-[1440px] grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <img className="rounded-md w-full h-full object-cover" src={service2_2} alt="Construction Image" />
        </div>
        <div>
          <h1 className="text-white clamp3 font-bold leading-tight mb-4">
            Почему EXPRESS AUTOMATICA?
          </h1>
          <p className="clamp4 leading-relaxed mb-6">
            Реконструкция позволяет решать следующие задачи:
          </p>
          <ul className="flex flex-col gap-4 mt-3 list-disc pl-5">
            <li className="clamp4 leading-relaxed">
              Проводим полный цикл работ, от проектирования до чистовой отделки
              и сдачи готового объекта. Также можем выполнять отдельные
              связанные с реконструкцией задачи.
            </li>
            <li className="clamp4 leading-relaxed">
              Работаем быстро, качественно. Большой штат специалистов,
              собственный парк техники, все необходимое оборудование, а также
              опыт реконструкции разных объектов.
            </li>
            <li className="clamp4 leading-relaxed">
              Организация работы. Обеспечиваем снабжение. Можем реконструировать
              постройку без прекращения ее функционирования. Строго соблюдаем
              сроки, графики.
            </li>
            <li className="clamp4 leading-relaxed">
              Реконструируем любые сооружения: торговые, офисные центры,
              промышленные сооружения, общественные здания, медучреждения, жилые
              дома и другие.
            </li>
            <li className="clamp4 leading-relaxed">
              Гарантируем качество услуг, строгое соблюдение технологии, а также
              строительных норм и других стандартов.
            </li>
          </ul>
        </div>

        <ul className="col-span-2 flex flex-col gap-4 mt-3 list-disc pl-5">
          <h1 className="text-white clamp3 font-bold mb-4">
            При строительстве малоэтажных зданий «EXPRESS AUTOMATICA»
            обеспечивает:
          </h1>
          <li className="clamp4 leading-relaxed">
            Быстрое проведение работ. Для этого разрабатывается план их
            организации с указанием последовательности, сроков завершения этапов
            строительства. Мы своевременно поставляем спецтехнику, материалы и
            оборудование на объект, работаем без задержек, с соблюдением
            установленных сроков;
          </li>
          <li className="clamp4 leading-relaxed">
            Качество. Полное соблюдение СНиП, СанПин, других нормативов
            гарантирует высокие характеристики готового объекта. Мы используем
            качественные материалы и надежные технологии;{" "}
          </li>
          <li className="clamp4 leading-relaxed">
            Комплексный подход. Компания «EXPRESS AUTOMATICA» может выполнить
            любую часть работ на объекте, возможно сотрудничество на условиях
            генподряда, проектирование с последующим авторским надзором,
            организация снабжения и т.п. Для генподряда предусмотрены сниженные
            цены на услуги.
          </li>
          <li className="clamp4 leading-relaxed">
            Строительство складских терминалов
          </li>
          <li className="clamp4 leading-relaxed">
            Строительство офисных центров
          </li>
          <li className="clamp4 leading-relaxed">
            Строительство торговых центров
          </li>
          <li className="clamp4 leading-relaxed">Фото работ</li>
        </ul>
      </section>
    </main>
  );
};

export default LowRise;
