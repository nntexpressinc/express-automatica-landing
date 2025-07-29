import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { service3_1, service9 } from "../../images/services";

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

const Waterproofing = () => {
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
              Гидроизоляционные работы
            </h1>
            <p className="w-full clamp4 leading-relaxed mb-6">
              Гидроизоляция защищает строительные конструкции от влаги,
              увеличивает срок их службы, помогает обеспечить нормальную
              влажность внутри здания. Компания «EXPRESS AUTOMATICA» проводит
              гидроизоляционные работы при строительстве, реконструкции,
              ремонте, отделке зданий для любых конструкций, включая фундаменты,
              стены подвалов, перекрытия, кровли.
            </p>
          </div>
          <div className="w-full h-full">
            <img
              className="rounded-md w-full h-full object-cover"
              src={service9}
              alt="Construction House"
            />
          </div>
        </div>
      </section>
      <section className="section2 relative w-11/12 mx-auto max-w-[1440px] grid grid-cols-1 md:grid-cols-2 gap-6">
        <img
          className="w-full h-full object-cover rounded-md"
          src={service3_1}
          alt="Construction"
        />
        <div>
          <h1 className="text-white clamp3 font-bold leading-tight mb-4">
            Технологии
            <br />
            Для защиты от влаги «EXPRESS AUTOMATICA» использует технологии:
          </h1>
          <ul className="flex flex-col gap-4 mt-3 list-disc pl-5">
            <li className="clamp4 leading-relaxed">
              проникающая гидроизоляция Пенетрон: нанесение растворов со
              специальным составом. Их компоненты глубоко проникают в толщу
              бетона. При контакте с влагой они кристаллизуются, заполняя поры и
              пустоты. Дополнительно это увеличивает морозостойкость и прочность
              бетона. Технология применяется для фундаментов, перекрытий,
              монолитных стен, других бетонных и железобетонных конструкций;
            </li>
            <li className="clamp4 leading-relaxed">
              монтаж рулонных материалов. Выполняется в два слоя, чтобы
              создать прочный влагонепроницаемый барьер. Материалы на основе
              битума используются для фундамента, стен подвала и цоколя, плоской
              кровли. При гидроизоляции фундамента, чтобы дополнительно защитить
              гидроизоляционный слой от повреждений, можно
              установить профилированные мембраны;
            </li>
            <li className="clamp4 leading-relaxed">
              обмазочные материалы. Создают сплошной влагонепроницаемый слой,
              могут использоваться для криволинейных поверхностей;
            </li>
            <li className="clamp4 leading-relaxed">
              обмазочные материалы. Создают сплошной влагонепроницаемый слой,
              могут использоваться для криволинейных поверхностей;
            </li>
          </ul>
        </div>
        <p className="col-span-4">
          Для большей надежности компания «EXPRESS AUTOMATICA» рекомендует
          комбинировать способы защиты от влаги, чтобы исключить ее действие на
          строительные конструк
        </p>
      </section>
      <section className="section3 relative w-11/12 mx-auto max-w-[1440px] flex flex-col">
        <h1 className="text-white clamp3 font-bold leading-tight mb-4">
          Порядок работ
        </h1>
        <p>
          Сотрудники компании «EXPRESS AUTOMATICA» выполняют гидроизоляцию,
          соблюдая требования технологии и обеспечивая качественное проведение
          работ:
        </p>
        <ul className="list-disc flex flex-col gap-4 mt-5">
          <li className="clamp4 leading-relaxed">
            при строительстве нового объекта работы проводятся с использованием
            технологий и материалов, указанных в проектной документации;
          </li>
          <li className="clamp4 leading-relaxed">
            при строительстве нового объекта работы проводятся с использованием
            технологий и материалов, указанных в проектной документации;
          </li>
          <li className="clamp4 leading-relaxed">
            до устройства гидроизоляционного слоя выполняется тщательная
            подготовка основания: очистка, выравнивание, нанесение грунта;
          </li>
          <li className="clamp4 leading-relaxed">
            правильный монтаж гидроизоляции обеспечивает ее надежность,
            долговечность.{" "}
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Waterproofing;
