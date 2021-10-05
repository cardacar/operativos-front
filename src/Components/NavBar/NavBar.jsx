import React, { useState } from "react";
import SideBar from "../SideBar/SideBar";
/* import { Link, useHistory } from "react-router-dom"; */
/* import { useStateValue} from "../StateProvider";
import { actionTypes} from "../reducer"; */
import {
  Bars,
  Nav,
  NavBtn,
  NavBtnLink,
  NavLink,
  NavMenu,
} from "./NavBarElement";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, IconButton } from "@mui/material";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isOpenClick = () => {
    setIsOpen(!isOpen);
  };

  /* const [{bascket, user}, dispatch] = useStateValue
    const history = useHistory(); */

  /* const hanldeAuth = ()=>{
        if(user){
            auth.signOut();
            dispatch({
                type: actionTypes.EMPTY_BASKET,
                basket: [],
            });
            history.push("/")
        }
    } */
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
        <NavLink to="/registerExams">Registrar Productos</NavLink>
        <NavLink to="/login">Perfil</NavLink>
      </NavMenu>
      <NavBtn>
        <IconButton>
          <Badge badgeContent={2} color="secondary">
            <ShoppingCartIcon color="primary" fontSize="large" />
          </Badge>
        </IconButton>
        <NavBtnLink to="/signin">Salir</NavBtnLink>
      </NavBtn>
    </Nav>
  );
};

export default NavBar;
