import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import sb from './smallBusiness.jpg';
import shop from './shop.jpg';
import ra from './rightArrow.png';
import la from './leftArrow.png';
import Steps from './steps.js';

const useStyles = makeStyles((theme) =>
  createStyles({
    title: {
      paddingLeft: 40,
      fontSize: 50,
      paddingTop: 110,
      margin: 0,
    },
    subHeader: {
      textAlign: 'left',
      lineHeight: 1.5,
      center: 'center',
      fontSize: 24,
      margin: 0,
      paddingTop: 5,
      paddingLeft: 40,
      paddingBottom: 40,
      color: '#A3A3A3',
    },
  }),
);

export default function Title() {
    const classes = useStyles();

    return(
        <div>
            <div>
                <Typography className={classes.title} variant='h2'>
                    Save Money. Save Main Street.
                </Typography>
            </div>
            <div>
                <Typography className={classes.subHeader} variant='h4'>
                    With Agora's community based microlending solution.
                </Typography>
            </div>
            <div>
              <Steps />
            </div>
        </div>
    );
};

/*
<img src={sb} width='66.6%' />
                <Box className={classes.boxTop}>
                    <div padding-left='50'>
                        <Typography className={classes.text1} variant='h2'>
                            Give an upfront<br></br>microloan
                        </Typography>
                        <img src={la} width='60' height='auto' className={classes.arrow1}/>
                    </div>
                </Box>
                <Box className={classes.boxBottom}>
                    <div>
                        <Typography className={classes.text2} variant='h2'>
                            Get a longstanding discount
                        </Typography>
                        <img src={ra} width='60' height='auto' className={classes.arrow2}/>
                    </div>
                </Box>
                <img src={shop} width='66.6%' height='221'/> 
                
                boxTop: {
      height: 221,
      width: '33.4%',
      background: 'rgba(70, 190, 75, 0.3)',
      float: 'right',
    },
    boxBottom: {
      height: 221,
      width: '33.4%',
      backgroundColor: 'rgba(70, 190, 75, 0.3)',
      float: 'left',
    },
    text1: {
      display: 'flex',
      flex: 1,
      paddingTop: 60,
      paddingLeft: 60,
      fontSize: 25,
    },
    text2: {
      display: 'flex',
      textAlign: 'right',
      flex: 1,
      fontSize: 25,
      paddingRight: 60,
      paddingTop: 60,
    },
    container: {
      fontSize: '0',
    },
    arrow1: {
      paddingLeft: 50,
      paddingTop: 10,
    },
    arrow2: {
      paddingLeft: 200,
      paddingTop: 10,
    },
                
                */