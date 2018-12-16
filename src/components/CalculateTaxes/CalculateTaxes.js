import React from 'react';
import destinationTaxes from '../../DestinationTaxes';

const CalculateTaxes = props => {
  const { origin, destination, minutesGranted, minutes } = props;
  let contents;
  const taxes = destinationTaxes(origin);
  if (taxes) {
    taxes.map(tax => {
      if (destination === tax.destination) {
        let faleMaisTax;
        if (minutes > minutesGranted) {
          faleMaisTax = (tax.faleMaisTax * (minutes - minutesGranted)).toFixed(
            2
          );
        } else {
          faleMaisTax = 0;
        }
        contents = (
          <div data-test='taxes'>
            Com Fale Mais: {faleMaisTax}
            <br />
            Sem Fale Mais: {(tax.tax * minutes).toFixed(2)}
          </div>
        );
      }
    });
  }
  return <div data-test='component-calculate-taxes'>{contents}</div>;
};

export default CalculateTaxes;
