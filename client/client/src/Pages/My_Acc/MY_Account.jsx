import React from 'react'
import { Link } from 'react-router-dom';
import "./MY_Account.css"

function MY_Account() {
  const Box1 = () => {
    return (
      <div className='style' style={{ backgroundColor: "#f0f0f0", padding: "20px",  }}>
        <h2>Orders</h2>
        <p>Track, return, or buy things again</p>
      </div>
    );
  };
  
  const Box2 = () => {
    return (
      <div className='style' style={{ backgroundColor: "#e0e0e0", padding: "20px",  }}>
        <h2>Login & Secure</h2>
        <p>Edit login, name, and mobile number</p>
      </div>
    );
  };const Box3 = () => {
    return (
      <div className='style' style={{ backgroundColor: "#f0f0f0", padding: "20px",  }}>
        <h2>Address</h2>
        <p>Edit addresses for orders </p>
      </div>
    );
  };
  
  return (
    <div>
      <div className='MyAccContainer'>
       <h1>My Account</h1>
       <div>
       <hr />
       <Link to="/order">
        <Box1/> {/*connect Orders.jsx*/}
       </Link>
        <hr />
        <Link to = "/login">
        <Box2/> {/*link to login page*/}
        </Link>
        <hr />
        <Link>
        <Box3/>
        </Link>
        <hr />
       </div>

      </div>
    
    </div>
  )
}

export default MY_Account