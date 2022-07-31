import "./listemployees.scss"
import AdminNavbars from "../../../components/Admin/navbar/AdminNavbar";
import AdminSidebar from "../../../components/Admin/sidebar/AdminSidebar";
import DataEmployees from "../../../components/Admin/dataTable/employees/dataEmployees";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const ListEmployees = () => {
  return (
    <div className="Emphome">
           <AdminSidebar id = {3}/>
           <div className="EmphomeContainer">
                <AdminNavbars title="List Employees"/>
                <Link to="/admin/employees/create" style={{ textDecoration: "none" }}>
                  <div className="btn-create-emp sm md">             
                    <Button variant="success">Create</Button>
                  </div>
                </Link>
                <DataEmployees/>    
           </div>
        </div>
  )
}

export default ListEmployees         