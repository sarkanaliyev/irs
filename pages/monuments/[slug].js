import { AiOutlineSearch } from "react-icons/ai";

// import monuments from "../../monuments.json";
import { fromImageToUrl, API_URL } from "../../utils/urls";
import { BsArrowLeft } from "react-icons/bs";

import styles from "../districts/Districts.module.css";
import monuments_styles from "./Monuments.module.css";
// const monument = monuments[0];
import { useState } from "react";
import AbidelerGrid from "../../components/AbidelerGrid";

import Link from "next/link";

import Menu from "../../components/Menu.js";

import { useRouter } from "next/router";
import home_styles from "../../styles/Home.module.css";

const Monuments = ({ monument }) => {
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState();
  monument.monuments.includes((monument) => {
    console.log(monument.category);
  });
  console.log(monument.monuments.some((item) => item.category == "2"));
  console.log(monument.monuments);
  // console.log(monument.monuments[0].category)
  const [radio, setRadio] = useState("apple");
  const [content, setContent] = useState("apple content");
  const [category, setCategory] = useState();

  const [firstChecked, setFirstChecked] = useState(false);
  const [secondChecked, setSecondChecked] = useState(false);
  const [thirdChecked, setThirdChecked] = useState(false);
  const [fourthChecked, setFourthChecked] = useState(false);

  const handeFirst = () => {
    setFirstChecked(true);
    setSecondChecked(false);
    setThirdChecked(false);
    setFourthChecked(false);
  };
  const handeSecond = () => {
    setFirstChecked(false);
    setSecondChecked(true);
    setThirdChecked(false);
    setFourthChecked(false);
  };
  const handeThird = () => {
    setFirstChecked(false);
    setSecondChecked(false);
    setThirdChecked(true);
    setFourthChecked(false);
  };
  const handeFourth = () => {
    setFirstChecked(false);
    setSecondChecked(false);
    setThirdChecked(false);
    setFourthChecked(true);
  };

  console.log(monument.monuments);

  function openNav() {
    document.getElementById("myNav").style.height = "100%";
    console.log("opennav");
  }

  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }
  return (
    // <div>
    //   <a>
    //     {monument.monuments.map((mon) => (
    //       <>
    //         <h3>{mon.name}</h3>
    //         <img src={fromImageToUrl(mon.during_occupation)} />
    //       </>
    //     ))}
    //   </a>
    // </div>
    <div className={styles.districts_container}>
      <div className={monuments_styles.districts_heykel}>
        <a href="/">
          <img src="/logo.svg" />
        </a>
        {/* <p className={styles.districts_az}>AZ</p> */}
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
        <div className={monuments_styles.monuments_arrow}>
          <Link href="/districts">
            <a>
              <BsArrowLeft
                size={"2.6525198938992043vh"}
                className={monuments_styles.arrow}
              />
            </a>
          </Link>
        </div>
        <p className={monuments_styles.monuments_rayonlar}>
          Ana səhifə / Rayonlar / {monument.name}
        </p>
        <p className={monuments_styles.monuments_sub_rayonlar}>Abidələr</p>

        <select
          // value={"dropdown"}
          // onChange={(e) => {
          //   setContent(e.target.value);
          //   setDropdown(e.target.value);
          //   setRadio(e.target.value);
          //   setCategory(parseInt(e.target.value, 10));
          // }}

          onChange={(e) => {
            setRadio(e.target.value);
            setContent("apple content");
            setCategory(parseInt(e.target.value, 10));
          }}
          className={monuments_styles.dropdown}
        >
          <option value="1">MEMARLIQ ABİDƏLƏRİ</option>
          <option value="2">BAĞ-PARK,MONOMENTAL VƏ XATİRƏ ABİDƏLƏRİ</option>
          <option value="3">ARXEOLOJİ ABİBƏLƏR</option>
          <option value="4">DEKORATİV-TƏTBİQİ SƏNƏT NÜMUNƏLƏRİ</option>
        </select>

        <div className={monuments_styles.button_group}>
          {monument.monuments.some((item) => item.category == "1") && (
            <>
              <input
                className={monuments_styles.radio__input}
                type="radio"
                value="option1"
                name="myRadio"
                id="myRadio1"
                onChange={(e) => {
                  setRadio(e.target.value);
                  setContent("apple content");
                  setCategory(1);
                  handeFirst();
                }}
                checked={firstChecked}
              />
              <label className={monuments_styles.radio__label} for="myRadio1">
                MEMARLIQ ABİDƏLƏRİ
              </label>
            </>
          )}
          {monument.monuments.some((item) => item.category == "2") && (
            <>
              <input
                className={monuments_styles.radio__input}
                type="radio"
                value="option2"
                name="myRadio"
                id="myRadio2"
                onChange={(e) => {
                  setRadio(e.target.value);
                  setContent("orange content");
                  setCategory(2);
                  handeSecond();
                }}
              />
              <label className={monuments_styles.radio__label} for="myRadio2">
                BAĞ-PARK,MONOMENTAL VƏ XATİRƏ ABİDƏLƏRİ
              </label>
            </>
          )}
          {monument.monuments.some((item) => item.category == "3") && (
            <>
              <input
                className={monuments_styles.radio__input}
                type="radio"
                value="option3"
                name="myRadio"
                id="myRadio3"
                onChange={(e) => {
                  setRadio(e.target.value);
                  setContent("banana content");
                  setCategory(3);
                  handeThird();
                }}
              />
              <label className={monuments_styles.radio__label} for="myRadio3">
                ARXEOLOJİ ABİBƏLƏR
              </label>
            </>
          )}
          {monument.monuments.some((item) => item.category == "4") && (
            <>
              <input
                className={monuments_styles.radio__input}
                type="radio"
                value="option4"
                name="myRadio"
                id="myRadio4"
                onChange={(e) => {
                  setRadio(e.target.value);
                  setContent("dord content");
                  setCategory(4);
                  handeFourth();
                }}
              />
              <label className={monuments_styles.radio__label} for="myRadio4">
                DEKORATİV-TƏTBİQİ SƏNƏT NÜMUNƏLƏRİ
              </label>
            </>
          )}
          {/* <input
            type="text"
            placeholder="Axtar.."
            className={monuments_styles.search_input}
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

          {/* <Link href={{ pathname: "/search", query: { keyword: searchTerm } }}>
            <button type="submit">axtar</button>
          </Link> */}

          {/* <h1>Radio button is: {content}</h1> */}
        </div>

        <div className={styles.rayonlar_grid}>
          <AbidelerGrid monuments={monument.monuments} category={category} />
        </div>
      </div>
      <Menu />
    </div>
  );
};

export async function getStaticProps({ params: { slug } }) {
  const monuments_res = await fetch(`${API_URL}/districts/?slug=${slug}`);
  const monuments = await monuments_res.json();

  return {
    props: {
      monument: monuments[0],
    },
  };
}

export async function getStaticPaths() {
  const districts_res = await fetch(`${API_URL}/districts/`);
  const districts = await districts_res.json();

  return {
    paths: districts.map((district) => ({
      params: { slug: String(district.slug) },
    })),
    fallback: false,
  };
}

export default Monuments;
