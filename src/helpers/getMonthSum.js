import commaNumber from 'comma-number';

const getMonthSum = (newValue, budgetFrequency) =>
  commaNumber((newValue.replace(/,/g, '') / budgetFrequency).toFixed(2));

export default getMonthSum;
