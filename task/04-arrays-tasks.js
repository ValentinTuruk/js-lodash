'use strict';

const { isNumber } = require("lodash");

/*********************************************************************************************
 *                                                                                           *
 * Plese read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array    *
 *                                                                                           *
 * NOTE : Please do not use loops! All tasks can be implmeneted using standard Array methods *
 *                                                                                           *
 *********************************************************************************************/


/**
 * 1) Returns an index of the specified element in array or -1 if element is not found
 * 
 * @param {array} arr
 * @param {any} value
 * @return {number}
 * 
 * @example
 *    ['Ace', 10, true], 10    => 1 
 *    ['Array', 'Number', 'string'], 'Date'    => -1 
 *    [0, 1, 2, 3, 4, 5], 5    => 5
 */

// JS

function findElement(arr, value) {
   return arr.indexOf(value);
}

findElement(['Array', 'Number', 'string'], 'Date');

// Lodash

function findElementLo(arr, value) {
   return _.indexOf(arr, value);
}

findElementLo(['Ace', 10, true], 10);

/**
 * 2) Generates an array of odd numbers of the specified length
 * 
 * @param {number} len
 * @return {array}
 * 
 * @example
 *    1 => [ 1 ] 
 *    2 => [ 1, 3 ] 
 *    5 => [ 1, 3, 5, 7, 9 ]
 */

let arr = [1];
function generateOdds(len) {
   if (arr.length < len) {
      arr.push(arr[arr.length - 1] + 2);
      generateOdds(len)
   };

   return arr;
}

generateOdds(5);


/**
 * 3) Returns the doubled array - elements of the specified array are repeated twice using original order
 * 
 * @param {array} arr
 * @return {array}
 * 
 * @example
 *    ['Ace', 10, true]  => ['Ace', 10, true,   'Ace', 10, true]  
 *    [0, 1, 2, 3, 4, 5] => [0, 1, 2, 3, 4, 5,   0, 1, 2, 3, 4, 5]
 *    [] => [] 
 */

// JS

function doubleArray(arr) {
   return arr.concat(arr);
}

doubleArray(['Ace', 10, true]);

// Lodash

function doubleArrayLo(arr) {
   return _.concat(arr, arr);
}

doubleArrayLo(['Ace', 10, true]);

/**
 * 4) Returns an array of positive numbers from the specified array in original order
 * 
 * @param {array} arr
 * @return {array}
 * 
 * @example
 *    [ 0, 1, 2, 3, 4, 5 ] => [ 1, 2, 3, 4, 5 ]
 *    [-1, 2, -5, -4, 0] => [ 2 ]
 *    [] => [] 
 */

// JS

function getArrayOfPositives(arr) {
   const positivArray = [];
   arr.forEach((item) => {
      if (item > 0) {
         positivArray.push(item);
      }
   });
   return positivArray;
}

getArrayOfPositives([-1, 2, -5, -4, 0]);

// Lodash

function getArrayOfPositivesLo(arr) {
   return _.filter(arr, (i) => { return i > 0 })
}

getArrayOfPositivesLo([-1, 2, -5, -4, 0]);


/**
 * 5) Returns the array with strings only in the specified array (in original order)
 * 
 * @param {array} arr
 * @return {array}
 * 
 * @example
 *    [ 0, 1, 'cat', 3, true, 'dog' ] => [ 'cat', 'dog' ]
 *    [ 1, 2, 3, 4, 5 ] => []
 *    [ 'cat, 'dog', 'raccon' ] => [ 'cat', 'dog', 'racoon' ]
 */

// JS

function getArrayOfStrings(arr) {
   const arrayOfStrings = [];
   arr.forEach((item) => {
      if (typeof (item) === 'string') {
         arrayOfStrings.push(item);
      }
   });
   return arrayOfStrings;
}

getArrayOfStrings([0, 1, 'cat', 3, true, 'dog']);

// Lodash

function getArrayOfStringsLo(arr) {
   return _.filter(arr, (i) => { return typeof (i) === 'string' })
}

