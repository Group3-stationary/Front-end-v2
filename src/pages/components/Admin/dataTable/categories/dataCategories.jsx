import "./datacategories.scss"
import { DataGrid } from '@mui/x-data-grid';

import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import http from "../../../../../api/client";
import api from "../../../../../api/api";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CategoriesGetAll } from "../../../../../redux/category/category.action";
import EditCategory from "../../../../Admin/edit/categories/editCategory";


const Datacategories = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const GetAllCategory = async () => {
    try {
      const response = await http.get(api.GetAllCategory);
      dispatch(CategoriesGetAll(response.data));
    } catch (err) {
      navigate("/")
    }
  }
  useEffect(() => {
    GetAllCategory();
  }, [])
  const categories = useSelector((state) => state.categories.categories);

  const categoryColumns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "categoryName", headerName: "Category Name", width: 600, },
    { field: "IdParent", headerName: "IdParent", width: 400 },
  ]

  const categoryRows =
    categories.map(categories => (
      {
        id: categories.categotyId,
        categoryName: categories.categotyName,
        IdParent: categories.idParent,
      }
    ))
  const actionColumn = [
    {
      field: "action", headerName: "Action", width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            {/* <Link to={`/admin/categories/edit/${categoryId}`}> */}
            <EditCategory className="editButton" category={params.row} />
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