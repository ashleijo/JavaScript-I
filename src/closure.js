// Complete the following functions.

const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  // Example: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2
  let x = 0;
  function addOne() {
    return ++x;
  }
  return addOne;
};

const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  const obj = {};
  let x = 0;
  obj.increment = function inc() {
    return ++x;
  };
  obj.decrement = function dec() {
    return --x;
  };
  return obj;
};

const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  let count = 0;
  function a(...arg) {
    if (count < n) {
      count++;
      return cb(...arg);
    }
    return null;
  }
  return a;
};

/* STRETCH PROBLEM */

const cacheFunction = (cb) => {
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
  const cache = {};
  function a(input) {
    if (Object.prototype.hasOwnProperty.call(cache, input)) {
      return cache[input];
    }
    cache[input] = cb(input);
    return cache[input];
  }
  return a;
};

/* eslint-enable no-unused-vars */

module.exports = {
  counter,
  counterFactory,
  cacheFunction,
  limitFunctionCallCount,
};
