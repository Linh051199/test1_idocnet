import React from "react";
import classNames from "classnames/bind";

import styles from "./Page3.module.scss";

const cx = classNames.bind(styles);
function Page3Rev() {
  return (
    <div className={cx("page3Rev__wrapper", "grid, 'wide")}>
      <div className={cx("page3Rev__title")}>
        Reviews
        <div className={cx("page3Rev__titleSub")}>
          There are no reviews yet.
        </div>
      </div>
      <div className={cx("page3Rev__desc")}>
        Be the first to review “Patient Ninja”
        <div className={cx("page3Rev__descSub")}>
          You must be logged in to post a review.
        </div>
      </div>
    </div>
  );
}

export default Page3Rev;
