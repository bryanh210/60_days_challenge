/**
 * 2f. Given a base and an exponent, create a function to find the power
 *
 * Input:   base {Integer}
 * Input:   exponent {Integer}
 * Output:  {Integer}
 *
 * Example: power(3, 4) => 81
 *
 * 1 --> 3 --> 9 --> 27 --> 81
 */

 function power(base, exponent){
   let result = 1;

   function multiply(count){
     // count === exponent b/c we start from 0
     if(count === exponent){ return; }
     console.log(count)
     result *= base;
     // +1, not ++, since 0++ isn't valid
     multiply(count +1);
   }
   multiply(0);
   return result;
 }

 power(3,4);

 /**
  * 2g. Merge two sorted arrays
  *
  * Input:   arr1 {Array}
  * Input:   arr2 {Array}
  * Output:  Array
  *
  * Example: merge([1, 4, 7], [2, 3, 6, 9]) => [1, 2, 3, 4, 6, 7, 9]
  */
 function merge(arr1, arr2){
   
 }
