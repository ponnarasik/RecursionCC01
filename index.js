function decreasingSum(integer) {
   if (integer === 1){
      return integer;
   } else return integer + (decreasingSum(integer-1)); {
      decreasingSum()
      //call decreasingSum function again
   }
}

console.log(decreasingSum(5));