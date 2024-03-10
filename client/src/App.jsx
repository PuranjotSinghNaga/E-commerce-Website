import React, { } from 'react'
import Navbar from './Components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main';
import MY_Account from './Pages/My_Acc/MY_Account';
import Orders from './Pages/Orders/Orders';
// import Login from './Pages/Login/Login';
// import Register from './Pages/Register/Register';

function App() {

    // const Auth = () => {
    //     const[isRegisterd,setIsRegisterd] = useState(false);
    // }
//     const handleLogin = (email,password) => {
//         console.log("Logging in with email:", email, "and password:", password)
//     }
//     const handleRegister= (email,password,confirmPassword) =>{
//     setIsRegisterd(true);
// }
  return (

    <div>
    <Navbar/>
    <Main/>
    <Main/>
    <Main/>
    {/* <MY_Account/> */}
    {/* <Orders/> */}
    {/* <div>{isRegisterd ? (
    <Register onRegister={handleRegister}/>
    ) : (<Login onLogin={handleLogin}/>
   ) }</div> */}

    <Footer/>
    </div>
  )
}

export default App;