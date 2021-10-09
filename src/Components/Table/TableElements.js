import { styled } from "@mui/material/styles";
import { Table } from "@mui/material";

export const MyTableCustom = styled(Table)(({theme})=>({
    marginTop: theme.spacing(3),
    "& thead th": {
        fontWeight: "600",
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.light,
    },
    "& tbody td": {
      fontWeight: "300",
    },
    "& tbody tr:hover": {
      backgroundColor: "#fffbf2",
      cursor: "pointer",
    },
}))