import React from 'react';
import { Grid, Paper, Avatar, Icon, OutlinedInput, TextField, Link, 
   Switch, Typography, Container, Button} from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import Box from '@material-ui/core/Box';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Dashboard from "./Dashboard.js"
import { BrowserRouter as Router, Route }from "react-router-dom";
import { withRouter } from 'react-router-dom';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

function LogInPage(){

    const paperStyle={padding:20, height:"55vh", width:700, margin:"20px auto"}
    const avatarStyle={backgroundColor:"green"}
    const tstyle= {margin: "20px"}
    const bstyle={margin: "8px 0"

    }
    

    return(
      
       <div className="LogInPage" noValidate autoComplete="Off">
            {/* <h1>Admin Login</h1> */}

            <Grid>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align="center">
                    <Avatar style={avatarStyle}><PersonIcon/></Avatar>
                     <h2>Sign In</h2>
                    </Grid>
                    <Box align="center">
                    <Container>  
                   <TextField label="Email" id= "new" placeholder="Enter email"  variant="outlined" 
                     
                   />
                   </Container>
                <Container>
                   <TextField label="Password" placeholder="Enter password" type="password" style={tstyle} variant="outlined" />
                    </Container>

<Container>
                    <FormControlLabel
        control={
          <Checkbox
            name="checkedB"
            color="primary" fullWidth required
          />
        }
        label="Remember me"
      />
       </Container>

        <Button type="submit" color="primary" style={bstyle}  variant="contained" >SIGN IN</Button>
      
           <Typography>
           <Link href="#" >
            Forgot password ?
           </Link>
             </Typography>   
          
          </Box>
                  
                </Paper>
            </Grid>

       </div>


    )

}

export default LogInPage;