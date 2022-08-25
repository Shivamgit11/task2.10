var obj = {num:2};
var obj2 = {num:5};
var addToThis = function(a, b, c) {
    return this.num + a + b + c;
}

console.log(addToThis.call(obj, 1, 2, 3));  // functionname.call(obj, fuction arguments)

// Using apply function
var arr = [2,3,4];
console.log(addToThis.apply(obj, arr));
console.log(addToThis.apply(obj2, arr));

// Using Bind
var bound = addToThis.bind(obj);

console.dir(bound);

console.log(bound(1,2,3));

// question

var student1 = {age: 21};

var printdetails = function(a) {
    return `the student ${a} is ${this.age}  is years old`;
} 

console.log(printdetails.call(student1, 'shivam'))




