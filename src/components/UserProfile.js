import React, { useState, useEffect, Component } from 'react'
import { GiHamburgerMenu, GiSkills } from "react-icons/gi"
import { FaBriefcase, FaUserGraduate } from "react-icons/fa"
import { BsFillShareFill } from "react-icons/bs"
import { IoArrowBackCircle } from "react-icons/io5"
import { AiFillCloseCircle } from "react-icons/ai"
import { ImFilesEmpty } from "react-icons/im"
import { FiEdit2 } from "react-icons/fi"
import Multiselect from "multiselect-react-dropdown"
import { primarySkills, secondarySkills, educationLevels, experience, location } from '../constraints/arrays'
import { slide as Menu } from 'react-burger-menu'
import axios from 'axios'
import { FileUpload } from 'primereact/fileupload'
import { Dialog } from 'primereact/dialog'
import { InputText } from 'primereact/inputtext'
import '../styles/userProfile.css'
import { Routes, Link, Route, useNavigate } from 'react-router-dom'
import Select from 'react-select'
import TextField from '@mui/material/TextField'
import { Box, Button, Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import avatar from "../images/avatar.jpg";
import ProfilePic from './RecruiterForms/UserProfileComponents/ProfilePic';

import useTest from './Test'


const Portfolio = () => {

    // API Integration Start
    //Education Start
    const [educationLevel, setEducationLevel] = useState("")
    const [collegeName, setCollegeName] = useState("")
    const [authority, setAuthority] = useState("")
    const [discipline, setDiscipline] = useState("")
    const [yearofPassout, setYearofPassout] = useState("")
    const [eduData, setEduData] = useState([])

    function SaveData() {
        let   getEduUrl = 'http://localhost:8000/education/64047a3d01c89a38448f8de1'
        const data = useTest(getEduUrl)
        console.log(data)
        setEduData(data)
    }

    function saveEducation() {
        SaveData()
    }
    
    // function saveEducation() {


    //     useEffect(() => {

    //         fetch("http://localhost:8000/education/64047a3d01c89a38448f8de1", {

    //             headers: {
    //                 'Accept': 'application/json',
    //                 'Content-Type': 'application/json'
    //             }

    //         })
    //             .then((result) => result.json())
    //             .then((resp) => {
    //                 console.log("resp", resp)
    //                 setEduData(resp)
    //                 console.log("eduData", eduData)

    //             })
    //             .catch(error => {
    //                 console.log(error)
    //             })
    //     }, [])



    // }

    // function getEducationData() {

    //     setShowModalEdit(true)
    //     saveEducation()
    // }


    // const [data,setData] = useState([])
    // useEffect(() => {
    //     fetch("http://localhost:8000/education/${_id}").then((result) => {
    //         result.json().then((resp) => {
    //             // console.warn("result",resp)
    //             setData(resp)
    //         })
    //     })
    // },[])
    // console.warn(data)
    //Education End
    // API Integration End



    const [pskills, setPskills] = useState("")
    const [sskills, setSskills] = useState("")



    const Navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("userDetails"))
    //  console.log(user)
    if (!user) Navigate("/login")

    const [userInfo, setUserInfo] = useState([])

    useEffect(() => {

        // console.log(user._id)
        fetch(`http://localhost:8000/personal/${user._id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(response => response.json())
            .then(data => { console.log(data); setUserInfo(data.data) })
            .catch(err => console.log(err))
        console.log(userInfo)

    }, [])




    const [selectSkill, setSelectSkill] = useState([])

    function handleSelectionChange(selectedItems) {
        setSelectSkill(selectedItems)
    }



    const [showModal, setShowModal] = useState(false)


    const MyModal = () => {

        async function Save() {
            console.warn(pskills, sskills)
            let item = { pskills, sskills }
            let result = await fetch("http://localhost:8000/personal/${user._id}", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },

                body: JSON.stringify(item)
            })

            result = await result.json()
            localStorage.setItem("user-skills", JSON.stringify(result))
        }



        return (
            <>
                <div className="modal-wrapper">
                    <div className="modal-container">
                        <h3 style={{ textAlign: 'center', marginBottom: '15px', fontFamily: "'Ubuntu', sans-serif", }}>Add Skills</h3>
                        <Multiselect
                            isObject={false}
                            options={primarySkills}

                            onChange={(e) => setPskills(e.target.value)}
                        />
                        <button className="modal-btn" onClick={Save}>save</button>
                        <button className="modal-btn" onClick={() => setShowModal(false)}>cancel</button>
                    </div>
                </div>
            </>
        )
    }



    const [showModalS, setShowModalS] = useState(false)
    const MyModalS = () => {
        return (
            <>
                <div className="modal-wrapper">
                    <div className="modal-container">
                        <h3 style={{ textAlign: 'center', marginBottom: '15px', fontFamily: "'Ubuntu', sans-serif", }}>Add Skills</h3>
                        <Multiselect
                            isObject={false}
                            options={secondarySkills}

                            onChange={(e) => setSskills(e.target.value)}
                        />
                        <button className="modal-btn" onClick={Save}>save</button>
                        <button className="modal-btn" onClick={() => setShowModalS(false)}>cancel</button>
                    </div>
                </div>
            </>
        )
    }

    const [showMediaIcons, setShowMediaIcons] = useState(false)






    //Education Pop-Up Start


    const [showModalEducation, setShowModalEducation] = useState(false)

    const MyModalEducation = () => {
        return (
            <>
                <div className="edu-Modal-wrapper">
                    <div className="edu-Modal-container">
                        <button style={{ float: 'left', cursor: 'pointer', fontSize: '24px', marginLeft: '-5px', backgroundColor: 'transparent', border: 'none', }} onClick={() => setShowModalEducation(false)}><IoArrowBackCircle /></button>

                        <h3 style={{ textAlign: 'center', marginBottom: '15px', fontFamily: "'Ubuntu', sans-serif", }}>Update Education</h3>

                        <div className='education-data'>

                            {userInfo.educationData?.map((education) => (
                                <Grid item xs={8} sm={8} key={education._id} >

                                    <div style={{ margin: '10%', marginTop: '6%', marginBottom: '1px', }}>

                                        <button className="education-data-icon" onClick={saveEducation}><FiEdit2 /></button>
                                        {showEducationEdit && <MyModalEducationSecond />}

                                        <h5 style={{ fontFamily: "'Sans-Serif', Arial", fontSize: '19px', }}>{education.educationLevel}</h5> <p style={{ fontSize: '10px', }}>from</p> <p>{education.collegeName}</p>

                                        <br />

                                        <p><span style={{ fontWeight: 'bold', color: 'black', }}>Authority: </span>{education.authority}</p>
                                        <br />
                                        <p><span style={{ fontWeight: 'bold', color: 'black', }}>Discipline: </span>{education.discipline}</p>
                                        <br />
                                        <p><span style={{ fontWeight: 'bold', color: 'black', }}>Year of Passout: </span>{education.yearofPassout}</p>

                                        <hr style={{ fontSize: '10px', }}></hr>
                                    </div>


                                </Grid>
                            ))}

                        </div>

                    </div>
                </div>
            </>
        )
    }

    //Education 2nd Pop-Up Start

    const [showEducationEdit, setShowModalEdit] = useState(false)

    const MyModalEducationSecond = () => {

        return (
            <>
                <div className="edu-Modal-wrapper">
                    <div className="edu-Modal-container">
                        <button style={{ fontSize: '24px', float: 'right', backgroundColor: 'transparent', border: 'none', marginTop: '-7px', cursor: 'pointer', }} onClick={() => setShowModalEdit(false)}><AiFillCloseCircle /></button>
                        <div className="edu-modal-form">

                            <form>

                                <div className='education-form-input'>
                                    <Select

                                        value={educationLevel}
                                        onChange={(e) => { setEducationLevel(e.target.value) }}
                                        name="educationLevel"
                                        placeholder="Education Level"
                                        options={educationLevels}
                                    />
                                </div>

                                <div className='education-form-input'>
                                    <label style={{ padding: '9px', fontSize: '20px', }}>College Name</label>
                                    <input style={{ borderRadius: '0.3rem', width: '15rem', height: '1.5rem', borderWidth: 'thin', }} type="text" value={collegeName} onChange={(e) => { setCollegeName(e.target.value) }} name='collegeName' placeholder='College Name' />
                                </div>
                                <br></br>

                                <div className='education-form-input'>
                                    <label style={{ padding: '9px', fontSize: '20px', }}>Authority</label>
                                    <input style={{ borderRadius: '0.3rem', width: '15rem', height: '1.5rem', borderWidth: 'thin', }} type="text" value={authority} onChange={(e) => { setAuthority(e.target.value) }} name='authority' placeholder='Authority' />
                                </div>
                                <br></br>

                                <div className='education-form-input'>
                                    <label style={{ padding: '9px', fontSize: '20px', borderWidth: 'thin', }}>Discipline</label>
                                    <input style={{ borderRadius: '0.3rem', width: '15rem', height: '1.5rem', borderWidth: 'thin', }} type="text" value={discipline} onChange={(e) => { setDiscipline(e.target.value) }} name='discipline' placeholder='Discipline' />
                                </div>
                                <br></br>

                                <div className='education-form-input'>
                                    <label style={{ padding: '9px', fontSize: '20px', borderWidth: 'thin', }}>Year of Passout</label>
                                    <input style={{ borderRadius: '0.3rem', width: '15rem', height: '1.5rem', borderWidth: 'thin', }} type="date" value={yearofPassout} onChange={(e) => { setYearofPassout(e.target.value) }} name='yearofPassout' placeholder='Year of Passout' />
                                </div>
                                <br></br>

                                <button className="modal-btn-edu" type='submit' style={{ float: 'left', }} onClick={saveEducation} >save</button>
                                <button className="modal-btn-edu" style={{ float: 'right', }}>delete</button>
                            </form>

                        </div>


                    </div>
                </div>
            </>
        )
    }

    //Eduction 2nd Pop-Up End

    //Education Pop-Up End




    //Experience Pop-Up Start

    const [showModalExperience, setShowModalExperience] = useState(false)
    const MyModalExperience = () => {

        return (
            <>
                <div className="edu-Modal-wrapper">
                    <div className="edu-Modal-container">
                        <button style={{ float: 'left', cursor: 'pointer', fontSize: '24px', marginLeft: '-5px', backgroundColor: 'transparent', border: 'none', }} onClick={() => setShowModalExperience(false)}><IoArrowBackCircle /></button>

                        <h3 style={{ textAlign: 'center', marginBottom: '15px', fontFamily: "'Ubuntu', sans-serif", }}>Update Eexperience</h3>
                        <button className="education-data-icon" onClick={() => setShowModalExperienceEdit(true)} ><FiEdit2 /></button>
                        {showModalExperienceEdit && <MyModalExperienceEdit />}

                        {userInfo.experienceData?.map((experience) => (
                            <Grid item xs={8} sm={8} key={experience._id} >
                                <div style={{ margin: '10%', marginTop: '6%', }}>

                                    <h5 style={{ fontFamily: "'Sans-Serif', Arial", }}>{experience.jobTitle}</h5> at <p>{experience.companyName}</p>
                                    <hr></hr>



                                </div>

                            </Grid>
                        ))}


                    </div>
                </div>
            </>
        )
    }
    //Experience 2nd Pop-Up Start
    const [showModalExperienceEdit, setShowModalExperienceEdit] = useState(false)

    const MyModalExperienceEdit = () => {
        return (
            <>
                <div className="edu-Modal-wrapper">
                    <div className="edu-Modal-container">
                        <button style={{ fontSize: '24px', float: 'right', backgroundColor: 'transparent', border: 'none', marginTop: '-7px', cursor: 'pointer', }} onClick={() => setShowModalExperienceEdit(false)}><AiFillCloseCircle /></button>
                        <div className="edu-modal-form">

                            <form>

                                <div className='experience-form-input'>
                                    <label style={{ padding: '9px', fontSize: '20px', }}>Job Title</label>
                                    <input style={{ borderRadius: '0.3rem', width: '15rem', height: '1.5rem', borderWidth: 'thin', }} type="text" placeholder="Job Title" />
                                </div>

                                <div className='experience-form-input'>
                                    <label style={{ padding: '9px', fontSize: '20px', }}>Company Name</label>
                                    <input style={{ borderRadius: '0.3rem', width: '15rem', height: '1.5rem', borderWidth: 'thin', }} type="text" placeholder="Company Name" />
                                </div>

                                <div className='experience-form-input'>
                                    <label style={{ padding: '9px', fontSize: '20px', borderWidth: 'thin', }}>Comapny Type</label>
                                    <input style={{ borderRadius: '0.3rem', width: '15rem', height: '1.5rem', borderWidth: 'thin', }} type="text" placeholder="Comapny Type" />
                                </div>

                                <div className='experience-form-input'>
                                    <label style={{ padding: '9px', fontSize: '20px', borderWidth: 'thin', }}>Location</label>
                                    <input style={{ borderRadius: '0.3rem', width: '15rem', height: '1.5rem', borderWidth: 'thin', }} type="text" placeholder='Location' />
                                </div>

                                <div className='experience-form-input'>
                                    <label style={{ padding: '9px', fontSize: '20px', borderWidth: 'thin', }}>Skills</label>
                                    <input style={{ borderRadius: '0.3rem', width: '15rem', height: '1.5rem', borderWidth: 'thin', }} type="text" placeholder='Skills' />
                                </div>

                                <div className='experience-form-input'>
                                    <label style={{ padding: '9px', fontSize: '20px', borderWidth: 'thin', }}>Years of Experience</label>
                                    <input style={{ borderRadius: '0.3rem', width: '15rem', height: '1.5rem', borderWidth: 'thin', }} type="text" placeholder='Years of Experience' />
                                </div>

                                <button className="modal-btn-edu" type='submit' style={{ float: 'left', }} >save</button>
                                <button className="modal-btn-edu" style={{ float: 'right', }}>delete</button>
                            </form>

                        </div>


                    </div>
                </div>
            </>
        )
    }
    //Experience 2nd Pop-Up End
    //Experience Pop-Up End

    return (
        <>
            <nav className='main-nav'>
                <div className='logo'>
                    <h2>HicLOUSIA</h2>
                </div>

                <div className='menu-link'>
                    <ul>
                        <li>
                            <a href='#jobs'><FaBriefcase />Jobs</a>
                        </li>

                        <li>
                            <a href='#career'><FaUserGraduate />Career Profile</a>
                        </li>

                        <li>
                            <a href='#upskilling'><GiSkills />Upskilling</a>
                        </li>

                        <li>
                            <a href='#share'><BsFillShareFill />Share</a>
                        </li>

                        <li>
                            <a href='#mydocs'><ImFilesEmpty />MyDocs</a>
                        </li>
                    </ul>

                    <div className='hamburger-menu'>
                        <a onClick={() => setShowMediaIcons(!showMediaIcons)}>
                            <Menu />
                        </a>
                    </div>
                </div>
            </nav>



            <section>

                <div className='Profile'>
                    <ProfilePic />
                </div>

                <div className='edu-exp'>
                    <div className='edu'>
                        <h3 style={{ marginTop: '3%', marginLeft: '3%', fontFamily: "'Ubuntu', sans-serif", float: 'left', }}>Education</h3>

                        <button onClick={() => setShowModalEducation(true)} className='edit-btn'>
                            <FiEdit2 />
                        </button>
                        {showModalEducation && <MyModalEducation />}

                        <br></br>
                        <br></br>


                        {userInfo.educationData?.map((education) => (
                            <Grid item xs={8} sm={8} key={education._id} >

                                <div style={{ margin: '10%', marginTop: '6%', }}>

                                    <h5 style={{ fontFamily: "'Sans-Serif', Arial", }}>{education.educationLevel}</h5> <p style={{ fontSize: '10px', }}>from</p> <p>{education.collegeName}</p>
                                    <hr></hr>
                                </div>


                            </Grid>
                        ))}


                    </div>


                    &nbsp;&nbsp;&nbsp;
                    <div className='exp'>
                        <h3 style={{ marginTop: '3%', marginLeft: '3%', fontFamily: "'Ubuntu', sans-serif", float: 'left', }}>Experience</h3>
                        <button onClick={() => setShowModalExperience(true)} className='edit-btn'>
                            <FiEdit2 />
                        </button>
                        {showModalExperience && <MyModalExperience />}

                        <br></br>
                        <br></br>


                        {userInfo.experienceData?.map((experience) => (
                            <Grid item xs={8} sm={8} key={experience._id} >
                                <div style={{ margin: '10%', marginTop: '6%', }}>

                                    <h5 style={{ fontFamily: "'Sans-Serif', Arial", }}>{experience.jobTitle}</h5> at <p>{experience.companyName}</p>
                                    <hr></hr>



                                </div>

                            </Grid>
                        ))}

                    </div>
                </div>



                <div className="skills">
                    <div className='primary'>
                        <h3 style={{ marginTop: '3%', marginLeft: '3%', fontFamily: "'Ubuntu', sans-serif", float: 'left', }}>Primary Skills</h3>
                        <button onClick={() => setShowModal(true)} className='edit-btn'>
                            <FiEdit2 />
                        </button>
                        {showModal && <MyModal />}
                    </div>



                    <div className='secondary'>
                        <h3 style={{ marginTop: '3%', marginLeft: '3%', fontFamily: "'Ubuntu', sans-serif", float: 'left', }}>Secondary Skills</h3>

                        <button onClick={() => setShowModalS(true)} className='edit-btn'>
                            <FiEdit2 />
                        </button>
                        {showModalS && <MyModalS />}
                    </div>
                </div>


            </section>
        </>
    )
}

export default Portfolio


































