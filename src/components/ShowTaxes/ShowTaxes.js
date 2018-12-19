import React from 'react';
import './ShowTaxes.min.css';

const ShowTaxes = props => {
  const { taxes } = props;
  let contents;
  if (taxes && taxes.fixed === 0) {
    contents = (
      <div data-test='taxes' className='ShowTaxes__text'>
        Por favor, selecione quantos minutos você quer falar por mês!
      </div>
    );
  } else if (taxes && taxes.fixed && taxes.fixed !== ' - ') {
    contents = (
      <div data-test='taxes' className='ShowTaxes__text'>
        <p className='ShowTaxes__promo'>
          Com Fale Mais: <b className='ShowTaxes__price'>$ {taxes.faleMais}</b>
        </p>
        <p className='ShowTaxes__normal'>
          Sem Fale Mais: <b className='ShowTaxes__price'>$ {taxes.fixed}</b>
        </p>

        {taxes.fixed > taxes.faleMais ? (
          <p className='ShowTaxes__savings'>
            Com a FaleMais você economizará{' '}
            <b className='ShowTaxes__price'>$ {taxes.fixed - taxes.faleMais}</b>{' '}
            em apenas um mês!
          </p>
        ) : null}
      </div>
    );
  } else if (taxes && taxes.fixed === ' - ') {
    contents = (
      <div className='ShowTaxes__text'>
        Desculpe, ainda não cobrimos essa origem e destino :(
      </div>
    );
  } else {
    contents = (
      <div className='ShowTaxes__text'>
        Clique em Calcular e descubra o plano que mais combina com você!
      </div>
    );
  }

  return (
    <div className='ShowTaxes' data-test='component-show-taxes'>
      {contents}
    </div>
  );
};

export default ShowTaxes;
