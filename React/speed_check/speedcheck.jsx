const React = require("react");
const { Component } = React;

class SpeedCheck extends Component {
  state = {
    state: "waiting",
    message: "Click to get started",
    result: [],
  };

  // don't want rendering
  timeout;
  startTime;
  endTime;

  onClickScreen = () => {
    const { state, message, result } = this.state;

    if (state === "waiting") {
      this.setState({
        state: "ready",
        message: "Click on it when it becomes green",
      });
      this.timeout = setTimeout(() => {
        this.setState({
          state: "now",
          message: "Click now",
        });
        this.startTime = new Date();
      }, Math.floor(Math.random() * 1000) + 2000); // 2 to 3 sec random
    } else if (state === "ready") {
      clearTimeout(this.timeout);
      this.setState({
        state: "waiting",
        message: "Too fast! Click on it when it becomes green",
      });
    } else if (state === "now") {
      // Check the speed
      this.endTime = new Date();
      this.setState((prevState) => {
        return {
          state: "waiting",
          message: "Click to get started",
          result: [...prevState.result, this.endTime - this.startTime],
        };
      });
    }
  };

  onReset = () => {
    this.setState({
      result: [],
    });
  };

  renderAverage = () => {
    const { result } = this.state;
    {
      return result.length === 0 ? null : ( // meaning of no tag
        <>
          <div>
            Average time: {result.reduce((a, c) => a + c) / result.length}ms
          </div>
          <button onClick={this.onReset}>Reset</button>
        </>
      );
    }
  };

  render() {
    const { state, message } = this.state;

    return (
      <>
        <div id="screen" className={state} onClick={this.onClickScreen}>
          {message}
        </div>
        {this.renderAverage()}
      </>
    );
  }
}

module.exports = SpeedCheck;
