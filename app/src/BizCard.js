import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import LoanPage from './loan.js';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';


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
    textTransform: 'none',
    fontSize: '16px',
    bottom: 8,
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

// Initialize dialog open transition
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// Initialize function to create single business card
export default function BusinessCard(props) {
  const classes = useStyles();
  const img = props.img;
  const name = props.name;
  const location = props.location;
  const quote = props.quote;
  const discount = props.discount;
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
      setOpen(true);
  };

  const handleClose = () => {
      setOpen(false);
  };

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
            <Button className={classes.save} onClick={handleOpen}>
              Pitch In
              <ChevronRightIcon/>
            </Button>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
              <LoanPage />
            </Dialog>
          </Typography>
        </div>
      </CardActions>
      </MuiThemeProvider>
    </Card>
  );
};
