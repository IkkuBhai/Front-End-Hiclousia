// import React, { useState } from "react";
// import '../../styles/JobPostForm.css';
// import { location, jobRole, primarySkills, secondarySkills } from '../../constraints/arrays';
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';


// const useStyles = makeStyles((theme) => ({
//     root: {
//         '& .MuiTextField-root': {
//             margin: theme.spacing(1),
//             [theme.breakpoints.down('sm')]: {
//                 //  backgroundColor: theme.palette.secondary.main,
//             },
//             width: '45ch',
//         },
//     },
//     addButton: {
//         margin: theme.spacing(5),
//     },
//     removeButton: {
//         margin: theme.spacing(5),
//     },
// }));

// function JobPostForm() {

//     const [jobData, setJobData] = useState({
//         jobRole: "",
//         jobDescription: "",
//         experience: "",
//         primarySkills: "",
//         secondarySkills: "",
//         education: "",
//         location: "",
//         salary: ""
//     });

//     function HandleEvent(event) {
//         const { name, value } = event.target
//         setJobData({ ...jobData, [name]: value })
//     }

//     function submitEvent(e) {
//         if (!jobData.jobRole || !jobData.jobDescription || !jobData.experience || !jobData.secondarySkills || !jobData.primarySkills || !jobData.education) alert("Please fill all the fields'")
//         else {
//             console.log(jobData)
//             e.preventDefault()
//         }
//     }

//     function SaveJob() {
//         let info = { ...jobData }

//         fetch("http://localhost:8000/job", {
//             method: 'POST',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(info)

//         }).then(response => response.json().then(data => console.log(data)))

//     }
//     return (
//         <div className="Jobpost">

//             <br></br>
//             <br></br>

//             <form onSubmit={submitEvent}>

//                 <h1>Post a Job</h1>


//                 <option type="text" placeholder="enter  jobRole" value={jobData.jobRole} name="jobRole" onChange={HandleEvent}></option>
//                 <select id="job-role" value={jobData.jobRole} name="jobRole" onChange={HandleEvent}>
//                     {
//                         jobRole.map((item, index) =>
//                             <option key={index}>{item}</option>
//                         )
//                     }
//                 </select>
//                 <br></br><br></br>
//                 <input type="text" placeholder="enter  jobDescription" value={jobData.jobDescription} name="jobDescription" onChange={HandleEvent}></input>
//                 <br></br>
//                 <input type="number" placeholder="enter  experience" value={jobData.experience} name="experience" onChange={HandleEvent}></input>
//                 <option type="text" placeholder="enter  primarySkills" value={jobData.primarySkills} name=" primarySkills" onChange={HandleEvent}></option>
//                 <select id="pri-skill" value={jobData.primarySkills} name="primarySkills" onChange={HandleEvent}>
//                     {
//                         primarySkills.map((item, index) =>
//                             <option key={index}>{item}</option>
//                         )
//                     }
//                 </select>

//                 <option type="text" placeholder="enter  secondarySkills" value={jobData.secondarySkills} name="secondarySkills" onChange={HandleEvent}></option>
//                 <select id="sec-skill" value={jobData.secondarySkills} name="secondarySkills" onChange={HandleEvent}>
//                     {
//                         secondarySkills.map((item, index) =>
//                             <option key={index}>{item}</option>
//                         )
//                     }
//                 </select><br></br><br></br>
//                 <input type="text" placeholder="enter  education" value={jobData.education} name="education" onChange={HandleEvent}></input>
//                 <br></br>
//                 <select id="select-loc" value={jobData.location} name="location" onChange={HandleEvent}>
//                     {
//                         location.map((item, index) =>
//                             <option key={index}>{item}</option>

//                         )
//                     }
//                 </select>
//                 <br></br>
//                 <br></br>
//                 <br></br>
//                 <input type="text" placeholder="enter  salary" value={jobData.salary} name="salary" onChange={HandleEvent}></input><br></br><br></br>

//                 <br></br><br></br>
//                 <button id="btn" type="submit" onClick={SaveJob}>submit</button>
//                 <br></br>
//                 <br></br>

//             </form>

