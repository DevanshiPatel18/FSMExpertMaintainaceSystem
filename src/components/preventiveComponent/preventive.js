import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Row from 'react-bootstrap/Row';
import {Button} from "react-bootstrap"
import Col from 'react-bootstrap/Col';
import { Card , CardImg, CardBody, CardTitle} from "react-bootstrap"
import MonthPMComponent from './monthly';
import QuarComponent from './quarterly';
import HalfComponent from './halfyearly';
import YearComponent from './yearly';
import moment from "moment";
import Home from '@material-ui/icons/Home'; 
import { blue } from "@material-ui/core/colors";
import Clock from 'react-live-clock';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,

  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div >    <Card style={{  top:'23px', left: '25px', width: '3rem' , height: '3rem'}} onClick={event =>  window.location.href='/ems'}>
    <center><Home style={{ color: blue[800] , fontSize: 40}}/> </center>
   
   
     </Card>
        <br></br >
        <center><h2>Preventive Maintenance Checklist</h2></center> 
        <div>
        <Row style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "left"
        }}>
      
      <Clock date={moment().format()} format={'MMMM Do YYYY, dddd'} ticking={true}  />
          
</Row>    
</div>
        <br></br >

        <Card style={{ left: '25px', width: '110rem' }} body outline color="success" className="mx-auto my-2">
      <AppBar position="static" color="primary">
        <Tabs 
          value={value}
          onChange={handleChange}
          indicatorColor="success"
          textColor="success"
          variant="fullWidth"
          
          aria-label="full width tabs example"
        >
          <Tab label="Monthly" {...a11yProps(0)} />
          <Tab label="Quarterly" {...a11yProps(1)} />
          <Tab label="Half Yearly" {...a11yProps(2)} />
          <Tab label="Yearly" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0}>
          <MonthPMComponent/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <QuarComponent/>
                </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
         <HalfComponent/>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <YearComponent/>
        </TabPanel>
      </SwipeableViews>
      </Card>
    </div>
  );
}
