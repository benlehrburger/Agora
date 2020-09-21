import React from 'react';
import Box from '@material-ui/core/Box';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) =>
  createStyles({
    button: {
        paddingLeft: 380,
        paddingTop: 10,
    },
  }),
);


export default function Footer() {
    const classes = useStyles();

    return(
        <Box width='100%' bgcolor="#EFEFEF" height="75px">
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
        </Box>
    )
}