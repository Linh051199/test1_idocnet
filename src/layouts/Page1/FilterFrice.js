import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Page1.module.scss";
import Slider from "react-slider";
import styled from "styled-components";

const cx = classNames.bind(styles);

const MIN = 30;
const MAX = 3000;

function FilterFrice() {
  const [values, setValues] = useState([MIN, MAX]);

  const StyledTrack = styled.div`
    top: 0;
    bottom: 0;
    background: ${(props) =>
      props.index === 2
        ? "#f1f1f1"
        : props.index === 1
        ? "#666666"
        : "#f1f1f1"};
    border-radius: 999px;
  `;

  const Track = (props, state) => (
    <StyledTrack {...props} index={state.index} />
  );
  return (
    <div className={cx("filterPrice__wrapper")}>
      <div className={cx("page1Body__sideBarTitle")}>FILTER BY PRICE</div>
      <div className={cx("page1Body__sideBarSeparateTitle")}></div>
      <div className={cx("filterPrice__body")}>
        <Slider
          className={cx("filterPrice__slider")}
          onChange={setValues}
          value={values}
          min={MIN}
          max={MAX}
          renderTrack={Track}
        />
        <div className={cx("filterPrice__bodyContacts")}>
          <button className={cx("page1Body__sideBarFilterPriceBtn")}>
            FILTER
          </button>
          <div className={cx("filterPrice__values")}>
            PRICE: ${values[0]} - ${values[1]}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterFrice;
