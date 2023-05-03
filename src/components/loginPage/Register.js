import React from 'react'
import '../../styles/App.css';


function App() {
  return (
    <div className='signin'>
      <div className='nav'>
          <div className='logo'>
            <a href="#hiclousia"><h1 href='#'>Hic<span>LOUSIA</span></h1></a>
          </div>
          
          <div className='menu'>
            <ul>
              <li><a href='#talent'>Talent Profile</a></li>
              <li><a href='#rec'>Recruiter</a></li>
              <li><a href='#about'>About Us</a></li>
              <li><a href='#contact'>Contact Us</a></li>
              <li><a href='#login'>Login</a></li>
            </ul>
          </div>
        </div>

        <div className="box">
        <br></br><br></br>
         <h1>Sign In</h1>

           <div class="inbox">
             
              <form>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="text" placeholder="Phone" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
              </form>

              
              <ul>  
                <li><a href="#recruiter">Recruiter</a></li>
                <li><a href="#jobseeker">Job Seeker</a></li>         
              </ul>
                    
           </div>
       </div>
    </div>
    
  );
}

export default App;