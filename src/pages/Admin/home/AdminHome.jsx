import "./adminhome.scss";
import Sidebar from "../../components/Admin/sidebar/AdminSidebar";
import Navbars from "../../components/Admin/navbar/AdminNavbar";
import Widget from "../../components/Admin/widget/Widget";
import Featured from "../../components/Admin/featured/Featured";
import Chart from "../../components/Admin/chart/Chart";
const AdminHome = () =>{
    return(
        <div className="home">
           <Sidebar id={0}/>
           <div className="homeContainer">
                <Navbars title="Home"/>
                <div className="widgets">
                    <Widget type="user"/>
                    <Widget type="order"/>
                    <Widget type="earning"/>
                    <Widget type="balance"/>
                </div>
                <div className="charts">
                    <div className="fea">
                        <Featured/>
                    </div>
                    <div className="chart">
                        <Chart/>
                    </div>    
                </div>
           </div>
        </div>
    )
}

export default AdminHome