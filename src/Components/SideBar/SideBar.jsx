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

const SideBar = ({ isOpen, setIsOpen }) => {
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
          <IconButton>
            <Badge badgeContent={2} color="secondary">
              <ShoppingCart color="primary" fontSize="large" />
            </Badge>
          </IconButton>
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
