import React, { useState } from "react";
import classNames from "classnames/bind";

import styles from "./Header.module.scss";
import images from "../../../assets/images";
import Tippy from "@tippyjs/react";

const cx = classNames.bind(styles);
function HeaderBottom() {
  const [showMediaNavDemos, setShowMediaNavDemos] = useState(false);

  const handleShowDemos = () => {
    setShowMediaNavDemos(!showMediaNavDemos);
  };
  return (
    <div className={cx("headerBottom__wrapper", "grid", "wide")}>
      <label htmlFor="showNav" className={cx("headerBottom__btnNavMedia")}>
        <i class="fa-solid fa-bars"></i>
      </label>
      <div className={cx("headerBottom__logo")}>
        <img className={cx("logo")} src={images.logo} alt="img" />
      </div>
      <ul className={cx("headerBottom__navBar")}>
        <li className={cx("headerBottom__navItem")}>
          <i
            class="fa-solid fa-magnifying-glass"
            style={{ fontSize: "18px" }}
          ></i>
        </li>
        <li className={cx("headerBottom__navItem")}>
          DEMOS<i class="fa-solid fa-chevron-down"></i>
          <ul className={cx("headerBottom__navItem-subMenu")}>
            <li className={cx("headerBottom__navItem-subMenuTitle")}>
              SHOP DEMOS
              <div className={cx("headerBottom__navItem-Separate")}></div>
              <ul>
                <li className={cx("headerBottom__navItem-subMenuItem")}>
                  Classic Shop
                </li>
                <div className={cx("headerBottom__navItem-Separate")}></div>
                <li className={cx("headerBottom__navItem-subMenuItem")}>
                  Simple Slider
                </li>
                <div className={cx("headerBottom__navItem-Separate")}></div>
                <li className={cx("headerBottom__navItem-subMenuItem")}>
                  Fullscreen Fashion
                </li>
                <div className={cx("headerBottom__navItem-Separate")}></div>
                <li className={cx("headerBottom__navItem-subMenuItem")}>
                  Video Cover
                </li>
                <div className={cx("headerBottom__navItem-Separate")}></div>
                <li className={cx("headerBottom__navItem-subMenuItem")}>
                  Slider Cover
                </li>
                <div className={cx("headerBottom__navItem-Separate")}></div>
                <li className={cx("headerBottom__navItem-subMenuItem")}>
                  Grid Style 1
                </li>
                <div className={cx("headerBottom__navItem-Separate")}></div>
                <li className={cx("headerBottom__navItem-subMenuItem")}>
                  Grid Style 2
                </li>
                <div className={cx("headerBottom__navItem-Separate")}></div>
                <li className={cx("headerBottom__navItem-subMenuItem")}>
                  Grid Style 3
                </li>
              </ul>
            </li>
            <li className={cx("headerBottom__navItem-subMenuTitle")}>
              MORE SHOP DEMOS
              <div className={cx("headerBottom__navItem-Separate")}></div>
              <ul>
                <li className={cx("headerBottom__navItem-subMenuItem")}>
                  Mega Shop
                </li>
                <div className={cx("headerBottom__navItem-Separate")}></div>
                <li className={cx("headerBottom__navItem-subMenuItem")}>
                  Cute Shop
                </li>
                <div className={cx("headerBottom__navItem-Separate")}></div>
                <li className={cx("headerBottom__navItem-subMenuItem")}>
                  Sport Shop
                </li>
                <div className={cx("headerBottom__navItem-Separate")}></div>
                <li className={cx("headerBottom__navItem-subMenuItem")}>
                  Vendor Shop
                </li>
                <div className={cx("headerBottom__navItem-Separate")}></div>
                <li className={cx("headerBottom__navItem-subMenuItem")}>
                  Parallax Shop
                </li>
                <div className={cx("headerBottom__navItem-Separate")}></div>
                <li className={cx("headerBottom__navItem-subMenuItem")}>
                  Big Sale
                </li>
                <div className={cx("headerBottom__navItem-Separate")}></div>
                <li className={cx("headerBottom__navItem-subMenuItem")}>
                  Sale Countdown
                </li>
              </ul>
            </li>
            <li className={cx("headerBottom__navItem-subMenuTitle")}>
              BUSINESS DEMOS
              <div className={cx("headerBottom__navItem-Separate")}></div>
              <ul>
                <li className={cx("headerBottom__navItem-subMenuItem")}>
                  Agency
                </li>
                <div className={cx("headerBottom__navItem-Separate")}></div>

                <li className={cx("headerBottom__navItem-subMenuItem")}>
                  Corporate
                </li>
                <div className={cx("headerBottom__navItem-Separate")}></div>

                <li className={cx("headerBottom__navItem-subMenuItem")}>
                  Freelancer
                </li>
                <div className={cx("headerBottom__navItem-Separate")}></div>

                <li className={cx("headerBottom__navItem-subMenuItem")}>
                  Explore
                </li>
                <div className={cx("headerBottom__navItem-Separate")}></div>

                <li className={cx("headerBottom__navItem-subMenuItem")}>
                  Lifestyle
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className={cx("headerBottom__navItem")}>
          FEATURES<i class="fa-solid fa-chevron-down"></i>
          <ul className={cx("headerBottom__navItem-subMenu")}>
            <li className={cx("headerBottom__navItem-subMenuTitle")}>
              FEATURES
              <div className={cx("headerBottom__navItem-Separate")}></div>
              <ul>
                <li className={cx("headerBottom__navItem-subMenuItem")}>
                  Core Features
                </li>
                <div className={cx("headerBottom__navItem-Separate")}></div>
                <li
                  className={cx(
                    "headerBottom__navItem-subMenuItem",
                    "lable-new"
                  )}
                >
                  What's News
                </li>
                <div className={cx("headerBottom__navItem-Separate")}></div>
                <li
                  className={cx(
                    "headerBottom__navItem-subMenuItem",
                    "lable-popular"
                  )}
                >
                  UX Builder
                </li>
                <div className={cx("headerBottom__navItem-Separate")}></div>
                <li
                  className={cx(
                    "headerBottom__navItem-subMenuItem",
                    "lable-popular"
                  )}
                >
                  Header Designer
                </li>
                <div className={cx("headerBottom__navItem-Separate")}></div>
                <li
                  className={cx(
                    "headerBottom__navItem-subMenuItem",
                    "lable-new"
                  )}
                >
                  Flatsome Studio
                </li>
                <div className={cx("headerBottom__navItem-Separate")}></div>
                <li className={cx("headerBottom__navItem-subMenuItem")}>
                  Fast Performance
                </li>
                <div className={cx("headerBottom__navItem-Separate")}></div>
                <li className={cx("headerBottom__navItem-subMenuItem")}>
                  Parallax Scrolling
                </li>
                <div className={cx("headerBottom__navItem-Separate")}></div>
                <li className={cx("headerBottom__navItem-subMenuItem")}>
                  Single Page Navigation
                </li>
                <div className={cx("headerBottom__navItem-Separate")}></div>
                <li className={cx("headerBottom__navItem-subMenuItem")}>
                  Sticky Sections
                </li>
                <div className={cx("headerBottom__navItem-Separate")}></div>
                <li className={cx("headerBottom__navItem-subMenuItem")}>
                  Getting Started
                </li>
                <div className={cx("headerBottom__navItem-Separate")}></div>
                <li className={cx("headerBottom__navItem-subMenuItem")}>
                  Footer Features
                </li>
              </ul>
            </li>
            <li className={cx("headerBottom__navItem-subMenuTitle")}>
              MORE
              <div className={cx("headerBottom__navItem-Separate")}></div>
              <ul>
                <li className={cx("headerBottom__navItem-subMenuItem")}>
                  Blog Features
                </li>
                <div className={cx("headerBottom__navItem-Separate")}></div>
                <li className={cx("headerBottom__navItem-subMenuItem")}>
                  Portfolio Features
                </li>
                <div className={cx("headerBottom__navItem-Separate")}></div>
                <li className={cx("headerBottom__navItem-subMenuItem")}>
                  Blocks Elements
                </li>
                <div className={cx("headerBottom__navItem-Separate")}></div>
                <li className={cx("headerBottom__navItem-subMenuItem")}>
                  Vides & Docs
                </li>
                <div className={cx("headerBottom__navItem-Separate")}></div>
                <li
                  className={cx(
                    "headerBottom__navItem-subMenuItem",
                    "label-hot"
                  )}
                >
                  Customer reviews
                </li>
                <div className={cx("headerBottom__navItem-Separate")}></div>

                <li className={cx("headerBottom__navItem-subMenuItem")}>
                  Element Overviews
                </li>
                <div className={cx("headerBottom__navItem-Separate")}></div>
                <li className={cx("headerBottom__navItem-subMenuItem")}>
                  WOOCOMMRCE
                </li>
                <div className={cx("headerBottom__navItem-Separate")}></div>
                <li className={cx("headerBottom__navItem-subMenuItem")}>
                  Category Fetures
                </li>
                <div className={cx("headerBottom__navItem-Separate")}></div>
                <li className={cx("headerBottom__navItem-subMenuItem")}>
                  Product Features
                </li>
                <div className={cx("headerBottom__navItem-Separate")}></div>
                <li className={cx("headerBottom__navItem-subMenuItem")}>
                  Catalogue Mode{" "}
                </li>
              </ul>
            </li>
            <li>
              <div>
                <img
                  src="https://flatsome3.uxthemes.com/wp-content/uploads/2017/11/custom-image-1.jpg"
                  alt="img"
                  width="180px"
                  height="532px"
                />
              </div>
            </li>
          </ul>
        </li>
        <li className={cx("headerBottom__navItem")}>
          SHOP<i class="fa-solid fa-chevron-down"></i>
          <ul className={cx("headerBottom__navItem-subMenu")}>
            <li className={cx("headerBottom__navItem-subMenuTitle")}>
              CATEGORY PAGE
              <div className={cx("headerBottom__navItem-Separate")}></div>
              <ul>
                <li className={cx("headerBottom__navItem-subMenuItem")}>
                  Overview
                </li>
                <div className={cx("headerBottom__navItem-Separate")}></div>
                <li className={cx("headerBottom__navItem-subMenuItem")}>
                  Off-Canvas Filtering
                </li>
                <div className={cx("headerBottom__navItem-Separate")}></div>
                <li className={cx("headerBottom__navItem-subMenuItem")}>
                  Full Width Layout
                </li>
                <div className={cx("headerBottom__navItem-Separate")}></div>
                <li className={cx("headerBottom__navItem-subMenuItem")}>
                  List Layout
                </li>
                <div className={cx("headerBottom__navItem-Separate")}></div>
                <li className={cx("headerBottom__navItem-subMenuItem")}>
                  Masonry Layout
                </li>
                <div className={cx("headerBottom__navItem-Separate")}></div>
                <li className={cx("headerBottom__navItem-subMenuItem")}>
                  Top content
                </li>
                <div className={cx("headerBottom__navItem-Separate")}></div>
                <li className={cx("headerBottom__navItem-subMenuItem")}>
                  Transparent Header
                </li>
                <div className={cx("headerBottom__navItem-Separate")}></div>
                <li className={cx("headerBottom__navItem-subMenuItem")}>
                  Dark Style
                </li>
              </ul>
            </li>
            <li className={cx("headerBottom__navItem-subMenuTitle")}>
              PRODUCT PAGE
              <div className={cx("headerBottom__navItem-Separate")}></div>
              <ul>
                <li className={cx("headerBottom__navItem-subMenuItem")}>
                  Overview
                </li>
                <div className={cx("headerBottom__navItem-Separate")}></div>
                <li className={cx("headerBottom__navItem-subMenuItem")}>
                  Left Column
                </li>
                <div className={cx("headerBottom__navItem-Separate")}></div>
                <li className={cx("headerBottom__navItem-subMenuItem")}>
                  Right Column
                </li>
                <div className={cx("headerBottom__navItem-Separate")}></div>
                <li className={cx("headerBottom__navItem-subMenuItem")}>
                  Full Width Gallery
                </li>
                <div className={cx("headerBottom__navItem-Separate")}></div>
                <li className={cx("headerBottom__navItem-subMenuItem")}>
                  Vertical Gallery
                </li>
                <div className={cx("headerBottom__navItem-Separate")}></div>
                <li className={cx("headerBottom__navItem-subMenuItem")}>
                  Variations
                </li>
                <div className={cx("headerBottom__navItem-Separate")}></div>
                <li className={cx("headerBottom__navItem-subMenuItem")}>
                  Transparent Header
                </li>
                <div className={cx("headerBottom__navItem-Separate")}></div>
                <li className={cx("headerBottom__navItem-subMenuItem")}>
                  Affiliate
                </li>
              </ul>
            </li>
            <li className={cx("headerBottom__navItem-subMenuTitle")}>
              MORE...
              <div className={cx("headerBottom__navItem-Separate")}></div>
              <ul>
                <li className={cx("headerBottom__navItem-subMenuItem")}>
                  Accordion Style
                </li>
                <div className={cx("headerBottom__navItem-Separate")}></div>
                <li className={cx("headerBottom__navItem-subMenuItem")}>
                  Section Style
                </li>
                <div className={cx("headerBottom__navItem-Separate")}></div>
                <li className={cx("headerBottom__navItem-subMenuItem")}>
                  Vertical Tabs
                </li>
                <div className={cx("headerBottom__navItem-Separate")}></div>
                <li className={cx("headerBottom__navItem-subMenuItem")}>
                  Normal Tabs
                </li>
                <div className={cx("headerBottom__navItem-Separate")}></div>
                <li className={cx("headerBottom__navItem-subMenuItem")}>
                  Dark Style
                </li>
                <div className={cx("headerBottom__navItem-Separate")}></div>
                <li className={cx("headerBottom__navItem-subMenuItem")}>
                  Image Zoom
                </li>
                <div className={cx("headerBottom__navItem-Separate")}></div>
                <li className={cx("headerBottom__navItem-subMenuItem")}>
                  Catalouge Mode
                </li>
                <div className={cx("headerBottom__navItem-Separate")}></div>
                <li className={cx("headerBottom__navItem-subMenuItem")}>
                  Product Examples
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className={cx("headerBottom__navItem")}>
          PAGES<i class="fa-solid fa-chevron-down"></i>
          <ul className={cx("headerBottom__navItem-subMenu")}>
            <li className={cx("headerBottom__navItem-subMenuTitle")}>
              <ul>
                <li className={cx("headerBottom__navItem-subMenuItem")}>
                  Portfolio
                </li>
                <div className={cx("headerBottom__navItem-Separate")}></div>
                <li className={cx("headerBottom__navItem-subMenuItem")}>
                  About
                </li>
                <div className={cx("headerBottom__navItem-Separate")}></div>
                <li className={cx("headerBottom__navItem-subMenuItem")}>
                  Contact
                </li>
                <div className={cx("headerBottom__navItem-Separate")}></div>
                <li className={cx("headerBottom__navItem-subMenuItem")}>
                  Our Stores
                </li>
                <div className={cx("headerBottom__navItem-Separate")}></div>
                <li className={cx("headerBottom__navItem-subMenuItem")}>
                  Maintenances
                </li>
                <div className={cx("headerBottom__navItem-Separate")}></div>
                <li className={cx("headerBottom__navItem-subMenuItem")}>
                  Page Layouts
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className={cx("headerBottom__navItem")}>BLOG</li>
        <li className={cx("headerBottom__navItem")}>ELEMENTS</li>
      </ul>
      <div>
        <input
          className={cx("input__media")}
          type="checkbox"
          id="showNav"
          hidden
        />
        <div className={cx("headerBottom__navBarMedia")}>
          <div className={cx("headerBottom__navBarMediaSearch")}>
            <input
              className={cx("headerBottom__navBarMediaSearchInput")}
              type="text"
              placeholder="Search..."
            />
            <button className={cx("headerBottom__navBarMediaSearchBtn")}>
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <div className={cx("headerBottom__navBarMediaItemSeparate")}></div>

          <div
            htmlFor="showNav"
            className={cx("headerBottom__navBarMediaItem")}
            onClick={() => setShowMediaNavDemos(!showMediaNavDemos)}
          >
            <div className={cx("headerBottom__navBarMediaItemHeader")}>
              <span> DEMOS </span>
              <div
                className={showMediaNavDemos ? cx("active") : cx("noActive")}
              >
                <div onClick={handleShowDemos}>
                  <i
                    class="fa-solid fa-chevron-down"
                    style={{ cursor: "pointer", fontSize: "16px" }}
                  ></i>
                </div>
              </div>
            </div>
            {showMediaNavDemos && (
              <ul className={cx("headerBottom__navBarMediaItemList")}>
                <li
                  className={cx("headerBottom__navBarMediaItemListItemTitle")}
                >
                  SHOP DEMOS
                  <ul>
                    <li>Classic Shop</li>
                    <li>Simple Slider</li>
                    <li>Fullscreen Fashion</li>
                    <li>Video Cover</li>
                    <li>Slider Cover</li>
                    <li>Grid Style 1</li>
                    <li>Grid Style 2</li>
                    <li>Grid Style 3</li>
                  </ul>
                </li>
                <li
                  className={cx("headerBottom__navBarMediaItemListItemTitle")}
                >
                  MORE SHOP DEMOS
                  <ul>
                    <li>Mega Shop</li>
                    <li>Cute Shop</li>
                    <li>Sport Shop</li>
                    <li>Vendor Shop</li>
                    <li>Parallax Shop</li>
                    <li>Big Sale</li>
                    <li>Sale Countdown</li>
                  </ul>
                </li>
                <li
                  className={cx("headerBottom__navBarMediaItemListItemTitle")}
                >
                  BUSINESS DEMOS
                  <ul>
                    <li>Agency</li>
                    <li>Corporate</li>
                    <li>Freelancer</li>
                    <li>Explore</li>
                    <li>Lifestyle</li>
                  </ul>
                </li>

                <li></li>
                <li></li>
              </ul>
            )}
          </div>
          <div className={cx("headerBottom__navBarMediaItemSeparate")}></div>
          <label className={cx("headerBottom__navBarMediaItem")}>
            <div className={cx("headerBottom__navBarMediaItemHeader")}>
              <span> FEATURES </span>
              <i class="fa-solid fa-chevron-down"></i>
            </div>
          </label>
          <div className={cx("headerBottom__navBarMediaItemSeparate")}></div>

          <label className={cx("headerBottom__navBarMediaItem")}>
            <div className={cx("headerBottom__navBarMediaItemHeader")}>
              <span> SHOP </span>
              <i class="fa-solid fa-chevron-down"></i>
            </div>
          </label>
          <div className={cx("headerBottom__navBarMediaItemSeparate")}></div>

          <label className={cx("headerBottom__navBarMediaItem")}>
            <div className={cx("headerBottom__navBarMediaItemHeader")}>
              <span> PAGES </span>
              <i class="fa-solid fa-chevron-down"></i>
            </div>
          </label>
          <div className={cx("headerBottom__navBarMediaItemSeparate")}></div>

          <label className={cx("headerBottom__navBarMediaItem")}>
            <span>BLOG</span>
          </label>
          <div className={cx("headerBottom__navBarMediaItemSeparate")}></div>

          <label className={cx("headerBottom__navBarMediaItem")}>
            ELEMENTS
          </label>
          <div className={cx("headerBottom__navBarMediaItemSeparate")}></div>

          <label className={cx("headerBottom__navBarMediaItem")}>LOGIN</label>
          <div className={cx("headerBottom__navBarMediaItemSeparate")}></div>

          <label className={cx("headerBottom__navBarMediaItem")}>
            <div>
              <i
                class="fa-regular fa-envelope"
                style={{ paddingRight: "5px" }}
              ></i>
              Newsletter
            </div>
          </label>
          <div className={cx("headerBottom__navBarMediaItemSeparate")}></div>

          <div className={cx("navMedia__icon")}>
            <Tippy content="Follow on Facebook">
              <div className={cx("headerTop_iconItem")}>
                <i
                  class="fa-brands fa-facebook-f"
                  style={{ padding: " 0 10px", fontSize: "20px" }}
                ></i>
              </div>
            </Tippy>
            <Tippy content="Follow on Instagram">
              <div className={cx("headerTop_iconItem")}>
                <i
                  class="fa-brands fa-instagram"
                  style={{ padding: " 0 10px", fontSize: "20px" }}
                ></i>
              </div>
            </Tippy>
            <Tippy content="Follow on Twitter">
              <div className={cx("headerTop_iconItem")}>
                <i
                  class="fa-brands fa-twitter"
                  style={{ padding: " 0 10px", fontSize: "20px" }}
                ></i>
              </div>
            </Tippy>
            <Tippy content="Send us a email">
              <div className={cx("headerTop_iconItem")}>
                <i
                  class="fa-regular fa-envelope"
                  style={{ padding: " 0 10px", fontSize: "20px" }}
                ></i>
              </div>
            </Tippy>
          </div>
        </div>

        <label htmlFor="showNav" className={cx("overlay")}>
          <label
            htmlFor="showNav"
            className={cx("headerBottom__navBarMediaCloseBtn")}
          >
            <i class="fa-solid fa-xmark"></i>
          </label>
        </label>
      </div>

      <div className={cx("headerBottom__contact")}>
        <div className={cx("headerBottom__contactLogin")}>LOGIN</div>
        <div className={cx("headerBottom__contactSeparate")}></div>
        <div className={cx("headerBottom__contactCart")}>
          <div className={cx("headerBottom__contactCartTitle")}>
            CART / $0,00
          </div>
          <div className={cx("headerBottom__contactCartIcon")}>
            0
            <strong />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderBottom;
