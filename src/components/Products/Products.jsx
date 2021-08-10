import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";

const products = [
  {
    id: 1,
    name: "Shoes",
    description: "Travis Scott x Fragment x Air Jordan 1",
    price: "$170",
    image:
      "https://sneakerbardetroit.com/wp-content/uploads/2021/07/Travis-Scott-Fragment-Air-Jordan-1-Low-DM7866-140-Release-Date.jpg",
  },
  {
    id: 2,
    name: "Shoes",
    description: "Nike Dunk Low Black Multi Camo",
    price: "$110",
    image:
      "https://sneakerbardetroit.com/wp-content/uploads/2021/07/Nike-Dunk-Low-Black-Multi-Camo-DH0957-001-Release-Date.jpg",
  },
];

const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
