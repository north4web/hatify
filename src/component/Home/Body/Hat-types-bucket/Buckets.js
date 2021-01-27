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
import bu1 from '../../../images/Buckets/bu1.jpg'
import bu2 from '../../../images/Buckets/bu2.jpg'
import bu3 from '../../../images/Buckets/bu3.jpg'
import bu4 from '../../../images/Buckets/bu4.jpg'
import bu5 from '../../../images/Buckets/bu5.jpg'
import bu6 from '../../../images/Buckets/bu6.jpg'
import bu7 from '../../../images/Buckets/bu7.jpg'
import bu8 from '../../../images/Buckets/bu8.jpg'
import bu9 from '../../../images/Buckets/bu9.jpg'
import { Link } from "react-router-dom";
// import clsx from 'clsx';
// import ShareIcon from '@material-ui/icons/Share';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
// import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '80%',
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

      {/* first row of cards */}

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
                title="Herschel"
                subheader="Cooperman Woodland Camo Bucket"
              />
              <CardMedia
                className={classes.media}
                image={bu1}
                title="Cooperman Woodland Camo Bucket - Herschel"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  <del>$ 70.00 </del> <span style={{ color: "red" }}>(-30%)</span>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" >
                  <Link style={{ textDecoration: 'none', color: 'black' }} to='/Bucket1'>BUY</Link>
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
                {/* <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton> */}
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>

                  <Typography paragraph>
                    Description of the hat.
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
                title="New Era"
                subheader="GORE-TEX Black/White Bucket"
              />
              <CardMedia

                className={classes.media}
                image={bu2}
                title="GORE-TEX Black/White Bucket - New Era"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  <del>$ 70.00 </del> <span style={{ color: "red" }}>(-30%)</span>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" >
                  <Link style={{ textDecoration: 'none', color: 'black' }} to='/Bucket2'>BUY</Link>
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
                {/* <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton> */}
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography
                    paragraph>
                    Description of the hat.
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
                title="Ellesse"
                subheader="Levan Navy Blue Bucket"
              />
              <CardMedia
                className={classes.media}
                image={bu3}
                title="levan-navy-blue-bucket-ellesse"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  <del>$ 70.00 </del> <span style={{ color: "red" }}>(-30%)</span>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" >
                  <Link style={{ textDecoration: 'none', color: 'black' }} to='/Bucket3'>BUY</Link>
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
                {/* <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton> */}
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography
                    paragraph>Description of the hat.
          </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </div>
        </div>
      </div>



      {/* second row of cards */}

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
                title="Brixton"
                subheader="Kids Lil Hardy Red Navy Bucket"
              />
              <CardMedia

                className={classes.media}
                image={bu4}
                title="kids-lil-hardy-red-navy-bucket-brixton"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  <del>$ 70.00 </del> <span style={{ color: "red" }}>(-30%)</span>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" >
                  <Link style={{ textDecoration: 'none', color: 'black' }} to='/Bucket4'>BUY</Link>
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
                {/* <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton> */}
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>

                  <Typography paragraph>
                    Description of the hat.
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
                title="Ellesse"
                subheader="Lorenzo White Bucket"
              />
              <CardMedia

                className={classes.media}
                image={bu5}
                title="lorenzo-white-bucket-ellesse"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  <del>$ 70.00 </del> <span style={{ color: "red" }}>(-30%)</span>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" >
                  <Link style={{ textDecoration: 'none', color: 'black' }} to='/Bucket5'>BUY</Link>
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
                {/* <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton> */}
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography
                    paragraph>
                    Description of the hat.
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
                title="New Era"
                subheader="None Outdoors Bucket Explorer Olive Bucket"
              />
              <CardMedia

                className={classes.media}
                image={bu6}
                title="none-outdoors-bucket-explorer-olive-bucket-new-era"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  <del>$ 70.00 </del> <span style={{ color: "red" }}>(-30%)</span>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" >
                  <Link style={{ textDecoration: 'none', color: 'black' }} to='/Bucket6'>BUY</Link>
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
                {/* <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton> */}
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography
                    paragraph>Description of the hat.
          </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </div>
        </div>
      </div>


      {/* third row of cards */}

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
                title="Converse"
                subheader="Reversible Bucket Patch Plaid Rose Maroon Bucket"
              />
              <CardMedia

                className={classes.media}
                image={bu7}
                title="reversible-bucket-patch-plaid-rose-maroon-bucket-converse"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  <del>$ 70.00 </del> <span style={{ color: "red" }}>(-30%)</span>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" >
                  <Link style={{ textDecoration: 'none', color: 'black' }} to='/Bucket7'>BUY</Link>
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
                {/* <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton> */}
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>

                  <Typography paragraph>
                    Description of the hat.
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
                title="Jack Wolfskin"
                subheader="Supplex Sun Hat Siltstone Bucket"
              />
              <CardMedia

                className={classes.media}
                image={bu8}
                title="supplex-sun-hat-siltstone-bucket-jack-wolfskin"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  <del>$ 70.00 </del> <span style={{ color: "red" }}>(-30%)</span>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" >
                  <Link style={{ textDecoration: 'none', color: 'black' }} to='/Bucket8'>BUY</Link>
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
                {/* <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton> */}
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography
                    paragraph>
                    Description of the hat.
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
                title="Fair"
                subheader="White Logo Black Bucket"
              />
              <CardMedia

                className={classes.media}
                image={bu9}
                title="white-logo-black-bucket-fair"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  <del>$ 70.00 </del> <span style={{ color: "red" }}>(-30%)</span>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" >
                  <Link style={{ textDecoration: 'none', color: 'black' }} to='/Bucket9'>BUY</Link>
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
                {/* <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton> */}
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography
                    paragraph>Description of the hat.
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
