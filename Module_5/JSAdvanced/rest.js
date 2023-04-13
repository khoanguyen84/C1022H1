// parameter (tham số) vs argument (đối số)

// console.log(5,5);

// function sum() {
//     let total = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         total += arguments[i]
//     }
//     return "Tổng cộng là: " + total;
// }


function sum(msg, n1, ...rest) {
    let total = 0;
    for (let i = 0; i < rest.length; i++) {
        total += rest[i]
    }
    return msg + ": " + total;
}

console.log(sum("Tổng cộng là", 5, 3, 3, 5, 56, 6, 5, 4, 3, 3, 3, 5, 5, 5, 3, 3, 3, 5, 6, 6, 6));
console.log(sum("Total", 5, 3, 3, 5, 56, 6, 5, 4, 3, 3, 3, 5, 5, 5, 3, 3, 3, 5, 6, 6, 6));