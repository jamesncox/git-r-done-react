import React, { useState } from 'react';
import { connect } from 'react-redux'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';

import PostAddIcon from '@material-ui/icons/PostAdd';

const useStyles = makeStyles((theme) => ({
    root: {

    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}))

function AddCategory(props) {
    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const [category, setCategory] = useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setCategory('')
    }

    // const handleName = (e) => {
    //     setName(e.target.value)
    // }

    // const handleColor = (color) => {
    //     setColor(color)
    // }

    const handleChange = (event) => {
        setCategory(event.target.value);
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault()

    //     const store = {
    //         name: name,
    //         storeType: storeType,
    //         color: color,
    //         userId: props.user.id
    //     }

    //     props.createStore(store)
    //     setName("")
    //     setStoreType("")
    //     setColor("")
    // }

    return (
        <div>
            <PostAddIcon onClick={handleClickOpen} />
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <Grid container component={Paper} justify="space-between">
                    <DialogTitle>Select Category</DialogTitle>
                    <DialogContent>
                        <form className={classes.container}>
                            <FormControl className={classes.formControl}>
                                <InputLabel id="demo-dialog-select-label">Categories</InputLabel>
                                <Select
                                    labelId="demo-dialog-select-label"
                                    id="demo-dialog-select"
                                    value={category}
                                    onChange={handleChange}
                                    input={<Input />}
                                >
                                    <MenuItem value={"Work"}>Work</MenuItem>
                                    <MenuItem value={"Family"}>Family</MenuItem>
                                    <MenuItem value={"Chores"}>Chores</MenuItem>
                                    <MenuItem value={"Fun"}>Fun</MenuItem>
                                    <MenuItem value={"Wellness"}>Wellness</MenuItem>
                                    <MenuItem value={"Dreading"}>Dreading</MenuItem>
                                </Select>
                            </FormControl>
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Ok
                        </Button>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                    </DialogActions>
                </Grid>
            </Dialog>
        </div>
    );
}

export default AddCategory