import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";

import styles from "./Page1.module.scss";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeaderFixed from "../components/Header/HeaderFixed";
import SideBarAd from "../components/SideBarAd";
import Page1Body from "./Page1Body";
import Page1Sub from "./Page1Sub";

const cx = classNames.bind(styles);
function Page1() {
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(false);

  const controlHeader = () => {
    if (window.scrollY > 150) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlHeader);
    return () => {
      window.removeEventListener("scroll", controlHeader);
    };
  }, []);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const handleClickBtnGoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <div>
      {show && <HeaderFixed />}
      <SideBarAd />
      <Header />
      <Page1Body />
      <Page1Sub />
      <Footer />
      <div
        className={cx("GoTop")}
        onClick={handleClickBtnGoTop}
        style={{ display: visible ? "inline" : "none" }}
      >
        <div className={cx("btnGoTop")}>
          <i class="fa-solid fa-chevron-up"></i>
        </div>
      </div>
    </div>
  );
}

export default Page1;
