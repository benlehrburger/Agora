import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import dirtOwners from './dirtOwners.jpg';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import quotes from './quotes.png';
import Button from '@material-ui/core/Button';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import IconButton from '@material-ui/core/IconButton';

// Change default color palette
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#7E7E7E",
    },
  },
});

const useStyles = makeStyles((theme) =>
  createStyles({
    columnLeft: {
        float: 'left',
        width: '50%',
    },
    columnRight: {
        display: 'flex',
        float: 'right',
        width: '50%',
    },
    quotes: {
        position: 'absolute',
        fontSize: '15px',
        top: 66,
        left: 17,
        width: '83%',
    },
    container: {
        position: 'relative',
    },
    who: {
        fontSize: '15px',
        margin: 0,
        paddingLeft: 25,
        paddingTop: 15,
    },
    button: {
        paddingLeft: 145,
        paddingTop: 10,
    },
    para: {
        margin: 5,
    },
  }),
);

export default function BusinessBio() {
    const classes = useStyles();

    return (
        <div style={{ margin: 20 }}>
        <MuiThemeProvider>
        <Typography>
            <div className={classes.columnLeft}>
                <div>
                    <div style={{ paddingRight: 40 }}>
                        <div>
                            <Typography style={{ margin: 0, paddingBottom: 10, paddingTop: 15, fontSize: '45px' }} variant='h1'>
                                Dirt Cowboy Cafe
                            </Typography>
                        </div>
                        <div style={{ fontSize: 14, paddingTop: 10 }}>
                            Since opening in 1993, we have been serving freshly roasted, individually brewed cups of coffee to over 500 discerning coffee drinkers a day. Situated right in the heart of Hanover, we are a favorite for Dartmouth students and Hanover locals alike. Every coffee is 100% Arabica beans freshly roasted to order. We love our customers, and we do everything we can to get you ready to take on the day. Think the Sumatran blend is too biting? We’ll lighten the roast! We don’t tell you what’s good — you tell us… and when the boss speaks, we listen!
                        </div>
                    </div>
                </div>
                <div>
                    <Typography style={{ margin: 0, paddingTop: 46, paddingBottom: 15, fontSize: '25px' }}>
                        Where's the Money Going?
                    </Typography>
                    <div className={classes.container}>
                        <img src={quotes} width='90%' style={{ margin: 0 }}/>
                        <div className={classes.quotes}>
                        We're struggling to scrape money together for rent during the summer offseason. We would love to stay in Hanover, but may soon be left with no choice but to take business elsewhere. We would sincerely appreciate a microloan of $6000 to help us stay in this town near and dear to our hearts.
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.columnRight}>
                <div>
                    <div style={{ paddingTop: 10 }}>
                        <Box boxShadow={1} style={{ height: '288px' }}>
                            <img src={dirtOwners} width='100%' height='100%' />
                        </Box>
                    </div>
                    <div style={{ display: 'inline-block' }}>
                    <Typography style={{ margin: 0, paddingTop: 25, fontSize: '25px' }}>
                        Who Are We?
                    </Typography>
                    <div className={classes.who}>
                        <p className={classes.para} style={{ fontSize: 18, paddingBottom: 5 }}>
                            ☕  <b>We are the latte connoiseurs.</b>
                        </p>
                        <p className={classes.para} style={{ fontSize: 14 }}>
                            📍 7 S Main St, Hanover, NH 03755
                        </p>
                        <p className={classes.para} style={{ paddingTop: 5 }}>
                            👫 Owned by Chris and Layla
                        </p>
                        <p className={classes.para} style={{ paddingRight: 10, paddingTop: 5 }}>
                            ⚙️ Founded to give Hanover a locally-sourced coffee shop and a cozy spot for college students and community members to connect
                        </p>
                    </div>
                    <div className={classes.button}>
                        <Typography>
                            <IconButton>
                                <InstagramIcon fontSize='large'/>
                            </IconButton>
                            <IconButton>
                                <TwitterIcon fontSize='large'/>
                            </IconButton>
                            <IconButton>
                                <FacebookIcon fontSize='large'/>
                            </IconButton>
                        </Typography>
                    </div>
                </div>
                </div>
            </div>
        </Typography>
        </MuiThemeProvider>
        </div>
    )
}