import React, { Component } from 'react';
import firebase from "../../firebase";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Row from 'react-bootstrap/Row';
import { Button } from "react-bootstrap"
import Col from 'react-bootstrap/Col';
import { Card, CardImg, CardBody, CardTitle } from "react-bootstrap"

import moment from "moment";

import Clock from 'react-live-clock';


class MonthPMComponent extends Component {
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

    data: '',
    userId: ""
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

          <Card style={{ }} body outline color="success" className="mx-auto my-2">

            <div >
              <Row >
                <Col xs lg="4"><u><h5>Check Point</h5></u></Col>
                <Col xs lg="2"><u><h5>Standard</h5></u></Col>
                <Col ><u><h5> Jan</h5></u></Col>
                <Col ><u><h5> Feb</h5></u></Col>
                <Col ><u><h5> Mar</h5></u></Col>
                <Col ><u><h5> Apr</h5></u></Col>
                <Col ><u><h5> May</h5></u></Col>
                <Col ><u><h5> Jun</h5></u></Col>
                <Col ><u><h5> Jul</h5></u></Col>
                <Col ><u><h5> Aug</h5></u></Col>
                <Col ><u><h5> Sep</h5></u></Col>
                <Col ><u><h5> Oct</h5></u></Col>
                <Col ><u><h5> Nov</h5></u></Col>
                <Col ><u><h5> Dec</h5></u></Col>

              </Row>

            </div>
            <br></br>
            <br></br>
            <div>
        <Row>   <Col xs lg="4"><h5 style={{ color: 'darkblue' }}>MACHINE 1</h5></Col>

              </Row>       
                  <br></br>

              <Row>
                <Col xs lg="4"><u>MECHANICAL</u></Col>

              </Row>
              <Row >
                <Col xs lg="4">1.1 Check air pressure as per required</Col>
                <Col xs lg="2">5 bar - 6 bar</Col>
                
                
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
              </Row>

            </div>

            <div >

              <Row>
                <Col xs lg="4">1.2 Ensure no leakages in pneumatic pipes</Col>
                <Col xs lg="2">No leakages</Col>
                
                
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>

              </Row>
            </div>

            <div >

              <Row>
                <Col xs lg="4">1.3 Manually drain moisture</Col>
                <Col xs lg="2">No moisture</Col>
                
                
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>










              </Row>
            </div>


            <div>
              <Row>
                <Col xs lg="4">1.4 Ensure no leakage in all solenoid valves</Col>
                <Col xs lg="2">No leakages</Col>
                
                
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>










              </Row>

            </div>
            <div>

              <Row>
                <Col xs lg="4">2.1 Ensure no oil leakage in lubrication tank</Col>
                <Col xs lg="2">No leakages </Col>
                
                
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>










              </Row>

            </div>
            <div>

              <Row>
                <Col xs lg="4">2.2 Check for lubrication pressure</Col>
                <Col xs lg="2">30 bar - 40 bar</Col>
                
                
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>










              </Row>

            </div>

            <div>

              <Row>
                <Col xs lg="4">2.3  Check oil level</Col>
                <Col xs lg="2">Max level</Col>
                
                

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>









              </Row>

            </div>
            <div>

              <Row>
                <Col xs lg="4">2.4 Ensure no oil leakage in grease tank</Col>
                <Col xs lg="2">No leakages</Col>
                
                
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>











              </Row>

            </div>
            <div>

              <Row>
                <Col xs lg="4">2.5 Check for lubrication pressure</Col>
                <Col xs lg="2">3 bar</Col>
                
                
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>










              </Row>

            </div>
            <div>

              <Row>
                <Col xs lg="4">2.6 Fill grease if required</Col>
                <Col xs lg="2">Max level</Col>
                
                

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>









              </Row>

            </div>
            <div>

              <Row>
                <Col xs lg="4">3.1 Check the level of coolant</Col>
                <Col xs lg="2">Max level</Col>
                
                

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>











              </Row>

            </div>

            <div>

              <Row>
                <Col xs lg="4">3.2 Ensure no leakage in hose pipes and fittings</Col>
                <Col xs lg="2">No leakages</Col>
                
                

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>



























              </Row>

            </div>
            <div>

              <Row>
                <Col xs lg="4">4.1 Ensure no wear and tear of bellow rips</Col>
                <Col xs lg="2">No wear</Col>
                
                

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>



























              </Row>

            </div>
            <div>

              <Row>
                <Col xs lg="4">5.1 Ensure no wear in the belt</Col>
                <Col xs lg="2">No wear</Col>
                
                

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>



























              </Row>

            </div>

            <div>

              <Row>

                <Col xs lg="4">5.2 Ensure proper tnsion in the belt</Col>
                <Col xs lg="2">No sag</Col>
                
                

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>



























              </Row>

            </div>
            <div>

              <Row>
                <Col xs lg="4">5.3 Ensure all guideways are fully clean</Col>
                <Col xs lg="2">No dust and burr particles</Col>
                
                
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>




























              </Row>

            </div>
            <div>

