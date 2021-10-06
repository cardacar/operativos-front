import ShoppingCart from "@mui/icons-material/ShoppingCart";
import { Badge, IconButton } from "@mui/material";
import React from "react";
import {
  SideBarContainer,
  CloseIconContainer,
  Icon,
  SideBarWrapper,
  SideBarRoute,
  SideBarMenu,
  SideBarLink,
  SideBtnWrap,
} from "./SideBarElement";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";

const SideBar = ({ isOpen, setIsOpen }) => {
  // eslint-disable-next-line no-unused-vars
  const [{ basket }, dispatch] = useStateValue();

  const closeSideBarHandle = () => {
    setIsOpen(!isOpen);
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
          <SideBarLink to="home" onClick={() => closeSideBarHandle()}>
            Inicio
          </SideBarLink>
          <SideBarLink to="products" onClick={() => closeSideBarHandle()}>
            Productos
          </SideBarLink>
          <SideBarLink to="registerExams" onClick={() => closeSideBarHandle()}>
            Registrar Productos
          </SideBarLink>
          <SideBarLink to="login" onClick={() => closeSideBarHandle()}>
            Perfil
          </SideBarLink>
          <Link to="checkout">
            <IconButton onClick={() => closeSideBarHandle()}>
              <Badge badgeContent={basket?.length} color="secondary">
                <ShoppingCart color="primary" fontSize="large" />
              </Badge>
            </IconButton>
          </Link>
        </SideBarMenu>
        <SideBtnWrap>
          <SideBarRoute to="/home" onClick={() => closeSideBarHandle()}>
            Salir
          </SideBarRoute>
        </SideBtnWrap>
      </SideBarWrapper>
    </SideBarContainer>
  );
};

export default SideBar;
