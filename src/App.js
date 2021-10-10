import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import ProductGrid from "./Components/ProductGrid/ProductGrid";
import CheckoutPage from "./Components/CheckoutPage/CheckoutPage";
import Checkout from "./Pages/CheckoutPage/Checkout";
import AdminPage from "./Pages/AdminPage";
import SignIn from "./Pages/SignIn";
import { useEffect } from "react";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
import Fab from "@mui/material/Fab";
import CallIcon from "@mui/icons-material/Call";
import Link from '@mui/material/Link';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [{ basket, user }, dispatch] = useStateValue();

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token && token !== "") {
      dispatch({
        type: actionTypes.SET_USER,
        user: token.substring(0, 4),
      });
    }
  }, [dispatch, user]);

  return (
    <div className="App">
      <NavBar />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/products" exact component={ProductGrid} />
        <Route path="/checkout" exact component={CheckoutPage} />
        <Route path="/Total" exact component={Checkout} />
        <Route path="/admin" exact component={AdminPage} />
        <Route path="/signin" exact component={SignIn} />
      </Switch>
      <Link href="https://api.whatsapp.com/send?phone=573103969682&text=Gracias">
      
      <Fab
        aria-label="add"
        sx={{
          backgroundColor: "#00c000",
          position: "fixed",
          top: "80%",
          right: "5%",
          webkitBoxShadow: "11px 14px 34px 2px rgba(153,153,153,0.71)",
          boxShadow: "11px 14px 34px 2px rgba(153,153,153,0.71)",
        }}
        onClick={() => {
          console.log("click");
        }}
      >
        <CallIcon />
      </Fab>
        </Link>
    </div>
  );
}

export default App;