getArrayOfStringsLo([0, 1, 'cat', 3, true, 'dog']);

/**
 * 6) Removes falsy values from the specified array
 * Falsy values: false, null, 0, "", undefined, and NaN.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean#Description)
 * 
 * @param {array} arr
 * @return {array}
 * 
 * @example
 *    [ 0, false, 'cat', NaN, true, '' ] => [ 'cat', true ]
 *    [ 1, 2, 3, 4, 5, 'false' ]         => [ 1, 2, 3, 4, 5, 'false' ]
 *    [ false, 0, NaN, '', undefined ]   => [ ]
 */

// JS

function removeFalsyValues(arr) {
   const arrayOfTrulyValues = [];
   arr.forEach((item) => {
      if (item) {
         arrayOfTrulyValues.push(item);
      }
   });
   return arrayOfTrulyValues;
}

removeFalsyValues([false, 0, NaN, '', undefined, 'cat', NaN, true, ''])

// Lodash

function removeFalsyValuesLo(arr) {
   return _.compact(arr);
}

removeFalsyValuesLo([false, 0, NaN, '', undefined, 'cat', NaN, true, ''])


/**
 * 7) Returns the array of useprcase strings from the specified array
 * 
 * @param {array} arr
 * @return {array}
 * 
 * @example
 *    [ 'permanent-internship', 'glutinous-shriek', 'multiplicative-elevation' ] => [ 'PERMANENT-INTERNSHIP', 'GLUTINOUS-SHRIEK', 'MULTIPLICATIVE-ELEVATION' ]
 *    [ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ]  => [ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ]
 */

// JS

function getUpperCaseStrings(arr) {
   const arrayInUppeacase = arr.map(item => item.toUpperCase());
   return arrayInUppeacase;
}

getUpperCaseStrings(['permanent-internship', 'glutinous-shriek', 'multiplicative-elevation', 'B', 'C', 'D', 'E', 'F', 'G'])

// Lodash

function getUpperCaseStringsLo(arr) {
   return _.map(arr, (i) => { return _.upperCase(i) });
}

getUpperCaseStringsLo(['permanent-internship', 'glutinous-shriek', 'multiplicative-elevation', 'a', 'b', 'c', 'd', 'e', 'f', 'g'])


/**
 * 8) Returns the array of string lengths from the specified string array.
 * 
 * @param {array} arr
 * @return {array}
 * 
 * @example
 *    [ '', 'a', 'bc', 'def', 'ghij' ]  => [ 0, 1, 2, 3, 4 ]
 *    [ 'angular', 'react', 'ember' ] => [ 7, 5, 5 ]
 */

//JS 

function getStringsLength(arr) {
   return arr.map(item => item.length);
}

getStringsLength(['', 'a', 'bc', 'def', 'ghij', 'react', 'ember'])

// Lodash

function getStringsLengthLo(arr) {
   return _.map(arr, i => i.length);
}

getStringsLengthLo(['', 'a', 'bc', 'def', 'ghij', 'react', 'ember'])


/**
 * 9) Inserts the item into specified array at specified index
 * 
 * @param {array} arr
 * @param {any} item
 * @param {number} index 
 * 
 * @example
 *    [ 1, 3, 4, 5 ], 2, 1  => [ 1, 2, 3, 4, 5 ]
 *    [ 1, 'b', 'c'], 0, 'x'  => [ 'x', 1, 'b', 'c' ]
 */

function insertItem(arr, item, index) {
   arr.splice(index, 0, item);
   return arr;
}

insertItem([1, 'b', 'c'], 'x', 0);


/**
 * 10) Returns the n first items of the specified array
 * 
 * @param {array} arr
 * @param {number} n 
 * 
 * @example
 *    [ 1, 3, 4, 5 ], 2  => [ 1, 2 ]
 *    [ 'a', 'b', 'c', 'd'], 3  => [ 'a', 'b', 'c' ]
 */

// JS

function getHead(arr, n) {
   return arr.slice(0, n)
}

getHead(['a', 'b', 'c', 'd'], 3);

