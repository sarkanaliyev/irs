import Head from "next/head";
import Link from "next/link";

import { fromImageToUrl, API_URL } from "../../utils/urls";
import RayonlarGrid from "../../components/RayonlarGrid";
import styles from "./Districts.module.css";
import Menu from "../../components/Menu.js";

export default function Districts({ districts }) {
  console.log(districts.map((value) => value.name));
  const array = districts.map((value) => value.name);
  console.log(array.sort());
  const sortedarray=array.sort();

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
      <div className={styles.districts_heykel}>
        <a href="/">
          <img src="/logo.svg" className={styles.districts_logo} />
        </a>

        {/* <p className={styles.districts_az}>AZ</p> */}
        {/* <p>AZ</p> */}
        <a href="#" className={styles.districts_hamburger} onClick={openNav}>
          <div className={styles.districts_one}></div>
          <div className={styles.districts_two}></div>
          <div className={styles.districts_three}></div>
        </a>
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
