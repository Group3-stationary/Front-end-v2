import "./dataorders.scss"
import { DataGrid  } from '@mui/x-data-grid';
import {orderColumns,orderRows} from "../../../../Data/dataOrders"
import { Link } from "react-router-dom";


const DataOrders = () => {

  const actionColumn = [
    {field : "action" , headerName: "Action" , width:300,
      renderCell:()=>{
        return (
          <div className="cellAction">
            <Link to="/admin/orders/edit/orderId" style={{textDecoration:"none"}}>
              <div className="editButton">Update Status</div>
            </Link>
            <Link to="/admin/orders/orderId" style={{textDecoration:"none"}}>
              <div className="detailButton">Detail</div>
            </Link> 
            <div className="deleteButton">Delete</div>
          </div>
        )
      }
    }
  ]


  return (
    <div className="datatableorder">
      <DataGrid
        rows={orderRows}
        columns={orderColumns.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[9]}
        //checkboxSelection
      />
    </div>
  )
}

export default DataOrders