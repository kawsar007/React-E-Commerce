import { Grid } from "@material-ui/core";
import React from "react";
import Product from "./Product/Product";
import { makeStyles } from "@material-ui/core/styles";
// import laptop from '../images/laptop.jpg';
// import shose from '../images/shose.jpg';
// import laptop from './laptop.jpg';
// import shose from './laptop.jpg';

// const products = [
//     {id: 1, name: 'Shose', description: 'Note that the development build is not optimized.', price: '10$', img: {laptop}},
//     {id: 2, name: 'Laptop', description: 'Note that the development build is not optimized.', price: '200$', img: {shose}},
// ]

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    background_color: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
}));

const Products = ({ products }) => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>

    // <main className={classes.content}>
    //     <div className={classes.toolbar}/>
    // <Grid container justify="center" spacing={4}>
    //     {products.map((product) => (
    //         <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
    //             <Product product={product}/>
    //         </Grid>
    //     ))}
    // </Grid>
    // </main>
  );
};

export default Products;
