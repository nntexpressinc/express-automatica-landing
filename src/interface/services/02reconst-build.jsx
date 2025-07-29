import React, { useEffect } from "react";
import { home4 } from "../../images/home-img";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { service2, service2_1, service2_2 } from "../../images/services";

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

const ReconstBuild = () => {
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
      { selector: "ul li", from: { x: 50 }, to: { x: 20 }, stagger: 0.2 },
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
      { selector: "ul li", from: { x: -50 }, to: { x: 20 }, stagger: 0.2 },
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
      { selector: "ul li", from: { x: -50 }, to: { x: 20 }, stagger: 0.2 },
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
            <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-4">
              Реконструкция и ремонт зданий
            </h1>
            <p className="w-full text-lg md:text-xl leading-relaxed mb-6">
              Строительная компания "EXPRESS AUTOMATICA" проводит
              реконструкцию зданий и сооружений. Это позволяет улучшать их
              характеристики, устранять износ, менять назначение объекта.
            </p>
          </div>
          <div className="w-full">
            <img className="rounded-md w-full h-full object-cover" src={service2} alt="Construction House" />
          </div>
        </div>
      </section>
      <section className="section2 relative w-11/12 mx-auto max-w-[1440px] grid grid-cols-1 md:grid-cols-2 gap-6">
        <img className="rounded-md w-full h-full object-cover" src={service2_1} alt="Construction" />
        <div>
          <h1 className="text-white text-3xl md:text-4xl font-bold leading-tight mb-4">
            Преимущества
          </h1>
          <p className="text-lg md:text-xl leading-relaxed mb-6">
            Реконструкция позволяет решать следующие задачи:
          </p>
          <ul className="flex flex-col gap-4 mt-3 list-disc pl-5">
            <li className="text-lg md:text-xl leading-relaxed">
              Ремонт или реставрация, устранение износа, других недостатков,
              восстановление фундаментов, перекрытий, несущих стен или других
              конструкций, увеличение их прочности.
            </li>
            <li className="text-lg md:text-xl leading-relaxed">
              Модернизация: монтаж новых инженерных систем, оборудования,
              использование улучшенных изоляционных материалов, обновление
              отдельных конструкций (оконных блоков, лестниц и других).
            </li>
            <li className="text-lg md:text-xl leading-relaxed">
              Устранение отдельных недостатков, например, устройство более
              удобной входной группы, увеличение слишком маленьких оконных
              проемов, расширение узких коридоров, галерей внутри здания.
            </li>
            <li className="text-lg md:text-xl leading-relaxed">
              Изменение планировки: смена назначения или расположения помещений,
              перенос стен, перегородок, выходов инженерных систем.
            </li>
            <li className="text-lg md:text-xl leading-relaxed">
              Увеличение площади: строительство дополнительных этажей или
              пристроек.
            </li>
            <li className="text-lg md:text-xl leading-relaxed">
              Смена назначения, в том числе переоборудование жилых зданий в
              нежилые или наоборот.
            </li>
          </ul>
        </div>
        <p className="col-span-2 text-lg md:text-xl mt-6">
          Реконструкция повышает инвестиционную привлекательность. Она делает
          здание более комфортным, функциональным, приводит его в соответствие
          действующим нормам, увеличивает ресурс его эксплуатации. При этом она
          позволяет сохранять неизношенные конструкции и другие элементы, что
          оптимизирует затраты. Часто реконструировать здание выгоднее по
          сравнению со сносом и последующим строительством.
        </p>
      </section>
      <section className="section3 relative w-11/12 mx-auto max-w-[1440px] flex flex-col">
        <h1 className="text-white text-3xl md:text-4xl font-bold leading-tight mb-4">
          Как проводится реконструкция?
        </h1>
        <p className="text-lg md:text-xl leading-relaxed mb-6">
          Компания "EXPRESS AUTOMATICA" реконструирует здания, сооружения,
          выполняя работы в следующем порядке:
        </p>
        <ul className="flex flex-col gap-4 mt-3 list-disc pl-5">
          <li className="text-lg md:text-xl leading-relaxed">
            Обследование. Проводятся изыскания, оценивается состояние участка и
            постройки, коммуникаций, конструкций, оборудования.
          </li>
          <li className="text-lg md:text-xl leading-relaxed">
            Проектирование. Разработка проектной документации, которая
            определяет цели, задачи реконструкции, используемые технологии,
            материалы, порядок организации работ.
          </li>
          <li className="text-lg md:text-xl leading-relaxed">
            Подготовка объекта. Демонтаж изношенных или мешающих строительных
            конструкций, оборудования, отделочных материалов.
          </li>
          <li className="text-lg md:text-xl leading-relaxed">
            Основной этап. Ремонт, восстановление изношенных конструкций,
            проведение перепланировки, возведение пристроек, выполнение
            отделочных, монтажных работ.
          </li>
          <li className="text-lg md:text-xl leading-relaxed">
            Сдача объекта. Контроль качества выполненных работ, организация
            приемки.
          </li>
        </ul>
        <p className="text-lg md:text-xl mt-6">
          Дополнительно может проводиться благоустройство прилегающей
          территории, обновление инженерных систем, монтаж специализированного
          оборудования (например, производственных линий для промышленных
          объектов).
        </p>
      </section>
      <section className="section4 relative w-11/12 mx-auto max-w-[1440px] grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="w-full h-full">
          <img className="rounded-md w-full h-full object-cover" src={service2_2} alt="Construction Image" />
        </div>
        <div>
          <h1 className="text-white text-3xl md:text-4xl font-bold leading-tight mb-4">
            Почему EXPRESS AUTOMATICA?
          </h1>
          <p className="text-lg md:text-xl leading-relaxed mb-6">
            Реконструкция позволяет решать следующие задачи:
          </p>
          <ul className="flex flex-col gap-4 mt-3 list-disc pl-5">
            <li className="text-lg md:text-xl leading-relaxed">
              Проводим полный цикл работ, от проектирования до чистовой отделки
              и сдачи готового объекта. Также можем выполнять отдельные
              связанные с реконструкцией задачи.
            </li>
            <li className="text-lg md:text-xl leading-relaxed">
              Работаем быстро, качественно. Большой штат специалистов,
              собственный парк техники, все необходимое оборудование, а также
              опыт реконструкции разных объектов.
            </li>
            <li className="text-lg md:text-xl leading-relaxed">
              Организация работы. Обеспечиваем снабжение. Можем реконструировать
              постройку без прекращения ее функционирования. Строго соблюдаем
              сроки, графики.
            </li>
            <li className="text-lg md:text-xl leading-relaxed">
              Реконструируем любые сооружения: торговые, офисные центры,
              промышленные сооружения, общественные здания, медучреждения, жилые
              дома и другие.
            </li>
            <li className="text-lg md:text-xl leading-relaxed">
              Гарантируем качество услуг, строгое соблюдение технологии, а также
              строительных норм и других стандартов.
            </li>
          </ul>
        </div>
        <ul className="col-span-2 flex flex-col gap-4 mt-3 list-disc pl-5">
          <li className="text-lg md:text-xl leading-relaxed">
            Реконструкция офисных зданий
          </li>
          <li className="text-lg md:text-xl leading-relaxed">
            Реконструкция общественных зданий
          </li>
          <li className="text-lg md:text-xl leading-relaxed">
            Реконструкция промышленных зданий
          </li>
          <li className="text-lg md:text-xl leading-relaxed">
            Реконструкция жилых зданий
          </li>
          <li className="text-lg md:text-xl leading-relaxed">
            Реконструкция социальных объектов
          </li>
          <li className="text-lg md:text-xl leading-relaxed">
            Ремонт предприятий общественного питания
          </li>
          <li className="text-lg md:text-xl leading-relaxed">
            Ремонт торговых центров
          </li>
        </ul>
      </section>
    </main>
  );
};

export default ReconstBuild;
