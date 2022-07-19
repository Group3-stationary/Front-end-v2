import AdminNavbars from "../../../components/Admin/navbar/AdminNavbar";
import AdminSidebar from "../../../components/Admin/sidebar/AdminSidebar";
import "./detailemployee.scss";
import { Box, Button, Container, FormControl, FormControlLabel, FormLabel, Grid, InputLabel, MenuItem, Paper, Radio, RadioGroup, Select, TextField } from "@mui/material";
import { useState } from 'react';
import { useNavigate } from "react-router";


const DetailsEmployee = ({inputs,title}) => {

    
    const [role, setRole] = useState("1");
    const [value, setValue] = useState(false);
    
    const handleChangeRole = (event) => {
        setRole(event.target.value);
      };
    
    const handleChange = (event) => {
        setValue(event.target.value);
      };

    let navigate = useNavigate();

  return (
    <div className="home">
    <AdminSidebar id={3} />
    <div className="homeContainer">
        <AdminNavbars title="Details Employee" />
        <div className="details sm md">
          <div className="left">
            <img src={require('../../../../assets/images/no-image-icon-0.jpg')} alt=""/>
          </div>
          <div className="right">
          <Container>
                    <Paper>
                        <Grid container spacing={2}>
                          <Grid item xs={12} md={12} sx={{margin:0.5}}>
                            <TextField label= "User ID"type="text" fullWidth size="small" name="userid" value="1" InputProps={{readOnly: true}} InputLabelProps={{shrink: true}}
                            ></TextField>
                          </Grid>
                            {inputs.map(input=>(
                            <Grid item xs={12} md={12} sx={{margin:0.5}} key={input.id}>
                                <TextField label={input.label} type={input.type} fullWidth size="small" placeholder={input.placeholder} name={input.name} InputProps={{readOnly: true}} InputLabelProps={{shrink: true}}></TextField>
                            </Grid>
                                ))}
                            <Grid item xs={12} md={12} sx={{margin:0.5}}>
                                    <Box sx={{ minWidth: 120 }}>
                                    <FormControl fullWidth size="small" disabled>
                                        <InputLabel id="demo-simple-select-label">Role</InputLabel>
                                        <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={role}
                                        label="Role"
                                        onChange={handleChangeRole}
                                        >
                                        
                                        <MenuItem value={1}>Assistant</MenuItem>
                                        <MenuItem value={2}>User</MenuItem>
                                        </Select>
                                    </FormControl>
                                    </Box>
                            </Grid>
                            
                            <Grid item xs={12} md={12} sx={{margin:0.5}}>
                                <FormControl>
                                    <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
                                    <RadioGroup
                                    aria-labelledby="demo-controlled-radio-buttons-group"
                                    name="controlled-radio-buttons-group"
                                    value={value}
                                    onChange={handleChange}>
                                    <FormControlLabel value={true} control={<Radio />} label="MALE" disabled />
                                    <FormControlLabel value={false} control={<Radio />} label="FEMALE" disabled/>
                                    </RadioGroup>
                                </FormControl>
                            </Grid>  
                            <Grid item>
                              <Button sx={{marginLeft:40,marginBottom:1}} variant="contained" color="error"
                              onClick={() => { navigate("/admin/users")}} >Back</Button>
                            </Grid>      
                        </Grid>

                    </Paper>
                </Container>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailsEmployee