import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { Link, NavLink } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import "./products.scss"
import { Container } from "@mui/system";
import { Col, Row } from "react-bootstrap";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("http://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }

      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>

        <div className="col-md-3">
          <Skeleton height={350} />
        </div>

        <div className="col-md-3">
          <Skeleton height={350} />
        </div>

        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  // const filterProduct = (cat) => {
  //   const updatedList = data.filter((x) => x.category === cat);
  //   setFilter(updatedList);
  // }

  const ShowProducts = () => {
    return (
      <>
        {/* <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-2" onClick={()=>setFilter(data)}>ALL</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("men's clothing")}>EMPTY1</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("women's clothing")}>EMPTY2</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("jewelery")}>EMPTY3</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("electronics")}>ELECTRONIC</button>
        </div> */}
        <Container>
          <Row xs={1} md={2}>
            {filter.map((product) => {
              return (
                <>
                  <Col md={3} sm={6} key={product.id}>
                    <div className="product-grid3">
                      <div className="product-image3">
                        <div>
                          <img className="pic-1" src={product.image} alt={product.title} />
                          <img className="pic-2" src={product.image} alt={product.title} />
                        </div>
                        <ul className="social">
                          <li><Link to={`/home/products/${product.id}`} className="btn btn-outline-dark"><div><ShoppingBagIcon /></div></Link></li>
                          <li><div><ShoppingCartIcon /></div></li>
                        </ul>
                        <span className="product-new-label">New</span>
                      </div>
                      <div className="product-content">
                        <h3 className="title"><div>{product.title}</div></h3>
                        <div className="price">
                          $63.50
                          <span>{product.price}</span>
                        </div>
                        <ul className="rating">
                          <li><StarIcon /></li>
                          <li><StarIcon /></li>
                          <li><StarIcon /></li>
                          <li className="disable"><StarOutlineIcon /></li>
                          <li className="disable"><StarOutlineIcon /></li>
                        </ul>
                      </div>
                    </div>
                  </Col>
                </>
              );
            })}
          </Row>
        </Container>
      </>
    );
  };
  return (
    <div>
      <div className="container my-5">
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};
export default Products;





