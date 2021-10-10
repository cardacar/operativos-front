import React, { Fragment, useState, useEffect } from "react";
import {
  Grid,
  Paper,
  TableBody,
  TableRow,
  TableCell,
  Toolbar,
  InputAdornment,
  Typography,
  Divider,
  TextField,
  Button,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import useTable from "../Components/Table/useTable";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ModalAddProduct from "../Components/Modals/ModalAddProduct";
import AddProduct from "../Components/Modals/AddProduct";
import {getProductAxios, deleteProductAxios} from '../Services/productService'


const productColumn = [
  { id: "code", label: "Codigo" },
  { id: "name", label: "Nombre" },
  { id: "price", label: "Precio" },
  { id: "stock", label: "Stock" },
  { id: "category", label: "Categoria" },
  { id: "actions", label: "Acciones" },
];

const AdminPage = () => {
  const [data, setData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });
  const [openEditOrAdd, setOpenEditOrAdd] = useState(false);
  //const [openMoreData, setOpenMoreData] = useState(false);
  //const [allData, setAllData] = useState(null);
  const [dataEdit, setDataEdit] = useState(null);

  const handleOpenModal = () => {
    setOpenEditOrAdd(false);
    setOpenModal(!openModal);
  };
  const handleOpenModalEdit = (item) => {
    setDataEdit(item);
    setOpenEditOrAdd(true);
    setOpenModal(!openModal);
  };

  useEffect(() => {
    getProductAxios().then((product)=>{
      if(product.status === 200){
        setData(product.data);
      }
    })
  }, [setData]);

  const {
    TblContainer,
    TablePaginationCustom,
    TblHead,
    dataAfterPagingAndSorting,
  } = useTable(data, productColumn, filterFn);

  const handleSearch = (e) => {
    let target = e.target;
    setFilterFn({
      fn: (item) => {
        if (target.value === "") return item;
        else
          return item.filter((x) =>
            x.name.toLowerCase().includes(target.value)
          );
      },
    });
  };

  const onDelete = (item) => {
    deleteProductAxios(item)
  };

  return (
    <Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ m: 5, p: 3 }}>
            <Grid container item xs={11}>
              <Typography variant="h6" component="h5">
                Busque el producto que desea
              </Typography>
            </Grid>
            <Divider variant="middle" />
            <br />
            <Toolbar>
              <TextField
                variant="outlined"
                label="Buscar dato"
                sx={{ width: "80%" }}
                onChange={handleSearch}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="end">
                      <Search />
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                variant="outlined"
                startIcon={<AddIcon />}
                sx={{ position: "absolute", right: "10px", p: 2 }}
                onClick={() => {
                  handleOpenModal();
                  setDataEdit(null);
                }}
              >
                Agregar
              </Button>
            </Toolbar>
            <TblContainer>
              <TblHead />
              <TableBody>
                {dataAfterPagingAndSorting().map((data) => (
                  <TableRow key={data.id}>
                    <TableCell>{data.code}</TableCell>
                    <TableCell>{data.name}</TableCell>
                    <TableCell>{data.price}</TableCell>
                    <TableCell>{data.stock}</TableCell>
                    <TableCell>{data.category}</TableCell>
                    <TableCell>
                      <Button
                        color="primary"
                        onClick={() => {
                          handleOpenModalEdit(data);
                        }}
                      >
                        <EditIcon />
                      </Button>
                      <Button
                        color="primary"
                        onClick={() => {
                          onDelete(data.id);
                        }}
                      >
                        <DeleteIcon />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </TblContainer>
            <TablePaginationCustom />
          </Paper>
        </Grid>
      </Grid>
      <ModalAddProduct
        title={"Agregar un producto"}
        openModal={openModal}
        setOpen={setOpenModal}
      >
        <AddProduct edit={openEditOrAdd} dataForEdit={dataEdit} />
      </ModalAddProduct>
    </Fragment>
  );
};

export default AdminPage;
