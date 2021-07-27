import React, { Component } from 'react';
import firebase from "../../firebase";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Row from 'react-bootstrap/Row';
import {Button} from "react-bootstrap"
import Col from 'react-bootstrap/Col';
import { Card , CardImg, CardBody, CardTitle} from "react-bootstrap"
import app from '../../firebase';

import moment from "moment";

import Clock from 'react-live-clock';
import Home from '@material-ui/icons/Home'; 
import { blue } from "@material-ui/core/colors";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { Link, useHistory } from "react-router-dom"

class Jan extends Component {
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
    day8: [],
    day9: [],
    day10: [],
    day11: [],
    day12: [],
    day13: [],
    day14: [],
    day15: [],
    day16: [],
    day17: [],
    day18: [],
    day19: [],
    day20: [],
    day21: [],
    day22: [],
    day23: [],
    day24: [],
    day25: [],
    day26: [],
    day27: [],
    day28: [],
    day29: [],
    day30: [],

    
    
    testvalue: '',
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
    var day8Data = [];
    var day9Data = [];
    var day10Data = [];
    var day11Data = [];
    var day12Data = [];
    var day13Data = [];
    var day14Data = [];
    var day15Data = [];
    var day16Data = [];
    var day17Data = [];
    var day18Data = [];
    var day19Data = [];
    var day20Data = [];
    var day21Data = [];
    var day22Data = [];
    var day23Data = [];
    var day24Data = [];
    var day25Data = [];
    var day26Data = [];
    var day27Data = [];
    var day28Data = [];
    var day29Data = [];
    var day30Data = [];



