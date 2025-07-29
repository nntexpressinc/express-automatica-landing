import React, { useEffect } from "react";
import { home4 } from "../../images/home-img";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./index.scss";
import { about1, about2 } from "../../images/about-img";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    gsap.fromTo(
      ".section1 h1",
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: ".section1",
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      ".section1 p",
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
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
        stagger: 0.1,
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
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".section3",
          start: "top 80%",
        },
      }
    );
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full flex flex-col gap-[100px] aboutback relative text-thin pb-[50px]">
      <section className="section1 relative w-11/12 mx-auto max-w-[1440px] flex justify-center items-start flex-col min-h-[calc(100vh-88px)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="flex flex-col items-start justify-center h-full">
            <h1 className="text-thin clamp2">О Компании</h1>
            <p className="w-full">
              Строительная компания «EXPRESS AUTOMATICA» работает с 2002 года.
              Деятельность сертифицирована, «EXPRESS AUTOMATICA» — участник
              профильной СРО, выступает как генеральный подрядчик и субподрядчик
              при выполнении капитального строительства, реконструкции, ремонта,
              работает с мало-, многоэтажными зданиями, коммерческими, жилыми,
              общественными, промышленными объектами.
            </p>
          </div>
          <div className="w-full">
            <img className="rounded-md" src={about2} alt="dssdfd" />
          </div>
        </div>
      </section>
      <section className="section2 relative w-11/12 mx-auto max-w-[1440px] flex flex-col">
        <h1 className="text-thin clamp3">Наши преимущества</h1>
        <ul className="flex flex-col gap-4 mt-3">
          <li className="clamp4">
            <strong>Гибкое сотрудничество. </strong>
            <br /> Возможно выполнение полного объема работ для объекта или их
            отдельных этапов: изысканий, проектирования, строительства, отделки
            или монтажа. По результатам проектирования и разработки технической
            документации возможен авторский надзор над проведением работ,
            участие в их приемке.
          </li>
          <li className="clamp4">
            <strong>Соблюдение норм, </strong>
            <br /> стандартов, законодательства. «EXPRESS AUTOMATICA»
            гарантирует соблюдение общих строительных норм, специальных
            стандартов, действующих для отдельных объектов (промышленных зданий,
            медучреждений, жилых домов).
          </li>
          <li className="clamp4">
            <strong>Техническая оснащенность. </strong>
            <br />
            При проектировании «EXPRESS AUTOMATICA» точно определяет требования
            к используемым строительным, отделочным материалам, возможен их
            подбор, организация снабжения для стройплощадки.
          </li>
          <li className="clamp4">
            <strong>Специалисты. </strong>
            <br /> В штате компании — инженеры-проектировщики, специалисты по
            электромонтажу, устройству инженерных систем, коммуникаций,
            выполнению кровельных, фундаментных, монтажных и других работ.
            Квалификация наших сотрудников гарантирует качественную реализацию
            проекта.
          </li>
          <li className="clamp4">
            <strong>Организация строительства. </strong>
            <br /> Выполняется с соблюдением норм безопасности, с гарантией
            соблюдения согласованных сроков. Возможна разработка проекта
            организации работ, контроль его выполнения. При реконструкции,
            капитальном ремонте, отделочных или монтажных работах на
            коммерческих, административных, общественных объектах возможно их
            проведение без прекращения деятельности предприятия.
          </li>
        </ul>
      </section>
      <section className="section3 relative w-11/12 mx-auto max-w-[1440px] flex flex-col md:flex-row gap-6 justify-between items-center">
        <div className="w-full h-full">
          <img
            src={about1}
            className="w-full h-full object-cover rounded-md"
            alt="Services"
          />
        </div>
        <div>
          <h1 className="font-bold clamp3">
            Компания «EXPRESS AUTOMATICA» выполняет:
          </h1>
          <ul className="flex flex-col gap-4">
            <li>
              - малоэтажное строительство с использованием разных технологий,
              включая технологию строительства быстровозводимых зданий. Мы
              строим склады, жилые дома, офисные, торговые центры,
              производственные здания;
            </li>
            <li>- возведение многоэтажных домов;</li>
            <li>
              - выборочную или полную реконструкцию, капитальный, косметический
              ремонт зданий, сооружений, отдельных помещений;
            </li>
            <li>
              - проектирование (разработка дизайн-проекта, проектирование,
              формирование технической документации, планов, чертежей, сметы,
              плана организации строительства или реконструкции.);
            </li>
            <li>
              - монтаж (электрооборудования, сантехнического оборудования,
              элементов инженерных систем, производственного, медицинского и
              другого оборудования);
            </li>
            <li>
              - отдельные строительные работы, включая земляные, фасадные,
              кровельные, отделочные, фундаментные, устройство перегородок,
              стен, перекрытий и т.п.;
            </li>
            <li>
              - благоустройство прилегающей территории: озеленение, устройство
              подъездных путей, парковочных площадок, пешеходных дорожек,
              создание игровых, детских, спортивных площадок, рекреационных зон.
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default About;
