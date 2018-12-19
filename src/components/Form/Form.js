import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { ddds } from '../../utils/DestinationTaxes';
import CalculateTaxes from '../../utils/CalculateTaxes';
import sendToFirebase from '../../utils/sendToFirebase';

import ShowTaxes from '../ShowTaxes/ShowTaxes';
import SelectGroup from '../layouts/SelectGroup/SelectGroup';

import './Form.min.css';
import Logo from '../layouts/Logo/Logo';

class Form extends Component {
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
      <div data-test='input-component' className='grid'>
        <div className='grid__column grid__column--6'>
          <Logo />
          <form
            className='form'
            onSubmit={this.onSubmit.bind(this, this.state)}
          >
            <SelectGroup
              name='origin'
              value={parseInt(origin)}
              onChange={this.onChange}
              ddds={ddds}
              label='Origem'
            />

            <SelectGroup
              name='destination'
              id='destination'
              value={parseInt(destination)}
              onChange={this.onChange}
              ddds={ddds.filter(ddd => ddd !== parseInt(origin))}
              label='Destino'
            />
            <label className='form__label'>Minutos</label>
            <input
              type='number'
              name='minutes'
              value={minutes}
              onChange={this.onChange}
              className='form__input'
            />
            <div className='plan'>
              <label className='form__label'>escolha o seu plano</label>
              <div className='form__radios'>
                <input
                  type='radio'
                  name='minutesGranted'
                  value='30'
                  checked={minutesGranted === '30'}
                  onChange={this.onChange}
                  id='faleMais30'
                />
                <label htmlFor='faleMais30' className='form__input__label'>
                  FaleMais30
                </label>
                <input
                  type='radio'
                  name='minutesGranted'
                  value='60'
                  checked={minutesGranted === '60'}
                  onChange={this.onChange}
                  id='faleMais60'
                />
                <label htmlFor='faleMais60' className='form__input__label'>
                  FaleMais60
                </label>
                <input
                  type='radio'
                  name='minutesGranted'
                  value='120'
                  checked={minutesGranted === '120'}
                  onChange={this.onChange}
                  id='faleMais120'
                />
                <label className='form__input__label' htmlFor='faleMais120'>
                  FaleMais120
                </label>
              </div>
            </div>
            <button className='btn btn--block btn--form' type='submit'>
              Calcular
            </button>
          </form>
        </div>
        <div className='grid__column grid__column--6 form__bg'>
          <ShowTaxes taxes={taxesToShow} />
          <Link className='form__link' to='/EntriesLog'>
            Log
          </Link>
        </div>
      </div>
    );
  }
}

export default Form;
