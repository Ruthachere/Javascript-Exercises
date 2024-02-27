//Flattening
let array = [ [1,2,3], ['a','b']];
console.log(array.reduce((flat,current) => flat.concat(current), []));

//loop
function loop(start, test, update, body) {
    for (let value = start ; test(value); value = update(value)) {
        body(value)
    }
    
}
loop(3, n => n > 0, n => n - 3, console.log);

//Everything
function every(array, predicate) {
    for(let element of array){
        if (!predicate(element)) {
            return false;
        }else{
            return true;
        }
    }
}
function every2(array, predicate) {
    return !array.some(element => !predicate(element));
}
console.log(every2([1, 13, 25], n => n < 10));
// → false
console.log(every([1, 2, 5], n => n < 10));
// → true

//Dominant Writing Direction
function dominantDirection(text) {
    let scripts = countBy(text, char =>{
        let script = characterScript(char.codePointAt(0));
        return script ? script.name : "none";
    }).filter(({name}) => name != "none");
    if (scripts.length == 0) {
        return ltr
    } else {
        return scripts.reduce((a, b) => a.count > b.count ? a : b).name;
    }
}
console.log(dominantDirection("Hi"));
// → ltr
console.log(dominantDirection("Hello, مساء الخير"));
// → rtl