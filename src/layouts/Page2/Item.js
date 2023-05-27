import React, { useState } from "react";
import classNames from "classnames/bind";

import styles from "./Page2.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Item({ name, src1, src2, price, sale, out, width, height }) {
  const [showQuickView, setShowQuickView] = useState(false);
  const [numberItem, setNumberItem] = useState(1);

  const handleClickSubtract = () => {
    if (numberItem > 1) {
      setNumberItem(numberItem - 1);
    }
  };
  const handleClickAdd = () => {
    setNumberItem(numberItem + 1);
  };
  return (
    <div className={cx("item__wrapper")}>
      <Link to="/test1_idocnet/page2/item">
        <div className={cx("item__img")}>
          <img
            className={cx("item__image")}
            src={src1}
            alt="img"
            width={width}
            height={height}
          />
        </div>
        <div className={cx("item__imgHidden")}>
          <img
            className={cx("item__imageHidden")}
            src={src2}
            alt="img"
            width={width}
            height={height}
          />
          <div className={cx("item__heart")}>
            <i class="fa-solid fa-heart" style={{ fontSize: "18px" }}></i>
          </div>
        </div>
      </Link>
      <div
        className={cx("item__quickView")}
        onClick={() => setShowQuickView(true)}
      >
        quick view
      </div>
      {sale && <div className={cx("item__sale")}>Sale!</div>}
      {out && <div className={cx("item__out")}>OUT OF STOCK</div>}
      <div className={cx("item__title")}>Clothing</div>
      <div className={cx("item__name")}>{name}</div>
      <div className={cx("item__price")}>{price}</div>
      {showQuickView && (
        <div className={cx("item__quickViewSub")}>
          <div className={cx("item__overlay")}></div>
          <div
            className={cx("item__quickViewSubBtnClose")}
            onClick={() => setShowQuickView(false)}
          >
            <i class="fa-solid fa-xmark"></i>
          </div>
          <div className={cx("item__quickViewSubBody")}>
            <div className={cx("item__quickViewSubCarousel")}>
              <div
                id="carouselExampleIndicators"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      src="https://flatsome3.uxthemes.com/wp-content/uploads/2013/06/T_7_front.jpg"
                      class="d-block w-100 "
                      alt="img"
                      width="100%"
                      height="auto"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="https://flatsome3.uxthemes.com/wp-content/uploads/2013/06/T_7_back.jpg"
                      class="d-block w-100"
                      alt="img"
                      width="100%"
                      height="auto"
                    />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className={cx("item__quickViewSubInfo")}>
              <div className={cx("page3Body__infoName")}>Patient Ninja</div>
              <div className={cx("page3Body__infoSeparateName")}></div>
              <div className={cx("page3Body__infoPrice")}>$35,00</div>
              <div className={cx("page3Body__infoDesc")}>
                Pellentesque habitant morbi tristique
                <br /> senectus et netus et malesuada
                <br />
                fames ac turpis egestas.
                <br /> Vestibulum tortor quam,
                <br /> feugiat vitae, ultricies eget,
                <br /> tempor sit amet, ante.
                <br /> Donec eu libero sit amet quam egestas semper.
                <br /> Aenean ultricies mi vitae est.
                <br /> Mauris placerat eleifend leo.
              </div>
              <div className={cx("page3Body__infoContact")}>
                <div className={cx("page3Body__infoContactNumber")}>
                  <span
                    className={cx("contactBtn")}
                    onClick={handleClickSubtract}
                  >
                    -
                  </span>
                  <span className={cx("contactNumber")}>{numberItem}</span>
                  <span className={cx("contactBtn")} onClick={handleClickAdd}>
                    +
                  </span>
                </div>
                <button
                  className={cx("page3Body__infoContactBtn")}
                  onClick={() => setShowQuickView(false)}
                >
                  ADD TO CART{" "}
                </button>
              </div>
              <div className={cx("page3Body__infoCategories")}>
                Categories: <p>Clothing, Hoodies</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Item;
