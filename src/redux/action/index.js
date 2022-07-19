// add items to Cart
export const addCart = (product) => {
    return {
        type : "ADDITEM",
        payload : product
    }
}


// delete items from Cart
export const delCart = (product) => {
    return {
        type: "DELITEM",
        payload : product
    }
}