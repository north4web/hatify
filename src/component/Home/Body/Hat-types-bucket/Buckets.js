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
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


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
                
                title="Herschel"
                subheader="Camo Bucket"
              />
              <CardMedia
                className={classes.media}
                image='../images/buckets/bu1.jpg'
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
                    Cooperman Woodland Camo Bucket
          </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </div>
          <div class="col-sm">
            <Card className={classes.root}>
              <CardHeader
                
                title="New Era"
                subheader="GORE-TEX Bucket"
              />
              <CardMedia

                className={classes.media}
                image='../images/buckets/bu2.jpg'
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
                    GORE-TEX Black/White Bucket
          </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </div>
          <div class="col-sm">
            <Card className={classes.root}>
              <CardHeader
                
                title="Ellesse"
                subheader="Levan Bucket"
              />
              <CardMedia
                className={classes.media}
                image='../images/buckets/bu3.jpg'
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
                    Levan Navy Blue Bucket
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
                
                title="Brixton"
                subheader="Kids Bucket"
              />
              <CardMedia

                className={classes.media}
                image='../images/buckets/bu4.jpg'
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
                    Kids Lil Hardy Red Navy Bucket
          </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </div>
          <div class="col-sm">
            <Card className={classes.root}>
              <CardHeader
                
                title="Ellesse"
                subheader="Lorenzo Bucket"
              />
              <CardMedia

                className={classes.media}
                image='../images/buckets/bu5.jpg'
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
                    Lorenzo White Bucket
          </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </div>
          <div class="col-sm">
            <Card className={classes.root}>
              <CardHeader
                
                title="New Era"
                subheader="Outdoors Bucket"
              />
              <CardMedia

                className={classes.media}
                image='../images/buckets/bu6.jpg'
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
                    None Outdoors Bucket Explorer Olive Bucket
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
                
                title="Converse"
                subheader="Patch Plaid Bucket"
              />
              <CardMedia

                className={classes.media}
                image='../images/buckets/bu7.jpg'
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
                    Reversible Bucket Patch Plaid Rose Maroon Bucket
          </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </div>
          <div class="col-sm">
            <Card className={classes.root}>
              <CardHeader
                
                title="Jack Wolfskin"
                subheader="Supplex Bucket"
              />
              <CardMedia

                className={classes.media}
                image='../images/buckets/bu8.jpg'
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
                    Supplex Sun Hat Siltstone Bucket
          </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </div>
          <div class="col-sm">
            <Card className={classes.root}>
              <CardHeader
                
                title="Fair"
                subheader="White Bucket"
              />
              <CardMedia

                className={classes.media}
                image='../images/buckets/bu9.jpg'
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
                    White Logo Black Bucket
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
