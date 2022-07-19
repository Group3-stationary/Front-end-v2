import React from "react";
import { SidebarData } from "../../../Data/Data";
import LogoutIcon from "@mui/icons-material/Logout";
import "./adminsidebar.scss";
import { Link } from "react-router-dom";
const AdminSidebar = (prop) => {
    return (
        <div className="Adminsidebar">
            <div className="top">
                <span className="logo">Admin</span>
            </div>
            <div className="center">

                {SidebarData.map((item, index) => {
                    return (
                        <Link to={item.link} style={{ textDecoration: "none" }}  key={index}>
                            <div className={ index === prop.id  ?  "menuItem active" : "menuItem"}                        
                            >
                                <div className="icon">
                                    <item.icon />
                                </div>
                                <span>{item.heading}</span>
                            </div>
                        </Link>
                    );
                })}

                <div className="menuItem">
                    <div className="icon">
                        <LogoutIcon />
                    </div>
                    <span>Logout</span>
                </div>
            </div>
            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        </div>
    )
}

export default AdminSidebar