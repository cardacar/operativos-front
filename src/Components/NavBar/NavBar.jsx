import React, { useState, Fragment } from "react";
import SideBar from "../SideBar/SideBar";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { actionTypes } from "../../reducer";
import {
  Bars,
  Nav,
  NavBtn,
  NavBtnLink,
  NavLink,
  NavMenu,
  LogOutBtn,
} from "./NavBarElement";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, IconButton } from "@mui/material";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isOpenClick = () => {
    setIsOpen(!isOpen);
  };
  // eslint-disable-next-line no-unused-vars
  const [{ basket, user }, dispatch] = useStateValue();

  const history = useHistory();

  const hanldeAuth = () => {
    if (user) {
      window.localStorage.removeItem("token");
      dispatch({
        type: actionTypes.EMPTY_BASKET,
        basket: [],
      });
      dispatch({
        type: actionTypes.SET_USER,
        user: null,
      });
      history.push("/");
    }
  };
  return (
    <Nav>
      <NavLink to="/">
        <h1>Logo</h1>
      </NavLink>
      <Bars onClick={() => isOpenClick()} />

      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <NavMenu>
        <NavLink to="/home">Inicio</NavLink>
        <NavLink to="/products">Productos</NavLink>
        {user? (
          <Fragment>

            <NavLink to="/registerProduct">Registrar Productos</NavLink>
            <NavLink to="/login">Perfil</NavLink>
          </Fragment>
        ):null}
      </NavMenu>
      <NavBtn>
        <Link to="checkout">
          <IconButton>
            <Badge badgeContent={basket?.length} color="secondary">
              <ShoppingCartIcon color="primary" fontSize="large" />
            </Badge>
          </IconButton>
        </Link>
        {user ? (
          <LogOutBtn onClick={hanldeAuth}>LogOut</LogOutBtn>
        ) : (
          <NavBtnLink to="/signin">Login</NavBtnLink>
        )}
        {/* <NavBtnLink to="/signin">Login</NavBtnLink> */}
      </NavBtn>
    </Nav>
  );
};

export default NavBar;
