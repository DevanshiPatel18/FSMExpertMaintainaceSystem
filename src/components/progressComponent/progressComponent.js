import React, { Component } from 'react';
import firebase from "../../firebase";
import * as _ from "lodash";

import ProgressBar from 'react-bootstrap/ProgressBar';
import Row from 'react-bootstrap/Row';
import {Button} from "react-bootstrap"
import Col from 'react-bootstrap/Col';
import { Card , CardImg, CardBody, CardTitle} from "react-bootstrap"

import moment from "moment";

import Clock from 'react-live-clock';
import Home from '@material-ui/icons/Home'; 
import { blue } from "@material-ui/core/colors";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
class ProgressComponent extends Component {
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
    task: [],
    data: [],
    timeT:[],
    empId:"",
    userId:""
  }

  componentWillMount() {
    const rootRef = firebase.database().ref("m1").child("jh")
    let count = 0;

   /* rootRef.on('child_added', (snap) => {
  count++;
  console.log('added:', snap.key);
});*/


var returnArr = [];
var itemKeyA=[];
  
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = String(today.getFullYear());

var dateT = String(yyyy + '-' + mm + '-' + dd) ;
console.log('added:', dateT);

    rootRef.on("value", snap => {


      snap.forEach(function(childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;
        itemKeyA.push(item.key);
        returnArr.push(item);

    });
    var  i =0; var childData ; var Status=[]; var task; var timT=[];
    var e="";
    var list =[];
     task = [];
    console.log(itemKeyA);
    console.log(returnArr.length);
    for(var i in itemKeyA)
    {         
        if(itemKeyA[i] === dateT){ 
          console.log("found", returnArr[i]);
                
          console.log(snap.val());

          rootRef.child(dateT).on('value', function(snapshot) {
            console.log(snapshot.val());

        var itemKeyA1;    
        snapshot.forEach(function(childSnapshot) {

          /*
        var item1 = childSnapshot.val();
        item1.key = childSnapshot.key;
        itemKeyA1.push(item1.key);*/
        Status.push(childSnapshot.val().status);
        timT.push(childSnapshot.val().time);
       e = childSnapshot.val().employee;
        if(childSnapshot.val().status === "Good"){
          task.push(100);
        }
        else{
          task.push(0);
        }


          });
            console.log("found12", timT);

 


           

        });




        this.setState({
          task1: task[0],
          task2: task[1],
          task3: task[2],
          task4: task[3],
          task5: task[4],
          task6: task[5],
          task7: task[6],
          task8: task[7],
          task9: task[8],
          task10: task[9],
          task11: task[10],
          task12: task[11],
          task13: task[12],
          task14: task[13],
          task15: task[14],
          task16: task[15],
          task17: task[16],
          task18: task[17],
          task19: task[18],
          task20: task[19],
          task21: task[20],
          task22: task[21],
          task23: task[22],
          task24: task[23],
          task25: task[24],
          task26: task[25],
          timeT: timT,
          empId: e,
          });












        }
    }
    










      if (snap.exists()) {
        console.log(snap.val());
        const newPost = snap.val();

        console.log(snap.numChildren());











      } else {
        console.log("No data available");
      }


        
    });

  }

/*
dbRef.child("jh").get().then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});

*/


/*    var userid = ''
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User logged in already or has just logged in.
        userid = user.uid
        this.setState({
          userId:userid
        })
        console.log('propsss',this.state.userId);
        const rootRef = firebase.database().ref("m1").child(this.state.userId)
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
            */
           
  
/*
  getProgressStatus(status) {
    if (status == "Old Data" || status == "Data Not Uploaded") {
      return "danger"
    }
    else {
      return "success"
    }
  }*/

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
    const { task22 } = this.state;
    const { task23 } = this.state;
    const { task24 } = this.state;
    const { task25 } = this.state;
    const { task26 } = this.state;
    const { timeT } = this.state;
    const { empId } = this.state;
    
    
    
  
    return (
      <>
        <div>   
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
        <br />


     <center><h2>Jishu-Hozen Daily Checklist</h2></center> 



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
<br></br>
<div>
        <Row style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "left"
        }}> <h6>
          Employee Id: {empId}
        </h6>
      
     
          
