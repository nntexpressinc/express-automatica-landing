import React, { useEffect } from "react";
import { home1, home4 } from "../../images/home-img";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { service4, service4_1 } from "../../images/services";

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

const Prefabricated = () => {
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
      { selector: ".ul1 li", from: { x: -100 }, to: { x: 0 }, stagger: 0.2 },
      { selector: ".ul2 li", from: { x: 100 }, to: { x: 0 }, stagger: 0.2 },
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
    animateSection(".section5", [
      { selector: "ul li", from: { x: -50 }, to: { x: 0 }, stagger: 0.2 },
      { selector: "p", from: { y: -50 }, to: { y: 20 }, stagger: 0.2 },
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
              Быстровозводимые здания из сэндвич панелей
            </h1>
            <p className="w-full clamp4 leading-relaxed mb-6">
              Компания "EXPRESS AUTOMATICA" строит быстровозводимые здания из
              сэндвич-панелей. Строительство выполняется с меньшими затратами,
              быстро. У здания может быть почти любая площадь.
            </p>
          </div>
          <div className="w-full h-full">
            <img className="rounded-md w-full h-full object-cover" src={service4} alt="Construction House" />
          </div>
        </div>
      </section>
      <section className="section2 relative w-11/12 mx-auto max-w-[1440px] grid gap-6 md:grid-cols-2 grid-cols-1">
        <div className="w-full h-full">
          <img className="w-full h-full object-cover" src={service4_1} alt="" />
        </div>
        <div>
          <h1 className="text-white clamp3 font-bold leading-tight mb-4">
            Применение:
          </h1>
          <ul className="flex flex-col gap-4 mt-3 list-disc pl-5">
            <li className="clamp4 leading-relaxed">
              Производственные объекты, цеха, заводы.
            </li>
            <li className="clamp4 leading-relaxed">
              Логистические объекты: склады, ангары.
            </li>
            <li className="clamp4 leading-relaxed">
              Общественные сооружения, включая торговые центры, офисные центры,
              административные объекты
            </li>
            <li className="clamp4 leading-relaxed">
              Сельскохозяйственные сооружения.
            </li>
            <li className="clamp4 leading-relaxed">
              Спортивные объекты: крытые корты, стадионы, арены, закрытые залы.
            </li>
            <li className="clamp4 leading-relaxed">
              Автомойки, СТО, автосалоны.
            </li>
            <li className="clamp4 leading-relaxed">
              Временное жилье, гостиницы, общежития.
            </li>
          </ul>
        </div>
      </section>
      <section className="section3 relative w-11/12 mx-auto max-w-[1440px] grid md:grid-cols-2 grid-cols-1 gap-5">
        <div>
          <h1 className="text-white clamp3 font-bold leading-tight mb-4">
            Характеристики
          </h1>
          <ul className="ul1 no-list-disc flex flex-col gap-4 mt-3 pl-5">
            <li className="clamp4 leading-relaxed">
              Монтаж выполняется на подготовленной ровной площадке или легком
              фундаменте.
            </li>
            <li className="clamp4 leading-relaxed">
              Несущая конструкция — металлическая или железобетонная.
            </li>
            <li className="clamp4 leading-relaxed">
              При использовании металлокаркаса дополнительно применяются
              термопрофили для защиты от мостиков холода.
            </li>
            <li className="clamp4 leading-relaxed">
              Заполнение стен — металлические сэндвич-панели.
            </li>
            <li className="clamp4 leading-relaxed">
              Сэндвич-панели заполнены утеплителем, имеют цветное покрытие с
              внутренней и наружной стороны. Есть несколько размеров.
            </li>
            <li className="clamp4 leading-relaxed">
              Кровля плоская или скатная из профлиста или металлочерепицы.
              Возможно утепление.
            </li>
            <li className="clamp4 leading-relaxed">
              Возможно остекление, установка дверей, въездных ворот.
            </li>
            <li className="clamp4 leading-relaxed">
              Внутри возможно устройство оснований для монтажа тяжелого
              оборудования
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-white clamp3 font-bold leading-tight mb-4">
            Преимущества
          </h1>
          <ul className="ul2 no-list-disc flex flex-col gap-4 mt-3 pl-5">
            <li className="clamp4 leading-relaxed">Быстрое строительство.</li>
            <li className="clamp4 leading-relaxed">Экономичная технология.</li>
            <li className="clamp4 leading-relaxed">
              Здание разборное, его можно перемещать на новое место.
            </li>
            <li className="clamp4 leading-relaxed">
              Подходит для размещения любых объектов.
            </li>
            <li className="clamp4 leading-relaxed">
              Можно использовать в любых климатических условиях.
            </li>
            <li className="clamp4 leading-relaxed">
              Долгий срок службы, безопасность, надежность строительных
              конструкций и материалов.
            </li>
            <li className="clamp4 leading-relaxed">
              Отделка может быть любой.
            </li>
            <li className="clamp4 leading-relaxed">
              Возможно подключение любых коммуникаций.
            </li>
            <li className="clamp4 leading-relaxed">
              Затраты на проектирование, согласование минимальны потому, что
              используются готовые комплектующие.
            </li>
          </ul>
        </div>
      </section>
      <section className="section4 relative w-11/12 mx-auto max-w-[1440px] flex flex-col">
        <p className="clamp4">
          Быстровозводимое здание поставляется на объект в виде набора
          комплектующих: сэндвич-панелей, элементов несущей конструкции,
          крепежа, остекления, кровельных и других материалов. Его собирают на
          месте. При этом не используются мокрые процессы, что позволяет
          проводить монтаж в любое время года. Время строительства минимально.
          Возвести здание можно в срок от нескольких дней до нескольких недель.
          Если понадобится, строение можно разобрать и перевезти на новое место,
          увеличить его площадь, дооборудовать. Оно может использоваться в
          качестве временного или постоянного сооружения. Во втором случае
          возможна декоративная отделка фасада.
        </p>
      </section>
      <section className="section5 relative w-11/12 mx-auto max-w-[1440px] flex flex-col">
        <p className="clamp4 leading-relaxed mb-6">
          Компания "EXPRESS AUTOMATICA" проектирует быстровозводимые здания,
          поставляет комплектующие и материалы для них, выполняет подготовку
          фундамента и монтаж, а также подключение необходимых коммуникаций,
          отделочные работы, благоустройство прилегающей территории.{" "}
        </p>
        <ul className="flex flex-col gap-4 mt-3 list-disc pl-5">
          <li className="clamp4 leading-relaxed">Строительство ангаров</li>
          <li className="clamp4 leading-relaxed">Строительство складов</li>
          <li className="clamp4 leading-relaxed">
            Строительство торговых комплексов
          </li>
          <li className="clamp4 leading-relaxed">Производственные здания</li>
          <li className="clamp4 leading-relaxed">Автосалоны и автосервисы</li>
          <li className="clamp4 leading-relaxed">Офисные здания</li>
          <li className="clamp4 leading-relaxed">Спортивные сооружения</li>
        </ul>
      </section>
    </main>
  );
};

export default Prefabricated;
