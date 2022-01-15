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
                    <div style={{marginLeft:"8vh"}}>
                        <h1 style={{fontSize:"8vh",color:"white",marginBottom:"2vh"}}>Hire Me.</h1>
        <p style={{color:"white"}}>I am avalible for freelance Work. Connect with me via phone:</p><br/>
        <p style={{color:"white",display:"flex"}}>Email:<p style={{color:"red"}}>Sumanth6633@gmail.com</p></p><br/><br/><br/><br/>
        <Paper    style={{backgroundColor:"skyblue",color:"blue",width:"60vh",height:"50vh"}}><br/>
           <div style={{marginLeft:"14vh"}}> <TextField value={name1} onChange={(e)=>setname1(e.target.value)} label="Your Name"/><br/><br/><br/> 
            <TextField  id="margin-dense" margin="dense" value={name} onChange={(e)=>setname(e.target.value)} label="Your email"/><br/><br/><br/>
            <TextField  value={sub} onChange={(e)=>setsub(e.target.value)} label="subject"/><br/><br/><br/>
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
