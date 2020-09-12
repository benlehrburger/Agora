import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import logo from './logo.jpg';

// Change default color palette
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#46BE4B",
    },
    secondary: {
      main: "#FFFFFF",
    },
  },
});

// Set styles
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      textAlign: 'center',
    },
    logo: {
      width: 50,
      height: 55, 
      paddingTop: 8,
    }
  }),
);

// Create login icon
function UserIcon() {
  return (
    <div>
      <IconButton
        color="primary"
      >
        <AccountCircle />
      </IconButton>
    </div>
  )
}

// Initialize menu bar at top of home page
export default function MenuBar() {
  const classes = useStyles();

  return (
    <div 
      className={classes.root}
    >
    <MuiThemeProvider 
      theme={theme}
    >
      <AppBar 
        position="fixed" 
        color="secondary"
      >
        <Toolbar>
          <IconButton 
            edge="start" 
            className={classes.menuButton} 
            color="primary"
          >
            <MenuIcon />
          </IconButton>
          <div 
            className={classes.title}
          >
            <img 
              src={logo} 
              className={classes.logo}
            >
            </img>
          </div>
          <UserIcon 
            color="primary"
          >
          </UserIcon>
        </Toolbar>
      </AppBar>
    </MuiThemeProvider>
    </div>
  );
}