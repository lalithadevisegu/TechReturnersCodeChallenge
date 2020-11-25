/**
 * solution 1
 * Given an array of positive integers (the weights of the people), return a new array of two integers, where the first one is the total weight of team 1, 
 * and the second one is the total weight of team 2.
 */
function rowWeights(array) {
    var result = [0, 0];
    for(var i = 0; i < array.length; i++) 
    {
      if(i % 2) result[1] += array[i];
      else
        result[0] += array[i];
    }
    return result
  }

/** Solution 2 */

function rowWeights2(arr) {
    let t1 = arr.filter((i, index) => index % 2 === 0).reduce((result, i) => result + i, 0);
    let t2 = arr.filter((i, index) => index % 2 !== 0).reduce((result, i) => result + i, 0);
    return [t1, t2];
  }

module.exports = {
    rowWeights,
    rowWeights2
};