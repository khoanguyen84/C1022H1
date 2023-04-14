// callback
// 1. Phải là 1 hàm
// 2. Hàm này phải được truyền vào 1 hàm khác qua argrument
// 3. Nó phải được thực thi (gọi)

function callback(n1, n2) {
    return n1 + n2;
}
function callback_2(n1, n2) {
    return n1 * n2;
}

function useCallback(params) {
    console.log(params(10, 20))
}

useCallback(callback)
useCallback(callback_2)
useCallback(function(n1, n2){
    return n1/n2;
})

// function useCallback_2() {
//     console.log(callback(20, 20))
// }
// useCallback_2();
// function useCallback_3() {
//     console.log(callback_2(20, 20))
// }
// useCallback_3();



// function func_1(n1) {
//     return n1 + 5;
// }


// function func_2() {
//     const func_3 = function (n3) {
//         return n3 + 10
//     }
//     const func_4 = function (n3) {
//         return n3 + 10
//     }
//     console.log(func_3(10) + func_1(10))

//     return {
//         f3: func_3,
//         f4: func_4
//     };
// }


// let obj = {
//     "func_3": func_3,
//     "func_4": func_4
// }

// let result = func_2()
// console.log(result.f3(100))