</Row>  


</div>
</div><br />
<br></br >
    <Card style={{ width: '85rem' }} body outline color="success" className="mx-auto my-2">
     
        <div >  
        <Row >
        <Col xs lg="3"><u><h5>Item</h5></u></Col>
        <Col xs lg="2"><u><h5>Check For</h5></u></Col>
        <Col xs lg="3"><u><h5>Required Standard</h5></u></Col>
        <Col ><u><h5>Progress</h5></u></Col>
        <Col ><u><h5>Time Stamp</h5></u></Col>
                    </Row>

                    </div>
                    <br></br>

                    <Row>   <Col xs lg="4"><h5 style={{ color: 'darkblue' }}>MACHINE 1</h5></Col></Row>


                    <br></br>

                    

                    <div>
                  
                    <Row >
                    <Col xs lg="3">1.1.1 Gantry Operator Panel</Col>
                    <Col xs lg="2">Cleanliness</Col>
                    <Col xs lg="3">Free From Dust and Oil</Col>

                      <Col><ProgressBar label={task1.status} variant="success" style={{width: "70px"}} now={task1} /></Col>

                      
                      <Col>{timeT[0]}</Col>
                    </Row>
                 
                </div>


                <div>
                  
                  <Row >
                  <Col xs lg="3">1.1.2 Machine Operator Panel</Col>
                  <Col xs lg="2">Cleanliness</Col>
                  <Col xs lg="3">Free From Dust and Oil</Col>

                    <Col><ProgressBar label={task1.status} variant="success" style={{width: "70px"}} now={task2} /></Col>

                    
                      <Col>{timeT[1]}</Col>
                  </Row>
               
              </div>

                <div >
                  
                  <Row>
                      <Col xs lg="3">1.2 Spinning Unit</Col>
                      <Col xs lg="2">Cleanliness</Col>
                    <Col xs lg="3">Free From Dust and Oil</Col>
                      <Col><ProgressBar label={task2.status} variant="success" style={{width: "70px"}} now={task3} /></Col>
                   
                      
                      <Col>{timeT[2]}</Col>
                    </Row>
                </div>

                <div >
                  
                    <Row>
                      <Col xs lg="3">1.3 Gantry Loader Unit</Col>
                      <Col xs lg="2">Cleanliness</Col>
                    <Col xs lg="3">Free From Dust and Burr</Col>
                      <Col><ProgressBar label={task3.status} variant="success" style={{width: "70px"}} now={task4 } /></Col>
                      
                      <Col>{timeT[3]}</Col>
                       </Row>
                </div>


                <div>
                    <Row>
                      <Col xs lg="3">1.4.1 DFCE I/P</Col>
                      <Col xs lg="2">Cleanliness</Col>
                    <Col xs lg="3">Free From Dust and Burr</Col>
                      <Col><ProgressBar label={task4.status} variant="success" style={{width: "70px"}} now={task5 } /></Col>
                   
                      
                      <Col>{timeT[4]}</Col>
                   
                    </Row>
                 
                </div>

                <div>
                    <Row>
                      <Col xs lg="3">1.4.2 DFCE O/P</Col>
                      <Col xs lg="2">Cleanliness</Col>
                    <Col xs lg="3">Free From Dust and Burr</Col>
                      <Col><ProgressBar label={task4.status} variant="success" style={{width: "70px"}} now={task6} /></Col>
                   
                      
                      <Col>{timeT[5]}</Col>
                    </Row>
                 
                </div>

                <div>
                 
                    <Row>
                      <Col xs lg="3">1.5.1 Robot Gripper finger</Col>
                      <Col xs lg="2">Tightning </Col>
                    <Col xs lg="3">No loose nuts and bolts  during running </Col>
                      <Col><ProgressBar label={task5.status} variant="success" style={{width: "70px"}} now={task7} /></Col>
                   
                      
                      <Col>{timeT[6]}</Col>
                    </Row>
                 
                </div>



                <div>
                 
                    <Row>
                      <Col xs lg="3">1.5.2 Stacker Unit</Col>
                      <Col xs lg="2">Tightning </Col>
                    <Col xs lg="3">No loose nuts and bolts  during running </Col>
                      <Col><ProgressBar label={task5.status} variant="success" style={{width: "70px"}} now={task8}/></Col>
                      
                      <Col>{timeT[7]}</Col>
                  
                    </Row>
                 
                </div>
                
                <div>
                 
                    <Row>
                      <Col xs lg="3">1.5.3 Robot base</Col>
                      <Col xs lg="2">Tightning </Col>
                    <Col xs lg="3">No loose nuts and bolts  during running </Col>
                      <Col><ProgressBar label={task5.status} variant="success" style={{width: "70px"}} now={task9} /></Col>
                      
                      <Col>{timeT[8]}</Col>
                    </Row>
                 
                </div>

                <div>
                 
                    <Row>
                      <Col xs lg="3">1.6 Span Check Unit</Col>
                      <Col xs lg="2">Cleanliness</Col>
                    <Col xs lg="3"> No dust and burr</Col>
                      <Col><ProgressBar label={task6.status} variant="success" style={{width: "70px"}} now={task10} /></Col>
                      
                      <Col>{timeT[9]}</Col>
                    </Row>
                 
                </div>                    <br></br>

                <div>
                 
                    <Row>
                      <Col xs lg="3">2.1  Return Cutting Oil</Col>
                      <Col xs lg="2">Abnormal noise, temperature and vibration</Col>
                    <Col xs lg="3"> No abnormal noise, temperature and vibration</Col>
                      <Col><ProgressBar label={task7.status} variant="success" style={{width: "70px"}} now={task11} /></Col>
                      
                      <Col>{timeT[10]}</Col>
                    </Row>
                 
                </div>
                <div>
                 
                    <Row>
                      <Col xs lg="3">2.2 Lubrication tank</Col>
                      <Col xs lg="2">Oil level</Col>
                    <Col xs lg="3"> Within range</Col>
                      <Col><ProgressBar label={task8.status} variant="success" style={{width: "70px"}} now={task12} /></Col>
                      
                      <Col>{timeT[11]}</Col>
                    </Row>
                 
                </div>
                <div>
                 
                    <Row>
                      <Col xs lg="3">2.3 Grease tank</Col>
                      <Col xs lg="2">Grease level</Col>
                    <Col xs lg="3">Within range</Col>
                      <Col><ProgressBar label={task9.status} variant="success" style={{width: "70px"}} now={task13} /></Col>
                      
                      <Col>{timeT[12]}</Col>
                    </Row>
                 
                </div>
                <div>
                 
                    <Row>
                      <Col xs lg="3">2.4.1 Pneumatic System PG1</Col>
                      <Col xs lg="2">Air pressure</Col>
                    <Col xs lg="3">4 - 6 Bar</Col>
                      <Col><ProgressBar label={task10.status} variant="success" style={{width: "70px"}} now={task14} /></Col>
                    
                      
                      <Col>{timeT[13]}</Col>
                    </Row>
                 
                </div>

                <div>
                 
                 <Row>
                   <Col xs lg="3">2.4.2 Pneumatic System PG2</Col>
                   <Col xs lg="2">Air pressure</Col>
                 <Col xs lg="3">4 - 6 Bar</Col>
                   <Col><ProgressBar label={task10.status} variant="success" style={{width: "70px"}} now={task15} /></Col>
                   
                      <Col>{timeT[14]}</Col>
                 </Row>
              
             </div>

             <div>
                 
                 <Row>
                   <Col xs lg="3">2.4.3 Pneumatic System PG3</Col>
                   <Col xs lg="2">Air pressure</Col>
                 <Col xs lg="3">4 - 6 Bar</Col>
                   <Col><ProgressBar label={task10.status} variant="success" style={{width: "70px"}} now={task16} /></Col>
                   
                      <Col>{timeT[15]}</Col> </Row>
              
             </div>
             <div>
                 
                 <Row>
                   <Col xs lg="3">2.4.4 Pneumatic System PG4</Col>
                   <Col xs lg="2">Air pressure</Col>
                 <Col xs lg="3">4 - 6 Bar</Col>
                   <Col><ProgressBar label={task10.status} variant="success" style={{width: "70px"}} now={task17} /></Col>
                   
                      <Col>{timeT[16]}</Col>   </Row>
              
             </div>

              


                <div>
                 
                    <Row>
                      <Col xs lg="3">2.5 Machine Control panel A/C:</Col>
                      <Col xs lg="2">Temperature</Col>
                    <Col xs lg="3">22° to 35°</Col>
                      <Col><ProgressBar label={task12.status} variant="success" style={{width: "70px"}} now={task18} /></Col>
                      
                      <Col>{timeT[17]}</Col></Row>
                 
                </div>
                <div>
                 
                    <Row>
                      <Col xs lg="3">2.6 Gantry panel A/C:</Col>
                      <Col xs lg="2">Temperature</Col>
                    <Col xs lg="3">22° to 35°</Col>
                      <Col><ProgressBar label={task13.status} variant="success" style={{width: "70px"}} now={task19} /></Col>
                      
                      <Col>{timeT[18]}</Col> </Row>
                 
                </div>
                <div>
                 
                    <Row>
                      <Col xs lg="3">2.7 Main Cutting Oil</Col>
                      <Col xs lg="2">Abnormal noise, temperature and vibration</Col>
                    <Col xs lg="3">No Abnormal Noise, Temperature and Vibration</Col>
                      <Col><ProgressBar label={task14.status} variant="success" style={{width: "70px"}} now={task20} /></Col>
                      
                      <Col>{timeT[19]}</Col> </Row>
                 
                </div>                    <br></br>

                <div>
                 
                    <Row>

                      <Col xs lg="3">3.1 Chiller Unit Cutting Oil</Col>
                      <Col xs lg="2">Temperature</Col>
                    <Col xs lg="3">25° to 35°</Col>
                      <Col><ProgressBar label={task15.status} variant="success" style={{width: "70px"}} now={task21} /></Col>
                      
                      <Col>{timeT[20]}</Col> </Row>
                 
                </div>
                <div>
                 
                    <Row>
                      <Col xs lg="3">3.2 Chiller Unit Spindle Oil</Col>
                      <Col xs lg="2">Temperature</Col>
                    <Col xs lg="3">25° to 35°</Col>
                      <Col><ProgressBar label={task16.status} variant="success" style={{width: "70px"}} now={task22} /></Col>
                      
                      <Col>{timeT[21]}</Col></Row>
                 
                </div>
                <div>
                 
                    <Row>
                      <Col xs lg="3">3.3 Chiller Unit - Oil Tank</Col>
                      <Col xs lg="2">Oil level</Col>
                    <Col xs lg="3"> Within range</Col>
                      <Col><ProgressBar label={task17.status} variant="success" style={{width: "70px"}} now={task23} /></Col>
                      
                      <Col>{timeT[22]}</Col>   </Row>
                 
                </div>                    <br></br>

                <div>
                 
                    <Row>
                      <Col xs lg="3">4.1 Oil level Indicator</Col>
                      <Col xs lg="2">Oil level</Col>
                    <Col xs lg="3"> Within range</Col>
                      <Col><ProgressBar label={task18.status} variant="success" style={{width: "70px"}} now={task24} /></Col>
                      
                      <Col>{timeT[23]}</Col>  </Row>
                 
                </div>
                <div>
                 
                    <Row>
                      <Col xs lg="3">4.2 Centrifugal Unit</Col>
                      <Col xs lg="2"> Abnormal noise, excessive temperature and vibration</Col>
                    <Col xs lg="3">No abnormal noise, excessive temperature and vibration</Col>
                      <Col><ProgressBar label={task19.status} variant="success" style={{width: "70px"}} now={task25 } /></Col>
                      <Col>{timeT[24]}</Col> </Row>
                 
                </div>
                <div>
                 
                    <Row>
                      <Col xs lg="3">4.3 Elbaron</Col>
                      <Col xs lg="2">Functioning</Col>
                    <Col xs lg="3">Green signal should be on</Col>
                      <Col><ProgressBar label={task20.status} variant="success" style={{width: "70px"}} now={task26 } /></Col>
                      <Col>{timeT[25]}</Col>  </Row>
                 
                </div>
             
                </Card>
  
            

          

        </div>
      </>
    )
  }
}

export default ProgressComponent;
