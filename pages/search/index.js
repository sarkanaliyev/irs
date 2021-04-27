import { fromImageToUrl, API_URL } from "../../utils/urls";
import { BsArrowLeft } from "react-icons/bs";

import styles from "../districts/Districts.module.css";
import monuments_styles from "../monuments/Monuments.module.css";
import home_styles from "../../styles/Home.module.css";
import meram_styles from "../meramimiz/Meram.module.css";
import Link from "next/link";

import Menu from "../../components/Menu.js";
import { AiOutlineSearch } from "react-icons/ai";
import search_style from "./Search.module.css";
import { useState } from "react";
import Divider from "@material-ui/core/Divider";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Search = ({ monuments }) => {
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState(`${router.query.keyword}`);

  console.log(searchTerm);
  function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }

  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }
  let ph = "Axtar";
  if (searchTerm) {
    ph = searchTerm;
  }
  return (
    <div className={styles.districts_container}>
      <div className={monuments_styles.districts_heykel}>
        <a href="/">
          <img src="/logo.svg" />
        </a>
        {/* <p className={styles.districts_az}>AZ</p> */}
        <div className={monuments_styles.hamburger_div}>
          {/* <input
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
          /> */}
          <a href="#" className={monuments_styles.hamburger} onClick={openNav}>
            <div className={monuments_styles.h_div}></div>
            <div className={monuments_styles.h_div}></div>
            <div className={monuments_styles.h_div}></div>
          </a>
        </div>
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
          <a href="/" className={meram_styles.meram_link}>
            Ana səhifə
          </a>
          / Axtarış
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
              placeholder={ph}
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
              // console.log("a")
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
