import React, { useState } from "react";
import classNames from "classnames/bind";

import styles from "./Page2.module.scss";
import Item from "./Item";

const cx = classNames.bind(styles);

function Page2Body() {
  const [showClothing, sewShowClothing] = useState(false);

  const handleOnClickShowClothing = () => {
    sewShowClothing(!showClothing);
  };
  return (
    <div className={cx("page2Body__wrapper", "grid", "wide")}>
      <div className={cx("page2Body__sideBar")}>
        <div className={cx("page2Body__sideBarHeader")}>
          HOME / SHOP /<strong> SHOP</strong>
        </div>
        <div className={cx("page2Body__sideBarBrowse")}>
          <div className={cx("page2Body__sideBarTitle")}>BROWSE</div>
          <div className={cx("page2Body__sideBarSeparateTitle")}></div>
          <div className={cx("page2Body__sideBarBrowseList")}>
            <div className={cx("page2Body__sideBarBrowseItem")}>Bag</div>
            <div className={cx("page2Body__sideBarSeparateItem")}></div>

            <div className={cx("page2Body__sideBarBrowseItem")}>Booking</div>
            <div className={cx("page2Body__sideBarSeparateItem")}></div>

            <div className={cx("page2Body__sideBarBrowseItem")}>
              <p>Clothing</p>
              {showClothing ? (
                <div onClick={handleOnClickShowClothing}>
                  <i class="fa-solid fa-chevron-up"></i>
                </div>
              ) : (
                <div onClick={handleOnClickShowClothing}>
                  <i class="fa-solid fa-chevron-down"></i>
                </div>
              )}
            </div>
            {showClothing && (
              <div className={cx("page2Body__sideBarBrowseItemSub")}>
                Hoodies
              </div>
            )}

            <div className={cx("page2Body__sideBarSeparateItem")}></div>

            <div className={cx("page2Body__sideBarBrowseItem")}>Men</div>
            <div className={cx("page2Body__sideBarSeparateItem")}></div>

            <div className={cx("page2Body__sideBarBrowseItem")}>Music</div>
            <div className={cx("page2Body__sideBarSeparateItem")}></div>

            <div className={cx("page2Body__sideBarBrowseItem")}>Posters</div>
            <div className={cx("page2Body__sideBarSeparateItem")}></div>

            <div className={cx("page2Body__sideBarBrowseItem")}>Shoes</div>
            <div className={cx("page2Body__sideBarSeparateItem")}></div>

            <div className={cx("page2Body__sideBarBrowseItem")}>
              Uncategorized
            </div>
            <div className={cx("page2Body__sideBarSeparateItem")}></div>
            <div className={cx("page2Body__sideBarBrowseItem")}>Women</div>
          </div>
        </div>
        <div className={cx("page2Body__sideBarFilterColor")}>
          <div className={cx("page2Body__sideBarTitle")}>FILTER BY</div>
          <div className={cx("page2Body__sideBarSeparateTitle")}></div>
          <div className={cx("page2Body__sideBarColorList")}>
            <div className={cx("page2Body__sideBarColorItem")}>
              <div>Black</div>
              <div className={cx("page2Body__sideBarColorItemNumber")}>(3)</div>
            </div>
            <div className={cx("page2Body__sideBarSeparateItem")}></div>
            <div className={cx("page2Body__sideBarColorItem")}>
              <div>Blue</div>
              <div className={cx("page2Body__sideBarColorItemNumber")}>(1)</div>
            </div>
            <div className={cx("page2Body__sideBarSeparateItem")}></div>
            <div className={cx("page2Body__sideBarColorItem")}>
              <div>Green</div>
              <div className={cx("page2Body__sideBarColorItemNumber")}>(2)</div>
            </div>
          </div>
        </div>
        <div className={cx("page2Body__sideBarFilterPrice")}>
          <div className={cx("page2Body__sideBarTitle")}>FILTER BY PRICE</div>
          <div className={cx("page2Body__sideBarSeparateTitle")}></div>
          <input
            className={cx("page2Body__sideBarFilterPriceInput")}
            type="range"
          />
          <button className={cx("page2Body__sideBarFilterPriceBtn")}>
            FILTER
          </button>
        </div>
      </div>
      <div className={cx("page2Body__content")}>
        <div className={cx("page2Body__sorting")}>
          <div className={cx("page2Body__sortingShow")}>
            Showing all 12 results
          </div>
          <select className={cx("page2Body__sortingSelect")}>
            <option>Default sorting</option>
            <option>Short by popularity</option>
            <option>Short by average rating</option>
            <option>Short by latest</option>
            <option>Short by price:low to high</option>
            <option>Short by price:high to low</option>
          </select>
        </div>
        <div className={cx("page2Body__list")}>
          <div className={cx("page2Body__item")}>
            <Item
              name="Happy Ninja"
              src1="https://flatsome3.uxthemes.com/wp-content/uploads/2013/06/T_7_front-494x593.jpg"
              src2="https://flatsome3.uxthemes.com/wp-content/uploads/2013/06/T_7_back-494x593.jpg"
              price="$18,00"
              sale
            />
          </div>
          <div className={cx("page2Body__item")}>
            <Item
              name="Happy Ninja"
              src1="https://flatsome3.uxthemes.com/wp-content/uploads/2013/06/hoodie_4_front-494x593.jpg"
              src2="https://flatsome3.uxthemes.com/wp-content/uploads/2013/06/hoodie_4_back-494x593.jpg"
              price="$18,00"
            />
          </div>
          <div className={cx("page2Body__item")}>
            <Item
              name="Happy Ninja"
              src1="https://flatsome3.uxthemes.com/wp-content/uploads/2013/06/T_5_front-494x593.jpg"
              src2="https://flatsome3.uxthemes.com/wp-content/uploads/2013/06/T_5_back-494x593.jpg"
              price="$35,00"
            />
          </div>
          <div className={cx("page2Body__item")}>
            <Item
              name="Ninja Silhouette"
              src1="https://flatsome3.uxthemes.com/wp-content/uploads/2013/06/hoodie_5_front-494x593.jpg"
              src2="https://flatsome3.uxthemes.com/wp-content/uploads/2013/06/hoodie_5_back-494x593.jpg"
              price="$20,00"
            />
          </div>
          <div className={cx("page2Body__item")}>
            <Item
              name="Ninja Silhouette"
              src1="https://flatsome3.uxthemes.com/wp-content/uploads/2013/06/hoodie_3_front-494x593.jpg"
              src2="https://flatsome3.uxthemes.com/wp-content/uploads/2013/06/hoodie_3_back-494x593.jpg"
              price="$35,00"
            />
          </div>
          <div className={cx("page2Body__item")}>
            <Item
              name="Patient Ninja"
              src1="https://flatsome3.uxthemes.com/wp-content/uploads/2013/06/T_2_front-494x593.jpg"
              src2="https://flatsome3.uxthemes.com/wp-content/uploads/2013/06/T_2_back-494x593.jpg"
              price="$35,00"
            />
          </div>
          <div className={cx("page2Body__item")}>
            <Item
              name="Premium Quality"
              src1="https://flatsome3.uxthemes.com/wp-content/uploads/2013/06/T_4_front-494x593.jpg"
              src2="https://flatsome3.uxthemes.com/wp-content/uploads/2013/06/T_3_back-494x593.jpg"
              price="$20,00"
              sale
            />
          </div>
          <div className={cx("page2Body__item")}>
            <Item
              name="Ship Your Idea"
              src1="https://flatsome3.uxthemes.com/wp-content/uploads/2013/06/hoodie_7_front-494x593.jpg"
              src2="https://flatsome3.uxthemes.com/wp-content/uploads/2013/06/hoodie_7_back-494x593.jpg"
              price="$20,00"
              out
            />
          </div>
          <div className={cx("page2Body__item")}>
            <Item
              name="Ship Your Idea"
              src1="https://flatsome3.uxthemes.com/wp-content/uploads/2013/06/T_1_front-494x593.jpg"
              src2="https://flatsome3.uxthemes.com/wp-content/uploads/2013/06/T_1_back-494x593.jpg"
              price="$30,00 – $35,00"
              sale
            />
          </div>
          <div className={cx("page2Body__item")}>
            <Item
              name="Woo Logo"
              src1="https://flatsome3.uxthemes.com/wp-content/uploads/2013/06/hoodie_6_front-494x593.jpg"
              src2="https://flatsome3.uxthemes.com/wp-content/uploads/2013/06/hoodie_6_back-494x593.jpg"
              price="$35,00"
              sale
            />
          </div>
          <div className={cx("page2Body__item")}>
            <Item
              name="Woo Ninja"
              src1="https://flatsome3.uxthemes.com/wp-content/uploads/2013/06/hoodie_2_front-494x593.jpg"
              src2="https://flatsome3.uxthemes.com/wp-content/uploads/2013/06/hoodie_2_back-494x593.jpg"
              price="$35,00"
            />
          </div>
          <div className={cx("page2Body__item")}>
            <Item
              name="Woo Ninja"
              src1="https://flatsome3.uxthemes.com/wp-content/uploads/2013/06/T_6_front-494x593.jpg"
              src2="https://flatsome3.uxthemes.com/wp-content/uploads/2013/06/T_6_back-494x593.jpg"
              price="$20,00"
            />
          </div>
        </div>
        <div className={cx("page2Body__desc")}>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page2Body;
