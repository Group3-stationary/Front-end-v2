import "./datacategories.scss"
import { DataGrid  } from '@mui/x-data-grid';
import {categoryColumns,categoryRows} from "../../../../Data/dataCategories"
import { Link } from 'react-router-dom';

const Datacategories = () => {

  
  const actionColumn = [
    {field : "action" , headerName: "Action" , width:200,
      renderCell:()=>{
        return (
          <div className="cellAction">
            <Link to="/admin/categories/edit/categoryId" style={{textDecoration:"none"}}>
              {/* <Link to={`/admin/categories/edit/${categoryId}`}> */}
              <div className="editButton">Edit</div>
            </Link>       
            {/* <div className="detailButton">Detail</div> */}

            <div className="deleteButton">Delete</div>
          </div>
        )
      }
    }
  ]


  return (
    <div className="datatablecategory">
      <DataGrid
        rows={categoryRows}
        columns={categoryColumns.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[9]}
        //checkboxSelection
      />
    </div>
  )
}

export default Datacategories