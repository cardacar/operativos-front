import React, { Fragment} from "react";
import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import {createProductAxios, putProductAxios} from '../../Services/productService'

const initialValues = {
  code: "",
  name: "",
  description: "",
  imgReference: "",
  category: 0,
  price: 0,
  stock: 0,
};

const AddProduct = (props) => {
  const { edit, dataForEdit } = props;
/* useEffect(() => {
    
    
  }, [dataForEdit]); */

  const { control, handleSubmit } = useForm({ defaultValues: dataForEdit ?  dataForEdit: initialValues });

  const onSubmit = (data) => {
    console.log(data);
    if(edit){
      putProductAxios(data);
    }else{
      let newCategory = data.category
      data.category= parseInt(newCategory, 10)
      createProductAxios(data);

    }
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card variant="outlined" sx={{ width: "300px" }}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Controller
                  name="code"
                  control={control}
                  render={({ field }) => (
                    <TextField required fullWidth label="Codigo" {...field} />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <TextField required fullWidth label="Nombre" {...field} />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="description"
                  control={control}
                  render={({ field }) => (
                    <TextField required fullWidth label="Descripcion" {...field} />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="category"
                  control={control}
                  render={({ field }) => (
                    <TextField required fullWidth label="Categoria" type="number" {...field} />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="price"
                  control={control}
                  render={({ field }) => (
                    <TextField required fullWidth label="Precio" type="number"{...field} />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="stock"
                  control={control}
                  render={({ field }) => (
                    <TextField required fullWidth label="Stock" type="number" {...field} />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="imgReference"
                  control={control}
                  render={({ field }) => (
                    <TextField required fullWidth label="Imagen"  {...field} />
                  )}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button variant="contained" type="submit">
            {edit ? "Editar" : "Guardar"}
          </Button>
        </div>
      </form>
    </Fragment>
  );
};

export default AddProduct;
