import "./datacategories.scss"
import { DataGrid } from '@mui/x-data-grid';
import api from "../../../../../api/api";
import http from "../../../../../api/client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {RoleGetAll} from "../../../../../redux/role/role.action";
import { Button } from "react-bootstrap";
import { CircularProgress, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import EditRole from "../../../../Admin/edit/role/editRole";

const DataRoles = () => {

  const dispatch = useDispatch();
  let navigate = useNavigate();

  //#region  Loading compomnent
  const sta = useSelector((state) => state.roles.status)

  const Render = (props) => {
    if(props.status==="loading"){
      return (
        <Container className="loadingContainer">
          <div className="loading">
            <CircularProgress color="secondary" size={200}/>
          </div>            
        </Container>  
      )
    }else if(props.status==="done"){
      return(
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

  //#region call api roles
  const getAllRoles = async() => {
    try {
      const res = await http.get(api.GetAllRoles);
      dispatch(RoleGetAll(res.data));
    } catch (err) {
      navigate("/")
    }   
  }

  useEffect(()=>{
    getAllRoles();
  }, [])
  const roles = useSelector((state) => state.roles.roles);
  //#endregion

  const handleDelete = async(id) => {
    await http.delete(api.DeleteRole+id);
    getAllRoles()
  }

  

  const categoryColumns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "name" , headerName : "Role" , width : 400,},
    {field : "action" , headerName: "Action" , width:200,
      renderCell:(params)=>{
        return (
          <div className="cellAction">
            <EditRole role={params.row}/>      
            <Button className="deleteButton" variant="outlined" onClick={() => {handleDelete(params.row.id)}}>Delete</Button>
          </div>
        )
      }
    }
  ]


  const dataRow = roles.map((item) => {
    return {
      id: item.roleId,
      name: item.roleName,

    }
  })
  const categoryRows = [...dataRow]
  return (
    <div className="datatablecategory">
      <Render status={sta}/>
    </div>
  )
}

export default DataRoles