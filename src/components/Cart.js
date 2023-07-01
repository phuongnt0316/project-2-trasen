import React, { useEffect, useState } from 'react'
import CartIem from './CartIem';

function Cart() {
    const  cartProduct=[
        {
            productId: 5,
            productName: "Trà Shan Tuyết",
            productType: "Trà xanh",
            productImage: "Pictures/san-pham/pr-1.png",
            productPrice: 90000,
            productQuantity:4
          },

    ]
 const [product,setProduct] = useState(()=>{
  const cart = JSON.parse(localStorage.getItem("DEV_CARTPRODUCT"));
  if(cart===null){
    return cartProduct;
  }
  else{
    return cart;
  }
 });
 useEffect(()=>{
  localStorage.setItem("DEV_CARTPRODUCT",JSON.stringify(product))
 },[product])
 let elementItem = product.map((product, index) => {
    return <CartIem key={index} renderCart={product} />;
  });
 

  return (
    <div className='common-section'>
      <h2 className='mt-3 text-center'>Giỏ hàng</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên sản phẩm</th>
            <td>Hình ảnh</td>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>thao tác</th>
          </tr>
        </thead>
        <tbody>
          {elementItem}
        </tbody>
      </table>
      <p>Thành tiền </p>
    </div>
  )
 
}

export default Cart