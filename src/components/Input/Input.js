import React, { Component } from 'react';
import { ddds } from '../../utils/DestinationTaxes';
import ShowTaxes from '../ShowTaxes/ShowTaxes';
import CalculateTaxes from '../../utils/CalculateTaxes';
import sendToFirebase from '../../utils/sendToFirebase';
import SelectGroup from '../layouts/selectGroup';
class Input extends Component {
  state = {
    origin: 11,
    destination: 16,
    minutes: 0,
    minutesGranted: '30',
    taxesToShow: {}
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  onSubmit = ({ origin, destination, minutes, minutesGranted }, e) => {
    e.preventDefault();
    const finaltaxes = CalculateTaxes(
      parseInt(origin),
      parseInt(destination),
      parseFloat(minutes),
      parseInt(minutesGranted)
    );
    sendToFirebase(origin, destination, minutes, minutesGranted, finaltaxes);

    this.setState({
      taxesToShow: finaltaxes
    });
  };

  render() {
    const {
      origin,
      destination,
      minutes,
      minutesGranted,
      taxesToShow
    } = this.state;
    return (
      <div data-test='input-component'>
        <form onSubmit={this.onSubmit.bind(this, this.state)}>
          <SelectGroup
            name='origin'
            value={origin}
            onChange={this.onChange}
            ddds={ddds}
          />

          <SelectGroup
            name='destination'
            id='destination'
            value={destination}
            onChange={this.onChange}
            ddds={ddds.filter(ddd => ddd !== parseInt(origin))}
          />

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
        <ShowTaxes taxes={taxesToShow} />
      </div>
    );
  }
}

export default Input;
