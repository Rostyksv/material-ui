import React from 'react'
import {Typography, AppBar, Toolbar} from '@material-ui/core';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';

function Header() {
    return (
        <AppBar position="relative">
            <Toolbar>
            <PhotoCameraIcon />
            <Typography variant='h6'>NASA</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header;
