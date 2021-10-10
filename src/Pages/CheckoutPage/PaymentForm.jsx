import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useFormContext, Controller } from "react-hook-form";

export default function PaymentForm() {
  const { control } = useFormContext();
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Metodo de pago
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Controller
            control={control}
            name="cardName"
            render={({ field }) => (
              <TextField
                required
                id="cardName"
                name="cardName"
                label="Nombre en la tarjeta"
                fullWidth
                autoComplete="cc-name"
                variant="standard"
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Controller
            control={control}
            name="cardNumber"
            render={({ field }) => (
              <TextField
                required
                id="cardNumber"
                name="cardNumber"
                label="Numero de la tarjeta"
                fullWidth
                autoComplete="cc-number"
                variant="standard"
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Controller
            control={control}
            name="expDate"
            render={({ field }) => (
              <TextField
                required
                id="expDate"
                name="expDate"
                label="Fecha de expiracion"
                fullWidth
                autoComplete="cc-exp"
                variant="standard"
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Controller
            control={control}
            name="cvv"
            render={({ field }) => (
              <TextField
                required
                id="cvv"
                name="cvv"
                label="CVV"
                helperText="Los 3 digitos atras de la tarjeta"
                fullWidth
                autoComplete="cc-csc"
                variant="standard"
                {...field}
              />
            )}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
