import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { ThemeProvider } from '@material-ui/styles';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import { green } from '@material-ui/core/colors';

// Define styles
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    borderRadius: 10,
  },
  media: {
    height: 140,
  },
  actions: {
    height: 40,
    position: 'relative',
    background: '#F6F6F6',
  },
  button: {
    color: '#46BE4B',
  },
  save: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    color: '#46BE4B',
  },
  favorite: {
    position: 'absolute',
    bottom: 4,
    left: 10,
  },
});

// Change default color palette
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#46BE4B',
    },
    secondary: {
      main: "#FFFFFF",
    },
  },
});

// Initialize function to create single business card
export default function BusinessCard(props) {
  const classes = useStyles();
  const img = props.img;
  const name = props.name;
  const location = props.location;
  const quote = props.quote;
  const discount = props.discount;

  return (
    <Card className={classes.root}>
      <MuiThemeProvider 
        theme={theme}
      >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={img}
        />
        <CardContent>
          <Typography variant="h5" component="h2">
            {name}
          </Typography>
          <Typography gutterBottom fontSize="16">
            📍 {location}
          </Typography>
          <div style={{ height:10 }}></div>
            <Typography variant="body2" color="textSecondary" component="p">
              {quote}
            </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.actions}>
        <div>
          <IconButton aria-label="add to favorites" className={classes.favorite}>
            <FavoriteIcon />
          </IconButton>
        </div>
        <div> 
          <Typography color='primary'>
            <Button className={classes.save}>
              Save {discount}
              <ChevronRightIcon/>
            </Button>
          </Typography>
        </div>
      </CardActions>
      </MuiThemeProvider>
    </Card>
  );
};