// Lodash

function getHeadLo(arr, n) {
   return _.take(arr, n);
}

getHeadLo(['a', 'b', 'c', 'd'], 3);

/**
 * 11) Returns the n last items of the specified array
 * 
 * @param {array} arr
 * @param {number} n 
 * 
 * @example
 *    [ 1, 3, 4, 5 ], 2  => [ 4, 5 ]
 *    [ 'a', 'b', 'c', 'd'], 3  => [ 'b', 'c', 'd' ]
 */

// JS

function getTail(arr, n) {
   return arr.slice(-n);
}

getTail(['a', 'b', 'c', 'd'], 3);

// Lodash

function getTailLo(arr, n) {
   return _.takeRight(arr, n);
}

getTailLo(['a', 'b', 'c', 'd'], 3);


/**
 * 12) Returns CSV represebtation of two-dimentional numeric array.
 * https://en.wikipedia.org/wiki/Comma-separated_values
 * 
 * @param {array} arr
 * @return {string}
 * 
 * @example
 *    [
 *       [  0, 1, 2, 3, 4 ],
 *       [ 10,11,12,13,14 ],
 *       [ 20,21,22,23,24 ],
 *       [ 30,31,32,33,34 ]
 *    ] 
 *           => 
 *     '0,1,2,3,4\n'
 *    +'10,11,12,13,14\n'
 *    +'20,21,22,23,24\n'
 *    +'30,31,32,33,34'
 */

// JS

function toCsvText(arr) {
   return arr.join(',');
}

toCsvText([
   [0, 1, 2, 3, 4],
   [10, 11, 12, 13, 14],
   [20, 21, 22, 23, 24],
   [30, 31, 32, 33, 34]
]);

// Lodash

function toCsvTextLo(arr) {
   return _.join(arr, ',')
}

toCsvTextLo([
   [0, 1, 2, 3, 4],
   [10, 11, 12, 13, 14],
   [20, 21, 22, 23, 24],
   [30, 31, 32, 33, 34]
]);


/**
 * 13) Transforms the numeric array into the according array of squares:
 *   f(x) = x * x
 * 
 * @param {array} arr
 * @return {array}
 * 
 * @example
 *   [ 0, 1, 2, 3, 4, 5 ] => [ 0, 1, 4, 9, 16, 25 ]
 *   [ 10, 100, -1 ]      => [ 100, 10000, 1 ]
 */

// JS

function toArrayOfSquares(arr) {
   return arr.map(item => item ** 2);
}

toArrayOfSquares([0, 1, 2, 3, 4, 5, 10, 100, -1]);

// Lodash

function toArrayOfSquaresLo(arr) {
   function square(i) {
      return i ** 2
   }
   return _.map(arr, square);
}

toArrayOfSquaresLo([0, 1, 2, 3, 4, 5, 10, 100, -1]);


/**
 * 14) Transforms the numeric array to the according moving sum array:
 *     f[n] = x[0] + x[1] + x[2] +...+ x[n] 
 *  or f[n] = f[n-1] + x[n]
 * 
 * @param {array} arr
 * @return {array}
 * 
 * Example :
 *   [ 1, 1, 1, 1, 1 ]        => [ 1, 2, 3, 4, 5 ]
 *   [ 10, -10, 10, -10, 10 ] => [ 10, 0, 10, 0, 10 ]
 *   [ 0, 0, 0, 0, 0]         => [ 0, 0, 0, 0, 0] 
 *   [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] => [ 1, 3, 6, 10, 15, 21, 28, 36, 45, 55 ]
 */

// JS

function getMovingSum(arr) {
   let arrayOfSums = [];
   let sum = 0;
   arr.forEach((item) => {
      sum += item
      arrayOfSums.push(sum);
   }, 0);
   return (arrayOfSums);
}

getMovingSum([10, -10, 10, -10, 10]);

// Lodash

function getMovingSumLo(arr) {
   let arrayOfSums = [];
   let sum = 0;
   _.forEach(arr, (item) => {
      sum += item
      arrayOfSums.push(sum);
   }, 0);
   return (arrayOfSums);
}

