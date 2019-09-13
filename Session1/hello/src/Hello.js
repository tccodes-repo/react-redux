import React from "react";

class Hello extends React.Component {

  render() {
  
    return React.createElement("div", { className: "container" },

      React.createElement("h1", null, "Hello in JS!")

    );

  }
  
}

export default Hello;
