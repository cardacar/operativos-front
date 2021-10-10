import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AddShoppingCart from "@mui/icons-material/AddShoppingCart";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import StarIcon from "@mui/icons-material/Star";
import {useStateValue} from '../../StateProvider';
import {actionTypes} from '../../reducer'
import Coffe from "../../assets/coffe.jpg";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Product({
  product: { id, price,stock, code, name, description },
}) {
  const [expanded, setExpanded] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [{basket}, dispatch] = useStateValue();
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };



  /* code: "",
  name: "",
  description: "",
  imgReference: "",
  category: 0,
  price: 0,
  stock: 0, */
  const addToBasket = ()=>{
    dispatch({
      type: actionTypes.ADD_TO_BASKET,
      item:{
        id,
        name,
        productType:code,
        image: Coffe,
        price,
        description,
      }
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
        subheader={stock}
      />
      <CardMedia component="img" height="194" image={Coffe} alt="Coffe" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {code}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Comprar" onClick={addToBasket}>
          <AddShoppingCart />
        </IconButton>
        <IconButton aria-label="rating">
          {Array(4)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} color="primary" />
            ))}
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
