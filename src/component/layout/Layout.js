import React from "react";
import { useSelector } from "react-redux";
import CartItems from "../cartItem/CartItems";
import Header from "../header/Header";
import Products from "../Products";
import "./Layout.css";
const Layout = () => {
  let total = 0;
  const itemsList = useSelector(state=>state.cart.itemsList)
  itemsList.forEach(item => {
    total += item.totalPrice;
  });
  const showCart = useSelector(state => state.cart.showCart);

  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
      {showCart &&  <CartItems />}
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn">Place Order</button>
        </div>{" "}
      </div>
    </React.Fragment>
  );
};

export default Layout;