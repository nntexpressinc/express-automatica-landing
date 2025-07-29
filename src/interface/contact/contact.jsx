import React, { useEffect } from "react";
import { contactImage } from "../../components/data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useGSAP(() => {
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section1",
        start: "20% bottom",
        end: "bottom top",
      },
    });

    tl1.fromTo(
      [".section1 h1", ".section1 p"],
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, stagger: 0.4, ease: "power1.out" }
    );

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section2",
        start: "20% bottom",
        end: "bottom top",
      },
    });

    tl2.fromTo(
      ".section2 .card",
      {
        opacity: 0,
        y: -50,
        ease: "power4.out",
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        ease: "power1.out",
        delay: 0.2,
      }
    );
  });

  return (
    <main
      id="container"
      className="w-full flex flex-col justify-center items-center gap-[50px] relative pb-[50px] min-h-[calc(100vh-88px)]"
    >
      <section className="w-11/12 section1 max-w-[1440px] mx-auto pt-[20px]">
        <div className="flex flex-col gap-3">
          <h1 className="clamp1 text-thin font-bold text-center">
            Контактная информация
          </h1>
          <button
            onClick={() => window.open(`tel:+998 93 515 80 84`)}
            className="clamp1 text-primary font-bold text-center"
          >
            +998 (90) 940 33 36
          </button>
          <p className="clamp3 text-thin text-center">
            г. Карши, Г. Гулом МСГ, ул. Насаф, д. 6/4
          </p>
        </div>
      </section>
      <section className="w-11/12 section2 max-w-[1440px] mx-auto grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4">
        {contactImage.map((item, idx) => (
          <div key={idx} className="card w-full h-[400px] hover-image">
            <img
              className="w-full h-full object-cover rounded-md"
              src={item.img}
              alt=""
            />
          </div>
        ))}
      </section>
    </main>
  );
};

export default Contact;
