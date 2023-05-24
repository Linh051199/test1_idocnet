import React from "react";
import classNames from "classnames/bind";

import styles from "./SideBarAd.module.scss";
import images from "../../../assets/images";

const cx = classNames.bind(styles);

function SideBarAd() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("sideBarAd__list")}>
        <div className={cx("sideBarAd__item")}>
          <div>
            <img src={images.logoIcon} alt="img" width="32px" />
          </div>
          <div>DEMOS</div>
        </div>
        <div className={cx("sideBarAd__item")}>
          <div className={cx("sideBarAd__itemHighLight")}>$59</div>
          <div>Buy now</div>
        </div>
        <div className={cx("sideBarAd__item")}>
          <div>
            <img
              src="https://flatsome3.uxthemes.com/wp-content/plugins/flatsome-demo/themeforest/emailsupport2.png"
              alt="img"
              width="32px"
            />
          </div>
          <div>Support</div>
        </div>
      </div>
    </div>
  );
}

export default SideBarAd;
