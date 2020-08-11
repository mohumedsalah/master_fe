import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Typography from "@material-ui/core/Typography";
import "./Setting.css";

const useStyles = makeStyles({
  root: {
    maxWidth: "30rem",
    margin: "1rem",
  },
  media: {
    height: "25rem",
  },
});
const Setting = (props) => {
  const classes = useStyles();

  return (
    <div className="setting-card-container">
      <Card
        onClick={() => {
          props.history.push("/dashboard/setting/resin");
        }}
        className={classes.root}
      >
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="/assets/img/blown.png"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h1">
              <span className="card-header-spe">resin</span>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="h3">
              <span className="card-content">
                thi view all container you need to view in template
              </span>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card
        onClick={() => {
          props.history.push("/dashboard/setting/resin");
        }}
        className={classes.root}
      >
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="/assets/img/blown.png"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h1">
              <span className="card-header-spe">resin</span>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="h3">
              <span className="card-content">
                thi view all container you need to view in template
              </span>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card
        onClick={() => {
          props.history.push("/dashboard/setting/resin");
        }}
        className={classes.root}
      >
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="/assets/img/blown.png"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h1">
              <span className="card-header-spe">resin</span>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="h3">
              <span className="card-content">
                thi view all container you need to view in template
              </span>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card
        onClick={() => {
          props.history.push("/dashboard/setting/resin");
        }}
        className={classes.root}
      >
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="/assets/img/blown.png"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h1">
              <span className="card-header-spe">resin</span>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="h3">
              <span className="card-content">
                thi view all container you need to view in template
              </span>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default Setting;
