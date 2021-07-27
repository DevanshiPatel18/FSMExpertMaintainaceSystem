import React, { Component } from 'react';
import firebase from "../../firebase";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Row from 'react-bootstrap/Row';
import {Button} from "react-bootstrap"
import Col from 'react-bootstrap/Col';
import { Card , CardImg, CardBody, CardTitle} from "react-bootstrap"
import Home from '@material-ui/icons/Home'; 
import { blue } from "@material-ui/core/colors";

import ExitToAppIcon from '@material-ui/icons/ExitToApp';


import { Link } from 'react-router-dom'

class MonthlyComponent extends Component {
  state = {
    
   
    data: '',
    userId:""
  }

  
  handleClick(value) {
    return function() {
      
      console.log(value)
    }
    
  };
  

  render() {
    

    return (
      <>
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
          

     <center><h3></h3></center> 
    <br />
    <style type="text/css">
    {`
    .btn-flat {
      background-color:  #0058A9  ;
      color: white;
    }
    .btn-flat1 {
      background-color:  #0058A9  ;
      color: white;
    }
    .btn-flat2 {
      background-color: #0058A9   ;
      color: white;
    }
    .btn-flat3 {
      background-color: #0058A9   ;
      color: white;
    }
    .btn-flat4 {
      background-color: #0058A9   ;
      color: white;
    }
    .btn-flat5 {
      background-color: #0058A9   ;
      color: white;
    }
    .btn-flat6 {
      background-color: #0058A9   ;
      color: white;
    }
    .btn-flat7 {
      background-color: #0058A9    ;
      color: white;
    }
    .btn-flat8 {
      background-color: #0058A9   ;
      color: white;
    }
    .btn-flat9 {
      background-color:   #0058A9 ;
      color: white;
    }
    .btn-flat10 {
      background-color: #0058A9   ;
      color: white;
    }
    .btn-flat11 {
      background-color: #0058A9  ;
      color: white;
    }

    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
      width: 20rem;
      height:7rem
    }
    `}
  </style>

  {/* <br></br> */}
  <br></br>
  <center>
    
    
    <Row style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>  

  <div >  
      
                  
                  <Button   variant="flat" size="xxl" onClick={event =>  window.location.href='/jan'}>January</Button>
                           
                          </div> 

                          <div >  
                  
                  <Button variant="flat1" size="xxl" onClick={event =>  window.location.href='/feb'}>February</Button>
                           
                          </div>

                          <div >  
                  
                  <Button variant="flat2" size="xxl" onClick={event =>  window.location.href='/mar'}>March</Button>
                           
                          </div> 
                            <div >  
                  
                  <Button variant="flat3" size="xxl" onClick={event =>  window.location.href='/apr'}>April</Button>
                           
                          </div>

              
       
  
            

          
                          </Row>     
                          
                          <br></br>
                          <Row style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>  

  <div >  
      
                  
                  <Button   variant="flat4" size="xxl" onClick={event =>  window.location.href='/may'}>May</Button>
                           
                          </div> 

                          <div >  
                  
                  <Button variant="flat5" size="xxl" onClick={event =>  window.location.href='/jun'}>June</Button>
                           
                          </div>

                          <div >  
                  
                  <Button variant="flat6" size="xxl" onClick={event =>  window.location.href='/jul'}>July</Button>
                           
                          </div>

                          <div >  
                  
                  <Button variant="flat7" size="xxl" onClick={event =>  window.location.href='/aug'}>August</Button>
                           
                          </div>
       
  
            

          
                          </Row>  
                              
                          
                          <br></br>
                          <Row style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>  

  <div >  
      
                  
                  <Button   variant="flat8" size="xxl" onClick={event =>  window.location.href='/sep'}>September</Button>
                           
                          </div> 

                          <div >  
                  
                  <Button variant="flat9" size="xxl" onClick={event =>  window.location.href='/oct'}>October</Button>
                           
                          </div>

                          <div >  
                  
                  <Button variant="flat10" size="xxl" onClick={event =>  window.location.href='/nov'}>November</Button>
                           
                          </div>

                          <div >  
                  
                  <Button variant="flat11" size="xxl" onClick={event =>  window.location.href='/dec'}>December</Button>
                           
                          </div>
       
  
            

          
                          </Row>  
                         
                            </center>      

        </div>
      </>
    )
  }
}

export default MonthlyComponent;
