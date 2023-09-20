import React, { useContext } from "react";
import Single from "./Single";
// import { CartState } from '../Context';
import { Cart } from "../Context";
function Home() {
  // const { productsArray} = CartState
  const {productsArray} = useContext(Cart);

  // console.log("provValue", provValue);

  console.log(productsArray, "productsArray");
  return (
    <div style={{ textAlign: "center" }}>
      <span style={{ fontSize: 30 }}>Products Page</span>
      <div className="productContainer">
        {console.log(productsArray, "products console")}
        {productsArray.map((prod) => (
          <Single prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