getMovingSumLo([10, -10, 10, -10, 10]);


/**
 * 15) Returns every second item from the specified array:
 * 
 * @param {array} arr
 * @return {array}
 * 
 * Example :
 * [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] => [ 2, 4, 6, 8, 10 ]
 * [ 'a', 'b', 'c' , null ]  => [ "b", null ]
 * [ "a" ] => []
 */

// JS

function getSecondItems(arr) {
   const everySecond = [];
   arr.forEach((item, index) => {
      if (index % 2 === 1) {
         everySecond.push(item);
      }
   });
   return everySecond;
}

getSecondItems([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'a', 'b', 'c', null])

// Lodash

function getSecondItemsLo(arr) {
   return _.remove(arr, (item, index) => {
      return index % 2 === 1
   });
}

getSecondItemsLo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'a', 'b', 'c', null])


/**
 * 16 )Propagates every item in sequence its position times
 * Returns an array that consists of: one first item, two second items, tree third items etc. 
 * 
 * @param {array} arr 
 * @return {array}
 * 
 * @example :
 *  [] => []
 *  [ 1 ] => [ 1 ]
 *  [ 'a', 'b' ] => [ 'a', 'b','b' ]
 *  [ 'a', 'b', 'c', null ] => [ 'a', 'b','b', 'c','c','c',  null,null,null,null ]
 *  [ 1,2,3,4,5 ] => [ 1, 2,2, 3,3,3, 4,4,4,4, 5,5,5,5,5 ]
 */

// JS

function propagateItemsByPositionIndex(arr) {
   let arrayOfArrays = []
   arr.forEach((item, index, array) => {
      const middleArray = new Array(index + 1);
      middleArray.fill(item);
      arrayOfArrays.push(middleArray);
   });
   const multipleArray = [].concat.apply([], arrayOfArrays);
   return multipleArray;
}

propagateItemsByPositionIndex(['a', 'b', 'c', null]);

// Lodash

function propagateItemsByPositionIndexLo(arr) {
   const arrayOfArrays = _.map(arr, (item, index) => {
      return _.fill(Array(index + 1), item);
   });

   return _.flatten(arrayOfArrays);
}

propagateItemsByPositionIndexLo(['a', 'b', 'c', null]);



/** 
 * 17) Returns the 3 largest numbers from the specified array
 * 
 * @param {array} arr
 * @return {array}
 *
 * @example
 *   [] => []
 *   [ 1, 2 ] => [ 2, 1 ]
 *   [ 1, 2, 3 ] => [ 3, 2, 1 ]
 *   [ 1,2,3,4,5,6,7,8,9,10 ] => [ 10, 9, 8 ]
 *   [ 10, 10, 10, 10 ] => [ 10, 10, 10 ]
 */

// JS 

function get3TopItems(arr) {
   const topThreeAaaray = arr.sort((a, b) => b - a).slice(0, 3);
   return topThreeAaaray
}

get3TopItems([1, 2, 3, 4, 10, 5, 6, 7, 8, 9, 10]);

// Lodash

function get3TopItemsLo(arr) {
   return _.take(arr.sort((a, b) => b - a), 3);
}

get3TopItemsLo([1, 2, 3, 4, 10, 5, 6, 7, 8, 9, 10]);


/**  
 * 18) Returns the number of positive numbers from specified array
 * 
 * @param {array} arr
 * @return {number}
 * 
 * @example
 *   [ ]          => 0
 *   [ -1, 0, 1 ] => 1
 *   [ 1, 2, 3]   => 3
 *   [ null, 1, 'elephant' ] => 1
 *   [ 1, '2' ] => 1
 */

// JS

function getPositivesCount(arr) {
   return arr.filter(item => typeof (item) === 'number' && item > 0).length;
}

getPositivesCount([-1, 0, 1, null, 1, 'elephant', '2']);

// Lodash

