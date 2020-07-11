import React from 'react'
import { Link as RouterLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#448aff",
        [theme.breakpoints.down('sm')]: {
            display: "none",
        }
    },
    menuButton: {
        display: "none",
        [theme.breakpoints.down('sm')]: {
            display: "block",
        }
    },
    title: {
        fontFamily: "'Nanum Pen Script', cursive",
        flexGrow: 1,
        marginLeft: "23rem",
        [theme.breakpoints.down('sm')]: {
            marginLeft: "0rem",
        }

    },
    loggedInTitle: {
        fontFamily: "'Nanum Pen Script', cursive",
        fontSize: "2rem",
        flexGrow: 1,
        marginLeft: "46%",
        [theme.breakpoints.down('sm')]: {
            marginLeft: "0rem",
        }
    },
    userActions: {
        display: "block",
        fontFamily: "'Nanum Pen Script', cursive",
        fontSize: "1.5rem",
        [theme.breakpoints.down('sm')]: {
            display: "none",
        }
    },
    logoutIcon: {
        fontSize: "1.5rem"
    }
}));

function HeaderLogin(props) {
    const classes = useStyles();
    return (
        <>
            <CssBaseline />
            <AppBar >
                <Toolbar className={classes.root} >
                    <Typography variant="h6" className={classes.loggedInTitle}>
                        GIT-R-DONE
                    </Typography>
                    <Button
                        className={classes.userActions}
                        color="inherit"
                        component={RouterLink}
                        to="/"
                    >
                        Home
                    </Button>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default HeaderLogin