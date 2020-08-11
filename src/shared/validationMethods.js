const minLength = (minLength) => (value) =>
  value.length >= minLength || `need more than ${minLength} characters`;

const maxLength = (maxLength) => (value) =>
  value.length <= maxLength || `need less than ${maxLength} characters`;

const inLength = (minLength, maxLength) => (value) =>
  (value.length <= maxLength && value.length >= minLength) ||
  `need Between (${minLength} and ${maxLength}) characters`;

const minNumber = (minNumber) => (value) =>
  Number(value) >= Number(minNumber) ||
  `need more than ${minNumber} characters`;
const maxNumber = (maxNumber) => (value) =>
  Number(value) <= Number(maxNumber) ||
  `need more than ${maxNumber} characters`;

const inNumber = (minNumber, maxNumber) => (value) =>
  (value.number <= maxNumber && value.number >= minNumber) ||
  `need Between (${minLength} and ${maxNumber}) characters`;

export { minLength, maxLength, minNumber, maxNumber, inLength, inNumber };
