import React, { Component } from "react";
import PropTypes from "prop-types";

class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 27,
    };
  }
  render() {
    return (
      <div>
        <h1>Hola {this.props.name}!!</h1>
        <h2>Tu edad es de: {this.state.age} años</h2>
        <div>
          <button onClick={this.birthday}>Cumplir años</button>
        </div>
      </div>
    );
  }
  birthday = () => {
    this.myAge++;
  };
}
Greeting.propTypes = {
  name: PropTypes.string,
};
export default Greeting;
