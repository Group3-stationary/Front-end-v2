import AdminNavbars from "../../../components/Admin/navbar/AdminNavbar";
import AdminSidebar from "../../../components/Admin/sidebar/AdminSidebar";
import "./createproducts.scss"
//import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { useState } from 'react';
import { Box, Button, Container, FormControl, FormControlLabel, FormLabel, Grid, InputLabel, MenuItem, Paper, Radio, RadioGroup, Select, Stack, TextField } from "@mui/material";
import { useNavigate } from "react-router";

const CreateProduct = ({ inputs, title }) => {
    const [cate, setCate] = useState("");
    const [file, setFile] = useState("");
    const [value, setValue] = useState("0");
    let navigate = useNavigate();

    const handleChange = (event) => {
        setValue(event.target.value);
    };


    const handleChangeCate = (event) => {
        setCate(event.target.value);
    };
    return (
        <div className="home">
            <AdminSidebar id={2} />
            <div className="homeContainer">
                <AdminNavbars title="Create Category" />
                <div className="create sm md">
                    <div className="left">
                        <img src={file ? URL.createObjectURL(file) : require('../../../../assets/images/avatar-1577909_1280.webp')} alt="" />
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
                                        <TextField label="Long Description" type="text" fullWidth size="small" name="longdescription" placeholder="......" multiline
                                        ></TextField>
                                    </Grid>
                                    <Grid item xs={12} md={12} sx={{ margin: 0.5 }}>
                                        <Box sx={{ minWidth: 120 }}>
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={cate}
                                                    label="Category"
                                                    onChange={handleChangeCate}
                                                >
                                                    <MenuItem value={10}>Ten</MenuItem>
                                                    <MenuItem value={20}>Twenty</MenuItem>
                                                    <MenuItem value={30}>Thirty</MenuItem>
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
                                            <FormLabel id="demo-controlled-radio-buttons-group">Product Status</FormLabel>
                                            <RadioGroup
                                                aria-labelledby="demo-controlled-radio-buttons-group"
                                                name="controlled-radio-buttons-group"
                                                value={value}
                                                onChange={handleChange}>
                                                <FormControlLabel value="0" control={<Radio />} label="IN STOCK" />
                                                <FormControlLabel value="1" control={<Radio />} label="OUT OF STOCK" />
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>

                                    <Grid item>
                                        <Button sx={{ marginLeft: 40, marginBottom: 1 }} variant="contained">Create</Button>
                                        <Button sx={{ marginLeft: 1, marginBottom: 1 }} variant="contained" color="error"
                                            onClick={() => { navigate("/admin/products") }} >Back</Button>
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

export default CreateProduct