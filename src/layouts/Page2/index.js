import React, { useEffect, useState } from "react";

import Header from "../../layouts/components/Header";
import Footer from "../../layouts/components/Footer";
import Page1Sub from "../Page1/Page1Sub";
import Page2Body from "./Page2Body";
import HeaderFixed from "../components/Header/HeaderFixed";
import SideBarAd from "../components/SideBarAd";

function Page2() {
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
    <div>
      {show && <HeaderFixed />}
      <SideBarAd />
      <Header />
      <Page2Body />
      <Page1Sub />
      <Footer />
    </div>
  );
}

export default Page2;
