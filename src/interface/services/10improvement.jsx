import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { service10, service10_1 } from "../../images/services";

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

const Improvement = () => {
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
              Благоустройство территории
            </h1>
            <p className="w-full clamp4 leading-relaxed mb-6">
              Работы по благоустройству проводят, чтобы обеспечить безопасное,
              удобное использование территории, сформировать ее облик. При этом
              учитывают характеристики, назначение участка, особенности
              расположенных на нем или рядом с ним объектов. При благоустройстве
              участка решают комплекс задач, включая:
            </p>
            <ul className="flex flex-col gap-4 mt-3 list-disc pl-5">
              <li className="clamp4 leading-relaxed">
                устройство подъездных путей, парковочных площадок;
              </li>
              <li className="clamp4 leading-relaxed">
                формирование основных функциональных зон: въездной,
                рекреационной, огородной, хозяйственной, детской или игровой и
                пр.;
              </li>
            </ul>
          </div>
          <div className="w-full h-full">
            <img
              className="rounded-md w-full h-full object-cover"
              src={service10}
              alt="Construction House"
            />
          </div>
        </div>
        <ul className="flex flex-col gap-4 mt-3 list-disc pl-5">
          {" "}
          <li className="clamp4 leading-relaxed">
            озеленение, обустройство газонов, посадка живых изгородей,
            обустройство клумб, цветников, выполнение бордюрных посадок;
          </li>
          <li className="clamp4 leading-relaxed">
            инженерная подготовка территории: устройство дренажа, поверхностного
            водоотвода, уличного освещения, автоматического полива.
          </li>
        </ul>
        <p className="mt-3">
          Чтобы эти и другие задачи были решены эффективно, до начала работ по
          благоустройству выполняют ландшафтное проектирование. Проект
          определяет планировку участка, его рельеф, требования к озеленению,
          функциональности, оформлению. Строительная компания «EXPRESS
          AUTOMATICA» выполняет ландшафтное проектирование и благоустройство для
          частных, коммерческих, общественных объектов. Возможна работа с любыми
          территориями, создание нового или обновление уже
          существующего ландшафтного дизайна.
        </p>
      </section>

      <section className="section2 relative w-11/12 mx-auto max-w-[1440px] grid grid-cols-1 md:grid-cols-2 gap-6">
        <img
          className="w-full h-full object-cover rounded-md"
          src={service10_1}
          alt="Construction"
        />
        <div>
          <h1 className="text-white clamp3 font-bold leading-tight mb-4">
            Мы выполняем:
          </h1>
          <ul className="flex flex-col gap-4 mt-3 list-disc pl-5">
            <li className="clamp4 leading-relaxed">
              земляные работы для устройства инженерных систем, профилирования,
              выравнивания участка;
            </li>
            <li className="clamp4 leading-relaxed">
              общестроительные работы при возведении подпорных стенок,
              парапетов, ограждений, малых архитектурных форм, других элементов;
            </li>
            <li className="clamp4 leading-relaxed">
              устройство дренажа, ливневой канализации;
            </li>
            <li className="clamp4 leading-relaxed">планировку территорий;</li>
            <li className="clamp4 leading-relaxed">
              монтаж и ввод в эксплуатацию инженерных систем (освещение,
              ливневая канализация, автополив, дренаж);
            </li>
            <li className="clamp4 leading-relaxed">
              устройство подъездных путей, пешеходных дорожек, площадок,
              парковок (возможно мощение с использованием натурального,
              искусственного камня, тротуарной плитки, клинкера, брусчатки);
            </li>
            <li className="clamp4 leading-relaxed">
              обустройство газонов, цветников, клумб, живых изгородей, других
              элементов озеленения;
            </li>
            <li className="clamp4 leading-relaxed">
              посадку кустарников, однолетних, многолетних декоративных
              растений, саженцев, взрослых деревьев;
            </li>
            <li className="clamp4 leading-relaxed">
              создание искусственных водоемов (пруды, ручьи, фонтаны, бассейны);
            </li>
            <li className="clamp4 leading-relaxed">
              строительство или монтаж малых архитектурных форм (беседки, мосты,
              уличная мебель и пр.);
            </li>
            <li className="clamp4 leading-relaxed">
              установку оборудования для игровых или спортивных площадок,
              укладку покрытий для них.
            </li>
          </ul>
        </div>
      </section>
      <section className="section3 relative w-11/12 mx-auto max-w-[1440px] flex flex-col">
        <h1 className="text-white clamp3 font-bold leading-tight mb-4">
          Преимущества
        </h1>
        <p className="clamp4 mt-6">
          Любые работы по благоустройству территории, от проведения изысканий и
          проектирования до монтажа и ввода в эксплуатацию инженерных систем.
          Компания «EXPRESS AUTOMATICA» работает с частными, коммерческими,
          общественными объектами на городских территориях и за городом.
          Благоустройство выполняется с учетом действующих норм и ограничений.
          Возможно сотрудничество на условиях генерального подряда или
          субподряда, организация снабжения объекта (поставка стройматериалов,
          посадочного материала), использование собственной спецтехники
          компании.
        </p>
        <ul className="no-list-disc flex flex-col gap-4 mt-6">
          <li className="clamp4 leading-relaxed">Ландшафтный дизайн</li>
          <li className="clamp4 leading-relaxed">Озеленение</li>
          <li className="clamp4 leading-relaxed">Детские площадки</li>
          <li className="clamp4 leading-relaxed">
            Покрытия из резиновой крошки
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Improvement;
