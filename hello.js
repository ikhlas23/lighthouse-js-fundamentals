const sayHello  = function () {
  console.log("Hello, world");
}

sayHello();

const sayHello  = function (name) {
  console.log("Hello, " + name);
}

// REturn vs Console.log
const returnSayHello  = function (name) {
  return "Hello, " + name;
}
const greeting = returnSayHello('John');
console.log(greeting);

// return inside a function can be console.log later on