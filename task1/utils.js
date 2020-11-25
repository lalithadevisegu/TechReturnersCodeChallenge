// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. 
// Your task will be to return the sum of the numbers that occur only once.
// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15.
// More examples in the test cases below. 

function singles(arr){

    if (arr === undefined) throw new Error("array is required");
    let res = 0;
    for(let i = 0; i < arr.length; i++){
      if(arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])){
         continue;
      };
      res += arr[i];
   };
   return res;
}


// const sumUnique = arr => {
//    let res = 0;
//    for(let i = 0; i < arr.length; i++){
//       if(arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])){
//          continue;
//       };
//       res += arr[i];
//    };
//    return res;
// };
module.exports =  singles