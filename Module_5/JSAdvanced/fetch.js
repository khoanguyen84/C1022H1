// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(function(res){
//         return res.json()
//     })
//     .then(function(posts){
//         console.log(posts);
//     })
//     .catch(function(){
//         console.log("Error");
//     })
//     .finally(function(){
//         console.log("Done");
//     })
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(async function(res){
        let posts = await res.json()
        console.log(posts);
    })