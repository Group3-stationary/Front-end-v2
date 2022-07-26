import React, {useState} from "react";

import {
    Dialog, 
    DialogTitle,
    TextField,
    FormControl,
    Grid,
    Button,
    InputLabel,
    Select,
    MenuItem
} from "@mui/material";
import { GetAllEmployee } from "../../../../redux/epmloyee/employee.action";
import {useDispatch,useSelector} from "react-redux";
import axios from "axios";
import API from "../../../../api/api";

function EditEmployee(props){

    //Call API
    const dispatch = useDispatch();
    const api = axios.create({
        baseURL: API.GetAllEmployee,
    })
        
    const getAllEmployee = async() => {
        const res = await api.get("/Employees");
        dispatch(GetAllEmployee(res.data))
    }

    //Birthday
    const [birthday, setBirthday] = useState(props.employee.birthday.substring(0, 10))

    const handleChangeBirthday = (e) => {
        setBirthday(e.target.value)
        setEmployee((pre)=> ({
            ...pre,
            Birthday: birthday
        }))
    }

    //Role
    const [role, setRole] = useState(props.employee.roles)

    const handleChangeRole = (e) => {
        setRole(e.target.value)
        setEmployee((pre) => ({
            ...pre,
            Role: e.target.value
        }))

    }

    //Superior
    const superior = useSelector((state) => state.employee)
    
    const handleChangeSuperior = (e) => {
        setEmployee((pre) => ({
            ...pre,
            Superiors: e.target.value
        }))
    }

    //Department

    const handleChangeDepartment = (e) => {
        setEmployee((pre) => ({
            ...pre,
            Department: e.target.value
        }))
    }
    
    //State Employee
    const [employee, setEmployee] = useState({
        EmployeeId: props.employee.id,
        EmployeeName: props.employee.name,
        Email: props.employee.email,
        Address: props.employee.address,
        Birthday: props.employee.birthday,
        Department: "Engineer",
        Phone: "",
        Superiors: 1,
        IsAdmin: true,
        Password: "",
        Role: props.employee.role
    })

    const handleChange = (e)=>{
        setEmployee(preItem=>({
            ...preItem,
            [e.target.name]:e.target.type === "checkbox" ?e.target.checked: e.target.value
        }))
    }

    //Role Selector
    const roles = useSelector((state) => state.roles.roles)
    //HandleEdit
    const handleEdit = async() => {
        const res = await api.put("/UpdateEmployee", employee)
        setOpenDialog(false)
        getAllEmployee()
    }
    const [isOpen, setOpenDialog] = useState(false);

    const handleOpen = () => {
        setOpenDialog(true)
    }

    const handleClose = () => {
        setEmployee(pre => ({
            ...pre,
            EmployeeId: props.employee.id,
            EmployeeName: props.employee.name,
            Email: props.employee.email,
            Address: props.employee.address,
            Birthday: props.employee.birthday,
            Department: "Engineer",
            Phone: props.employee.phone,
            Superiors: 1,
            IsAdmin: true,
            Password: "",
            Role: props.employee.role
        }))
        setOpenDialog(false)
    }
    return (
        <div>
        <Button className="editButton" variant="outlined" onClick={handleOpen}>Edit</Button> 
        <Dialog open={isOpen} maxWidth="lg" fullWidth>
            <DialogTitle textAlign="center">Create New Employee</DialogTitle>
            <Grid
            container
            p={4}
            spacing={2}
            
            >
                <Grid item md={4}>
                    <TextField label="Employee ID" variant="outlined" className="InputField" fullWidth 
                    inputProps={{readOnly: true}} defaultValue={props.employee.id}></TextField>
                </Grid>
                <Grid item md={4}>
                    <TextField label="Name" variant="outlined" className="InputField" name="EmployeeName" fullWidth defaultValue={props.employee.name} 
                    onChange={handleChange}></TextField>
                </Grid>
                <Grid item md={4}>
                    <TextField label="Email" variant="outlined" className="InputField" fullWidth defaultValue={props.employee.email}
                    onChange={handleChange} name="Email"></TextField>
                </Grid>
                <Grid item md={4}>
                    <TextField label="Address" variant="outlined" className="InputField" fullWidth defaultValue={props.employee.address}
                    onChange={handleChange} name="Address"></TextField>
                </Grid>
                <Grid item md={4}>
                    <TextField label="Phone" variant="outlined" className="InputField" fullWidth defaultValue={props.employee.phone}
                    onChange={handleChange} name="Phone"></TextField>
                </Grid>
                <Grid item md={4}>
                <TextField
                id="date"
                label="Birthday"
                type="date"
                defaultValue={birthday}
                fullWidth
                onChange={handleChangeBirthday}
                />
                </Grid>
                <Grid item md={4}>
                    <TextField label="Password" variant="outlined" className="InputField" fullWidth type="password"
                    onChange={handleChange} name="Password"></TextField>
                </Grid>
                <Grid item md={4}>
                    <TextField label="Gender" variant="outlined" className="InputField" fullWidth defaultValue={props.employee.gender}></TextField>
                </Grid>
                <Grid item md={4}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Department</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select1"
                        value={"Engineer"}
                        label="Department"
                        onChange={handleChangeDepartment}
                        >
                            <MenuItem value={"Engineer"}>Engineer</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item md={4}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Superior</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select2"
                        value={10}
                        label="Superior"
                        onChange={handleChangeSuperior}                      
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item md={4}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Role</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select3"
                        value={role}
                        label="Role" 
                        onChange={handleChangeRole}                     
                        >
                            {roles.map(role => (
                                <MenuItem value={role.roleName} key={role.roleId}>{role.roleName}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>               
                <Grid container item md={12} direction="row" justifyContent="center" alignItems="center">                  
                    <Button variant="contained" sx={{marginRight: "20px", width: "250px"}} onClick={handleEdit}>Update</Button>
                    <Button variant="outlined" sx={{width: "250px"}} onClick={handleClose}>Cancle</Button>
                </Grid>
                
            </Grid>
        </Dialog>
        </div>
    )
}


export default EditEmployee;