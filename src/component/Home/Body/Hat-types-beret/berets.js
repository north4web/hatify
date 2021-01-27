import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import b1 from '../../../images/berets/b1.jpg'
import b2 from '../../../images/berets/b2.jpg'
import b3 from '../../../images/berets/b3.jpg'
import b4 from '../../../images/berets/b4.jpg'
import b5 from '../../../images/berets/b5.jpg'
import b6 from '../../../images/berets/b6.jpg'
import b7 from '../../../images/berets/b7.jpg'
import b8 from '../../../images/berets/b8.jpg'
import b9 from '../../../images/berets/b9.jpg'
import { Link } from "react-router-dom";
import clsx from 'clsx';
// import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';


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
                title="Seeberger"
                subheader="Viscose Beret"
              />
              <CardMedia
                className={classes.media}
                image={b1}
                title="viscose-mix-black-beret-seeberger"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  <del>$ 100.00 </del> <span style={{ color: "red" }}>(-30%)</span>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" >
                  <Link style={{ textDecoration: 'none', color: 'black' }} to='/Beret1'>BUY</Link>
                </Typography>
              </CardContent>
              {/* <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        Viscose-mix-black-beret-seeberger
        </Typography>
      </CardContent> */}
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
                  Viscose Mix Black Beret
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
                title="Seeberger"
                subheader="Wool Beret"
              />
              <CardMedia
                className={classes.media}
                image={b2}
                title="wool-blend-black-beret-seeberger"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  <del>$ 100.00 </del> <span style={{ color: "red" }}>(-30%)</span>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" >
                  <Link style={{ textDecoration: 'none', color: 'black' }} to='/Beret2'>BUY</Link>
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
                    Wool Blend Black Beret
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
                title="Kangol"
                subheader="Wool Beret"
              />
              <CardMedia
                className={classes.media}
                image={b3}
                title="wool-jax-dk-lichen-green-beret-kangol"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  <del>$ 100.00 </del> <span style={{ color: "red" }}>(-30%)</span>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" >
                  <Link style={{ textDecoration: 'none', color: 'black' }} to='/Beret3'>BUY</Link>
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
                      Wool Jax Dk Lichen Green Beret
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
                subheader="Audrey Beret"
              />
              <CardMedia
                className={classes.media}
                image={b4}
                title="audrey-amber-beret-brixton"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  <del>$ 100.00 </del> <span style={{ color: "red" }}>(-30%)</span>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" >
                  <Link style={{ textDecoration: 'none', color: 'black' }} to='/Beret4'>BUY</Link>
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
                  Audrey Amber Beret
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
                title="Barts"
                subheader="Leconte Beret"
              />


              <CardMedia

                className={classes.media}
                image={b5}
                title="leconte-heather-grey-beret-barts"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  <del>$ 100.00 </del> <span style={{ color: "red" }}>(-30%)</span>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" >
                  <Link style={{ textDecoration: 'none', color: 'black' }} to='/Beret5'>BUY</Link>
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
                    Leconte Heather Grey Beret
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
                title="Seeberger"
                subheader="Viscose Beret"
              />


              <CardMedia

                className={classes.media}
                image={b6}
                title="viscose-mix-nutria-beret-seeberger"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  <del>$ 100.00 </del> <span style={{ color: "red" }}>(-30%)</span>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" >
                  <Link style={{ textDecoration: 'none', color: 'black' }} to='/Beret6'>BUY</Link>
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
                      Viscose Mix Nutria Beret
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
                title="Seeberger"
                subheader="Wool Beret"
              />
              <CardMedia

                className={classes.media}
                image={b7}
                title="wool-blend-heather-grey-beret-seeberger"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  <del>$ 100.00 </del> <span style={{ color: "red" }}>(-30%)</span>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" >
                  <Link style={{ textDecoration: 'none', color: 'black' }} to='/Beret7'>BUY</Link>
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
                  Wool Blend Heather Grey Beret
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
                title="Seeberger"
                subheader="Wool Beret"
              />


              <CardMedia

                className={classes.media}
                image={b8}
                title="wool-blend-marine-blue-beret-seeberger"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  <del>$ 100.00 </del> <span style={{ color: "red" }}>(-30%)</span>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" >
                  <Link style={{ textDecoration: 'none', color: 'black' }} to='/Beret8'>BUY</Link>
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
                    Wool Blend Marine Blue Beret
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
                title="Kangol"
                subheader="Wool Beret"
              />


              <CardMedia

                className={classes.media}
                image={b9}
                title="wool-jax-red-velvet-beret-kangol"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  <del>$ 100.00 </del> <span style={{ color: "red" }}>(-30%)</span>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" >
                  <Link style={{ textDecoration: 'none', color: 'black' }} to='/Beret9'>BUY</Link>
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
                      Wool Jax Red Velvet Beret
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
