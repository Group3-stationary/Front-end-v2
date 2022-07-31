import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
//user
import UserHome from "./pages/User/Home/UserHome";
import Cart from "./pages/User/Cart/Cart";
//import { useGridSelector } from "@mui/x-data-grid";
import React from "react";
// Admin
import AdminHome from "./pages/Admin/home/AdminHome";
import ListProduct from "./pages/Admin/list/product/ListProduct";
import ListCategories from "./pages/Admin/list/categories/ListCategories";
import ListOrders from "./pages/Admin/list/order/ListOrders";
import ListEmployees from "./pages/Admin/list/employees/ListEmployees";
import CreateCategory from "./pages/Admin/create/categories/CreateCategories";
import CreateProduct from "./pages/Admin/create/products/CreateProducts";
import CreateEmployee from "./pages/Admin/create/employees/CreateEmployee";
import DetailsOrder from "./pages/Admin/details/orders/DeatailOrder";
import DetailsEmployee from "./pages/Admin/details/employees/DeatailEmployee";
import Login from "./pages/User/Login/Login";
import { selectCurrentUser } from "./redux/user/user.selector";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import ListRoles from "./pages/Admin/list/role/ListRoles";
import CreateRole from "./pages/Admin/create/role/CreateRoles";
import Profile from "./pages/User/Profile/profile";
const App = ({user}) => {
  return (
    <BrowserRouter>
      <Routes>
        {localStorage.getItem("name")?
         ( <Route
          path="/"
          element={user.employeeName === localStorage.getItem("name")? <UserHome /> : <Login />}
        />)
          
          :
          (<Route
            path="/"
            element={<Login />}
          />)
        }
        {/* admin */}
        {user.employeeName === localStorage.getItem("name") ? (
          <Route path="/">
            {user.isAdmin ?(
            <Route path="admin/">
              <Route index element={<AdminHome />} />
              <Route path="products/">
                <Route index element={<ListProduct />} />
                <Route
                  path="create"
                  element={
                    <CreateProduct/>
                  }
                />
              </Route>
              <Route path="categories/">
                <Route index element={<ListCategories />} />
                <Route
                  path="create"
                  element={
                    <CreateCategory/>
                  }
                />
              </Route>
              <Route path="orders/">
                <Route index element={<ListOrders />} />
              </Route>
              <Route path="employees/">
                <Route index element={<ListEmployees />} />
                <Route
                  path="create"
                  element={
                    <CreateEmployee/>
                  }
                />
              </Route>
              <Route path="roles/">
                <Route index element={<ListRoles/>} />
                <Route
                  path="create"
                  element={
                    <CreateRole/>
                  }
                />
              </Route>
            </Route>)
            :
            (<Route path="*" element={<Navigate to="/" />} />)
            }
            {/* home */}
            <Route path="home/">
              <Route index element={<UserHome />} />
            </Route>
            <Route path="/cart" element={<Cart/>} />
            <Route path="/profile" element={<Profile/>} />
          </Route>
        ) : (
          <Route path="*" element={<Navigate to="/" />} />
        )}
      </Routes>
    </BrowserRouter>
  );
};


const mapStateToProp = createStructuredSelector({
  user: selectCurrentUser,
});
export default connect(mapStateToProp)(App);
