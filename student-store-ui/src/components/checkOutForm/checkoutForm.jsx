import * as React from "react";
import "./CheckoutForm.css";

export default function CheckOutForm() {
  return (
    <div>
      <h1> Shopping Cart</h1>
      <p>No items added to cart yet. Start shopping</p>
      <div>
        <h1> Payment Info</h1>
      </div>

      <div>
        <p>Name</p>
        <input type="text" placeholder="student Name..." />
        <p>Email</p>
        <input type="text" placeholder="student@codepath.org..." />
      </div>

      <h1>CheckOut Info</h1>
      <p>
        A confirmation email will be sent to you so that you can confirm this
        order. Once you have confirmed the order, it will be delivered to your
        dorm room.
      </p>
    </div>
  );
}
