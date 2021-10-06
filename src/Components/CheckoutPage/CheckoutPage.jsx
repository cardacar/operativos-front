import React, { Fragment } from "react";
import { Grid, Typography, Box } from "@mui/material";
import CheckoutCard from "../CheckoutCard/CheckoutCard";
/* import {useStateValue} from '../StateProvider'; */
import Total from '../Total/Total'
import { Products } from "../../ProductData";

const CheckoutPage = () => {
  /* const [{basket}, dispatch] = useStateValue */

  const FormRow = () => {
    return (
      <Fragment>
        {Products.map((item) => (
          <Grid key={item.id} item xs={12} sm={8} md={6} lg={4}>
            <CheckoutCard product={item} />
          </Grid>
        ))}
      </Fragment>
    );
  };

  return (
    <Fragment>
      <Box sx={{ flexGrow: 1, p: 2 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography align="center" gutterBottom variant="h4">
              Carrito de compras
            </Typography>
          </Grid>
          <Grid item xs={12} sm={8} md={9} container spacing={2}>
            <FormRow />
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Typography align="center" gutterBottom variant="h4">
              <Total/>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default CheckoutPage;
