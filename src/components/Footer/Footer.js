import React from 'react'
import { Link } from "react-router-dom";
import './Style.css'
import Divider from '@material-ui/core/Divider';

function Footer() {
  return (

    <div>

     
      <Divider style={{ backgroundColor: "black", height: "2px" }}></Divider>




      <div class="container">
        <div class="row social">
          <div class="col-sm">

            <a href="https://www.instagram.com/">INSTAGRAM</a>
          </div>
          <div class="col-sm">
            <a href="https://www.facebook.com/">FACEBOOK</a>
          </div>
          <div class="col-sm">
            <a href="https://twitter.com/">TWITTER</a>
          </div>
          <div class="col-sm">
            <a href="https://www.pinterest.com/">PINTEREST</a>
          </div>
          <div class="col-sm">
            <a href="https://www.youtube.com/">YOUTUBE</a>
          </div>
        </div>
      </div>


      <div style={{ backgroundColor: "rgba(0, 0, 0, 0.85", color: "white" }}>


        <br></br>
        <br></br>


        <div style={{ fontFamily: 'var(--bs-font-sans-serif)', color: "gray", lineHeight: "0.8" }} class="container">
          <div class="row">
            <div class="col-sm">
              <h4 style={{ fontSize: "18px", color: "white", lineHeight: "1.5" }}>HELP</h4>
              <p><a href="#">Shop</a></p>
              <p><a href="#">MyAccount</a></p>
              <p><a href="#">Product</a></p>
              <p><a href="#">Payment</a></p>
              <p><a href="#">Shipping</a></p>
              <p><a href="#">Returns and Exchanges</a></p>
            </div>
            <div class="col-sm">
              <h4 style={{ fontSize: "18px", color: "white", lineHeight: "1.5" }}>FOLLOW US</h4>
              <p><a href="#">Instagram</a></p>
              <p><a href="#">Facebook</a></p>
              <p><a href="#">Twitter</a></p>
              <p><a href="#">YouTube</a></p>
              <p><a href="#">Snapchat</a></p>

            </div>
            <div class="col-sm">
              <h4 style={{ fontSize: "18px", color: "white", lineHeight: "1.5" }}>COMPANY</h4>
              <p><Link to="/about">about</Link></p>
              <p><Link to="/contact">Contact</Link></p>
              <p><a href="#">Sitemap</a></p>
            </div>
            <div class="col-sm">
              <h4 style={{ fontSize: "18px", color: "white", lineHeight: "1.5" }}>POLICIES</h4>
              <p><a href="#">Privacy Policy</a></p>
              <p><a href="#">Purchase Conditions</a></p>
              <p><a href="#">Cookies settings</a></p>
            </div>
          </div>
          <p style={{ color: "grey", fontSize: "15px", lineHeight: "3" }}>Copyright© 2021 All Rights Reserved <Link style={{ color: "gray", textDecoration: "none" }} to="/">HATIFY</Link></p>
        </div>

      </div>
    </div>

  )
}
export default Footer 