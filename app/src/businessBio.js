import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import dirtOwners from './dirtOwners.jpg';
import Box from '@material-ui/core/Box';
import quotes from './quotes.png';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) =>
  createStyles({
    container1: {
      display: 'flex',
    },
    container2: {
        position: 'relative',
        width: '50%',
    },
    quotes: {
        position: 'absolute',
        fontSize: '15px',
        top: 65,
        left: 20,
        width: '114%',
    },
    meet: {
        margin: 0,
        left: 0,
        top: 0,
    }
  }),
);

export default function BusinessBio() {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.container1}>
                <div style={{ width: '50%', paddingRight: 40 }}>
                    <div>
                        <h1 style={{ margin: 0 }}>
                            Dirt Cowboy Cafe
                        </h1>
                    </div>
                    <div style={{ fontSize: 14, paddingTop: 10 }}>
                        Since opening in 1993, we have been serving freshly roasted, individually brewed cups of coffee to over 500 discerning coffee drinkers a day. Situated right in the heart of Hanover, we are a favorite for Dartmouth students and Hanover locals alike. Every coffee is 100% Arabica beans freshly roasted to order. We love our customers, and we do everything we can to get you ready to take on the day. Think the Sumatran blend is too biting? We’ll lighten the roast! We don’t tell you what’s good — you tell us… and when the boss speaks, we listen!
                    </div>
                </div>
                <Box boxShadow={1} style={{ width: '50%', height: '288px', paddingTop: 10 }}>
                    <img src={dirtOwners} width='100%' height='100%'/>
                </Box>
            </div>
            <div style={{ display: 'inline-block' }}>
                <div style={{ display: 'inline-block' }}>
                    <h2 style={{ margin: 0, paddingTop: 10, paddingBottom: 10 }}>
                        Where's the Money Going?
                    </h2>
                    <div className={classes.container2}>
                        <img src={quotes} width='125%' style={{ margin: 0 }}/>
                        <div className={classes.quotes}>
                        We're struggling to scrape money together for rent. We would love to stay in Hanover, but may soon be left with no choice but to take business elsewhere. We would sincerely appreciate a microloan of $6000 to help us stay in this town near and dear to our hearts.
                        </div>
                    </div>
                </div>
                <div style={{ display: 'inline-block' }}>
                    <h2 className={classes.meet}>
                        Meet Chris and Layla
                    </h2>
                    <Button variant='contained'>Give a Loan, Save Big</Button>
                </div>
            </div>
        </div>
    )
}