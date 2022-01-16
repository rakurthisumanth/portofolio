import { Button, Grid, Paper, TextField } from '@mui/material'
import React,{useState} from 'react'
import Heder from '../heder/Heder'
import Pic from './../../images/HomePic.jpg'
import {useNavigate} from 'react-router-dom'

function Contact() {
    const nagivate=useNavigate()
    const [name,setname]=useState()
    const [sub,setsub]=useState()
    const [er,seter]=useState("")
    const [name1,setname1]=useState()
    const HandleSubmit=()=>{

        if(!name)
        {

    
            console.log(er)
            seter("Please Enter email ")

        }
        else{
        nagivate("/")
        }
        
    }
    return (
          <div>
            <Heder/>
            <Grid container spacing={2}>
                <Grid item lg={6}>
                    <div style={{marginLeft:"8vh"}}><br/>
                        <h1 style={{fontSize:"8vh",color:"white",marginBottom:"2vh"}}>Hire Me.</h1>
        <p style={{color:"white"}}>I am avalible for freelance Work. Connect with me via phone:</p><br/>
        <p style={{color:"white",display:"flex"}}>Email:<p style={{color:"red"}}>Sumanth6633@gmail.com</p></p><br/><br/>
        <Paper    style={{backgroundColor:"black",color:"white",width:"60vh",height:"50vh"}}><br/>
           <div style={{marginLeft:"14vh"}}>  <p>Your Name</p>  <TextField color="secondary" style={{width:"52vh",color:"red", backgroundColor:"skyblue"}} focused value={name1} onChange={(e)=>setname1(e.target.value)} /><br/><br/><br/> 
           <p>Your Email</p>  <TextField style={{width:"52vh",color:"red", backgroundColor:"skyblue"}}    
  value={name} onChange={(e)=>setname(e.target.value)}      color='secondary'  focused    /><br/><br/><br/>
          <p>Subject</p>  <TextField  style={{width:"52vh",color:"red", backgroundColor:"skyblue"}} focused color='secondary'  value={sub} onChange={(e)=>{setsub(e.target.value);}} /><br/><br/><br/>
           <Button onClick={HandleSubmit} style={{marginLeft:"7vh"}} variant='contained'>Submit</Button><br/>
          <p style={{color:"red"}}>{er}</p> 
        
            </div>
        </Paper>
        </div>
     </Grid>
     <Grid item lg={6}>
     <img style={{width:"90vh",height:"81vh"}} src={Pic}/>
     </Grid>
    

            </Grid>
            </div>
            
       
    )
}

export default Contact
