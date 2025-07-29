import React, { useEffect } from "react";
import { home1, home4 } from "../../images/home-img";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { service5 } from "../../images/services";

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

const CivilWorks = () => {
  useEffect(() => {
    animateSection(".section1", [
      { selector: ["h1","p"], from: { y: -50 }, to: { y: 0 }, stagger: 0.3 },
      {
        selector: "img",
        from: { scale: 0.8 },
        to: { scale: 1 },
        duration: 1.2,
      },
    ]);

    animateSection(".section2", [
      { selector: ["ul li"], from: { x: 50 }, to: { x: 0 }, stagger: 0.2 },
      { selector: "h1", from: { y: -50 }, to: { y: 0 }, stagger: 0.3 },
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
              Общестроительные работы
            </h1>
            <p className="w-full clamp4 leading-relaxed mb-6">
              Компания «EXPRESS AUTOMATICA» выполняет общестроительные работы
              для объектов разных типов. Мы работаем с малоэтажными, жилыми
              домами, общественными, офисными и торговыми зданиями,
              промышленными и производственными объектами. Строительная компания
              «EXPRESS AUTOMATICA» выполняет полный комплекс работ, включая
              проектирование, устройство фундамента и перекрытий, возведение
              перегородок, отделку, земляные работы. Если требуется, мы
              обеспечим поставки строительных материалов для объекта по оптовой
              цене.
            </p>
          </div>
          <div className="w-full h-full">
            <img
              className="rounded-md w-full h-full object-cover"
              src={service5}
              alt="Construction House"
            />
          </div>
        </div>
      </section>
      <section className="section2 relative w-11/12 mx-auto max-w-[1440px] flex flex-col gap-3">
        <h1 className="text-white clamp3 font-bold leading-tight mb-4">
          У нас вы сможете заказать общестроительные работы:
        </h1>
        <ul className="flex flex-col gap-4 mt-3 list-disc pl-5">
          <li className="clamp4 leading-relaxed">
            земляные работы: укладку и укрепление грунта, обустройство траншей
            для коммуникаций, котлованов для фундаментов;
          </li>
          <li className="clamp4 leading-relaxed">
            обустройство ленточных фундаментов, монолитных плит и пр.;
          </li>
          <li className="clamp4 leading-relaxed">
            строительство стен из кирпича, блоков, других материалов;
          </li>
          <li className="clamp4 leading-relaxed">устройство перекрытий;</li>
          <li className="clamp4 leading-relaxed">
            обустройство и ремонт полов (армирование, самовыравнивающиеся или
            «сухие» полы и т.п.);
          </li>
          <li className="clamp4 leading-relaxed">
            гидроизоляцию фундаментов, пола, стен проникающими составами,
            мастиками, рулонными материалами;
          </li>
          <li className="clamp4 leading-relaxed">
            штукатурные работы (стены, потолки, проемы и откосы);
          </li>
          <li className="clamp4 leading-relaxed">
            создание новых проемов в стенах, усиление существующих проемов
            металлическим профилем;
          </li>
          <li className="clamp4 leading-relaxed">
            обустройство перегородок из гипсокартона или облицовку им стен,
            шумоизоляцию, утепление.
          </li>
        </ul>
        <p className="clamp4">
          Деятельность компании «EXPRESS AUTOMATICA» лицензирована.
          Общестроительные работы выполняются в соответствии с действующими СНиП
          и другими стандартами. Компания может выступать как генеральный
          подрядчик, выполняя полный комплекс строительных работ, или как
          субподрядчик, обеспечивая решение конкретных задач.
        </p>
      </section>
    </main>
  );
};

export default CivilWorks;
