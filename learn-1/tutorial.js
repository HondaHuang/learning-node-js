const sum = (num1, num2) => num1 + num2;
const product = (num1, num2) => num1 * num2;

class SomeMathObject {
  constructor() {
    console.log('object created');
  }
}

module.exports = {
  sum: sum,
  product: sum,
  SomeMathObject: SomeMathObject
};
