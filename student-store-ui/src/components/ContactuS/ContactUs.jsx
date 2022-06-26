import * as React from "react";
import "./ContactUs.css";

export default function ContactUs() {
  return (
    <div className="ContactUs">
      <h1>Contact Us</h1>
      <div className="content">
        <div className="text">
          <p> Email: code@path.org</p>

          <p> Phone: 1-800-CODEPATH</p>

          <p> Address: 123 Fake Street, San Francisco, CA</p>

          <p>
            Socials:
            <a href=" ">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <a href=" ">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
            <a href=" ">
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a href=" ">
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </a>
          </p>
        </div>
        <div className="media">
          <img
            src=" https://codepath-student-store-demo.surge.sh/assets/happy_person.517b658d.svg"
            alt="codepath"
          />
        </div>
      </div>
    </div>
  );
}
