import Head from "next/head";
import Link from "next/link";

import { fromImageToUrl, API_URL } from "../../utils/urls";
import RayonlarGrid from "../../components/RayonlarGrid";
import styles from "./Districts.module.css";
import Menu from "../../components/Menu.js";
import monuments_styles from "../monuments/Monuments.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import home_styles from "../../styles/Home.module.css";
import meram_styles from "../../pages/meramimiz/Meram.module.css";

export default function Districts({ districts }) {
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState();
  const array = districts.map((value) => value.name);
  const sortedarray = array.sort();

  function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }

  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }
  return (
    <div className={styles.districts_container}>
      <div className={monuments_styles.districts_heykel}>
        <div className={monuments_styles.nazirlik}>
          <a href="/">
            <img src="/logo.svg" />
          </a>
        </div>

        <div className={monuments_styles.quote_div}>
          <a className={monuments_styles.quote}>
            "Tarİxİ olduğu kİmİ qəbul etmək, dərk etmək və olduğu kİmİ
            qİymətləndİrmək lazımdır"
          </a>
          <a className={monuments_styles.heyder_eliyev}>Heydər Əliyev</a>
        </div>

        {/* <p className={styles.districts_az}>AZ</p> */}
        {/* <p>AZ</p> */}
        <div className={monuments_styles.hamburger_div}>
          <input
            className={home_styles.search_input}
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
          />
          <a href="#" className={monuments_styles.hamburger} onClick={openNav}>
            <div className={monuments_styles.h_div}></div>
            <div className={monuments_styles.h_div}></div>
            <div className={monuments_styles.h_div}></div>
          </a>
        </div>
      </div>

      <div className={styles.districts_responsive}>
        <p className={styles.districts_rayonlar}>
          <a href="/" className={meram_styles.meram_link}>
            Ana səhifə
          </a>
          / Rayonlar
        </p>
        <p className={styles.districts_sub_rayonlar}>Rayonlar</p>
        <div className={styles.rayonlar_grid}>
          <RayonlarGrid districts={districts} />
        </div>
      </div>
      <Menu />
    </div>
  );
}

export async function getStaticProps() {
  const district_res = await fetch(`${API_URL}/districts`);
  const districts = await district_res.json();

  return {
    props: {
      districts,
    },
  };
}
