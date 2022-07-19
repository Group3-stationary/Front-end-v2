import "./dataemployees.scss"
import { DataGrid  } from '@mui/x-data-grid';
import {userColumns,userRows} from "../../../../Data/dataEmployees";
import { Link } from 'react-router-dom';

const DataEmployees = () => {

  const actionColumn = [
    {field : "action" , headerName: "Action" , width:200,
      renderCell:()=>{
        return (
          <div className="cellAction">
            {/* <div className="editButton">Edit</div> */}
            <Link to="/admin/employees/employeeId" style={{textDecoration:"none"}}>
              <div className="detailButton">Detail</div>
            </Link>
            <div className="deleteButton">Delete</div>
          </div>
        )
      }
    }
  ]


  return (
    <div className="datatableEmployee">
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={4}
        rowsPerPageOptions={[9]}
        //checkboxSelection
      />
    </div>
  )
}

export default DataEmployees