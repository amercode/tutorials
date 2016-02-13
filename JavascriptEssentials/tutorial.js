// Dynamically Typed
console.log('Dynamically Typed');
var string ='42';
console.log(string - 2);
console.log(string + 2);
console.log(parseInt(string,10) + 2);

// Everything is an object even primitives
// use type of for primitives and instance of for array
console.log('Everything is an object even primitives');
console.log(typeof '42');
console.log(typeof 42);

var person = {
  firstName: 'Jack',
  lastname: 'Nick'
};
console.log(typeof person);

var persons = [{
    firstName: 'Jack',
    lastname: 'Nick'
  },
  {
    firstName: 'Jack2',
    lastname: 'Nick2'
    
  }];
console.log(typeof persons); // bad
console.log(persons instanceof Array); // good

console.log('hey'.length);

// Patterns as important as syntax
console.log('Patterns as important as syntax');

// bad way of defining obects
var pattern = new Object();
pattern.firstName = 'Sam';
pattern.lastName = 'Bob';
var ages = new Array(10,20);
console.log(pattern);
console.log(ages);
var ages2 = new Array(23); // this creates an array of 23 elements
console.log(ages2);

// good way
var pattern2 = {
  firstName: 'Sam',
  lastName: 'Bob'
};
var ages3 = [10];

console.log(pattern2);
console.log(ages3);

var patterns = [{
  firstName: 'Sam',
  lastName: 'Bob'
  },
  {
  firstName: 'Sam2',
  lastName: 'Bob2'
  } 
];
console.log(patterns);

// An object is an unordered collection of key-value pairs
console.log('An object is an unordered collection of key-value pairs');
var person2 = {
    firstName: 'Jack',
    lastName: 'Nick',
    getName: function() {
      return this.firstName + ' ' + this.lastName;
    },
    address: {
      zip: 1234,
      street: '123 Park Avenue'
    }
  }
  ;
console.log(person2.getName());
console.log(person2.address.street);

// Function in Javascript
console.log('Function in Javascript');
// Functions are first-class objects
console.log('Functions are first-class objects');

var myFunction = function() {
  console.log('I have been called');
};

myFunction.firstName = 'Jack';
console.log(myFunction);
console.log(myFunction.firstName);

var Person = function() {
  this.firsName = 'jack';
};

Person.findOne = function() {
};


// Functions can be anonymous
console.log('Functions can be anonymous');
setTimeout(function () {
  console.log('Anonymous function been called');
  }, 1000);

// Function can be self-executing
console.log('Function can be self-executing');
(function () {
  console.log('Self executing function called');
})();


// Function encapsulation
console.log('Function encapsulation');
// myFile.js
var message = "Nice Message";
setTimeout(function () {
  console.log(message);
  }, 1000);

// externalLib.js
if (message) { // if message is defined
  console.log('ERROR FOR MESSAGE');
}

// to fix this problem we encapsulate all of our code :
// myFile.js
(function () {
  var message2 = "Nice Message";
  setTimeout(function () {
    console.log(message2);
  }, 1000);
  }
)();

// externalLib.js
if (typeof(message2) !== undefined) { // if message is defined
  console.log('ERROR FOR MESSAGE');
}

(function () { // this will print Message twice
  var messages = ['Nice', 'Message'];
  for(var i in messages) {
    setTimeout(function () {
    console.log(messages[i]);
    }, 0);
  }
})();

(function () { // this is the proper way of doig it
  var messages = ['Nice', 'Message'];
  var say = function (index) {
    setTimeout(function () {
    console.log(messages[index]);
    }, 0);
  };
  for(var i in messages) {
    say(i);
  }
})();

// Module Pattern
console.log('Module Pattern');

var Alert = (function () {
  var messages = []; // private to the function
  return {
    add: function(message) {
      messages.push(message);
    },
    log: function(seperator) {
      console.log(messages.join(seperator));
    }
  };
  
})();

Alert.add('Nice');
Alert.add('Message');
Alert.log('-------');

// Common.js Module
console.log('Common.js Module');

// alert.js
module.export = function (options) {
  var messages = []; // private to the function
  return {
    add: function(message) {
      messages.push(message);
    },
    log: function(seperator) {
      console.log(messages.join(options.seperator));
    }
  };
  
};


// user.js
var myAlert = require('alert')({
      seperator: ' '
    }); // alert is the name of the required file alert.js



// Difference between scope and context
console.log('Difference between scope and context');
var vehicle = {
  model: 'BMW',
  year: 2015,
  logDetails: function() {
    console.log(this.model + ' ' + this.year);
  }
};
vehicle.logDetails(); // works 
setTimeout(vehicle.logDetails, 1000); // doesn't work as this refer to the calling funciton which is setTimeout in this case


// Bind context with bind
console.log('Bind context with bind');
var Vehicle = function() {
  this.model = 'BMW';
  setTimeout(function () {
    console.log(this.model)
    }.bind(this), 1000); // bind here
};

var bmw = new Vehicle(); // this works fine


// Call method with context using call or apply
console.log('Call method with context using call or apply');
var vehicle2 = {
  model: 'BMW',
  year: 2015
};

var getDetails = function() {
  console.log(this.model + ' ' + this.year);
};

getDetails.call(vehicle2); // bind object to the this pointer

var getDetails2 = function(prop1, prop2) {
  console.log(this[prop1]);
  console.log(this[prop2]);
};

getDetails2.call(vehicle2, 'year', 'model');
getDetails2.call(vehicle2, 'model', 'year');

var callOrder = function() {
  getDetails2.apply(vehicle2, arguments); // apply uses array instead
}

callOrder('model', 'year');



// Object Oriented Javascript
console.log('Object Oriented Javascript');


var Room = function(name, size) { // class declaration
  this.name = name;
  this.size = size;
  this.getDetails = function() {
    return this.name + ' ' + this.size;
  };
};

console.log(Room.prototype); // empty as nothing is defined yet

// this definition without prototype causes getName method to be declared every time we instantiate
var room1 = new Room('Room1', 1000); // instance of class Room
var room2 = new Room('Room2', 2000); // instance of class Room

console.log(room1.getDetails());
console.log(room2.getDetails());

// to fix this problem we define getDetails in prototype
var Room2 = function(name, size) { // class declaration
  this.name = name;
  this.size = size;
};
Room2.prototype.getDetails2 =  function() {
    return this.name + ' ' + this.size;
  };
var room3 = new Room2('Room3', 3000); // instance of class Room
var room4 = new Room2('Room4', 4000); // instance of class Room

console.log(room3.getDetails2());
console.log(room4.getDetails2());

// Inheritance
console.log('Inheritance');
var Bedroom = function(name, size, numBeds) {
  Room2.call(this, name, size);
  this.numBeds = numBeds;
};

Bedroom.prototype = Object.create(Room2.prototype);
Bedroom.prototype.constructor = Bedroom; // rest Bedroom contructor to Bedroom instead of Room2
Bedroom.prototype.getDetails2 = function() {
  return Room2.prototype.getDetails2.call(this) + '. Beds: ' + this.numBeds;
}
var bedroom1 = new Bedroom('Bedroom1', 1000, 2);
console.log(bedroom1.getDetails2());

// Module Classes
console.log('Module Classes');

var ModuleClass = (function () {
  var numModule = 0;
  var ModuleClass = function() {
    this.name = name;
    this.size = size;
  };
  ModuleClass.prototype.getDetails =  function() {
    return this.name + ' ' + this.size;
  };
  
  ModuleClass.findOne = function() {
    return ModuleClass;
  }
})();
