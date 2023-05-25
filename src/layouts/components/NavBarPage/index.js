import React from "react";
import { Link } from "react-router-dom";
function NavBarPage({ navList }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        fontSize: "16px",
        gap: "20px",
        marginTop: "20px",
        textDecoration: "none",
      }}
    >
      <div className="link">
        <Link
          to="/test1_idocnet/page1"
          style={{
            backgroundColor: "gray",
            color: "white",
            fontWeight: "bold",
            padding: "10px",
            borderRadius: "10px",
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          Page 1
        </Link>
      </div>
      <div className="link">
        <Link
          to="/test1_idocnet/page2"
          style={{
            backgroundColor: "gray",
            color: "white",
            fontWeight: "bold",
            padding: "10px",
            borderRadius: "10px",
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          Page 2
        </Link>
      </div>
      <div className="link">
        <Link
          to="/test1_idocnet/page3"
          style={{
            backgroundColor: "gray",
            color: "white",
            fontWeight: "bold",
            padding: "10px",
            borderRadius: "10px",
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          Page 3
        </Link>
      </div>
    </div>
  );
}

export default NavBarPage;
