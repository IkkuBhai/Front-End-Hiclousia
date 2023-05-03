import React,{useState , useEffect} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {TextField, Typography} from '@material-ui/core'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Filter } from '@material-ui/icons';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 24,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

function ProductSearch() {
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = React.useState('jobRole');
  const [searchStatus,setSearchStatus]=React.useState(false)

  const handleChange = (event) => {
    setFilter(event.target.value);
  };
 const searchRes = function (){

  fetch(`http://localhost:8000/job?${filter}=${query}`)
  .then(response => response.json()
  .then(data => {
    setProducts(data.data)
    console.log(data)
    if(data.data)setSearchStatus(true)
    else alert("No Results ")
        
  })
  .catch(err=> console.log(err)));
   console.log(products);

 }
  const HandleSearch = async (event) => {
    
    searchRes()
    event.preventDefault();
   
  }
 const classes = useStyles();

  return (
    <div className = "Search">

          <form onSubmit={HandleSearch}>
          <Typography textAlign="center" variant="h6" gutterBottom>
          Search ... 
      </Typography>
      <FormControl >
        <InputLabel id="demo-simple-select-label">Filter</InputLabel>
        <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={filter}
    label="Filter"
    onChange={handleChange}
  >
    <MenuItem value={"jobRole"}>Job Role</MenuItem>
    <MenuItem value={"experience"}>Experience</MenuItem>
    <MenuItem value={"primarySkills"}>PrimarySkills</MenuItem>
    <MenuItem value={"location"}>Location</MenuItem>
    {/* <MenuItem value={"educationLevel"}>Education</MenuItem> */}
     
  </Select>
  </FormControl>
          <TextField id="outlined-basic"
           variant="outlined" 
           value={query} onChange={(e) => setQuery(e.target.value)} />
            {/* <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} /> */}
            <button type="submit">Search</button>
  {
    searchStatus?  <TableContainer component={Paper}>
    <Table className={classes.table} aria-label="customized table">
      <TableHead>
        <TableRow>
          <StyledTableCell align="right">Job Role</StyledTableCell>
          <StyledTableCell align="right">PrimarySkills</StyledTableCell>
          <StyledTableCell align="right">SecondarySkills</StyledTableCell>
          <StyledTableCell align="right">Experience</StyledTableCell>
          {/* <StyledTableCell align="right">Education Level</StyledTableCell> */}
          {/* <StyledTableCell align="right">JobDescription</StyledTableCell> */}
          <StyledTableCell align="right">Location</StyledTableCell>
          <StyledTableCell align="right">Salary</StyledTableCell>

        </TableRow>
      </TableHead>
      <TableBody>
      {products?.map((product ,index)  => (
          <StyledTableRow key={index}>
            {/* <StyledTableCell component="th" scope="row">
              {product.name}
            </StyledTableCell> */}
            <StyledTableCell align="right">{product.jobRole}</StyledTableCell>
            <StyledTableCell align="right">{product.primarySkills}</StyledTableCell>
            <StyledTableCell align="right">{product.secondarySkills}</StyledTableCell>
            <StyledTableCell align="right">{product.experience}</StyledTableCell>
            {/* <StyledTableCell align="right">{product.education.educationLevel}</StyledTableCell> */}
            <StyledTableCell align="right">{product.location}</StyledTableCell>
            <StyledTableCell align="right">{product.salary }</StyledTableCell>

          </StyledTableRow>
         ))} 
      </TableBody>
    </Table>
  </TableContainer>:null
  }
          </form>
  
    </div>
  );
}

export default ProductSearch










// ******************** working ***************

// import React, { useState , useEffect} from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
// import {Box,Button} from '@material-ui/core';
// import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';
// import Grid from '@material-ui/core/Grid';
// import CssBaseline from '@material-ui/core/CssBaseline';

// const useStyles = makeStyles((theme) => ({
  
//   root: {
//     flexGrow: 1,
//     background: 'linear-gradient(45deg, #09C6F9 30%, #045DE9 90%)',
//     border: 0,
//     borderRadius: 5,
//     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//     color: '#784bff',
//     height: 150,
//     marginBottom : "30px" ,
//     padding: '0 30px',
//   },
//   container: {
//     paddingTop: theme.spacing(3),
//     paddingBottom: theme.spacing(3),
//     // backgroundColor: theme.palette.info.main,
//     color: theme.palette.primary.main

//   },

// }));

// function ProductSearch() {
//   const [query, setQuery] = useState('');
//   const [products, setProducts] = useState([]);
  
//  const searchRes = function (){


  

//   fetch(`http://localhost:8000/job?jobRole=${query}`)
//   .then(response => response.json()
//   .then(data => {setProducts(data.data)
//   console.log(data)
//   })
//   .catch(err=> console.log(err)));
//    console.log(products);

//  }
//   const HandleSearch = async (event) => {
    
//     searchRes()
//     event.preventDefault();
   
//   }
//   const classes = useStyles();

