import { Grid, Paper } from '@mui/material'
import React from 'react'
import Heder from '../heder/Heder'
import Pick from './../../images/Pic.jpg'
import BusinessIcon from '@mui/icons-material/Business';
import Pick1 from './../../images/Web.jpeg'
import Pick2 from './../../images/Dev.png'
import Pick3 from './../../images/Dev2.png'

function About() {
    return (
        <div>
         <Heder/><br/>
          <Grid container spacing={1}>
              <Grid item lg={6 }>
                  <img  style={{marginLeft:"29vh",height:"75vh"}} src={Pick} alt="img"/>

              </Grid>
              <Grid item lg={6}>
                 <h1 style={{color:"white",fontSize:"8vh"}}>About Me</h1><br/>
                 <p style={{color:"white"}}>
                <p style={{marginBottom:"1vh"}}>I am a positive, enthusiastic and competent Web Developer who, over the years, has</p> 
                 <p style={{marginBottom:"1vh"}}> perform highly in this role. I have extensive experience working both alone and as the</p>
                 <p style={{marginBottom:"1vh"}}> part of a team on often time-sensitive, challenging web development projects that require</p>
                 <p style={{marginBottom:"1vh"}}> outstanding creative and technical capabilities and the ability to ensure all work is </p>
                 <p style={{marginBottom:"1vh"}}>  across a wide range of platforms. I take my work as a Web Developer optimized seriously </p>
                <p style={{marginBottom:"1vh"}}>   and this means I always ensure my skills are kept up to date within this rapidly changing </p>
                 <p style={{marginBottom:"1vh"}}>  industry. If you hire me as your Web Developer, I assure you I will fit into your team</p>
                   <p style={{marginBottom:"1vh"}}>quickly, I will always put the commercial needs of your business at the forefront of <p>everything I do, 
                      and the work I carry out will be consistent to a first-class standard</p>
<br/><br/><br>
</br>
<p style={{marginBottom:"1vh"}}>“I have just over a year of experience as a junior  WebDeveloper  with First Technology.quickly,  </p>
<p style={{marginBottom:"1vh"}}>In my short time there, I've already contributed to over a dozen projects and assisted with  </p>
<p style={{marginBottom:"1vh"}}> one project for one of the with managing firm's long-time clients.“Prior to this role,</p>

<p style={{marginBottom:"1vh"}}> I completed a one-year internship with webdevelopment First,where I honed My</p><p> web development skills. Ideally, I would like to continue to specialize in webdevelopment,</p>
 
 <p></p>  
 an area where I know your firm excels.”</p>



                 </p>

              </Grid>

          </Grid>
          <br/><br/><br/><br/><br/><br/>
         <center><h1 style={{color:"white"}}>My Awesome Services</h1></center> 
         <br/><br/><br/><br/>
          <Grid container spacing={4}>
              <Grid item lg={4}>
                  <Paper style={{height:"52vh",backgroundColor:"lightblue",marginLeft:"2vh"}}>
                  <img style={{width:"12vh",marginTop:"9vh",marginLeft:"24vh"}} src={Pick1} alt="img"/><br/><br/>
                 <center><h1 >Business Stratagy</h1></center> 
                  <p style={{marginTop:"2vh",marginLeft:"2vh"}}>I throw MySelf down amoung the</p>
                  <p style={{marginTop:"2vh",marginLeft:"2vh"}}>tall grate by the stream as i</p>
                  <p style={{marginTop:"2vh",marginLeft:"2vh"}}>close to the earth</p>
                      

                  </Paper>

              </Grid>
              <Grid item lg={4}>
              <Paper style={{height:"52vh",backgroundColor:"pink"}}>
                    <img style={{width:"12vh",marginTop:"9vh",marginLeft:"24vh"}}  src={Pick2}/><br/>
                    <center><h1 >Website Development</h1></center> 
                  <p style={{marginTop:"2vh",marginLeft:"2vh"}}>I throw MySelf down amoung the</p>
                  <p style={{marginTop:"2vh",marginLeft:"2vh"}}>tall grate by the stream as i</p>
                  <p style={{marginTop:"2vh",marginLeft:"2vh"}}>close to the earth</p>
                      
                  </Paper>

              </Grid>
              <Grid item lg={4}>
              <Paper style={{height:"52vh",backgroundColor:"lightgreen",marginRight:"2vh"}}>
              <img style={{width:"12vh",marginTop:"9vh",marginLeft:"24vh"}}  src={Pick3}/>
              <center><h1 >Marketting</h1></center> 
                  <p style={{marginTop:"2vh",marginLeft:"2vh"}}>I throw MySelf down amoung the</p>
                  <p style={{marginTop:"2vh",marginLeft:"2vh"}}>tall grate by the stream as i</p>
                  <p style={{marginTop:"2vh",marginLeft:"2vh"}}>close to the earth</p>
                      

                  </Paper>

              </Grid>
          </Grid>
          <br/>
          <br/>
          <center><h1 style={{color:"red",fontSize:"12vh"}}>Thanks </h1></center>
          <br/>
          <br></br><br/>
        </div>
    )
}

export default About
