import React from 'react'

function Home() {
  return (
    <>
  {/* start banner */}
  <section id="banner-1" className="banner">
    <div className="banner-img">
      <div className="box-img">
        <img src="Pictures/trang-chu/backBanner.png" alt="" />
        <div className="box-content">
          <div className="content-header">TRÀ ƯỚP SEN TÂY HỒ</div>
          <div className="box-img">
            <img
              src="Pictures/trang-chu/tinhhoaamthuc.png"
              alt=""
              style={{ width: 535, height: 103 }}
            />
          </div>
          <div className="box-content-content">
            Sự hòa quyện tuyệt vời giữa hương thơm ngan ngát của sen Bách diệp
            Hồ Tây và vị đậm đà của trà Tân Cương
          </div>
          <div className="box-content-btn">
            <button className="btn-Try">THỬ NGAY</button>
          </div>
        </div>
      </div>
      <div className="btn-slick">
        <div className="img-btn">
          <img
            src="Pictures/trang-chu/around1.png"
            alt=""
            style={{ width: 33, height: 33 }}
          />{" "}
        </div>
        <div className="img-btn">
          <img src="Pictures/trang-chu/around.png" alt="" />
        </div>
        <div className="img-btn">
          <img src="Pictures/trang-chu/around.png" alt="" />
        </div>
      </div>
    </div>
  </section>
  {/* end banner */}
  {/* product */}
  <div className="product" id="product">
    <div className="banner-img">
      <img src="Pictures/trang-chu/bgSanpham.png" alt="" />
      <div className="product-content">
        <div className="product-header common-header text-center">
          <h1>SẢN PHẨM NỔI BẬT</h1>
        </div>
        <section className="regular slider lst-product">
  <div className="box text-center">
    <div className="box-img-product">
      <img src="Pictures/trang-chu/product-1.png" alt="" />
    </div>
    <div className="box-header pt-3">
      <h4>
        <b>Trà ướp bông sen</b>
      </h4>
    </div>
  </div>
  <div className="box text-center">
    <div className="box-img-product">
      <img src="Pictures/trang-chu/product-2.png" alt="" />
    </div>
    <div className="box-header pt-3">
      <h4>
        <b>Trà ướp nhị sen</b>
      </h4>
    </div>
  </div>
  <div className="box text-center">
    <div className="box-img-product">
      <img src="Pictures/trang-chu/product-3.png" alt="" />
    </div>
    <div className="box-header pt-3">
      <h4>
        <b>Trà ướp shan tuyết</b>
      </h4>
    </div>
  </div>
  <div className="box text-center">
    <div className="box-img-product">
      <img src="Pictures/trang-chu/product-4.png" alt="" />
    </div>
    <div className="box-header pt-3">
      <h4>
        <b>Trà ô long</b>
      </h4>
    </div>
  </div>
  <div className="box text-center">
    <div className="box-img-product">
      <img src="Pictures/trang-chu/product-1.png" alt="" />
    </div>
    <div className="box-header pt-3">
      <h4>
        <b>Trà ướp bông sen</b>
      </h4>
    </div>
  </div>
</section>

      </div>
    </div>
  </div>
  {/* end-product */}
  {/* start banner gioithieu */}
  <section id="banner-2" className="banner">
    <div className="banner-img">
      <div className="box-img">
        <img src="Pictures/trang-chu/gioithieu.png" alt="" />
        <div className="box-content">
          <div className="product-header common-header text-center">
            <h1>GIỚI THIỆU</h1>
          </div>
          <div className="box-img">
            <img
              src="Pictures/trang-chu/traxanhbachdiep.png"
              alt=""
              style={{ width: 535, height: 103 }}
            />
          </div>
          <div className="box-content-content">
            Trà ướp Sen Bách Diệp - tinh hoa văn hóa Hà Thành là sự hòa quyện
            tuyệt vời giữa hương thơm ngan ngát của bông sen Bác diệp Hồ Tây và
            vị đậm đà của trà Tân Cương Thái Nguyên. Qua đôi band tay tài hoa và
            bí quyết nghề mật truyền nhiều đời của ngui thợ Thắng Long, tạo ra
            thức quà tinh túy, kết tinh văn hóa ngàn năm Thăng Long - Hà Nội.
          </div>
          <div className="box-content-btn">
            <button className="btn-Try">ĐỌC THÊM</button>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end banner giothieu*/}
  {/* nghenhan */}
  <section id="banner-3" className="banner">
  <div className="banner-img">
    <div className="box-img">
      <img src="Pictures/trang-chu/bannernghenhan.png" alt="" />
      <div className="box-content">
        <div className="product-header common-header text-center">
          <h1>NGHỆ NHÂN TRÀ ĐẠO</h1>
        </div>
        <div className="row ">
          <div className="col-md-2">
            <div className="card">
              <img
                src="Pictures/trang-chu/professional-tea-1.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Nn. Nguyễn Cao Sơn</h5>
                <p className="card-text">
                  Nguyễn Cao Sơn được chọn làm đại diện quảng bá văn hóa Trà
                  Việt tại ngôi nhà 87 Mã Mây, Hà Nội.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="card">
              <img
                src="Pictures/trang-chu/professional-tea-2.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Nn. Hướng Anh Sướng</h5>
                <p className="card-text">
                  Truyền nhân đời thứ 6 của dòng trà Trường Xuân, Hà Nội chia sẻ
                  về nghệ thuật trà đạo, lĩnh vực mà anh dành hơn nửa cuộc đời
                  nghiên cứu một cách đam mê
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="card">
              <img
                src="Pictures/trang-chu/professional-tea-3.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Nn. Nguyễn Thị Dần</h5>
                <p className="card-text">
                  Vẫn tự tay chọn hoa, tách gạo, thực hiện từng công đoạn ướp
                  trà sen. Cũng chính bởi nghiện trà, bởi yêu nghề nên cô thiếu
                  nữ Hà thành năm xưa vẫn say hương vị trà sen Tây Hồ
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="card">
              <img
                src="Pictures/trang-chu/professional-tea-4.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Nn. Nguyễn Hoài Linh</h5>
                <p className="card-text">
                  Vô địch toàn thế giới trong cuộc thi Tea Master Cup
                  International 2018 về pha trà được tổ chức tại Huế
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="card">
              <img
                src="Pictures/trang-chu/professional-tea-5.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Nn. Viên Trân</h5>
                <p className="card-text">
                  Sinh ra và lớn lên trong một gia đình quý tộc phong kiến,
                  trong một môi trường mà việc ướng trà và trà cực ngon, cực
                  thượng hạng là điều không thể thiếu trong nhà
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* find */}
        <section className="find">
          <div className="product-header common-header text-center">
            <h1>MUA NGAY</h1>
          </div>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Số điện thoai/email"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success btn-primary"
              type="submit"
            >
              GỬI
            </button>
          </form>
        </section>
        {/* end find */}
      </div>
    </div>
  </div>
</section>

  {/* end nghenhan */}
    </>

  )
}

export default Home