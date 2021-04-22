// // import monuments from "../../monuments.json";
// import { fromImageToUrl, API_URL } from "../../utils/urls";
// import { BsArrowLeft } from "react-icons/bs";

// import styles from "../districts/Districts.module.css";
// import monuments_styles from "../monuments/Monuments.module.css";
// import home_styles from "../../styles/Home.module.css";

// // const monument = monuments[0];
// import { useState } from "react";
// import AbidelerGrid from "../../components/AbidelerGrid";

// import Link from "next/link";

// import Menu from "../../components/Menu.js";
// import MultimediaGrid from "../../components/MultimediaGrid";

// import { useRouter } from "next/router";
// const Multimedia = ({ multis }) => {
//   const router = useRouter();

//   const [searchTerm, setSearchTerm] = useState();
//   console.log(multis[0].name);
//   function openNav() {
//     document.getElementById("myNav").style.height = "100%";
//     console.log("opennav");
//   }

//   function closeNav() {
//     document.getElementById("myNav").style.height = "0%";
//   }
//   return (
//     <div className={styles.districts_container}>
//       <div className={monuments_styles.districts_heykel}>
//         <a href="/">
//           <img src="/logo.svg" />
//         </a>
//         {/* <p className={styles.districts_az}>AZ</p> */}
//         <div className={monuments_styles.hamburger_div}>
//           <input
//             className={home_styles.search_input}
//             type="text"
//             placeholder="Axtar..."
//             onChange={(event) => {
//               setSearchTerm(event.target.value);
//             }}
//             onKeyPress={(event) => {
//               if (event.key === "Enter") {
//                 router.push({
//                   pathname: "/search",
//                   query: { keyword: searchTerm },
//                 });
//               }
//             }}
//           />
//           <a href="#" className={monuments_styles.hamburger} onClick={openNav}>
//             <div className={monuments_styles.h_div}></div>
//             <div className={monuments_styles.h_div}></div>
//             <div className={monuments_styles.h_div}></div>
//           </a>
//         </div>
//       </div>

//       <div className={styles.districts_responsive}>
//         <div className={monuments_styles.monuments_arrow}>
//           <Link href="/districts">
//             <a>
//               <BsArrowLeft
//                 size={"2.6525198938992043vh"}
//                 className={monuments_styles.arrow}
//               />
//             </a>
//           </Link>
//         </div>
//         <p className={monuments_styles.monuments_rayonlar}>
//           Ana səhifə / Multimedia
//         </p>
//         <p className={monuments_styles.monuments_sub_rayonlar}>Multimedia</p>

//         <div className={styles.rayonlar_grid}>
//           {/* <AbidelerGrid monuments={monument.monuments} category={category} /> */}
//           <MultimediaGrid multis={multis} />
//         </div>
//       </div>
//       <Menu />
//     </div>
//   );
// };

// export async function getStaticProps() {
//   const multi_res = await fetch(`${API_URL}/multimedias`);
//   const multis = await multi_res.json();

//   return {
//     props: {
//       multis,
//     },
//   };
// }

// export default Multimedia;
