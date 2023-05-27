import React, { useState } from "react";
import classNames from "classnames/bind";

import styles from "./SideBarAd.module.scss";
import images from "../../../assets/images";

const cx = classNames.bind(styles);

function SideBarAd() {
  const [showDemos, setShowDemos] = useState(false);
  const [showDemosIcon, setShowDemosIcon] = useState(true);

  const handleShowDemos = () => {
    setShowDemos(true);
    setShowDemosIcon(false);
  };
  const handleCloseDemos = () => {
    setShowDemos(false);
    setShowDemosIcon(true);
  };
  return (
    <>
      <div className={cx("wrapper")}>
        <div className={cx("sideBarAd__list")}>
          {showDemosIcon && (
            <div className={cx("sideBarAd__item")} onClick={handleShowDemos}>
              <div>
                <img src={images.logoIcon} alt="img" width="32px" />
              </div>
              <div>DEMOS</div>
            </div>
          )}

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
      {showDemos && (
        <div className={cx("sideBarAd__demos")}>
          <div
            className={cx("sideBarAd__demosCloseBtn")}
            onClick={handleCloseDemos}
          >
            <i class="fa-solid fa-xmark"></i>
          </div>
          {/* <div className={"sideBarAd__overlay"}>123</div> */}
          <div className={cx("sideBarAd__demosBody", "grid", "wide")}>
            <div className={cx("sideBarAd__demosBodyHeader")}>
              <h3>Flatsome Theme Demos</h3>

              <p>
                Flatsome includes many pre-made homepages and settings you can
                add with a single click. These are just examples. You can mix
                and match headers, pages, colors and fonts using the Theme
                Option Panel.
              </p>
            </div>
            <div className={cx("sideBarAd__demosBodySeparate")}>
              <div>SHOP DEMOS</div>
            </div>
            <div className={cx("sideBarAd__demosBodyList")}>
              <div className={cx("sideBarAd__demosBodyItem")}>
                <img
                  src="https://flatsome3.uxthemes.com/wp-content/uploads/2013/08/classic-shop-400x332.jpg"
                  alt="img"
                />
                <p>Classic Shop</p>
              </div>

              <div className={cx("sideBarAd__demosBodyItem")}>
                <img
                  src="https://flatsome3.uxthemes.com/wp-content/uploads/2013/08/classic-shop-400x332.jpg"
                  alt="img"
                />
                <p>Classic Shop</p>
              </div>

              <div className={cx("sideBarAd__demosBodyItem")}>
                <img
                  src="https://flatsome3.uxthemes.com/wp-content/uploads/2013/08/classic-shop-400x332.jpg"
                  alt="img"
                />
                <p>Classic Shop</p>
              </div>

              <div className={cx("sideBarAd__demosBodyItem")}>
                <img
                  src="https://flatsome3.uxthemes.com/wp-content/uploads/2013/08/classic-shop-400x332.jpg"
                  alt="img"
                />
                <p>Classic Shop</p>
              </div>

              <div className={cx("sideBarAd__demosBodyItem")}>
                <img
                  src="https://flatsome3.uxthemes.com/wp-content/uploads/2013/08/classic-shop-400x332.jpg"
                  alt="img"
                />
                <p>Classic Shop</p>
              </div>

              <div className={cx("sideBarAd__demosBodyItem")}>
                <img
                  src="https://flatsome3.uxthemes.com/wp-content/uploads/2013/08/classic-shop-400x332.jpg"
                  alt="img"
                />
                <p>Classic Shop</p>
              </div>

              <div className={cx("sideBarAd__demosBodyItem")}>
                <img
                  src="https://flatsome3.uxthemes.com/wp-content/uploads/2013/08/classic-shop-400x332.jpg"
                  alt="img"
                />
                <p>Classic Shop</p>
              </div>

              <div className={cx("sideBarAd__demosBodyItem")}>
                <img
                  src="https://flatsome3.uxthemes.com/wp-content/uploads/2013/08/classic-shop-400x332.jpg"
                  alt="img"
                />
                <p>Classic Shop</p>
              </div>

              <div className={cx("sideBarAd__demosBodyItem")}>
                <img
                  src="https://flatsome3.uxthemes.com/wp-content/uploads/2013/08/classic-shop-400x332.jpg"
                  alt="img"
                />
                <p>Classic Shop</p>
              </div>

              <div className={cx("sideBarAd__demosBodyItem")}>
                <img
                  src="https://flatsome3.uxthemes.com/wp-content/uploads/2013/08/classic-shop-400x332.jpg"
                  alt="img"
                />
                <p>Classic Shop</p>
              </div>

              <div className={cx("sideBarAd__demosBodyItem")}>
                <img
                  src="https://flatsome3.uxthemes.com/wp-content/uploads/2013/08/classic-shop-400x332.jpg"
                  alt="img"
                />
                <p>Classic Shop</p>
              </div>

              <div className={cx("sideBarAd__demosBodyItem")}>
                <img
                  src="https://flatsome3.uxthemes.com/wp-content/uploads/2013/08/classic-shop-400x332.jpg"
                  alt="img"
                />
                <p>Classic Shop</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SideBarAd;
