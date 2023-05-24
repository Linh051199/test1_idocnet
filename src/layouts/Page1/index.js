import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeaderFixed from "../components/Header/HeaderFixed";
import SideBarAd from "../components/SideBarAd";
import Page1Body from "./Page1Body";
import Page1Sub from "./Page1Sub";

function Page1() {
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
      <Page1Body />
      <Page1Sub />

      <Footer />
    </div>
  );
}

export default Page1;
