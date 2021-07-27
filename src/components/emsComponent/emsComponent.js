import React, { Component } from 'react';
import firebase from "../../firebase";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Row from 'react-bootstrap/Row';
import {Button} from "react-bootstrap"
import Col from 'react-bootstrap/Col';
import { Card , CardImg, CardBody, CardTitle} from "react-bootstrap"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from '@material-ui/icons/Home'; 
import { blue } from "@material-ui/core/colors";
import jh from './src/jh.jpg'
import pred from './src/pred.png'
import prev from'./src/prev.jpg'
import './emsComponent.css'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

class EmsComponent extends Component {
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

     {/* <center><h1>Expert Maintenance System</h1></center>  */}
     <div class="five">
  <h1>Expert Maintenance System
   
  </h1>
</div>
    <br />
    <style type="text/css">
    {`
    .btn-flat {
      background-color: rebeccapurple;
      color: white;
    }
    .btn-flat1 {
      background-color: crimson;
      color: white;
    }
    .btn-flat2 {
      background-color: darkblue;
      color: white;
    }
    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
      width: 30rem;
      height:7rem
    }
    .card-img-top {
      height: 240px;
  }

  .card:hover {
    transform: scale(0.95, 0.95);
    transition: 0.3s ease;
}

  .card{
    margin:0 2rem;
    // padding:10px 16px;
    padding-top:10px;
    box-shadow: rgb(149 157 165 / 60%) 0px 8px 24px;
  }

  .card-container:hover{
    cursor:pointer
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

<div className="card-container" onClick={event =>  window.location.href='/jh'}>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={jh} style={{width:"80%",display:"inline-block",margin:"auto"}} />
  <Card.Body>
    <Card.Title>Jishu-Hozen <br></br>Activites</Card.Title>

  </Card.Body>
</Card>
</div>
<div className="card-container" onClick={event =>  window.location.href='/prevent'}>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={prev} style={{width:"80%",display:"inline-block",margin:"auto"}}/>
  <Card.Body>
    <Card.Title>Preventive Maintenance<br/> Activites</Card.Title>

  </Card.Body>
</Card>
</div>
<div className="card-container">
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={pred} style={{width:"80%",display:"inline-block",margin:"auto"}}/>
  <Card.Body>
    <Card.Title>Predictive<br></br> Maintenance</Card.Title>
   
  </Card.Body>
</Card>
</div>

  {/* <div >  
      
                  
                  <Button   variant="flat" size="xxl" onClick={event =>  window.location.href='/jh'}>Jishu-Hozen Activites</Button>
                           
                          </div> 

                          <div >  
                  
                  <Button variant="flat1" size="xxl" onClick={event =>  window.location.href='/prevent'}>Preventive Maintenance Activites</Button>
                           
                          </div>

                          <div >  
                  
                  <Button variant="flat2" size="xxl">Predictive Maintenance</Button>
                           
                          </div> */}

              
       
  
            

          
                          </Row>      </center>      

        </div>
      </>
    )
  }
}

export default EmsComponent;
