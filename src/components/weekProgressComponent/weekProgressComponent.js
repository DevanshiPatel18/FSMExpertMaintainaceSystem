import React, { Component } from 'react';
import firebase from "../../firebase";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Row from 'react-bootstrap/Row';
import {Button} from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import { Card , CardImg, CardBody, CardTitle} from "react-bootstrap"
import moment from "moment";
import app from '../../firebase';
import Clock from 'react-live-clock';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Home from '@material-ui/icons/Home'; 
import { blue } from "@material-ui/core/colors";


class WeekProgressComponent extends Component {
  state = {
    nodeNames : [
      {
        id :'1-1-1',
        name : 'Gantry Operator Panel',
        checkFor : 'Cleanliness',
        requiredStd : 'Free From Dust and Oil',
        
    
        
      },{
        id :'1-1-2',
        name : 'Machine Operator Panel',
        checkFor : 'Cleanliness',
        requiredStd : 'Free From Dust and Oil',
        
    
      },{
        id :'1-2',
        name : 'Spinning Unit',
        checkFor : 'Cleanliness ',
        requiredStd : 'Free From Dust and Burr',
        
    
      },{
        id :'1-3',
        name : 'Gantry Loader Unit',
        checkFor : 'Cleanliness',
        requiredStd : 'Free from Dust and Burr',
        
    
      },{
        id :'1-4-1',
        name : 'DFCE I/P',
        checkFor : 'Cleanliness',
        requiredStd : 'Free from Dust and Burr',
        
    
      },{
        id :'1-4-2',
        name : 'DFCE O/P',
        checkFor : 'Cleanliness',
        requiredStd : 'Free From Dust and Burr',
        
    
      },{
        id :'1-5-1',
        name : 'Robot Gripper Finger',
        checkFor : 'Tightning',
        requiredStd : 'No loose nuts and bolts during running',
        
    
      },{
        id :'1-5-2',
        name : 'Stacker Unit',
        checkFor : 'Tightning',
        requiredStd : 'No loose nuts and bolts during running',
        
    
      },{
        id :'1-5-3',
        name : 'Robot Base',
        checkFor : 'Tightning',
        requiredStd : 'No loose nuts and bolts during running',
        
      },{
        id :'1-6',
        name : 'Span Check Unit',
        checkFor : 'Cleanliness',
        requiredStd : 'No Dust and Burr',
        
    
      },{
        id :'2-1',
        name : 'Ruturn Cutting Oil',
        checkFor : 'Abnoraml noise, tempreture and vibration',
        requiredStd : 'No abnormal noise, tempreture and vibration',
        
    
      },{
        id :'2-2',
        name : 'Lubrication Tank',
        checkFor : 'Oil level',
        requiredStd : 'Within range',
        
    
      },{
        id :'2-3',
        name : 'Grease Tank',
        checkFor : 'Grease level',
        requiredStd : 'Within range',
        
    
      },{
        id :'2-4-1',
        name : 'Pneumatic System PG1',
        checkFor : 'Air Pressure',
        requiredStd : '4 - 6 Bar',
        
    
      },{
        id :'2-4-2',
        name : 'Pneumatic System PG2',
        checkFor : 'Air Pressure',
        requiredStd : '4 - 6 Bar',
        
      },{
        id :'2-4-3',
        name : 'Pneumatic System PG3',
        checkFor : 'Air Pressure',
        requiredStd : '4 - 6 Bar',
        
      },{
        id :'2-4-4',
        name : 'Pneumatic System PG4',
        checkFor : 'Air Pressure',
        requiredStd : '4 - 6 Bar',
        
      },{
        id :'2-5',
        name : 'Machine Control Panel A/C',
        checkFor : 'Tempreture',
        requiredStd : '22 to 35',
        
    
      },{
        id :'2-6',
        name : 'Gantry Panel A/C',
        checkFor : 'Tempreture',
        requiredStd : '22 to 35',
        
      },{
        id :'2-7',
        name : 'Main Cutting Oil',
        checkFor : 'Abnormal Noise, Tempreture and Vibration',
        requiredStd : 'No Abnormal Noise, Tempreture, and Vibration',
        
    
      },{
        id :'3-1',
        name : 'Chiller Unit Cutting Oil',
        checkFor : 'Tempreture',
        requiredStd : '25 to 35',
        
    
      },{
        id :'3-2',
        name : 'Chiller Unit Spindle Oil',
        checkFor : 'Tempreture',
        requiredStd : '25 to 35',
        
    
      },{
        id :'3-3',
        name : 'Chiller Unit - Oil Tank',
        checkFor : 'Oil Level',
        requiredStd : 'Within Range',
        
    
      },{
        id :'4-1',
        name : 'Oil Lever Indicator',
        checkFor : 'Oil Level',
        requiredStd : 'Within range',
        
    
      },{
        id :'4-2',
        name : 'Centrifugal Unit',
        checkFor : 'Abnormal noise, excessive tempreture and vibration',
        requiredStd : 'No abnoraml noise, excessive tempreture and vibration',
        
    
      },{
        id :'4-3',
        name : 'Elabaron',
        checkFor : 'Functioning',
        requiredStd : 'Green signal should be on',
        
    
      },
    ],
    day1: [],
    day2: [],
    day3: [],
    day4: [],
    day5: [],
    day6: [],
    day7: [],
    data: '',
    userId:""
  }

  
  componentWillMount(){
      var day1Data = [];
      var day2Data = [];
      var day3Data = [];
      var day4Data = [];
      var day5Data = [];
      var day6Data = [];
      var day7Data = [];

      app.database().ref().child('m1').child('jh').on('value', snapshot => {

        //for day 1
        //console.log(snapshot.val())
          //modifiedArray[modifiedArray.indexOf(node.id)] = {...modifiedArray, day1Data : snapshot.child(moment().day(1).format('YYYY-MM-DD')).child('1-1-1').val().status === 'Good' ?  100 : 0}
        //setting for day1
          snapshot.child(moment().day(0).format('YYYY-MM-DD')).forEach((val) => {
            day1Data.push(val.child('status').val() === 'Good' ? 100 : 0);
          })
          console.log(day1Data)

          snapshot.child(moment().day(1).format('YYYY-MM-DD')).forEach((val) => {
            day2Data.push(val.child('status').val() === 'Good' ? 100 : 0);
          })
          console.log(day2Data)

          snapshot.child(moment().day(2).format('YYYY-MM-DD')).forEach((val) => {
            day3Data.push(val.child('status').val() === 'Good' ? 100 : 0);
          })
          console.log(day3Data)

          snapshot.child(moment().day(3).format('YYYY-MM-DD')).forEach((val) => {
            day4Data.push(val.child('status').val() === 'Good' ? 100 : 0);
          })
          console.log(day4Data)

          snapshot.child(moment().day(4).format('YYYY-MM-DD')).forEach((val) => {
            day5Data.push(val.child('status').val() === 'Good' ? 100 : 0);
          })
          console.log(day5Data)

          snapshot.child(moment().day(5).format('YYYY-MM-DD')).forEach((val) => {
            day6Data.push(val.child('status').val() === 'Good' ? 100 : 0);
          })
          console.log(day7Data)

          snapshot.child(moment().day(6).format('YYYY-MM-DD')).forEach((val) => {
            day7Data.push(val.child('status').val() === 'Good' ? 100 : 0);
          })
          console.log(day7Data)


          this.setState({
            day1 : day1Data,
            day2 : day2Data,
            day3: day3Data,
            day4 : day4Data, 
            day5 : day5Data,
            day6: day6Data,
            day7 : day7Data
          }
          )

    })

  }


