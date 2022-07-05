import * as React from "react";
import "./CheckoutForm.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function CheckoutForm({ isOpen}) {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleOnCheckOut = () => {
    var userInfo = {
      name: name,
      email: email,
    };
    axios.post(`http://localhost:3001/store`, {
      shoppingCart: props.shoppingCart,
      user: userInfo,
    });

    props.setShoppingCart([]);
    document.getElementById("nameInput").value = "";
    document.getElementById("email").value = "";
  };
  const checkoutFormView = isOpen ? (
    <div className="checkout-form">
      <h3>
        Payment Info
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
            onChange={handleNameChange}
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
            onChange={handleEmailChange}
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
        <p>
          A confirmation email will be sent to you so that you can confirm this
          order. <br></br>Once you have confirmed the order, it will be
          delivered to your dorm room.
        </p>
      </div>
    </div>
  ) : null;

  return (
    <div>{checkoutFormView}</div>
    
  );
}
