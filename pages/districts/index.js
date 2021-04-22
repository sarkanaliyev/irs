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

export default function Districts({ districts }) {
  console.log(districts)
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState();
  console.log(districts.map((value) => value.name));
  const array = districts.map((value) => value.name);
  console.log(array.sort());
  const sortedarray = array.sort();

  function openNav() {
    document.getElementById("myNav").style.height = "100%";
    console.log("opennav");
  }

  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }
  console.log(districts);
  return (
    <div className={styles.districts_container}>
      <div className={monuments_styles.districts_heykel}>
        <a href="/">
          <img src="/logo.svg" />
        </a>

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
        <p className={styles.districts_rayonlar}>Ana səhifə / Rayonlar</p>
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
