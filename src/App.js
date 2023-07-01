import { Route, Routes,useNavigate } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Introduce from "./components/Introduce";
import News from "./components/News";
import Contact from "./components/Contact";
import Contents from "./components/Contents";
import Footer from "./components/Footer";
import Products from "./components/Products";
import { useState } from "react";
import DetailProduct from "./components/DetailProduct";
import Cart from "./components/Cart";
function App() {
  let initPro = {
      productIs: 0,
      productName: "",
      productImage: "",
      productPrice: 0,
      productRating: 0,
      productReview: 0,
  };
  const [product,setProduct]=useState(initPro)
  const navigate= useNavigate();
  const handleClick = (pro) => {
    if(product!=null){
    setProduct(pro)
    }
    console.log("productApp:",pro);
    navigate("/DetailProduct")
   }
  
  return (
    <div className="App">
      <>
        <Menu />
        <Routes>
          <Route path="/DetailProduct" element={<DetailProduct  renderPro={product}/>}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Introduce" element={<Introduce />}></Route>
          <Route
            path="/Products"
            element={<Products onClickProduct={handleClick}/>}
          ></Route>
          <Route path="/News" element={<News/>}></Route>
          <Route path="/Contents" element={<Contents />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Cart" element={<Cart />}></Route>
        </Routes>
        <Footer />
      </>
    </div>
  );
}

export default App;
