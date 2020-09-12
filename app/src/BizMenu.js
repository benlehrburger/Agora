import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import Button from '@material-ui/core/Button';
import GridListTile from '@material-ui/core/GridListTile';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import BusinessCard from './BizCard.js';
import dirtCowboy from './dirtCowboy.jpg';
import l1 from './lous1.jpg';

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
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
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
        padding: 30,
    },
    explore: {
        marginLeft: 50,
        textTransform: 'none',
    }
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
        img: l1,
        name: "Lou's Bakery",
        location: "Hanover, NH",
        quote: '"We\'ve been a town staple since \'47 and this is the first time since then that we\'ve faced going under. We\'d appreciate some assistance paying our staff in full this month."',
        discount: "10%",
    },
    {
        img: l1,
        name: "Lou's Bakery",
        location: "Hanover, NH",
        quote: '"We\'ve been a town staple since \'47 and this is the first time since then that we\'ve faced going under. We\'d appreciate some assistance paying our staff in full this month."',
        discount: "10%",
    },
];

// Initialize Small Businesses Near You menu with horizontal scroll and surrounding text
export default function BusinessMenu() {
    const classes = useStyles();

    return (
        <body>
        <div className={classes.title}>
            <Typography variant="h2">
                Small Businesses Near You 
            </Typography>
        </div>
        <div className={classes.root}>
            <GridList className={classes.gridList} cols={2.5} cellHeight='auto'>
                {tileData.map((tile) => (
                <GridListTile key={tile.name}>
                    <BusinessCard img={tile.img} name={tile.name} location={tile.location} quote={tile.quote} discount={tile.discount}></BusinessCard>
                </GridListTile>
                ))}
            </GridList>
        </div>
        <div align-items="center" className={classes.explore}>
            <Typography>
                <Button size="large">
                    Explore Your Main Street
                    <ChevronRightIcon fontSize="large"/>
                </Button>
            </Typography>
        </div>
        </body>        
    )
}
