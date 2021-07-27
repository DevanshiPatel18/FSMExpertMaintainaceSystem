import React, { Component } from 'react';
import firebase from "../../firebase";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Row from 'react-bootstrap/Row';
import {Button} from "react-bootstrap"
import Col from 'react-bootstrap/Col';
import { Card , CardImg, CardBody, CardTitle} from "react-bootstrap"

import moment from "moment";

import Clock from 'react-live-clock';


class MonthProgressComponent extends Component {
  state = {
    task1: "",
    task2: "",
    task3: "",
    task4: "",
    task5: "",
    task6: "",
    task7: "",
    task8: "",
    task9: "",
    task10: "",
    task11: "",
    task12: "",
    task13: "",
    task14: "",
    task15: "",
    task16: "",
    task17: "",
    task18: "",
    task19: "",
    task20: "",
    task21: "",
    testvalue:"",
  
    userId:""
  }

  

  

  render() {
    const { task1 } = this.state;
    const { task2 } = this.state;
    const { task3 } = this.state;
    const { task4 } = this.state;
    const { task5 } = this.state;
    const { task6 } = this.state;
    const { task7 } = this.state;
    const { task8 } = this.state;
    const { task9 } = this.state;
    const { task10 } = this.state;
    const { task11 } = this.state;
    const { task12 } = this.state;
    const { task13 } = this.state;
    const { task14 } = this.state;
    const { task15 } = this.state;
    const { task16 } = this.state;
    const { task17 } = this.state;
    const { task18 } = this.state;
    const { task19 } = this.state;
    const { task20 } = this.state;
    const { task21 } = this.state;
    console.log('taskOne,taskTwo,taskThree,taskFour', task1)
    console.log('taskOne,taskTwo,taskThree,taskFour', task2)
    console.log('taskOne,taskTwo,taskThree,taskFour', task3)
    console.log('taskOne,taskTwo,taskThree,taskFour', task4)
    console.log('taskOne,taskTwo,taskThree,taskFour', task5)
    console.log('taskOne,taskTwo,taskThree,taskFour', task6)
    console.log('taskOne,taskTwo,taskThree,taskFour', task7)
    console.log('taskOne,taskTwo,taskThree,taskFour', task8)
    console.log('taskOne,taskTwo,taskThree,taskFour', task9)
    console.log('taskOne,taskTwo,taskThree,taskFour', task10)
    console.log('taskOne,taskTwo,taskThree,taskFour', task11)
    console.log('taskOne,taskTwo,taskThree,taskFour', task12)
    console.log('taskOne,taskTwo,taskThree,taskFour', task13)
    console.log('taskOne,taskTwo,taskThree,taskFour', task14)
    console.log('taskOne,taskTwo,taskThree,taskFour', task15)
    console.log('taskOne,taskTwo,taskThree,taskFour', task16)
    console.log('taskOne,taskTwo,taskThree,taskFour', task17)
    console.log('taskOne,taskTwo,taskThree,taskFour', task18)
    console.log('taskOne,taskTwo,taskThree,taskFour', task19)
    console.log('taskOne,taskTwo,taskThree,taskFour', task20)
    console.log('taskOne,taskTwo,taskThree,taskFour', task21)

    return (
      <>
        <div>
        <br />


     <center><h2>Jishu-Hozen Checklist</h2></center> 



     <div>
        <Row style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "left"
        }}>
      
       
          
</Row>    
</div>
    
    <div>
        <Row style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "left"
        }}>
      
      <Clock date={moment().format()} format={'MMMM Do YYYY, dddd'} ticking={true}  />
          
