// Complete the following functions.
// These functions only need to work with arrays.
// Do NOT use the built in array methods to solve these. forEach, map, reduce, filter, includes, etc.
// You CAN use concat, push, pop, etc. but do not use the exact method that you are replicating
// You can use the functions that you have already written to help solve the other problems

const each = (elements, cb) => {
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i);
  }
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  // based off http://underscorejs.org/#each
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i);
  }
};

const map = (elements, cb) => {
  const newArr = [];
  for (let i = 0; i < elements.length; i++) {
    newArr.push(cb(elements[i]));
  }
  return newArr;
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
  const newArr = [];
  for (let i = 0; i < elements.length; i++) {
    newArr.push(cb(elements[i]));
  }
  return newArr;
};

const reduce = (elements, cb, memo = elements.shift()) => {
  if (memo === undefined) {
    memo = elements[0];
    for (let i = 0; i < elements.length; i++) {
      memo = cb(memo, elements[i]);
    }
  } else {
    for (let i = 0; i < elements.length; i++) {
      memo = cb(memo, elements[i]);
    }
    return memo;
  }
  // Combine all elements into a single value going from left to right.
  // Elements will be passed one by one into `cb`.
  // `memo` is the starting value.  If `memo` is undefined then make `elements[0]` the initial value.
  if (memo === undefined) memo = elements[0];
  for (let i = 0; i < elements.length; i++) {
    memo = cb(memo, elements[i]);
  }
  return memo;
};

const find = (elements, cb) => {
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i]) === true) return elements[i];
  }
  // Look through each value in `elements` and pass each element to `cb`.
  // If `cb` returns `true` then return that element.
  // Return `undefined` if no elements pass the truth test.
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i]) === true) return elements[i];
  }
};

const filter = (elements, cb) => {
  const newArr = [];
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i]) === true) newArr.push(elements[i]);
  }
  return newArr;
  // Similar to `find` but you will return an array of all elements that passed the truth test
  // Return an empty array if no elements pass the truth test
  const newArr = [];
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i]) === true) {
      newArr.push(elements[i]);
    }
  }
  return newArr;
};

const flatten = (elements) => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  // iterate through the array
  // determine if each element is an array or not
  // concat arrays down into elements
  // push all non-arrays into a new array
  const newArr = [];
  for (let i = 0; i < elements.length; i++) {
    if (Array.isArray(elements[i])) {
      elements = elements.concat(elements[i]);
    } else {
      newArr.push(elements[i]);
    }
  }
  return newArr;
};
// Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];

/* eslint-enable no-unused-vars, max-len */

module.exports = {
  each,
  map,
  reduce,
  find,
  filter,
  flatten
};
