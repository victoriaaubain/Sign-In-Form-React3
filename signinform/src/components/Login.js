import React from 'react';
import Grid from '@mui/material/Grid';
import { Avatar, Paper, TextField } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import LockIcon from '@mui/icons-material/Lock'
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
  
const Login=()=> {
    const paperStyle={
        padding: '20px',
        height: "70vh",
        width: 280,
        margin: '20px auto'
    }
    const avatarStyle={ backgroundColor: 'green'}
    const textfield ={
        margin: '10px'
    }
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}><LockIcon></LockIcon></Avatar>
                    <h2>Sign In</h2>
                    <TextField label='Username' placeholder='Enter Username' style={textfield} fullWidth required></TextField>
                    <TextField label='Password' placeholder='Enter Password' style={textfield} fullWidth required></TextField>
                    <FormControlLabel
                        control={
                            <Checkbox
                                name = 'Checked'
                                color = 'primary'
                        />}
                        label='Remember me'
                        />
                    <Button type="submit" color="primary" variant="contained" style={btnstyle} fullWidth>Sign In</Button>
                </Grid>
            </Paper>   
        </Grid>
    )
}
export default Login;