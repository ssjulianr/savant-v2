import React from 'react'
import {FaEarthAmericas, FaEnvelopeOpenText, FaPhoneVolume, FaClock} from 'react-icons/fa6'

const Contact = () => {
  return (
    <>
        <section id="page-header">
          <h2>#dimelo</h2>
          <p>We'd love to hear from you!</p>
        </section>
    
   
        <section id="contact-details" className="section-p1">
          <div className="details">
              <h1 style = {{display: 'flex', justifyContent: 'center'}}>GET IN TOUCH</h1>
              <h2 style = {{display: 'flex', justifyContent: 'center'}}>Visit us today</h2>
              <h3 style = {{display: 'flex', justifyContent: 'center'}}>Headquarters</h3>
          
          <div>
              <li>
                  <FaEarthAmericas />
                  <p style = {{paddingLeft: '2%', display: 'flex', justifyContent: 'center'}}> P. Sherman 42 Wallaby Way, Sydney, AU </p>
              </li>
              <li>
                  <FaEnvelopeOpenText/>
                  <p style = {{paddingLeft: '2%'}}> contact@savantrecords.com </p>
              </li>
              <li>
                  <FaPhoneVolume/>
                  <p style = {{paddingLeft: '2%'}}> (281) 330-8004 </p>
              </li>
              <li>
                  <FaClock />
                  <br/>
                  <p style = {{paddingLeft: '2%', paddingRight: '2%'}}>Monday - Thursday:  <br/><br/> 9 am - 9 pm</p>
                  <p  style = {{paddingLeft: '2%', paddingRight: '2%'}}>Friday - Saturday:  <br/><br/> 11 am - 12 am</p>
                  <p  style = {{paddingLeft: '2%', paddingRight: '2%'}}>Sunday:  <br/><br/> Closed </p>
              </li>
          </div>
      </div>
      <div class="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.818466698483!2d-73.9848481234238!3d40.7660172713856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f7e8ed81c5%3A0x95557754cf1e8275!2s1755%20Broadway%2C%20New%20York%2C%20NY%2010019!5e0!3m2!1sen!2sus!4v1683730983507!5m2!1sen!2sus" title = 'savant headquarters' width="600" height="450" style={{border: '0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
     </section>
    
    <section id="form-details">
        <form action="">
            <span></span>
            <h2>Contact Us</h2>
            <input type="text" placeholder="Your Name"/>
            <input type="text" placeholder="E-Mail"/>
            <input type="text" placeholder="Subject"/>
            <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
            <button class="normal">Submit</button>
        </form>
        <div className="people">
            <div>
                <img src="https://github.com/ssjulianr/savant/blob/main/images/img/people/1.png?raw=true" alt=""/>
                <p><span>John Doe</span> Senior Marketing manager <br/> Phone: 83737378273983 <br/> email: dksjlfa@saldjf.com</p>
            </div>
            <div>
                <img src="https://github.com/ssjulianr/savant/blob/main/images/img/people/2.png?raw=true" alt=""/>
                <p><span>John Doe</span> Senior Marketing manager <br/> Phone: 83737378273983 <br/> email: dksjlfa@saldjf.com</p>
            </div>
            <div>
                <img src="https://github.com/ssjulianr/savant/blob/main/images/img/people/3.png?raw=true" alt=""/>
                <p><span>John Doe</span> Senior Marketing manager <br/> Phone: 83737378273983 <br/> email: dksjlfa@saldjf.com</p>
            </div>
        </div>
    </section>

    <section id="newsletter" className="section-p1 section-m1">
        <div className="news-text">
            <h4>Sign up for our newsletter!</h4>
            <p>Email updates about <span>our products</span></p>
        </div>
        <div className="form">
            <input type="text" placeholder="Your email address"/>
            <button className="normal"><p>Sign Up</p></button>
        </div>
      </section>
    </>
  )
}

export default Contact