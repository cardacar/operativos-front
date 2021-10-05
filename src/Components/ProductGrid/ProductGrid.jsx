import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Product from "../Product/Product";
import { Products } from "../../ProductData";
const ProductGrid = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={2}>
        {Products.map((product, index) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductGrid;
