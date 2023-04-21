import React, { useState } from "react";

// const [state, setState] = useState(initState);
// + ý nghĩa: dùng để quản lý sự thay đổi của trang thái nào đó (ví dụ là dữ liệu)
// + input: initState
//      + Các kiểu dữ liệu nguyên thủy (number, string, boolean, null)
//      + Các kiểu object: array, object
//      + Callback/function
// + output: mảng, có 2 giá trị. Quy tắc: giá trị 1 kiểu liệu nào đó, giá trị 2 là 1 hàm
// các thức hoạt động
// + Lần đầu tiên state = initState
// + Sử dụng setState để cập lại trạng thái (giá trị) của state

// Cơ chế: Mỗi khi state thay đổi thì component sẽ được re-render

// function UseState(){
//     console.log(`re-render`);
//     const handleIncrement = () => {
//         document.querySelector('#number').innerText = 
//             Number(document.querySelector('#number').innerText) + 1 
//     }
//     return (
//         <div className="container">
//             <h1 id="number">0</h1>
//             <button onClick={handleIncrement}>Increament</button>
//         </div>
//     )
// }

console.log('init');
function UseState(){
    const [number, setNumber] = useState(0);
    console.log(`re-render ${number}`);
    return (
        <div className="container">
            <h1>{number}</h1>
            <button onClick={() => setNumber(number + 1)}>Increment</button>
        </div>
    )
}
export default UseState;