export const productColumns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "productName" , headerName : "Name" , width : 150},
    { field: "productPrice" , headerName : "Price" , width : 80},
    { field: "productQuantity" , headerName : "Quantity" , width : 80},
    { field: "productShortDescription" , headerName : "Short Description" , width : 100},
    { field: "productLongDescription" , headerName : "Long Description" , width : 150},
    { field: "productStatus" , headerName : "Status" , width : 150,
        renderCell:(params) => {
                if(params.row.productStatus === 0){
                    return(
                        <div className={`cellWithStatus ${params.row.productStatus === 0 ? "InStock" : ""}`}>
                        {"IN STOCK"}
                        </div>
                    )
                }
                else if(params.row.productStatus === 1){
                    return(
                        <div className={`cellWithStatus ${params.row.productStatus === 1 ? "OutOfStock" : ""}`}>
                        {"OUT OF STOCK"}
                        </div>
                    )
                }      
    }
    },
    { field: "categoryId" , headerName : "Category" , width : 120,
        renderCell:(params) => {
                if(params.row.categoryId === 0){
                    return(
                        <div className={`cellWithCate ${params.row.categoryId === 0 ? "Cate0" : ""}`}>
                        {"CATE 0"}
                        </div>
                    )
                }
                else if(params.row.categoryId === 1){
                    return(
                        <div className={`cellWithCate ${params.row.categoryId === 1 ? "Cate1" : ""}`}>
                        {"CATE 1"}
                        </div>
                    )
                }      
    }
    },
    { field: "productImage" , headerName : "Images" , width : 100 ,
        renderCell:(params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.productImage} alt="avatar"/>
                </div>
            )
        }
    },
    
    
    
]




export const productRows = [{
    id: "0100034",
    productName: "Thiep cuoi",
    productPrice : 300,
    productQuantity: 4,
    productShortDescription : "short",
    productLongDescription : "long",
    productImage : "https://icon-library.com/images/icon-product/icon-product-10.jpg",
    productStatus : 0,
    categoryId :1,
  },
  {
    id: "0100999",
    productName: "Gau bong",
    productPrice : 1300,
    productQuantity: 10,
    productShortDescription : "short",
    productLongDescription : "long",
    productImage : "https://icon-library.com/images/icon-product/icon-product-29.jpg",
    productStatus : 0,
    categoryId :1,
  },
  {
    id: "0000345",
    productName: "Thuy tinh",
    productPrice : 2300,
    productQuantity: 0,
    productShortDescription : "short",
    productLongDescription : "long",
    productImage : "https://icon-library.com/images/icon-product/icon-product-14.jpg",
    productStatus : 1,
    categoryId :0,
  },
  {
    id: "0105555",
    productName: "Gau bong loai 2",
    productPrice : 1400,
    productQuantity: 10,
    productShortDescription : "short",
    productLongDescription : "long",
    productImage : "https://icon-library.com/images/2018/291197_hulk-hulk-body-png-png-download.png",
    productStatus : 0,
    categoryId :1,
  },
  {
    id: "0107777",
    productName: "Captain",
    productPrice : 2600,
    productQuantity: 11,
    productShortDescription : "short",
    productLongDescription : "long",
    productImage : "https://icon-library.com/images/2018/193599_black-panther-black-panther-marvel-academy-transparent-png.png",
    productStatus : 0,
    categoryId :1,
}
]