  render() {
    console.log(this.state)
    const {nodeNames, day1, day2, day3, day4, day5, day6, day7} = this.state;
    //console.log(day1)
    //console.log(day2)
    //console.log(day3)
    //console.log(day4)
    //console.log(day5)
    //console.log(day6)
   // console.log(day7)

    var today = new Date();
    var startDay = 1; 

    //console.log('start', Date(today.getFullYear(), today.getMonth(), today.getDate()+7))
    //console.log('end', moment().endOf('isoweek').format("DD/MM/YYYY h:mm A"))
    //console.log('end2', moment().day(0).format("DD/MM/YYYY"))
    //console.log('date: ', moment().day(7).format('YYYY-MM-DD'));
   
    
  

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


     <center><h2>Jishu-Hozen Weekly Checklist</h2></center> 



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
    <Card style={{ width: '90rem' }} body outline color="success" className="mx-auto my-2">
     
        <div >  
        <Row >
        <Col xs lg="3"><u><h5>Item</h5></u></Col>
        <Col xs lg="1"><u><h5>Check For</h5></u></Col>
        <Col xs lg="2"><u><h5>Required Standard</h5></u></Col>
        <Col  ><u><h7 >Sunday</h7></u>  
        </Col>
        <Col ><u><h7>Monday</h7></u></Col>
        <Col ><u><h7>Tuesday</h7></u></Col>
        <Col ><u><h7>Wednesday</h7></u></Col>
        <Col ><u><h7>Thursday</h7></u></Col>
        <Col ><u><h7>Friday</h7></u></Col>
        <Col ><u><h7>Saturday</h7></u></Col>
                    </Row>

                    <Row >
        <Col xs lg="3"></Col>
        <Col xs lg="1"></Col>
        <Col xs lg="2"></Col>
        <Col  ><u><h7 >{moment().day(0).format("DD/MM")}</h7></u>  
        </Col>
        <Col ><u><h7>{moment().day(1).format("DD/MM")}</h7></u></Col>
        <Col ><u><h7>{moment().day(2).format("DD/MM")}</h7></u></Col>
        <Col ><u><h7>{moment().day(3).format("DD/MM")}</h7></u></Col>
        <Col ><u><h7>{moment().day(4).format("DD/MM")}</h7></u></Col>
        <Col ><u><h7>{moment().day(5).format("DD/MM")}</h7></u></Col>
        <Col ><u><h7>{moment().day(6).format("DD/MM")}</h7></u></Col>
                    </Row>

                    </div>
                    <br></br>
                    <Row>   <Col xs lg="4"><h5 style={{ color: 'darkblue' }}>MACHINE 1</h5></Col></Row>
                    <br></br>


                    <div>
                    {nodeNames.map((node, index) => (
                      <Row >
                      <Col xs lg="3">{node.id}: {node.name}</Col>
                      <Col xs lg="1">{node.checkFor}</Col>
                      <Col xs lg="2">{node.requiredStd}</Col>
                      {console.log(day1[index] + " " + day2[index] + " " + day3[index] + " " + day4[index] + " " + day5[index] + ' ' + day6[index] + " " + day7[index])}
                      <Col><ProgressBar value= 'determinate' variant="success" style={{width: "40px"}} now={day1[index]} /></Col>
                      <Col><ProgressBar  value= 'determinate' variant="success" style={{width: "40px"}} now={day2[index]} /></Col>
                      <Col><ProgressBar  value= 'determinate' variant="success" style={{width: "40px"}} now={day3[index]} /></Col>
                      <Col><ProgressBar  value= 'determinate' variant="success" style={{width: "40px"}} now={day4[index]} /></Col>
                      <Col><ProgressBar  value= 'determinate' variant="success" style={{width: "40px"}} now={day5[index]} /></Col>
                      <Col><ProgressBar  value= 'determinate' variant="success" style={{width: "40px"}} now={day6[index]} /></Col>
                      <Col><ProgressBar  value= 'determinate' variant="success" style={{width: "40px"}} now={day7[index]} /></Col>
                      </Row>
                    ))}
                    
                 
                </div>


                </Card>
  
            

          

        </div>
      </>
    )
  }
}



export default WeekProgressComponent;
