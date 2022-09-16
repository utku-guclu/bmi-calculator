import React from "react";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <nav>
        <ul>
          <Link to="./" style={{ textDecoration: "none" }}>
            <li className="item">HOME</li>
          </Link>
          <Link to="./calculate" style={{ textDecoration: "none" }}>
            <li className="item">BMI</li>
          </Link>
          <Link to="./bmi" style={{ textDecoration: "none" }}>
            <li className="item">What's BMI?</li>
          </Link>
        </ul>
      </nav>
      <Outlet />
      <footer>
        <span>BMI CALCULATOR &#169;2022</span>
      </footer>
    </>
  );
}

export default Layout;
