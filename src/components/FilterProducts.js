import React,{useState} from 'react'

function FilterProducts() {
  const [flttraxanh, setFltTraxanh] = useState(false);
  return (
    <>
    <div className="product-header col-md-2">
                <div className="product-form-hd">
                  <p>Bộ lọc sản phẩm</p>
                  <p>Loại sản phẩm</p>
                </div>
                
                  {/*start form check */}
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      checked={flttraxanh}
                      onChange={()=>setFltTraxanh(!flttraxanh)}
                      id="traxanh"
                    />
                    <label className="form-check-label" htmlFor="chb-loaisp">
                      Trà xanh Thái Nguyên
                    </label>
                  </div>
                  {/* end form check */}
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="chb-loaisp"
                    />
                    <label className="form-check-label" htmlFor="chb-loaisp">
                      Trà Olong
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="chb-loaisp"
                    />
                    <label className="form-check-label" htmlFor="chb-loaisp">
                      Trà Shan tuyết
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="chb-loaisp"
                    />
                    <label className="form-check-label" htmlFor="chb-loaisp">
                      Trà sen
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="chb-loaisp"
                    />
                    <label className="form-check-label" htmlFor="chb-loaisp">
                      Trà lài
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="chb-loaisp"
                    />
                    <label className="form-check-label" htmlFor="chb-loaisp">
                      Trà thảo dược
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="chb-loaisp"
                    />
                    <label className="form-check-label" htmlFor="chb-loaisp">
                      Dụng cụ pha trà
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="chb-loaisp"
                    />
                    <label className="form-check-label" htmlFor="chb-loaisp">
                      Nước pha trà
                    </label>
                  </div>
                  <p>Thương hiệu</p>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="chb-loaisp"
                    />
                    <label className="form-check-label" htmlFor="chb-loaisp">
                      Trà Tân Cương Xanh
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="chb-loaisp"
                    />
                    <label className="form-check-label" htmlFor="chb-loaisp">
                      Trà Sen Tây Hồ
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="chb-loaisp"
                    />
                    <label className="form-check-label" htmlFor="chb-loaisp">
                      Trà Lộc Tân
                    </label>
                  </div>
                
              </div>
              <div className="sort">
            <select>
              <option value="">Thứ tự mặc định</option>
              <option value="gia-asc">Giá thấp đến cao</option>
              <option value="gia-desc">Giá cao đến thấp</option>
            </select>
          </div>
    </>
  )
}

export default FilterProducts