// hoisting
// khai báo biến var
// declaration function

// scope (phạm vị)
// 1. global (toàn cục)
// 2. local (cục bộ)
// 3. blockcode (khối lệnh)

// khai báo biến bằng từ khóa var
// 1. biến này có phạm vi global
// 2. vùng nhớ của biến này sẽ được dùng lại

// khai báo biến bằng từ khóa let
// 1. biến này có phạm vi blockcode
// 2. vùng nhớ của biến này sẽ ko được dùng lại


// var i;
// for (i = 0; i < 10; i++) {
//     console.log(i);
// }

// console.log(`i outside for ${i}`);
// var age;
let age = 100;
{
    console.log(age);
    {
        let age = 10;
        console.log(age);
        {
            {
                let age = 20;
                console.log(age);
            }
            console.log(age);
        }
    }
}