import React from 'react';
import DirtCoffee from './dirtCoffee.png';
import Goal from './goal.png';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { createMuiTheme, MuiThemeProvider, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
        display: 'flex',
        paddingBottom: 18,
    },
    columnLeft: {
        float: 'left',
        width: '70%',
    },
    columnRight: {
        float: 'right',
        width: '30%',
        paddingTop: 10,
    },
  }),
);

// Change default color palette
const theme = createMuiTheme({
  typography: {
    button: {
      textTransform: "none",
    },
  },
  palette: {
    primary: {
      main: "#40B144",
    },
    secondary: {
      main: "#7E7E7E",
    },
  },
});


export default function Give() {
    const classes = useStyles();

    return(
        <div className={classes.container}>
        <MuiThemeProvider theme={theme}>
            <div style={{ display: 'block' }}>
                <div>
                    <div className={classes.columnLeft}>
                        <Box boxShadow={1} width='570px' height='277px'>
                            <img src={DirtCoffee} width='100%' />
                        </Box>
                    </div>
                    <div className={classes.columnRight}>
                        <img src={Goal} width='90%' />
                        <div style={{ paddingTop: 10}}>
                            <h1 style={{ margin: 0 }}>$3950</h1>
                            <Typography color='secondary'>
                                <h4 style={{ margin: 0 }}>loaned of $6000 goal</h4>
                            </Typography>
                        </div>
                        <div style={{ paddingTop: 10 }}>
                            <h1 style={{ margin: 0 }}>46</h1>
                            <Typography color='secondary'>
                                <h4 style={{ margin: 0 }}>lenders</h4>
                            </Typography>
                        </div>
                        <div style={{ paddingTop: 10 }}>
                            <h1 style={{ margin: 0 }}>25</h1>
                            <Typography color='secondary'>
                                <h4 style={{ margin: 0 }}>days to go</h4>
                            </Typography>
                        </div>
                    </div>
                </div>
                <div style={{ display: 'block', float: 'left', paddingTop: 20 }}>
                    <Typography style={{ fontSize: '35px', paddingTop: 10, paddingBottom: 10 }}>Choose Your Microloan and Discount</Typography>
                    <div style={{ display: 'flex', paddingTop: 20 }}>
                        <div style={{ textAlign: 'center', paddingLeft: 90 }}>
                            <Button variant='outlined' color='primary' size='large' style={{ paddingLeft: 25, paddingRight: 25 }}>$50</Button>
                            <p>for <b>10%</b> off every purchase <br />for <b>3</b> months</p>
                        </div>
                        <div style={{ textAlign: 'center', paddingLeft: 90 }}>
                            <Button variant='outlined' size='large' color='primary'>$100</Button>
                            <p>for <b>12%</b> off every purchase <br />for <b>6</b> months</p>
                        </div>
                        <div style={{ textAlign: 'center', paddingLeft: 90 }}>
                            <Button variant='outlined' size='large' color='primary'>$200</Button>
                            <p>for <b>15%</b> off every purchase <br />for <b>1</b> year</p>
                        </div>
                    </div>
                </div>
            </div>
        </MuiThemeProvider>
        </div>
    )
}