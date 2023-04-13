// 1. Declaration Function
sum(10, 20);

function sum(n1, n2) {
    console.log(n1 + n2);
}

// 2. Expression Function

// const times = function (n1, n2) {
//     console.log(n1 * n2);
// }

// const times = (n1, n2) => console.log(n1 * n2);

// times(10, 20)

// const alert = function(mgs) {
//     console.log(`[Infor]: ${mgs}`);
// }
// const alert = (mgs) => console.log(`[Infor]: ${mgs}`);

// alert("CodeGym")

// const slogen = function(){
//     return '1 + 1 = 2';
// }

// const slogen = () => '1 + 1 = 2';

// console.log(slogen());
// 3. Anonymous/Callback Function

let numbers = [1, 3, 5, 65, 6, 6];


// let result = numbers.reduce(function (prev, curr) {
//     return prev + curr;
// })
let result = numbers.reduce((prev, curr) => prev + curr)

console.log(result);
// console.log(process(3, 3));
// 4. Class
// function Student() {
//     // 5. Method
//     this.hello = function () {
//         console.log("hello anh em");
//     }

// }
class Student {
    // 5. Method
    hello() {
        console.log("hello anh em");
    }
}

let huy = new Student();
huy.hello();