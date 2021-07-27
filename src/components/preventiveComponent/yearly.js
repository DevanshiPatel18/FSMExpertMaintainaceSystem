import React, { Component } from 'react';
import firebase from "../../firebase";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Row from 'react-bootstrap/Row';
import {Button} from "react-bootstrap"
import Col from 'react-bootstrap/Col';
import { Card , CardImg, CardBody, CardTitle} from "react-bootstrap"

import moment from "moment";

import Clock from 'react-live-clock';
class YearComponent extends Component {
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
    task22: "",
    task23: "",
    task24: "",
    task25: "",
    task26: "",
    data: '',
    userId:""
  }

  componentWillMount() {

    var userid = ''
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User logged in already or has just logged in.
        userid = user.uid
        this.setState({
          userId:userid
        })
        console.log('propsss',this.state.userId);
        const rootRef = firebase.database().ref("users").child(this.state.userId)
        rootRef.on("value", snap => {
            this.setState({
            task1: snap.val().serverState.emailSync,
            task2: snap.val().serverState.portAssigned,
            task3: snap.val().serverState.connection,
            task4: snap.val().serverState.subscription,
            task5: snap.val().serverState.powerStatus,
            task6: snap.val().serverState.entry1,
            task7: snap.val().serverState.orderStatus,
            task8: snap.val().serverState.scanDone,
            task9: snap.val().serverState.inventory1,
            task10: snap.val().serverState.stoppingCylinder1up,
            task11: snap.val().serverState.conveyor1Status,
            task12: snap.val().serverState.intDigitalOutput,
            task13: snap.val().serverState.opDigitalOutput,
            task14: snap.val().serverState.palletClampingCylinder1Forward,
            task15: snap.val().serverState.rFIDPosition,
            task16: snap.val().serverState.gripper1Open,
            task17: snap.val().serverState.motorCylinder1Forward,
            task18: snap.val().serverState.faceOne,
            task19: snap.val().serverState.faceTwo,
            task20: snap.val().serverState.faceThree,
            task21: snap.val().serverState.faceFour,
            task22: snap.val().serverState.numAccepted,
            task23: snap.val().serverState.motorCylinder1Back,
            task24: snap.val().serverState.stoppingCylinder1down,
            task25: snap.val().serverState.palletClampingCylinder1Back,
            task26: snap.val().serverState.exit1,
            })
            console.log('snap.val()',snap.val().serverState.connection)
          })
    
      }
    })
    // console.log('one and two', this.props.trainingModOne)
     // });
     const rootRef = firebase.database().ref("Order").child("Test")
        rootRef.on("value", snap => {
            this.setState({
            task1: snap.val().one})});
    console.log('this.props.uuid', this.state.task1.value)
  }

  getProgressStatus(status) {
    if (status == "Old Data" || status == "Data Not Uploaded") {
      return "danger"
    }
    else {
      return "success"
    }
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
    
    
  
    return (
      <>
        <div>
    <Card style={{  }} body outline color="success" className="mx-auto my-2">
     
        <div >  
        <Row >
        <Col xs lg="2"><u><h5>Part</h5></u></Col>

        <Col xs lg="5"><u><h5>Check Point</h5></u></Col>
        <Col xs lg="2"><u><h5>Standard</h5></u></Col>
        <Col ><u><h5><Clock date={moment().format()} format={'YYYY'} ticking={true}  /></h5></u></Col>
        
                    </Row>

                    </div>
                    <br></br>

                    <Row>   <Col xs lg="4"><h5 style={{ color: 'darkblue' }}>MACHINE 1</h5></Col>

</Row>                            <br></br>

                    <div>
                  
                    <Row >
                    <Col xs lg="2">1.1 RESERVOIR</Col>

                    <Col xs lg="5">CLEAN RESERVOIR</Col>
                    <Col xs lg="2">CLEAN</Col>
                    

                    <Col><ProgressBar label={task9.status} variant="success" style={{width: "40px"}} now={task9 } /></Col>
\                    
                    </Row>
                 
                </div>

                <div >
                  
                  <Row>                      <Col xs lg="2">1.2 HYD OIL SS46 </Col>

                      <Col xs lg="5">REPLACE ON CONDITION BASE  </Col>
                      <Col xs lg="2">REPLACE</Col>
                      
                      <Col><ProgressBar label={task9.status} variant="success" style={{width: "40px"}} now={task9 } /></Col>
                                        </Row>
                </div>

                <div >
                  
                    <Row>                      <Col xs lg="2">1.3 RETURN LINE FILTER</Col>

                      <Col xs lg="5">REPLACE ON CONDITION BASE </Col>
                      <Col xs lg="2">REPLACE</Col>
                      
                      <Col><ProgressBar label={task9.status} variant="success" style={{width: "40px"}} now={task9 } /></Col>
                                        </Row>
                </div>


                <div>
                    <Row>                      <Col xs lg="2">1.4 SEALS</Col>

                      <Col xs lg="5">Visual inspection of the interior and exterior surface of the bellow seals  </Col>
                      <Col xs lg="2">REPLACE</Col>
                      
                      <Col><ProgressBar label={task9.status} variant="success" style={{width: "40px"}} now={task9 } /></Col>
                                        </Row>
                 
                </div>
              

                
               
                </Card>
  
            

          

        </div>
      </>
    )
  }
}

export default YearComponent;
