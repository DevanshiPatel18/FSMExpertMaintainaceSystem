import React from "react";
import "./App.css";

import Progress from './components/progressComponent/index';
import ems from './components/emsComponent/index';
import Admin from './components/Admin/index';
import jh from "./components/jhComponent/index";
import mon from "./components/monthlyComponent/index";
import week from "./components/weeklyComponent/index";
import year from "./components/yearComponent/index";
import weekProgress from "./components/weekProgressComponent/index";
import prevent from "./components/preventiveComponent/index";
import monthProgress from "./components/monthProgressComponent/index";
import month2Progress from "./components/month2ProgressComponent/index";
import month0Progress from "./components/month0ProgressComponent/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '@material-ui/icons/Home'; 
import { Card , CardImg, CardBody, CardTitle} from "react-bootstrap";
import { blue } from "@material-ui/core/colors";
import Footer from './components/FooterComponent/index';
import jan from "./components/monthlyComponent/jan.js";
import feb from "./components/monthlyComponent/feb.js";
import mar from "./components/monthlyComponent/mar.js";
import apr from "./components/monthlyComponent/apr.js";
import may from "./components/monthlyComponent/may.js";
import jun from "./components/monthlyComponent/jun.js";
import jul from "./components/monthlyComponent/jul.js";
import aug from "./components/monthlyComponent/aug.js";
import sep from "./components/monthlyComponent/sep.js";
import oct from "./components/monthlyComponent/oct.js";
import nov from "./components/monthlyComponent/nov.js";
import dec from "./components/monthlyComponent/dec.js";
import Login from "./components/Login/index";



function App() {
  return (
    <div>



                  <div >
        <Router>
            <Switch>
            <Route path="/admin" component={Admin} />

            <Route path="/jh" component={jh} />
            <Route path="/ems" component={ems} />
            <Route path="/daily" component={Progress} />
            <Route path="/week" component={week} />
            <Route path="/month" component={mon} /> 
            <Route path="/weekProgress" component={weekProgress} />
            <Route path="/monthProgress" component={monthProgress} />
            <Route path="/month2Progress" component={month2Progress} />
            <Route path="/month0Progress" component={month0Progress} />
            <Route path="/year" component={year} />
            <Route path="/prevent" component={prevent} />
            <Route path="/jan" component={jan} />
            <Route path="/feb" component={feb} />
            <Route path="/mar" component={mar} />
            <Route path="/apr" component={apr} />
            <Route path="/may" component={may} />
            <Route path="/jun" component={jun} />
            <Route path="/jul" component={jul} />
            <Route path="/aug" component={aug} />
            <Route path="/sep" component={sep} />
            <Route path="/oct" component={oct} />
            <Route path="/nov" component={nov} />
            <Route path="/dec" component={dec} />
            <Route path="/" component={Login} />


            </Switch>
        </Router>

      </div>
      <footer  style = {  {top :"90%",
  bottom : "0",
  right: "16px",}
  }><Footer /></footer>

    </div>
  );
}

export default App;
