// setTimeout(function () {
//     console.log(1);
//     setTimeout(function () {
//         console.log(2);
//         setTimeout(function () {
//             console.log(3);
//         }, 1000)
//     }, 2000)
// }, 3000)

let promise = new Promise(
    function executor(resolve, reject)
    {
        // nghiệp vụ
        let number = 5;
        if(number >= 5){
            return resolve(1)
        }
        return reject()
    }
)

// promise chain

promise
    .then(function(data){
        console.log(data);
        return ++data;
    })
    .then(function(data){
        console.log(data);
        return ++data;
    })
    .then(function(data){
        console.log(data);
        return ++data;
    })
    .catch(function(){
        console.log("Error");
    })
    .finally(function(){
        console.log("Done");
    })

