import React from "react";
import classNames from "classnames/bind";
import styles from "./Page1.module.scss";

const cx = classNames.bind(styles);
function Item({ title, src, numProduct }) {
  return (
    <div className={cx("item__wrapper")}>
      <div className={cx("item__img")}>
        <img src={src} alt="img" width="100%" height="300px" />
      </div>
      <div className={cx("item__decs")}>
        <div className={cx("item__decsTitle")}>{title}</div>
        <div className={cx("item__decsProduct")}>{numProduct} products</div>
      </div>
    </div>
  );
}

export default Item;
