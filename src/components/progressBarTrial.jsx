import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";

class ProgressBarTrial extends Component {
  state = {};
  render() {
    return (
      // <Card style={{ width: "30rem" }}>
      <Card
        style={{
          marginLeft: " 0px",
          marginRight: " 0px",
          marginBottom: "28px"
        }}
      >
        <ListGroup variant="flush">
          <ListGroup.Item>
            <Button variant={this.getButtonColor(this.props.entryValue)} />{" "}
            Operation Started
          </ListGroup.Item>
          <ListGroup.Item>
            <Button
              variant={this.getButtonColor(this.props.applicationAreaValue)}
            />{" "}
            {this.props.operation}
          </ListGroup.Item>
          <ListGroup.Item>
            <Button variant={this.getButtonColor(this.props.exitValue)} />{" "}
            Operation Completed
          </ListGroup.Item>
        </ListGroup>
      </Card>
    );
  }
  getButtonColor(x) {
    let count = "blue-grey"; //"secondary" in react-bootstrap = "blue-grey" in mdbreact
    if (x === "true") {
      count = "success";
    }
    // count += x === 0 ? "success" : "danger";
    console.log("count", count);
    return count;
  }
}

export default ProgressBarTrial;