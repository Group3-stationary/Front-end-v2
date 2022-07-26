const api = {
    GetAllCategory: "api/Categories/Categories",
    CreateCategory: "api/Categories/CreateCategory",
    EditCategory: "http://localhost:8832/api/Categories/UpdateCategory",
    DeleteCategory: "",

    GetAllProduct: "/api/Products/Products",
    GetProductById: "/api/Products",
    EditProduct: "api/Products/UpdateProduct",
    DeleteProduct: "api/Products/ProductId?id=",
    CreateProduct: "api/Products/CreateProduct",

    GetAllEmployee: "api/Employees/Employees",
    CreateEmployee: "api/Employees/CreateEmployee",
    DeleteEmployee: "api/Employees/EmployeeId?id=",

    GetAllRoles: "api/Roles/Roles",
    EditRoles: "api/Roles/UpdateRole",
    DeleteRole: "api/Roles/RoleId?id=",
    CreateRole: "api/Roles/CreateRole",

    CreateOrderDetails: "api/OrderItems/CreateOrderItem"
}

export default api;