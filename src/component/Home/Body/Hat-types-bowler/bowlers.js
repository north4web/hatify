import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Link } from "react-router-dom";
import clsx from 'clsx';
// import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
// import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '70%',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (

    <div>
      <br />
      {/* first line of cards */}

      <div class="container">
        <div class="row">
          <div class="col-sm">
            <Card className={classes.root}>
              <CardHeader
                // avatar={
                //   <Avatar aria-label="recipe" className={classes.avatar}>
                //     R
                //   </Avatar>
                // }
                // action={
                //   <IconButton aria-label="settings">
                //     <MoreVertIcon />
                //   </IconButton>
                // }
                title="Stetson"
                subheader="Woolfelt Bowler"
              />
              <CardMedia
                className={classes.media}
                image="https://az2.hatstoremedia.com/hatstore/images/4063633006593_1/652/522/0/bogart-open-crown-woolfelt-beige-bowler-stetson.jpg"
                title="Bogart Open Crown Woolfelt Beige Bowler - Stetson"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  <del>$ 150.00 </del> <span style={{ color: "red" }}>(-30%)</span>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" >
                  <Link style={{ textDecoration: 'none', color: 'black' }} to='/Bowler1'>BUY</Link>
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
                <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>

                  <Typography paragraph>
                  Bogart Open Crown Woolfelt Beige Bowler
          </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </div>
          <div class="col-sm">
            <Card className={classes.root}>
              <CardHeader
                // avatar={
                //   <Avatar aria-label="recipe" className={classes.avatar}>
                //     R
                //   </Avatar>
                // }
                // action={
                //   <IconButton aria-label="settings">
                //     <MoreVertIcon />
                //   </IconButton>
                // }
                title="Mayser"
                subheader="Connor Bowler"
              />
              <CardMedia
                className={classes.media}
                image="https://az2.hatstoremedia.com/hatstore/images/hs2013531-2_1/652/522/0/connor-wolga-stone-bowler-mayser.jpg"
                title="Connor Wolga Stone Bowler - Mayser"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  <del>$ 150.00 </del> <span style={{ color: "red" }}>(-30%)</span>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" >
                  <Link style={{ textDecoration: 'none', color: 'black' }} to='/Bowler2'>BUY</Link>
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
                <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography
                    paragraph>
                    Connor Wolga Stone Bowler
          </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </div>
          <div class="col-sm">
            <Card className={classes.root}>
              <CardHeader
                // avatar={
                //   <Avatar aria-label="recipe" className={classes.avatar}>
                //     R
                //   </Avatar>
                // }
                // action={
                //   <IconButton aria-label="settings">
                //     <MoreVertIcon />
                //   </IconButton>
                // }
                title="Stetson"
                subheader="Woolfelt Bowler"
              />
              <CardMedia
                className={classes.media}
                image="https://az1.hatstoremedia.com/hatstore/images/4063633032042_1/652/522/0/sonstige-bogart-open-crown-woolfelt-black-bowler-stetson.jpg"
                title="Sonstige Bogart Open Crown Woolfelt Black Bowler - Stetson"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  <del>$ 150.00 </del> <span style={{ color: "red" }}>(-30%)</span>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" >
                  <Link style={{ textDecoration: 'none', color: 'black' }} to='/Bowler3'>BUY</Link>
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
                <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography
                    paragraph>
                      Sonstige Bogart Open Crown Woolfelt Black Bowler
          </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </div>
        </div>
      </div>

      {/* second  line of cards */}

      <div class="container">
        <div class="row">
          <div class="col-sm">
            <Card className={classes.root}>
              <CardHeader
                // avatar={
                //   <Avatar aria-label="recipe" className={classes.avatar}>
                //     R
                //   </Avatar>
                // }
                // action={
                //   <IconButton aria-label="settings">
                //     <MoreVertIcon />
                //   </IconButton>
                // }
                title="Mayser"
                subheader="Connor Bowler"
              />
              <CardMedia
                className={classes.media}
                image="https://az1.hatstoremedia.com/hatstore/images/hs2013529-2_1/261/209/0/connor-wolga-bordeaux-bowler-mayser.jpg"
                title="Connor Wolga Bordeaux Bowler - Mayser"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  <del>$ 150.00 </del> <span style={{ color: "red" }}>(-30%)</span>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" >
                  <Link style={{ textDecoration: 'none', color: 'black' }} to='/Bowler4'>BUY</Link>
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
                <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>

                  <Typography paragraph>
                  Connor Wolga Bordeaux Bowler
          </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </div>
          <div class="col-sm">
            <Card className={classes.root}>
              <CardHeader
                // avatar={
                //   <Avatar aria-label="recipe" className={classes.avatar}>
                //     R
                //   </Avatar>
                // }
                // action={
                //   <IconButton aria-label="settings">
                //     <MoreVertIcon />
                //   </IconButton>
                // }
                title="Mayser"
                subheader="Connor Bowler"
              />
              <CardMedia
                className={classes.media}
                image="https://az2.hatstoremedia.com/hatstore/images/hs2013530-2_1/261/209/0/connor-wolga-cognac-brown-bowler-mayser.jpg"
                title="Connor Wolga Cognac Brown Bowler - Mayser"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  <del>$ 130.00 </del> <span style={{ color: "red" }}>(-30%)</span>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" >
                  <Link style={{ textDecoration: 'none', color: 'black' }} to='/Bowler5'>BUY</Link>
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
                <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography
                    paragraph>
                    Connor Wolga Cognac Brown Bowler
          </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </div>
          <div class="col-sm">
            <Card className={classes.root}>
              <CardHeader
                // avatar={
                //   <Avatar aria-label="recipe" className={classes.avatar}>
                //     R
                //   </Avatar>
                // }
                // action={
                //   <IconButton aria-label="settings">
                //     <MoreVertIcon />
                //   </IconButton>
                // }
                title="Jaxon & James"
                subheader="English Bowler"
              />
              <CardMedia
                className={classes.media}
                image="https://az1.hatstoremedia.com/hatstore/images/5055303732108_1/652/522/0/english-black-bowler-jaxon-james.jpg"
                title="English Black Bowler - Jaxon & James"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  <del>$ 150.00 </del> <span style={{ color: "red" }}>(-30%)</span>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" >
                  <Link style={{ textDecoration: 'none', color: 'black' }} to='/Bowler6'>BUY</Link>
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
                <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography
                    paragraph>
                      English Black Bowler
          </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </div>
        </div>
      </div>





    </div>




  );
}





