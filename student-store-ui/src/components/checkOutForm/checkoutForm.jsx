import * as React from "react";
import "./CheckoutForm.css";

export default function CheckoutForm({ isOpen, handleOnCheckOut }) {
  const checkoutFormView = isOpen ? (
    <div className="checkout-form">
      <h3 >
        "Payment Info"
        <span className="button">
          <i className="material-icons md-48">monetization_on</i>
        </span>
      </h3>
      <div className="input-field">
        <label className="label">Name</label>
        <div className="control">
          <input
            name="name"
            className="checkout-form-input"
            type="text"
            placeholder="Student Name"
          ></input>
        </div>
      </div>
      <div className="input-field">
        <label className="control">Email</label>
        <div className="control">
          <input
            name="email"
            className="checkout-form-input"
            placeholder="student@codepath.org"
          ></input>
        </div>
      </div>
      <div className="field">
        <div className="control">
          <label className="checkbox">
            <input name="termsAndConditions" type="checkbox"></input>
            <span className="label">
              "I agree to the "
              <a href="#terms-and-conditions">terms and conditions</a>
            </span>
          </label>
        </div>
        <p className="is-danger"></p>
      </div>
      <div className="field">
        <div className="control">
          <button className="button checkout-button" onClick={handleOnCheckOut}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <div>{checkoutFormView}</div>
    // <div>
    //   <h1> Shopping Cart</h1>
    //   <p>No items added to cart yet. Start shopping</p>
    //   <div>
    //     <h1> Payment Info</h1>
    //   </div>

    //   <div>
    //     <p>Name</p>
    //     <input type="text" placeholder="student Name..." />
    //     <p>Email</p>
    //     <input type="text" placeholder="student@codepath.org..." />
    //   </div>

    //   <h1>CheckOut Info</h1>
    //   <p>
    //     A confirmation email will be sent to you so that you can confirm this
    //     order. Once you have confirmed the order, it will be delivered to your
    //     dorm room.
    //   </p>
    // </div>
  );
}
