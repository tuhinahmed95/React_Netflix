import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twiter_icon from '../../assets/twitter_icon.png'
import instagran_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons"> 
        <img src={facebook_icon} alt="" />
        <img src={instagran_icon} alt="" />
        <img src={twiter_icon} alt="" />
        <img src={youtube_icon} alt="" />
      </div>
      <ul> 
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cokie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className='copyright-text'>2024, Md. Tuhin Ahmed</p>
    </div>
  )
}

export default Footer