    app.database().ref().child('m1').child('jh').on('value', snapshot => {

      //for day 1
      //console.log(snapshot.val())
        //modifiedArray[modifiedArray.indexOf(node.id)] = {...modifiedArray, day1Data : snapshot.child(moment().day(1).format('YYYY-MM-DD')).child('1-1-1').val().status === 'Good' ?  100 : 0}
      //setting for day1
        snapshot.child('2021-06-01').forEach((val) => {
          day1Data.push(val.child('status').val() === 'Good' ? 100 : 0);
        })
        console.log(day1Data)

     
        snapshot.child('2021-06-02').forEach((val) => {
          day2Data.push(val.child('status').val() === 'Good' ? 100 : 0);
        })
        console.log(day2Data)
   

        snapshot.child('2021-06-03').forEach((val) => {
          day3Data.push(val.child('status').val() === 'Good' ? 100 : 0);
        })
        console.log(day3Data)


        snapshot.child('2021-06-04').forEach((val) => {
          day4Data.push(val.child('status').val() === 'Good' ? 100 : 0);
        })
        console.log(day4Data)

        snapshot.child('2021-06-05').forEach((val) => {
          day5Data.push(val.child('status').val() === 'Good' ? 100 : 0);
        })
        console.log(day5Data)

        snapshot.child('2021-06-06').forEach((val) => {
          day6Data.push(val.child('status').val() === 'Good' ? 100 : 0);
        })
        console.log(day6Data)

        snapshot.child('2021-06-07').forEach((val) => {
          day7Data.push(val.child('status').val() === 'Good' ? 100 : 0);
        })
        console.log(day7Data)

        snapshot.child('2021-06-08').forEach((val) => {
          day8Data.push(val.child('status').val() === 'Good' ? 100 : 0);
        })
        console.log(day8Data)

        snapshot.child('2021-06-09').forEach((val) => {
          day9Data.push(val.child('status').val() === 'Good' ? 100 : 0);
        })
        console.log(day9Data)

        snapshot.child('2021-06-10').forEach((val) => {
          day10Data.push(val.child('status').val() === 'Good' ? 100 : 0);
        })
        console.log(day10Data)

        snapshot.child('2021-06-11').forEach((val) => {
          day11Data.push(val.child('status').val() === 'Good' ? 100 : 0);
        })
        console.log(day11Data)

        snapshot.child('2021-06-12').forEach((val) => {
          day12Data.push(val.child('status').val() === 'Good' ? 100 : 0);
        })
        console.log(day12Data)

        snapshot.child('2021-06-13').forEach((val) => {
          day13Data.push(val.child('status').val() === 'Good' ? 100 : 0);
        })
        console.log(day13Data)

        snapshot.child('2021-06-14').forEach((val) => {
          day14Data.push(val.child('status').val() === 'Good' ? 100 : 0);
        })
        console.log(day14Data)

        snapshot.child('2021-06-15').forEach((val) => {
          day15Data.push(val.child('status').val() === 'Good' ? 100 : 0);
        })
        console.log(day15Data)

        snapshot.child('2021-06-16').forEach((val) => {
          day16Data.push(val.child('status').val() === 'Good' ? 100 : 0);
        })
        console.log(day16Data)

        snapshot.child('2021-06-17').forEach((val) => {
          day17Data.push(val.child('status').val() === 'Good' ? 100 : 0);
        })
        console.log(day17Data)

        snapshot.child('2021-06-18').forEach((val) => {
          day18Data.push(val.child('status').val() === 'Good' ? 100 : 0);
        })
        console.log(day18Data)

        snapshot.child('2021-06-19').forEach((val) => {
          day19Data.push(val.child('status').val() === 'Good' ? 100 : 0);
        })
        console.log(day19Data)

        snapshot.child('2021-06-20').forEach((val) => {
          day20Data.push(val.child('status').val() === 'Good' ? 100 : 0);
        })
        console.log(day20Data)

        snapshot.child('2021-06-21').forEach((val) => {
          day21Data.push(val.child('status').val() === 'Good' ? 100 : 0);
        })
        console.log(day21Data)

        snapshot.child('2021-06-22').forEach((val) => {
          day22Data.push(val.child('status').val() === 'Good' ? 100 : 0);
        })
        console.log(day22Data)

        snapshot.child('2021-06-23').forEach((val) => {
          day23Data.push(val.child('status').val() === 'Good' ? 100 : 0);
        })
        console.log(day23Data)

        snapshot.child('2021-06-24').forEach((val) => {
          day24Data.push(val.child('status').val() === 'Good' ? 100 : 0);
        })
        console.log(day24Data)

        snapshot.child('2021-06-25').forEach((val) => {
          day25Data.push(val.child('status').val() === 'Good' ? 100 : 0);
        })
        console.log(day25Data)

        snapshot.child('2021-06-26').forEach((val) => {
          day26Data.push(val.child('status').val() === 'Good' ? 100 : 0);
        })
        console.log(day26Data)

        snapshot.child('2021-06-27').forEach((val) => {
          day27Data.push(val.child('status').val() === 'Good' ? 100 : 0);
        })
        console.log(day27Data)

        snapshot.child('2021-06-28').forEach((val) => {
          day28Data.push(val.child('status').val() === 'Good' ? 100 : 0);
        })
        console.log(day28Data)

        snapshot.child('2021-06-29').forEach((val) => {
          day29Data.push(val.child('status').val() === 'Good' ? 100 : 0);
        })
        console.log(day29Data)

        snapshot.child('2021-06-30').forEach((val) => {
          day30Data.push(val.child('status').val() === 'Good' ? 100 : 0);
        })
        console.log(day30Data)

        this.setState({
          day1 : day1Data,
          day2 : day2Data,
          day3: day3Data,
          day4 : day4Data, 
          day5 : day5Data,
          day6: day6Data,
          day7 : day7Data,
          day8 : day8Data,
          day9 : day9Data,
          day10 : day10Data,
          day11 : day11Data,
          day12 : day12Data,
          day13 : day13Data,
          day14 : day14Data,
          day15 : day15Data,
          day16 : day16Data,
          day17 : day17Data,
          day18 : day18Data,
          day19 : day19Data,
          day20 : day20Data,
          day21 : day21Data,
          day22 : day22Data,
          day23 : day23Data,
          day24 : day24Data,
          day25 : day25Data,
          day26 : day26Data,
          day27 : day27Data,
          day28 : day28Data,
          day29 : day29Data,
          day30 : day30Data,
        
      
        }
        )

  })

