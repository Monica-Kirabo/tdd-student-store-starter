 import * as React from "react";
import "./ShoppingCart.css";
import { useState } from "react";

export default function ShoppingCart({
  isOpen,
  shoppingCart,
  products,
  subtotal,
  cartSize,
}) {
  var subprice = Math.round(subtotal);

  var taxes = subprice * 0.09;
  var totPrice = subprice + taxes;



  const shoppingCartView = isOpen ? (    <div className="shopping-cart">
  <div className={isOpen ? "open" : "closed"}>
    <h3>
      Shopping Cart
      <span className="icon">
        <i className="material-icons md-48">add_shopping_cart</i>
      </span>
    </h3>
    <div className="CartTable">
      <div className="header">
        <div className="header-row">
          <span className="flex-2">Name </span>
          <span>  </span>
       
          <span className="center">Quantity</span>
          <span>   </span>
          <span className="center">Unit Price</span>
          <span>  </span>
          <span className="center">Cost</span>
        </div>
        {shoppingCart
          ? shoppingCart.map((item, idx) => (
              <div className="product-row" key={idx}>
                <span className="flex-2 cart-product-name">
                  {products.find((elem) =>elem.id === item.itemId).name}
                </span>
                <span className="center cart-product-quantity">
                  {item.quantity}
                </span>
                <span className="center cart-product-price">
                  {"$" +
                    products.find((elem) => elem.id === item.itemId).price}
                </span>
                <span className="center cart-product-subtotal">
                  {"$" +
                    item.quantity *
                      products.find((elem) => elem.id === item.itemId)
                        .price}
                </span>
              </div>
            ))
          : null}
      </div>
      <div className="receipt">
       
        <div className="receipt-subtotal">
       
          <span className="label">Subtotal</span>
          <span></span>
          <span></span>
          <span className="center subtotal">{"$" + subprice}</span>
        </div>
        <div className="receipt-taxes">
          <span className="label">Taxes and Fees</span>
          <span></span>
          <span></span>
          <span className="center">{"$" + taxes}</span>
        </div>
        <div className="receipt-total">
          <span className="label">Total</span>
          <span></span>
          <span></span>
          <span className="center total-price">{"$" + totPrice}</span>
        </div>
      </div>
    </div>
  </div>
</div>) : null

  return (
    <div> {shoppingCartView}</div>
   
  );
}

//   //<div className="shopping-cart">

// //  const [searchInput, setSearchInput] = useState("");
//   //const { products } = data;
//   if(CartSize==0){
//   <div>
//     <h2>Shopping Cart</h2>
//     <p>No items added to cart yet. Start Shopping now!</p>
//   </div>
//   }
//   const [cartItems, setCartItems] = useState([]);



//   return (
//     <div className="App">
//       <ProductsCard countCartItems={cartItems.length}></ProductsCard>
//       <div className="row">
//         <Sidebar products={products} onAdd={onAdd}></Sidebar>
//         <Basket
//           cartItems={cartItems}
//           onAdd={onAdd}
//           onRemove={onRemove}
//         ></Basket>
//       </div>
//     </div>
//   );
//  }
