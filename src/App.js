import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    total: 0,
    current: "",
    show: 0
  };

  equal = () => {
    this.setState({
      total: Number(this.state.total),
      current: ""
    });
  };

  sum = () => {
    this.setState({
      total: Number(this.state.current) + Number(this.state.total),
      current: ""
    });
  };

  multi = () => {
    if (this.state.total === 0) {
      this.setState({
        total: Number(this.state.current) * 1,
        current: ""
      });
    } else {
      this.setState({
        total: Number(this.state.current) * Number(this.state.total),
        current: ""
      });
    }
  };
  devide = () => {
    this.setState({
      total: Number(this.state.current) / Number(this.state.total),
      current: ""
    });
  };
  minus = () => {
    this.setState({
      total: Number(this.state.total) - Number(this.state.current),
      current: ""
    });
  };
  percentage = () => {
    this.setState({
      total: Number(this.state.current) / 100,
      current: ""
    });
  };

  render() {
    return (
      <div className="App">
        <div className="result">
          {" "}
          <h1>{this.state.current || this.state.total}</h1>
        </div>
        <div className="buttons">
          <div
            onClick={() => {
              this.setState({ total: 0, current: "", show: "" });
            }}
          >
            {this.state.total === 0 && this.state.current === "" ? "AC" : "C"}
          </div>
          <div
            onClick={() => {
              this.setState({ current: -1 * this.state.current });
            }}
          >
            +/-
          </div>
          <div
            onClick={() => {
              this.percentage();
            }}
          >
            %
          </div>
          <div className="orange">/</div>
          <div
            onClick={() => {
              this.setState({ current: this.state.current.toString() + "7" });
            }}
          >
            7
          </div>
          <div
            onClick={() => {
              this.setState({ current: this.state.current.toString() + "8" });
            }}
          >
            8
          </div>
          <div
            onClick={() => {
              this.setState({ current: this.state.current.toString() + "9" });
            }}
          >
            9
          </div>
          <div
            className="orange"
            onClick={() => {
              this.multi();
            }}
          >
            X
          </div>
          <div
            onClick={() => {
              this.setState({ current: this.state.current.toString() + "4" });
            }}
          >
            4
          </div>
          <div
            onClick={() => {
              this.setState({ current: this.state.current.toString() + "5" });
            }}
          >
            5
          </div>
          <div
            onClick={() => {
              this.setState({ current: this.state.current.toString() + "6" });
            }}
          >
            6
          </div>
          <div
            className="orange"
            onClick={() => {
              this.minus();
            }}
          >
            -
          </div>
          <div
            onClick={() => {
              this.setState({ current: this.state.current.toString() + "1" });
            }}
          >
            1
          </div>
          <div
            onClick={() => {
              this.setState({ current: this.state.current.toString() + "2" });
            }}
          >
            2
          </div>
          <div
            onClick={() => {
              this.setState({ current: this.state.current.toString() + "3" });
            }}
          >
            3
          </div>
          <div
            className="orange"
            onClick={() => {
              this.sum();
            }}
          >
            +
          </div>
          <div
            className="right"
            onClick={() => {
              this.setState({ current: this.state.current.toString() + "0" });
            }}
          >
            0
          </div>
          <div
            className="left"
            onClick={() => {
              this.setState({ current: this.state.current.toString() + "0" });
            }}
          />
          <div
            onClick={() => {
              this.setState({
                current: this.state.current + "."
              });
            }}
          >
            .
          </div>
          <div
            className="orange"
            onClick={() => {
              this.equal();
            }}
          >
            =
          </div>
        </div>
      </div>
    );
  }
}

export default App;
