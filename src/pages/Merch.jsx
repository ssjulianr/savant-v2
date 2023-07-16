import React from 'react';
import Product from '../components/Product'

const Merch = () => {
  
  return (
    <>
    <section id="page-header">
       <h2>shop with savant.</h2>
    </section>


        <section id="product1" className="section-p1">
            
              <Product />
            
            </section>


    <section id="newsletter" className="section-p1 section-m1">
        <div className="news-text">
            <h4>Subscribe to our Newsletter</h4>
            <p>E-Mail Updates About <span>Savant Records</span></p>
        </div>
        <div className="form">
            <input type="text" placeholder="Your email address"/>
            <button className="normal"><p>Sign Up</p></button>
        </div>
      </section>
      
    </>
  );
}

export default Merch;
