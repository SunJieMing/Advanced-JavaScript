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
};

const map = (elements, cb) => {
  const array = [];
  for (let i = 0; i < elements.length; i++) {
    array.push(cb(elements[i]));
  }
  return array;
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
};

const reduce = (elements, cb, memo) => {
  let i = 0;
  if (!memo) {
    memo = elements[0];
    i = 1;
  }
  let total = memo; // 10
  for (; i < elements.length; i++) {
    total += elements[i];
  }
  return total;
};
  // Combine all elements into a single value going from left to right.
  // Elements will be passed one by one into `cb`.
  // `memo` is the starting value.  If `memo` is undefined then make `elements[0]` the initial value.


const find = (elements, cb) => {
  // Look through each value in `elements` and pass each element to `cb`.
  // If `cb` returns `true` then return that element.
  // Return `undefined` if no elements pass the truth test.
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i])) { // tai says look at this
      return elements[i];
    }
  }
};

const filter = (elements, cb) => {
  // Similar to `find` but you will return an array of all elements that passed the truth test
  // Return an empty array if no elements pass the truth test
  const array = [];
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i])) {
      array.push(elements[i]);
    }
  }
  return array;
};

const flatten = (elements) => {
  const newArray = [];
  elements.forEach((element) => {
    if (Array.isArray(element)) {
      const nestedArray = flatten(element);
      nestedArray.forEach((nestedElement) => {
        newArray.push(nestedElement);
      });
    } else {
      newArray.push(element);
    }
  });
  return newArray;
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
};
/* eslint-enable no-unused-vars, max-len */

module.exports = {
  each,
  map,
  reduce,
  find,
  filter,
  flatten
};
