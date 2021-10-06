import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import {useStateValue} from '../../StateProvider';
import {actionTypes} from '../../reducer'

const CheckoutCard = ({
  product: { id, price, productType, name, rating, image, description },
}) => {
  // eslint-disable-next-line no-unused-vars
  const [{basket}, dispatch] = useStateValue(); 
  const removeItem = ()=>{
    dispatch({
      type: actionTypes.REMOVE_ITEM,
      id
    })
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <Typography
            sx={{ marginTop: "1rem" }}
            variant="h5"
            color="text.secondary"
          >
            ${price}
          </Typography>
        }
        title={name}
        subheader="En stock"
      />
      <CardMedia component="img" height="194" image={image} alt="Coffe" />
      <CardActions
        disableSpacing
        sx={{ display: "flex", justifyContent: "space-between", textAlign:"center" }}
      >
        <Box>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} color="primary" />
            ))}
        </Box>
        <IconButton onClick={removeItem}>
          <DeleteIcon color="primary" />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default CheckoutCard;
