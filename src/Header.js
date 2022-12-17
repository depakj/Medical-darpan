import React from "react";
import Card from "./Card";
import arrow from './images/next.png';
import cross from './images/x-button.png';
import "./Header.css";
import user from "./images/user.png";

function Header() {
  return (
    <>
      <div className="Navbar">
        <ul>
          <div className="box"></div>
          <li className="mdr">Medical Darpan</li>
          <li>Home</li>
          <li>Products</li>
          <li>Distributor</li>
          <li>Manufactuor</li>
          <li>About Us</li>
          <li>Blog</li>
          <li>Login</li>
        </ul>
        <img src={user} alt="user" className="user" />
      </div>
      <div className="sec_nav">
        <p>Medical darpan</p>
        <img src={arrow} className="arrow" />
        <p>Search</p>
        <img src={arrow} className="arrow"/>
        <p>Fabiflu</p>
      </div>
      
        <div class="input-group">
          <input
            type="search"
            class="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <button type="button" class="btn btn-outline-primary">
            search
          </button>
        </div>


        <div className="para">
            <h5 className="pa">Paracetamol</h5>
             <p className="pd128">(128 products)</p>
             <div className="Acce">
               <p className="med_name">AcecloFenac</p>
               <img src={cross} className="cross2"/>
             </div>
             <div className="pow_box">
               <p className="pow">500mg</p>
               <img src={cross} className="cross"/>
             </div>
             <p className="rm">Remove all</p>
        </div>


        <Card/>
        
        
    </>
  );
}

export default Header;

/*    width: 100vw;
    height: 50px;
    background-color: brown;
    display: flex;
    justify-content: space-evenly;*/
