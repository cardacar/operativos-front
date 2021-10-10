import React from "react";
import { Box, Button } from "@mui/material";
import { getBasketTotal } from "../../reducer";
import { useStateValue } from "../../StateProvider";
import {Link} from 'react-router-dom'

const Total = () => {
  // eslint-disable-next-line no-unused-vars
  const [{ basket }, dispatch] = useStateValue();
  
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "20vh",
      }}
    >
      <h5>Total items: {basket?.length}</h5>
      <h5>${getBasketTotal(basket)}</h5>
      <Link to="/Total">
      <Button sx={{ mt: 3 }} variant="contained" color="secondary">
        Comprar
      </Button>
      </Link>
    </Box>
  );
};

export default Total;
