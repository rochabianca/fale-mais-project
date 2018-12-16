import React from 'react';

const ShowTaxes = props => {
  const { taxes } = props;
  let contents;
  console.log(taxes);
  if (taxes.fixed) {
    contents = (
      <div data-test='taxes'>
        Com Fale Mais: {taxes.faleMais}
        <br />
        Sem Fale Mais: {taxes.fixed}
        <br />
      </div>
    );
  } else {
    contents = <div>Click em 'Show Me' para ver</div>;
  }

  return <div data-test='component-show-taxes'>{contents}</div>;
};

export default ShowTaxes;
