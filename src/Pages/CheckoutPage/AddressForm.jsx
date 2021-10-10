import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useFormContext, Controller } from "react-hook-form";

export default function AddressForm() {
  const { control } = useFormContext();
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Datos personales
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Controller
            control={control}
            name="firstName"
            render={({ field }) => (
              <TextField
                required
                id="firstName"
                name="firstName"
                label="Nombres"
                fullWidth
                autoComplete="given-name"
                variant="standard"
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* <Controller
            control={control}
            name="name"
            render={({field})=>(

            )}
            /> */}
          <Controller
            control={control}
            name="lastName"
            render={({ field }) => (
              <TextField
                required
                id="lastName"
                name="lastName"
                label="Apellidos"
                fullWidth
                autoComplete="family-name"
                variant="standard"
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            control={control}
            name="address1"
            render={({ field }) => (
              <TextField
                required
                id="address1"
                name="address1"
                label="Direccion"
                fullWidth
                autoComplete="shipping address-line1"
                variant="standard"
                {...field}
              />
            )}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Controller
            control={control}
            name="city"
            render={({ field }) => (
              <TextField
                required
                id="city"
                name="city"
                label="Ciudad"
                fullWidth
                autoComplete="shipping address-level2"
                variant="standard"
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            control={control}
            name="state"
            render={({ field }) => (
              <TextField
                id="state"
                name="state"
                label="Departamento"
                fullWidth
                variant="standard"
                {...field}
              />
            )}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Controller
            control={control}
            name="country"
            render={({ field }) => (
              <TextField
                required
                id="country"
                name="country"
                label="Ciudad"
                fullWidth
                autoComplete="shipping country"
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
