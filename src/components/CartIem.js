import React from 'react'

function CartIem({renderCart}) {
    console.log("Cart",renderCart);
  return (
    <>
    <tr>
            <td></td>
            <td>{renderCart.productName}</td>
            <td><img src="" alt="anh" width={"80px"}/></td>
            <td></td>
            <td><input type="number" value={1} name='quantity'/></td>
            <td className='color-dark'><i class="fa-solid fa-delete-left"></i></td>
          </tr>
    </>
  )
}

export default CartIem