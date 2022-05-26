import Header from "../../shared/header/Header";
import Footer from "../../shared/footer/Footer";
import "./Product-detail.scss";
import flash from "../../../assets/images/flash.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useParams, useNavigate } from "react-router-dom";
import Products from "../../../data/Product.data";
import productNotFound from "../../../assets/images/product-not-found.jpeg";
import { useState } from "react";
import Layout from "../../shared/layout/Layout";

const ProductDetail = () => {
  const params = useParams();
  const selectedProduct = Products.filter((product) => product.id).find(
    (product) => product.id.toString() === params.productId
  );
  let stars = [];
  if (selectedProduct && selectedProduct.stars) {
    for (let i = 0; i < selectedProduct.stars; i++) {
      stars.push(<FontAwesomeIcon icon="star" color="#EE4D2C" key={i} />);
    }
  }

  const [activeColor, setActiveColor] = useState("");
  const setActiveProductColor = (color) => {
    setActiveColor(color);
  };

  const navigate = useNavigate();
  const buy = () => {
    // mua hang
    navigate("/account/profile");
  };

  return (
    <Layout>
      <section className="bg-gray header-spacing p-4">
        <div className="wrapper bg-white">
          <div className="d-flex w-100 py-4">
            {selectedProduct ? (
              <>
                <div className="w-40 px-4">
                  <img
                    src={selectedProduct.productImage}
                    className="d-block w-100"
                  />
                </div>
                <div className="w-60">
                  <h5>{selectedProduct.description}</h5>
                  <div className="d-flex align-items-center mb-2">
                    <div className="border-end pe-3">
                      <ins className="pe-2">{selectedProduct.stars}</ins>
                      {stars}
                    </div>
                    <div className="border-end px-3">
                      <ins>{selectedProduct.rating}</ins>
                      &nbsp; đánh giá
                    </div>
                    <div className="ps-3">
                      <ins>{selectedProduct.sold}</ins>
                      &nbsp; đã bán
                    </div>
                  </div>
                  <div className="bg-gray p-3 mb-3">
                    <div className="d-flex align-items-center">
                      <del className="text-muted me-3">
                        {selectedProduct.price}
                      </del>
                      <span className="text-primary me-3 h3">
                        {selectedProduct.discountPrice}
                      </span>
                      <div className="bg-primary text-white p-2 small lh-xs">
                        {selectedProduct.discountPercentage}% giảm
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <div className="me-2" style={{ width: "100px" }}>
                        <img src={flash} alt="" className="d-block w-100" />
                      </div>
                      <small>BẮT ĐẦU SAU {selectedProduct.saleHour}</small>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <div className="label">Combo khuyến mãi</div>
                    <div className="border-primary p-2 lh-xs small text-primary">
                      {selectedProduct.combo}
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <div className="label">Vận chuyển</div>
                    <div>
                      Miễn phí vận chuyển cho đơn hàng trên{" "}
                      {selectedProduct.freeShippingValue}
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <div className="label">Màu sắc</div>
                    <div className="color-button-wrapper">
                      {selectedProduct.colors?.map((color, index) => {
                        return (
                          <button
                            className={`btn btn-outline-secondary ${
                              activeColor === color ? "border-primary" : ""
                            }`}
                            key={index}
                            onClick={() => setActiveProductColor(color)}
                          >
                            {color}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <div className="label">Số lượng</div>
                    <div className="d-flex align-items-center">
                      <button className="btn btn-outline-secondary border-end-0 py-0">
                        -
                      </button>
                      <button
                        className="btn btn-outline-secondary py-0"
                        style={{ width: "60px" }}
                      >
                        1
                      </button>
                      <button className="btn btn-outline-secondary border-start-0 py-0">
                        +
                      </button>
                    </div>
                    <div className="ms-2 text-muted small">
                      {selectedProduct.availableNumber} sản phẩm có sẵn
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <button className="btn border-primary text-primary me-2">
                      <FontAwesomeIcon icon="fa-cart-shopping" /> Thêm vào giỏ
                      hàng
                    </button>
                    <button className="btn bg-primary text-white" onClick={buy}>
                      Mua ngay
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="w-40 px-4">
                  <img src={productNotFound} className="d-block w-100" />
                </div>
                <div className="w-60 d-flex align-items-center">
                  <p className="px-4 display-6">
                    Sorry, we could not find the product
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;
