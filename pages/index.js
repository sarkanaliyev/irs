import styles from "../styles/Home.module.css";
import { fromImageToUrl, API_URL } from "../utils/urls";
import Menu from "../components/Menu";
import Map from "../components/Map";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Home({ districts }) {
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
        <a className={styles.slogan}>
          Azərbaycan mİllİ İrsİnə qarşı soyqırım, bəşərİ İrsə qarşı soyqırımdır!
        </a>
        <div className={styles.hamburger_div}>
          <a href="#" className={styles.hamburger} onClick={openNav}>
            <div className={styles.h_div}></div>
            <div className={styles.h_div}></div>
            <div className={styles.h_div}></div>
          </a>
        </div>
      </div>

      <Map className={isOpen && styles.map_minimize} />

      <Menu />
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
