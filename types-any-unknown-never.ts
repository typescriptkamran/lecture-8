// any__unknown_never_types

// Any

let myValue: any;

myValue = true; // OK
myValue = 42; // OK
myValue = "hey!"; // OK
myValue = []; // OK
myValue = {}; // OK
myValue = Math.random; // OK
myValue = null; // OK
myValue = undefined; // OK
myValue = () => { console.log('Hey again!'); }; // OK


//Unknown

let value: unknown;

value = true; // OK
value = 42; // OK
value = "hey!"; // OK
value = []; // OK
value = {}; // OK
value = Math.random; // OK
value = null; // OK
value = undefined; // OK
value = () => { console.log('Hey again!'); }; // OK


// Assigning a value of type unknown to variables of other types

let val: unknown;

const val1: unknown = val; // OK
const val2: any = val; // OK
// const val3: boolean = val; // Will throw error
// const val4: number = val; // Will throw error
// const val5: string = val; // Will throw error
// const val6: Record<string, any> = val; // Will throw error
// const val7: any[] = val; // Will throw error
// const val8: (...args: any[]) => void = val; // Will throw error


// Never

// Function returning never must not have a reachable end point
function error(message: string): never {
  throw new Error(message);
}
 
// Inferred return type is never
function fail() {
  return error("Something failed");
}
 
// Function returning never must not have a reachable end point
function infiniteLoop(): never {
  while (true) {}
}

// example 2

function throwError(message: string): never {
  throw new Error(message);
}

// This function returns a number, not 'never'
function divide(a: number, b: number): number {
  if (b === 0) {
      throwError("Division by zero is not allowed kindly chanfe the value of b");
  }
  return a / b;
}

const result = divide(10, 2); // Result is 5
// const errorResult = divide(10, 0); // This line will throw an error

