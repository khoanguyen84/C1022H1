// toán tử spread sử dụng cho array, object
// pass_by_value: truyền tham trị. Sử dụng cho các kiểu dữ liệu nguyên thủy
// pass_by_reference: truyền tham chiếu. Sử dụng cho array, object, function

// let jobs_1 = ["java", "react", "angular"];
// let jobs_2 = [...jobs_1];
// // let jobs_2 = jobs_1;
// jobs_2[2] = "vuejs";

// console.log(jobs_1);
// console.log(jobs_2);

let obj_1 = {
    name: "Cường",
    age: 18,
    gender: true
}

// let obj_2 = obj_1;
// let obj_2 = { ...obj_1 }
// obj_2.name = "Hà";
let obj_2 = {
    ...obj_1,
    name: "Hà",
    email: "ha@gmail.com"
}
// console.log(obj_1);
// console.log(obj_2);


let khoa = {
    fullname: "Khoa",
    language: {
        name: "English",
        level: "B1"
    }
}

let cuong = {
    ...khoa,
    fullname: "Cường"
}
// let cuong = JSON.parse(JSON.stringify(khoa))

// let cuong = {
//     ...khoa,
//     fullname: "Cường",
//     language: {
//         ...khoa.language
//     }
// }

cuong.language.level = "B2"

console.log(khoa);
console.log(cuong);