function getPositivesCountLo(arr) {
   return _.filter(arr, item => _.isNumber(item) && item > 0).length;
}

getPositivesCountLo([-1, 0, 1, null, 1, 'elephant', '2']);


/** 
 * 19) Sorts digit names
 * 
 * @param {array} arr
 * @return {array}
 * 
 * @example
 *   [] => []
 *   [ 'nine','one' ]                 => [ 'one', 'nine' ]
 *   [ 'one','two','three' ]          => [ 'one','two', 'three' ]
 *   [ 'nine','eight','nine','eight'] => [ 'eight','eight','nine','nine']
 *   [ 'one','one','one','zero' ]     => [ 'zero','one','one','one' ]
 */

// JS

function sortDigitNamesByNumericOrder(arr) {
   const digitList = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
   arr.sort((a, b) => digitList.indexOf(a) - digitList.indexOf(b));
   return arr;
}

sortDigitNamesByNumericOrder(['one', 'one', 'one', 'zero', 'one', 'two', 'three', 'nine', 'eight', 'nine', 'eight']);

// Lodash

function sortDigitNamesByNumericOrderLo(arr) {
   const digitList = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
   function sort(a, b) {
      return _.indexOf(digitList, a) - _.indexOf(digitList, b)
   }
   return _.sortBy(arr, sort);

}

sortDigitNamesByNumericOrderLo(['one', 'one', 'one', 'zero', 'one', 'two', 'three', 'nine', 'eight', 'nine', 'eight']);


/** 
 * 20) Returns the sum of all items in the specified array of numbers
 * 
 * @param {array} arr
 * @return {number}
 * 
 * @example
 *   [] => 0
 *   [ 1, 2, 3 ]           => 6
 *   [ -1, 1, -1, 1 ]      => 0
 *   [ 1, 10, 100, 1000 ]  => 1111
 */

// JS

function getItemsSum(arr) {
   return arr.reduce((sum, item) => sum + item, 0);
}

getItemsSum([1, 10, 100, 1000]);

// Lodash

function getItemsSumLo(arr) {
   function sum(sum, item) {
      return sum + item
   }
   return _.reduce(arr, sum, 0);
}

getItemsSumLo([1, 10, 100, 1000]);


/** 
 * 21) Returns the number of all falsy value in the specified array
 * 
 * @param {array} arr
 * @return {array}
 * 
 * @example
 *  [] => 0
 *  [ 1, '', 3 ] => 1
 *  [ -1, 'false', null, 0 ] => 2
 *  [ null, undefined, NaN, false, 0, '' ]  => 6
 */

// JS

function getFalsyValuesCount(arr) {
   const falsyValues = [];
   arr.forEach(item => {
      if (!item) {
         falsyValues.push(item);
      }
   });
   return falsyValues.length;
}

getFalsyValuesCount([-1, 'false', null, 0, 1, '', 3, null, undefined, NaN, false, 0, '']);

// Lodash

function getFalsyValuesCountLo(arr) {
   const truthlyArray = _.compact(arr);
   const falsyArray = _.difference(arr, truthlyArray);
   return falsyArray.length;
}

getFalsyValuesCountLo([-1, 'false', null, 0, 1, '', 3, null, undefined, NaN, false, 0, '']);


/**
 * 22) Returns a number of all occurences of the specified item in an array  
 * 
 * @param {array} arr
 * @param {any} item 
 * @return {number}
 * 
 * @example
 *    [ 0, 0, 1, 1, 1, 2 ], 1 => 3
 *    [ 1, 2, 3, 4, 5 ], 0 => 0
 *    [ 'a','b','c','c' ], 'c'=> 2
 *    [ null, undefined, null ], null => 2 
 *    [ true, 0, 1, 'true' ], true => 1
 */

// JS

function findAllOccurences(arr, item) {
   return arr.filter(value => value === item).length;
}

findAllOccurences([true, 0, 1, 'true'], true);

// Lodash #1

function findAllOccurencesLo(arr, item) {
   const baseLength = arr.length;
   const lenthWithoutItem = _.pull(arr, item).length
   return baseLength - lenthWithoutItem;
}

