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
      margin: 20,
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
    },
  }),
);

// Create array for Small Businesses Near You
const tileData = [
    {
        img: dirtCowboy,
        name: "Dirt Cowboy Cafe",
        location: "Hanover, NH",
        quote: '"When COVID-19 first struck, we were able to stay afloat despite the dip in sales. Now, we\'re struggling to even scrape money together for rent."',
        discount: "15%",
    },
    {
        img: lous,
        name: "Lou's Bakery",
        location: "Hanover, NH",
        quote: '"We\'ve been a town staple since \'47 and this is the first time since then that we\'ve faced going under. We\'d appreciate some assistance paying our staff in full this month."',
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
        <div>
        <div className={classes.title}>
            <Typography variant="h2">
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
            <Typography>
                <Button size="large" className={classes.button}>
                    Explore Your Main Street
                    <ChevronRightIcon fontSize="large"/>
                </Button>
            </Typography>
        </div>
        </div>        
    )
}
