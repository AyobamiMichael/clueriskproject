import React, { Component } from "react";
import './contact.css'
 
class Contact extends Component {
  render() {
    return (
      <body className="formform">
      <div class="formcontainer">
      <h1 className="contactform"></h1>
      <form className="form" target="_blank" action="https://formsubmit.co/doloril231@zfobo.com" method="POST">
        <div class="form-groupnameemail">
          <div class="form-row">
            <div class="col1">
              <input type="text" name="name" class="form-control" placeholder="Full Name" required />
            </div>
            <div class="col2">
              <input type="email" name="email" class="form-control" placeholder="Email Address" required />
            </div>
          </div>
        </div>
        <div className="messagebox">
          <textarea placeholder="Your Message" class="form-control" name="message" rows="10" required></textarea>
        </div>
        <button type="submit"  class="btn btn-lg btn-dark btn-block">Submit Form</button>
        </form>
    </div>
    </body>
    );
  }
}
 
export default Contact;