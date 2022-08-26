// 'use strict';
// // House
// this.table = 'window table';

// // this inside a function
// // const cleanTable = function (soap) {
    
// //     const innerfunction = (_soap) => {
// //         console.log(`cleaning ${this.table} using ${_soap}`);
// //     }
// //     innerfunction(soap);
// // };

// // call functionn
// // cleanTable.call(this, 'some soap');
// // cleanTable()
// this.garage = {
//     table: 'garage table',
//     cleantable () {
//         console.log(`cleaning ${this.table}`)
//     }
// };

// // this inside an object

// // let johnsroom = {
// //     table: 'johns table'
// // };
// // console.log(johnsroom.table)

// //Method
// // let johnsroom = {
// //     table: 'johns table',
// //     cleantable () {
// //         console.log(`cleaning ${this.table}`)
// //     }
// // };
// // // johnsroom.cleantable();
// // // this.garage.cleantable();
// // cleanTable.call(this, 'some soap');
// // cleanTable.call(this.garage, 'some soap');
// // cleanTable.call(johnsroom, 'some soap');
// class createroom {
//     constructor(name){
//         this.table = `${name}s table`
//     }
//     cleanTable(soap){
//         console.log(`cleaning ${this.table} using ${soap}`);
//     }
// }


// // let createroom = function(name){
// //     this.table = `${name} table`
// // }

// // createroom.prototype.cleanTable = function(soap){
// //     console.log(`cleaning ${this.table} using ${soap}`);
// // }

// const jillsroom = new createroom('jill');
// const johnsroom = new createroom ('john');

// jillsroom.cleanTable('some soap');
// johnsroom.cleanTable('some soap');

class student {
    static count=0;
    constructor(name,age,ph_no,mark){
        this.name = name;
        this.age = age;
        this.ph_no = ph_no;
        this.mark = mark;
        // student.countStudent();
        student.count++;
    }
    // static countStudent = {
        
    //     return (student.count++);
    // }
    // student.count++;
    eligible() {
            if(this.mark>40) {
                console.log(`${this.name} age ${this.age} is eligible`);
            }else {
                console.log(`${this.name} age ${this.age} is not eligible`);
            }
    }
}

const Riya=new student('Riya',18,1234,34);

const Hiya=new student('Hiya',15,2345,35);

const Diya=new student('Diya',16,4567,60);

const Siya=new student('Siya',17,7891,70);

const Rooh=new student('Rooh',19,3456,80);

// console.log(student.countStudent());
console.log(student.count);

Riya.eligible();

Hiya.eligible();

Diya.eligible();

Siya.eligible();

Rooh.eligible();