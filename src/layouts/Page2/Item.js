import React from "react";
import classNames from "classnames/bind";

import styles from "./Page2.module.scss";

const cx = classNames.bind(styles);

function Item({ name, src1, src2, price, sale, out, width, height }) {
  return (
    <div className={cx("item__wrapper")}>
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
        <div className={cx("item__quickView")}>quick view</div>
        <div className={cx("item__heart")}>
          <i class="fa-solid fa-heart" style={{ fontSize: "18px" }}></i>
        </div>
      </div>
      {sale && <div className={cx("item__sale")}>Sale!</div>}
      {out && <div className={cx("item__out")}>OUT OF STOCK</div>}
      <div className={cx("item__title")}>Clothing</div>
      <div className={cx("item__name")}>{name}</div>
      <div className={cx("item__price")}>{price}</div>
    </div>
  );
}

export default Item;
