import "./dataproduct.scss";
import { DataGrid  } from "@mui/x-data-grid";
import {productColumns,productRows} from "../../../../Data/dataProduct"
import { Link } from "react-router-dom";


const DataProduct = () => {

  const actionColumn = [
    {field : "action" , headerName: "Action" , width:200,
      renderCell:()=>{
        return (
          <div className="cellAction">
            <Link to="/admin/products/edit/productId" style={{textDecoration:"none"}}>
              <div className="editButton">Edit</div>
            </Link>
            <Link to="/admin/products/productId" style={{textDecoration:"none"}}>
              <div className="detailButton">Detail</div>
            </Link>
            
            <div className="deleteButton">Delete</div>
          </div>
        )
      }
    }
  ]


  return (
    <div className="datatableproduct">
      <DataGrid
        rows={productRows}
        columns={productColumns.concat(actionColumn)}
        pageSize={4}
        rowsPerPageOptions={[9]}
        //checkboxSelection
      />
    </div>
  )
}

export default DataProduct