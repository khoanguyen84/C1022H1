import React, { useState, useEffect } from "react";
import ChildrenComponent from "./ChildrenComponent";

// useEffect: quản lý side effect
// + mounted: khi component được gắn vào DOM
// + unmouted: khi component được gỡ khỏi DOM
// useEffect(callback, [deps])
// có 3 trường hợp:
// useEffect(callback)
//      + callback sẽ luôn được gọi khi component được re-render
// useEffect(callback, [])
//      + callback chỉ được gọi 1 lần duy nhất khi component được mouted vào DOM
// useEffect(callback, [deps])
//      + callback chỉ được gọi khi giá trị trong [deps] thay đổi
function UseEffect(){
    const [showChildren, setShowChildren] = useState(false);
    const caption = "List Post";
    const sayHi = () => alert('Hello everyone!');
    return (
        <div className="container">
            <button onClick={() => setShowChildren(!showChildren)}>Toggle Children</button>
            {
                showChildren && <ChildrenComponent caption = {caption} sayHi = {sayHi}/>
            }
        </div>
    )
}

export default UseEffect;
