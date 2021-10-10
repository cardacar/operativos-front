import React, {useState, useEffect} from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Product from "../Product/Product";
import {Products} from '../../ProductData'
import {getProductAxios} from '../../Services/productService'


const ProductGrid = () => {
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    getProductAxios().then((product)=>{
      if(product.status===200){
        setProductData(product.data)
      }
    })
  }, [])


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
