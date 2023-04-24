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
//      - Cách 1: thay đôi trực tiếp
//      - Cách 2: sử dụng callback

// Cơ chế: Mỗi khi state thay đổi thì component sẽ được re-render
// Nếu có nhiều hơn 1 state được thay đổi trong 1 sự kiện nào đó, thì component chỉ re-render 1 lần

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

function UseState(){
    const [number, setNumber] = useState(0);
    const handleIncreament = () => {
        setNumber((prev) => prev + 1)
        setNumber((prev) =>  prev + 1)
        setNumber((prev) =>  prev + 1)
    }
    console.log('re-render');
    return (
        <div className="container">
            <h1>{number}</h1>
            <button onClick={handleIncreament}>Increment</button>
        </div>
    )
}
export default UseState;