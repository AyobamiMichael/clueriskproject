import React, { Component } from "react";
import { Routes, Route, NavLink, HashRouter} from "react-router-dom";
import Home from "./Home";

import Brokeage from "./services/brokeage";
import Contact from "./contact/Contact";
import logo from './images/logoremovebg.jpeg'
import Footer from "./footer/footer";



//<div><h1 className="logo">Logo</h1></div>
class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div className="contentcontainer">
        <div><a href="/"><img className="logo" src={logo}/></a></div> 
          <ul className="header">
          <li class='font-link'><NavLink exact to="/">Home</NavLink></li>
          <li class='font-link'><NavLink to="/services">Services</NavLink></li>
          <li class='font-link'><NavLink to="/contact">Contact Us</NavLink></li>
          </ul>
          <div className="content">
          <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/services" element={<Brokeage />}/>
          <Route path="/contact" element={<Contact />}/>
          </Routes>
          </div>
          <div>
            <Footer />           
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;