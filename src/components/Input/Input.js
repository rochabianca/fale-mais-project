import React, { Component } from 'react';
import { ddds } from '../../DestinationTaxes';
import CalculateTaxes from '../CalculateTaxes/CalculateTaxes';
let taxes = <div>Click 'show me' to see</div>;
class Input extends Component {
  state = {
    origin: 11,
    destination: 16,
    minutes: 0,
    minutesGranted: '30'
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  onSubmit = ({ origin, destination, minutes, minutesGranted }, e) => {
    e.preventDefault();
    taxes = () => (
      <CalculateTaxes
        origin={parseInt(origin)}
        destination={parseInt(destination)}
        minutes={parseFloat(minutes)}
        minutesGranted={parseFloat(minutesGranted)}
      />
    );

    console.log(taxes);
  };

  render() {
    const { origin, destination, minutes, minutesGranted } = this.state;
    return (
      <div data-test='input-component'>
        <form onSubmit={this.onSubmit.bind(this, this.state)}>
          <select
            name='origin'
            id='origin'
            value={origin}
            onChange={this.onChange}
          >
            {ddds.map((origin, index) => (
              <option key={index} value={origin}>
                0{origin}
              </option>
            ))}
          </select>
          <select
            name='destination'
            id='destination'
            value={destination}
            onChange={this.onChange}
          >
            {ddds.map((destination, index) => (
              <option key={index} value={destination}>
                0{destination}
              </option>
            ))}
          </select>
          <input
            type='number'
            name='minutes'
            value={minutes}
            onChange={this.onChange}
            onKeyDown={this.onKeyDown}
          />
          <div className='plan'>
            <input
              type='radio'
              name='minutesGranted'
              value='30'
              checked={minutesGranted === '30'}
              onChange={this.onChange}
            />
            FaleMais30
            <input
              type='radio'
              name='minutesGranted'
              value='60'
              checked={minutesGranted === '60'}
              onChange={this.onChange}
            />
            FaleMais60
            <input
              type='radio'
              name='minutesGranted'
              value={120}
              checked={minutesGranted === '120'}
              onChange={this.onChange}
            />
            FaleMais120
          </div>
          <button type='submit'>Show ME</button>
        </form>
        <div>{taxes}</div>
      </div>
    );
  }
}

export default Input;
