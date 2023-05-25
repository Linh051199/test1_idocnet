import React from "react";
import classNames from "classnames/bind";

import styles from "./Footer.module.scss";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const cx = classNames.bind(styles);

function FooterTop() {
  return (
    <div className={cx("footerTop__wrapper", "grid")}>
      <div className={cx("footerTop__body", "grid", "wide")}>
        <div className={cx("footer__about")}>
          <div className={cx("footer__bodyTitle")}>About US</div>
          <div className={cx("footer__bodySeparate")}></div>
          <div className={cx("footer__aboutBody")}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat.
            <div className={cx("footer__aboutListIcon")}>
              <Tippy content="Follow on Facebook">
                <div className={cx("footer__aboutIcon", "fb_icon")}>
                  <i
                    class="fa-brands fa-facebook-f"
                    style={{ fontSize: "18px" }}
                  ></i>
                </div>
              </Tippy>
              <Tippy content="Follow on Instagram">
                <div className={cx("footer__aboutIcon", "in_icon")}>
                  <i
                    class="fa-brands fa-instagram"
                    style={{ fontSize: "18px" }}
                  ></i>
                </div>
              </Tippy>
              <Tippy content="Follow on Twitter">
                <div className={cx("footer__aboutIcon", "tw_icon")}>
                  <i
                    class="fa-brands fa-twitter"
                    style={{ fontSize: "18px" }}
                  ></i>
                </div>
              </Tippy>
              <Tippy content="Send us a email">
                <div className={cx("footer__aboutIcon", "le_icon")}>
                  <i
                    class="fa-regular fa-envelope"
                    style={{ fontSize: "18px" }}
                  ></i>
                </div>
              </Tippy>
              <Tippy content="Follow on Printerest">
                <div className={cx("footer__aboutIcon", "pi_icon")}>
                  <i
                    class="fa-brands fa-pinterest-p"
                    style={{ fontSize: "18px" }}
                  ></i>
                </div>
              </Tippy>
            </div>
          </div>
        </div>
        <div className={cx("footer__latestNews")}>
          <div className={cx("footer__bodyTitle")}>latest news</div>
          <div className={cx("footer__bodySeparate")}></div>
          <div className={cx("footer__latestNewBody")}>
            <div className={cx("footer__latestNewItem")}>
              <div className={cx("footer__latestNewItemDate")}>
                <div>19</div>
                <div>Nov</div>
              </div>
              <div className={cx("footer__latestNewItemBody")}>
                Welcome to Flatsome
              </div>
            </div>
            <div className={cx("footer__latestNewSeparate")}></div>
            <div className={cx("footer__latestNewItem")}>
              <div className={cx("footer__latestNewItemDate")}>
                <div>13</div>
                <div>Oct</div>
              </div>
              <div className={cx("footer__latestNewItemBody")}>
                Just another post with A Gallery
              </div>
            </div>
            <div className={cx("footer__latestNewSeparate")}></div>
            <div className={cx("footer__latestNewItem")}>
              <div className={cx("footer__latestNewItemDate")}>
                <div>13</div>
                <div>Oct</div>
              </div>
              <div className={cx("footer__latestNewItemBody")}>
                A Simple Blog Post
              </div>
            </div>
            <div className={cx("footer__latestNewSeparate")}></div>
            <div className={cx("footer__latestNewItem")}>
              <div className={cx("footer__latestNewItemDate")}>
                <div>01</div>
                <div>Jan</div>
              </div>
              <div className={cx("footer__latestNewItemBody")}>
                A Video Blog Post
              </div>
            </div>
          </div>
        </div>
        <div className={cx("footer__tags")}>
          <div className={cx("footer__bodyTitle")}>tags</div>
          <div className={cx("footer__bodySeparate")}></div>
          <div className={cx("footer__tagsList")}>
            <div className={cx("footer__tagsItem")}>Bag</div>
            <div className={cx("footer__tagsItem")}>Classic</div>
            <div className={cx("footer__tagsItem")}>Converse</div>
            <div className={cx("footer__tagsItem")}>Disel</div>
            <div className={cx("footer__tagsItem")}>Fit</div>
            <div className={cx("footer__tagsItem")}>Green</div>
            <div className={cx("footer__tagsItem")}>Jack and Jones</div>
            <div className={cx("footer__tagsItem")}>jeans</div>
            <div className={cx("footer__tagsItem")}>Jumper</div>
            <div className={cx("footer__tagsItem")}>Leather</div>
            <div className={cx("footer__tagsItem")}>Lee</div>
            <div className={cx("footer__tagsItem")}>Levis</div>
            <div className={cx("footer__tagsItem")}>Man</div>
            <div className={cx("footer__tagsItem")}>Party</div>
            <div className={cx("footer__tagsItem")}>Pink</div>
            <div className={cx("footer__tagsItem")}>Run</div>
            <div className={cx("footer__tagsItem")}>Start</div>
          </div>
        </div>
        <div className={cx("footer__signUp")}>
          <div className={cx("footer__bodyTitle")}>signup for newletter</div>
          <div className={cx("footer__bodySeparate")}></div>
          <div className={cx("footer__signUpBody")}>
            <div className={cx("footer__signUpTitle")}>
              Signup to get news about
              <br /> Flatsome & WooCommerce.
              <br /> We don't spam!
            </div>
            <div className={cx("footer__signUpForm")}>
              <input
                className={cx("footer__signUpInput")}
                type="text"
                placeholder="Your Email (required)"
              />
            </div>
            <button className={cx("footer__signUpBtn")}>SIGN UP</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterTop;
