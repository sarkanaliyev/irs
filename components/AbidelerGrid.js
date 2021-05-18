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

export default function AbidelerGrid(props) {
  const classes = useStyles();

  let variable;

  function FormRow() {
    // {
    //   props.category
    //     ? (variable = props.monuments.filter(
    //         (member) => member.category === props.category
    //       ))
    //     : (variable = props.monuments);
    // }
    return (
      <React.Fragment>
        {props.monuments
          .filter((member) => member.category === props.category)
          .map((value) => (
            <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
              <Link href={`/monument/${value.slug}`}>
                <a>
                  <div className={rayonlar_styles.nested_rayon}>
                    {value.before_occupation ? (
                      <div
                        className={rayonlar_styles.img_holder}
                        style={{
                          backgroundImage: `linear-gradient(180deg, #000000 -112.64%, rgba(0, 0, 0, 0) 100%, rgba(0, 0, 0, 0.1) 100%),url(${fromImageToUrl(
                            value.before_occupation.formats.thumbnail
                          )})`,
                        }}
                      ></div>
                    ) : value.after_occupation ? (
                      <div
                        className={rayonlar_styles.img_holder}
                        style={{
                          backgroundImage: `linear-gradient(180deg, #000000 -112.64%, rgba(0, 0, 0, 0) 100%, rgba(0, 0, 0, 0.1) 100%),url(${fromImageToUrl(
                            value.after_occupation.formats.thumbnail
                          )})`,
                        }}
                      ></div>
                    ) : value.during_occupation ? (
                      <div
                        className={rayonlar_styles.img_holder}
                        style={{
                          backgroundImage: `linear-gradient(180deg, #000000 -112.64%, rgba(0, 0, 0, 0) 100%, rgba(0, 0, 0, 0.1) 100%),url(${fromImageToUrl(
                            value.during_occupation.formats.thumbnail
                          )})`,
                        }}
                      ></div>
                    ) : null}
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