//         </div>
//     )
// }

// export default JobPostForm;


// import React, { useEffect, useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import { Button, Typography, Select, MenuItem, Grid, IconButton, TextField } from '@material-ui/core';
// import { Add, Remove, AddCircleOutline, RemoveCircleOutline, AlarmRounded } from '@material-ui/icons';
// import { location, jobRole, primarySkills, secondarySkills } from '../../constraints/arrays';
// import { Box, FormControl, InputLabel } from "@material-ui/core";
// import CssBaseline from '@material-ui/core/CssBaseline';
// import { useNavigate } from "react-router-dom";
// import MultipleSelectChip from '../multiForm/MultiSelect';



// const useStyles = makeStyles((theme) => ({
//     root: { 
//         '& .MuiTextField-root': {
//             margin: theme.spacing(2),
//             paddingTop: theme.spacing(1),
//             paddingLeft: theme.spacing(1),
//             paddingBottom: theme.spacing(3),
//             [theme.breakpoints.down('sm')]: {
//                 //  backgroundColor: theme.palette.info.main 
//             },
//             width: '70ch',
//         },
//         //  width :"auto",
//         //  height : "auto",
//         color: theme.palette.primary.main,
//         background: '#8ec9ff',
//         boxShadow: '0px 3px 5px 2px rgba(255, 105, 135, .3)',
//         padding: '50px 30px',
//         margin: "0px,500px"
//     },
//     // feildColor: {
//     //   color: "#000080"
//     // },
//     addButton: {
//         margin: theme.spacing(5),

//     },
//     removeButton: {
//         margin: theme.spacing(5),

//     },
//     formControl: {
//         width: '100%',
//         marginBottom: theme.spacing(2),
//         marginRight: theme.spacing(3),
//         // paddingBottom: theme.spacing(3)

//     },
// }));

// const userId = JSON.parse(localStorage.getItem("userDetails"))

// const JobForm = () => {
//     const navigation = useNavigate();
//     useEffect(() => {
        
//         if (userId == null) {navigation("/login")
//         alert("Please login first")
// }
//     }, [])
//     const classes = useStyles();
//     const [jobData, setJobData] = useState([
//         {
//             userDetailsID: userId?userId._id:null,
//             jobRole: "",
//             jobDescription: "",
//             experience: "",
//             primarySkills: "",
//             secondarySkills: "",
//             education: [],
//             location: "",
//             salary: "",
//         },
//     ]);

//     const handleAddJob = () => {
//         setJobData([
//             ...jobData,
//             {
//                 userDetailsID: userId._id,
//                 jobRole: "",
//                 jobDescription: "",
//                 experience: "",
//                 primarySkills: "",
//                 secondarySkills: "",
//                 education: [],
//                 location: "",
//                 salary: "",
//             },
//         ]);
//     };

//     const handleRemoveJob = (index) => {
//         const newJobs = [...jobData];
//         newJobs.splice(index-1, 1);
//         setJobData(newJobs);
//     };

//     const handleJobChange = (event, index) => {
//         const { name, value } = event.target;
//         const newJobs = [...jobData];
//         newJobs[index] = {
//             ...newJobs[index],
//             [name]: value,
//         };
//         setJobData(newJobs);
//     };

//     // const handleEduChange = (index, field, value) => {
//     //     const educations = [...formData.workExperience];
//     //        educations[index][field] = value;
//     //                       setFormData({...formData, education: educations });
//     //   };
      
//     //   const handleInputChange2 = (e, index) => {
//     //     const {name, value} = e.target;
//     //     const [field, propertyIndex] = name.split(".");
//     //     handleExperienceChange(index, field, value);
//     //   }
//     function SaveJob() {

//         jobData.map((e, index) => {

//             fetch("http://localhost:8000/job", {
//                 method: 'POST',
//                 headers: {
//                     'Accept': 'application/json',
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(e)

//             }).then(response => response.json().then(data => console.log(data)))
//         })

