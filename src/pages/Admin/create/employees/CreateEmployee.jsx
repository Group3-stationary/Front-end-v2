import "./createemployee.scss"
import AdminNavbars from "../../../components/Admin/navbar/AdminNavbar";
import AdminSidebar from "../../../components/Admin/sidebar/AdminSidebar";
import { useState } from 'react';
import { Box, Button, Container, FormControl, FormControlLabel, FormLabel, Grid, InputLabel, MenuItem, Paper, Radio, RadioGroup, Select, Stack, TextField } from "@mui/material";
import { useNavigate } from "react-router";

const CreateEmployee = ({ inputs, title }) => {

    const [file, setFile] = useState("");
    const [role, setRole] = useState("");
    const [value, setValue] = useState(false);
    let navigate = useNavigate();

    const handleChangeRole = (event) => {
        setRole(event.target.value);
    };

    const handleChange = (event) => {
        setValue(event.target.value);
    };


    return (
        <div className="home">
            <AdminSidebar id={3} />
            <div className="homeContainer">
                <AdminNavbars title="Create Employee" />
                <div className="create sm md">
                    <div className="left">
                        <img src={file ? URL.createObjectURL(file) : require('../../../../assets/images/no-image-icon-0.jpg')} alt="" />
                    </div>
                    <div className="right">
                        <Container>
                            <Paper>
                                <Grid container spacing={2}>
                                    {inputs.map(input => (
                                        <Grid item xs={12} md={12} sx={{ margin: 0.5 }} key={input.id}>
                                            <TextField label={input.label} type={input.type} fullWidth size="small" placeholder={input.placeholder} name={input.name}></TextField>
                                        </Grid>
                                    ))}
                                    <Grid item xs={12} md={12} sx={{ margin: 0.5 }}>
                                        <Box sx={{ minWidth: 120 }}>
                                            <FormControl fullWidth size="small">
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
                                    <Grid item xs={12} md={12} sx={{ margin: 0.5 }}>
                                        <Stack direction="row" spacing={2}>
                                            <Button variant="contained" component="label">
                                                Upload Images
                                                <input hidden accept="image/*" id="file" type="file" onChange={e => setFile(e.target.files[0])} />
                                            </Button>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12} md={12} sx={{ margin: 0.5 }}>
                                        <FormControl>
                                            <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
                                            <RadioGroup
                                                aria-labelledby="demo-controlled-radio-buttons-group"
                                                name="controlled-radio-buttons-group"
                                                value={value}
                                                onChange={handleChange}>
                                                <FormControlLabel value={true} control={<Radio />} label="MALE" />
                                                <FormControlLabel value={false} control={<Radio />} label="FEMALE" />
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>
                                    <Grid item>
                                        <Button sx={{ marginLeft: 40, marginBottom: 1 }} variant="contained">Create</Button>
                                        <Button sx={{ marginLeft: 1, marginBottom: 1 }} variant="contained" color="error"
                                            onClick={() => { navigate("/admin/users") }} >Back</Button>
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

export default CreateEmployee