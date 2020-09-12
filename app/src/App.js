import React from 'react';
import MenuBar from './Header.js';
import Title from './title.js';
import BusinessMenu from './BizMenu.js';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      width: '935px',
      margin: 'auto',
    },
    divider: {
      paddingTop: 50,
    }
  }),
);

function App() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div>
        <MenuBar>
        </MenuBar>
      </div>
      <div>
        <Title>
        </Title>
      </div>
      <div className={classes.divider}>
        <BusinessMenu>
        </BusinessMenu>
      </div>
      <div className={classes.divider}>
      </div>
    </div>
  );
}

export default App;
