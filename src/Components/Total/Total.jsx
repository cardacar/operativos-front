import React from "react";
import { Box, Button } from "@mui/material";

const Total = () => {
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
      <h5>Total items: 3</h5>
      <h5>$50000</h5>
      <Button sx={{mt: 3}} variant="contained" color="secondary">
        Comprar
      </Button>
    </Box>
  );
};

export default Total;
