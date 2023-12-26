import React, { Component } from 'react';
import Controls from './Controls';
import PropTypes from 'prop-types';

class Counter extends Component {
  static defaultProps = {
    initialValue: 10,
  };

  static propTypes = {
    initialValue: PropTypes.number.isRequired,
  };

  state = {
    value: this.props.initialValue,
  };

  decrement = () => {
    this.setState(prev => ({ value: prev.value - 1 }));
  };

  increment = () => {
    this.setState(prev => ({ value: prev.value + 1 }));
  };

  render() {
    return (
      <div className="counter">
        <span>{this.state.value}</span>
        <Controls onDecrement={this.decrement} onIncrement={this.increment} />
      </div>
    );
  }
}

export default Counter;
