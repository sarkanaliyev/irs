import { fromImageToUrl, API_URL } from "../../utils/urls";

import styles from "../districts/Districts.module.css";
import monuments_styles from "../monuments/Monuments.module.css";
import home_styles from "../../styles/Home.module.css";
import filter_styles from "./Filter.module.css";
import { useState } from "react";

import { BsArrowLeft } from "react-icons/bs";
import ImportanceGrid from "../../components/ImportanceGrid";
import Menu from "../../components/Menu.js";
import { useRouter } from "next/router";

const Filter = ({ importances, types }) => {
  const [searchTerm, setSearchTerm] = useState();
  const [firstChecked, setFirstChecked] = useState(true);
  const [secondChecked, setSecondChecked] = useState(false);
  const [thirdChecked, setThirdChecked] = useState(false);

  const [optionClicked, setOptionClicked] = useState(false);
  const [inputClicked, setInputClicked] = useState(false);

  const handeFirst = () => {
    setFirstChecked(true);
    setSecondChecked(false);
    setThirdChecked(false);
  };
  const handeSecond = () => {
    setFirstChecked(false);
    setSecondChecked(true);
    setThirdChecked(false);
  };
  const handeThird = () => {
    setFirstChecked(false);
    setSecondChecked(false);
    setThirdChecked(true);
  };
  const handeFourth = () => {
    setFirstChecked(false);
    setSecondChecked(false);
    setThirdChecked(false);
  };
  const router = useRouter();

  const [radio, setRadio] = useState("apple");
  const [content, setContent] = useState("apple content");
  const [category, setCategory] = useState(0);

  const [dropdown, setDropdown] = useState("apple");

  function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }

  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }
  return (
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
          <a onClick={() => router.back()} className={filter_styles.arrowa}>
            <BsArrowLeft size={"2.6525198938992043vh"} />
          </a>
        </div>
        <p className={monuments_styles.monuments_rayonlar}>
          Ana səhifə / Abidələr
        </p>
        <p className={monuments_styles.monuments_sub_rayonlar}>Abidələr</p>

        <div className={filter_styles.sicontainer}>
          <select
            className={filter_styles.select}
            value={dropdown}
            onChange={(e) => {
              setContent(e.target.value);
              setDropdown(e.target.value);
              setRadio(e.target.value);
              setCategory(parseInt(e.target.value, 10));
              setOptionClicked(true);
              setInputClicked(false);
              handeFourth();
            }}
          >
            <option style={{ display: "none" }} selected>
              Növ üzrə
            </option>
            <option value="0">Məscid</option>
            <option value="1">Qala</option>
            <option value="2">Hamam</option>
            <option value="3">Türbə</option>
            <option value="4">Yaşayış yeri</option>
            <option value="5">Malinkanə</option>
            <option value="6">Monastr</option>
            <option value="7">Saray</option>
            <option value="8">Muzey</option>
            <option value="9">Məktəb</option>
            <option value="10">Karvansara</option>
            <option value="11">Heykəl</option>
            <option value="12">Məbəd</option>
            <option value="13">İmarət</option>
            <option value="14">Qəsr</option>
            <option value="15">Qəbirüstü abidə</option>
            <option value="16">Sərdabə</option>
            <option value="17">Körpü</option>
            <option value="18">Qəbiristanlıq</option>
            <option value="19">Sığınacaq</option>
            <option value="20">Bulaq</option>
            <option value="21">Xatirə abidəsi</option>
            {/* <option value="5">Körpü</option>
            <option value="6">Körpü</option> */}
          </select>
          <input
            className={monuments_styles.radio__input}
            type="radio"
            value="option1"
            name="myRadio"
            id="myRadio1"
            onChange={(e) => {
              setRadio(e.target.value);
              setContent("apple content");
              setCategory(0);
              handeFirst();
              setOptionClicked(false);
              setInputClicked(true);
            }}
            checked={firstChecked}
          />
          <label
            className={monuments_styles.radio__label}
            // className={filter_styles.rlabel}
            for="myRadio1"
          >
            Dünya Əhəmiyyətli
          </label>

          <input
            className={monuments_styles.radio__input}
            type="radio"
            value="option2"
            name="myRadio"
            id="myRadio2"
            onChange={(e) => {
              setRadio(e.target.value);
              setContent("orange content");
              setCategory(1);
              handeSecond();
              setOptionClicked(false);
              setInputClicked(true);
            }}
          />
          <label
            className={monuments_styles.radio__label}
            // className={filter_styles.rlabel}
            for="myRadio2"
          >
            Ölkə Əhəmiyyətli
          </label>
          <input
            className={monuments_styles.radio__input}
            type="radio"
            value="option3"
            name="myRadio"
            id="myRadio3"
            onChange={(e) => {
              setRadio(e.target.value);
              setContent("banana content");
              setCategory(2);
              handeThird();
              setOptionClicked(false);
              setInputClicked(true);
            }}
          />
          <label
            className={monuments_styles.radio__label}
            // className={filter_styles.rlabel}
            for="myRadio3"
          >
            Yerli Əhəmiyyətli
          </label>

          {/* <h1>Radio button is: {content}</h1> */}
        </div>
        <div className={styles.rayonlar_grid}>
          {optionClicked ? (
            <ImportanceGrid monuments={types[category].monuments} />
          ) : (
            <ImportanceGrid monuments={importances[category].monuments} />
          )}
        </div>
      </div>
      <Menu />
    </div>
  );
};

export async function getStaticProps() {
  const importances_res = await fetch(`${API_URL}/importances/`);
  const importances = await importances_res.json();

  const types_res = await fetch(`${API_URL}/types/`);
  const types = await types_res.json();
  return {
    props: {
      importances,
      types,
    },
  };
}

export default Filter;
