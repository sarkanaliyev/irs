// import monuments from "../../monuments.json";
import { fromImageToUrl, API_URL } from "../../utils/urls";
import { BsArrowLeft } from "react-icons/bs";

import styles from "../districts/Districts.module.css";
import monuments_styles from "../monuments/Monuments.module.css";
import home_styles from "../../styles/Home.module.css";
import meram_styles from "../../pages/meramimiz/Meram.module.css";

// const monument = monuments[0];
import { useState } from "react";
import AbidelerGrid from "../../components/AbidelerGrid";

import Link from "next/link";

import Menu from "../../components/Menu.js";
import MultimediaGrid from "../../components/MultimediaGrid";

import { useRouter } from "next/router";
const Multimedia = ({ multis, monuments }) => {
  const new_monument_arr = [
    {
      name: monuments.map((item) => item.name),
      slug: monuments.map((item) => item.slug),
    },
  ];
  const [suggestions, setSuggestions] = useState([]);
  const [text, setText] = useState("");

  const onTextChanged = (e) => {
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = new_monument_arr[0].name
        .sort()
        .filter((v) => regex.test(v));
    }
    setSuggestions(suggestions);
    setText(value);
  };

  const suggestionSelected = (value) => {
    setText(new_monument_arr[0].slug[new_monument_arr[0].name.indexOf(value)]);
    setSuggestions([]);
  };

  const renderSuggestions = () => {
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul>
        {suggestions.map((item) => (
          <Link
            href={`/monument/${
              new_monument_arr[0].slug[new_monument_arr[0].name.indexOf(item)]
            }`}
          >
            <li onClick={() => suggestionSelected(item)}>{item}</li>
          </Link>
        ))}
      </ul>
    );
  };
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState();
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
            qİymətləndİrmək lazımdır "
          </a>
          <a className={monuments_styles.heyder_eliyev}>Heydər Əliyev</a>
        </div>
        {/* <p className={styles.districts_az}>AZ</p> */}
        <div className={monuments_styles.hamburger_div}>
          <div className={home_styles.search_div}>
            <input
              className={home_styles.search_input}
              type="text"
              placeholder="Abidə axtar..."
              // value={text}
              onChange={onTextChanged}
            />
            {renderSuggestions()}
          </div>
          <a href="#" className={monuments_styles.hamburger} onClick={openNav}>
            <div className={monuments_styles.h_div}></div>
            <div className={monuments_styles.h_div}></div>
            <div className={monuments_styles.h_div}></div>
          </a>
        </div>
      </div>

      <div className={styles.districts_responsive}>
        <div className={monuments_styles.monuments_arrow}>
          <Link href="/districts">
            <a onClick={() => router.back()}>
              <BsArrowLeft
                size={"2.6525198938992043vh"}
                className={monuments_styles.arrow}
              />
            </a>
          </Link>
        </div>
        <p className={monuments_styles.monuments_rayonlar}>
          <a href="/" className={meram_styles.meram_link}>
            Ana səhifə&nbsp;
          </a>
          / Multimedia
        </p>
        <p className={monuments_styles.monuments_sub_rayonlar}>Multimedia</p>

        <div className={styles.rayonlar_grid}>
          {/* <AbidelerGrid monuments={monument.monuments} category={category} /> */}
          <MultimediaGrid multis={multis} />
        </div>
      </div>
      <Menu />
    </div>
  );
};

export async function getStaticProps() {
  const multi_res = await fetch(`${API_URL}/multimedias`);
  const multis = await multi_res.json();

  const monuments_res = await fetch(`${API_URL}/monuments/`);
  const monuments = await monuments_res.json();
  return {
    props: {
      multis,
      monuments
    },
  };
}

export default Multimedia;
