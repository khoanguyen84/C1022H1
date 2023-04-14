// dành cho array và object
let jobs = ["java", "react", "angular"];

// let java = jobs[0];
// let react = jobs[2];
// let angular = jobs[2];

let [job_1, , job_3] = jobs;

console.log(job_1, job_3);

let obj = {
    fullname: "khoa",
    age: 18,
    hello: function () {
        return 'Hello anh em'
    }
}

// let { age, hello } = obj;
// console.log(obj.hello())
// console.log(hello())
// console.log(age)

let { ...rest } = obj
console.log(rest);