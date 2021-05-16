import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { fromImageToUrl } from "../utils/urls";
import Link from "next/link";
import styles from "../components/AbidelerGrid.module.css";
import rayonlar_styles from "../components/RayonlarGrid.module.css";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function MultimediaGrid(props) {
  const classes = useStyles();
  function FormRow() {
    return (
      <React.Fragment>
        {props.multis.map((value) => (
          <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
            <Link href={`${value.url}`}>
              <a>
                <div className={rayonlar_styles.nested_rayon}>
                  <div
                    className={rayonlar_styles.multi_img_holder}
                    style={{
                      backgroundImage: `linear-gradient(180deg, #000000 -112.64%, rgba(0, 0, 0, 0) 100%, rgba(0, 0, 0, 0.1) 100%),url(${fromImageToUrl(
                        value.image[0]
                      )})`,
                    }}
                  ></div>
                </div>
                <p className={styles.abide_ad}>{value.name}</p>
              </a>
            </Link>
          </Grid>
        ))}
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}
