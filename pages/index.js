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
import { useRouter } from "next/router";

export default function Home({ districts }) {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState();

  // const tl1 = new Timeline({ defaults: { ease: "power1.out" } });
  // useEffect(() => {
  //   setTimeout(() => {
  //     tl1.to(".slider", { y: "-100%", duration: 1.5 });
  //   }, 20000);
  // });

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let paths = document.querySelectorAll("svg > path");

    paths.forEach((element) => {
      element.addEventListener("click", () => {
        setIsOpen(true);
      });
    });
  }, []);

  function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }

  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }
  return (
    <div className={styles.container}>
      <div className={styles.home_top}>
        <a href="/">
          <img src="/logo.svg" />
        </a>

        {/* <p className={districts_styles.districts_az}>AZ</p> */}
        <div className={styles.hamburger_div}>
          {/* <input
            className={styles.search_input}
            type="text"
            placeholder="Axtar..."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                router.push({
                  pathname: "/search",
                  query: { keyword: searchTerm },
                });
              }
            }}
          /> */}

          <a href="#" className={styles.hamburger} onClick={openNav}>
            <div className={styles.h_div}></div>
            <div className={styles.h_div}></div>
            <div className={styles.h_div}></div>
          </a>
        </div>
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
