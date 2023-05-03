import React from 'react';
import '../../styles/App.css';
import { useEffect } from 'react';
import LoginCard from '../loginPage/loginCard';

import SearchIcon from '@mui/icons-material/Search';
import {useNavigate,Link} from "react-router-dom"
import { AiOutlineUser } from "react-icons/"


function App(){
const [user, setUser] = React.useState("");
const navigate=useNavigate()

useEffect(() => {
  setUser(  JSON.parse(localStorage.getItem("userDetails")))
 
}, [])

function logOut(){
  localStorage.removeItem('userDetails');
  localStorage.removeItem('token');
  window.location.reload();
}


  return(

    <div className="hero">
      <nav>
       
       <h1>H<span>iCLOUSIA</span></h1>
       <div className="search">
          
          </div>

       <a href="/ProductSearch"><SearchIcon  sx={{ fontSize: 80 , color: "white" }} /></a>
       <ul>
         <li><a href="#t">Talent Profile</a></li>
         <li><Link to="/RecruiterProfileForm">Recruiter</Link></li>
         <li><Link>About Us</Link></li>
         <li><Link>Contact Us</Link></li>

         {user ? (
              <li
                style={{ background: "red", cursor: "pointer" }}
                onClick={logOut}
              >
                Log Out
              </li>
            ) : (
              <li>
                <a href="/login">Login</a>
              </li>
            )}  
            &nbsp;&nbsp; &nbsp;
           
            {/* <AiOutlineUser style={{width: '4%', height: '6%', backgroundColor: 'aqua', borderRadius: '20px', float: 'right', marginTop: '-5.5%',cursor: 'pointer'}} onClick={()=>navigate("/UserProfile")}/>  
                   */}

                   <button className="profile" onClick={() => navigate("/UserProfile")}><i class="fa-solid fa-user" style={{height
                   : '15vh'
                  }}></i></button>
       </ul>
     </nav>

      <div className="talent-recruiter">
        <ul>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <li className="talent"><h2>Talent</h2></li>
          <li className="recruiter"><h2>Recruiter</h2></li>
        </ul>
      </div>

      <div className="home-button">
        <br></br>
        <h2>Bridging the Gap between Employability and Jobs Landscape for the
          current and Future Jobs.</h2>
      </div>
    </div>
    
  )
}


export default App;
