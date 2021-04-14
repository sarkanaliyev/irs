import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import styles from "./AbideMelumat.module.css";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // backgroundColor: "green",
    paddingBottom: "30px",
  },
  paper: {
    // padding: theme.spacing(2),
    // textAlign: "center",
    // color: theme.palette.text.secondary,
    // width: "100%",
    // fontSize: "14px",
    // backgroundColor: "green",
    // margin: "0",
    // padding: "0",
    // margin:"100px"
  },
}));

export default function AbideMelumat(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={4} sm={4}>
          <p className={styles.paper}>Abidənin ünvanı:</p>
        </Grid>
        <Grid item xs={4} sm={4}>
          <p className={styles.paper}>Abidənin tarixi: </p>
        </Grid>
        <Grid item xs={4} sm={4}>
          <p className={styles.paper}>Əhəmiyyət dərəcəsi: </p>
        </Grid>
        <Grid item xs={4} sm={4}>
          <p className={styles.paper}>{props.abideUnvan}</p>
        </Grid>
        <Grid item xs={4} sm={4}>
          <p className={styles.paper}>{props.abideTarix}</p>
        </Grid>
        <Grid item xs={4} sm={4}>
          <p className={styles.paper}>{props.abideEhemiyyet}</p>
        </Grid>
      </Grid>
    </div>
  );
}
