import React from "react";
import classNames from "classnames/bind";
import styles from "./Page1.module.scss";
import Item from "./Item";

const cx = classNames.bind(styles);
function Page1Body() {
  return (
    <div className={cx("page1Body__wrapper", "grid", "wide")}>
      <div className={cx("page1Body__sideBar")}>
        <div className={cx("page1Body__sideBarHeader")}>
          HOME /<strong> SHOP</strong>
        </div>
        <div className={cx("page1Body__sideBarBrowse")}>
          <div className={cx("page1Body__sideBarTitle")}>BROWSE</div>
          <div className={cx("page1Body__sideBarSeparateTitle")}></div>
          <div className={cx("page1Body__sideBarBrowseList")}>
            <div className={cx("page1Body__sideBarBrowseItem")}>Bag</div>
            <div className={cx("page1Body__sideBarSeparateItem")}></div>

            <div className={cx("page1Body__sideBarBrowseItem")}>Booking</div>
            <div className={cx("page1Body__sideBarSeparateItem")}></div>

            <div className={cx("page1Body__sideBarBrowseItem")}>Clothing</div>
            <div className={cx("page1Body__sideBarSeparateItem")}></div>

            <div className={cx("page1Body__sideBarBrowseItem")}>Men</div>
            <div className={cx("page1Body__sideBarSeparateItem")}></div>

            <div className={cx("page1Body__sideBarBrowseItem")}>Music</div>
            <div className={cx("page1Body__sideBarSeparateItem")}></div>

            <div className={cx("page1Body__sideBarBrowseItem")}>Posters</div>
            <div className={cx("page1Body__sideBarSeparateItem")}></div>

            <div className={cx("page1Body__sideBarBrowseItem")}>Shoes</div>
            <div className={cx("page1Body__sideBarSeparateItem")}></div>

            <div className={cx("page1Body__sideBarBrowseItem")}>
              Uncategorized
            </div>
            <div className={cx("page1Body__sideBarSeparateItem")}></div>
            <div className={cx("page1Body__sideBarBrowseItem")}>Women</div>
          </div>
        </div>
        <div className={cx("page1Body__sideBarFilterColor")}>
          <div className={cx("page1Body__sideBarTitle")}>FILTER BY</div>
          <div className={cx("page1Body__sideBarSeparateTitle")}></div>
          <div className={cx("page1Body__sideBarColorList")}>
            <div className={cx("page1Body__sideBarColorItem")}>
              <div>Black</div>
              <div className={cx("page1Body__sideBarColorItemNumber")}>(3)</div>
            </div>
            <div className={cx("page1Body__sideBarSeparateItem")}></div>
            <div className={cx("page1Body__sideBarColorItem")}>
              <div>Blue</div>
              <div className={cx("page1Body__sideBarColorItemNumber")}>(1)</div>
            </div>
            <div className={cx("page1Body__sideBarSeparateItem")}></div>
            <div className={cx("page1Body__sideBarColorItem")}>
              <div>Green</div>
              <div className={cx("page1Body__sideBarColorItemNumber")}>(2)</div>
            </div>
          </div>
        </div>
        <div className={cx("page1Body__sideBarFilterPrice")}>
          <div className={cx("page1Body__sideBarTitle")}>FILTER BY PRICE</div>
          <div className={cx("page1Body__sideBarSeparateTitle")}></div>
          <input
            className={cx("page1Body__sideBarFilterPriceInput")}
            type="range"
          />
          <button className={cx("page1Body__sideBarFilterPriceBtn")}>
            FILTER
          </button>
        </div>
        <div className={cx("page1Body__sideBarRecently")}>
          <div className={cx("page1Body__sideBarTitle")}>Recently viewed</div>
          <div className={cx("page1Body__sideBarSeparateTitle")}></div>
          <div className={cx("page1Body__sideBarRecentlList")}>
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
                  $39,00
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
          </div>
        </div>
      </div>
      <div className={cx("page1Body__content")}>
        <div className={cx("page1Body__contentList")}>
          <div className={cx("page1Body__contentItem")}>
            <Item title="" numProduct="" src="" />
          </div>
          <div className={cx("page1Body__contentItem")}>
            <Item title="" numProduct="" src="" />
          </div>
          <div className={cx("page1Body__contentItem")}>
            <Item title="" numProduct="" src="" />
          </div>
          <div className={cx("page1Body__contentItem")}>
            <Item title="" numProduct="" src="" />
          </div>
          <div className={cx("page1Body__contentItem")}>
            <Item title="" numProduct="" src="" />
          </div>
          <div className={cx("page1Body__contentItem")}>
            <Item title="" numProduct="" src="" />
          </div>
          <div className={cx("page1Body__contentItem")}>
            <Item title="" numProduct="" src="" />
          </div>
          <div className={cx("page1Body__contentItem")}>
            <Item title="" numProduct="" src="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page1Body;
