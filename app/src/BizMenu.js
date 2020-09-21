import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import Button from '@material-ui/core/Button';
import GridListTile from '@material-ui/core/GridListTile';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import BusinessCard from './BizCard.js';
import dirtCowboy from './dirtCowboy.jpg';
import lous from './lous.jpg';
import stillNorth from './stillNorth.jpg'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';


// Define styles
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      margin: 20,
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      flexWrap: 'nowrap',
      paddingBottom: 0,
      transform: 'translateZ(0)',
    },
    title: {
      paddingLeft: 20,
      paddingBottom: 10,
    },
    caption: {
      fontSize: 50,
    },
    link: {
        href: "#",
        color: "inherit",
        position: "absolute",
    },
    arrow: {
        fontSize: "large",
    },
    explore: {
        marginLeft: 50,
    },
    button: {
        textTransform: 'none',
        fontSize: 25,
        margin: 0,
    },
  }),
);

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

// Create array for Small Businesses Near You
const tileData = [
    {
        img: dirtCowboy,
        name: "Dirt Cowboy Cafe",
        location: "Hanover, NH",
        quote: '"We\'re struggling to scrape money together for rent during the summer offseason. We would sincerely appreciate a microloan of $6000 to help us stay in this town near and dear to our hearts."',
        discount: "15%",
    },
    {
        img: lous,
        name: "Lou's Bakery",
        location: "Hanover, NH",
        quote: '"We\'ve been a town staple since \'47 and this is the first time since then that money has been tight. We\'d appreciate some assistance paying our staff in full this month."',
        discount: "10%",
    },
    {
        img: stillNorth,
        name: "Still North Books & Bar",
        location: "Hanover, NH",
        quote: '"Last year, our first year in Hanover, students relied on us for over 2000 new textbooks. We need help with a final shipment of 500 textbooks for students before the start of the term."',
        discount: "10%",
    },
];

// Initialize Small Businesses Near You menu with horizontal scroll and surrounding text
export default function BusinessMenu() {
    const classes = useStyles();

    return (
        <div style={{ paddingLeft: 20 }}>
          <div className={classes.title}>
              <Typography className={classes.caption} variant='h2'>
                  Small Businesses Near You 
              </Typography>
          </div>
          <div className={classes.root}>
              <GridList className={classes.gridList} cols={2.5} cellHeight='400'>
                  {tileData.map((tile) => (
                  <GridListTile key={tile.name}>
                      <BusinessCard img={tile.img} name={tile.name} location={tile.location} quote={tile.quote} discount={tile.discount}></BusinessCard>
                  </GridListTile>
                  ))}
              </GridList>
          </div>
          <div align-items="center" className={classes.explore}>
              <Typography variant="h3">
                  <Button size="large" className={classes.button}>
                      Explore Your Main Street
                      <ChevronRightIcon fontSize="large"/>
                  </Button>
              </Typography>
          </div>
        </div>        
    )
}
