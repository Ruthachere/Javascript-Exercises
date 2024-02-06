//Minimum value
function minValue(x , y) {
    if (x < y) {
       console.log(x);
    } else {
       console.log(y);
    }
}
minValue(20,10);

//Recursion

function isEven(N) {
    if ( N == 0) {
        return true ;
    } else if(N == 1){
         return false ;
    }
    else if(N < 0){
        return isEven(-N) ;
   }else{
        return isEven(N-2);
    }   
    
}
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

//Bean counting
function countChar(string, ch) {
    let count = 0;
    for (let index = 0; index < string.length; index++) {
      if (string[index] == ch) {
        count += 1;
      }
    }
    return count;
  }
function countBs(string) {
  return countChar(string, "B");
}
console.log(countBs("BbkjkcjxkjBC"));

console.log(countChar("Honorine", "n"));
