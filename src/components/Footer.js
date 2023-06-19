import React from "react";

function Footer() {
  return (
    <>
      <section id="footer" className="banner1">
        <div className="banner-img">
          <div className="box-content d-flex justify-content-evenly">
            <div className="content-1">
              <div className="content-header">
                <img src="Pictures/trang-chu/logophongtra.png" alt="" />
              </div>
              <div className="content-content">
                <p>7-999-999-999</p>
                <p>trasenbachdiep@gmail.com</p>
                <p>Số 12. Quảng An, Tây Hồ, Hà Nội</p>
              </div>
            </div>
            <div className="content-2">
              <div className="content-header">VỀ CHÚNG TÔI</div>
              <div className="content-content">
                <p>Giới thiệu </p>
                <p>Sản phẩm</p>
                <p>Tin tức</p>
              </div>
            </div>
            <div className="content-3">
              <div className="content-header">LIÊN HỆ</div>
              <div className="img-icon d-flex">
                <img
                  src="Pictures/trang-chu/icon1.png"
                  alt=""
                  className="icon-img"
                />
                <img
                  src="Pictures/trang-chu/icon2.png"
                  alt=""
                  className="icon-img"
                />
                <img
                  src="Pictures/trang-chu/icon3.png"
                  alt=""
                  className="icon-img"
                />
              </div>{" "}
              <br />
              <p>Copyright © 2010 2020 </p>
              <p> Tra Sen Bach Diep. All rights reserved</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
