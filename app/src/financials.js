import React from 'react';
import FinancialScore from './FinancialScore.png';
import Employees from './Employees.png';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Revenue from './revenue.png';
import Score from './Score.png';
import { createMuiTheme, MuiThemeProvider, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    header: {
        margin: 0,
        paddingBottom: 10,
        fontSize: '30px',
    },
    columnLeft: {
        float: 'left',
        width: '50%',
    },
    columnRight: {
        float: 'right',
        width: '50%',
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
      main: "#4AC337",
    },
    secondary: {
      main: "#FFFFFF",
    },
  },
});

export default function Financials() {
    const classes = useStyles();

    return(
        <div style={{ paddingBottom: 20 }}>
        <MuiThemeProvider theme={theme}>
            <div className={classes.columnLeft}>
                <div>
                    <Typography className={classes.header}>Company Info</Typography>
                </div>
                <div style={{ paddingLeft: 20 }}>
                    <div style={{ display: 'flex' }}>
                        <h3 style={{  margin: 0, paddingTop: 12 }}>
                            Incorporation Status:
                        </h3>
                        <p style={{ paddingLeft: 10 }}>
                            Sole proprietorship
                        </p>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <h3 style={{  margin: 0, paddingTop: 12 }}>
                            Equity Structure:
                        </h3>
                        <p style={{ paddingLeft: 10 }}>
                            Owned entirely by Chris and Layla
                        </p>
                    </div>
                    <div style={{ display: 'flex', paddingTop: 12 }}>
                        <h3 style={{  margin: 0 }}>
                            Number of employees:
                        </h3>
                        <img src={Employees} style={{ width: 100, height: 25, paddingLeft: 10 }} />
                    </div>
                    <div style={{ display: 'flex' }}>
                        <h3 style={{  margin: 0, paddingTop: 23 }}>
                            Agora Investment Risk Assessment:
                        </h3>
                        <img src={Score} style={{ width: 40, height: 40, paddingLeft: 10, paddingTop: 15 }} />
                    </div>
                </div>
                <div style={{ paddingLeft: 60, paddingTop: 25 }}>
                    <img src={FinancialScore} width='70%' />
                </div>
                <p style={{ padding: 10, paddingTop: 20, paddingRight: 50, fontSize: '13px', textAlign: 'center' }}>
                    The AIRA shows how likely this business is to go under in the next fiscal year based on previous and projected revenue, financial report, and local economy.
                </p>
                <div style={{ paddingLeft: 100, paddingTop: 8, paddingBottom: 15 }}>
                    <Typography>
                        <Button variant="contained" type="button">Small Business Report</Button>
                    </Typography>
                </div>
            </div>
            <div className={classes.columnRight}>
                <div style={{ paddingLeft: 0 }}>
                    <div>
                        <Typography className={classes.header}>Financial Details</Typography>
                    </div>
                    <div style={{ paddingLeft: 20 }}>
                        <div style={{ display: 'flex' }}>
                            <h3 style={{  margin: 0, paddingTop: 12 }}>
                                Monthly revenue:
                            </h3>
                            <p style={{ paddingLeft: 10 }}>
                                $17,000
                            </p>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <h3 style={{  margin: 0, paddingTop: 12 }}>
                                Cash on hand:
                            </h3>
                            <p style={{ paddingLeft: 10 }}>
                                $22,000
                            </p>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <h3 style={{  margin: 0, paddingTop: 12 }}>
                                Business valuation:
                            </h3>
                            <p style={{ paddingLeft: 10 }}>
                                $350,000
                            </p>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <h3 style={{  margin: 0, paddingTop: 12 }}>
                                Percentage Change in Monthly Revenue
                            </h3>
                        </div>
                    </div>
                </div>
                <div style={{ paddingTop: 20, paddingLeft: 15 }}>
                    <img src={Revenue} width='90%' />
                </div>
                <div style={{ paddingLeft: 150, paddingTop: 25, paddingBottom: 15 }}>
                    <Typography>
                        <Button variant="contained">Financial Report</Button>
                    </Typography>
                </div>
            </div>
        </MuiThemeProvider>
        </div>
    )
}