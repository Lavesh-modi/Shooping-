import React, { useContext } from "react";
// import { CartState } from '../Context'
import {Cart} from "../Context";

const Single = ({ prod }) => {
  const {cart,setCart} = useContext(Cart)
  // const { cart, setCart } = CartState();
  return (
    <div className="products">
      <img src={prod.image} alt={prod.name} />
      <div className="productDesc">
        <span style={{ fontWeight: 700 }}>{prod.name}</span>
        <span>₹ {prod.price}</span>
      </div>
      {cart.includes(prod) ? (
        <button
          className="add remove"
          onClick={() => setCart(cart.filter((c) => c.id !== prod.id))}
        >
          Remove from Cart
        </button>
      ) : (
        <button className="add" onClick={() => setCart([...cart, prod])}>
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default Single;
