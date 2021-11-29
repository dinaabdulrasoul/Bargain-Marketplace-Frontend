import React from 'react'
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from '@material-ui/core';
import {CallMissedSharp, ShoppingCart} from '@material-ui/icons';
import { mergeClasses } from '@material-ui/styles';
import logo from '../../assets/icon-big.png';
import useStyles from './styles';

const Navbar = ({totalItems}) => {
    const classes = useStyles();
    return (
        <>
        <AppBar position="fixed" className = {classes.appBar} color="inherit">
            <Toolbar>
                <Typography varient="h6" className = {classes.title} color="inherit">
                    <img src = {logo} alt="Bargain Marketplace" height="25px" className = {classes.image}/>
                    Bargain Marketplace
                </Typography>
                <div className = {classes.grow} />
                <div className = {classes.button}>
                    <IconButton aria-label = "Show Cart Items">
                        <Badge badgeContent = {totalItems} color = "secondary">
                            <ShoppingCart />
                             </Badge>
                    </IconButton>

                </div>
            </Toolbar>

        </AppBar>
        </>

    )
}

export default Navbar
