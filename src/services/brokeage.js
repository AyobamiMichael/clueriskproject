import React, { Component } from "react";
import ourservicesbanner from '../images/ourservicesbanner.jpg';
//import personalloanimage from '../images/personalloan.jpeg';
import autofinance from '../images/slide_3.jpg';
import personalloan from '../images/personalloan.jpg';
import mortgageloan from '../images/mortgageloan.png';
import smeloan from '../images/smeloan.webp';
import lpo from '../images/lpo.jpg';
import proofoffund from '../images/proofoffund.png';
import startupfunding from '../images/startupfunding.png';
import equityrelease from '../images/equityrelease.webp';
import debtconsolidation from '../images/debtconsolidation.webp';
import customersbase from '../images/slide_5.jpg';

import './brokeage.css'

const Brokeage = () =>{
   return(
      <div className="servicecontainer">
      <header>
      <img className="serviceimage" alt="image" src={ourservicesbanner} />
      </header>
      <div class='container'>
      <div class='card'>
      <h2 className="font-link">Personal loan</h2>
      <img className="personalloan" alt="image" src={personalloan} />
      <p className="font-link">You imagine of getting a quick loan 
      when you don't need to move an inch 
      wherever you are to meet your personal and financial needs with a 
      high speed of process and flexibility. 
      You don't worry, think of us and we get it 
      right for you with no stress.</p>
      </div>
      <div class="card">
      <h2 className="font-link">Auto finance</h2>
      <img className="autofinance" alt="image" src={autofinance} />
      <p className="font-link">You can own a car and make payments you can afford. That's freedom right? That's not all, 
      what about the low and affordable percentage of equity contribution that brings no sweat. This finance still gives 
      you a leverage for refinancing incase along the line, 
      you need some money for personal or business purposes. 
      Think you want to know more, we are here for you.</p>
    </div>
    <div class="card">
    <h2 className="font-link">Mortgage Loan</h2>
    <img className="mortgageloan" alt="image" src={mortgageloan} />
    <p className="font-link">You think of the possibility of having your own home you can be proud of. 
    Now you can bring into reality your dream home with flexible and convenient method of payment. 
    This facility is available for both salary and business class who are ready for the real deal of living in thier own homes. 
    With the mortgage plan of over 15 years, you can always feel good</p>
  </div>
  <div class="card">
      <h2 className="font-link">SME Loans</h2>
      <img className="smeloan" alt="image" src={smeloan} />
      <p className="font-link">Think of how you have access to funds to drive your business, 
      grow your business and to make it functioal as you desire? 
      With various lending options for your business, 
      you have a tailored loan that fit your business at all 
      levels to for it's day to day runnings</p>
    </div>
    <div class="card">
      <h2 className="font-link">LPO Financing</h2>
      <img className="lpo" alt="image" src={lpo} />
      <p className="font-link">
      With various quick funding options to enable you deliver at the right time with edge over inflation, 
      we've got your back. For either, debt factoring, 
      invoice discounting or any other ways you think we can help you achieve; 
      why not contact us today to partner with you in this journey.
      </p>
    </div>
    <div class="card">
    <h2 className="font-link">Proof Of Fund</h2>
    <img className="proofoffund" alt="image" src={proofoffund} />
    <p className="font-link">Let's surprise you with this amazing way of funding your account 
    with the highest speed you can ever think of to present 
    for your traveling purposes or any other purpose 
    with an amazing interest rate. This will wow your mind.</p>
  </div>
  <div class="card">
  <h2 className="font-link">Business Funding</h2>
  <img className="startupfunding" alt="image" src={startupfunding} />
  <p className="font-link">
  With our simple, convenient and transparent processes to get funds 
  for your projects, you can count on us. 
  Funds for your business will be tailored according 
  to your financial capacity to help you expand your business 
  with adequate working capital. 
  We just want to see your business grow and succeed.
  </p>
  </div>
  <div class="card">
  <h2 className="font-link">Equity Release</h2>
  <img className="equityrelease" alt="image" src={equityrelease} />
  <p className="font-link">
  Why not boost your capital or income through the use of 
  financial arrangements that provides you as 
  the owner of a house or other property 
  with funds derived from the value of the property 
  while you still make use of it. Well, it sounds impossible, 
  let's get it done for you with ease. 
  </p>
  </div>
  <div class="card">
  <h2 className="font-link">Debt Consolidation</h2>
  <img className="debtconsolidation" alt="image" src={debtconsolidation} />
  <p className="font-link">
  Paying multiple loans can be very frustrating and sometimes 
  gets you off balance in your finances either as an individual or 
  a cooperate body. 
  But, we've got a good news for you. 
  Why not contact us today, and find out how 
  we can help you collapse your
   multiple loans into a single structured 
   loan to help you focus and have a flexible loan repayment plan.
  </p>
  </div>
  <div class="card">
  <h2 className="font-link">Customer Base Generation</h2>
  <img className="customerbase" alt="image" src={customersbase} />
  <p className="font-link">
  The concept of 'what to produce, how to produce, 
  to whom to produce has always been the front-burner of every business. 
  After you must have passed through developing your products or 
  generating ideas for type of services you'll like to render, 
  the questions still remain 'how do I generate my customers'? 
  Well, let's do take the worries off you and shoulder it. 
  </p>
  </div>
    </div>
    </div>
   )
}

export default Brokeage;