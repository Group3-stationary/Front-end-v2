import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes,
  //Redirect,
} from "react-router-dom";
//user
import UserHome from "./pages/User/Home/UserHome";
import DeProduct from "./pages/components/User/Product/details/DeProduct";
//import { useGridSelector } from "@mui/x-data-grid";

// Admin
import AdminHome from "./pages/Admin/home/AdminHome";
import ListProduct from "./pages/Admin/list/product/ListProduct";
import ListCategories from "./pages/Admin/list/categories/ListCategories";
import ListOrders from "./pages/Admin/list/order/ListOrders";
import ListEmployees from "./pages/Admin/list/employees/ListEmployees";
import CreateCategory from "./pages/Admin/create/categories/CreateCategories";
import {
  productInputs,
  categoryInputs,
  assistantInputs,
  orderDetailForm,
} from "./pages/Data/dataformCreate";
import CreateProduct from "./pages/Admin/create/products/CreateProducts";
import CreateEmployee from "./pages/Admin/create/employees/CreateEmployee";
import DetailsProduct from "./pages/Admin/details/products/DeatailProduct";
import { productRows } from "./pages/Data/dataProduct";
import DetailsOrder from "./pages/Admin/details/orders/DeatailOrder";
import DetailsEmployee from "./pages/Admin/details/employees/DeatailEmployee";

const App = () => {
  // const user = useGridSelector((state) => state.user.currentUser);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          {/* admin */}
          <Route path="admin/">
            <Route index element={<AdminHome />} />
            <Route path="products/">
              <Route index element={<ListProduct />} />
              <Route
                path="create"
                element={
                  <CreateProduct
                    inputs={productInputs}
                    title="Add new product"
                  />
                }
              />
              <Route
                path=":productId"
                element={
                  <DetailsProduct
                    inputs={productInputs}
                    datas={productRows}
                    title="Details of "
                  />
                }
              />
              {/* <Route path="edit">
                  <Route path=":productId" element={<EditProduct inputs = {productInputs} title="Edit product "/>}/>
                </Route> */}
            </Route>
            <Route path="categories/">
              <Route index element={<ListCategories />} />
              <Route
                path="create"
                element={
                  <CreateCategory
                    inputs={categoryInputs}
                    title="Add new category"
                  />
                }
              />
              {/* <Route path="/edit">
                  <Route path=":categoryId" element={<EditCategory inputs = {categoryInputs} title="Edit category "/>}/>
                </Route> */}
            </Route>
            <Route path="orders/">
              <Route index element={<ListOrders />} />
              <Route
                path=":detailId"
                element={
                  <DetailsOrder inputs={orderDetailForm} title=" Details of " />
                }
              ></Route>
              {/* <Route path="edit">
                  <Route path=":orderId" element={<EditOrder inputs = {orderInputs} title="Update status "/>}></Route>
                </Route> */}
            </Route>
            <Route path="employees/">
              <Route index element={<ListEmployees />} />
              <Route
                path="create"
                element={
                  <CreateEmployee
                    inputs={assistantInputs}
                    title="Add new assistant"
                  />
                }
              />
              <Route
                path=":employeeId"
                element={
                  <DetailsEmployee
                    inputs={assistantInputs}
                    title="Detail of "
                  />
                }
              />
              {/* <Route path="edit">
                <Route path=":userId" element={<EditAdmin inputs = {assistantInputs} title="Edit Profile"/>}/>
                  </Route>
                */}
            </Route>
          </Route>
          {/* home */}
          <Route path="home/">
          <Route index element={<UserHome />} />
          <Route path="products/">
            <Route path=":id" element={<DeProduct />} />
          </Route>   
        </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
