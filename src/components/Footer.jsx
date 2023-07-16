import React from 'react'
import Savant from '../images/savant.webp'
import Pay from '../images/img/pay/pay.png'
import { Link } from 'react-router-dom'
import { FaInstagram, FaTwitter, FaTiktok, FaYoutube, FaSoundcloud } from 'react-icons/fa6'

const Footer = () => {
  return (
    <>
        <footer className = 'section-p1'>
            <div className = 'col'>
                <img src = 'https://raw.githubusercontent.com/ssjulianr/savant/main/images/savant.webp' className = 'logo' alt = 'logo'/>
                    <h4>Contact: </h4>
                        <p><strong>Address: </strong> P. Sherman 42 Wallaby Way, Sydney, AU </p>
                        <p><strong>Phone: </strong> (281) 330-8004 </p>
                        <p><strong>E-Mail: </strong> contact@savantrecords.com </p>
                    
                    <div className = 'follow'>
                        <h4>Follow Us!</h4>
                            <div className = 'icon'>
                                <a href="https://instagram.com/"><FaInstagram/></a>
                                <a href="https://twitter.com/"><FaTwitter/></a>
                                <a href="https://tiktok.com/"><FaTiktok/></a>
                                <a href="https://youtube.com/"><FaYoutube/></a>
                                <a href="https://soundcloud.com/"><FaSoundcloud/></a>
                            </div>
                    </div>
            </div>

            <div className = 'col rest'>
                <h4>About Savant</h4>
                <Link to = '/'>Our Story</Link>
                <Link to = '/'>Roster</Link>
                <Link to = '/'>Privacy Policy</Link>
                <Link to = '/'>Terms & Conditions</Link>
                <Link to = '/contact'>Contact Savant</Link>
            </div>

            <div className = 'col rest'>
                <h4>My Account</h4>
                <Link to = '/'>Sign In</Link>
                <Link to = '/cart'>View Cart</Link>
                <Link to = '/'>Wishlist</Link>
                <Link to = '/'>Track My Order</Link>
                <Link to = '/'>Help</Link>
            </div>

            <div className = 'col rest install'>
                <p>Secured Payment Gateway</p>
                <img src = {Pay}/>
            </div>

            <div className = 'copywrite'>
                <p>© 2023 Sandoz Enterprises</p>
            </div>
        </footer>

    </>
  )
}

export default Footer