//     }
//     function handlesubmitEvent(e) {
//         // if (!jobData.jobRole || !jobData.jobDescription || !jobData.experience || !jobData.secondarySkills || !jobData.primarySkills || !jobData.education) alert("Please fill all the fields'")
//         // else {
//         // console.log(jobData)
//         e.preventDefault()
//         SaveJob()
//         // }
//     };

//     return (
//         <form className={classes.root} onSubmit={handlesubmitEvent}>
//             <Typography textAlign="center" variant="h6" gutterBottom>
//                 Post a job :
//             </Typography>
//             {jobData?.map((job, index) => (
//                 <div key={index}>
//                     <TextField
//                         label="Job Role"
//                         name="jobRole"
//                         value={job.jobRole}
//                         onChange={(event) => handleJobChange(event, index)}
//                         variant="outlined"
//                         size="Normal"
//                         required
//                     />

//                     <TextField
//                         label="Job Description"
//                         name="jobDescription"
//                         value={job.jobDescription}
//                         onChange={(event) => handleJobChange(event, index)}
//                         variant="outlined"
//                         fullWidth
//                         required
//                     />
//                     <TextField
//                         label="Experience"
//                         name="experience"
//                         value={job.experience}
//                         onChange={(event) => handleJobChange(event, index)}
//                         variant="outlined"
//                         fullWidth
//                         required
//                     />
//                     <MultipleSelectChip handleFunction={handleJobChange} index={index} requiredData={primarySkills} labelName={"Primary Skills"} />
                    
//                     {/* <TextField

//                         label="Primary Skills"
//                         name="primarySkills"
//                         value={job.primarySkills}
//                         onChange={(event) => handleJobChange(event, index)}
//                         variant="outlined"
//                         fullWidth
//                         required
//                     /> */}
//                     {/* <TextField
//                         label="Secondary Skills"
//                         name="secondarySkills"
//                         value={job.secondarySkills}
//                         onChange={(event) => handleJobChange(event, index)}
//                         variant="outlined"
//                         fullWidth
//                         required
//                     /> */}
//                     <MultipleSelectChip handleFunction={handleJobChange} index={index}  requiredData={secondarySkills} labelName={"Secondary Skills"}/>
//                     <Typography variant="h6" gutterBottom>
//                         Education Qualification
//                     </Typography>
//                     <Box className={classes.formControl}>
//                         {jobData.education?.map((education, index) => (
//                             <Box key={index}>
//                                 <TextField
//                                     label="Authority"
//                                     name={`education[${index}].authority`}
//                                     value={education.authority}
//                                     onChange={(event) => handleJobChange(event, index)}
//                                     variant="outlined"
//                                     required
//                                 />
//                                 <TextField
//                                     label="education Level"
//                                     name={`education[${index}].educationLevel`}
//                                     value={education.educationLevel}
//                                     onChange={(event) => handleJobChange(event, index)}
//                                     variant="outlined"
//                                     required
//                                 />
//                             </Box>

//                         ))}
//                     </Box>
//                     <Button
//                         variant="outlined"
//                         onClick={() =>
//                             setJobData({
//                                 ...jobData,
//                                 education: [
//                                     ...jobData.education,
//                                     { authority: '', educationLevel: '' }
//                                 ]
//                             })
//                         }
//                     >
//                         Add Education Qualifications
//                     </Button>
//                     <TextField
//                         label="Job Location"
//                         name="location"
//                         value={job.location}
//                         onChange={(event) => handleJobChange(event, index)}
//                         variant="outlined"
//                         fullWidth
//                         required
//                     />
//                     <TextField
//                         label="Salary"
//                         name="salary"
//                         value={job.salary}
//                         onChange={(event) => handleJobChange(event, index)}
//                         variant="outlined"
//                         fullWidth
//                         required
//                     />

//                     {index === jobData?.length - 1 &&
//                         <Button
//                             className={classes.addButton}
//                             variant="contained"
//                             color="primary"
//                             startIcon={<Add />}
//                             onClick={handleAddJob}
//                         >
//                             Add
//                         </Button>
//                     }
//                     {index !== jobData?.length - 1 &&
//                         <Button
//                             className={classes.removeButton}
//                             variant="contained"
//                             color="primary"
//                             startIcon={<Remove />}
//                             onClick={() => handleRemoveJob(index)}
//                         >
//                             Remove
//                         </Button>
//                     }
//                 </div>
//             ))}
//             <Button onClick={handlesubmitEvent}
//                 type="submit"
//                 variant="contained"
//                 color="primary"
//             >
//                 Submit

