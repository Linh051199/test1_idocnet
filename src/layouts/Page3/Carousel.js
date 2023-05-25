import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Item from "../Page2/Item";

import classNames from "classnames/bind";

import styles from "./Page3.module.scss";

const cx = classNames.bind(styles);

function Carousel() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={cx("carousel__wrapper", "gird", "wide")}>
      <Slider {...settings}>
        <div>
          <Item
            name="Woo Ninja"
            src1="https://flatsome3.uxthemes.com/wp-content/uploads/2013/06/hoodie_2_front-494x593.jpg"
            src2="https://flatsome3.uxthemes.com/wp-content/uploads/2013/06/hoodie_2_back-494x593.jpg"
            price="$35,00"
            width="300px"
            height="300px"
          />
        </div>
        <div>
          <h3>
            <Item
              name="Woo Ninja"
              src1="https://flatsome3.uxthemes.com/wp-content/uploads/2013/06/hoodie_2_front-494x593.jpg"
              src2="https://flatsome3.uxthemes.com/wp-content/uploads/2013/06/hoodie_2_back-494x593.jpg"
              price="$35,00"
              width="300px"
              height="300px"
            />
          </h3>
        </div>
        <div>
          <h3>
            <Item
              name="Woo Ninja"
              src1="https://flatsome3.uxthemes.com/wp-content/uploads/2013/06/hoodie_2_front-494x593.jpg"
              src2="https://flatsome3.uxthemes.com/wp-content/uploads/2013/06/hoodie_2_back-494x593.jpg"
              price="$35,00"
              width="300px"
              height="300px"
            />
          </h3>
        </div>
        <div>
          <h3>
            <Item
              name="Woo Ninja"
              src1="https://flatsome3.uxthemes.com/wp-content/uploads/2013/06/hoodie_2_front-494x593.jpg"
              src2="https://flatsome3.uxthemes.com/wp-content/uploads/2013/06/hoodie_2_back-494x593.jpg"
              price="$35,00"
              width="300px"
              height="300px"
            />
          </h3>
        </div>
        <div>
          <h3>
            <Item
              name="Woo Ninja"
              src1="https://flatsome3.uxthemes.com/wp-content/uploads/2013/06/hoodie_2_front-494x593.jpg"
              src2="https://flatsome3.uxthemes.com/wp-content/uploads/2013/06/hoodie_2_back-494x593.jpg"
              price="$35,00"
              width="300px"
              height="300px"
            />
          </h3>
        </div>
        <div>
          <h3>
            <Item
              name="Woo Ninja"
              src1="https://flatsome3.uxthemes.com/wp-content/uploads/2013/06/hoodie_2_front-494x593.jpg"
              src2="https://flatsome3.uxthemes.com/wp-content/uploads/2013/06/hoodie_2_back-494x593.jpg"
              price="$35,00"
              width="300px"
              height="300px"
            />
          </h3>
        </div>
        <div>
          <h3>
            <Item
              name="Woo Ninja"
              src1="https://flatsome3.uxthemes.com/wp-content/uploads/2013/06/hoodie_2_front-494x593.jpg"
              src2="https://flatsome3.uxthemes.com/wp-content/uploads/2013/06/hoodie_2_back-494x593.jpg"
              price="$35,00"
              width="300px"
              height="300px"
            />
          </h3>
        </div>
        <div>
          <h3>
            <Item
              name="Woo Ninja"
              src1="https://flatsome3.uxthemes.com/wp-content/uploads/2013/06/hoodie_2_front-494x593.jpg"
              src2="https://flatsome3.uxthemes.com/wp-content/uploads/2013/06/hoodie_2_back-494x593.jpg"
              price="$35,00"
              width="300px"
              height="300px"
            />
          </h3>
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
