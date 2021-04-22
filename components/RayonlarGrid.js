import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { fromImageToUrl } from "../utils/urls";
import { AiOutlineRight } from "react-icons/ai";
import Link from "next/link";
import styles from "../components/RayonlarGrid.module.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // backgroundColor:"red",
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    // color: theme.palette.text.secondary,
    width: "100%",
    // height: "180px",
  },
}));

export default function RayonlarGrid(props) {
  console.log(props.districts);
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        {props.districts.map((value) => (
          <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
            {/* <a href={value.route}> */}
            <Link href={`/monuments/${value.slug}`}>
              <a>
                <div
                  className={classes.paper}
                  className={styles.nested_rayon}
                  // style={{
                  //   backgroundImage: `linear-gradient(180deg, #000000 -112.64%, rgba(0, 0, 0, 0) 100%, rgba(0, 0, 0, 0.1) 100%),url(${fromImageToUrl(
                  //     value.image
                  //   )})`,
                  // }}
                >
                  <div
                    className={styles.img_holder}
                    style={{
                      backgroundImage: `linear-gradient(180deg, #000000 -112.64%, rgba(0, 0, 0, 0) 100%, rgba(0, 0, 0, 0.1) 100%),url(${fromImageToUrl(
                        value.image
                      )})`,
                    }}
                  ></div>

                  <p className={styles.nested_text}>{value.name}</p>
                  <AiOutlineRight
                    color={"white"}
                    className={styles.aioutline}
                  />
                </div>
              </a>
            </Link>
          </Grid>
        ))}
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}
