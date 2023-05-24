import React, { useState } from "react";
import classNames from "classnames/bind";

import styles from "./Page3.module.scss";
import Tippy from "@tippyjs/react";
import Page3Desc from "./Page3Desc";
import Page3Rev from "./Page3Rev";

const cx = classNames.bind(styles);

function Page3Body() {
  const [showDesc, setShowDesc] = useState("1");
  return (
    <div className={cx("page3Body__wrapper", "grid", "wide")}>
      <div className={cx("page3Body__top")}>
        <div className={cx("page3Body__carousel")}>
          <img
            src="https://flatsome3.uxthemes.com/wp-content/uploads/2013/06/hoodie_3_back-494x593.jpg"
            alt="img"
            width="480px"
            height="510px"
          />
        </div>
        <div className={cx("page3Body__info")}>
          <div className={cx("page3Body__infoTitle")}>
            HOME / SHOP / CLOTHING / HOODIES
          </div>
          <div className={cx("page3Body__infoName")}>Patient Ninja</div>
          <div className={cx("page3Body__infoSeparateName")}></div>
          <div className={cx("page3Body__infoPrice")}>$35,00</div>
          <div className={cx("page3Body__infoDesc")}>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
            ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
            egestas semper. Aenean ultricies mi vitae est. Mauris placerat
            eleifend leo.
          </div>
          <div className={cx("page3Body__infoContact")}>
            <div className={cx("page3Body__infoContactNumber")}>
              <span className={cx("contactBtn")}>-</span>
              <span className={cx("contactNumber")}>0</span>
              <span className={cx("contactBtn")}>+</span>
            </div>
            <button className={cx("page3Body__infoContactBtn")}>
              ADD TO CART{" "}
            </button>
          </div>
          <div className={cx("page3Body__infoCategories")}>
            Categories: <p>Clothing, Hoodies</p>
          </div>
          <div className={cx("page3Body__infoTags")}>
            Tags: <p>Jumper, Pink</p>
          </div>
          <div className={cx("page3Body__infoIcon")}>
            <Tippy content="Share on Facebook">
              <div className={cx("page3Body__infoIconItem", "fb_icon")}>
                <i
                  class="fa-brands fa-facebook-f"
                  style={{ fontSize: "18px" }}
                ></i>
              </div>
            </Tippy>
            <Tippy content="Share on Instagram">
              <div className={cx("page3Body__infoIconItem", "in_icon")}>
                <i
                  class="fa-brands fa-instagram"
                  style={{ fontSize: "18px" }}
                ></i>
              </div>
            </Tippy>
            <Tippy content="Share on Twitter">
              <div className={cx("page3Body__infoIconItem", "tw_icon")}>
                <i
                  class="fa-brands fa-twitter"
                  style={{ fontSize: "18px" }}
                ></i>
              </div>
            </Tippy>
            <Tippy content="Email to a Friend">
              <div className={cx("page3Body__infoIconItem", "le_icon")}>
                <i
                  class="fa-regular fa-envelope"
                  style={{ fontSize: "18px" }}
                ></i>
              </div>
            </Tippy>
            <Tippy content="Pin on Printerest">
              <div className={cx("page3Body__infoIconItem", "pi_icon")}>
                <i
                  class="fa-brands fa-pinterest-p"
                  style={{ fontSize: "18px" }}
                ></i>
              </div>
            </Tippy>
          </div>
        </div>
        <div className={cx("page3Body__sideBar")}></div>
      </div>
      <div className={cx("page3Body__bottom")}>
        <div className={cx("page3Body__bottomNav")}>
          <div
            className={cx("page3Body__bottomDesc", "active")}
            onClick={() => setShowDesc("1")}
          >
            DESCRIPTION
          </div>
          <div
            className={cx("page3Body__bottomRev")}
            onClick={() => setShowDesc("2")}
          >
            REVIEWS (0)
          </div>
        </div>
        {showDesc === "1" && <Page3Desc />}
        {showDesc === "2" && <Page3Rev />}
      </div>
    </div>
  );
}

export default Page3Body;
