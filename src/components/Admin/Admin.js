import React from 'react'
// import React, { Component } from 'react';
import firebase from "../../firebase";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Row from 'react-bootstrap/Row';
import {Button} from "react-bootstrap"
import Col from 'react-bootstrap/Col';
import { Card , CardImg, CardBody, CardTitle} from "react-bootstrap"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from '@material-ui/icons/Home'; 
import { blue } from "@material-ui/core/colors";
import {useState,useEffect} from "react"
import app from '../../firebase';
import './Admin.css'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export const Admin = () => {


  var [employeeObjects,setEmployeeObjects]=useState({})

  useEffect(()=>{
    app.database().ref().child('users').on('value',(snapshot)=>{
       
          if(snapshot.val()!=null)
          setEmployeeObjects({
              ...snapshot.val()
          })
      })
  },[])

  function approveUpdate(e){
let id=e.target.id
    app.database().ref().child('users').child(id).update({
      ...employeeObjects[id],
      approved:true
    })

    console.log(employeeObjects[id])
    console.log(e.target.id)
  }

  function deleteEmployee(e){
let id=e.target.id
    app.database().ref().child('users').child(id).remove()

    // console.log(employeeObjects[id])
    // console.log(e.target.id)
  }



  return (
          <>
           <style type="text/css">
    {`
    .card.employee{
      margin:1.6rem;
      padding:26px 0 8px;
    }

   
    
    `}
  </style>
        <div >

      <header className="header">
      <Card  onClick={event =>  window.location.href='/ems'}>
 <center><Home style={{ color: blue[800] , fontSize: 40}}/> </center>


  </Card>
  <div className="header-right">
  <div style={{marginRight:"1rem"}} className="user-name">{localStorage.getItem("currentUser")!=null?localStorage.getItem("currentUser"):"No User is logged in"}</div>
 
  <ExitToAppIcon onClick={event => { window.location.href='/'
                                     localStorage.removeItem("currentUser")}}/>
  
  </div>
      </header>
                  
        
          <br></br>
        <br />

     {/* <h3 className="pageheading">Employee Signup Requests</h3>  */}
     <div class="five">
  <h1>Employee Signup Requests
   
  </h1>
</div>

    
  <br></br>

  <center>

 
    <div className="orderContainer">
	
			<div className="grid">
			<div className="grid-container">
			<table>
				<thead>
					<tr>
						<th style={{width:"20%"}}>Employee Name</th>
						<th style={{width:"20%"}}>Employee ID</th>
						<th style={{width:"20%"}}>Request Sent On:</th>
						<th style={{width:"20%"}}>Approve</th>
						<th style={{width:"20%"}}>Reject</th>
					</tr>
				</thead>
				<tbody>
			{
         
          Object.keys(employeeObjects).map(id=>{
            if(employeeObjects[id].catagory==="employee" && employeeObjects[id].approved===false){
        
				 return <tr>
          <td>{employeeObjects[id].username}</td>
          <td>{id}</td>
          <td>{`${employeeObjects[id].registerDate} ${employeeObjects[id].registerTime}`}</td>
          <td><Button  id={id} onClick={(e)=>approveUpdate(e)}>Approve</Button></td>
          <td><Button  id={id} onClick={(e)=>deleteEmployee(e)} >Reject</Button></td>
        </tr>
			}
    })
  }
				</tbody>
			</table>
			</div>
			</div>
		</div>
 
      

 



            <br></br>
            <br></br>

          </center>      

        </div>
      </>
  )
}



