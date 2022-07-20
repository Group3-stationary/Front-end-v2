import React from 'react'
import UserNavbars from '../../components/User/Navbar/Navbar';
import Products from '../../components/User/Product/Products';
import UserSidebar from '../../components/User/Sidebar/UserSidebar';
import { Col, Row } from "react-bootstrap";
import "./userhome.scss";
const UserHome = () => {
  return (
    <div className="userhome">
      <UserNavbars />
      <div className="userhome-bottom">
        <Col md={2} sm={2}>
          <div className="categories">
            <UserSidebar />
          </div>
        </Col>
        <div className="products">
          <Products />
        </div>
      </div>
    </div>
  )
}
export default UserHome;