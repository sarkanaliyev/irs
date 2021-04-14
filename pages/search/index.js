import { fromImageToUrl, API_URL } from "../../utils/urls";
import { BsArrowLeft } from "react-icons/bs";

import styles from "../districts/Districts.module.css";
import monuments_styles from "../monuments/Monuments.module.css";
import meram_styles from "../meramimiz/Meram.module.css";
import Link from "next/link";

import Menu from "../../components/Menu.js";
import { AiOutlineSearch } from "react-icons/ai";
import search_style from "./Search.module.css";
import { useState } from "react";
import Divider from "@material-ui/core/Divider";
import { useRouter } from "next/router";

const Search = ({ monuments }) => {
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState("");
  function openNav() {
    document.getElementById("myNav").style.height = "100%";
    console.log("opennav");
  }

  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }
  console.log(monuments[0]);
  return (
    <div className={styles.districts_container}>
      <div className={styles.districts_heykel}>
        <a href="/">
          <img src="/logo.svg" className={styles.districts_logo} />
        </a>
        {/* <p className={styles.districts_az}>AZ</p> */}

        <a href="#" className={styles.districts_hamburger} onClick={openNav}>
          <div className={styles.districts_one}></div>
          <div className={styles.districts_two}></div>
          <div className={styles.districts_three}></div>
        </a>
      </div>

      <div className={styles.districts_responsive}>
        <div className={monuments_styles.monuments_arrow}>
          {/* <Link href="/districts"> */}
          {/* <a> */}
          <a onClick={() => router.back()} className={search_style.left_arrow}>
            <BsArrowLeft
              size={"2.6525198938992043vh"}
              className={monuments_styles.arrow}
            />
          </a>

          {/* </a> */}
          {/* </Link> */}
        </div>
        <p className={monuments_styles.monuments_rayonlar}>
          Ana səhifə / Axtarış
        </p>
        <p className={monuments_styles.monuments_sub_rayonlar}>Axtarış</p>
        <div
          className={search_style.search_wrap}
          // className={search_style.search_wrap_1}
        >
          <div className={search_style.search_box}>
            <div
              className={search_style.btn}
              // className={search_style.btn_common}
            >
              <AiOutlineSearch className={search_style.ai} />
              {/* <p className={search_style.ai}>Axtar</p> */}
            </div>
            <input
              type="text"
              className={search_style.input}
              placeholder="Axtar"
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
          </div>
        </div>
        {monuments
          .filter((val) => {
            if (searchTerm == "") {
              // return val;
            } else if (
              val.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((val, key) => {
            return (
              <Link href={`/monument/${val.slug}`}>
                <div className={search_style.result}>
                  <p className={search_style.name}>{val.name}</p>
                  <p className={search_style.content}>{val.content}</p>
                  <Divider />
                </div>
              </Link>
            );
          })}
      </div>
      <Menu />
    </div>
  );
};
export async function getStaticProps() {
  const monuments_res = await fetch(`${API_URL}/monuments/`);
  const monuments = await monuments_res.json();

  return {
    props: {
      monuments,
    },
  };
}
export default Search;
