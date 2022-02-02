import React from "react";
import "./app.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      color: "lightgray"
    };
  }
  updateColor = (colorValue) => {
    this.setState({
      color: colorValue
    });
  };

  render() {
    return (
      <>
        <div className="container">
          <div
            className="color-block"
            onClick={() => {
              this.updateColor = "red";
            }}
            style={{ backgroundColor: "red" }}
          ></div>
          <div
            className="color-block"
            style={{ backgroundColor: "blue" }}
          ></div>
          <div
            className="color-block"
            style={{ backgroundColor: "green" }}
          ></div>
          <div
            className="color-block"
            style={{ backgroundColor: "yellow" }}
          ></div>
          <div
            className="color-block"
            style={{ backgroundColor: "violet" }}
          ></div>
        </div>

        <div className="display"></div>
      </>
    );
  }
}

export default App;
