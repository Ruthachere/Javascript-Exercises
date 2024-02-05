//looping a Triangle
for (let index = "#"; index.length < 8; index += "#") {
    console.log(index);   
}
//FIZZBUZZ
for (let i = 0; i <= 100; i++) {
    if (i % 3 == 0) {
       console.log("Fizz"); 
    }
    else if (i % 5 == 0) {
        console.log("Buzz");
       }
       else{
        console.log(i);
       }
    
    
}
for (let i = 0; i <= 100; i++) {
     if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
       }
     else if (i % 3 == 0) {
       console.log("Fizz"); 
    }
    else if (i % 5 == 0) {
        console.log("Buzz");
       }
       
       else{
        console.log(i);
       }    
}
//CHEESEBOARD
let size = 8;
let grid = "";
for (let width = 0; width < size; width++) {
for (let height = 0; height < size ; height++) {
    if ((width + height )% 2 == 0) {
      grid += " ";  
    }else{
        grid += "#";
    }
    
}
grid += "\n"
    
}
console.log(grid);