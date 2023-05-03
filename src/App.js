import HeroPage from './components/HomePage/HeroPage';
import Sec from './components/HomePage/Sec';
import Third from './components/HomePage/Third';
import Fourth from './components/HomePage/Fourth';
import Fifth from './components/HomePage/Fifth';
import UserProfile from './components/UserProfile.js';
import Login from "./components/loginPage/login.js"
// import JobForm from './components/formjob.js'
import EducationForm from './components/multiForm/EducationForm';
import ExperienceForm  from './components/multiForm/UserExperience';
import ProjectForm from "./components/multiForm/UserProjects"
import ProductSearch from "./components/Search.js";
import RecruiterSearch from "./components/RecruiterSearch"
// import JobPostForm from  "./components/RecruiterForms/JobPostForm" ;
import JobForm from  "./components/RecruiterForms/JobPostForm" ;

import RecruiterProfileForm from "../src/components/RecruiterForms/RecruiterForm"


import { Routes, Link, Route } from 'react-router-dom';
// import Form from './components/multiForm/MultiSelect';

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<>  
                    {/* <SearchBar/>  */}
                    <HeroPage />
                    <Sec />
                    <Third />
                    <Fourth />
                    <Fifth />
                   
                      
                </>} />
                <Route path ="login" element={<Login />}/>
                
                <Route path ="UserProfile" element={<UserProfile/>}/>
                <Route path= "EducationForm" element={ <EducationForm/>}/>
                <Route path= "ExperienceForm" element={ <ExperienceForm/>}/>
                <Route path= "ProjectForm" element={ <ProjectForm/>}/>               
                <Route path= "ProductSearch" element={ <ProductSearch/>}/>
                <Route path= "RecruiterSearch" element={ <RecruiterSearch/>}/>
                <Route path= "RecruiterProfileForm" element ={<RecruiterProfileForm/>}/>
                {/* <Route path=  "JobPostForm" element = {<JobPostForm/>}/> */}
                <Route path=  "JobForm" element = {<JobForm/>}/>
                {/* <Route path=  "multiform7" element = {<Form/>}/> */}
            </Routes>
           
        </div>
    )
}
export default App;

