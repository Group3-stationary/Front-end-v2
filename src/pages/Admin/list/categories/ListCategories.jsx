import "./listcategories.scss"
import Datacategories from "../../../components/Admin/dataTable/categories/dataCategories";
import AdminNavbars from "../../../components/Admin/navbar/AdminNavbar";
import AdminSidebar from "../../../components/Admin/sidebar/AdminSidebar";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const ListCategories = () => {
  return (
    <div className="Catehome">
      <AdminSidebar id={1} />
      <div className="CatehomeContainer">
        <AdminNavbars title="List Categories" />
        <Link to="/admin/categories/create" style={{ textDecoration: "none" }}>
          <div className="btn-create-cate sm md">
            <Button variant="success">Create</Button>
          </div>
        </Link>
        <Datacategories />
      </div>
    </div>
  )
}

export default ListCategories         