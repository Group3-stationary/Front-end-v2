
import "./listproduct.scss"
import DataProduct from "../../../components/Admin/dataTable/product/dataProduct";
import AdminSidebar from "../../../components/Admin/sidebar/AdminSidebar";
import AdminNavbars from "../../../components/Admin/navbar/AdminNavbar";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ListProduct = () => {
  return (
    <div className="home">
           <AdminSidebar id = {2}/>
           <div className="homeContainer">
                <AdminNavbars title="List Product"/>
                <Link to="/admin/products/create" style={{ textDecoration: "none" }}>
                  <div className="btn-create sm md">
                    <Button variant="success">Create</Button>
                  </div>
                </Link>
                <DataProduct/>    
           </div>
        </div>
  )
}

export default ListProduct         