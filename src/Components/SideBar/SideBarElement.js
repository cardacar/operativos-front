import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import { Link  } from "react-router-dom";

export const SideBarContainer = styled("aside")(({ theme, isopen }) => ({
  position: "fixed",
  zIndex: "999",
  width: "100%",
  height: "100%",
  background: "#0d0d0d",
  display: "grid",
  alignItems: "center",
  left: "0",
  transition: "0.3s ease-in-out",
  opacity: isopen ? "100%": "0",
  top: isopen ? "0": "-100%",
}));

export const CloseIconContainer = styled(CloseIcon)(({ theme }) => ({
  color: "#fff",
}));

export const Icon = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "1.2rem",
  right: "1.5rem",
  background: "transparent",
  fontSize: "2rem",
  cursor: "pointer",
  outline: "none",
}));

export const SideBarWrapper = styled("div")(({ theme }) => ({
  color: "#fff",
}));

export const SideBarMenu = styled("ul")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "repeat(6, 80px)",
  textAlign: "center",
  [theme.breakpoints.down("sx")]: {
    gridTemplateRows: "repeat(6, 80px)",
  },
}));

export const SideBarLink = styled(Link)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1.5rem",
  textDecoration: "none",
  listStyle: "none",
  transition: "0.2s ease-in-out",
  color: "#fff",
  cursor: "pointer",

  "&:hover": {
    color: "#01bf71",
    transition: "0.2s ease-in-out",
  },
}));

export const SideBtnWrap = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
}));

export const SideBarRoute = styled(Link)(({ theme }) => ({
  borderRadius: "50px",
  background: "#01bf71",
  whiteSpace: "nowrap",
  padding: "10px 64px",
  color: "#010606",
  fontSize: "16px",
  outline: "none",
  border: "none",
  cursor: "pointer",
  transition: "all 0.2s ease-in-out",
  textDecoration: "none",

  "&:hover": {
    transition: "all 0.2s ease-in-out",
    background: "#fff",
    color: "#010606",
  },
}));
