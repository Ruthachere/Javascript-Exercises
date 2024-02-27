//A VECTOR TYPE
class Vec{
constructor(x, y){
    this.x = x;
    this.y = y;
}
plus(z){
    return new Vec(this.x + z.x , this.y + z.y);
}
minus(z){
    return new Vec(this.x - z.x, this.y - z.y);
}
get length() {
    return Math.sqrt(this.x * this.x, this.y * this.y);
}
}

console.log(new Vec(1, 2).plus(new Vec(3, 4)));
console.log(new Vec(5, 6).minus(new Vec(3, 4)));
console.log(new Vec(1, 2).length);

//GROUPS
class Group {
    constructor(){
        this.element = [];
    }
    add(value){
        if (!this.has(value)) {
            this.element.push(value);  
        }
    }

    delete(value){
       this.element.filter(z => !z == value );
    }
    has(value){
        this.element.includes(value);
    }
    static from(collection) {
        let group = new Group;
        for (let value of collection) {
          group.add(value);
        }
        return group;
      }

}
//Borrowing a method
let map = {one: true, two: true, hasOwnProperty: true};

console.log(Object.prototype.hasOwnProperty.call(map, "three"));
// → true