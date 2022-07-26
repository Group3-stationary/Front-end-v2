import "./listroles.scss"
import DataRoles from "../../../components/Admin/dataTable/role/dataRole";
import AdminNavbars from "../../../components/Admin/navbar/AdminNavbar";
import AdminSidebar from "../../../components/Admin/sidebar/AdminSidebar";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const ListRoles = () => {
  return (
    <div className="home">
      <AdminSidebar id={5} />
      <div className="homeContainer">
        <AdminNavbars title="List Roles" />
        <Link to="/admin/roles/create" style={{ textDecoration: "none" }}>
          <div className="btn-create sm md">
            <Button variant="success">Create</Button>
          </div>
        </Link>
        <DataRoles />
      </div>
    </div>
  )
}

export default ListRoles         