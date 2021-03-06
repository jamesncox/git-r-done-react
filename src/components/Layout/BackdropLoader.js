import React, { useState } from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

export default function BackdropLoader() {
    const classes = useStyles();
    const [open] = useState(true);

    return (
        <div>
            <Backdrop className={classes.backdrop} open={open}>
                <CircularProgress thickness={4} color="inherit" />
            </Backdrop>
        </div>
    );
}