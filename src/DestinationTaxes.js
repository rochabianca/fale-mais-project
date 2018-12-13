const destinations_11 = [
  { destination: 16, tax: 1.9, faleMaisTax: 2.09 },
  { destination: 17, tax: 1.7, faleMaisTax: 1.87 },
  { destination: 18, tax: 0.9, faleMaisTax: 0.99 }
];
const destinations_16 = [{ destination: 11, tax: 2.9, faleMaisTax: 3.19 }];
const destinations_17 = [{ destination: 11, tax: 2.7, faleMaisTax: 2.97 }];
const destinations_18 = [{ destination: 11, tax: 1.9, faleMaisTax: 2.09 }];

const destinations_taxes = origin => {
  switch (origin) {
    case 11: {
      return destinations_11;
    }
    case 16: {
      return destinations_16;
    }
    case 17: {
      return destinations_17;
    }
    case 18: {
      return destinations_18;
    }
    default: {
      return null;
    }
  }
};

export default destinations_taxes;
