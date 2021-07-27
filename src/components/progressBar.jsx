import React, { Component } from "react";

class ProgressBar extends Component {
  render() {
    return (
      <div class="progress">
        <div
          class="progress-bar"
          role="progressbar"
          style="width: 33.33%"
          aria-valuenow="33.33"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          Machine-1
        </div>
        <div
          class="progress-bar bg-success"
          role="progressbar"
          style="width: 33.33%"
          aria-valuenow="33.33"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          Machine-2
        </div>
        <div
          class="progress-bar bg-info"
          role="progressbar"
          style="width: 33.34%"
          aria-valuenow="33.34"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          Machine-3
        </div>
      </div>
    );
  }
}

export default ProgressBar;
