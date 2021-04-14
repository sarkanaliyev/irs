import { fromImageToUrl, API_URL } from "../../utils/urls";
import { BsArrowLeft } from "react-icons/bs";

import styles from "../districts/Districts.module.css";
import monuments_styles from "../monuments/Monuments.module.css";
import meram_styles from "./Meram.module.css";
import Link from "next/link";

import Menu from "../../components/Menu.js";

const Meram = () => {
  function openNav() {
    document.getElementById("myNav").style.height = "100%";
    console.log("opennav");
  }

  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }
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
          Ana səhifə / Məramımız
        </p>
        <p className={monuments_styles.monuments_sub_rayonlar}>Məramımız</p>
        <p className={meram_styles.meram_p}>
          Ali Baş Komandan Prezident İlham Əliyevin rəhbərliyi altında rəşadətli
          ordumuz işğal olunmuş torpaqlarımızın azad edilməsi üçün uğurlu hərbi
          əməliyyatlar həyata keçirmiş, 30 ilə yaxın düşmən tapdağında olan
          ərazilərimiz həqiqi sahibinə geri qaytarılmışdır.<br></br>
          <br></br> Hazırda işğaldan azad olunmuş ərazilərdə dövlət qeydiyyatına
          alınmış 706 tarix və mədəniyyət abidəsi var ki, bu abidələrin
          əksəriyyəti məhv edilmiş və ya mənimsənilmişdir. Dövlət qeydiyyatına
          alınan abidələrin siyahısı aşağıdakılardır.
          <ul>
            <li> - 6 dünya əhəmiyyətli memarlıq abidələri </li>
            <li>- 5 dünya əhəmiyyətli arxeoloji abidələr </li>
            <li>- 119 ölkə əhəmiyyətli memarlıq abidələri </li>
            <li>- 121 ölkə əhəmiyyətli arxeoloji abidələr </li>
            <li> - 393 yerli əhəmiyyətli memarlıq abidələri </li>
            <li>
              - 23 yerli əhəmiyyətli bağ-park, monumental və xatirə abidələri
            </li>
            <li>- 22 yerli əhəmiyyətli arxeoloji abidələr </li>
            <li>- 17 dekorativ-tətbiqi sənət nümunələridir.</li>
          </ul>
          İşğal edilmiş ərazilərdə yerləşən dünya əhəmiyyətli tarix və
          mədəniyyət abidələri - Ağdam rayonunda Qutlu Musa oğlu türbəsi,
          Üzərliktəpə yaşayış yeri, Cəbrayıl rayonunda Xudafərin körpüləri,
          Niftalı kurqanları, Xocavənd rayonunda Azıx və Tağlar mağara
          düşərgələri, Kəlbəcər rayonunda Gəncəsər və Xudavəng monastırları,
          Şuşa şəhərində Şuşa Tarix-Memarlıq Qoruğu, Xocalı rayonunda Xocalı
          kurqanlarıdır.<br></br>
          <br></br> “Azərbaycan Respublikasının işğaldan azad olunmuş
          ərazilərində müvəqqəti xüsusi idarəetmənin təşkili” haqqında
          Azərbaycan Respublikası Prezidentinin 29 oktyabr 2020-ci il tarixli
          Fərmanının 7.8-ci bəndinin icrası üçün Dövlət Xidmətinin əməkdaşları
          işğaldan azad olunmuş rayonlara ezam edilmiş və mədəniyyət
          obyektlərinin (abidələrinin və müəssisələrinin) ilkin
          inventarlaşdırılması və mühafizəsi ilə bağlı vəzifələrin yerinə
          yetirilməsinə başlanılmışdır.<br></br>
          <br></br> İndiyədək aparılmış ilkin monitorinqlər zamanı dövlət
          qeydiyyatında olan 312 tarix-mədəniyyət abidəsinə baxış keçirilmişdir.
          <br></br>
          <br></br>
          Bundan əlavə həmin ərazilərdə yerləşən dövlət qeydiyyatında olmayan
          tarixi, memarlıq, arxeoloji əlamət daşıyan 108 obyektin* (yeni aşkar
          olunmuş abidə) monitorinqi aparılmışdır.<br></br>
          <br></br> Baxış keçirilən tarix-mədəniyyət abidələrinin və tarixi,
          memarlıq, arxeoloji əlamət daşıyan obyektlərin əksəriyyətinin
          işğalçılar tərəfindən tamamilə dağıdılaraq yalnız qalıqlarının
          qaldığı, müdaxilələrin olunduğu və vandalizmə məruz qaldığı aşkar
          edilmişdir.<br></br>
          <br></br>
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Meram;
