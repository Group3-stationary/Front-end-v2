import EmployeeActionType from "./employee.type";

const INITIAL_STATE = {
    employees: [{
        employeeId: "",
        employeeName: "",
        email: "",
        address: "",
        phone: "",
        gender: "",
        birthday: "",
        department: "",
        superiors: "",
        roleId: "",
        isAdmin: "",
    }]
}

const EmployeeReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case EmployeeActionType.GetAllEmployee:
            return {
                ...state,
                employees: action.payload
            }
        default:
            return {...state}
    }
}

export default EmployeeReducer;