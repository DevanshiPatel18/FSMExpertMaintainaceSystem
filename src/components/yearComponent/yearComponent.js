import React, { Component } from 'react';
import firebase from "../../firebase";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Row from 'react-bootstrap/Row';
import {Button} from "react-bootstrap"
import Col from 'react-bootstrap/Col';
import { Card , CardImg, CardBody, CardTitle} from "react-bootstrap"



class YearComponent extends Component {
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
  <br></br>
  <br></br>
  <center>
    
    <Row style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>  

  <div >  
      
                  
                  <Button   variant="flat" size="xxl" onClick={event =>  window.location.href='/month'}>2021</Button>
                           
                          </div> 

                          <div >  
                  
                  <Button variant="flat1" size="xxl" onClick={event =>  window.location.href='/month'}>2022</Button>
                           
                          </div>

                          <div >  
                  
                  <Button variant="flat2" size="xxl" onClick={event =>  window.location.href='/month'}>2023</Button>
                           
                          </div> 
                            <div >  
                  
                  <Button variant="flat3" size="xxl" onClick={event =>  window.location.href='/month'}>2024</Button>
                           
                          </div>

              
       
  
            

          
                          </Row>     
                          
                          <br></br>
                          <Row style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>  

  <div >  
      
                  
                  <Button   variant="flat4" size="xxl" onClick={event =>  window.location.href='/month'}>2025</Button>
                           
                          </div> 

                          <div >  
                  
                  <Button variant="flat5" size="xxl" onClick={event =>  window.location.href='/month'}>2026</Button>
                           
                          </div>

                          <div >  
                  
                  <Button variant="flat6" size="xxl" onClick={event =>  window.location.href='/month'}>2027</Button>
                           
                          </div>

                          <div >  
                  
                  <Button variant="flat7" size="xxl" onClick={event =>  window.location.href='/month'}>2028</Button>
                           
                          </div>
       
  
            

          
                          </Row>  
                              
                          
                          <br></br>
                          <Row style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>  

  <div >  
      
                  
                  <Button   variant="flat8" size="xxl" onClick={event =>  window.location.href='/month'}>2029</Button>
                           
                          </div> 

                          <div >  
                  
                  <Button variant="flat9" size="xxl" onClick={event =>  window.location.href='/month'}>2030</Button>
                           
                          </div>

                          <div >  
                  
                  <Button variant="flat10" size="xxl" onClick={event =>  window.location.href='/month'}>2031</Button>
                           
                          </div>

                          <div >  
                  
                  <Button variant="flat11" size="xxl" onClick={event =>  window.location.href='/month'}>2032</Button>
                           
                          </div>
       
  
            

          
                          </Row>  
                         
                            </center>      

        </div>
      </>
    )
  }
}

export default YearComponent;
