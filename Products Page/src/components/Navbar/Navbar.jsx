import React, { useState, useEffect } from 'react'
import {AppBar, Toolbar, IconButton, Badge, Avatar, Button, MenuItem, Menu, Typography} from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons';
import logo from '../../assets/icon-big.png';
import useStyles from './styles';
import {Link, useNavigate, useLocation} from 'react-router-dom';

import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import * as actionType from '../../constants/actionTypes';

const Navbar = ({totalItems}) => {
    const classes = useStyles();
    const location = useLocation();

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const history = useNavigate();

    const logout = () => {
        dispatch({ type: actionType.LOGOUT });
    
        history.push('/auth');
    
        setUser(null);
    };
    
    useEffect(() => {
        const token = user?.token;

        if (token) {
            const decodedToken = decode(token);

            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    return (
        <>
        <AppBar position="fixed" className = {classes.appBar} color="inherit">
            <Toolbar>
                <Typography component = {Link} to = "/" varient="h6" className = {classes.title} color="inherit">
                    <img src = {logo} alt="Bargain Marketplace" height="25px" className = {classes.image}/>
                    BARGAIN MARKETPLACE
                </Typography>

                <Typography component = {Link} to = "/my-products" varient="h6" className = {classes.title} color="inherit">
                    MY PRODUCTS
                </Typography>

                <div className = {classes.grow} />
                {((location.pathname ==='/') || (location.pathname ==='/my-products')  )&& (
                <div className = {classes.button}>
                    <IconButton component = {Link} to = '/cart' aria-label = "Show Cart Items">
                        <Badge badgeContent = {totalItems} color = "secondary">
                            <ShoppingCart />
                             </Badge>
                    </IconButton>
                </div> )}
                {user?.result ? (
                <div className={classes.profile}>
                    <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
                    <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
                    <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                </div>
                ) : (
                <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                )}

            </Toolbar>

        </AppBar>
        </>

    )
}

export default Navbar
