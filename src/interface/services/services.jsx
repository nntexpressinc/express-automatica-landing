import React, { useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { home1, home2, home3, home4, home5, home6 } from "../../images/home-img";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { NavLink } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const { t } = useLanguage();

  // Services data with translations
  const servicesData = [
    {
      title: t('servicessubmenu.constructionHouse'),
      link: "/construction-house",
      img: home1,
    },
    {
      title: t('servicessubmenu.reconstruction'),
      link: "/reconst-build",
      img: home2,
    },
    {
      title: t('servicessubmenu.lowRise'),
      link: "/low-rise",
      img: home3,
    },
    {
      title: t('servicessubmenu.prefabricated'),
      link: "/prefabricated",
      img: home4,
    },
    {
      title: t('servicessubmenu.civilWorks'),
      link: "/civil-works",
      img: home5,
    },
    {
      title: t('servicessubmenu.officeRenovation'),
      link: "/office-renovation",
      img: home6,
    }
  ];

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
          {t('services.title')}
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
          {t('services.description')}
        </p>
      </section>
      <section className="section2 w-11/12 mx-auto max-w-[1440px] pt-4">
        <h1 className="text-primary font-bold clamp3">{t('services.quality.title')}</h1>
        <ul className="flex flex-col gap-4">
          <li>
            <strong>{t('services.quality.documents.title')}</strong><br /> {t('services.quality.documents.desc')}
          </li>
          <li>
            <strong>{t('services.quality.obligations.title')}</strong><br />
            {t('services.quality.obligations.desc')}
          </li>
          <li>
            <strong>{t('services.quality.warranty.title')}</strong><br />
            {t('services.quality.warranty.desc')}
          </li>
        </ul>
      </section>
      <section className="section3 w-11/12 mx-auto max-w-[1440px] pt-4">
        <h1 className="text-primary font-bold clamp3">
          {t('services.types.title')}
        </h1>
        <ul className="flex flex-col gap-4 list-disc ml-4">
          <li>
            <strong>{t('services.types.design.title')}</strong>
            <br /> {t('services.types.design.desc')}
          </li>
          <li>
            <strong>{t('services.types.construction.title')}</strong>
            <br /> {t('services.types.construction.desc')}
          </li>
          <li>
            <strong>{t('services.types.reconstruction.title')}</strong>
            <br /> {t('services.types.reconstruction.desc')}
          </li>
          <li>
            <strong>{t('services.types.repair.title')}</strong>
            <br /> {t('services.types.repair.desc')}
          </li>
          <li>
            <strong>{t('services.types.engineering.title')}</strong>
            <br /> {t('services.types.engineering.desc')}
          </li>
          <li>
            <strong>{t('services.types.improvement.title')}</strong>
            <br /> {t('services.types.improvement.desc')}
          </li>
        </ul>
        <p className="clamp4 text-thin pt-4">
          {t('services.conclusion')}
        </p>
      </section>
    </main>
  );
};

export default Services;