//   return (
//     <div classNmae = "Search">
//       <h1>SEARCHBOX Results</h1>
//       <form onSubmit={HandleSearch}>
//         <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
//         <button type="submit">Search</button>
//       </form>
      
//       <Container maxWidth="xs" >
//       <CssBaseline>
//       <Grid container spacing={1}>
//         <Grid item xs={12}>
//           <Typography textAlign="center" variant="h4" gutterBottom>
//             Jobs Matched
//           </Typography>
//         </Grid>
//         {products.map((product ,index)  => (
//           <Grid item xs={8} sm={8} key={index} className={classes.root}>
//             <Typography variant="subtitle1" textAlign="center" gutterBottom >
//             JobRole :{product.jobRole}
//             </Typography>
//             <Typography variant="subtitle1" gutterBottom >
//             Experience  :{product.experience}
//             </Typography>
//             <Typography variant="subtitle1" gutterBottom >
//             Location: {product.location}
//             </Typography>
//           </Grid>
//         ))}
//       </Grid>
//       </CssBaseline>
//     </Container>
   
    
//     </div>
//   );


// }

// export default ProductSearch ;

// import React, { useState } from "react";
// import "../styles/Search.css";
// import SearchIcon from "@material-ui/icons/Search";
// import CloseIcon from "@material-ui/icons/Close";

// function SearchBar({ placeholder, data }) {
//   const [filteredData, setFilteredData] = useState([]);
//   const [wordEntered, setWordEntered] = useState("");

//   const handleFilter = (event) => {
//     const searchWord = event.target.value;
//     event.preventDefault()
//     setWordEntered(searchWord);
//     const newFilter = data.filter((value) => {
//       return value.title.toLowerCase().includes(searchWord.toLowerCase());
//     });

//     if (searchWord === "") {
//       setFilteredData([]);
//     } else {
//       setFilteredData(newFilter);
//     }
//   };

//   const clearInput = () => {
//     setFilteredData([]);
//     setWordEntered("");
//   };

//   return (
//     <div className="search">
//       <div className="searchInputs">
//         <input
//           type="text"
//           placeholder={placeholder}
//           value={wordEntered}
//           onChange={handleFilter}
//         />
//         <div className="searchIcon">
//           {filteredData.length === 0 ? (
//             <SearchIcon />
//           ) : (
//             <CloseIcon id="clearBtn" onClick={clearInput} />
//           )}
//         </div>
//       </div>
//       {filteredData.length != 0 && (
//         <div className="dataResult">
//           {filteredData.slice(0, 15).map((value, key) => {
//             return (
//               <a className="dataItem" href={value.link} target="_blank">
//                 <p>{value.title} </p>
//               </a>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// }

// export default SearchBar;

// import React, { useState } from 'react';

// function SearchJobs() {
//   const [jobResults, setJobResults] = useState([]);
//   const [jobRole, setJobRole] = useState('');
//   const [experience, setExperience] = useState('');
//   const [primarySkills, setPrimarySkills] = useState('');
//   const [secondarySkills, setSecondarySkills] = useState('');
//   const [jobDescription, setJobDescription] = useState('');
//   const [education, setEducation] = useState('');
//   const [location, setLocation] = useState('');

//   const handleFormSubmit = (event) => {
//     event.preventDefault();

//     // Make API call to get job results
//     fetch(`/api/jobs?jobRole=${jobRole}&experience=${experience}&primarySkills=${primarySkills}&secondarySkills=${secondarySkills}&jobDescription=${jobDescription}&education=${education}&location=${location}`)
//       .then(response => response.json())
//       .then(data => {
//         setJobResults(data);
//       })
//       .catch(error => {
//         console.error(error);
//         setJobResults([]);
//       });
//   };

//   return (
//     <div>
//       <h1>Search for Jobs</h1>
//       <form onSubmit={handleFormSubmit}>
//         <input type="text" placeholder="Job Role" value={jobRole} onChange={(event) => setJobRole(event.target.value)} />
//         <input type="text" placeholder="Experience" value={experience} onChange={(event) => setExperience(event.target.value)} />
//         <input type="text" placeholder="Primary Skills" value={primarySkills} onChange={(event) => setPrimarySkills(event.target.value)} />
//         <input type="text" placeholder="Secondary Skills" value={secondarySkills} onChange={(event) => setSecondarySkills(event.target.value)} />
//         <input type="text" placeholder="Job Description" value={jobDescription} onChange={(event) => setJobDescription(event.target.value)} />
//         <input type="text" placeholder="Education" value={education} onChange={(event) => setEducation(event.target.value)} />
//         <input type="text" placeholder="Location" value={location} onChange={(event) => setLocation(event.target.value)} />
//         <button type="submit">Search</button>
//       </form>
//       <div>
//         {jobResults.length > 0 ? (
//           <ul>
//             {jobResults.map((job) => (
//               <li key={job.id}>
//                 <h2>{job.title}</h2>
//                 <p>{job.description}</p>
//                 <p>Location: {job.location}</p>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>No jobs found.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default SearchJobs;