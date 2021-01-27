import React from 'react';
import { AppBar, Badge, IconButton, Toolbar, Typography } from '@material-ui/core'
import logo from '../images/logo.jpg';

import useStyles from './Styles';
import { ShoppingCart } from '@material-ui/icons';

const Navbar = () => {
    const classes = useStyles();
    return (
        <>
          <AppBar position="fixed" className={classes.appBar} color="inherit">
             <Toolbar>
                 <Typography variant="h6" className={classes.title} color="inherit">
                    <img src={logo} alt="Commerce.js" height="25px" className={classes.image}/>
                    e-commerce
                 </Typography>
                 <div className={classes.grow}/>
                 <div className={classes.button}>
                     <IconButton aria-label="show cart items" color="inherit">
                         <Badge badgeContent={2} color="secondary">
                             <ShoppingCart />
                         </Badge>
                     </IconButton>
                 </div>
             </Toolbar>
          </AppBar>
        </>
    )
}

export default Navbar;
