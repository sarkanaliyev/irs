import styles from "./Menu.module.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import districts_styles from "../pages/districts/Districts.module.css";

import Link from "next/link";

export default function Menu() {
  function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }

  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }
  return (
    <div id="myNav" className={styles.menu}>
      <div className={styles.menu_container}>
        <ul className={styles.ul}>
          <div className={styles.column}>
            <Link href="/">
              <a onClick={closeNav}>
                <h1>Ana Səhifə</h1>
              </a>
            </Link>
            <Link href="/">
              <a onClick={closeNav}>
                <p>Xəritə</p>
              </a>
            </Link>
            <Link href="/multimedia">
              <a onClick={closeNav}>
                <p>Multimedia</p>
              </a>
            </Link>
          </div>
          <div className={styles.column}>
            <Link href="/meramimiz">
              <a onClick={closeNav}>
                <h1>Məramımız</h1>
              </a>
            </Link>
            <Link href="/meramimiz">
              <a onClick={closeNav}>
                <p>Məlumat</p>
              </a>
            </Link>
          </div>
          <div className={styles.column}>
            <Link href="/districts">
              <a onClick={closeNav}>
                <h1>Rayonlar</h1>
              </a>
            </Link>
            <Link href="/monuments/agdam">
              <a onClick={closeNav}>
                <p>Ağdam</p>
              </a>
            </Link>
            <Link href="/monuments/cebrayil">
              <a onClick={closeNav}>
                <p>Cəbrayıl</p>
              </a>
            </Link>
            <Link href="/monuments/fuzuli">
              <a onClick={closeNav}>
                <p>Füzuli</p>
              </a>
            </Link>
            {/* <p>Xankəndi</p> */}
            {/* <p>Xocalı</p> */}
            {/* <p>Xocavənd</p> */}
            <Link href="/monuments/kelbecer">
              <a onClick={closeNav}>
                <p>Kəlbəcər</p>
              </a>
            </Link>
            <Link href="/monuments/qubadli">
              <a onClick={closeNav}>
                <p>Qubadlı</p>
              </a>
            </Link>
            <Link href="/monuments/qazax">
              <a onClick={closeNav}>
                <p>Qazax</p>
              </a>
            </Link>
            <Link href="/monuments/lacin">
              <a onClick={closeNav}>
                <p>Laçın</p>
              </a>
            </Link>
            <Link href="/monuments/susa">
              <a onClick={closeNav}>
                <p>Şuşa</p>
              </a>
            </Link>
            <Link href="/monuments/zengilan">
              <a onClick={closeNav}>
                <p>Zəngilan</p>
              </a>
            </Link>
          </div>
          <div className={styles.column}>
            <Link href="/filter">
              <a onClick={closeNav}>
                <h1>Əhəmiyyət dərəcəsi üzrə</h1>
              </a>
            </Link>
            <Link href="/filter">
              <a onClick={closeNav}>
                <p>Dünya əhəmiyyətli abidələr</p>
              </a>
            </Link>
            <Link href="/filter">
              <a onClick={closeNav}>
                <p>Ölkə əhəmiyyətli abidələr</p>
              </a>
            </Link>
            <Link href="/filter">
              <a onClick={closeNav}>
                <p>Yerli əhəmiyyətli abidələr</p>
              </a>
            </Link>
          </div>
          <div className={styles.column}>
            <Link href="/filter">
              <a onClick={closeNav}>
                <h1>Növ üzrə</h1>
              </a>
            </Link>
            <Link href="/filter">
              <a onClick={closeNav}>
                <p>Məscid</p>
              </a>
            </Link>
            <Link href="/filter">
              <a onClick={closeNav}>
                <p>Hamam</p>
              </a>
            </Link>
            <Link href="/filter">
              <a onClick={closeNav}>
                <p>İnzibati bina</p>
              </a>
            </Link>
            <Link href="/filter">
              <a onClick={closeNav}>
                <p>Yaşayış yeri</p>
              </a>
            </Link>
            <Link href="/filter">
              <a onClick={closeNav}>
                <p>Kurqan</p>
              </a>
            </Link>
            <Link href="/filter">
              <a onClick={closeNav}>
                <p>Türbə</p>
              </a>
            </Link>
            <Link href="/filter">
              <a onClick={closeNav}>
                <p>Körpü</p>
              </a>
            </Link>
          </div>
        </ul>
      </div>

      <a href="/">
        <img src="/logo.svg" className={districts_styles.districts_logo} />
      </a>

      <a className={styles.closebtn} onClick={closeNav}>
        &times;
      </a>
    </div>
  );
}
