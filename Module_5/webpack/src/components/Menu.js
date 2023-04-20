import React from "react";

function Menu() {
    let menus = ["Home", "About", "News"];
    return (
        <ul>
            {
                menus.map((menu)=> (
                    <li>{menu}</li>
                ))
            }
        </ul>
    )
}

export default Menu;