//             </Button>
//             <br></br>
//         </form>
//     );

// };

// export default JobForm;


import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography, Select, MenuItem, Grid, IconButton, TextField } from '@material-ui/core';
import { Add, Remove, AddCircleOutline, RemoveCircleOutline, AlarmRounded } from '@material-ui/icons';
import { location, jobRole, primarySkills, secondarySkills } from '../../constraints/arrays';
import { Box, FormControl, InputLabel } from "@material-ui/core";
import CssBaseline from '@material-ui/core/CssBaseline';
import { useNavigate } from "react-router-dom";
import MultipleSelectChip from '../multiForm/MultiSelect';



const useStyles = makeStyles((theme) => ({
    root: { 
        '& .MuiTextField-root': {
            margin: theme.spacing(2),
            paddingTop: theme.spacing(1),
            paddingLeft: theme.spacing(1),
            paddingBottom: theme.spacing(3),
            [theme.breakpoints.down('sm')]: {
                //  backgroundColor: theme.palette.info.main 
            },
            width: '70ch',
        },
        //  width :"auto",
        //  height : "auto",
        color: theme.palette.primary.main,
        background: '#8ec9ff',
        boxShadow: '0px 3px 5px 2px rgba(255, 105, 135, .3)',
        padding: '50px 30px',
        margin: "0px,500px"
    },
    // feildColor: {
    //   color: "#000080"
    // },
    addButton: {
        margin: theme.spacing(5),

    },
    removeButton: {
        margin: theme.spacing(5),

    },
    formControl: {
        width: '100%',
        marginBottom: theme.spacing(2),
        marginRight: theme.spacing(3),
        // paddingBottom: theme.spacing(3)

    },
}));

const userId = JSON.parse(localStorage.getItem("userDetails"))

