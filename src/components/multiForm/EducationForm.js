
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import { Button, TextField, Select, MenuItem, FormControl, InputLabel, FormHelperText, makeStyles, Typography } from '@material-ui/core';
import baseurl from '../../baseURL/config'
const userId = JSON.parse(localStorage.getItem('userDetails'));


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      paddingTop: theme.spacing(1),
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(3),
      [theme.breakpoints.down('sm')]: {
        // backgroundColor: theme.palette.info.main 
      },
      width: '70ch',
    },

    background: theme.palette.info.light,
    color: '#784bff',
    //  boxShadow: '0px 3px 5px 2px rgba(255, 105, 135, .3)',
    padding: '50px 30px',
    margin: "0px,500px"
  },

  formControl: {
    margin: theme.spacing(5),
    // width: '70ch'

  },
  addButton: {
    margin: theme.spacing(5),

  },
  removeButton: {
    margin: theme.spacing(5),

  },
}));

const EducationForm = () => {
  const navigate = useNavigate()  ;
  useEffect(() => {

    if (userId == null) {
      navigate("/login")
      alert("Please login first")
    }
  }, [])
  const classes = useStyles();

  const [educationList, setEducationList] = useState([
    {
      userDetailsID: userId._id,
      educationLevel: '',
      collegeName: '',
      authority: '',
      discipline: '',
      yearOfpassout: ''
    },
  ]

  );

  const handleAddEducation = () => {

    setEducationList([...educationList, {
      userDetailsID: userId._id,
      educationLevel: '',
      collegeName: '',
      authority: '',
      discipline: '',
      yearOfpassout: ''
    },
    ]);
  };

  const handleRemoveEducation = (index) => {
    const newEducation = [...educationList];
    newEducation.splice(index - 1, 1);
    setEducationList(newEducation);
  };

  const handleChange = (event, index) => {
    // console.log(index)
    const { name, value } = event.target;
  
    const newEducation = [...educationList];

    newEducation[index] = {
      ...newEducation[index],
      [name]: value,
    }; 

    setEducationList(newEducation);
  };

  function SaveEducation() {

    educationList.map((e, index) => {

      fetch(`${baseurl}/education`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(e)

      }).then(response => response.json().then(data => {
        console.log(data)
        if (data.status === false) return false
        else{

          setEducationList( [{
            userDetailsID: userId._id,
            educationLevel: '',
            collegeName: '',
            authority: '',
            discipline: '',
            yearOfpassout: ''
          }])
          navigate("/ExperienceForm")
        }
      }

      ))

    })

    return true
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    SaveEducation()
    
  }
  return (
    <>   
      {educationList.map((education,i) => (
        <div key={education._id} className={classes.root} >
          <Typography textalign="center" variant="h6" gutterBottom  color= "primary">
        Education Details Form:
      </Typography>
          <FormControl variant="outlined" className="form-control"  >
            <InputLabel >EducationLevel</InputLabel>
            <Select
              value={education.educationLevel}
              name="educationLevel"
              onChange={(e) => handleChange(e, i)}
              label="EducationLevel"
              required

            >
              <MenuItem value="">
                <em>Select</em>
              </MenuItem>
              <MenuItem value="PhD">PhD</MenuItem>
              <MenuItem value="Master of Technology">Master of Technology </MenuItem>
              <MenuItem value="Master of Business Administration">Master of Business Administration</MenuItem>
              <MenuItem value="Master Degree">Master Degree</MenuItem>
              <MenuItem value="Bachelor of Technology">Bachelor of Technology</MenuItem>
              <MenuItem value="Bachelor Degree">Bachelor Degree</MenuItem>
              <MenuItem value="Diploma Equavalant to Bachelor degree">Diploma Equavalant to Bachelor degree</MenuItem>
              <MenuItem value="Diploma Equavalant to Master degree">Diploma Equavalant to Master degree</MenuItem>
              <MenuItem value="Online Degree">Online Degree</MenuItem>
              <MenuItem value="Advance Diploma">Advance Diploma</MenuItem>

            </Select>
          </FormControl>
          <br></br>
          <TextField
            variant="outlined"
            label="College Name"
            name="collegeName"

            value={education.collegeName}
            onChange={(e) => handleChange(e, i)}
            fullWidth
            required
          />
          <br></br>
          <TextField
            variant="outlined"
            label="Authority"
            name="authority"

            value={education.authority}
            onChange={(e) => handleChange(e, i)}
            fullWidth
            required
          />
          <br></br>
          <TextField
            variant="outlined"
            label="Discipline"
            name="discipline"

            value={education.discipline}
            onChange={(e) => handleChange(e, i)}
            fullWidth
            required
          />
          <br></br>
          <TextField
            variant="outlined"
            label="Year of Passout"
            name="yearOfpassout"

            value={education.yearOfpassout}
            onChange={(e) => handleChange(e, i)}
            type="date"
            fullWidth
            required
            InputLabelProps={{
              shrink: true,
            }}
          />
          {educationList.length !== 1 && (
            <Button className={classes.addButton}
              variant="contained"
              color="secondary"
              onClick={() => handleRemoveEducation(i)}
            >
              Remove
            </Button>
          )}
          <Button className={classes.removeButton}
            variant="contained"
            color="primary"
            onClick={handleAddEducation}
          >
            Add Education
          </Button>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      ))}

    </>
  );
};

export default EducationForm;