import "./dataemployees.scss"
import { DataGrid  } from '@mui/x-data-grid';
import http from "../../../../../api/client";
import api from "../../../../../api/api";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {GetAllEmployee} from "../../../../../redux/epmloyee/employee.action";
import {RoleGetAll} from "../../../../../redux/role/role.action";
import { Button, Container } from "react-bootstrap";
import EditEmployee from "../../../../Admin/edit/employees/editEmployee";
import DetailsEmployee from "../../../../Admin/details/employees/DeatailEmployee";
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";


const DataEmployees = () => {
  
  const sta = useSelector((state) => state.roles.status)
  let navigate = useNavigate();
  const dispatch = useDispatch();

  //#region loading...
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

  //#region Call API Employee
  const getAllEmployee = async() => {
    try {
      const resEmp = await http.get(api.GetAllEmployee);
      dispatch(GetAllEmployee(resEmp.data));
    } catch (err) {
      navigate("/")
    } 
  }
  //#endregion

  //#region Call API Role
  const getAllRole = async() => {
    const resRoles = await http.get(api.GetAllRoles);
    dispatch(RoleGetAll(resRoles.data));
  }
  //#endregion

  useEffect(()=>{
    getAllRole();
    getAllEmployee();
  }, [])

  //Ham Handle
  const handleDelete = async(id) => {
    await http.delete(api.DeleteEmployee+id);
    getAllEmployee()
  }

  //Selector Employee
  const employee = useSelector((state) => state.employees.employees);
  //Selector Roles
  const roles = useSelector((state) => state.roles.roles);



  const categoryColumns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "name" , headerName : "Name" , width : 300,},
    { field: "email" , headerName : "Email" , width : 200,},
    { field: "phone" , headerName : "Phone" , width : 200,},
    { field: "department" , headerName : "Department" , width : 100,},
    { field: "role" , headerName : "Role" , width : 100,},
    {field : "action" , headerName: "Action" , width:300,
      renderCell:(params)=>{
        return (
          <div className="cellAction">
            <DetailsEmployee employee={params.row}/>     
            <Button className="deleteButton" variant="outlined" onClick={() => {handleDelete(params.row.id)}}>Delete</Button>
          </div>
        )
      }
    }
  ]



  const dataRow = employee.map((item) => {
    let rol = roles.find(e => e.roleId === item.roleId);
    if (rol === undefined) {
      rol = {
        roleName: ""
      }
    }
    return {
      id: item.employeeId,
      name: item.employeeName,
      email: item.email,
      phone: item.phone,
      department: item.department,
      gender: item.gender,
      address: item.address,
      superiors: item.superiors,
      birthday: item.birthday,
      role: rol.roleName,
      isAdmin: item.isAdmin
    }
  })

  const categoryRows = [...dataRow]


  return (
    <div className="datatableEmployee">
       <Render status={sta}/>
    </div>
  )
}

export default DataEmployees