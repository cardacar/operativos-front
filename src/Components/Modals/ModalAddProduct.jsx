import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Button,
} from "@mui/material";
/* import Control from "../Control/Control"; */
import CloseIcon from "@mui/icons-material/Close";

const ModalAddProduct = (props) => {
  const { title, children, openModal, setOpen } = props;

  return (
    <Dialog open={openModal} maxWidth="md">
      <DialogTitle>
        <div style={{ display: "flex" }}>
          <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
            {title}
          </Typography>

          <Button color="secondary" onClick={() => setOpen(false)}>
            <CloseIcon />
          </Button>
        </div>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
};

export default ModalAddProduct;
