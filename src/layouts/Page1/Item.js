import React from "react";
import classNames from "classnames/bind";
import styles from "./Page1.module.scss";

const cx = classNames.bind(styles);
function Item({ title, src, numProduct }) {
  return (
    <div className={cx("item__wrapper")}>
      <div className={cx("item__img")}>
        <img
          src="https://flatsome3.uxthemes.com/wp-content/uploads/2013/06/hoodie_4_front-494x593.jpg"
          alt="img"
          width="100%"
          height="300px"
        />
      </div>
      <div className={cx("item__decs")}>
        <div className={cx("item__decsTitle")}>clothing</div>
        <div className={cx("item__decsProduct")}>12 products</div>
      </div>
    </div>
  );
}

export default Item;
