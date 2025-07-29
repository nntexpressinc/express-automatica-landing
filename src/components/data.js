import {
  contact1,
  contact2,
  contact3,
  contact4,
} from "../images/contact-image";
import {
  disign,
  disign1,
  disign2,
  disign3,
  disign4,
  disign5,
  logo,
} from "../images/home-img";
import { home1, home2, home3 } from "../images/home-img";
import {
  service1,
  service2,
  service3,
  service4,
  service5,
  service6,
} from "../images/services";

export const navLinkData = [
  {
    title: "ГЛАВНАЯ",
    link: "/",
  },
  {
    title: "О КОМПАНИИ",
    link: "/about",
  },
  {
    title: "УСЛУГИ",
    link: "/services",
    submenu: [
      {
        title: "Строительство домов",
        link: "/construction-house",
        img: service1,
      },
      {
        title: "Реконструкция зданий",
        link: "/reconst-build",
        img: service2,
      },
      {
        title: "Малоэтажное строительство",
        link: "/low-rise",
        img: service3,
      },
      {
        title: "Быстровозводимые здания",
        link: "/prefabricated",
        img: service4,
      },
      {
        title: "Общестроительные работы",
        link: "/civil-works",
        img: service5,
      },
      {
        title: "Ремонт офисов",
        link: "/office-renovation",
        img: service6,
      },
      {
        title: "Отделочные работы",
        link: "/finish-work",
      },
      {
        title: "Фасадные работы",
        link: "/facade-work",
      },
      {
        title: "Гидроизоляционные работы",
        link: "/waterproofing",
      },
      {
        title: "Благоустройство",
        link: "/improvement",
      },
    ],
  },
  {
    title: "КОНТАКТЫ",
    link: "/contact",
  },
];

export const disignData = [
  {
    title: "Организация работы",
    desc: "Система менеджмента качества сертифицирована по ISO 9001:2015. Мы выполняем любые проектные, общестроительные, отделочные, монтажные работы слаженно, быстро, с хорошим результатом. Любые задачи: от подготовки объекта и организации снабжения до чистовой отделки.",
    img: disign,
  },
  {
    title: "Технологии",
    desc: "«EXPRESS AUTOMATICA» строит быстровозводимые здания, использует несъемную опалубку, работает с фундаментами и перекрытиями любых типов, с разными отделочными материалами. Мы расширяем спектр технологий, чтобы делать строительство качественным, экономичным и быстрым.",
    img: disign1,
  },
  {
    title: "Надежность",
    desc: "На услуги, материалы, оборудование действует гарантия. Мы работаем по договору, с соблюдением сроков и смет. Наша деятельность лицензирована, компания входит в строительную СРО. Профессиональная ответственность застрахована.",
    img: disign2,
  },
  {
    title: "Техническая база",
    desc: "Компания использует свою спецтехнику, инвентарь, оборудование. Это упрощает и ускоряет работы, уменьшает затраты на них. Парк техники регулярно обновляется: его достаточно для работы даже на крупных объектах.",
    img: disign3,
  },
  {
    title: "Наши цели",
    desc: "Наша задача — строить экономично и качественно, быстро и надежно. Мы можем выступать как генподрядчик, субподрядчик, обеспечивать авторский надзор, выполнять отделку.",
    img: disign4,
  },
];

export const home1Data = [
  {
    title: "Строительные услуги",
    img: home3,
  },
  {
    title: "Проектирование",
    img: home2,
  },
  {
    title: "Инженерные работы",
    img: home1,
  },
];

export const servicesData = [
  {
    title: "Строительство домов",
    link: "/construction-house",
    img: service1,
  },
  {
    title: "Реконструкция зданий",
    link: "/reconst-build",
    img: service2,
  },
  {
    title: "Малоэтажное строительство",
    link: "/low-rise",
    img: service3,
  },
  {
    title: "Быстровозводимые здания",
    link: "/prefabricated",
    img: service4,
  },
  {
    title: "Общестроительные работы",
    link: "/civil-works",
    img: service5,
  },
  {
    title: "Ремонт офисов",
    link: "/office-renovation",
    img: service6,
  },
  // {
  //   title: "Отделочные работы",
  //   img: "",
  // },
  // {
  //   title: "Фасадные работы",
  //   img: "",
  // },
  // {
  //   title: "Гидроизоляционные работы",
  //   img: "",
  // },
  // {
  //   title: "Благоустройство",
  //   img: "",
  // },
];

export const contactImage = [
  {
    img: contact1,
  },
  {
    img: contact2,
  },
  {
    img: contact3,
  },
  {
    img: contact4,
  },
];
