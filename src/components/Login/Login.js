
import React, { Component } from 'react';
import './Login.css'
import firebase from "../../firebase";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Row from 'react-bootstrap/Row';
import {Button} from "react-bootstrap"
import Col from 'react-bootstrap/Col';
import { Card , CardImg, CardBody, CardTitle} from "react-bootstrap"
import {useState,useEffect} from "react"
import app from '../../firebase';
import moment from "moment";

import { Form } from "react-bootstrap"

export const Login = () => {

  let empFlag=0
  let adminFlag=0
  let userExists=0

  let userDetails_i={
  email:"",
  username:""
  }

  let [userDetails,setUserDetails]=useState(userDetails_i)

  function handleInputChange(e){
    let {name,value}=e.target
    setUserDetails({
      ...userDetails,
      [name]:value
    })
  }

  function employeeButtonClicked(e){
    // console.log(e)

    app.database().ref().child('users').once('value').then((snapshot)=>{
      snapshot.forEach((snap)=>{
        if(snap.val().email===userDetails.email){
          userExists=1
        }
        if(snap.val().catagory==="employee" &&  snap.val().approved===true && snap.val().username===userDetails.username && snap.val().email===userDetails.email){
          empFlag=1
          // window.location.href='/ems'
        }
       
      })
     
      
      
    }).catch(error=>alert(error)).then(()=>{
      if(userExists==0){
        app.database().ref().child('users').push({
          approved:false,
          catagory:"employee",
          email:userDetails.email,
          registerDate:moment().format('YYYY-MM-DD'),
          registerTime:moment().format('HH:mm:ss'),
          username:userDetails.username
        })

        alert("User Created successfully")
      }
  
      else if(empFlag===1){
        localStorage.setItem("currentUser",userDetails.username)
        window.location.href='/ems'
      }
      else{
        alert("Request pending")
      }
      
      
  })

  
  }

  


  function adminButtonClicked(e){
    

    app.database().ref().child('users').once('value').then((snapshot)=>{
      snapshot.forEach((snap)=>{
        if(snap.val().catagory==="admin" && snap.val().username===userDetails.username && snap.val().email===userDetails.email){
          adminFlag=1
         
        }
       
      })
      
      
    }).catch(error=>alert(error)).then(()=>{
      if(adminFlag===1){
        localStorage.setItem("currentUser",userDetails.username)
        window.location.href='/admin'
      } 
      else{
        alert("Incorrect Credentials")
      }
  })
    
  
  }

  return (
    <>
    <div className="form-container">
      <div className="form-card">
        <h2>Login</h2>
        <Form style={{ width: "100%" }}>
   <Form.Group >
     {/* <Form.Label></Form.Label> */}
     <Form.Control type="text" placeholder="Enter ID" name="email" value={userDetails.email} onChange={handleInputChange}/>
     <Form.Text className="text-muted">
      
     </Form.Text>
     <div className="icon-login">
     <i class="fas fa-envelope"></i>
     </div>
   </Form.Group>
   <br></br>
   <Form.Group >
     {/* <Form.Label></Form.Label> */}
     <Form.Control type="text" placeholder="Enter Name" name="username" value={userDetails.username} onChange={handleInputChange}/>
     <Form.Text className="text-muted">
      
     </Form.Text>
     <div className="icon-login">
     <i class="fas fa-user"></i>
     </div>
   </Form.Group>
  
   <br></br>
 
 </Form>

 <div className="btn-grad" onClick={(event)=>adminButtonClicked(event)}>Admin</div>
 <div className="btn-grad" onClick={(event)=>employeeButtonClicked(event)}>Employee</div>

      </div>
    </div>
    </>






  )
}







