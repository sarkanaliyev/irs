import Link from "next/link";
import { fromImageToUrl, API_URL } from "../../utils/urls";

import styles from "../monument/Monument.module.css";
import districts_styles from "../districts/Districts.module.css";

import Menu from "../../components/Menu";
import { BsArrowLeft } from "react-icons/bs";
import AbideMelumat from "../../components/AbideMelumat";
import Frame from "../../components/Frame";
import { useState } from "react";
import { useRouter } from "next/router";

const Monument = ({ monument }) => {
  const handeFirst = () => {
    document.getElementById("first").style.color = "white";
    document.getElementById("second").style.color = "#3a3d3f";
    document.getElementById("third").style.color = "#3a3d3f";
  };
  const handeSecond = () => {
    document.getElementById("first").style.color = "#3a3d3f";
    document.getElementById("second").style.color = "white";
    document.getElementById("third").style.color = "#3a3d3f";
  };
  const handeThird = () => {
    document.getElementById("first").style.color = "#3a3d3f";
    document.getElementById("second").style.color = "#3a3d3f";
    document.getElementById("third").style.color = "white";
  };
  const router = useRouter();

  const [currentImage, setCurrentImage] = useState(monument.during_occupation);

  function openNav() {
    document.getElementById("myNav").style.height = "100%";
    console.log("opennav");
  }

  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }
  return (
    <div>
      <div className={styles.top}>
        <a href="/">
          <img src="/logo.svg" className={districts_styles.districts_logo} />
        </a>

        {/* <p className={districts_styles.districts_az}>AZ</p> */}

        <a
          href="#"
          className={districts_styles.districts_hamburger}
          onClick={openNav}
        >
          <div className={districts_styles.districts_one}></div>
          <div className={districts_styles.districts_two}></div>
          <div className={districts_styles.districts_three}></div>
        </a>
      </div>

      <div className={styles.abide_left}>
        <div className={styles.frame}>
          <Frame image={currentImage} />
        </div>

        <div className={styles.abide_left_bottom}>
          <div class={styles.column}>
            <img src={"/frametop.svg"} />
            <a
              id="first"
              className={styles.first}
              onClick={() => {
                {
                  monument.before_occupation &&
                    (setCurrentImage(monument.before_occupation), handeFirst());
                }
              }}
            >
              {monument.before_occupation ? (
                <p className={styles.p}>İşğaldan ƏVVƏL</p>
              ) : (
                <p className={styles.pa}>İşğaldan ƏVVƏL</p>
              )}
            </a>
            <img src={"/framebottom.svg"} />
          </div>
          <div class={styles.column}>
            <img src={"/frametop.svg"} />
            <a
              id="second"
              className={styles.second}
              onClick={() => {
                {
                  monument.during_occupation &&
                    (setCurrentImage(monument.during_occupation),
                    handeSecond());
                }
              }}
            >
              <p className={styles.p}>İşğaldan sonra</p>
            </a>
            <img src={"/framebottom.svg"} />
          </div>
          <div class={styles.column}>
            <img src={"/frametop.svg"} />
            <a
            // id="third"
            // onClick={() => {
            //   {
            //     monument.after_occupation &&
            //       (setCurrentImage(monument.after_occupation), handeThird());
            //   }
            // }}
            >
              <p className={styles.p}>BƏRPA</p>
            </a>
            <img src={"/framebottom.svg"} />
          </div>
          <div class={styles.column}>
            <img src={"/frametop.svg"} />
            <a
              id="third"
              onClick={() => {
                {
                  monument.after_occupation &&
                    (setCurrentImage(monument.after_occupation), handeThird());
                }
              }}
            >
              {monument.after_occupation ? (
                <p className={styles.p}>BÖYÜK QAYIDIŞDAN SONRA</p>
              ) : (
                <p className={styles.pa}>BÖYÜK QAYIDIŞDAN SONRA</p>
              )}
            </a>
            <img src={"/framebottom.svg"} />
          </div>
        </div>
      </div>
      <div className={styles.abide_right}>
        <div className={styles.abide_right_main}>
          <a onClick={() => router.back()} className={styles.arrow_a}>
            <BsArrowLeft size={"1.78125vw"} />
          </a>
          <p className={styles.abide_right_rayon}>{monument.district.name}</p>
          <p className={styles.abide_right_abide}>{monument.name}</p>
          <div className={styles.abide_right_melumat_div}>
            <AbideMelumat
              abideUnvan={monument.address}
              abideTarix={monument.date}
              abideEhemiyyet={monument.importance.name}
            />
          </div>
          <p className={styles.vandalizm}>VANDALIZMƏ MƏRUZ QALMIŞDIR</p>
          <p className={styles.abide_right_text}>{monument.content}</p>
        </div>
      </div>
      <Menu />
      {/* <h3>{monument.name}</h3> */}
    </div>
  );
};

export async function getStaticProps({ params: { slug } }) {
  const monuments_res = await fetch(`${API_URL}/monuments/?slug=${slug}`);
  const monuments = await monuments_res.json();

  return {
    props: {
      monument: monuments[0],
    },
  };
}

export async function getStaticPaths() {
  const monuments_res = await fetch(`${API_URL}/monuments/`);
  const monuments = await monuments_res.json();

  return {
    paths: monuments.map((monument) => ({
      params: { slug: String(monument.slug) },
    })),
    fallback: false,
  };
}

export default Monument;
