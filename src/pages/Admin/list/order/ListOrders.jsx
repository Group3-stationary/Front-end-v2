import "./listorders.scss"
import AdminSidebar from "../../../components/Admin/sidebar/AdminSidebar";
import AdminNavbars from "../../../components/Admin/navbar/AdminNavbar";
import DataOrders from "../../../components/Admin/dataTable/orders/dataOrders";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const ListOrders = () => {
  return (
    <div className="home">
           <AdminSidebar id = {4}/>
           <div className="homeContainer">
                <AdminNavbars title="List Order"/>
                <Link to="/admin/orders/create" style={{ textDecoration: "none" }}>
                <div className="btn-create sm md">
                  <Button variant="success">Create</Button>
                </div>
                </Link>
                <DataOrders/>    
           </div>
        </div>
  )
}

export default ListOrders        