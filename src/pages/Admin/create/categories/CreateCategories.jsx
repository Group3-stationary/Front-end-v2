import AdminNavbars from "../../../components/Admin/navbar/AdminNavbar";
import AdminSidebar from "../../../components/Admin/sidebar/AdminSidebar";
import "./createcategories.scss";
import { Container, Grid, Paper } from '@mui/material';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { useNavigate } from "react-router";

const CreateCategory = ({ inputs, title }) => {
    let navigate = useNavigate();

    return (
        <div className="home">
            <AdminSidebar id={1} />
            <div className="homeContainer">
                <AdminNavbars title="Create Categories" />
                <div className="create sm md">
                <Container>
                    <Paper>
                        <Grid container spacing={2}>
                            {inputs.map(input => (
                                <Grid item xs={12} md={12} sx={{ margin: 0.5 }} key={input.id}>
                                    <TextField label={input.label} type={input.type} fullWidth size="small" placeholder={input.placeholder} name={input.name}></TextField>
                                </Grid>
                            ))}
                            <Grid item>
                                <Button sx={{ marginLeft: 60, marginBottom: 1 }} variant="contained">Create</Button>
                                <Button sx={{ marginLeft: 1, marginBottom: 1 }} variant="contained" color="error"
                                    onClick={() => { navigate("/admin/categories") }} >Back</Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Container>
                </div>
            </div>
        </div>
    )
}

export default CreateCategory

