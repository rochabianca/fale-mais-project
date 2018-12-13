import React from 'react';
import destinationTaxes from '../../DestinationTaxes';
const CalculateTaxes = props => {
  const { origin, destination, plan, minutes } = props;
  let contents;
  const taxes = destinationTaxes(origin);
  if (taxes) {
    taxes.map(tax => {
      // TODO: Improove this logic
      if (destination === tax.destination) {
        contents = (
          <div data-test='taxes'>Sem Fale Mais: {tax.tax * minutes}</div>
        );
      }
    });
  }
  console.log(taxes);
  return <div data-test='component-calculate-taxes'>{contents}</div>;
};

export default CalculateTaxes;