findAllOccurencesLo([true, 0, 1, 'true'], true);

// Lodash #2

function findAllOccurencesLoTwo(arr, item) {
   return _.countBy(arr, (i) => i === item)[true];
}

findAllOccurencesLoTwo([true, 0, 1, 'true'], true);



/**
 * 23) Concatenates all elements from specified array into single string with ',' delimeter  
 * 
 * @param {array} arr 
 * @return {string}
 * 
 * @example
 *    [0, false, 'cat', NaN, true, '']  => '0,false,cat,NaN,true,'
 *    [1, 2, 3, 4, 5]                   => '1,2,3,4,5'
 *    ['rock', 'paper', 'scissors']     => 'rock,paper,scissors'
 */

// JS

function toStringList(arr) {
   return arr.join(',');
}

toStringList([0, false, 'cat', NaN, true, '']);

// Lodash

function toStringListLo(arr) {
   return _.join(arr, ',')
}

toStringListLo([0, false, 'cat', NaN, true, '']);


/**
 * 24) Sorts the specified array by country name first and city name (if countries are equal) in ascending order.
 * 
 * @param {array} arr
 * @return {array}
 * 
 * @example
 *    [
 *      { country: 'Russia',  city: 'Moscow' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland',  city: 'Warsaw' },
 *      { country: 'Russia',  city: 'Saint Petersburg' },
 *      { country: 'Poland',  city: 'Krakow' },
 *      { country: 'Belarus', city: 'Brest' }
 *    ]  
 *                      =>
 *    [
 *      { country: 'Belarus', city: 'Brest' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland',  city: 'Krakow' },
 *      { country: 'Poland',  city: 'Warsaw' },
 *      { country: 'Russia',  city: 'Moscow' },
 *      { country: 'Russia',  city: 'Saint Petersburg' }
 */

const list = [
   { country: 'Russia', city: 'Moscow' },
   { country: 'Belarus', city: 'Minsk' },
   { country: 'Poland', city: 'Warsaw' },
   { country: 'Russia', city: 'Saint Petersburg' },
   { country: 'Poland', city: 'Krakow' },
   { country: 'Belarus', city: 'Brest' }
]

// JS

function sortCitiesArray(arr) {
   return arr.sort((a, b) => {
      if (a.country > b.country) {
         return 1;
      } else if (a.country < b.country) {
         return - 1;
      } else if (a.city > b.city) {
         return 1;
      } else if (a.city < b.city) {
         return - 1;
      } else {
         return 0;
      }
   });
}

sortCitiesArray(list);

// Lodash

function sortCitiesArrayLo(arr) {
   return _.orderBy(arr, ['country', 'city'], ['asc', 'asc'])
}

sortCitiesArrayLo(list);


/**
 * 25) Creates an indentity matrix of the specified size
 * 
 * @param {number} n
 * @return {array}
 * 
 * @example
 *     1  => [[1]]
 *  
 *     2 => [[1,0],
 *           [0,1]]
 * 
 *          [[1,0,0,0,0],
 *           [0,1,0,0,0],
 *     5 =>  [0,0,1,0,0],
 *           [0,0,0,1,0],
 *           [0,0,0,0,1]]   
 */

// JS

function getIdentityMatrix(n) {
   const array = Array(n).fill(0);
   const arrayOfArrays = new Array(n);

   array.forEach((item, index) => {
      const childArray = Array(n).fill(0);
      childArray[index] = 1;
      arrayOfArrays[index] = childArray;
   })

   return arrayOfArrays;
}

getIdentityMatrix(5);

// Lodash

function getIdentityMatrixLo(n) {
   const zeroArray = _.fill(Array(n), 0);
   const arrayOfArrays = new Array(n);

   _.forEach(zeroArray, (item, index) => {
      const childArray = _.fill(Array(n), 0);
      childArray[index] = 1;
      arrayOfArrays[index] = childArray;
   })
   return arrayOfArrays;
}

getIdentityMatrixLo(5);


