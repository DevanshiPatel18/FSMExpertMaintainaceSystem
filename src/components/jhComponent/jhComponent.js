import React, { Component } from 'react';
import firebase from "../../firebase";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Row from 'react-bootstrap/Row';
import {Button} from "react-bootstrap"
import Col from 'react-bootstrap/Col';
import { Card , CardImg, CardBody, CardTitle} from "react-bootstrap"
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Home from '@material-ui/icons/Home'; 
import { blue } from "@material-ui/core/colors";

class JHComponent extends Component {
  state = {
    
   
    data: '',
    userId:""
  }

  

  

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
          <br></br>
        <br />

     <center><h1>Jishu-Hozen Checklist</h1></center> 
    <br />
    <style type="text/css">
    {`
    .btn-flat {
      background-color: #0058A9 ;
      color: white;
    }
    .btn-flat1 {
      background-color: #0058A9 ;
      color: white;
    }
    .btn-flat2 {
      background-color: #0058A9;
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
  <br></br>
  <br></br>
  <center><Row style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>  

  <div >  
      
                  
                  <Button   variant="flat" size="xxl" onClick={event =>  window.location.href='/daily'}>Daily</Button>
                           
                          </div> 

                          <div >  
                  
                  <Button variant="flat1" size="xxl" onClick={event =>  window.location.href='/weekProgress'}>Weekly</Button>
                           
                          </div>

                          <div >  
                  
                  <Button variant="flat2" size="xxl" onClick={event =>  window.location.href='/month'}>Monthly</Button>
                           
                          </div>

              
       
  
            

          
                          </Row>      </center>      

        </div>
      </>
    )
  }
}

export default JHComponent;
