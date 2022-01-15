
import React from 'react'
import AppBar from '@mui/material/AppBar'
import { Grid, Toolbar } from '@mui/material'
import Pic from './../../images/logo.png'
import {  Link } from "react-router-dom";
function Heder() {
    return (
        <div>
            <br/><br/>
            <AppBar position='static' style={{backgroundColor:"#101010"}}>
                <Toolbar>
                    <Grid container spacing={1} >
                        <Grid item xl={1} lg={1} md={1}  sm={4}>
                      <div style={{marginBottom:"5vh"}}><img src={Pic} alt="img"/></div>

                        </Grid>
                        <Grid item  xl={1} sm={3} lg={1} md={1}>
                           <h2 style={{marginTop:"2vh"}}><Link to="/">Home</Link></h2>

                        </Grid>
                        <Grid item  xl={1} sm={3} lg={1} md={1} >
                           <h2 style={{marginTop:"2vh"}}><Link to="/About">About</Link></h2>
                       

                        </Grid>
                        <Grid item xl={1}  sm={3} lg={1} md={1}>
                            <h2 style={{marginTop:"2vh"}}><Link to="/Contact">Contact</Link></h2>

                        </Grid>
                    </Grid>
        
                </Toolbar>

            </AppBar>
            
        </div>
    )
}

export default Heder
