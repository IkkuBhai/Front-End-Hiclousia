 import React, { useState } from 'react';
 import { makeStyles } from '@material-ui/core/styles';
 import TextField from '@material-ui/core/TextField';
 import { Button, Typography } from '@material-ui/core';
 import { Add, Remove} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      paddingTop: theme.spacing(1),
      paddingLeft : theme.spacing(1),
      paddingBottom : theme.spacing(3),
      [theme.breakpoints.down('sm')]: {
      },
      width: '70ch',
    },
   
       color: theme.palette.primary.main ,
       background: '#8ec9ff',
       boxShadow: '0px 3px 5px 2px rgba(255, 105, 135, .3)',
       padding: '50px 30px',
       margin : "0px,500px"
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

function ProjectForm() {
  const classes = useStyles();
  const [projectData, setProjectData] = useState([
    {
      userDetailsID: userId._id,
      projectTitle: '',
      description: '',
      skillsUsed: '',
      startDate: '',
      endDate: '',
      Url: '',
      organizationName: ''
    }
  ]
  );

 
  const handleAddProject = () => {
  
    const projects = [...projectData, {
      userDetailsID: userId._id,
      projectTitle: '',
      description: '',
      skillsUsed: '',
      startDate: '',
      endDate: '',
      Url: '',
      organizationName: ''
    }];
 
    setProjectData(
      projects
    );
  }

  const handleRemoveProject = (index) => {
    const projects = [...projectData];
    projects.splice(index, 1);
    setProjectData(
      projects
    );
  };

  const handleProjectChange = (event, index) => {

    const { name, value } = event.target;
  
    const projects = [...projectData];
    projects[index] = {
      ...projectData[index],
      [name]: value
    };
    setProjectData(projects);
  }

  function SaveProject() {
    console.log(projectData)
    let projectInfo = projectData;
    projectInfo?.map((e, index) => {
      fetch("http://localhost:8000/project", {
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

          setProjectData( [{
            userDetailsID: userId._id,
            projectTitle: '',
            description: '',
            skillsUsed: '',
            startDate: '',
            endDate: '',
            Url: '',
            organizationName: ''
          }])
          
        }
      }
      ))
    })
    return true
  }

  
  const handleSubmit = async (event) => {
    event.preventDefault();
    
   SaveProject() 
    alert("Profile submitted sccessfully")
   
    // alert(JSON.stringify(projectData));
  };
  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <Typography textAlign="center" variant="h6" gutterBottom>
        Projects :
      </Typography>
      {projectData?.map((project, index) => (
        <div key={index}>
          <TextField
            label="Project Title"
            name="projectTitle"
            variant="outlined"
            required
            value={project.projectTitle}
            onChange={(event) => handleProjectChange(event, index)}
          />

          <TextField
            label="Skills"
            name="skillsUsed"
            variant="outlined"
            required
            value={project.skillsUsed}
            onChange={(event) => handleProjectChange(event, index)}
          />
          <TextField
            label="Start Date"
            name="startDate"
            type="date"
            variant="outlined"
            required
            value={project.startDate}
            onChange={(event) => handleProjectChange(event, index)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="End Date"
            name="endDate"
            type="date"
            variant="outlined"
            required
            value={project.endDate}
            onChange={(event) => handleProjectChange(event, index)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="URL"
            name="Url"
            variant="outlined"
            required
            value={project.Url}
            onChange={(event) => handleProjectChange(event,index )}
          />
          <TextField
            label="Organization Name"
            name="organizationName"
            type="text"
            variant="outlined"
            required
            value={project.organizationName}
            onChange={(event) => handleProjectChange(event,index)}
          />
          <TextField
            label="Description"
            name="description"
            value={project.description}
            variant="outlined"
            required
            fullWidth
            multiline
            maxRows={2}
            defaultValue="Text limit 250 characters"
            // color="success"
            focused
            onChange={(event) => handleProjectChange(event,index)}
          />
          {index === projectData?.length - 1 &&
            <Button
              className={classes.addButton}
              variant="contained"
              color="primary"
              startIcon={<Add />}
              onClick={handleAddProject}
            >
              Add
            </Button>
          }
          {index !== projectData?.length - 1 &&
            <Button
              className={classes.removeButton}
              variant="contained"
              color="primary"
              startIcon={<Remove />}
              onClick={() => handleRemoveProject(index)}
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

export default ProjectForm;

// // import React, { useState } from "react";
// // import {
// //   TextField,
// //   Button,
// //   Grid,
// //   IconButton,
// //   Typography,
// // } from "@material-ui/core";
// // import { AddCircleOutline, RemoveCircleOutline } from "@material-ui/icons";

// const mandatoryFields = [  "userDetailsID","projectTitle",  "description",  "skillsUsed",  "startDate",  "endDate",  "Url",  "organizationName",];

// const ExperienceForm = () => {
//   const [projectData, setprojectData] = useState([{
//     userDetailsID: userId._id,
//     projectTitle: "",
//     description: "",
//     skillsUsed: "",
//     startDate: "",
//     endDate: "",
//     Url: "",
//     organizationName: "",
//   }]);

//   const handleAddForm = () => {
//     setprojectData([...projectData, {
//       userDetailsID: userId._id,
//       projectTitle: "",
//       description: "",
//       skillsUsed: "",
//       startDate: "",
//       endDate: "",
//       Url: "",
//       organizationName: "",
//     }]);
//   };

//   const handleRemoveForm = (index) => {
//     const newprojectData = [...projectData];
//     newprojectData.splice(index, 1);
//     setprojectData(newprojectData);
//   };

//   const handleChange = (event, index) => {
//     const { name, value } = event.target;
//     const newprojectData = [...projectData];
//     newprojectData[index][name] = value;
//     setprojectData(newprojectData);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const hasEmptyField = mandatoryFields.some(
//       (field) => projectData[0][field] === ""
//     );
//     if (hasEmptyField) {
//       alert("Please fill in all mandatory fields");
//     } else {
//       console.log(projectData);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       {projectData.map((experience, index) => (
//         <Grid container spacing={2} key={index}>
//           <Grid item xs={12} md={6}>
//             <TextField
//               label="Project Title"
//               name="projectTitle"
//               fullWidth
//               required
//               value={experience.projectTitle}
//               onChange={(event) => handleChange(event, index)}
//             />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField
//               label="Organization Name"
//               name="organizationName"
//               fullWidth
//               required
//               value={experience.organizationName}
//               onChange={(event) => handleChange(event, index)}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               label="Description"
//               name="description"
//               fullWidth
//               required
//               value={experience.description}
//               onChange={(event) => handleChange(event, index)}
//             />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField
//               label="Skills Used"
//               name="skillsUsed"
//               fullWidth
//               required
//               value={experience.skillsUsed}
//               onChange={(event) => handleChange(event, index)}
//             />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField
//               label="Start Date"
//               name="startDate"
//               fullWidth
//               required
//               value={experience.startDate}
//               onChange={(event) => handleChange(event, index)}
//               type="date"
//               InputLabelProps={{
//                 shrink: true,
//               }}
//             />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField
//               label="End Date"
//               name="endDate"
//               fullWidth
//               required
//               value={experience.endDate}
//               onChange={(event) => handleChange(event, index)}
//               type="date"
//               InputLabelProps={{
//                 shrink: true,
//               }}
//             />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField
//               label="URL"
//               name="Url"
//               fullWidth
//               required
//               value={experience.Url}
//               onChange={(event) => handleChange(event, index)}
//             />
//           </Grid>
//           {projectData.length > 1 && (
//             <Grid item xs={12}>
//               <IconButton
//                 onClick={() => handleRemoveForm(index)}
//                 color="secondary"
//               >
//                 <RemoveCircleOutline />
//               </IconButton>
//             </Grid>
//           )}
//           {index === projectData.length - 1 && (
//             <Grid item xs={12}>
//               <IconButton onClick={handleAddForm} color="primary">
//                 <AddCircleOutline />
//               </IconButton>
//               <Typography variant="caption">Add another project</Typography>
//             </Grid>
//           )}
//         </Grid>
//       ))}
//       <Button type="submit" variant="contained" color="primary">
//         Submit
//       </Button>
//     </form>
    
//   )
// }


// export default ExperienceForm;