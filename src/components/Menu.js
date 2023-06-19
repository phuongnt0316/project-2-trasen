import React from "react";
import { Link } from "react-router-dom";


function Menu() {
  return (
    <>
      <section id="menu" className="section-menu">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2">
              <div className="logo">
                <img
                  src="Pictures/trang-chu/logophongtra.png"
                  alt="logo"
                  style={{ width: 183, height: 55 }}
                />
              </div>
            </div>
            <div className="col-md-10">
              <nav>
                <ul className="nav-parent">
                  <li className="nav-child">
                    {" "}
                    <Link to={"/Home"} className="action">Trang chủ</Link>
                  </li>
                  <li className="nav-child">
                    {" "}
                    <Link to={"/Introduce"} className="action">Giới thiệu</Link>
                  </li>
                  <li className="nav-child">
                    {" "}
                    <Link to={"/Products"} className="action">Sản phẩm</Link>
                  </li>
                  <li className="nav-child">
                    {" "}
                    <Link to={"/News"} className="action">Tin tức</Link>
                  </li>
                  <li className="nav-child">
                    {" "}
                    <Link to={"/Contact"} className="action">Liên hệ</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Menu;
