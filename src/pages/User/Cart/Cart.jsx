import React from "react";
import "./cart.scss";
import { useSelector, useDispatch } from "react-redux";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';
import { NavLink } from "react-router-dom";
import { addCart, delCart,delAllCart } from "../../../redux/order/order.action";
import http from "../../../api/client";
import api from "../../../api/api";
import { async } from "validate.js";

const Cart = () => {
  const state = useSelector((state) => state.cart);
  
  const dispatch = useDispatch();
  const user = useSelector((state)=>state.user.currentUser);
  const cart = {
      EmployeeId: user.employeeID,
      Product: state.map(item => ({
        ProductId: item.productId,
        Quantity: item.qty
      })
      )
  }

//#region Call API Role


const roles = useSelector((state) => state.roles.roles);
//#endregion


  console.log(cart)
  const categories = useSelector(state=>state.categories.categories);
  const cate = (id) =>{
    let ca = categories.find(e=>e.categotyId === id);
    console.log(id);
    return ca.categotyName;
  }
  const handleAdd = (item) => {
    dispatch(addCart(item));
  };
  const handleDel = (item) => {
    dispatch(delCart(item));
  };
  const handleDelAll = (item) => {
    dispatch(delAllCart(item));
  };

  
  const handleOrder = async () =>{
    await http.create(api.CreateOrderDetails);
  }


 
  return (
    //     <>
    //       <div className="px-4 my-5 bg-light rounded-3 py-5">
    //         <div className="container py-4">
    //           <div className="row justify-content-center">
    //             <div className="col-md-4">
    //               <img
    //                 src={"http://localhost:8832/"+product.featureImgPath}
    //                 alt={product.productName}
    //                 height="200px"
    //                 width="180px"
    //               />
    //             </div>
    //             <div className="col-md-4">
    //               <h3>{product.productName}</h3>
    //               <p className="lead fw-bold">
    //                 {product.qty} X ${product.price} = $
    //                 {product.qty * product.price}
    //               </p>
    //               <button
    //                 className="btn btn-outline-dark me-4"
    //                 onClick={() => handleDel(product)}
    //               >
    //                 <i className="fa fa-minus"></i>
    //               </button>
    //               <button
    //                 className="btn btn-outline-dark"
    //                 onClick={() => handleAdd(product)}
    //               >
    //                 <i className="fa fa-plus"></i>
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </>
    //   );
    // };
    // const buttons = () => {
    //   return (
    //     <>
    //       <div className="container">
    //         <div className="row">
    //           <NavLink
    //             to="/checkout"
    //             className="btn btn-outline-dark mb-5 w-25 mx-auto"
    //           >
    //             Proceed to Checkout
    //           </NavLink>
    //         </div>
    //       </div>
    //     </>
    //   );
    // };

    // return (
    //   <div>
    //     {state.length === 0 && emptyCart()}
    //     {state.length !== 0 && state.map(cartItems)}
    //     {state.length !== 0 && buttons()}
    //   </div>


    <section className="h-100 h-custom" style={{ backgroundColor: '#d2c9ff' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12">
            <div className="card card-registration card-registration-2" style={{ borderRadius: '15px' }}>
              <div className="card-body p-0">
                <div className="row g-0">
                  <div className="col-lg-8">
                    <div className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
                        <h6 className="mb-0 text-muted">3 items</h6>
                      </div>
                      {state.length === 0 ?
                        (
                          <div className="px-4 my-5 bg-light rounded-3 py-5">
                            <div className="container py-4">
                              <div className="row">
                                <h3>Your Cart is Empty</h3>
                              </div>
                            </div>
                          </div>
                        )
                        :
                        (state.map(product => (
                          <div key={product.productId}>
                            <div className="row mb-4 d-flex justify-content-between align-items-center">
                              <div className="col-md-2 col-lg-2 col-xl-2">
                                <img src={"http://localhost:8832/"+product.featureImgPath} className="img-fluid rounded-3" alt="Cotton T-shirt" />
                              </div>
                              <div className="col-md-3 col-lg-3 col-xl-3">
                                <h6 className="text-muted"></h6>
                                <h6 className="text-black mb-0">{product.productName}</h6>
                              </div>
                              <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                <button className="btn btn-link px-2" onClick={() => handleDel(product)}>
                                    <RemoveIcon/>
                                </button>
                                <div className="qty">
                                  <div>
                                    {product.qty}
                                  </div>
                                </div>
                                <button className="btn btn-link px-2" onClick={() => handleAdd(product)}>                                
                                    <AddIcon/>
                                </button>
                              </div>
                              <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1 close">
                                <div>
                                    <h6 className="mb-0">${product.qty * product.price}</h6>
                                </div>
                                <div>
                                  <button className="btn btn-link px-2" onClick={()=> handleDelAll(product)}>
                                      <CloseIcon color="error"/>
                                  </button>
                                </div>
                              </div>
                             
                              <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                <a href="#!" className="text-muted"><i className="fas fa-times" /></a>
                              </div>
                            </div>
                            <hr className="my-4" />
                          </div>
                        ))
                        )
                      }


                      <div className="pt-5">
                        <h6 className="mb-0"><a href="#!" className="text-body"><i className="fas fa-long-arrow-alt-left me-2" />Back to shop</a></h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 bg-grey">
                    <div className="p-5">
                      <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                      <hr className="my-4" />
                      <div className="d-flex justify-content-between mb-4">
                        <h5 className="text-uppercase">items 3</h5>
                        <h5>€ 132.00</h5>
                      </div>
                      <hr className="my-4" />
                      <div className="d-flex justify-content-between mb-5">
                        <h5 className="text-uppercase">Total price</h5>
                        <h5>€ 137.00</h5>
                      </div>
                      <button type="button" className="btn btn-dark btn-block btn-lg" data-mdb-ripple-color="dark" onClick={handleOrder}>Register</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
