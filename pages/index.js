import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

import { fromImageToUrl, API_URL } from "../utils/urls";
import monuments_styles from "../pages/monument/Monument.module.css";
import districts_styles from "../pages/districts/Districts.module.css";

// import { Timeline } from "gsap/gsap-core";
// import ReactAudioPlayer from "react-audio-player";

import Menu from "../components/Menu";
import Map from "../components/Map";
import { BsArrowLeft } from "react-icons/bs";

import React, { useState, useEffect } from "react";

export default function Home({ districts }) {
  // const tl1 = new Timeline({ defaults: { ease: "power1.out" } });
  // useEffect(() => {
  //   setTimeout(() => {
  //     tl1.to(".slider", { y: "-100%", duration: 1.5 });
  //   }, 20000);
  // });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let paths = document.querySelectorAll("svg > path");
    console.log(paths);

    paths.forEach((element) => {
      element.addEventListener("click", () => {
        setIsOpen(true);
      });
    });
  }, []);

  function openNav() {
    document.getElementById("myNav").style.height = "100%";
    console.log("opennav");
  }

  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }
  return (
    <div className={styles.container}>
      <div
        className={`${styles.right_slider} ${
          isOpen && styles.right_slider_active
        }`}
      ></div>
      <div className={monuments_styles.top}>
        <a href="/">
          <img src="/logo.svg" className={districts_styles.districts_logo} />
        </a>

        {/* <p className={districts_styles.districts_az}>AZ</p> */}
        <a
          href="#"
          className={districts_styles.districts_hamburger}
          onClick={openNav}
        >
          <div className={districts_styles.districts_one}></div>
          <div className={districts_styles.districts_two}></div>
          <div className={districts_styles.districts_three}></div>
        </a>
      </div>

      {/* <img className={styles.xerite} src="/xerite-transparant.png" /> */}
      <Map className={isOpen && styles.map_minimize} />

      <Menu />
      {/* <div className={styles.slider}>
        <div className={styles.previewcontainer}>
          <ReactAudioPlayer src={susanitq} autoPlay={true} />

          <div className={styles.speechcontainer}>
            <p className={styles.speech}>Əziz Şuşa, sən azadsan!</p>
            <p className={styles.speech1}> Əziz Şuşa, biz qayıtmışıq! </p>
            <p className={styles.speech2}>Əziz Şuşa, biz səni dirçəldəcəyik!</p>
          </div>
          <p className={styles.president}>Ilham Əliyev</p>
          <p className={styles.presidentx}>Azerbaycan Respublikasinin Prezidenti</p>
        </div>
      </div> */}
    </div>
  );
}

export async function getStaticProps() {
  const district_res = await fetch(`${API_URL}/districts/`);
  const districts = await district_res.json();

  return {
    props: {
      districts,
    },
  };
}
