// convert các kiểu dữ liệu => boolean
// false => false
// 0 => false
// null => false
// '' => false
// undefined => false
// NaN => false

let fullname = "";
// if(fullname != null && fullname != ''){
//     console.log(fullname);
// }
// else{
//     console.log("No name");
// }

console.log(fullname || "No name");

let obj = {}

console.log(obj || 'null');


let array = []

console.log(array || 'empty');