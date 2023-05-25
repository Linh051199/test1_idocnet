import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Page1.module.scss";
import Item from "./Item";

const cx = classNames.bind(styles);
function Page1Body() {
  const [showClothing, sewShowClothing] = useState(false);
  const [showMen, sewShowMen] = useState(false);
  const [showMusic, sewShowMusic] = useState(false);

  const handleShowClothing = () => {
    sewShowClothing(!showClothing);
  };

  const handleShowMen = () => {
    sewShowMen(!showMen);
  };

  const handleShowMusic = () => {
    sewShowMusic(!showMusic);
  };
  return (
    <div className={cx("page1Body__wrapper", "grid", "wide")}>
      <input
        className={cx("input__media")}
        type="checkbox"
        id="input__mediaPage1"
        hidden
      />
      <div className={cx("title__media")}>
        <div className={cx("page1Body__sideBarHeader")}>
          HOME /<strong> SHOP</strong>
        </div>
      </div>
      <label htmlFor="input__mediaPage1" className={cx("filter__media")}>
        <i class="fa-solid fa-list"></i> FILTER
      </label>
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

            <div className={cx("page1Body__sideBarBrowseItem")}>
              <div>Clothing</div>
              <div
                className={
                  showClothing
                    ? cx("page1Body__sideBarBrowseItemBtn", "active")
                    : cx("page1Body__sideBarBrowseItemBtn", "noActive")
                }
              >
                <div onClick={handleShowClothing}>
                  <i
                    class="fa-solid fa-chevron-down"
                    style={{ cursor: "pointer", fontSize: "12px" }}
                  ></i>
                </div>
              </div>
            </div>
            {showClothing && (
              <div className={cx("page1Body__sideBarBrowseItemSub")}>
                Hoodies
              </div>
            )}
            <div className={cx("page1Body__sideBarSeparateItem")}></div>

            <div className={cx("page1Body__sideBarBrowseItem")}>
              <div>Men</div>
              <div
                className={
                  showMen
                    ? cx("page1Body__sideBarBrowseItemBtn", "active")
                    : cx("page1Body__sideBarBrowseItemBtn", "noActive")
                }
              >
                <div onClick={handleShowMen}>
                  <i
                    class="fa-solid fa-chevron-down"
                    style={{ cursor: "pointer", fontSize: "12px" }}
                  ></i>
                </div>
              </div>
            </div>
            {showMen && (
              <div className={cx("page1Body__sideBarBrowseItemSub")}>
                T-Shirts
              </div>
            )}
            <div className={cx("page1Body__sideBarSeparateItem")}></div>

            <div className={cx("page1Body__sideBarBrowseItem")}>
              <div>Music</div>
              <div
                className={
                  showMusic
                    ? cx("page1Body__sideBarBrowseItemBtn", "active")
                    : cx("page1Body__sideBarBrowseItemBtn", "noActive")
                }
              >
                <div onClick={handleShowMusic}>
                  <i
                    class="fa-solid fa-chevron-down"
                    style={{ cursor: "pointer", fontSize: "12px" }}
                  ></i>
                </div>
              </div>
            </div>
            {showMusic && (
              <>
                <div className={cx("page1Body__sideBarBrowseItemSub")}>
                  Albums
                </div>
                <div className={cx("page1Body__sideBarBrowseItemSub")}>
                  Singles
                </div>
              </>
            )}
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

      <div className={cx("sideBar__media")}>
        <div className={cx("page1Body__sideBarBrowse")}>
          <div className={cx("page1Body__sideBarTitle")}>BROWSE</div>
          <div className={cx("page1Body__sideBarSeparateTitle")}></div>
          <div className={cx("page1Body__sideBarBrowseList")}>
            <div className={cx("page1Body__sideBarBrowseItem")}>Bag</div>
            <div className={cx("page1Body__sideBarSeparateItem")}></div>

            <div className={cx("page1Body__sideBarBrowseItem")}>Booking</div>
            <div className={cx("page1Body__sideBarSeparateItem")}></div>

            <div className={cx("page1Body__sideBarBrowseItem")}>
              <div>Clothing</div>
              <div
                className={
                  showClothing
                    ? cx("page1Body__sideBarBrowseItemBtn", "active")
                    : cx("page1Body__sideBarBrowseItemBtn", "noActive")
                }
              >
                <div onClick={handleShowClothing}>
                  <i
                    class="fa-solid fa-chevron-down"
                    style={{ cursor: "pointer", fontSize: "12px" }}
                  ></i>
                </div>
              </div>
            </div>
            {showClothing && (
              <div className={cx("page1Body__sideBarBrowseItemSub")}>
                Hoodies
              </div>
            )}
            <div className={cx("page1Body__sideBarSeparateItem")}></div>

            <div className={cx("page1Body__sideBarBrowseItem")}>
              <div>Men</div>
              <div
                className={
                  showMen
                    ? cx("page1Body__sideBarBrowseItemBtn", "active")
                    : cx("page1Body__sideBarBrowseItemBtn", "noActive")
                }
              >
                <div onClick={handleShowMen}>
                  <i
                    class="fa-solid fa-chevron-down"
                    style={{ cursor: "pointer", fontSize: "12px" }}
                  ></i>
                </div>
              </div>
            </div>
            {showMen && (
              <div className={cx("page1Body__sideBarBrowseItemSub")}>
                T-Shirts
              </div>
            )}
            <div className={cx("page1Body__sideBarSeparateItem")}></div>

            <div className={cx("page1Body__sideBarBrowseItem")}>
              <div>Music</div>
              <div
                className={
                  showMusic
                    ? cx("page1Body__sideBarBrowseItemBtn", "active")
                    : cx("page1Body__sideBarBrowseItemBtn", "noActive")
                }
              >
                <div onClick={handleShowMusic}>
                  <i
                    class="fa-solid fa-chevron-down"
                    style={{ cursor: "pointer", fontSize: "12px" }}
                  ></i>
                </div>
              </div>
            </div>
            {showMusic && (
              <>
                <div className={cx("page1Body__sideBarBrowseItemSub")}>
                  Albums
                </div>
                <div className={cx("page1Body__sideBarBrowseItemSub")}>
                  Singles
                </div>
              </>
            )}
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
      <label htmlFor="input__mediaPage1" className={cx("overlay")}>
        <label
          htmlFor="input__mediaPage1"
          className={cx("headerBottom__navBarMediaCloseBtn")}
        >
          <i class="fa-solid fa-xmark"></i>
        </label>
      </label>
      <div className={cx("page1Body__content")}>
        <div className={cx("page1Body__contentList")}>
          <div className={cx("page1Body__contentItem")}>
            <Item
              title="clothing"
              numProduct="12"
              src="https://flatsome3.uxthemes.com/wp-content/uploads/2013/06/hoodie_4_front-494x593.jpg"
            />
          </div>
          <div className={cx("page1Body__contentItem")}>
            <Item
              title="women"
              numProduct="18"
              src="https://flatsome3.uxthemes.com/wp-content/uploads/2013/08/589864-5295_1-494x593.jpeg"
            />
          </div>
          <div className={cx("page1Body__contentItem")}>
            <Item
              title="booking"
              numProduct="6"
              src="https://flatsome3.uxthemes.com/wp-content/uploads/2016/07/booking-494x593.jpg"
            />
          </div>
          <div className={cx("page1Body__contentItem")}>
            <Item
              title="men"
              numProduct="9"
              src="https://flatsome3.uxthemes.com/wp-content/uploads/2013/08/602779-0083_1-494x593.jpeg"
            />
          </div>
          <div className={cx("page1Body__contentItem")}>
            <Item
              title="bags"
              numProduct="6"
              src="https://flatsome3.uxthemes.com/wp-content/uploads/2013/08/282259-0001_2-494x593.jpeg"
            />
          </div>
          <div className={cx("page1Body__contentItem")}>
            <Item
              title="music"
              numProduct="6"
              src="https://flatsome3.uxthemes.com/wp-content/uploads/2013/06/cd_5_angle-494x593.jpg"
            />
          </div>
          <div className={cx("page1Body__contentItem")}>
            <Item
              title="Posters"
              numProduct="5"
              src="https://flatsome3.uxthemes.com/wp-content/uploads/2013/06/poster_1_up-494x593.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page1Body;
