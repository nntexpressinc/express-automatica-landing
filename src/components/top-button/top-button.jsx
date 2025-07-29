import React, { useEffect, useState } from "react";
import "./index.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const TopButton = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const tl = gsap.timeline({ paused: true });

  useGSAP(() => {
    tl.fromTo(
      ".top-button",
      {
        opacity: 0,
        y: 20,
        scale: 0,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)",
      }
    );
  }, [tl]);

  useEffect(() => {
    if (showScrollButton) {
      tl.play();
    } else {
      tl.reverse();
    }
  }, [showScrollButton, tl]);

  return (
    <div
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed right-5 bottom-5 top-button"
    >
      <button className="button">
        <svg className="svgIcon" viewBox="0 0 384 512">
          <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
        </svg>
      </button>
    </div>
  );
};

export default TopButton;
