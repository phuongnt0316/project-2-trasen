import React from "react";

function Contact() {
  return (
    <>
      <>
        {/* start banner */}
        <section id="contact" className="banner">
          <div className="banner-img">
            <div className="box-img">
              <img src="Pictures/lien-he/banner.jpg" alt="" />
              <div className="box-content">
                <div className="box-content-header">
                  <h2>LIÊN HỆ VỚI CHÚNG TÔI</h2>
                </div>
                <form action="">
                  <div className="mb-3">
                    <input
                      type="text"
                      id="disabledTextInput"
                      className="form-control"
                      placeholder="Họ tên"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      id="disabledTextInput"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      id="disabledTextInput"
                      className="form-control"
                      placeholder="Số điện thoại"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      id="disabledTextInput"
                      className="form-control"
                      placeholder="Nội dung"
                    />
                  </div>
                  <input type="button" defaultValue="GỬI" className="btn" />
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* end banner */}
      </>
    </>
  );
}

export default Contact;
