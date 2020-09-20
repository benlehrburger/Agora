import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LoanTable from './loanTable.js'
import MenuBar from './Header.js';


const useStyles = makeStyles((theme) =>
  createStyles({
    table: {
      paddingTop: 70,
    }
  }),
);

export default function LoanPage() {
  const classes = useStyles();

  return (
    <div>
      <div>
        <MenuBar>
        </MenuBar>
      </div>
      <div className={classes.table}>
        <LoanTable />
      </div>
    </div>
  )
}