/**
 * 26) Creates an array of integers from the specified start to end (inclusive)
 * 
 * @param {number} start
 * @param {number} end
 * @return {array}
 * 
 * @example
 *     1, 5  => [ 1, 2, 3, 4, 5 ]
 *    -2, 2  => [ -2, -1, 0, 1, 2 ]
 *     0, 100 => [ 0, 1, 2, ..., 100 ]
 *     3, 3   => [ 3 ]
 */

// JS

function getIntervalArray(start, end) {
   const arr = new Array(end - start + 1);
   arr.fill(0);
   const intervalArray = arr.map((item, index) => {
      return start + index;
   })
   return intervalArray
}

getIntervalArray(-2, 27);

// Lodash

function getIntervalArrayLo(start, end) {
   const arr = _.fill(Array(end - start + 1), 0);
   const intervalArray = _.map(arr, (item, index) => {
      return start + index;
   })
   return intervalArray
}

getIntervalArrayLo(-2, 27);


/**
 * 27) Returns array containing only unique values from the specified array.
 *
 * @param {array} arr
 * @return {array}
 * 
 * @example
 *   [ 1, 2, 3, 3, 2, 1 ] => [ 1, 2, 3 ]
 *   [ 'a', 'a', 'a', 'a' ]  => [ 'a' ]
 *   [ 1, 1, 2, 2, 3, 3, 4, 4] => [ 1, 2, 3, 4]
 */

// JS

function distinct(arr) {
   const set = new Set(arr);
   const arrayOfUnique = Array.from(set);
   return arrayOfUnique;
}

distinct([1, 1, 2, 2, 3, 3, 4, 4]);

// Lodash

function distinctLo(arr) {
   return _.uniq(arr);
   /* secong way
      return _.intersection(arr);
   */
}

distinctLo([1, 1, 2, 2, 3, 3, 4, 4]);



/**
 * 28) Groups elements of the specified array by key.
 * Returns multimap of keys extracted from array elements via keySelector callback
 * and values extracted via valueSelector callback.
 * See: https://en.wikipedia.org/wiki/Multimap
 *
 * @param {array} array
 * @param {Function} keySelector
 * @param {Function} valueSelector
 * @return {Map}
 *
 * @example
 *   group([
 *      { country: 'Belarus', city: 'Brest' },
 *      { country: 'Russia', city: 'Omsk' },
 *      { country: 'Russia', city: 'Samara' },
 *      { country: 'Belarus', city: 'Grodno' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland', city: 'Lodz' }
 *     ], 
 *     item => item.country, 
 *     item => item.city
 *   )
 *            => 
 *   Map {
 *    "Belarus" => ["Brest", "Grodno", "Minsk"],
 *    "Russia" => ["Omsk", "Samara"], 
 *    "Poland" => ["Lodz"]
 *   }
 */

const cityList = [
   { country: 'Belarus', city: 'Brest' },
   { country: 'Russia', city: 'Omsk' },
   { country: 'Russia', city: 'Samara' },
   { country: 'Belarus', city: 'Grodno' },
   { country: 'Belarus', city: 'Minsk' },
   { country: 'Poland', city: 'Lodz' }
];


// JS
/*
function group(array, keySelector, valueSelector) {
   const map = new Map();

   array.forEach((item, index, array) => {
      const country = keySelector(item);
      const city = valueSelector(item);
      if (!map.has(country)) {
         map.set(country, city)
      } else {
         let arrayAddCity = [];
         arrayAddCity.push(map.get(country));
         arrayAddCity.push(city);
         const flatArrayCities = arrayAddCity.flat(1);
         map.set(country, flatArrayCities);
      }
   })
   console.log(map);
}

group(cityList,
   item => item.country,
   item => item.city
);
*/
// Lodash

function groupLo(array, keySelector) {
   return _.groupBy(array, keySelector);
}

groupLo(cityList,
   item => item.country  
);

