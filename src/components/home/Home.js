import { Grid } from '@mui/material'
import React from 'react'
import Heder from '../heder/Heder'
import Pic from './../../images/HomePic.jpg'

function Home() {
    return (
        <div>
            <Heder/>
            <Grid container spacing={2}>
                <Grid item lg={6} sm={12}>
                   <div style={{marginTop:"23vh",marginLeft:"23vh"}}>
                       
                        <p style={{color:"white",marginBottom:"2vh"}}>Welcome To My World</p>
                    
                <h1 style={{color:"white",marginBottom:"2vh",fontSize:"6vh"}}>Hi,I'm Sumanth Rakurthi</h1>
                <h1 style={{color:"red",marginBottom:"2vh",fontSize:"6vh"}}>JS Web Developer</h1>
                <h1 style={{color:"white",fontSize:"6vh"}}>based in INDIA</h1>
                </div>

                    
               
                </Grid>
                <Grid item lg={6} sm={12}>
                    <img style={{width:"90vh",height:"81vh"}} src={Pic}/>

                </Grid>
               

            </Grid>
            
        </div>
    )
}

export default Home
