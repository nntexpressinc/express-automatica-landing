import React, { useEffect } from "react";
import { servicesData } from "../../components/data";
import { home1 } from "../../images/home-img";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { NavLink } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section1",
        start: "top 80%",
        end: "bottom top",
      },
    });

    tl.fromTo(
      ".section1 h1",
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, stagger: 0.1, ease: "power1.out" }
    ).fromTo(
      ".section1 .services-container .services",
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, stagger: 0.1, ease: "power1.out" },
      "-=0.3"
    );

    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section2",
        start: "top 80%",
        end: "bottom top",
      },
    });

    tl1
      .fromTo(
        ".section2 h1",
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, stagger: 0.1, ease: "power1.out" }
      )
      .fromTo(
        ".section2 ul li",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, stagger: 0.1, ease: "power1.out" },
        "-=0.3"
      );

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section3",
        start: "top 80%",
        end: "bottom top",
      },
    });

    tl2
      .fromTo(
        ".section3 h1",
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, stagger: 0.1, ease: "power1.out" }
      )
      .fromTo(
        ".section3 ul li",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, stagger: 0.1, ease: "power1.out" },
        "-=0.3"
      );
  });

  return (
    <main id="container" className="w-full flex flex-col gap-[50px] mb-4">
      <section className="section1 w-11/12 mx-auto max-w-[1440px] pt-4">
        <h1 className="text-primary font-bold clamp3 text-center">
          Услуги строительной компании «EXPRESS AUTOMATICA»
        </h1>
        <div className="services-container grid grid-cols-3 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4 mt-3">
          {servicesData.map((item, idx) => (
            <NavLink
              to={item.link}
              key={idx}
              className="services cursor-pointer w-full flex justify-center items-center flex-col gap-3 bg-secondaryBg rounded-[12px] p-4"
            >
              <div className="hover-image w-full h-[200px] overflow-hidden">
                <img
                  className="w-full h-full object-cover rounded-md"
                  src={item?.img}
                  alt=""
                />
              </div>
              <h2 className="text-primary font-bold">{item.title}</h2>
              <p>{item.description}</p>
            </NavLink>
          ))}
        </div>
        <p className="clamp4 text-thin pt-4">
          Строительная компания «EXPRESS AUTOMATICA» проектирует и строит жилые
          дома, быстровозводимые здания, офисные, торговые, медицинские центры,
          промышленные объекты, а также выполняет для них реконструкцию и
          ремонт.
        </p>
      </section>
      <section className="section2 w-11/12 mx-auto max-w-[1440px] pt-4">
        <h1 className="text-primary font-bold clamp3">Качество услуг</h1>
        <ul className="flex flex-col gap-4">
          <li>
            <strong>Документы и сертификаты.</strong>.<br /> Работа компании
            лицензирована. «EXPRESS AUTOMATICA» является членом строительной
            СРО. Сотрудники имеют профильное образование, необходимые допуски.
            Это гарантирует надежность, качество, соблюдение технологий
            строительства.
          </li>
          <li>
            <strong>Обязательства по договору. </strong>.<br />
            Мы работаем официально, закрепляем условия сотрудничества в
            договоре, гарантируем их исполнение. Это касается и качества, и
            соблюдения сроков, и цен на услуги.
          </li>
          <li>
            <strong>Гарантия.</strong>.<br />
            Закреплена в договоре, действует на выполненные работы,
            поставленные материалы, оборудование.
          </li>
        </ul>
      </section>
      <section className="section3 w-11/12 mx-auto max-w-[1440px] pt-4">
        <h1 className="text-primary font-bold clamp3">
          Виды услуг. Мы предлагаем:
        </h1>
        <ul className="flex flex-col gap-4 list-disc ml-4">
          <li>
            <strong>Проектирование.</strong>
            <br /> Подготовка дизайн-проектов, эскизной, рабочей документации
            для строительства, капитального ремонта, реконструкции, чистовой
            отделки;
          </li>
          <li>
            <strong>Строительство.</strong>
            <br /> «EXPRESS AUTOMATICA» строит загородные дома,
            быстровозводимые, малоэтажные здания, административные,
            общественные, коммерческие объекты. Мы выполняем любые
            общестроительные работы: заливку фундаментов, возведение стен (по
            каркасной, монолитной технологии, из бруса, кирпича, строительных
            блоков), устройство перекрытий, кровли, отделку фасада;
          </li>
          <li>
            <strong>Реконструкцию.</strong>
            <br /> Проводится для жилых многоквартирных домов, офисных,
            общественных, промышленных зданий, медучреждений;
          </li>
          <li>
            <strong>Ремонт, отделку.</strong>
            <br /> Выполняется для офисов, торговых, бизнес-центров, медицинских
            учреждений, жилых комплексов, коттеджных поселков;
          </li>
          <li>
            <strong>Устройство инженерных систем:</strong>
            <br /> электроснабжение, водоснабжение, вентиляция, канализация,
            дренаж и другие;
          </li>
          <li>
            <strong>Благоустройство:</strong>
            <br /> мы строим парковки, подъездные пути, создаем зоны отдыха,
            выполняем озеленение, устанавливаем декоративное освещение.
          </li>
        </ul>
        <p className="clamp4 text-thin pt-4">
          Компания «EXPRESS AUTOMATICA» может работать как генеральный
          подрядчик, обеспечивая все работы на объекте от проектирования до
          чистовой отделки. Возможно сотрудничество на условиях субподряда,
          обеспечение авторского надзора, выполнение отдельных работ.
        </p>
      </section>
    </main>
  );
};

export default Services;
