import React from 'react';
import destinationTaxes from '../../DestinationTaxes';
const CalculateTaxes = props => {
  const { origin, destination, minutesGranted, minutes } = props;
  let contents;
  console.log(typeof origin);
  const taxes = destinationTaxes(origin);
  console.log(taxes);
  if (taxes) {
    taxes.map(tax => {
      // TODO: Improove this logic
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
            Sem Fale Mais: {tax.tax * minutes}
          </div>
        );
      }
    });
  }
  console.log(taxes);
  return <div data-test='component-calculate-taxes'>{contents}</div>;
};

export default CalculateTaxes;
