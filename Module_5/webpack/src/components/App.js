import React from "react";
import Paragraph from "./Paragraph";

function App(){
    // JSX
    return (
        <div className="container">
            <h1>Hello Anh Em!</h1>
            <h2>CodeGym Huế</h2>
            <Paragraph/>
        </div>
    )
}

// class App extends React.Component {
//     render() {
//         return (
//             <div className="container">
//                 <h1 className="heading_1">Hello Anh Em!</h1>
//                 <h2>CodeGym Huế</h2>
//             </div>
//         )
//     }
// }

export default App;