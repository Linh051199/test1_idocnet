import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Item from "../Page2/Item";

import classNames from "classnames/bind";

import styles from "./Page3.module.scss";

const cx = classNames.bind(styles);

function Carousel() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          // position: "absolute",
          // zIndex: 99,
          // marginRight: "20px",
          display: "block",
          background: "#ddd",
          color: "black",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          // position: "absolute",
          // zIndex: 99,
          // marginLeft: "20px",
          display: "block",
          background: "#ddd",
          // height: "80%",
          color: "black",
        }}
        onClick={onClick}
      />
    );
  }

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
    <div className={cx("carousel__wrapper", "grid", "wide")}>
      <div className={cx("carousel__body")}>
        <Slider {...settings}>
          <div>
            <Item
              name="Happy Ninja"
              src1="https://flatsome3.uxthemes.com/wp-content/uploads/2013/06/T_7_front-494x593.jpg"
              src2="https://flatsome3.uxthemes.com/wp-content/uploads/2013/06/T_7_back-494x593.jpg"
              price="$18,00"
              sale
            />
          </div>
          <div>
            <h3>
              <Item
                name="Happy Ninja"
                src1="https://flatsome3.uxthemes.com/wp-content/uploads/2013/06/hoodie_4_front-494x593.jpg"
                src2="https://flatsome3.uxthemes.com/wp-content/uploads/2013/06/hoodie_4_back-494x593.jpg"
                price="$18,00"
              />
            </h3>
          </div>
          <div>
            <h3>
              <Item
                name="Happy Ninja"
                src1="https://flatsome3.uxthemes.com/wp-content/uploads/2013/06/T_5_front-494x593.jpg"
                src2="https://flatsome3.uxthemes.com/wp-content/uploads/2013/06/T_5_back-494x593.jpg"
                price="$35,00"
              />
            </h3>
          </div>
          <div>
            <h3>
              <Item
                name="Ninja Silhouette"
                src1="https://flatsome3.uxthemes.com/wp-content/uploads/2013/06/hoodie_5_front-494x593.jpg"
                src2="https://flatsome3.uxthemes.com/wp-content/uploads/2013/06/hoodie_5_back-494x593.jpg"
                price="$20,00"
              />
            </h3>
          </div>
          <div>
            <h3>
              <Item
                name="Ninja Silhouette"
                src1="https://flatsome3.uxthemes.com/wp-content/uploads/2013/06/hoodie_3_front-494x593.jpg"
                src2="https://flatsome3.uxthemes.com/wp-content/uploads/2013/06/hoodie_3_back-494x593.jpg"
                price="$35,00"
              />
            </h3>
          </div>
          <div>
            <h3>
              <Item
                name="Patient Ninja"
                src1="https://flatsome3.uxthemes.com/wp-content/uploads/2013/06/T_2_front-494x593.jpg"
                src2="https://flatsome3.uxthemes.com/wp-content/uploads/2013/06/T_2_back-494x593.jpg"
                price="$35,00"
              />
            </h3>
          </div>
          <div>
            <h3>
              <Item
                name="Premium Quality"
                src1="https://flatsome3.uxthemes.com/wp-content/uploads/2013/06/T_4_front-494x593.jpg"
                src2="https://flatsome3.uxthemes.com/wp-content/uploads/2013/06/T_3_back-494x593.jpg"
                price="$20,00"
                sale
              />
            </h3>
          </div>
          <div>
            <h3>
              <Item
                name="Ship Your Idea"
                src1="https://flatsome3.uxthemes.com/wp-content/uploads/2013/06/hoodie_7_front-494x593.jpg"
                src2="https://flatsome3.uxthemes.com/wp-content/uploads/2013/06/hoodie_7_back-494x593.jpg"
                price="$20,00"
                out
              />
            </h3>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Carousel;
