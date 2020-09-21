import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Saver from './saver.png';
import Discounter from './discounter.png';
import Giver from './giver.png';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) =>
    createStyles({
        caption: {
            fontSize: '18px',
        },
    }),
);

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#AF32E5",
    },
    secondary: {
      main: "#EFEFEF",
    },
  },
});

export default function Steps() {
    const classes = useStyles();
    
    return(
        <MuiThemeProvider theme={theme}>
        <div style={{ display: 'flex' }}>
            <Box width='100%' height="300px" bgcolor="secondary.main"  style={{ display: 'flex' }}>
                <div style={{ textAlign: 'center', maxWidth: '250px', paddingTop: 45, paddingLeft: 105 }}>
                    <img src={Giver} width='150px' />
                    <Typography className={classes.caption}>
                        <p>Give your favorite small business a microloan</p>
                    </Typography>
                </div>
                <div style={{ textAlign: 'center', maxWidth: '200px', paddingTop: 39 }}>
                    <img src={Discounter} width='130px' />
                    <Typography className={classes.caption}>
                        <p>Get a longstanding discount</p>
                    </Typography>
                </div>
                <div style={{ textAlign: 'center', maxWidth: '250px', paddingTop: 40 }}>
                    <img src={Saver} width='130px' />
                    <Typography className={classes.caption}>
                        <p>Make a return on your investment with each purchase</p>
                    </Typography>
                </div>
            </Box>
        </div>
        </MuiThemeProvider>
    )
}