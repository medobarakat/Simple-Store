import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct } from "../redux/actions/productActions";

function ProductDetail() {
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();
  const dispatch = useDispatch();
  const renderDetail = async () => {
    const res = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => console.log(err));
    dispatch(selectedProduct(res.data));
    setLoading(false);
  };
  useEffect(() => {
    renderDetail();
  }, []);
  const product = useSelector((state) => state.product);
  const { id, title, description, image, category } = product;

  return (
    <>
      {loading == true ? (
        <h1 className="mt-5">Loading ....</h1>
      ) : (
        <div className="row mt-4" key={id}>
          <div className="col-lg-6">
            <img className="img-fluid" src={image} alt="" />
            <br />
            <span>{category}</span>
          </div>
          <div className="col-lg-6 mt-5">
            <h2>{title}</h2>
            <p className="mt-3">{description}</p>
          </div>
        </div>
      )}
    </>
  );
}
export default ProductDetail;
