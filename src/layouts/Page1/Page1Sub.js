import React from "react";
import classNames from "classnames/bind";
import styles from "./Page1.module.scss";

const cx = classNames.bind(styles);
function Page1Sub() {
  return (
    <div className={cx("page1Sub__wrapper", "grid")}>
      <div className={cx("page1Sub__body", "grid", "wide")}>
        <div className={cx("page1Sub__latest")}>
          <div className={cx("page1Body__sideBarTitle")}>latest</div>
          <div className={cx("page1Body__sideBarSeparateTitle")}></div>
          <div className={cx("page1Body__sideBarRecentItemBody")}>
            <div className={cx("page1Body__sideBarRecentItem")}>
              <div className={cx("page1Body__sideBarRecentItemImg")}>
                <img
                  src="https://flatsome3.uxthemes.com/wp-content/uploads/2013/08/258836-0426_1-100x100.jpeg"
                  alt="img"
                  width="60px"
                  height="60px"
                />
              </div>
              <div className={cx("page1Body__sideBarRecentItemDesc")}>
                <div className={cx("page1Body__sideBarRecentItemName")}>
                  Beyond Top NLY Trend
                </div>
                <div className={cx("page1Body__sideBarRecentItemPrice")}>
                  $9,90
                </div>
              </div>
            </div>
            <div className={cx("page1Body__sideBarSeparateItem")}></div>
            <div className={cx("page1Body__sideBarRecentItem")}>
              <div className={cx("page1Body__sideBarRecentItemImg")}>
                <img
                  src="https://flatsome3.uxthemes.com/wp-content/uploads/2013/08/538228-0286_1-100x100.jpeg"
                  alt="img"
                  width="60px"
                  height="60px"
                />
              </div>
              <div className={cx("page1Body__sideBarRecentItemDesc")}>
                <div className={cx("page1Body__sideBarRecentItemName")}>
                  Osaka Entry Tee Superdry 12
                </div>
                <div className={cx("page1Body__sideBarRecentItemPrice")}>
                  $29,00
                </div>
              </div>
            </div>
            <div className={cx("page1Body__sideBarSeparateItem")}></div>
            <div className={cx("page1Body__sideBarRecentItem")}>
              <div className={cx("page1Body__sideBarRecentItemImg")}>
                <img
                  src="https://flatsome3.uxthemes.com/wp-content/uploads/2013/08/282004-0286_2-100x100.jpeg"
                  alt="img"
                  width="60px"
                  height="60px"
                />
              </div>
              <div className={cx("page1Body__sideBarRecentItemDesc")}>
                <div className={cx("page1Body__sideBarRecentItemName")}>
                  All Star Canvas Hi Converse
                </div>
                <div className={cx("page1Body__sideBarRecentItemPrice")}>
                  $29,00
                </div>
              </div>
            </div>
            <div className={cx("page1Body__sideBarSeparateItem")}></div>
            <div className={cx("page1Body__sideBarRecentItem")}>
              <div className={cx("page1Body__sideBarRecentItemImg")}>
                <img
                  src="https://flatsome3.uxthemes.com/wp-content/uploads/2013/08/252678-0029_1-100x100.jpeg"
                  alt="img"
                  width="60px"
                  height="60px"
                />
              </div>
              <div className={cx("page1Body__sideBarRecentItemDesc")}>
                <div className={cx("page1Body__sideBarRecentItemName")}>
                  Fluro Big Pullover Designers Remix
                </div>
                <div className={cx("page1Body__sideBarRecentItemPrice")}>
                  $49,00
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("page1Sub__bestSelling")}>
          <div className={cx("page1Body__sideBarTitle")}>BEST SELLING</div>
          <div className={cx("page1Body__sideBarSeparateTitle")}></div>
          <div>
            <div className={cx("page1Body__sideBarRecentItem")}>
              <div className={cx("page1Body__sideBarRecentItemImg")}>
                <img
                  src="https://flatsome3.uxthemes.com/wp-content/uploads/2013/08/216756-0014_1-100x100.jpeg"
                  alt="img"
                  width="60px"
                  height="60px"
                />
              </div>
              <div className={cx("page1Body__sideBarRecentItemDesc")}>
                <div className={cx("page1Body__sideBarRecentItemName")}>
                  Daisy Bag Sonia by Sonia Rykiel
                </div>
                <div className={cx("page1Body__sideBarRecentItemPrice")}>
                  $2.999,00
                </div>
              </div>
            </div>
            <div className={cx("page1Body__sideBarSeparateItem")}></div>
            <div className={cx("page1Body__sideBarRecentItem")}>
              <div className={cx("page1Body__sideBarRecentItemImg")}>
                <img
                  src="https://flatsome3.uxthemes.com/wp-content/uploads/2013/08/258836-0426_1-100x100.jpeg"
                  alt="img"
                  width="60px"
                  height="60px"
                />
              </div>
              <div className={cx("page1Body__sideBarRecentItemDesc")}>
                <div className={cx("page1Body__sideBarRecentItemName")}>
                  Beyond Top NLY Trend
                </div>
                <div className={cx("page1Body__sideBarRecentItemPrice")}>
                  $9,90
                </div>
              </div>
            </div>
            <div className={cx("page1Body__sideBarSeparateItem")}></div>
            <div className={cx("page1Body__sideBarRecentItem")}>
              <div className={cx("page1Body__sideBarRecentItemImg")}>
                <img
                  src="https://flatsome3.uxthemes.com/wp-content/uploads/2013/06/T_7_front-100x100.jpg"
                  alt="img"
                  width="60px"
                  height="60px"
                />
              </div>
              <div className={cx("page1Body__sideBarRecentItemDesc")}>
                <div className={cx("page1Body__sideBarRecentItemName")}>
                  Happy Ninja
                </div>
                <div className={cx("page1Body__sideBarRecentItemPrice")}>
                  $18,00
                </div>
              </div>
            </div>
            <div className={cx("page1Body__sideBarSeparateItem")}></div>
            <div className={cx("page1Body__sideBarRecentItem")}>
              <div className={cx("page1Body__sideBarRecentItemImg")}>
                <img
                  src="https://flatsome3.uxthemes.com/wp-content/uploads/2013/08/917542-0001_1-100x100.jpeg"
                  alt="img"
                  width="60px"
                  height="60px"
                />
              </div>
              <div className={cx("page1Body__sideBarRecentItemDesc")}>
                <div className={cx("page1Body__sideBarRecentItemName")}>
                  Beyond Top NLY Trend
                </div>
                <div className={cx("page1Body__sideBarRecentItemPrice")}>
                  $9,90
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("page1Sub__featured")}>
          <div className={cx("page1Body__sideBarTitle")}>FEATURED</div>
          <div className={cx("page1Body__sideBarSeparateTitle")}></div>
          <div>
            <div className={cx("page1Body__sideBarRecentItem")}>
              <div className={cx("page1Body__sideBarRecentItemImg")}>
                <img
                  src="https://flatsome3.uxthemes.com/wp-content/uploads/2013/08/538228-0286_1-100x100.jpeg"
                  alt="img"
                  width="60px"
                  height="60px"
                />
              </div>
              <div className={cx("page1Body__sideBarRecentItemDesc")}>
                <div className={cx("page1Body__sideBarRecentItemName")}>
                  Osaka Entry Tee Superdry 12
                </div>
                <div className={cx("page1Body__sideBarRecentItemPrice")}>
                  $29,00
                </div>
              </div>
            </div>
            <div className={cx("page1Body__sideBarSeparateItem")}></div>
            <div className={cx("page1Body__sideBarRecentItem")}>
              <div className={cx("page1Body__sideBarRecentItemImg")}>
                <img
                  src="https://flatsome3.uxthemes.com/wp-content/uploads/2013/08/282004-0286_2-100x100.jpeg"
                  alt="img"
                  width="60px"
                  height="60px"
                />
              </div>
              <div className={cx("page1Body__sideBarRecentItemDesc")}>
                <div className={cx("page1Body__sideBarRecentItemName")}>
                  All Star Canvas Hi Converse
                </div>
                <div className={cx("page1Body__sideBarRecentItemPrice")}>
                  $29,00
                </div>
              </div>
            </div>
            <div className={cx("page1Body__sideBarSeparateItem")}></div>
            <div className={cx("page1Body__sideBarRecentItem")}>
              <div className={cx("page1Body__sideBarRecentItemImg")}>
                <img
                  src="https://flatsome3.uxthemes.com/wp-content/uploads/2013/08/252678-0029_1-100x100.jpeg"
                  alt="img"
                  width="60px"
                  height="60px"
                />
              </div>
              <div className={cx("page1Body__sideBarRecentItemDesc")}>
                <div className={cx("page1Body__sideBarRecentItemName")}>
                  Varanise CN Tee Hilfiger Denim
                </div>
                <div className={cx("page1Body__sideBarRecentItemPrice")}>
                  $15,00
                </div>
              </div>
            </div>
            <div className={cx("page1Body__sideBarSeparateItem")}></div>
            <div className={cx("page1Body__sideBarRecentItem")}>
              <div className={cx("page1Body__sideBarRecentItemImg")}>
                <img
                  src="https://flatsome3.uxthemes.com/wp-content/uploads/2013/08/538228-0286_1-100x100.jpeg"
                  alt="img"
                  width="60px"
                  height="60px"
                />
              </div>
              <div className={cx("page1Body__sideBarRecentItemDesc")}>
                <div className={cx("page1Body__sideBarRecentItemName")}>
                  Osaka Entry Tee Superdry 12
                </div>
                <div className={cx("page1Body__sideBarRecentItemPrice")}>
                  <span className={cx("page1Body__sideBarRecentItemPriceHide")}>
                    {" "}
                    $19,00{" "}
                  </span>{" "}
                  $29,00
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("page1Sub__rate")}>
          <div className={cx("page1Body__sideBarTitle")}>
            TOP RATED PRODUCTS
          </div>
          <div className={cx("page1Body__sideBarSeparateTitle")}></div>
          <div>
            <div className={cx("page1Body__sideBarRecentItem")}>
              <div className={cx("page1Body__sideBarRecentItemImg")}>
                <img
                  src="https://flatsome3.uxthemes.com/wp-content/uploads/2013/06/cd_6_angle-100x100.jpg"
                  alt="img"
                  width="60px"
                  height="60px"
                />
              </div>
              <div className={cx("page1Body__sideBarRecentItemDesc")}>
                <div className={cx("page1Body__sideBarRecentItemName")}>
                  Woo Single #2
                </div>
                <div className={cx("page1Body__sideBarRecentItemPrice")}>
                  <span className={cx("page1Body__sideBarRecentItemPriceHide")}>
                    {" "}
                    $3,00{" "}
                  </span>
                  $2,00
                </div>
              </div>
            </div>
            <div className={cx("page1Body__sideBarSeparateItem")}></div>
            <div className={cx("page1Body__sideBarRecentItem")}>
              <div className={cx("page1Body__sideBarRecentItemImg")}>
                <img
                  src="https://flatsome3.uxthemes.com/wp-content/uploads/2013/08/634054-5337_1-100x100.jpeg"
                  alt="img"
                  width="60px"
                  height="60px"
                />
              </div>
              <div className={cx("page1Body__sideBarRecentItemDesc")}>
                <div className={cx("page1Body__sideBarRecentItemName")}>
                  Lawrance Polo Tee Jack & Jones
                </div>
                <div className={cx("page1Body__sideBarRecentItemPrice")}>
                  $39,00
                </div>
              </div>
            </div>
            <div className={cx("page1Body__sideBarSeparateItem")}></div>
            <div className={cx("page1Body__sideBarRecentItem")}>
              <div className={cx("page1Body__sideBarRecentItemImg")}>
                <img
                  src="https://flatsome3.uxthemes.com/wp-content/uploads/2013/08/120390-0054_1-100x100.jpeg"
                  alt="img"
                  width="60px"
                  height="60px"
                />
              </div>
              <div className={cx("page1Body__sideBarRecentItemDesc")}>
                <div className={cx("page1Body__sideBarRecentItemName")}>
                  Classic Bag, Svea
                </div>
                <div className={cx("page1Body__sideBarRecentItemPrice")}>
                  $29,00
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page1Sub;
