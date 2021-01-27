import React from 'react';
import '../../../CSS/Style.css';
import Beret3Gallery from './Gallery/Beret3-gallery'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import StarRatings from 'react-star-ratings';
import {
  withStyles,
  Radio,
  Checkbox,
  Fab,
  CircularProgress,
  Hidden,
  Link
}
  from '@material-ui/core';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function Beret3() {
  const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;
  return (
    <div>

      {/* beret 1 */}
      <div class="row">
        <div class="col-sm">

          <Beret3Gallery />

        </div>
        <div class="col-sm">
          <Typography variant="h4" component="h4">
            Kangol
            </Typography><br />
          <Typography variant="body2" color="textSecondary" component="p" >
            <del>$ 100.00 </del> <span style={{ color: "red" }}>(-30%)</span>
          </Typography> <br />
          <Typography>
            <StarRatings
              rating={3.103}
              starDimension="40px"
              starSpacing="0.1px"
              starRatedColor="gold" />
          </Typography><br />

          <Typography component="p">

            Wool Jax Dk Lichen Green Beret
             </Typography><br /><br />

          <div className="relative">
            <Fab color="primary" size="large" id="btnCart"
              style={{ borderRadius: 10, height: 40, width: 320, backgroundColor: "#C4C4C4" }}>
              <span className={classes.submitButtonText}>SIZE</span></Fab>
          </div><br />

          <div className="relative">
            <Fab color="primary" size="large" id="btnCart"
              style={{ borderRadius: 10, height: 40, width: 320, backgroundColor: "#C4C4C4" }}>
              <span className={classes.submitButtonText}>QUANTITY</span></Fab>
          </div><br />

          <div className="relative">
            <Fab color="primary" size="large" id="btnCart"
              style={{ borderRadius: 10, height: 40, width: 320, backgroundColor: "#C4C4C4" }}>
              <span className={classes.submitButtonText}>Add to Cart</span></Fab>
          </div><br />
        </div>
        <img style={{ height: '300px' }} src="https://thumbs.dreamstime.com/b/new-year-sale-shopping-banner-background-flat-design-snowflakes-gold-glittering-frame-text-shadow-pattern-81995950.jpg" />
      </div>
    </div>
  )
}
export default Beret3