  console.log(this.state)
}

  render() {
    const { nodeNames} = this.state;
    const { day1 } = this.state;
    const { day2 } = this.state;
    const { day3 } = this.state;
    const { day4 } = this.state;
    const { day5 } = this.state;
    const { day6 } = this.state;
    const { day7 } = this.state;
    const { day8 } = this.state;
    const { day9 } = this.state;
    const { day10 } = this.state;
    const { day11 } = this.state;
    const { day12 } = this.state;
    const { day13 } = this.state;
    const { day14 } = this.state;
    const { day15 } = this.state;
    const { day16 } = this.state;
    const { day17 } = this.state;
    const { day18 } = this.state;
    const { day19 } = this.state;
    const { day20 } = this.state;
    const { day21 } = this.state;
    const { day22 } = this.state;
    const { day23 } = this.state;
    const { day24 } = this.state;
    const { day25 } = this.state;
    const { day26 } = this.state;
    const { day27 } = this.state;
    const { day28 } = this.state;
    const { day29 } = this.state;
    const { day30 } = this.state;
   

    console.log(day23)
    const { testvalue } = this.props
  
    
    console.log('taskOne', testvalue)
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


     <center><h2>Jishu-Hozen Checklist for June</h2></center> 



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
    <Card style={{ width: '126rem' }} body outline color="success" className="mx-auto my-2">
     
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
                    <br></br>                    <Row>   <Col xs lg="4"><h5 style={{ color: 'darkblue' }}>MACHINE 1</h5></Col></Row>

                    <br></br>
                    <div>
                  

                  {nodeNames.map((node,index) => (
                    <Row >

                      
                    <Col xs lg="1">{node.id}: {node.name}</Col>
                    <Col xs lg="1">{node.checkFor}</Col>
                    <Col xs lg="1">{node.requiredStd}</Col>

                    <Col><ProgressBar label={day1.status} variant="success" style={{width: "15px"}} now={day1[index]} /></Col>
                    <Col><ProgressBar label={day2.status} variant="success" style={{width: "15px"}} now={day2[index]} /></Col>
                    <Col><ProgressBar label={day3.status} variant="success" style={{width: "15px"}} now={day3[index]} /></Col>
                    <Col><ProgressBar label={day4.status} variant="success" style={{width: "15px"}} now={day4[index]} /></Col>
                    <Col><ProgressBar label={day5.status} variant="success" style={{width: "15px"}} now={day5[index]} /></Col>
                    <Col><ProgressBar label={day6.status} variant="success" style={{width: "15px"}} now={day6[index]} /></Col>
                    <Col><ProgressBar label={day7.status} variant="success" style={{width: "15px"}} now={day7[index]} /></Col>
                    <Col><ProgressBar label={day8.status} variant="success" style={{width: "15px"}} now={day8[index]} /></Col>
                    <Col><ProgressBar label={day9.status} variant="success" style={{width: "15px"}} now={day9[index]} /></Col>
                    <Col><ProgressBar label={day10.status} variant="success" style={{width: "15px"}} now={day10[index]} /></Col>
                    <Col><ProgressBar label={day11.status} variant="success" style={{width: "15px"}} now={day11[index]} /></Col>
                    <Col><ProgressBar label={day12.status} variant="success" style={{width: "15px"}} now={day12[index]} /></Col>
                    <Col><ProgressBar label={day13.status} variant="success" style={{width: "15px"}} now={day13[index]} /></Col>
                    <Col><ProgressBar label={day14.status} variant="success" style={{width: "15px"}} now={day14[index]} /></Col>
                    <Col><ProgressBar label={day15.status} variant="success" style={{width: "15px"}} now={day15[index]} /></Col>
                    <Col><ProgressBar label={day16.status} variant="success" style={{width: "15px"}} now={day16[index]} /></Col>
                    <Col><ProgressBar label={day17.status} variant="success" style={{width: "15px"}} now={day17[index]} /></Col>
                    <Col><ProgressBar label={day18.status} variant="success" style={{width: "15px"}} now={day18[index]} /></Col>
                    <Col><ProgressBar label={day19.status} variant="success" style={{width: "15px"}} now={day19[index]} /></Col>
                    <Col><ProgressBar label={day20.status} variant="success" style={{width: "15px"}} now={day20[index]} /></Col>
                    <Col><ProgressBar label={day21.status} variant="success" style={{width: "15px"}} now={day21[index]} /></Col>
                    <Col><ProgressBar label={day22.status} variant="success" style={{width: "15px"}} now={day22[index]} /></Col>
                    <Col><ProgressBar label={day23.status} variant="success" style={{width: "15px"}} now={day23[index]} /></Col>
                    <Col><ProgressBar label={day24.status} variant="success" style={{width: "15px"}} now={day24[index]} /></Col>
                    <Col><ProgressBar label={day25.status} variant="success" style={{width: "15px"}} now={day25[index]} /></Col>
                    <Col><ProgressBar label={day26.status} variant="success" style={{width: "15px"}} now={day26[index]} /></Col>
                    <Col><ProgressBar label={day27.status} variant="success" style={{width: "15px"}} now={day27[index]} /></Col>
                    <Col><ProgressBar label={day28.status} variant="success" style={{width: "15px"}} now={day28[index]} /></Col>
                    <Col><ProgressBar label={day29.status} variant="success" style={{width: "15px"}} now={day29[index]} /></Col>
                    <Col><ProgressBar label={day30.status} variant="success" style={{width: "15px"}} now={day30[index]} /></Col>
                 
                    </Row>
                 

                  ))}
                </div>

                
                </Card>
  
            

          

        </div>
      </>
    )
  }
}



export default Jan;
