import React from 'react';
import Bucket9Gallery from './Gallery/Bucket9-gallery'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import StarRatings from 'react-star-ratings';
import { Fab } from '@material-ui/core';

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

function Bucket9() {
  const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;
  return (
    <div>

      {/* Bucket 9 */}
      <div class="row">
        <div class="col-sm">

          <Bucket9Gallery />

        </div>
        <div class="col-sm">
          <Typography variant="h4" component="h4">
            Fair
            </Typography><br />
          <Typography variant="body2" color="textSecondary" component="p" >
            <del>$ 70.00 </del> <span style={{ color: "red" }}>(-30%)</span>
          </Typography> <br />
          <Typography>
            <StarRatings
              rating={4.403}
              starDimension="40px"
                starSpacing="0.1px"
                starRatedColor="gold"/>
            </Typography><br />

          <Typography component="p">
            White Logo Black Bucket
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
        <img style={{ height: '300px' }} src="https://thumbs.dreamstime.com/b/new-year-sale-shopping-banner-background-flat-design-snowflakes-gold-glittering-frame-text-shadow-pattern-81995950.jpg" alt="sales"/>
      </div>
    </div>
  )
}
export default Bucket9