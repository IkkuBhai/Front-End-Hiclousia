import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button, Typography, Grid, IconButton, } from '@material-ui/core';
import { Add, Remove, AddCircleOutline, RemoveCircleOutline } from '@material-ui/icons';
import { useTheme } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MultipleSelectChip from './MultiSelect';
import { primarySkills } from '../../constraints/arrays';

// import CssBaseline from '@material-ui/core/CssBaseline';



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
}));

const userId = JSON.parse(localStorage.getItem("userDetails"))

function ExperienceForm() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [experienceData, setExperienceData] = useState([
    {
      userDetailsID: userId._id,
      jobTitle: '',
      experience: '',
      skills: [],
      companyName: '',
      companyType: '',
      companyLocation: '',
      jobStatus: "Active"


    }
  ]
  );


  const handleAddexperience = () => {

    const experiences = [...experienceData, {
      jobTitle: '',
      experience: '',
      skills: [],
      companyName: '',
      companyType: '',
      companyLocation: '',
      jobStatus: "Active"
    }];

    setExperienceData(
      experiences
    );
  }

  const handleRemoveexperience = (index) => {
    const experiences = [...experienceData];
    experiences.splice(index, 1);
    setExperienceData(
      experiences
    );
  };

  const handleExperienceChange = (event, index) => {

    const { name, value } = event.target;
    //  console.log(name,value)
    const experiences = [...experienceData];
    experiences[index] = {
      ...experienceData[index],
      [name]: value
    };
    setExperienceData(experiences);
  }

  function SaveExperience() {
    console.log(experienceData)
    let experienceInfo = experienceData;
    experienceInfo?.map((e, index) => {
      fetch("http://localhost:8000/experience", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(e)

      }).then(response => response.json().then(data => {
        console.log(data)
        if (data.status === false) return false
        else {

          setExperienceData([{
            jobTitle: '',
            experience: '',
            skills: [],
            companyName: '',
            companyType: '',
            companyLocation: '',
            jobStatus: "Active"
          }])
          navigate("/ProjectForm")
         
        }
      }
      ))
    })
    return true
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    SaveExperience()

    alert(JSON.stringify(experienceData));
  };
  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <Typography textAlign="center" variant="h6" gutterBottom>
        Experience Details Form  :
      </Typography>
      {experienceData?.map((experience, index) => (
        <div key={index}>
          <TextField
            label="Job Title"
            name="jobTitle"
            variant="outlined"
            required
            value={experience.jobTitle}
            onChange={(event) => handleExperienceChange(event, index)}
          />

          {/* <TextField
            label="Expereince"
            name="experience"
            variant="outlined"
            required
            value={experience.experience}
            onChange={(event) => handleExperienceChange(event, index)}
          /> */}
          <FormControl variant="outlined" className={classes.root} >
            <InputLabel >Experience</InputLabel>
            <Select
              value={experience.experience}
              name="experience"
              onChange={(e) => handleExperienceChange(e, index)}
              label="Experience"
              required
            >
              <MenuItem value="">
                <em>Select</em>
              </MenuItem>
              <MenuItem value="Fresher">Fresher</MenuItem>
              <MenuItem value="1 Year">1 Year </MenuItem>
              <MenuItem value="2 Year">2 Year</MenuItem>
              <MenuItem value="3 Year">3 Year</MenuItem>
              <MenuItem value="4 Year">4 Year</MenuItem>
              <MenuItem value="5 Year">5 Year</MenuItem>
              <MenuItem value="6 Year">6 Year</MenuItem>
              <MenuItem value="7 Year">7 Year</MenuItem>
              <MenuItem value="8 Year">8 Year</MenuItem>
              <MenuItem value="9 Year">9 Year</MenuItem>
              <MenuItem value="9 Year">9 Year</MenuItem>
              <MenuItem value="10 Year">10 Year</MenuItem>
              <MenuItem value="11 to 15 Year">11 to 15 Year</MenuItem>
              <MenuItem value="15 to 20 Year">15 to 20 Year</MenuItem>
              <MenuItem value="20+ Year">20+ Year</MenuItem>

            </Select>
          </FormControl>
          {/* <TextField
           label="Skills"
           name="skills"
           variant="outlined"
           required
           value={experience.skills}
           onChange={(event) => handleExperienceChange(event, index)}
        
         /> */}

          <TextField
            label="Company Name"
            name="companyName"
            variant="outlined"
            required
            value={experience.companyName}
            onChange={(event) => handleExperienceChange(event, index)}

          />
          <TextField
            label="Company Type"
            name="companyType"
            variant="outlined"
            required
            value={experience.companyType}
            onChange={(event) => handleExperienceChange(event, index)}
          />
          <TextField
            label="Company Location"
            name="companyLocation"
            variant="outlined"
            required
            value={experience.companyLocation}
            onChange={(event) => handleExperienceChange(event, index)}
          />
          <TextField
            label="Job Status"
            name="jobStatus"
            value={experience.jobStatus}
            variant="outlined"
            required
            focused
            onChange={(event) => handleExperienceChange(event, index)}
          />

          <MultipleSelectChip handleFunction={handleExperienceChange} index={index} requiredData={primarySkills} labelName={"Skills"} />
          {index === experienceData?.length - 1 &&
            <Button
              className={classes.addButton}
              variant="contained"
              color="primary"
              startIcon={<Add />}
              onClick={handleAddexperience}
            >
              Add
            </Button>
          }
          {index !== experienceData?.length - 1 &&
            <Button
              className={classes.removeButton}
              variant="contained"
              color="primary"
              startIcon={<Remove />}
              onClick={() => handleRemoveexperience(index)}
            >
              Remove
            </Button>
          }
        </div>
      ))}
      <Button onClick={handleSubmit}
        type="submit"
        variant="contained"
        color="primary"
      >
        Submit

      </Button>
      <br></br>
    </form>
  );
}

export default ExperienceForm;