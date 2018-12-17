import destinationsTaxes from './DestinationTaxes';

const CalculateTaxes = (origin, destination, minutes, minutesGranted) => {
  let finalTaxes = { faleMais: ' - ', fixed: ' - ' };
  const taxes = destinationsTaxes(origin);
  if (taxes) {
    taxes.map(tax => {
      if (destination === tax.destination) {
        let faleMaisTax;
        const fixedTax = tax.tax * minutes;
        if (minutes > minutesGranted) {
          faleMaisTax = (tax.faleMaisTax * (minutes - minutesGranted)).toFixed(
            2
          );
        } else {
          faleMaisTax = 0;
        }
        finalTaxes = { faleMais: faleMaisTax, fixed: fixedTax };
        return finalTaxes;
      }
    });
  }
  return finalTaxes;
};

export default CalculateTaxes;
