import React, { useState, useEffect } from 'react'
import {AppBar, Toolbar, IconButton, Badge, Avatar, Button, MenuItem, Menu, Typography} from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons';
import logo from '../../assets/icon-big.png';
import useStyles from './styles';
import {Link, useNavigate, useLocation} from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import LockOpenIcon from '@mui/icons-material/LockOpen';

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
                <Typography component = {Link} to = "/" varient="h5" className = {classes.title} color="inherit"
                style={{ letterSpacing: 2,  fontFamily: 'Monospace', fontSize: 16   }}>
                    <img src = {logo} alt="Bargain Marketplace" height="25px" className = {classes.image}/>
                    BARGAIN MARKETPLACE
                </Typography>

                {((location.pathname !=='/'))&& (
                <Typography component = {Link} to = "/" varient="h5" className = {classes.title} color="inherit" 
                style={{ letterSpacing: 3, fontSize: 16 }}>
                    SHOP
                </Typography> ) }

                {((location.pathname !=='/auth'))&& (
                <div>
                {user?.result ? (
                <div className={classes.profile}>
                    <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
                    <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
                    <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button> 
                </div>
                ) : (
                <Button component={Link} to="/auth" style = {{backgroundColor: "white", color: "black",fontFamily: 'Monospace', fontSize:16}}>
                    Sign In
                    <LockOpenIcon/>
                    </Button>
                )}
                </div> )}


                <div className = {classes.grow} />
                {((location.pathname !=='/cart'))&& (
                <div className = {classes.button}>
                    <Button component = {Link} to = '/cart' aria-label = "Add Product" style = {{fontFamily: 'Monospace',letterSpacing: 2, fontSize:16}}>
                        Add Product
                            <AddIcon />
                    </Button>

                    <IconButton component = {Link} to = '/cart' aria-label = "Show Cart Items">
                        <Badge badgeContent = {totalItems} color = "secondary">
                            <ShoppingCart />
                             </Badge>
                    </IconButton>
                </div> )}

            </Toolbar>

        </AppBar>
        </>

    )
}

export default Navbar
