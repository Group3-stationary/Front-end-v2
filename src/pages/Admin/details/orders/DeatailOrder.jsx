import AdminNavbars from "../../../components/Admin/navbar/AdminNavbar";
import AdminSidebar from "../../../components/Admin/sidebar/AdminSidebar";
import "./detailorder.scss"
import { Container, Grid, Paper , TextField } from "@mui/material";

const DetailsOrder = ({inputs,title}) => {
  return (
    <div className="home">
    <AdminSidebar id={4} />
    <div className="homeContainer">
        <AdminNavbars title="Details Orders" />
        <div className="details sm md">
          <Container>
            <Paper>
              <Grid container spacing={2}>
                {inputs.map(input=>(
                <Grid item xs={12} md={12} sx={{margin:0.5}} key={input.id}>
                <TextField label={input.label} type={input.type} fullWidth size="small" name={input.name} placeholder={input.placeholder} InputProps={{readOnly: true}} InputLabelProps={{shrink: true}}
                ></TextField>
                </Grid>
                ))}
              </Grid>
            </Paper>
          </Container>
        </div>
      </div>
    </div>
  )
}

export default DetailsOrder