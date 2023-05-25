import React from "react";
import classNames from "classnames/bind";

import styles from "./Page3.module.scss";

const cx = classNames.bind(styles);
function Page3Desc() {
  return (
    <div className={cx("page3Desc__wrapper")}>
      <div className={cx("page3Desc__title")}>
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
        ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
        egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend
        leo.
      </div>
      <div className={cx("page3Desc__related")}>
        <div className={cx("page3Desc__relatedTitle")}>RELATED PRODUCTS</div>
        <div className={cx("page3Desc__relatedCarousel")}></div>
      </div>
    </div>
  );
}

export default Page3Desc;
