import React from "react";

function Header() {
  return (
    <div className="header">
        <img src="" alt="" />
        <input className="search" type="text" placeholder="Search"/>
        <button className="bttn">Search</button>
        <nav>
          <ul>
            <li><a href="#">Sign in</a></li>
            <li><a href="#">Orders</a></li>
            <li><a href="#">Cart</a></li>
          </ul>
        </nav>
      
    </div>
  );
}

export default Header;