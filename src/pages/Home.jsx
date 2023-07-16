import React from 'react'
import Carousel from '../components/Carousel'
const Home = () => {
  return (
   <>
    
    <Carousel />

    <section id="about-head" className="section-p1">
        <img src="https://raw.githubusercontent.com/ssjulianr/savant/main/images/rapper.webp" alt="Rapper"/>
        <div>
            <h2>SAVANT RECORDS</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Quibusdam, officia illo delectus fugiat dolorem odit non optio ipsam explicabo culpa ducimus odio voluptas dolor. 
                Praesentium distinctio deleniti suscipit fugit ad.</p>
                <abbr title="Quibusdam, officia illo delectus fugiat dolorem odit non optio"></abbr>
                <br/><br/>
                <marquee bgcolor="lavender">Quibusdam, officia illo delectus fugiat dolorem odit non optio</marquee>
                
        </div>
    </section>

    <h2>become a 'savant.'+ member today!</h2>
    <section id="feature" className="section-p1">
      
        <div className="feat-box">
            <img src="https://github.com/ssjulianr/savant/blob/main/images/img/features/f5.png?raw=true" alt="artist dev"/>
            <h6>TARGETED ARTIST DEVELOPMENT</h6>
        </div>

        <div className="feat-box">
            <img src="https://github.com/ssjulianr/savant/blob/main/images/img/features/f2.png?raw=true" alt="services"/>
            <h6>24/7 ENGINEERING SERVICES</h6>
        </div>

        <div className="feat-box">
            <img src="https://github.com/ssjulianr/savant/blob/main/images/img/features/f1.png?raw=true" alt="management"/>
            <h6>SOCIAL MEDIA MANAGEMENT</h6>
        </div>
        
        <div className="feat-box">
            <img src="https://github.com/ssjulianr/savant/blob/main/images/img/features/f3.png?raw=true" alt="fin literacy coaching"/>
            <h6>FINANCIAL LITERACY COACHING</h6>
        </div>

        <div className="feat-box">
            <img src="https://github.com/ssjulianr/savant/blob/main/images/img/features/f6.png?raw=true" alt="talent agency"/>
            <h6>PROPRIETARY TALENT AGENCY</h6>
        </div>

        <div className="feat-box">
            <img src="https://github.com/ssjulianr/savant/blob/main/images/img/features/f4.png?raw=true" alt="discounted merch and services"/>
            <h6>DISCOUNTED MERCH & SERVICES</h6>
        </div>

      </section>

    <section id="banner" className="section-m1">
      </section>

    <section>
        <h2>Featured Artist <br/> SAINT</h2>
            <p>Summer Collection New Modern Design</p>
        <div className="container3">
            <div className="wrapper">
                <img src="https://raw.githubusercontent.com/ssjulianr/savant/main/images/slide3.webp"/>
                <img src="https://raw.githubusercontent.com/ssjulianr/savant/main/images/slide4.webp"/>
                <img src="https://raw.githubusercontent.com/ssjulianr/savant/main/images/slide2.webp"/>
                <img src="https://raw.githubusercontent.com/ssjulianr/savant/main/images/slide1.webp"/>
            </div>
        </div>
      </section>

    <section id="banner2" className="section-m1">
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
  )
}

export default Home