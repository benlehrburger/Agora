import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Sandwich from './gianonnis.jpg';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  button: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    size: 'large',
  }
});

export default function BusinessCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Sandwich}
          title="Gianonni's Sandwich"
        />
        <CardContent>
          <Typography variant="h5" component="h2">
            Gianonni's Deli
          </Typography>
          <Typography gutterBottom fontSize="16">
            📍 Scarsdale, NY
          </Typography>
          <p>
            <Typography variant="body2" color="textSecondary" component="p">
              "When COVID-19 first struck, we were able to stay afloat despite the dip in sales. Now, we're struggling to even scrape money together for rent."
            </Typography>
          </p>
        </CardContent>
      <CardActions position='relative'>
        <div style={{ padding: 5 }}>
          <Button size="small" color="primary" className={classes.button}>
            Save 15%
            <ChevronRightIcon/>
          </Button>
        </div>
      </CardActions>
      </CardActionArea>
    </Card>
  );
}

{ // Quote at the top of website
  // scrolling bar of businesses near you (user is logged in)
  // top half shop image, bottom half info about the deal (shop name, location, pay X save Y)
  // Bar underneath saying explore, or something
  // Expansion has pix of owners and food with quotes from the owners, where money is going,
}