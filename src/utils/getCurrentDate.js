const getCurrentDate = () => {
  const d = new Date();
  let min = d.getMinutes();
  if (min < 10) {
    min = '0' + min;
  }
  const date = `${d.getDate()}/${d.getMonth()}/${d.getFullYear()} - ${d.getHours()}:${min}:${d.getSeconds()}`;
  return date;
};

export default getCurrentDate;
