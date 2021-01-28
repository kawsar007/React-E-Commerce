import React from 'react';
import { AppBar, Badge, IconButton, Toolbar, Typography } from '@material-ui/core'
import logo from '../images/logo.jpg';
import { Link, useLocation } from 'react-router-dom';

import useStyles from './Styles';
import { ShoppingCart } from '@material-ui/icons';

const Navbar = ({totalItem}) => {
    const classes = useStyles();
    const location = useLocation();
    return (
        <>
          <AppBar position="fixed" className={classes.appBar} color="inherit">
             <Toolbar>
                 <Typography component={Link} to='/' variant="h6" className={classes.title} color="inherit">
                    <img src={logo} alt="Commerce.js" height="25px" className={classes.image}/>
                    e-commerce
                 </Typography>
                 <div className={classes.grow}/>
                 {location.pathname === '/' && <div className={classes.button}>
                     <IconButton component={Link} to='/cart' aria-label="show cart items" color="inherit">
                         <Badge badgeContent={totalItem} color="secondary">
                             <ShoppingCart />
                         </Badge>
                     </IconButton>
                 </div>
                 }
                 
             </Toolbar>
          </AppBar>
        </>
    )
}

export default Navbar;
