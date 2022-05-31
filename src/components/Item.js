import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, setCart, outCart, setOutCart] = useState(false);
  function addItemToCart() {
    setCart((inCart) => !inCart);
     function RemoveFromCart() {
       setOutCart((outCart) => !outCart);
     }
  }
  return (
    <li className={inCart ? 'in-cart' : " "}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addItemToCart} className="add">Add to Cart</button>
    </li>
  )

 
}

export default Item;
