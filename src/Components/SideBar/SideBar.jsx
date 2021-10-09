import React, { Fragment } from "react";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import { Badge, IconButton } from "@mui/material";
import {
  SideBarContainer,
  CloseIconContainer,
  Icon,
  SideBarWrapper,
  SideBarRoute,
  SideBarMenu,
  SideBarLink,
  SideBtnWrap,
  SideBarRouteLogOut,
} from "./SideBarElement";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { actionTypes } from "../../reducer";

const SideBar = ({ isOpen, setIsOpen }) => {
  // eslint-disable-next-line no-unused-vars
  const [{ basket, user }, dispatch] = useStateValue();

  const history = useHistory();

  const closeSideBarHandle = () => {
    setIsOpen(!isOpen);
  };

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
    <SideBarContainer isopen={isOpen ? 1 : 0}>
      <Icon>
        <CloseIconContainer onClick={() => closeSideBarHandle()} />
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink to="home" onClick={() => closeSideBarHandle()}>
            Inicio
          </SideBarLink>
          <SideBarLink to="products" onClick={() => closeSideBarHandle()}>
            Productos
          </SideBarLink>
          {user ? (
            <Fragment>
              <SideBarLink
                to="registerExams"
                onClick={() => closeSideBarHandle()}
              >
                Registrar Productos
              </SideBarLink>
              <SideBarLink to="login" onClick={() => closeSideBarHandle()}>
                Perfil
              </SideBarLink>
            </Fragment>
          ) : null}
          <Link to="checkout">
            <IconButton onClick={() => closeSideBarHandle()}>
              <Badge badgeContent={basket?.length} color="secondary">
                <ShoppingCart color="primary" fontSize="large" />
              </Badge>
            </IconButton>
          </Link>
        </SideBarMenu>
        <SideBtnWrap>
          {user ? (
            <SideBarRouteLogOut
              onClick={() => {
                hanldeAuth();
                closeSideBarHandle();
              }}
            >
              LogOut
            </SideBarRouteLogOut>
          ) : (
            <SideBarRoute
              to="/signin"
              onClick={() => {
                closeSideBarHandle();
              }}
            >
              Login
            </SideBarRoute>
          )}
        </SideBtnWrap>
      </SideBarWrapper>
    </SideBarContainer>
  );
};

export default SideBar;
