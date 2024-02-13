//sum of a range
function mainRange(start , end) {
  let arrayOne = [];
  for (let i = start; i <= end; i++) {
    arrayOne.push(i);
  }
  return arrayOne;
}
console.log(mainRange(1, 10));

function range(start, end, step = start < end ? 1 : -1) {
  let array = [];
  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      array.push(i);
    }
  } else {
    for (let i = start; i >= end; i += step) {
      array.push(i);
    }
  }
  return array;
}
console.log(range(1, 10, 2));
console.log(range(5, 2, -1));

function sum(array) {
   let totalSum = 0;

   for(let value of array){

   totalSum += value;
   }
   return totalSum;
}
console.log(sum(range(1, 10)));

//Reversing an array
function reverseArray(array) {
  let outcome = [];
  for (let i = array.length-1; i >=0; i--) {
   outcome.push(array[i]);
    
  }
  return outcome;
  
}
console.log(reverseArray(["a", "b", "c"]));

//A list
function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = {
      value: array[i],
       rest :list};   
   }
   return list;
}
console.log(arrayToList([1,2,3]));
function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
    
  }
  return array;
}
console.log(listToArray(arrayToList([1,2,3])));

function prepend(value, list) {
  return {value , rest:list};
}
console.log(prepend(20 ,null));
function nth(list,num) {
  if(num == 0){
    return list.value;
  }
  else{
    return nth(list.rest, num-1)
  }
}
console.log(nth(arrayToList([1,2,3]),2));

//Deep Comparison
function deepEqual(x, y) {
  if (x == y) {
    return true ;
  }
  else if (x == null || typeof x !=' object' || y == null || typeof y != 'object'){
    return false;
  }
  let keysX = object.keys(x);
  let keysY = object.keys(y);
if (keysX.length != keysY.length) {
  return false;
}
  for (let key of keysX) {
    if (!keysY.includes(key) || !deepEqual(x[key], y[key])){
      return false;
    }
  return true;
}
  }
  let obj = {here: {is: "an"}, object: 2};
  console.log(deepEqual(obj, obj));
  // → true
  console.log(deepEqual(obj, {here: 1, object: 2}));
  // → false
  console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
  // → true