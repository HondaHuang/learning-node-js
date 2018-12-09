const EventEmitter = require('events');

const eventEmitter = new EventEmitter();
// listens for an event
eventEmitter.on('tutorial', (num1, num2) => {
  console.log(num1 + num2);
  console.log('tutorial event has occured');
})

// creates an event
eventEmitter.emit('tutorial', 1, 2);

class Person extends EventEmitter {
  constructor(name) {
    super();
    this._name = name;
    // _variable is standard practice for private variables
  }
  // getter method
  get name() {
    return this._name;
  }
}

let pedro = new Person('Pedro');
let christina = new Person('Christina');


// listens for name event
christina.on('name', () => {
  console.log('my name is ' + christina.name);
})
pedro.on('name', () => {
  console.log('my name is ' + pedro.name);
})

// syncronously creates event 
pedro.emit('name');
christina.emit('name');
