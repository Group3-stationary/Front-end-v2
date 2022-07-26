import "./dataproduct.scss";
import { DataGrid } from "@mui/x-data-grid";
import http from "../../../../../api/client";
import api from "../../../../../api/api";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductGetAll } from "../../../../../redux/product/product.action";
import { CategoriesGetAll } from "../../../../../redux/category/category.action";
import { Button, Container } from "react-bootstrap";
import EditProduct from "../../../../Admin/edit/products/editProduct";
import { RoleGetAll } from "../../../../../redux/role/role.action";
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";


const DataProduct = () => {

  const dispatch = useDispatch();
  let navigate = useNavigate();
  
  //#region Loading compomnent
  const sta = useSelector((state) => state.products.status)

  const Render = (props) => {
    if (props.status === "loading") {
      return (
        <Container className="loadingContainer">
          <div className="loading">
            <CircularProgress color="secondary" size={200} />
          </div>
        </Container>
      )
    } else if (props.status === "done") {
      return (
        <DataGrid
          rows={categoryRows}
          columns={categoryColumns}
          pageSize={10}
          rowsPerPageOptions={[10]}

        />
      )
    }
  }
  //#endregion
  
  //Call API GetAllCategory
  const getAllCategory = async () => {
    try {
      const res = await http.get(api.GetAllCategory);
      dispatch(CategoriesGetAll(res.data))
    } catch (err) {
      navigate("/")
    }
  }

  //Call API GetAllProduct
  const getAllProduct = async () => {
    const res = await http.get(api.GetAllProduct);
    dispatch(ProductGetAll(res.data))
  }

  //#region  api Roles
  const getAllRole = async () => {
    
    const resRoles = await http.get(api.GetAllRoles);
    dispatch(RoleGetAll(resRoles.data));
  }

  //#endregion

  useEffect(() => {
    getAllCategory();
    getAllProduct();
    getAllRole();
  }, [])

  const handleDelete = async (id) => {
   await http.delete(api.DeleteProduct+id);
    getAllProduct()
  }

  //Selector product
  const items = useSelector((state) => state.products.products);
  //Selector category
  const cate = useSelector((state) => state.categories.categories);
  //Selector roles
  const roles = useSelector((state) => state.roles.roles);
  const categoryColumns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "name", headerName: "Product Name", width: 300, },
    { field: "quantity", headerName: "Quanity", width: 100 },
    { field: "price", headerName: "Price", width: 100 },
    {
      field: 'productImage', headerName: 'Images', width: 200,


      renderCell: (params) => {

        return (
          <div className="cellWithImg">
            {params.row.productImage != null ?
              (
                <img className="cellImg" src={params.row.productImage} alt="avatar" />
              )
              :
              null}
          </div>

        )
      }


    },
    { field: "category", headerName: "Category", width: 100 },
    { field: "role", headerName: "Role", width: 100 },
    { field: "status", headerName: "Status", width: 100 },
    {
      field: "action", headerName: "Action", width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <EditProduct className="editButton" item={params.row} />
            <Button className="deleteButton" variant="outlined" onClick={() => { handleDelete(params.row.id) }}>Delete</Button>
          </div>
        )
      }
    }
  ]

  
  const dataRow = items.map((item) => {
    let rol = roles.find(e => e.roleId === item.roleId);
    if (rol === undefined) {
      rol = {
        roleName: ""
      }
    }
    let cateName = cate.find(e => e.categotyId === item.categoryId);
    if (cateName === undefined) {
      cateName = {
        categotyName: ""
      }
    }
    let image = null;
    if (item.featureImgPath !== null) {
      image = "http://localhost:8832/" + item.featureImgPath;
    }
    return {
      id: item.productId,
      name: item.productName,
      quantity: item.quantity,
      price: item.price,
      productImage: image,
      category: cateName.categotyName,
      role: rol.roleName,
      status: item.productEnable,
      cateId: item.categoryId,
      roleId: item.roleId,
      featureImgPath: item.featureImgPath,
    }
  })

  const categoryRows = [...dataRow]
  return (
    <div className="datatableproduct">
       <Render status={sta}/>
    </div>
  )
}

export default DataProduct