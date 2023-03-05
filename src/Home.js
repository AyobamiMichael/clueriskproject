import React, { Component } from "react";
//import Slideshow from "./slider/slideshow";
//import sliderData from './slider/sliderdata';

import Slideshow from "./leftrightslider/slideshow";
import sliderData from './leftrightslider/sliderdata';
import Testimonial from "./testimonials/testimonial";
import Ourclients from "./testimonials/ourclients";


 //  <Slideshow slides={sliderData}/>

class Home extends Component {
  render() {
    return (
      <>
      <div>
       <Slideshow />
      </div>
         <div>
       <Testimonial />
      </div>
        <div>
        <Ourclients />
        </div>
      </>
    );
  }
}
 
export default Home;