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
import bowlersData from './bowlersData'
// import { Repeat } from '@material-ui/icons';
import Toggler from '../toggler'
import '../styleCards.css'


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '78%',
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

  const bowlers = bowlersData.map(bowler => (
    <div key={bowler._id}>

      <div className="card">

        <Card className={classes.root}>

          <CardHeader

            title={<Link style={{ textDecoration: 'none', color: 'black' }} to={`/bowlers/${bowler._id}`}>{bowler.title}</Link>}
            subheader={bowler.subheader}
          />
          <CardMedia
            className={classes.media}
            image={`../images/bowlers/bo${bowler._id}.jpg`}
            title={bowler.description}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              <del>$ {bowler.price}.00 </del> <span style={{ color: "red" }}>(-30%)</span>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" >
              <Link style={{ textDecoration: 'none', color: 'black' }} to={`/bowlers/${bowler._id}`}>MORE DETAILS</Link>
            </Typography>
          </CardContent>

          <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Toggler render={
            ({on, toggle}) => (
                <div>
                    
                    <h1>
                        <span 
                            onClick={toggle}
                        >
                            {on ? <FavoriteIcon style={{color: 'red'}}/> : <FavoriteIcon />}
                        </span>
                    </h1>
                </div>
            )
        }/>
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

              <Typography paragraph>
              <p style={{width:"290px", textAlign:"justify"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              </Typography>
            </CardContent>
          </Collapse>
        </Card>

      </div>
    </div>

  ))

  return (

    <div className="flex-container">
      {bowlers}
    </div>


  );
}