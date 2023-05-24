import React from "react";

import Header from "../../layouts/components/Header";
import Footer from "../../layouts/components/Footer";
import Page1Sub from "../Page1/Page1Sub";
import Page2Body from "./Page2Body";

function Page2() {
  return (
    <div>
      <Header />
      <Page2Body />
      <Page1Sub />
      <Footer />
    </div>
  );
}

export default Page2;