</Row>    
</div><br />
<br></br >
    <Card style={{ width: '122rem' }} body outline color="success" className="mx-auto my-2">
     
        <div >  
        <Row >
        <Col xs lg="1"><u><h5>Item</h5></u></Col>
        <Col xs lg="1"><u><h5>Check For</h5></u></Col>
        <Col xs lg="1"><u><h5>Required Standard</h5></u></Col>
        <Col ><u><h5> 1</h5></u></Col>
        <Col ><u><h5> 2</h5></u></Col>
        <Col ><u><h5> 3</h5></u></Col>
        <Col ><u><h5> 4</h5></u></Col>
        <Col ><u><h5> 5</h5></u></Col>
        <Col ><u><h5> 6</h5></u></Col>
        <Col ><u><h5> 7</h5></u></Col>
        <Col ><u><h5> 8</h5></u></Col>
        <Col ><u><h5> 9</h5></u></Col>
        <Col ><u><h5> 10</h5></u></Col>
        <Col ><u><h5> 11</h5></u></Col>
        <Col ><u><h5> 12</h5></u></Col>
        <Col ><u><h5> 13</h5></u></Col>
        <Col ><u><h5> 14</h5></u></Col>
        <Col ><u><h5> 15</h5></u></Col>
        <Col ><u><h5> 16</h5></u></Col>
        <Col ><u><h5> 17</h5></u></Col>
        <Col ><u><h5> 18</h5></u></Col>
        <Col ><u><h5> 19</h5></u></Col>
        <Col ><u><h5> 20</h5></u></Col>
        <Col ><u><h5> 21</h5></u></Col>
        <Col ><u><h5> 22</h5></u></Col>
        <Col ><u><h5> 23</h5></u></Col>
        <Col ><u><h5> 24</h5></u></Col>
        <Col ><u><h5> 25</h5></u></Col>
        <Col ><u><h5> 26</h5></u></Col>
        <Col ><u><h5> 27</h5></u></Col>
        <Col ><u><h5> 28</h5></u></Col>
        <Col ><u><h5> 29</h5></u></Col>
        <Col ><u><h5> 30</h5></u></Col>
                    </Row>

                    </div>
                    <br></br>
                    <br></br>
                    <div>
                  
                    <Row >
                    <Col xs lg="1">1.1 Machine and gantry operator panel:</Col>
                    <Col xs lg="1">Cleanliness</Col>
                    <Col xs lg="1">Free From Dust and Oil</Col>

                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    </Row>
                 
                </div>

                <div >
                  
                  <Row>
                      <Col xs lg="1">1.2 Spinning unit of fixture and door:</Col>
                      <Col xs lg="1">Cleanliness</Col>
                    <Col xs lg="1">Free From Dust and Oil</Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>  
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>                    </Row>
                </div>

                <div >
                  
                    <Row>
                      <Col xs lg="1">1.3 Gantry loader unit:</Col>
                      <Col xs lg="1">Cleanliness</Col>
                    <Col xs lg="1">Free From Dust and Burr</Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>                    </Row>
                </div>


                <div>
                    <Row>
                      <Col xs lg="1">1.4 Fixture and Slide for DFCE I/P and DFCE O/P:</Col>
                      <Col xs lg="1">Cleanliness</Col>
                    <Col xs lg="1">Free From Dust and Burr</Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>                    </Row>
                 
                </div>
                <div>
                 
                    <Row>
                      <Col xs lg="1">1.5 Robot base, Stacker Unit,Gripper finger:</Col>
                      <Col xs lg="1">Tightning </Col>
                    <Col xs lg="1">No loose nuts and bolts  during running </Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>                    </Row>
                 
                </div>
                <div>
                 
                    <Row>
                      <Col xs lg="1">1.6 Span Check Unit - fixture and slide:</Col>
                      <Col xs lg="1">Cleanliness</Col>
                    <Col xs lg="1"> No dust and burr</Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>                    </Row>
                 
                </div>                    <br></br>

                <div>
                 
                    <Row>
                      <Col xs lg="1">2.1  Return cutting oil unit motor and fan cover:</Col>
                      <Col xs lg="1">Abnormal noise, temperature and vibration</Col>
                    <Col xs lg="1"> No abnormal noise, temperature and vibration</Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>                    </Row>
                 
                </div>
                <div>
                 
                    <Row>
                      <Col xs lg="1">2.2 Lubrication tank:</Col>
                      <Col xs lg="1">Oil level</Col>
                    <Col xs lg="1"> Within range</Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>                    </Row>
                 
                </div>
                <div>
                 
                    <Row>
                      <Col xs lg="1">2.3 Grease tank:</Col>
                      <Col xs lg="1">Grease level</Col>
                    <Col xs lg="1">Within range</Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>                    </Row>
                 
                </div>
                <div>
                 
                    <Row>
                      <Col xs lg="1">2.4 Pneumatic system pressure gauge:</Col>
                      <Col xs lg="1">Air pressure</Col>
                    <Col xs lg="1">4 - 6 Bar</Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col> 
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>                   </Row>
                 
                </div>
                <div>
                 
                    <Row>
                      <Col xs lg="1">2.5 Machine and gantry panel A/C:</Col>
                      <Col xs lg="1">Cleanliness</Col>
                    <Col xs lg="1">Free from dust / oil</Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>                    </Row>
                 
                </div>
                
                <div>
                 
                    <Row>
                      <Col xs lg="1">2.6 Machine Control panel A/C:</Col>
                      <Col xs lg="1">Temperature</Col>
                    <Col xs lg="1">22° to 35°</Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col> 
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>                   </Row>
                 
                </div>
                <div>
                 
                    <Row>
                      <Col xs lg="1">2.7 Gantry panel A/C:</Col>
                      <Col xs lg="1">Temperature</Col>
                    <Col xs lg="1">22° to 35°</Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>                    </Row>
                 
                </div>
                <div>
                 
                    <Row>
                      <Col xs lg="1">2.8 Main cutting oil motors and fan cover:</Col>
                      <Col xs lg="1">Abnormal noise, temperature and vibration</Col>
                    <Col xs lg="1">No Abnormal Noise, Temperature and Vibration</Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col> 
                      <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>                   </Row>
                 
                </div>                    <br></br>

                <div>
                 
                    <Row>

                      <Col xs lg="1">3.1 Chiller unit cutting oil:</Col>
                      <Col xs lg="1">Temperature</Col>
                    <Col xs lg="1">25° to 35°</Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>                    </Row>
                 
                </div>
                <div>
                 
                    <Row>
                      <Col xs lg="1">3.2 Chiller unit spindle oil:</Col>
                      <Col xs lg="1">Temperature</Col>
                    <Col xs lg="1">25° to 35°</Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>                    </Row>
                 
                </div>
                <div>
                 
                    <Row>
                      <Col xs lg="1">3.3 Chiller Unit - oil tank (Glycol):</Col>
                      <Col xs lg="1">Oil level</Col>
                    <Col xs lg="1"> Within range</Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>                    </Row>
                 
                </div>                    <br></br>

                <div>
                 
                    <Row>
                      <Col xs lg="1">4.1 Oil level indicator:</Col>
                      <Col xs lg="1">Oil level</Col>
                    <Col xs lg="1"> Within range</Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col><Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>                    </Row>
                 
                </div>
                <div>
                 
                    <Row>
                      <Col xs lg="1">4.2 Centrifugal unit:</Col>
                      <Col xs lg="1"> Abnormal noise, excessive temperature and vibration</Col>
                    <Col xs lg="1">No abnormal noise, excessive temperature and vibration</Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>  <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>                    </Row>
                 
                </div>
                <div>
                 
                    <Row>
                      <Col xs lg="1">4.3 Elbaron:</Col>
                      <Col xs lg="1">Functioning</Col>
                    <Col xs lg="1">Green signal should be on</Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>  <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>                    </Row>
                 
                </div>
                <div>
                 
                    <Row>
                      <Col xs lg="1">4.4 Around machine area:</Col> 
                        <Col xs lg="1">Oils and air leakages</Col>
                    <Col xs lg="1">No leakages</Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>  <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>                    </Row>
                 
                </div>
                </Card>
  
            

          

        </div>
      </>
    )
  }
}



export default MonthProgressComponent;
