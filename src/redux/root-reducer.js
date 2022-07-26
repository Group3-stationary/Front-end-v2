import { combineReducers } from 'redux';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import  {CategoriesReducer, CategoryReducer } from './category/category.reducer';
import EmployeeReducer from './epmloyee/employee.reducer';
import handleCart from './order/order.reducer';
import ProductReducer from './product/product.reducer';
import RoleReducer from './role/role.reducer';
import userReducer from './user/user.reducer';


const persistConfig = {
    key: "root",
    storage,
    whitelist: ["user","products","categories","category","employees","roles","cart"],
  };
  
  const rootReducer = combineReducers({
    categories: CategoriesReducer,
    category: CategoryReducer,
    user: userReducer,
    products: ProductReducer,
    employees: EmployeeReducer,
    roles: RoleReducer,
    cart: handleCart,
  });
  export default persistReducer(persistConfig, rootReducer);