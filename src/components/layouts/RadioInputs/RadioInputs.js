import React from 'react';
import './RadioInputs.min.css';

const RadioInputs = ({ minutesGranted, onChange }) => {
  return (
    <div>
      <label className='form__label'>escolha o seu plano</label>
      <div className='RadioInputs'>
        <input
          type='radio'
          name='minutesGranted'
          value='30'
          checked={minutesGranted === '30'}
          onChange={onChange}
          id='faleMais30'
        />
        <label htmlFor='faleMais30' className='RadioInputs__label'>
          FaleMais30
        </label>
        <input
          type='radio'
          name='minutesGranted'
          value='60'
          checked={minutesGranted === '60'}
          onChange={onChange}
          id='faleMais60'
        />
        <label htmlFor='faleMais60' className='RadioInputs__label'>
          FaleMais60
        </label>
        <input
          type='radio'
          name='minutesGranted'
          value='120'
          checked={minutesGranted === '120'}
          onChange={onChange}
          id='faleMais120'
        />
        <label className='RadioInputs__label' htmlFor='faleMais120'>
          FaleMais120
        </label>
      </div>
    </div>
  );
};

export default RadioInputs;
