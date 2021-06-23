import { fromImageToUrl, API_URL } from "../../utils/urls";
import Link from "next/link";

import styles from "../districts/Districts.module.css";
import monuments_styles from "../monuments/Monuments.module.css";
import home_styles from "../../styles/Home.module.css";
import filter_styles from "./Filter.module.css";
import { useState } from "react";

import { BsArrowLeft } from "react-icons/bs";
import ImportanceGrid from "../../components/ImportanceGrid";
import Menu from "../../components/Menu.js";
import { useRouter } from "next/router";
import meram_styles from "../../pages/meramimiz/Meram.module.css";

const Filter = ({ importances, types, monuments }) => {
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
  // const [content, setContent] = useState("apple content");
  const [category, setCategory] = useState(2);

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
          <a onClick={() => router.back()} className={filter_styles.arrowa}>
            <BsArrowLeft size={"2.6525198938992043vh"} />
          </a>
        </div>
        <p className={monuments_styles.monuments_rayonlar}>
          <a href="/" className={meram_styles.meram_link}>
            Ana səhifə&nbsp;
          </a>
          / Abidələr
        </p>
        <p className={monuments_styles.monuments_sub_rayonlar}>Abidələr</p>

        <div className={filter_styles.sicontainer}>
          <select
            className={filter_styles.select}
            value={dropdown}
            onChange={(e) => {
              // setContent(e.target.value);
              setDropdown(e.target.value);
              setRadio(e.target.value);
              setCategory(parseInt(e.target.value - 1, 10));
              setOptionClicked(true);
              setInputClicked(false);
              handeFourth();
            }}
          >
            <option style={{ display: "none" }} selected>
              Növ üzrə
            </option>

            {types.map((type) => (
              <option value={type.id}>{type.name}</option>
            ))}
          </select>
          <input
            className={monuments_styles.radio__input}
            type="radio"
            value="option1"
            name="myRadio"
            id="myRadio1"
            onChange={(e) => {
              setRadio(e.target.value);
              setCategory(2);
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
              setCategory(1);
              handeSecond();
              setOptionClicked(false);
              setInputClicked(true);
            }}
            checked={secondChecked}
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
              setCategory(0);
              handeThird();
              setOptionClicked(false);
              setInputClicked(true);
            }}
            checked={thirdChecked}
          />
          <label
            className={monuments_styles.radio__label}
            // className={filter_styles.rlabel}
            for="myRadio3"
          >
            Yerli Əhəmiyyətli
          </label>
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

  const monuments_res = await fetch(`${API_URL}/monuments/`);
  const monuments = await monuments_res.json();

  return {
    props: {
      importances,
      types,
      monuments,
    },
  };
}

export default Filter;
