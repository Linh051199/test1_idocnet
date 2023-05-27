import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";

import styles from "./Page3.module.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Page1Sub from "../Page1/Page1Sub";
import Page3Body from "./Page3Body";
import Page3Desc from "./Page3Desc";
import Page3Rev from "./Page3Rev";
import HeaderFixed from "../components/Header/HeaderFixed";
import SideBarAd from "../components/SideBarAd";
import Carousel from "./Carousel";
import ScrollToTop from "../components/ScrollToTop";
const cx = classNames.bind(styles);

function Page3() {
  const [show, setShow] = useState(false);

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
  return (
    <div className="grid ">
      {show && <HeaderFixed />}
      <SideBarAd />
      <Header />
      <Page3Body />
      <Carousel />
      <Page1Sub />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default Page3;
