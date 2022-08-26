"use strict";

let getA = a => a;
console.log(getA(1));

var a = 4;
let Square = () => { return a *a};
console.log(Square());

let mult = (a,b) => {return a*b};
console.log(mult(2,4));

//Nan example 

var x = function(){
    
    this.val = 1;
    setTimeout(() => {
        this.val++;
        console.log(this.val)
    }, 1)
};

var xx = new x();

var y = (...n) => {
    console.log(n[0])
};

y(5,2,3);

// solution of task 12 in advance javascript

class Students {
    constructor(name,age,marks){
        this.name = name;
        this.age = age;
        this.marks =marks;
    }
    setPlacementAge(minimumPlacementAge){
        console.log(this);
        return (minMarks) => {
            console.log(this)
            if(this.marks>minMarks && this.age > minimumPlacementAge){
                console.log(`${this.name} is ready for placement`)
            }else {
                console.log(`${this.name} is not ready for placement`)
            }
        }
    }
}


const shivam = new Students('shivam',20,67);
const saroj = new Students('saroj',21,65);

shivam.setPlacementAge(18)(40);