/**
 * 29) Projects each element of the specified array to a sequence and flattens the resulting sequences into one array.
 *
 * @param {array} arr
 * @param {Function} childrenSelector, a transform function to apply to each element that returns an array of children
 * @return {array}
 * 
 * @example
 *   [[1, 2], [3, 4], [5, 6]], (x) => x     =>   [ 1, 2, 3, 4, 5, 6 ]
 *   ['one','two','three'], x=>x.split('')  =>   ['o','n','e','t','w','o','t','h','r','e','e']
 */
function selectMany(arr, childrenSelector) {
   const newArray = arr.map(childrenSelector);
   const flatArray = [].concat.apply([], newArray);
   return flatArray;
}

selectMany(['one', 'two', 'three'], x => x.split(''));

/**
 * 30) Returns an element from the multidimentional array by the specified indexes.
 *
 * @param {array} arr
 * @param {array} indexes
 * @return {any} element from array
 * 
 * @example
 *   [[1, 2], [3, 4], [5, 6]], [0,0]  => 1        (arr[0][0]) 
 *   ['one','two','three'], [2]       => 'three'  (arr[2]) 
 *   [[[ 1, 2, 3]]], [ 0, 0, 1 ]      => 2        (arr[0][0][1])
 */
function getElementByIndexes(arr, indexes) {
   let currentArrayLevel = arr;
   for (let i of indexes) {
      currentArrayLevel = currentArrayLevel[i];
   }
   return currentArrayLevel;
}

getElementByIndexes([[[1, 2, 3]]], [0, 0, 1])

/**
 * 31) Swaps the head and tail of the specified array:
 * the head (first half) of array move to the end, the tail (last half) move to the start. 
 * The middle element (if exists) leave on the same position.
 * 
 *  
 * @param {array} arr
 * @return {array}
 * 
 * @example
 *   [ 1, 2, 3, 4, 5 ]   =>  [ 4, 5, 3, 1, 2 ]
 *    \----/   \----/         
 *     head     tail 
 *
 *   [ 1, 2 ]  => [ 2, 1 ] 
 *   [ 1, 2, 3, 4, 5, 6, 7, 8 ]   =>  [ 5, 6, 7, 8, 1, 2, 3, 4 ]   
 * 
 */
function swapHeadAndTail(arr) {
   let arrTailHead = arr.slice(Math.ceil(arr.length / 2));

   if (!(arr.length % 2 === 0)) {
      arrTailHead.push(arr[Math.floor(arr.length / 2)])
   }

   for (let i = 0; i < Math.floor(arr.length / 2); ++i) {
      arrTailHead.push(arr[i]);
   }
   return arrTailHead;
}

swapHeadAndTail([1, 2, 3, 4, 5, 6, 7, 8, 9]);

module.exports = {
   findElement: findElement,
   generateOdds: generateOdds,
   doubleArray: doubleArray,
   getArrayOfPositives: getArrayOfPositives,
   getArrayOfStrings: getArrayOfStrings,
   removeFalsyValues: removeFalsyValues,
   getUpperCaseStrings: getUpperCaseStrings,
   getStringsLength: getStringsLength,
   insertItem: insertItem,
   getHead: getHead,
   getTail: getTail,
   toCsvText: toCsvText,
   toStringList: toStringList,
   toArrayOfSquares: toArrayOfSquares,
   getMovingSum: getMovingSum,
   getSecondItems: getSecondItems,
   propagateItemsByPositionIndex: propagateItemsByPositionIndex,
   get3TopItems: get3TopItems,
   getPositivesCount: getPositivesCount,
   sortDigitNamesByNumericOrder: sortDigitNamesByNumericOrder,
   getItemsSum: getItemsSum,
   getFalsyValuesCount: getFalsyValuesCount,
   findAllOccurences: findAllOccurences,
   sortCitiesArray: sortCitiesArray,
   getIdentityMatrix: getIdentityMatrix,
   getIntervalArray: getIntervalArray,
   distinct: distinct,
   group: group,
   selectMany: selectMany,
   getElementByIndexes: getElementByIndexes,
   swapHeadAndTail: swapHeadAndTail
};
