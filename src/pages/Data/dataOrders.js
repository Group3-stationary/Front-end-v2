export const orderColumns = [
    { field: 'id', headerName: 'ID', width: 60 },
    { field: 'orderUserId' , headerName : 'User' , width : 150,
            renderCell:(params) => {
                    if(params.row.orderUserId === 1){
                        return(
                            <div className={`cellWithName ${params.row.orderUserId === 1 ? "hong" : ""}`}>
                            {"KIEN HONG"}
                            </div>
                        )
                    }
                    else if(params.row.orderUserId === 2){
                        return(
                            <div className={`cellWithName ${params.row.orderUserId === 2 ? "giang" : ""}`}>
                            {"HOANG GIANG"}
                            </div>
                        )
                    }      
                }
    },
    { field: 'orderAddress' , headerName : 'Ship Address' , width : 120},
    { field: 'orderDescription' , headerName : 'Description' , width : 100},
    { field: 'orderCreateDate' , headerName : 'Create Date' , width : 120},
    { field: 'orderStatus' , headerName : 'Status' , width : 120,
        renderCell:(params) => {
                if(params.row.orderStatus === 0){
                    return(
                        <div className={`cellWithStatus ${params.row.orderStatus === 0 ? "Confirming" : ""}`}>
                        {"CONFIRMING"}
                        </div>
                    )
                }
                else if(params.row.orderStatus === 1){
                    return(
                        <div className={`cellWithStatus ${params.row.orderStatus === 1 ? "OnProcess" : ""}`}>
                        {"ON PROCESS"}
                        </div>
                    )
                }
                else if(params.row.orderStatus === 2){
                    return(
                        <div className={`cellWithStatus ${params.row.orderStatus === 2 ? "OnDelivery" : ""}`}>
                        {"ON DELIVERY"}
                        </div>
                    )
                }
                else if(params.row.orderStatus === 3){
                    return(
                        <div className={`cellWithStatus ${params.row.orderStatus === 3 ? "Delivered" : ""}`}>
                        {"DELIVERED"}
                        </div>
                    )
                }
                else if(params.row.orderStatus === 4){
                    return(
                        <div className={`cellWithStatus ${params.row.orderStatus === 4 ? "Canceled" : ""}`}>
                        {"CANCELED"}
                        </div>
                    )
                }
    }
    },
    { field: 'orderPaymentMethods' , headerName : 'Payment' , width : 130,
        renderCell:(params) => {
                if(params.row.orderPaymentMethods === 0){
                    return(
                        <div className={`cellWithPayment ${params.row.orderPaymentMethods === 0 ? "Cash" : ""}`}>
                        {"CASH"}
                        </div>
                    )
                }
                else if(params.row.orderPaymentMethods === 1){
                    return(
                        <div className={`cellWithPayment ${params.row.orderPaymentMethods === 1 ? "CreditCard" : ""}`}>
                        {"CREDIT CARDS"}
                        </div>
                    )
                }      
    }
    },
    { field: 'orderDeliveryType' , headerName : 'Delivery Type' , width : 120,
        renderCell:(params) => {
                if(params.row.orderDeliveryType === 0){
                    return(
                        <div className={`cellWithType ${params.row.orderDeliveryType === 0 ? "Ground" : ""}`}>
                        {"GROUND"}
                        </div>
                    )
                }
                else if(params.row.orderDeliveryType === 1){
                    return(
                        <div className={`cellWithType ${params.row.orderDeliveryType === 1 ? "Air" : ""}`}>
                        {"AIR"}
                        </div>
                    )
                }      
    }
    }, 
]




export const orderRows = [{
    id: 1,
    orderUserId : 1,
    orderAddress : "590 CMT9",
    orderDescription : "Giao dung gio",
    orderCreateDate  : new Date(),
    orderStatus : 0,
    orderPaymentMethods : 0,
    orderDeliveryType :0,
  },
  {
    id: 2,
    orderUserId : 2,
    orderAddress : "590 CMT10",
    orderDescription : "Giao dung gio",
    orderCreateDate  : new Date(),
    orderStatus : 1,
    orderPaymentMethods : 1,
    orderDeliveryType :1,
  },
  {
    id: 3,
    orderUserId : 2,
    orderAddress : "590 CMT9",
    orderDescription : "Giao dung gio",
    orderCreateDate  : new Date(),
    orderStatus : 2,
    orderPaymentMethods : 1,
    orderDeliveryType :0,
  },
  {
    id: 4,
    orderUserId : 1,
    orderAddress : "590 CMT9",
    orderDescription : "Giao dung gio",
    orderCreateDate  : new Date(),
    orderStatus : 3,
    orderPaymentMethods : 0,
    orderDeliveryType :1,
  },
  {
    id: 5,
    orderUserId : 1,
    orderAddress : "590 CMT9",
    orderDescription : "Giao dung gio",
    orderCreateDate  : new Date(),
    orderStatus : 4,
    orderPaymentMethods : 1,
    orderDeliveryType :1,
}
]

