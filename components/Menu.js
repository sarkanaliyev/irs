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
            <Link href="/">
              <a onClick={closeNav}>
                <h1>Ana Səhifə</h1>
              </a>
            </Link>
           
       
            <Link href="/meramimiz">
              <a onClick={closeNav}>
                <h1>Məramımız</h1>
              </a>
            </Link>
            
      
            <Link href="/districts">
              <a onClick={closeNav}>
                <h1>Rayonlar</h1>
              </a>
            </Link>
     
            <Link href="/filter">
              <a onClick={closeNav}>
                <h1>Əhəmiyyət dərəcəsi və Növ üzrə</h1>
              </a>
            </Link>
            
        
            <Link href="/multimedia">
              <a onClick={closeNav}>
                <h1>Multimedia</h1>
              </a>
            </Link>
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
