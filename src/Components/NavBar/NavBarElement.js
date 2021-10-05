import { styled } from "@mui/material/styles";
import { NavLink as Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

export const Nav = styled("nav")(({ theme }) => ({
  background: "#000",
  height: "80px",
  display: "flex",
  justifyContent: "space-between",
  padding: "0.5rem calc((100vw - 1000px) / 2)",
  zIndex: "10",
}));

export const NavLink = styled(Link)(({ theme }) => ({
  color: "#fff",
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  padding: "0 1rem",
  height: "100%",
  cursor: "pointer",

  "& .active": {
    color: "#15cdfc",
  },
}));

export const Bars = styled(MenuIcon)(({ theme }) => ({
  display: "none",
  color: "#fff",
  
  [theme.breakpoints.down("md")]: {
    display: "block",
    position: 'absolute',
    top: '0',
    right: '0',
    transform: "translate(-100%, 75%)",
    fontSize: '1.8rem',
    cursor: "pointer"
  },
}));

export const NavMenu = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    marginRight: "-24px",
    [theme.breakpoints.down("md")]: {
        display: "none"
    }
}));

export const NavBtn = styled("nav")(({theme})=>({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: "20%",
    marginRight: '24px',
    [theme.breakpoints.down("md")]: {
        display: "none"
    }
}))

export const NavBtnLink = styled(Link)(({theme})=>({
    borderRadius: '4px',
    background: '#256ce1',
    padding: '10px 22px',
    color: '#fff',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    textDecoration: 'none',

    '&:hover':{
        transition:'all 0.2s ease-in-out',
        background: '#fff',
        color: '#010606',
        
    }
}))