import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { getBasketTotal } from "../../reducer";
import { useStateValue } from "../../StateProvider";

export default function Review(props) {
  const { methods } = props;
  // eslint-disable-next-line no-unused-vars
  const [{ basket }, dispatch] = useStateValue();
  console.log(methods.getValues("firstName"));
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Resumen de la compra
      </Typography>
      <List disablePadding>
        {basket?.map((product) => (
          <ListItem key={product.id} sx={{ py: 1, px: 0 }}>
            <ListItemText
              primary={product.name}
              secondary={product.productType}
            />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            ${getBasketTotal(basket)}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Comprador
          </Typography>
          <Typography gutterBottom>Nombre</Typography>
          <Typography variant="body2" sx={{ fontWeight: 700 }}>
            {methods.getValues("firstName")} {methods.getValues("lastName")}
          </Typography>
          <Typography gutterBottom>Direccion</Typography>
          <Typography gutterBottom variant="body2" sx={{ fontWeight: 700 }}>
            Direccion {methods.getValues("address1")}
          </Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Detalles de compra
          </Typography>
          <Grid container>
            <React.Fragment>
              <Grid item xs={6}>
                <Typography gutterBottom>Tipo de tarjeta</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>Visa</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>Nombretarjeta</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>
                  {methods.getValues("cardName")}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>Numero tarjeta</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>xxxx-xxxx-xxxx-1234</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>Expiracion</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>
                  {methods.getValues("expDate")}
                </Typography>
              </Grid>
            </React.Fragment>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
