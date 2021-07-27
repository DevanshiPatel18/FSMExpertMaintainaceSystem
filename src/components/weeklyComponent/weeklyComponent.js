import React, { Component } from 'react';
import firebase from "../../firebase";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Row from 'react-bootstrap/Row';
import {Button} from "react-bootstrap"
import Col from 'react-bootstrap/Col';
import { Card , CardImg, CardBody, CardTitle} from "react-bootstrap"


class WeeklyComponent extends Component {
  state = {
    
   
    data: '',
    userId:""
  }

  

  

  render() {
    

    return (
      <>
        <div >
          <br></br>
        <br />

     <center><h3>Select A Day</h3></center> 
    <br />
    <style type="text/css">
    {`
    .btn-flat {
      background-color: HotPink ;
      color: white;
    }
    .btn-flat1 {
      background-color: Orchid ;
      color: white;
    }
    .btn-flat2 {
      background-color: BlueViolet ;
      color: white;
    }
    .btn-flat3 {
      background-color: LightCoral ;
      color: white;
    }
    .btn-flat4 {
      background-color: MediumAquaMarine ;
      color: white;
    }
    .btn-flat5 {
      background-color: Salmon ;
      color: white;
    }
    .btn-flat6 {
      background-color: MediumTurquoise ;
      color: white;
    }
    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }
    `}
  </style>
  <br></br>
  <br></br>
  <center>
    
    <Row style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>  

  <div >  
      
                  
                  <Button   variant="flat" size="xxl" onClick={event =>  window.location.href='/daily'}>Sunday</Button>
                           
                          </div> 

                          <div >  
                  
                  <Button variant="flat1" size="xxl" onClick={event =>  window.location.href='/daily'}>Monday</Button>
                           
                          </div>

                          <div >  
                  
                  <Button variant="flat2" size="xxl" onClick={event =>  window.location.href='/daily'}>Tuesday</Button>
                           
                          </div> 
                            <div >  
                  
                  <Button variant="flat3" size="xxl" onClick={event =>  window.location.href='/daily'}>Wednesday</Button>
                           
                          </div>

              
       
  
            

          
                          </Row>     
                          
                          <br></br>
                          <Row style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>  

  <div >  
      
                  
                  <Button   variant="flat4" size="xxl" onClick={event =>  window.location.href='/daily'}>Thursday</Button>
                           
                          </div> 

                          <div >  
                  
                  <Button variant="flat5" size="xxl" onClick={event =>  window.location.href='/daily'}>Friday</Button>
                           
                          </div>

                          <div >  
                  
                  <Button variant="flat6" size="xxl" onClick={event =>  window.location.href='/daily'}>Saturday</Button>
                           
                          </div>

              
       
  
            

          
                          </Row>  
                          <br></br>
                         
                            </center>      

        </div>
      </>
    )
  }
}

export default WeeklyComponent;