const JobForm = () => {
    const navigation = useNavigate();
    useEffect(() => {
        
        if (userId == null) {navigation("/login")
        alert("Please login first")
}
    }, [])
    const classes = useStyles();
    const [jobData, setJobData] = useState([
        {
            userDetailsID: userId?userId._id:null,
            jobRole: "",
            jobDescription: "",
            experience: "",
            primarySkills: "",
            secondarySkills: "",
            education: [],
            location: "",
            salary: "",
        },
    ]);

    const handleAddJob = () => {
        setJobData([
            ...jobData,
            {
                userDetailsID: userId._id,
                jobRole: "",
                jobDescription: "",
                experience: "",
                primarySkills: "",
                secondarySkills: "",
                education: [],
                location: "",
                salary: "",
            },
        ]);
    };

    const handleRemoveJob = (index) => {
        const newJobs = [...jobData];
        newJobs.splice(index-1, 1);
        setJobData(newJobs);
    };

    const handleJobChange = (event, index) => {
        const { name, value } = event.target;
        const newJobs = [...jobData];
        newJobs[index] = {
            ...newJobs[index],
            [name]: value,
        };
        setJobData(newJobs);
    };

    const handleJobChange2 = (event, index) => {
        const {name, value} = event.target;
        const [field, propertyIndex] = name.split(".");
        handleJobChange(index, field, value);
      };

    function SaveJob() {
          let info = {...jobData}
    
            fetch("http://localhost:8000/job", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(info)

            }).then(response => response.json().then(data => {
                console.log(data)
                if(data.status===true){
                    alert("Created Job Post Sucessfully")
                    // navigate("/RecruiterSearch")
                }

            }))
        

    }
    function handlesubmitEvent(e) {
        // if (!jobData.jobRole || !jobData.jobDescription || !jobData.experience || !jobData.secondarySkills || !jobData.primarySkills || !jobData.education) alert("Please fill all the fields'")
        // else {
        // console.log(jobData)
        e.preventDefault()
        SaveJob()
        // }
    };

    return (
        <form className={classes.root} onSubmit={handlesubmitEvent}>
            <Typography textAlign="center" variant="h6" gutterBottom>
                Post a job :
            </Typography>
            {jobData?.map((job, index) => (
                <div key={index}>
                    <TextField
                        label="Job Role"
                        name="jobRole"
                        value={job.jobRole}
                        onChange={(event) => handleJobChange(event, index)}
                        variant="outlined"
                        size="Normal"
                        required
                    />

                    <TextField
                        label="Job Description"
                        name="jobDescription"
                        value={job.jobDescription}
                        onChange={(event) => handleJobChange(event, index)}
                        variant="outlined"
                        fullWidth
                        required
                    />
                    <TextField
                        label="Experience"
                        name="experience"
                        value={job.experience}
                        onChange={(event) => handleJobChange(event, index)}
                        variant="outlined"
                        fullWidth
                        required
                    />
                    <MultipleSelectChip handleFunction={handleJobChange} index={index} requiredData={primarySkills} labelName={"Primary Skills"} />
                    
                    {/* <TextField

                        label="Primary Skills"
                        name="primarySkills"
                        value={job.primarySkills}
                        onChange={(event) => handleJobChange(event, index)}
                        variant="outlined"
                        fullWidth
                        required
                    /> */}
                    {/* <TextField
                        label="Secondary Skills"
                        name="secondarySkills"
                        value={job.secondarySkills}
                        onChange={(event) => handleJobChange(event, index)}
                        variant="outlined"
                        fullWidth
                        required
                    /> */}
                    <MultipleSelectChip handleFunction={handleJobChange} index={index}  requiredData={secondarySkills} labelName={"Secondary Skills"}/>
                    <Typography variant="h6" gutterBottom>
                        Education Qualification
                    </Typography>
                    <Box className={classes.formControl}>
                        {jobData.education?.map((education, index) => (
                            <Box key={index}>
                                <TextField
                                    label="Authority"
                                    name={`education[${index}]`}
                                    value={education.authority}
                                    onChange={(event) => handleJobChange2(event, index)}
                                    variant="outlined"
                                    required
                                />
                                <TextField
                                    label="education Level"
                                    name={`education[${index}]`}
                                    value={education.educationLevel}
                                    onChange={(event) => handleJobChange2(event, index)}
                                    variant="outlined"
                                    required
                                />
                                <TextField
                                    label="Discipline"
                                    name={`education[${index}]`}
                                    value={education.discipline}
                                    onChange={(event) => handleJobChange2(event, index)}
                                    variant="outlined"
                                    required
                                />
                            </Box>

                        ))}
                    </Box>
                    <Button
                        variant="outlined"
                        onClick={() =>
                            setJobData({
                                ...jobData,
                                education: [
                                    ...jobData.education,
                                    { authority: '', educationLevel: '', discipline: '' }
                                ]
                            })
                        }
                    >
                        Add Education Qualifications
                    </Button>
                    <TextField
                        label="Job Location"
                        name="location"
                        value={job.location}
                        onChange={(event) => handleJobChange(event, index)}
                        variant="outlined"
                        fullWidth
                        required
                    />
                    <TextField
                        label="Salary"
                        name="salary"
                        value={job.salary}
                        onChange={(event) => handleJobChange(event, index)}
                        variant="outlined"
                        fullWidth
                        required
                    />

                    {index === jobData?.length - 1 &&
                        <Button
                            className={classes.addButton}
                            variant="contained"
                            color="primary"
                            startIcon={<Add />}
                            onClick={handleAddJob}
                        >
                            Add
                        </Button>
                    }
                    {index !== jobData?.length - 1 &&
                        <Button
                            className={classes.removeButton}
                            variant="contained"
                            color="primary"
                            startIcon={<Remove />}
                            onClick={() => handleRemoveJob(index)}
                        >
                            Remove
                        </Button>
                    }
                </div>
            ))}
            <Button onClick={handlesubmitEvent}
                type="submit"
                variant="contained"
                color="primary"
            >
                Submit

            </Button>
            <br></br>
        </form>
    );

};

export default JobForm;