              <Row>
                <Col xs lg="4">6.1 Check axis cannot be moved. Check tool cannot be rotated. Check automatic tool change cannot be operated.</Col>

                <Col xs lg="2">Not operating</Col>
                
                

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>



























              </Row>

            </div>                           <br></br>

            <Row>
              <Col xs lg="2"><u>ELECTRICAL</u></Col>

            </Row>
            <div>

              <Row>
                <Col xs lg="4">1.1 Check for cleanliness of control panel</Col>
                <Col xs lg="2">No dust in the panel</Col>
                
                
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>



























              </Row>

            </div>
            <div>

              <Row>
                <Col xs lg="4">1.2 Remove unwanted material from panel</Col>
                <Col xs lg="2">No material</Col>
                
                

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>


























              </Row>

            </div>
            <div>

              <Row>
                <Col xs lg="4">1.3 Plug unwanted holes of panel</Col>
                <Col xs lg="2">No holes</Col>
                
                
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>



























              </Row>

            </div>
            <div>

              <Row>
                <Col xs lg="4">1.4 Check for tightness of Power Supply Cables</Col>
                <Col xs lg="2">Fully tight</Col>
                
                

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>


























              </Row>

            </div>
            <div>

              <Row>
                <Col xs lg="4">1.5 Check for tightness of all control cables</Col>
                <Col xs lg="2">Fully tight</Col>
                
                
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>



























              </Row>

            </div>
            <div>

              <Row>
                <Col xs lg="4">1.6 Check Earthing</Col>
                <Col xs lg="2">Less than 2 Volts</Col>
                
                

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>


























              </Row>

            </div>
            <div>

              <Row>
                <Col xs lg="4">2.1 Open motor terminal, check and tighten connections</Col>
                <Col xs lg="2">Fully tight</Col>
                
                
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>



























              </Row>

            </div>
            <div>

              <Row>
                <Col xs lg="4">2.2 Clean all induction motors Fan and cover thoroughly</Col>
                <Col xs lg="2">No dust, burr</Col>
                
                
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>

                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>
                <Col><ProgressBar label={task1.status} variant="success" style={{ width: "15px" }} now={task1} /></Col>



























              </Row>

            </div>
            <div>

              <Row>
                <Col xs lg="4">3.1 Clean all proximity switches / Sensors</Col>
                <Col xs lg="2">No dust</Col>
                
                










                <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    
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
            <div>

              <Row>
                <Col xs lg="4">3.2 Check tightness of all proximity switches / Sensors.</Col>
                <Col xs lg="2">Fully tight</Col>
                
                



                <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    
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
            <div>

              <Row>
                <Col xs lg="4">3.3 Clean and tighten all the limit switches / Sensors.</Col>
                <Col xs lg="2">Clean and Fully tight</Col>
                
                




                <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    
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
            <div>

              <Row>
                <Col xs lg="4">3.4 Check the tightness of connections</Col>
                <Col xs lg="2">Fully tight</Col>
                
                


                <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    
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
            <div>

              <Row>
                <Col xs lg="4">4.1 Oil level indicator:</Col>
                <Col xs lg="2">Oil level</Col>
                
                









                <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    
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
            <div>

              <Row>
                <Col xs lg="4">4.1 Check all cable drag-chains for possible broken pieces and proper alignment in center of trough</Col>
                <Col xs lg="2">No damage or twisting to cables and should be in line</Col>
                
                








                <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    
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
            <div>

              <Row>
                <Col xs lg="4">5.1 Clean all axis servo motors</Col>
                <Col xs lg="2">No dust, burr</Col>
                
                









                <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    
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
            <div>

              <Row>
                <Col xs lg="4">5.2 Check all motor connectors for tightness</Col>
                <Col xs lg="2">Fully tight</Col>
                
                











                <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    
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
            <div>

              <Row>
                <Col xs lg="4">6.1 Check drive cooling fans</Col>
                <Col xs lg="2">No dust</Col>
                
                


















                <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    
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
            <div>

              <Row>
                <Col xs lg="4">6.2 Check tightness of power and feedback connectors</Col>
                <Col xs lg="2">Fully tight</Col>
                
                


















                <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    
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

            <div>

              <Row>
                <Col xs lg="4">7.1 Check all emergency switch</Col>
                <Col xs lg="2">Working and switching off the control circuit</Col>
                
                

















                <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    
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
            <div>

              <Row>
                <Col xs lg="4">8.1 Clean the UPS</Col>
                <Col xs lg="2">No dust in the panel</Col>
                
                







                <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    
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
            <div>

              <Row>
                <Col xs lg="4">8.2 Check the tightness of connections. (Incoming and Outgoing)</Col>
                <Col xs lg="2">Fully tight</Col>
                
                

                <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    
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
            <div>

              <Row>
                <Col xs lg="4">8.3 Check for voltage (Incoming and Outgoing)</Col>
                <Col xs lg="2">415 VAC</Col>
                
                
                <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "15px"}} now={task1} /></Col>
                    
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
          </Card>
        </div>
      </>
    )
  }
}



export default MonthPMComponent;
