export const userColumns = [
    { field: "id", headerName: "User ID", width: 70 },
    { field: "userName" , headerName : "Name" , width : 100},
    { field: "userFullName" , headerName : "Full Name" , width : 200},
    { field: "userEmail" , headerName : "Email" , width : 150},
    { field: "userPhone" , headerName : "Phone" , width : 100},
    { field: "userGender" , headerName : "Gender" , width : 80,
        renderCell:(params) => {
            return (
                <div className={`cellWithGender ${params.row.userGender}`}>
                {params.row.userGender ? "Male" : "Female"}
                </div>
            )
        }
    },
    { field: "userAvatar" , headerName : "Avatar" , width : 80 ,
        renderCell:(params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.userAvatar} alt="avatar"/>
                </div>
            )
        }
    },
    { field: "userAddress" , headerName : "Address" , width : 150},
    { field: "userRole" , headerName : "Role" , width : 80,
        renderCell:(params) => {
                if(params.row.userRole === 1){
                    return(
                        <div className={`cellWithRole ${params.row.userRole === 1 ? "Admin" : ""}`}>
                        {"Admin"}
                        </div>
                    )
                }
                else if(params.row.userRole === 2){
                    return(
                        <div className={`cellWithRole ${params.row.userRole === 2 ? "Assistant" : ""}`}>
                        {"Assistant"}
                        </div>
                    )
                }
                else{
                    return(
                        <div className={`cellWithRole ${params.row.userRole === 3 ? "User" : ""}`}>
                        {"User"}
                        </div>
                    )
                }
    }
    }
]




export const userRows = [{
    id: 1,
    userName: "hong",
    userFullName : "Kien Hong",
    userEmail: "hong@gmail.com",
    userPhone : "011111111",
    userGender : true,
    userAvatar : "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ce54bf11889067.562541ef7cde4.png",
    userAddress : "590 CMT8",
    userRole : 1,
  },
  {
    id: 2,
    userName: "giang",
    userFullName : "Hoang Giang",
    userEmail: "giang@gmail.com",
    userPhone : "02222222",
    userGender : true,
    userAvatar : "https://cdn-icons-png.flaticon.com/512/147/147140.png",
    userAddress : "590 CMT8",
    userRole : 2,
  },
  {
    id: 3,
    userName: "thinh",
    userFullName : "Tri Thinh",
    userEmail: "thinh@gmail.com",
    userPhone : "033333333",
    userGender : false,
    userAvatar : "https://cdn-icons-png.flaticon.com/512/147/147140.png",
    userAddress : "590 CMT8",
    userRole : 2,
  },
  {
    id: 4,
    userName: "sy",
    userFullName : "Tan Sy",
    userEmail: "sy@gmail.com",
    userPhone : "0444444444",
    userGender : false,
    userAvatar : "https://cdn-icons-png.flaticon.com/512/147/147140.png",
    userAddress : "590 CMT8",
    userRole : 3,
  },
  {
    id: 5,
    userName: "minh",
    userFullName : "Hoang Minh",
    userEmail: "minh@gmail.com",
    userPhone : "055555555",
    userGender : true,
    userAvatar : "https://cdn-icons-png.flaticon.com/512/147/147140.png",
    userAddress : "590 CMT8",
    userRole : 3,
}
]

