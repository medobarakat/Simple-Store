import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import {
  setProducts,
  removeSelectedProduct,
} from "../redux/actions/productActions";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
function ProductListing() {
  const dispatch = useDispatch();
  const fetchingProducts = async () => {
    const res = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log(err);
      });
    dispatch(setProducts(res.data));
  };

  useEffect(() => {
    fetchingProducts(), dispatch(removeSelectedProduct());
  }, []);
  return (
    <div className="row">
      <ProductComponent />
    </div>
  );
}
export default ProductListing;
