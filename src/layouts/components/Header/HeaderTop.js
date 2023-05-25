import React from "react";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

function HeaderTop() {
  return (
    <div className={cx("headerTop__wrapper")}>
      <div className={cx("headerTop__body", "grid", "wide")}>
        <div className={cx("headerTop__title")}>
          ADD ANYTHING HERE OR JUST REMOVE IT....
        </div>
        <div className={cx("headerTop__navBar")}>
          <div className={cx("headerTop__navItem")}>About</div>
          <span className={cx("headerTop__navSeparate")}></span>
          <div className={cx("headerTop__navItem")}>Our Stores</div>
          <span className={cx("headerTop__navSeparate")}></span>
          <div className={cx("headerTop__navItem")}>Blog</div>
          <span className={cx("headerTop__navSeparate")}></span>
          <div className={cx("headerTop__navItem")}>Contact</div>
          <span className={cx("headerTop__navSeparate")}></span>
          <div className={cx("headerTop__navItem")}>FAQ</div>
          <span className={cx("headerTop__navSeparate")}></span>
          <Tippy className={cx("tippy")} content="Sign up for Newsletter">
            <div className={cx("headerTop__navItem")}>
              <div className={cx("headerTop_iconItem")}>
                <i
                  class="fa-regular fa-envelope"
                  style={{ paddingRight: "5px" }}
                ></i>
              </div>
              Newsletter
            </div>
          </Tippy>
          <span className={cx("headerTop__navSeparate")}></span>
          <div className={cx("headerTop__navItem", "headerTop__Languages")}>
            Languages
            <div className={cx("headerTop_iconItem")}>
              <i
                class="fa-solid fa-chevron-down"
                style={{ paddingLeft: "5px" }}
              ></i>
            </div>
            <div className={cx("headerTop__LanguagesDecs")}>
              You need Polylang or WPML plugin for this to work. You can remove
              it from Theme Options.
            </div>
          </div>
          <span className={cx("headerTop__navSeparate")}></span>
          <div className={cx("headerTop__navItem")}>
            Wishlist
            <div className={cx("headerTop_iconItem")}>
              <i class="fa-solid fa-heart" style={{ paddingLeft: " 5px" }}></i>
            </div>
          </div>
          <div className={cx("headerTop__icon")}>
            <Tippy content="Follow on Facebook">
              <div className={cx("headerTop_iconItem")}>
                <i
                  class="fa-brands fa-facebook-f"
                  style={{ padding: " 0 5px" }}
                ></i>
              </div>
            </Tippy>
            <Tippy content="Follow on Instagram">
              <div className={cx("headerTop_iconItem")}>
                <i
                  class="fa-brands fa-instagram"
                  style={{ padding: " 0 5px" }}
                ></i>
              </div>
            </Tippy>
            <Tippy content="Follow on Twitter">
              <div className={cx("headerTop_iconItem")}>
                <i
                  class="fa-brands fa-twitter"
                  style={{ padding: " 0 5px" }}
                ></i>
              </div>
            </Tippy>
            <Tippy content="Send us a email">
              <div className={cx("headerTop_iconItem")}>
                <i
                  class="fa-regular fa-envelope"
                  style={{ padding: " 0 5px" }}
                ></i>
              </div>
            </Tippy>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;
