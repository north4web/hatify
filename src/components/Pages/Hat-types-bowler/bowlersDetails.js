import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import StarRatings from 'react-star-ratings';
import { Fab } from '@material-ui/core';
import bowlersData from './bowlersData'
import { useParams } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";





function BowlersDetails(props) {


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

    const classes = useStyles();

    // automatically create subpages
    const { bowlersId } = useParams()
    const thisBeret = bowlersData.find(bowler => bowler._id === bowlersId)

    return (
        <div>

            <div class="row">
                <div class="col-sm">

                    <div >
                        <ImageGallery {... (
                            {
                                thumbnailPosition: "left",
                                useBrowserFullscreen: true,
                                showPlayButton: true,
                                showIndex: true,
                                height: "400px",
                                width: "400px",

                                items: [
                                    {
                                        original: `../images/bowlers/bo${bowlersId}.jpg`,
                                        thumbnail: `../images/bowlers/bo${bowlersId}.jpg`,
                                    },
                                    {
                                        original: `../images/bowlers/bo${bowlersId}a.jpg`,
                                        thumbnail: `../images/bowlers/bo${bowlersId}a.jpg`,
                                    },
                                ]
                            })} />
                    </div>)
                </div>

                <div class="col-sm" style={{ marginLeft: "20px", marginRight: "50px" }}>
                    <Typography variant="h4" component="h4">
                        {thisBeret.name}
                    </Typography><br />
                    <Typography variant="body2" color="textSecondary" component="p" >
                        <del>$ {thisBeret.price}.00 </del> <span style={{ color: "red" }}>(-30%)</span>
                    </Typography> <br />
                    <Typography>
                        <StarRatings
                            rating={2.403}
                            starDimension="40px"
                            starSpacing="0.1px"
                            starRatedColor="gold" />
                    </Typography><br />

                    <Typography component="p">

                        {thisBeret.description}
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
                <img style={{ height: '300px' }} src="https://thumbs.dreamstime.com/b/new-year-sale-shopping-banner-background-flat-design-snowflakes-gold-glittering-frame-text-shadow-pattern-81995950.jpg" alt="sales" />
            </div>


        </div>
    )
}



export default BowlersDetails




